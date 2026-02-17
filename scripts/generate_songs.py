"""
Merges lrclib line-level structure with Whisper word-level timestamps.
Outputs a new songs.js with per-word timing inside each line.

Strategy:
1. Keep lrclib's verse/line structure (correct lyrics + line timestamps)
2. For each line, fuzzy-match its words against Whisper's word list
3. Assign Whisper's start time to each matched word
4. For unmatched words (ooh/ooh), fall back to even distribution within the line
"""

import json
import os
import re
from difflib import SequenceMatcher

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, 'output')

# Current songs.js line data extracted (lrclib timestamps)
# We'll read the whisper output and match words

def normalize(word):
    """Normalize a word for fuzzy matching."""
    w = word.lower().strip()
    w = re.sub(r"[''`]", "'", w)
    w = re.sub(r'[^a-z0-9\'\-áéíóúñ]', '', w)
    return w

def load_whisper_words(song_id):
    """Load whisper word timestamps for a song."""
    path = os.path.join(OUTPUT_DIR, f'{song_id}.json')
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data['words']

def match_words_to_line(line_words, whisper_words, line_start, line_end):
    """
    Match line_words against whisper_words using time-window proximity.
    Only considers whisper words that fall within [line_start-1, line_end+1].
    Returns list of { word, start, end }.
    """
    # Get whisper words in the time window
    window = [
        w for w in whisper_words
        if w['start'] >= line_start - 1.5 and w['start'] <= line_end + 1.0
    ]
    
    results = []
    wi = 0  # Position within the window
    
    for lw in line_words:
        norm_lw = normalize(lw)
        if not norm_lw:
            results.append({'word': lw, 'start': None, 'end': None})
            continue
        
        best_idx = None
        best_score = 0
        search_limit = min(wi + 8, len(window))
        
        for j in range(wi, search_limit):
            ww = window[j]
            norm_ww = normalize(ww['word'])
            
            if norm_ww == norm_lw:
                best_idx = j
                best_score = 1.0
                break
            
            score = SequenceMatcher(None, norm_lw, norm_ww).ratio()
            if score > best_score and score >= 0.5:
                best_score = score
                best_idx = j
        
        if best_idx is not None:
            ww = window[best_idx]
            results.append({
                'word': lw,
                'start': ww['start'],
                'end': ww['end'],
            })
            wi = best_idx + 1
        else:
            results.append({'word': lw, 'start': None, 'end': None})
    
    fill_missing_timestamps(results, line_start, line_end)
    
    return results

def fill_missing_timestamps(results, line_start, line_end):
    """Fill missing timestamps by interpolating."""
    total = len(results)
    if total == 0:
        return
    
    duration = line_end - line_start
    for i, r in enumerate(results):
        if r['start'] is None:
            # Evenly distribute within line
            r['start'] = round(line_start + (i / max(1, total)) * duration, 2)
            r['end'] = round(line_start + ((i + 1) / max(1, total)) * duration, 2)

def process_song(song_id, verses):
    """Process a song: match whisper words to lrclib lines."""
    try:
        whisper_words = load_whisper_words(song_id)
    except FileNotFoundError:
        print(f"  No whisper data for {song_id}, keeping line-level timing")
        return verses
    
    for verse in verses:
        for li, line in enumerate(verse['lines']):
            text = line['text']
            if not text.strip() or text.startswith('['):
                continue
            
            line_start = line['time']
            # Next line start or verse end
            if li + 1 < len(verse['lines']):
                line_end = verse['lines'][li + 1]['time']
            else:
                line_end = line_start + 8  # fallback
            
            words = text.split()
            matched = match_words_to_line(words, whisper_words, line_start, line_end)
            
            line['words'] = [
                {'word': m['word'], 'start': m['start'], 'end': m['end']}
                for m in matched
            ]
    
    return verses

