"""
Word-level forced alignment using OpenAI Whisper.
Processes each MP3 and outputs word timestamps as JSON.
Usage: python word_sync.py
"""

import whisper
import json
import os

AUDIO_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'audio')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'scripts', 'output')

SONGS = [
    {
        'id': 'captivated',
        'file': 'IV OF SPADES - Captivated.mp3',
    },
    {
        'id': 'pink-white',
        'file': 'Frank Ocean - Pink  White.mp3',
    },
    {
        'id': 'pahintulot',
        'file': 'Pahintulot - Shirebound.mp3',
    },
    {
        'id': 'your-universe',
        'file': 'Your Universe - Rico Blanco.mp3',
    },
]

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Use "base" model — good balance of speed and accuracy
    print("Loading Whisper model (base)...")
    model = whisper.load_model("base")

    for song in SONGS:
        audio_path = os.path.join(AUDIO_DIR, song['file'])
        if not os.path.exists(audio_path):
            print(f"  SKIP: {audio_path} not found")
            continue

        print(f"\nProcessing: {song['id']} ({song['file']})")
        print("  Transcribing with word timestamps...")

        result = model.transcribe(
            audio_path,
            word_timestamps=True,
            language=None,  # auto-detect (handles English + Tagalog)
        )

        # Extract word-level data
        words = []
        for segment in result['segments']:
            for w in segment.get('words', []):
                words.append({
                    'word': w['word'].strip(),
                    'start': round(w['start'], 2),
                    'end': round(w['end'], 2),
                })

        output = {
            'id': song['id'],
            'language': result.get('language', 'unknown'),
            'words': words,
            'segments': [
                {
                    'start': round(s['start'], 2),
                    'end': round(s['end'], 2),
                    'text': s['text'].strip(),
                    'words': [
                        {
                            'word': w['word'].strip(),
                            'start': round(w['start'], 2),
                            'end': round(w['end'], 2),
                        }
                        for w in s.get('words', [])
                    ],
                }
                for s in result['segments']
            ],
        }

        out_path = os.path.join(OUTPUT_DIR, f"{song['id']}.json")
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)

        print(f"  ✓ {len(words)} words found → {out_path}")

    print("\n✓ All done! Word timestamps saved to scripts/output/")

if __name__ == '__main__':
    main()