# Songs data with lrclib structure
SONGS_META = [
    {
        'id': 'captivated',
        'title': 'Captivated',
        'artist': 'IV of Spades',
        'audioSrc': '/audio/IV OF SPADES - Captivated.mp3',
        'timeOffset': 0,
        'theme': {
            'bg1': '#1a0608', 'bg2': '#4a1020', 'bg3': '#2a0510',
            'accent': '#f9a8d4', 'accentRgb': '249, 168, 212',
            'glow1': 'rgba(249, 168, 212, 0.3)', 'glow2': 'rgba(244, 114, 182, 0.18)',
            'textPrimary': '#fdf2f8', 'textDimmed': 'rgba(252, 231, 243, 0.4)',
            'textMuted': 'rgba(252, 231, 243, 0.12)',
            'cardBorder': 'rgba(249, 168, 212, 0.1)',
            'particles': ['#f9a8d4', '#f472b6', '#fda4af', '#fb7185'],
        },
        'verses': [
            { 'time': 4.21, 'label': 'Intro', 'lines': [
                { 'time': 4.21, 'text': 'Ooh, ooh-ooh' },
                { 'time': 8.08, 'text': 'Ooh, ooh-ooh-ooh, ooh-ooh-ooh' },
                { 'time': 12.57, 'text': 'Ooh, ooh-ooh' },
                { 'time': 16.59, 'text': 'Ooh, ooh-ooh-ooh, ooh-ooh-ooh' },
                { 'time': 21.01, 'text': 'Ooh, ooh, ooh' },
                { 'time': 25.10, 'text': 'Ooh, ooh, ooh' },
            ]},
            { 'time': 30.32, 'label': 'Verse 1', 'lines': [
                { 'time': 30.32, 'text': "You're the one that I want to be with" },
                { 'time': 34.19, 'text': 'Never want to be separated, oh' },
                { 'time': 39.96, 'text': "I'm captivated" },
            ]},
            { 'time': 45.52, 'label': None, 'lines': [
                { 'time': 45.52, 'text': "Everyone says you're complicated" },
                { 'time': 49.33, 'text': "Every day, you're my most awaited, oh" },
                { 'time': 55.45, 'text': "I'm captivated" },
            ]},
            { 'time': 62.10, 'label': 'Pre-Chorus', 'lines': [
                { 'time': 62.10, 'text': "Oh, they don't see you as I do" },
                { 'time': 66.51, 'text': 'You are so beautiful' },
                { 'time': 70.54, 'text': 'Come breathe within my soul' },
                { 'time': 74.71, 'text': 'Let go' },
            ]},
            { 'time': 78.95, 'label': 'Chorus', 'lines': [
                { 'time': 78.95, 'text': 'Oh, my love' },
                { 'time': 82.92, 'text': "You don't have to listen to a word they say" },
                { 'time': 91.27, 'text': "'Cause all that really matters is that I love you" },
                { 'time': 99.31, 'text': 'I really do' },
            ]},
            { 'time': 105.03, 'label': 'Verse 2', 'lines': [
                { 'time': 105.03, 'text': 'Oh, I need you, and I really hate it' },
                { 'time': 108.92, 'text': 'But I never get tired of waiting' },
                { 'time': 115.23, 'text': "I'm captivated" },
            ]},
            { 'time': 121.41, 'label': 'Pre-Chorus', 'lines': [
                { 'time': 121.41, 'text': "Oh, they don't see you as I do" },
                { 'time': 125.94, 'text': 'You are so beautiful' },
                { 'time': 129.78, 'text': 'Come breathe within my soul' },
                { 'time': 133.80, 'text': 'Let go' },
            ]},
            { 'time': 138.18, 'label': 'Chorus', 'lines': [
                { 'time': 138.18, 'text': 'Oh, my love' },
                { 'time': 141.98, 'text': "You don't have to listen to a word they say" },
                { 'time': 150.55, 'text': "'Cause all that really matters is that I love you" },
                { 'time': 159.24, 'text': 'I really do' },
            ]},
            { 'time': 163.70, 'label': None, 'lines': [
                { 'time': 163.70, 'text': 'Oh, my love' },
                { 'time': 168.14, 'text': "You don't have to listen to a word they say" },
                { 'time': 176.21, 'text': "'Cause all that really matters is that I love you" },
                { 'time': 184.69, 'text': 'I really do' },
            ]},
        ],
    },
    {
        'id': 'pink-white',
        'title': 'Pink + White',
        'artist': 'Frank Ocean',
        'audioSrc': '/audio/Frank Ocean - Pink  White.mp3',
        'timeOffset': 0,
        'theme': {
            'bg1': '#140010', 'bg2': '#2e1065', 'bg3': '#1a0a30',
            'accent': '#c4b5fd', 'accentRgb': '196, 181, 253',
            'glow1': 'rgba(196, 181, 253, 0.3)', 'glow2': 'rgba(167, 139, 250, 0.18)',
            'textPrimary': '#ede9fe', 'textDimmed': 'rgba(221, 214, 254, 0.4)',
            'textMuted': 'rgba(221, 214, 254, 0.12)',
            'cardBorder': 'rgba(196, 181, 253, 0.1)',
            'particles': ['#c4b5fd', '#a78bfa', '#e9d5ff', '#ddd6fe'],
        },
        'verses': [
            { 'time': 3.89, 'label': 'Intro', 'lines': [
                { 'time': 3.89, 'text': 'Yeah, yeah oh' },
                { 'time': 6.83, 'text': 'Yeah, yeah yeah' },
            ]},
            { 'time': 9.92, 'label': 'Verse 1', 'lines': [
                { 'time': 9.92, 'text': "That's the way everyday goes" },
                { 'time': 12.37, 'text': "Every time we've no control" },
                { 'time': 14.52, 'text': 'If the sky is pink and white' },
                { 'time': 16.73, 'text': 'If the ground is black and yellow' },
                { 'time': 19.04, 'text': "It's the same way you showed me" },
            ]},
            { 'time': 23.43, 'label': None, 'lines': [
                { 'time': 23.43, 'text': "Nod my head, don't close my eyes" },
                { 'time': 25.89, 'text': 'Halfway on a slow move' },
                { 'time': 28.19, 'text': "It's the same way you showed me" },
            ]},
            { 'time': 32.60, 'label': None, 'lines': [
                { 'time': 32.60, 'text': "If you could fly then you'd feel south" },
                { 'time': 34.77, 'text': "Up north's getting cold soon" },
                { 'time': 36.96, 'text': "The way it is, we're on land" },
                { 'time': 38.93, 'text': "So I'm someone to hold true" },
                { 'time': 41.54, 'text': "Keep you cool when it's still alive" },
                { 'time': 43.44, 'text': "Won't let you down when it's all ruin" },
            ]},
            { 'time': 46.12, 'label': 'Chorus', 'lines': [
                { 'time': 46.12, 'text': 'Just the same way you showed me, showed me' },
                { 'time': 53.57, 'text': 'You showed me love' },
                { 'time': 59.58, 'text': 'Glory from above' },
                { 'time': 62.50, 'text': 'Regard my dear' },
                { 'time': 68.34, 'text': "It's all downhill from here" },
            ]},
            { 'time': 72.90, 'label': 'Verse 2', 'lines': [
                { 'time': 72.90, 'text': 'In the wake of a hurricane' },
                { 'time': 75.57, 'text': 'Dark skin of a summer shade' },
                { 'time': 77.76, 'text': 'Nosedive in the flood lines' },
                { 'time': 79.67, 'text': 'Tall tower of milk crates' },
                { 'time': 82.17, 'text': "It's the same way you showed me" },
            ]},
            { 'time': 86.33, 'label': None, 'lines': [
                { 'time': 86.33, 'text': 'Cannonball off the porch side' },
                { 'time': 88.80, 'text': 'Older kids trying off the roof' },
                { 'time': 91.03, 'text': 'Just the same way you showed me' },
            ]},
            { 'time': 95.40, 'label': None, 'lines': [
                { 'time': 95.40, 'text': 'If you could die and come back to life' },
                { 'time': 97.82, 'text': 'Up for air from the swimming pool' },
                { 'time': 100.13, 'text': "You'd kneel down to the dry land" },
                { 'time': 102.34, 'text': 'Kiss the Earth that birthed you' },
                { 'time': 104.64, 'text': 'Gave you tools just to stay alive' },
                { 'time': 106.61, 'text': 'And make it out when the sun is ruined' },
            ]},
            { 'time': 109.16, 'label': 'Chorus', 'lines': [
                { 'time': 109.16, 'text': "That's the same way you showed me, showed me" },
                { 'time': 116.58, 'text': 'You showed me love' },
                { 'time': 122.66, 'text': 'Glory from above' },
                { 'time': 125.69, 'text': 'Regard my dear' },
                { 'time': 131.27, 'text': "It's all downhill from here" },
            ]},
            { 'time': 136.45, 'label': 'Outro', 'lines': [
                { 'time': 136.45, 'text': 'Remember life' },
                { 'time': 138.88, 'text': 'Remember how it was' },
                { 'time': 140.94, 'text': 'Climb trees, Michael Jackson, it all ends here' },
                { 'time': 145.42, 'text': 'Say what up to Matthew, to Shoob' },
                { 'time': 149.92, 'text': 'Say what up to Danny' },
            ]},
            { 'time': 152.19, 'label': None, 'lines': [
                { 'time': 152.19, 'text': 'Say what up to life immortality' },
                { 'time': 156.67, 'text': 'Bending up my Nikes' },
                { 'time': 157.84, 'text': 'Running out the melpomene, nicotine' },
                { 'time': 161.06, 'text': 'Stealing granny cigs' },
                { 'time': 163.45, 'text': 'Gimme something sweet' },
                { 'time': 170.10, 'text': 'This is life, life immortality' },
            ]},
        ],
    },
    {
        'id': 'pahintulot',
        'title': 'Pahintulot',
        'artist': 'Shirebound & Busking',
        'audioSrc': '/audio/Pahintulot - Shirebound.mp3',
        'timeOffset': 0,
        'theme': {
            'bg1': '#0a0a14', 'bg2': '#1c1033', 'bg3': '#0f0820',
            'accent': '#fbbf24', 'accentRgb': '251, 191, 36',
            'glow1': 'rgba(251, 191, 36, 0.25)', 'glow2': 'rgba(245, 158, 11, 0.15)',
            'textPrimary': '#fefce8', 'textDimmed': 'rgba(254, 249, 195, 0.4)',
            'textMuted': 'rgba(254, 249, 195, 0.12)',
            'cardBorder': 'rgba(251, 191, 36, 0.08)',
            'particles': ['#fbbf24', '#f59e0b', '#fde68a', '#fcd34d'],
        },
        'verses': [
            { 'time': 14.06, 'label': 'Intro', 'lines': [
                { 'time': 14.06, 'text': 'Giliw, kung pahihintulutan mo ako' },
                { 'time': 27.04, 'text': "Ipagkakatiwala ko sana sa 'yo ang puso ko" },
            ]},
            { 'time': 55.81, 'label': 'Verse 1', 'lines': [
                { 'time': 55.81, 'text': 'Alamat lang ba ang pahinga' },
                { 'time': 63.77, 'text': 'Ng dalawang puyat sa' },
                { 'time': 72.02, 'text': 'Pira-pirasong mga bugtong?' },
                { 'time': 78.98, 'text': 'Nagtatanong' },
            ]},
            { 'time': 83.43, 'label': None, 'lines': [
                { 'time': 83.43, 'text': "Sagot ay 'di mahalaga" },
                { 'time': 90.08, 'text': "Sapat na sa 'king nar'yan ka" },
                { 'time': 96.42, 'text': 'Paumanhin, paumanhin' },
                { 'time': 104.25, 'text': 'Salat sa kasanayang linawin' },
            ]},
            { 'time': 111.42, 'label': 'Chorus', 'lines': [
                { 'time': 111.42, 'text': 'Giliw, kung pahihintulutan mo ako' },
                { 'time': 124.41, 'text': "Ay ipapakilala ko sana sa 'yo ang buong mundo" },
            ]},
            { 'time': 153.17, 'label': 'Verse 2', 'lines': [
                { 'time': 153.17, 'text': 'Balagtasan ng nagtatapatang' },
                { 'time': 163.06, 'text': 'Makatang maligalig ang mga tugma' },
                { 'time': 173.75, 'text': 'Limot na kung paano ang umasa' },
            ]},
            { 'time': 194.92, 'label': 'Chorus', 'lines': [
                { 'time': 194.92, 'text': 'Giliw, kung pahihintulutan mo ako' },
                { 'time': 208.57, 'text': "Ang aking hangganan ay ipapamalas ko sa 'yo" },
            ]},
            { 'time': 250.63, 'label': 'Outro', 'lines': [
                { 'time': 250.63, 'text': "Giliw, 'pinakikiusap ko sa 'yo" },
                { 'time': 264.50, 'text': "Sana'y pakaiingatan 'yang puso ko" },
            ]},
        ],
    },
    {
        'id': 'your-universe',
        'title': 'Your Universe',
        'artist': 'Rico Blanco',
        'audioSrc': '/audio/Your Universe - Rico Blanco.mp3',
        'timeOffset': 0,
        'theme': {
            'bg1': '#0f0318', 'bg2': '#3b0764', 'bg3': '#1a0530',
            'accent': '#e879f9', 'accentRgb': '232, 121, 249',
            'glow1': 'rgba(232, 121, 249, 0.3)', 'glow2': 'rgba(192, 132, 252, 0.18)',
            'textPrimary': '#fae8ff', 'textDimmed': 'rgba(245, 208, 254, 0.4)',
            'textMuted': 'rgba(245, 208, 254, 0.12)',
            'cardBorder': 'rgba(232, 121, 249, 0.1)',
            'particles': ['#e879f9', '#d946ef', '#f0abfc', '#c084fc'],
        },
        'verses': [
            { 'time': 0.77, 'label': 'Verse 1', 'lines': [
                { 'time': 0.77, 'text': 'Tell me something' },
                { 'time': 3.47, 'text': 'When the rain falls on my face' },
                { 'time': 8.73, 'text': 'How do you quickly replace it' },
                { 'time': 13.50, 'text': 'With a golden summer smile?' },
            ]},
            { 'time': 19.73, 'label': None, 'lines': [
                { 'time': 19.73, 'text': 'Tell me something' },
                { 'time': 22.20, 'text': "When I'm feelin' tired and afraid" },
                { 'time': 27.82, 'text': 'How do you know just what to say' },
                { 'time': 31.23, 'text': 'To make everything alright?' },
            ]},
            { 'time': 40.74, 'label': 'Chorus', 'lines': [
                { 'time': 40.74, 'text': "I don't think that you even realize" },
                { 'time': 43.54, 'text': "The joy you make me feel when I'm inside your universe" },
                { 'time': 51.61, 'text': "You hold me like I'm the one who's precious" },
                { 'time': 54.36, 'text': "I hate to break it to you, but it's just the other way around" },
            ]},
            { 'time': 61.18, 'label': None, 'lines': [
                { 'time': 61.18, 'text': 'You can thank your stars all you want' },
                { 'time': 64.36, 'text': "But I'll always be the lucky one" },
            ]},
            { 'time': 74.19, 'label': 'Verse 2', 'lines': [
                { 'time': 74.19, 'text': 'Tell me something' },
                { 'time': 77.07, 'text': "When I'm 'bout to lose control" },
                { 'time': 82.35, 'text': 'How do you patiently hold my hand' },
                { 'time': 88.38, 'text': 'And gently calm me down?' },
            ]},
            { 'time': 95.84, 'label': None, 'lines': [
                { 'time': 95.84, 'text': 'Tell me something' },
                { 'time': 98.52, 'text': 'When you sing and when you laugh' },
                { 'time': 104.02, 'text': 'Why do I always photograph' },
                { 'time': 107.59, 'text': 'My heart flying way above the clouds?' },
            ]},
            { 'time': 117.17, 'label': 'Chorus', 'lines': [
                { 'time': 117.17, 'text': "I don't think that you even realize" },
                { 'time': 119.64, 'text': "The joy you make me feel when I'm inside your universe" },
                { 'time': 127.86, 'text': "You hold me like I'm the one who's precious" },
                { 'time': 130.35, 'text': "I hate to break it to you, but it's just the other way around" },
            ]},
            { 'time': 137.44, 'label': None, 'lines': [
                { 'time': 137.44, 'text': 'You can thank your stars all you want' },
                { 'time': 140.80, 'text': "But I'll always be the lucky one" },
            ]},
            { 'time': 148.66, 'label': 'Bridge', 'lines': [
                { 'time': 148.66, 'text': 'Whoa-oh-ooh, ooh' },
                { 'time': 154.01, 'text': 'Whoa-oh-ooh, ooh' },
                { 'time': 159.37, 'text': 'Whoa-oh-ooh, ooh, ooh' },
            ]},
            { 'time': 171.53, 'label': 'Chorus', 'lines': [
                { 'time': 171.53, 'text': "I don't think that you even realize" },
                { 'time': 174.28, 'text': "The joy you make me feel when I'm inside your universe" },
                { 'time': 182.51, 'text': "You hold me like I'm the one who's precious" },
                { 'time': 185.34, 'text': "I hate to break it to you, but it's just the other way around" },
            ]},
            { 'time': 192.22, 'label': None, 'lines': [
                { 'time': 192.22, 'text': 'You can thank your stars all you want' },
                { 'time': 195.11, 'text': "But I'll always be the lucky one" },
            ]},
            { 'time': 203.16, 'label': 'Outro', 'lines': [
                { 'time': 203.16, 'text': 'You can thank your stars all you want' },
                { 'time': 206.16, 'text': "But I'll always be the lucky one" },
                { 'time': 218.05, 'text': "I'll always be the lucky one" },
                { 'time': 226.31, 'text': "I'll always be the lucky one" },
            ]},
        ],
    },
]

def escape_js(s):
    """Escape a string for JS single-quoted string."""
    return s.replace('\\', '\\\\').replace("'", "\\'")

def format_words_js(words):
    """Format word array as JS."""
    parts = []
    for w in words:
        escaped = escape_js(w['word'])
        parts.append(f"{{ w: '{escaped}', s: {w['start']}, e: {w['end']} }}")
    return ', '.join(parts)

def format_theme_js(theme, indent):
    """Format theme object as JS."""
    lines = [f"{indent}theme: {{"]
    for key, val in theme.items():
        if isinstance(val, list):
            items = ', '.join(f"'{v}'" for v in val)
            lines.append(f"{indent}  {key}: [{items}],")
        else:
            lines.append(f"{indent}  {key}: '{val}',")
    lines.append(f"{indent}}},")
    return '\n'.join(lines)

def generate_songs_js():
    """Generate the final songs.js with word-level timestamps."""
    
    # Process each song
    for song in SONGS_META:
        print(f"Processing {song['id']}...")
        song['verses'] = process_song(song['id'], song['verses'])
    
    # Generate JS
    js_lines = []
    js_lines.append("/*")
    js_lines.append(" * LYRICS STRUCTURE  (synced via lrclib.net + OpenAI Whisper)")
    js_lines.append(" * ────────────────")
    js_lines.append(" * Line timestamps: lrclib.net (millisecond precision)")
    js_lines.append(" * Word timestamps: OpenAI Whisper forced alignment")
    js_lines.append(" *")
    js_lines.append(" * Each line has a `words` array: [{ w: 'word', s: startSec, e: endSec }, ...]")
    js_lines.append(" * The VerseDisplay component highlights each word as currentTime passes its `s` value.")
    js_lines.append(" */")
    js_lines.append("")
    js_lines.append("export const songs = [")
    
    for si, song in enumerate(SONGS_META):
        js_lines.append(f"  /* {'═' * 55}")
        js_lines.append(f"     {si+1}.  {song['title']} — {song['artist']}")
        js_lines.append(f"     {'═' * 55} */")
        js_lines.append("  {")
        js_lines.append(f"    id: '{song['id']}',")
        js_lines.append(f"    title: '{song['title']}',")
        js_lines.append(f"    artist: '{song['artist']}',")
        js_lines.append(f"    audioSrc: '{song['audioSrc']}',")
        js_lines.append(f"    cover: null,")
        js_lines.append(f"    timeOffset: {song['timeOffset']},")
        js_lines.append(format_theme_js(song['theme'], '    '))
        js_lines.append("    verses: [")
        
        for verse in song['verses']:
            label_js = f"'{verse['label']}'" if verse['label'] else 'null'
            js_lines.append("      {")
            js_lines.append(f"        time: {verse['time']},")
            js_lines.append(f"        label: {label_js},")
            js_lines.append("        lines: [")
            
            for line in verse['lines']:
                if 'words' in line and line['words']:
                    words_js = format_words_js(line['words'])
                    js_lines.append(f"          {{ time: {line['time']}, text: '{escape_js(line['text'])}', words: [{words_js}] }},")
                else:
                    js_lines.append(f"          {{ time: {line['time']}, text: '{escape_js(line['text'])}' }},")
            
            js_lines.append("        ],")
            js_lines.append("      },")
        
        js_lines.append("    ],")
        js_lines.append("  },")
        if si < len(SONGS_META) - 1:
            js_lines.append("")
    
    js_lines.append("]")
    js_lines.append("")
    
    # Write output
    out_path = os.path.join(SCRIPT_DIR, '..', 'src', 'data', 'songs.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(js_lines))
    
    print(f"\n✓ Generated {out_path}")

if __name__ == '__main__':
    generate_songs_js()
