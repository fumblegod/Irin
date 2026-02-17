/*
 * LYRICS STRUCTURE  (synced via lrclib.net + OpenAI Whisper)
 * ────────────────
 * Line timestamps: lrclib.net (millisecond precision)
 * Word timestamps: OpenAI Whisper forced alignment
 *
 * Each line has a `words` array: [{ w: 'word', s: startSec, e: endSec }, ...]
 * The VerseDisplay component highlights each word as currentTime passes its `s` value.
 */

export const songs = [
  /* ═══════════════════════════════════════════════════════
     1.  Captivated — IV of Spades
     ═══════════════════════════════════════════════════════ */
  {
    id: 'captivated',
    title: 'Captivated',
    artist: 'IV of Spades',
    audioSrc: '/audio/IV OF SPADES - Captivated.mp3',
    cover: '/images/Captivated.png',
    timeOffset: 0,
    theme: {
      bg1: '#1a0608',
      bg2: '#4a1020',
      bg3: '#2a0510',
      accent: '#f9a8d4',
      accentRgb: '249, 168, 212',
      glow1: 'rgba(249, 168, 212, 0.3)',
      glow2: 'rgba(244, 114, 182, 0.18)',
      textPrimary: '#fdf2f8',
      textDimmed: 'rgba(252, 231, 243, 0.4)',
      textMuted: 'rgba(252, 231, 243, 0.12)',
      cardBorder: 'rgba(249, 168, 212, 0.1)',
      particles: ['#f9a8d4', '#f472b6', '#fda4af', '#fb7185'],
    },
    verses: [
      {
        time: 4.21,
        label: 'Intro',
        lines: [
          { time: 4.21, text: 'Ooh, ooh-ooh', words: [{ w: 'Ooh,', s: 4.21, e: 6.14 }, { w: 'ooh-ooh', s: 6.14, e: 8.08 }] },
          { time: 8.08, text: 'Ooh, ooh-ooh-ooh, ooh-ooh-ooh', words: [{ w: 'Ooh,', s: 8.08, e: 9.58 }, { w: 'ooh-ooh-ooh,', s: 9.58, e: 11.07 }, { w: 'ooh-ooh-ooh', s: 11.07, e: 12.57 }] },
          { time: 12.57, text: 'Ooh, ooh-ooh', words: [{ w: 'Ooh,', s: 12.57, e: 14.58 }, { w: 'ooh-ooh', s: 14.58, e: 16.59 }] },
          { time: 16.59, text: 'Ooh, ooh-ooh-ooh, ooh-ooh-ooh', words: [{ w: 'Ooh,', s: 16.59, e: 18.06 }, { w: 'ooh-ooh-ooh,', s: 18.06, e: 19.54 }, { w: 'ooh-ooh-ooh', s: 19.54, e: 21.01 }] },
          { time: 21.01, text: 'Ooh, ooh, ooh', words: [{ w: 'Ooh,', s: 21.01, e: 22.37 }, { w: 'ooh,', s: 22.37, e: 23.74 }, { w: 'ooh', s: 23.74, e: 25.1 }] },
          { time: 25.1, text: 'Ooh, ooh, ooh', words: [{ w: 'Ooh,', s: 25.1, e: 27.77 }, { w: 'ooh,', s: 27.77, e: 30.43 }, { w: 'ooh', s: 30.43, e: 33.1 }] },
        ],
      },
      {
        time: 30.32,
        label: 'Verse 1',
        lines: [
          { time: 30.32, text: 'You\'re the one that I want to be with', words: [{ w: 'You\'re', s: 30.0, e: 30.7 }, { w: 'the', s: 30.7, e: 30.9 }, { w: 'one', s: 30.9, e: 31.26 }, { w: 'that', s: 31.26, e: 31.66 }, { w: 'I', s: 31.66, e: 31.88 }, { w: 'want', s: 31.88, e: 32.2 }, { w: 'to', s: 32.2, e: 32.64 }, { w: 'be', s: 32.64, e: 33.06 }, { w: 'with', s: 33.06, e: 33.54 }] },
          { time: 34.19, text: 'Never want to be separated, oh', words: [{ w: 'Never', s: 33.54, e: 35.16 }, { w: 'want', s: 35.15, e: 36.11 }, { w: 'to', s: 35.16, e: 35.86 }, { w: 'be', s: 35.86, e: 36.08 }, { w: 'separated,', s: 36.08, e: 37.36 }, { w: 'oh', s: 37.96, e: 38.66 }] },
          { time: 39.96, text: 'I\'m captivated', words: [{ w: 'I\'m', s: 38.66, e: 41.44 }, { w: 'captivated', s: 41.44, e: 43.02 }] },
        ],
      },
      {
        time: 45.52,
        label: null,
        lines: [
          { time: 45.52, text: 'Everyone says you\'re complicated', words: [{ w: 'Everyone', s: 44.5, e: 45.9 }, { w: 'says', s: 45.9, e: 46.4 }, { w: 'you\'re', s: 46.4, e: 47.12 }, { w: 'complicated', s: 47.12, e: 47.96 }] },
          { time: 49.33, text: 'Every day, you\'re my most awaited, oh', words: [{ w: 'Every', s: 49.0, e: 49.88 }, { w: 'day,', s: 49.88, e: 50.2 }, { w: 'you\'re', s: 50.2, e: 50.78 }, { w: 'my', s: 51.95, e: 52.83 }, { w: 'most', s: 50.78, e: 51.22 }, { w: 'awaited,', s: 51.22, e: 52.72 }, { w: 'oh', s: 52.72, e: 53.42 }] },
          { time: 55.45, text: 'I\'m captivated', words: [{ w: 'I\'m', s: 55.45, e: 59.45 }, { w: 'captivated', s: 56.22, e: 57.8 }] },
        ],
      },
      {
        time: 62.1,
        label: 'Pre-Chorus',
        lines: [
          { time: 62.1, text: 'Oh, they don\'t see you as I do', words: [{ w: 'Oh,', s: 60.88, e: 62.28 }, { w: 'they', s: 62.56, e: 62.78 }, { w: 'don\'t', s: 62.78, e: 63.44 }, { w: 'see', s: 63.44, e: 63.78 }, { w: 'you', s: 63.78, e: 64.4 }, { w: 'as', s: 64.4, e: 65.18 }, { w: 'I', s: 65.18, e: 65.6 }, { w: 'do', s: 65.6, e: 66.24 }] },
          { time: 66.51, text: 'You are so beautiful', words: [{ w: 'You', s: 66.24, e: 66.62 }, { w: 'are', s: 66.62, e: 67.0 }, { w: 'so', s: 67.0, e: 67.48 }, { w: 'beautiful', s: 67.48, e: 69.02 }] },
          { time: 70.54, text: 'Come breathe within my soul', words: [{ w: 'Come', s: 69.8, e: 70.92 }, { w: 'breathe', s: 70.92, e: 71.62 }, { w: 'within', s: 71.62, e: 72.46 }, { w: 'my', s: 72.46, e: 72.86 }, { w: 'soul', s: 72.86, e: 73.8 }] },
          { time: 74.71, text: 'Let go', words: [{ w: 'Let', s: 73.8, e: 74.78 }, { w: 'go', s: 74.78, e: 78.2 }] },
        ],
      },
      {
        time: 78.95,
        label: 'Chorus',
        lines: [
          { time: 78.95, text: 'Oh, my love', words: [{ w: 'Oh,', s: 78.2, e: 79.38 }, { w: 'my', s: 80.27, e: 81.6 }, { w: 'love', s: 80.58, e: 81.68 }] },
          { time: 82.92, text: 'You don\'t have to listen to a word they say', words: [{ w: 'You', s: 81.68, e: 83.22 }, { w: 'don\'t', s: 83.22, e: 83.68 }, { w: 'have', s: 86.16, e: 86.7 }, { w: 'to', s: 85.42, e: 86.26 }, { w: 'listen', s: 86.26, e: 87.09 }, { w: 'to', s: 87.09, e: 87.93 }, { w: 'a', s: 88.9, e: 89.5 }, { w: 'word', s: 88.77, e: 89.6 }, { w: 'they', s: 91.84, e: 92.14 }, { w: 'say', s: 90.44, e: 91.27 }] },
          { time: 91.27, text: '\'Cause all that really matters is that I love you', words: [{ w: '\'Cause', s: 91.34, e: 91.34 }, { w: 'all', s: 91.34, e: 91.84 }, { w: 'that', s: 91.84, e: 92.14 }, { w: 'really', s: 92.14, e: 92.94 }, { w: 'matters', s: 92.94, e: 94.46 }, { w: 'is', s: 95.3, e: 96.06 }, { w: 'that', s: 96.09, e: 96.9 }, { w: 'I', s: 99.4, e: 100.24 }, { w: 'love', s: 97.7, e: 98.51 }, { w: 'you', s: 98.51, e: 99.31 }] },
          { time: 99.31, text: 'I really do', words: [{ w: 'I', s: 99.4, e: 100.24 }, { w: 'really', s: 100.24, e: 101.46 }, { w: 'do', s: 101.46, e: 102.76 }] },
        ],
      },
      {
        time: 105.03,
        label: 'Verse 2',
        lines: [
          { time: 105.03, text: 'Oh, I need you, and I really hate it', words: [{ w: 'Oh,', s: 104.32, e: 105.0 }, { w: 'I', s: 105.1, e: 105.24 }, { w: 'need', s: 105.24, e: 105.38 }, { w: 'you,', s: 105.38, e: 105.76 }, { w: 'and', s: 105.76, e: 106.06 }, { w: 'I', s: 106.06, e: 106.22 }, { w: 'really', s: 106.22, e: 106.9 }, { w: 'hate', s: 106.9, e: 107.46 }, { w: 'it', s: 107.46, e: 108.22 }] },
          { time: 108.92, text: 'But I never get tired of waiting', words: [{ w: 'But', s: 108.22, e: 109.14 }, { w: 'I', s: 109.14, e: 109.42 }, { w: 'never', s: 109.42, e: 109.82 }, { w: 'get', s: 109.82, e: 110.22 }, { w: 'tired', s: 110.22, e: 110.84 }, { w: 'of', s: 110.84, e: 111.32 }, { w: 'waiting', s: 111.32, e: 112.0 }] },
          { time: 115.23, text: 'I\'m captivated', words: [{ w: 'I\'m', s: 115.23, e: 119.23 }, { w: 'captivated', s: 115.74, e: 117.5 }] },
        ],
      },
      {
        time: 121.41,
        label: 'Pre-Chorus',
        lines: [
          { time: 121.41, text: 'Oh, they don\'t see you as I do', words: [{ w: 'Oh,', s: 120.4, e: 121.72 }, { w: 'they', s: 122.02, e: 122.28 }, { w: 'don\'t', s: 122.28, e: 122.9 }, { w: 'see', s: 122.9, e: 123.32 }, { w: 'you', s: 123.32, e: 123.82 }, { w: 'as', s: 123.82, e: 124.66 }, { w: 'I', s: 124.66, e: 125.2 }, { w: 'do', s: 125.2, e: 125.72 }] },
          { time: 125.94, text: 'You are so beautiful', words: [{ w: 'You', s: 125.72, e: 126.12 }, { w: 'are', s: 126.12, e: 126.48 }, { w: 'so', s: 126.48, e: 126.96 }, { w: 'beautiful', s: 126.96, e: 128.42 }] },
          { time: 129.78, text: 'Come breathe within my soul', words: [{ w: 'Come', s: 129.72, e: 130.38 }, { w: 'breathe', s: 130.38, e: 131.08 }, { w: 'within', s: 131.08, e: 131.9 }, { w: 'my', s: 131.9, e: 132.36 }, { w: 'soul', s: 132.36, e: 133.18 }] },
          { time: 133.8, text: 'Let go', words: [{ w: 'Let', s: 133.18, e: 134.16 }, { w: 'go', s: 134.16, e: 137.0 }] },
        ],
      },
      {
        time: 138.18,
        label: 'Chorus',
        lines: [
          { time: 138.18, text: 'Oh, my love', words: [{ w: 'Oh,', s: 137.0, e: 138.66 }, { w: 'my', s: 139.45, e: 140.71 }, { w: 'love', s: 139.88, e: 140.62 }] },
          { time: 141.98, text: 'You don\'t have to listen to a word they say', words: [{ w: 'You', s: 142.0, e: 142.72 }, { w: 'don\'t', s: 142.72, e: 143.1 }, { w: 'have', s: 145.58, e: 146.18 }, { w: 'to', s: 144.55, e: 145.41 }, { w: 'listen', s: 145.41, e: 146.26 }, { w: 'to', s: 146.26, e: 147.12 }, { w: 'a', s: 148.38, e: 150.12 }, { w: 'word', s: 147.98, e: 148.84 }, { w: 'they', s: 151.38, e: 151.56 }, { w: 'say', s: 149.69, e: 150.55 }] },
          { time: 150.55, text: '\'Cause all that really matters is that I love you', words: [{ w: '\'Cause', s: 150.12, e: 150.8 }, { w: 'all', s: 150.8, e: 151.38 }, { w: 'that', s: 151.38, e: 151.56 }, { w: 'really', s: 151.56, e: 152.38 }, { w: 'matters', s: 152.38, e: 153.94 }, { w: 'is', s: 154.9, e: 155.64 }, { w: 'that', s: 155.76, e: 156.63 }, { w: 'I', s: 158.96, e: 159.66 }, { w: 'love', s: 157.5, e: 158.37 }, { w: 'you', s: 158.37, e: 159.24 }] },
          { time: 159.24, text: 'I really do', words: [{ w: 'I', s: 158.96, e: 159.66 }, { w: 'really', s: 159.66, e: 160.54 }, { w: 'do', s: 160.54, e: 162.36 }] },
        ],
      },
      {
        time: 163.7,
        label: null,
        lines: [
          { time: 163.7, text: 'Oh, my love', words: [{ w: 'Oh,', s: 162.36, e: 164.04 }, { w: 'my', s: 165.18, e: 166.66 }, { w: 'love', s: 165.36, e: 166.34 }] },
          { time: 168.14, text: 'You don\'t have to listen to a word they say', words: [{ w: 'You', s: 167.36, e: 168.18 }, { w: 'don\'t', s: 168.18, e: 168.58 }, { w: 'have', s: 171.06, e: 171.72 }, { w: 'to', s: 170.56, e: 171.37 }, { w: 'listen', s: 171.37, e: 172.18 }, { w: 'to', s: 172.18, e: 172.98 }, { w: 'a', s: 173.9, e: 175.54 }, { w: 'word', s: 173.79, e: 174.6 }, { w: 'they', s: 176.84, e: 177.08 }, { w: 'say', s: 175.4, e: 176.21 }] },
          { time: 176.21, text: '\'Cause all that really matters is that I love you', words: [{ w: '\'Cause', s: 175.54, e: 176.32 }, { w: 'all', s: 176.32, e: 176.84 }, { w: 'that', s: 176.84, e: 177.08 }, { w: 'really', s: 177.08, e: 177.9 }, { w: 'matters', s: 177.9, e: 179.4 }, { w: 'is', s: 180.4, e: 180.98 }, { w: 'that', s: 181.3, e: 182.15 }, { w: 'I', s: 184.36, e: 185.24 }, { w: 'love', s: 182.99, e: 183.84 }, { w: 'you', s: 183.84, e: 184.69 }] },
          { time: 184.69, text: 'I really do', words: [{ w: 'I', s: 184.36, e: 185.24 }, { w: 'really', s: 185.24, e: 186.38 }, { w: 'do', s: 186.38, e: 187.52 }] },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     2.  Pink + White — Frank Ocean
     ═══════════════════════════════════════════════════════ */
  {
    id: 'pink-white',
    title: 'Pink + White',
    artist: 'Frank Ocean',
    audioSrc: '/audio/Frank Ocean - Pink  White.mp3',
    cover: '/images/Pink + White.png',
    timeOffset: 0,
    theme: {
      bg1: '#140010',
      bg2: '#2e1065',
      bg3: '#1a0a30',
      accent: '#c4b5fd',
      accentRgb: '196, 181, 253',
      glow1: 'rgba(196, 181, 253, 0.3)',
      glow2: 'rgba(167, 139, 250, 0.18)',
      textPrimary: '#ede9fe',
      textDimmed: 'rgba(221, 214, 254, 0.4)',
      textMuted: 'rgba(221, 214, 254, 0.12)',
      cardBorder: 'rgba(196, 181, 253, 0.1)',
      particles: ['#c4b5fd', '#a78bfa', '#e9d5ff', '#ddd6fe'],
    },
    verses: [
      {
        time: 3.89,
        label: 'Intro',
        lines: [
          { time: 3.89, text: 'Yeah, yeah oh', words: [{ w: 'Yeah,', s: 3.89, e: 4.87 }, { w: 'yeah', s: 4.87, e: 5.85 }, { w: 'oh', s: 4.18, e: 4.86 }] },
          { time: 6.83, text: 'Yeah, yeah yeah', words: [{ w: 'Yeah,', s: 6.83, e: 9.5 }, { w: 'yeah', s: 9.5, e: 12.16 }, { w: 'yeah', s: 12.16, e: 14.83 }] },
        ],
      },
      {
        time: 9.92,
        label: 'Verse 1',
        lines: [
          { time: 9.92, text: 'That\'s the way everyday goes', words: [{ w: 'That\'s', s: 9.74, e: 10.42 }, { w: 'the', s: 10.42, e: 10.54 }, { w: 'way', s: 10.54, e: 10.78 }, { w: 'everyday', s: 10.78, e: 11.22 }, { w: 'goes', s: 11.56, e: 12.1 }] },
          { time: 12.37, text: 'Every time we\'ve no control', words: [{ w: 'Every', s: 12.1, e: 12.7 }, { w: 'time', s: 12.7, e: 13.12 }, { w: 'we\'ve', s: 13.12, e: 13.5 }, { w: 'no', s: 13.5, e: 13.66 }, { w: 'control', s: 13.66, e: 14.2 }] },
          { time: 14.52, text: 'If the sky is pink and white', words: [{ w: 'If', s: 14.2, e: 14.88 }, { w: 'the', s: 14.88, e: 15.0 }, { w: 'sky', s: 15.0, e: 15.38 }, { w: 'is', s: 15.38, e: 15.72 }, { w: 'pink', s: 15.72, e: 16.08 }, { w: 'and', s: 16.1, e: 16.41 }, { w: 'white', s: 16.08, e: 16.42 }] },
          { time: 16.73, text: 'If the ground is black and yellow', words: [{ w: 'If', s: 16.42, e: 17.1 }, { w: 'the', s: 17.1, e: 17.26 }, { w: 'ground', s: 17.26, e: 17.58 }, { w: 'is', s: 17.58, e: 17.92 }, { w: 'black', s: 17.92, e: 18.22 }, { w: 'and', s: 18.22, e: 18.44 }, { w: 'yellow', s: 18.44, e: 18.76 }] },
          { time: 19.04, text: 'It\'s the same way you showed me', words: [{ w: 'It\'s', s: 18.76, e: 19.4 }, { w: 'the', s: 19.4, e: 19.48 }, { w: 'same', s: 19.48, e: 19.86 }, { w: 'way', s: 19.86, e: 20.14 }, { w: 'you', s: 20.14, e: 20.46 }, { w: 'showed', s: 20.46, e: 20.86 }, { w: 'me', s: 20.86, e: 21.28 }] },
        ],
      },
      {
        time: 23.43,
        label: null,
        lines: [
          { time: 23.43, text: 'Nod my head, don\'t close my eyes', words: [{ w: 'Nod', s: 23.12, e: 23.8 }, { w: 'my', s: 23.8, e: 24.06 }, { w: 'head,', s: 24.06, e: 24.36 }, { w: 'don\'t', s: 24.36, e: 24.74 }, { w: 'close', s: 24.74, e: 24.92 }, { w: 'my', s: 24.92, e: 25.2 }, { w: 'eyes', s: 25.2, e: 25.76 }] },
          { time: 25.89, text: 'Halfway on a slow move', words: [{ w: 'Halfway', s: 25.76, e: 26.6 }, { w: 'on', s: 26.6, e: 26.9 }, { w: 'a', s: 26.9, e: 26.96 }, { w: 'slow', s: 27.27, e: 27.73 }, { w: 'move', s: 27.28, e: 28.06 }] },
          { time: 28.19, text: 'It\'s the same way you showed me', words: [{ w: 'It\'s', s: 28.3, e: 28.4 }, { w: 'the', s: 28.4, e: 28.48 }, { w: 'same', s: 28.48, e: 28.86 }, { w: 'way', s: 28.86, e: 29.16 }, { w: 'you', s: 29.16, e: 29.48 }, { w: 'showed', s: 29.48, e: 29.82 }, { w: 'me', s: 29.82, e: 30.24 }] },
        ],
      },
      {
        time: 32.6,
        label: null,
        lines: [
          { time: 32.6, text: 'If you could fly then you\'d feel south', words: [{ w: 'If', s: 32.04, e: 32.68 }, { w: 'you', s: 32.68, e: 32.84 }, { w: 'could', s: 32.84, e: 33.0 }, { w: 'fly', s: 33.0, e: 33.36 }, { w: 'then', s: 33.36, e: 33.6 }, { w: 'you\'d', s: 33.6, e: 33.8 }, { w: 'feel', s: 33.8, e: 34.04 }, { w: 'south', s: 34.04, e: 34.58 }] },
          { time: 34.77, text: 'Up north\'s getting cold soon', words: [{ w: 'Up', s: 34.58, e: 35.22 }, { w: 'north\'s', s: 35.38, e: 35.74 }, { w: 'getting', s: 35.74, e: 35.94 }, { w: 'cold', s: 35.94, e: 36.26 }, { w: 'soon', s: 36.26, e: 36.78 }] },
          { time: 36.96, text: 'The way it is, we\'re on land', words: [{ w: 'The', s: 37.14, e: 37.42 }, { w: 'way', s: 37.24, e: 37.52 }, { w: 'it', s: 37.42, e: 37.66 }, { w: 'is,', s: 37.66, e: 37.92 }, { w: 'we\'re', s: 37.92, e: 38.28 }, { w: 'on', s: 38.28, e: 38.54 }, { w: 'land', s: 38.54, e: 38.9 }] },
          { time: 38.93, text: 'So I\'m someone to hold true', words: [{ w: 'So', s: 38.9, e: 39.34 }, { w: 'I\'m', s: 39.34, e: 39.8 }, { w: 'someone', s: 39.8, e: 40.28 }, { w: 'to', s: 41.84, e: 42.02 }, { w: 'hold', s: 42.02, e: 42.3 }, { w: 'true', s: 41.1, e: 41.54 }] },
          { time: 41.54, text: 'Keep you cool when it\'s still alive', words: [{ w: 'Keep', s: 41.2, e: 41.84 }, { w: 'you', s: 41.81, e: 42.08 }, { w: 'cool', s: 42.02, e: 42.3 }, { w: 'when', s: 42.3, e: 42.62 }, { w: 'it\'s', s: 42.62, e: 42.84 }, { w: 'still', s: 42.84, e: 42.96 }, { w: 'alive', s: 42.96, e: 43.48 }] },
          { time: 43.44, text: 'Won\'t let you down when it\'s all ruin', words: [{ w: 'Won\'t', s: 43.84, e: 43.94 }, { w: 'let', s: 43.94, e: 44.02 }, { w: 'you', s: 44.02, e: 44.22 }, { w: 'down', s: 44.22, e: 44.56 }, { w: 'when', s: 46.32, e: 46.5 }, { w: 'it\'s', s: 48.44, e: 49.44 }, { w: 'all', s: 49.44, e: 50.44 }, { w: 'ruin', s: 50.44, e: 51.44 }] },
        ],
      },
      {
        time: 46.12,
        label: 'Chorus',
        lines: [
          { time: 46.12, text: 'Just the same way you showed me, showed me', words: [{ w: 'Just', s: 45.56, e: 46.32 }, { w: 'the', s: 46.32, e: 46.5 }, { w: 'same', s: 46.5, e: 46.86 }, { w: 'way', s: 46.86, e: 47.14 }, { w: 'you', s: 47.14, e: 47.5 }, { w: 'showed', s: 53.84, e: 54.3 }, { w: 'me,', s: 54.3, e: 55.0 }, { w: 'showed', s: 51.91, e: 52.74 }, { w: 'me', s: 52.74, e: 53.57 }] },
          { time: 53.57, text: 'You showed me love', words: [{ w: 'You', s: 53.29, e: 53.84 }, { w: 'showed', s: 53.84, e: 54.3 }, { w: 'me', s: 54.3, e: 55.0 }, { w: 'love', s: 55.0, e: 55.6 }] },
          { time: 59.58, text: 'Glory from above', words: [{ w: 'Glory', s: 59.44, e: 60.54 }, { w: 'from', s: 60.54, e: 61.32 }, { w: 'above', s: 61.32, e: 62.36 }] },
          { time: 62.5, text: 'Regard my dear', words: [{ w: 'Regard', s: 62.38, e: 63.56 }, { w: 'my', s: 64.45, e: 66.39 }, { w: 'dear', s: 64.28, e: 64.83 }] },
          { time: 68.34, text: 'It\'s all downhill from here', words: [{ w: 'It\'s', s: 68.17, e: 68.72 }, { w: 'all', s: 68.72, e: 69.1 }, { w: 'downhill', s: 69.1, e: 69.68 }, { w: 'from', s: 70.1, e: 70.72 }, { w: 'here', s: 70.72, e: 71.64 }] },
        ],
      },
      {
        time: 72.9,
        label: 'Verse 2',
        lines: [
          { time: 72.9, text: 'In the wake of a hurricane', words: [{ w: 'In', s: 72.79, e: 73.34 }, { w: 'the', s: 73.34, e: 73.52 }, { w: 'wake', s: 73.52, e: 73.8 }, { w: 'of', s: 73.8, e: 74.14 }, { w: 'a', s: 74.14, e: 74.38 }, { w: 'hurricane', s: 74.38, e: 74.9 }] },
          { time: 75.57, text: 'Dark skin of a summer shade', words: [{ w: 'Dark', s: 74.9, e: 75.72 }, { w: 'skin', s: 75.72, e: 76.02 }, { w: 'of', s: 76.02, e: 76.42 }, { w: 'a', s: 76.42, e: 76.52 }, { w: 'summer', s: 76.52, e: 76.74 }, { w: 'shade', s: 76.74, e: 77.24 }] },
          { time: 77.76, text: 'Nosedive in the flood lines', words: [{ w: 'Nosedive', s: 77.76, e: 78.14 }, { w: 'in', s: 78.98, e: 79.66 }, { w: 'the', s: 78.52, e: 78.91 }, { w: 'flood', s: 78.91, e: 79.29 }, { w: 'lines', s: 79.29, e: 79.67 }] },
          { time: 79.67, text: 'Tall tower of milk crates', words: [{ w: 'Tall', s: 79.66, e: 80.18 }, { w: 'tower', s: 82.4, e: 82.48 }, { w: 'of', s: 80.67, e: 81.17 }, { w: 'milk', s: 81.17, e: 81.67 }, { w: 'crates', s: 81.67, e: 82.17 }] },
          { time: 82.17, text: 'It\'s the same way you showed me', words: [{ w: 'It\'s', s: 81.94, e: 82.4 }, { w: 'the', s: 82.4, e: 82.48 }, { w: 'same', s: 82.48, e: 82.84 }, { w: 'way', s: 82.84, e: 83.18 }, { w: 'you', s: 83.18, e: 83.48 }, { w: 'showed', s: 83.48, e: 83.82 }, { w: 'me', s: 83.82, e: 84.26 }] },
        ],
      },
      {
        time: 86.33,
        label: null,
        lines: [
          { time: 86.33, text: 'Cannonball off the porch side', words: [{ w: 'Cannonball', s: 86.33, e: 86.82 }, { w: 'off', s: 87.56, e: 87.66 }, { w: 'the', s: 87.66, e: 87.8 }, { w: 'porch', s: 87.8, e: 87.96 }, { w: 'side', s: 88.24, e: 88.54 }] },
          { time: 88.8, text: 'Older kids trying off the roof', words: [{ w: 'Older', s: 88.54, e: 89.28 }, { w: 'kids', s: 89.28, e: 89.52 }, { w: 'trying', s: 89.52, e: 89.92 }, { w: 'off', s: 89.92, e: 90.26 }, { w: 'the', s: 90.26, e: 90.42 }, { w: 'roof', s: 90.42, e: 90.8 }] },
          { time: 91.03, text: 'Just the same way you showed me', words: [{ w: 'Just', s: 90.8, e: 91.36 }, { w: 'the', s: 91.36, e: 91.56 }, { w: 'same', s: 91.56, e: 91.9 }, { w: 'way', s: 91.9, e: 92.2 }, { w: 'you', s: 92.2, e: 92.48 }, { w: 'showed', s: 92.48, e: 92.82 }, { w: 'me', s: 92.82, e: 93.2 }] },
        ],
      },
      {
        time: 95.4,
        label: null,
        lines: [
          { time: 95.4, text: 'If you could die and come back to life', words: [{ w: 'If', s: 95.14, e: 95.72 }, { w: 'you', s: 95.72, e: 95.86 }, { w: 'could', s: 95.86, e: 96.02 }, { w: 'die', s: 96.02, e: 96.4 }, { w: 'and', s: 96.4, e: 96.68 }, { w: 'come', s: 96.68, e: 96.76 }, { w: 'back', s: 96.76, e: 96.96 }, { w: 'to', s: 96.96, e: 97.14 }, { w: 'life', s: 97.14, e: 97.58 }] },
          { time: 97.82, text: 'Up for air from the swimming pool', words: [{ w: 'Up', s: 97.58, e: 98.18 }, { w: 'for', s: 98.56, e: 98.88 }, { w: 'air', s: 98.48, e: 98.81 }, { w: 'from', s: 98.81, e: 99.14 }, { w: 'the', s: 98.88, e: 98.96 }, { w: 'swimming', s: 98.96, e: 99.26 }, { w: 'pool', s: 99.26, e: 99.7 }] },
          { time: 100.13, text: 'You\'d kneel down to the dry land', words: [{ w: 'You\'d', s: 99.7, e: 100.12 }, { w: 'kneel', s: 100.12, e: 100.56 }, { w: 'down', s: 100.56, e: 100.82 }, { w: 'to', s: 100.82, e: 101.08 }, { w: 'the', s: 101.08, e: 101.26 }, { w: 'dry', s: 101.26, e: 101.52 }, { w: 'land', s: 101.52, e: 102.02 }] },
          { time: 102.34, text: 'Kiss the Earth that birthed you', words: [{ w: 'Kiss', s: 102.02, e: 102.58 }, { w: 'the', s: 102.58, e: 102.86 }, { w: 'Earth', s: 102.86, e: 103.06 }, { w: 'that', s: 103.06, e: 103.4 }, { w: 'birthed', s: 103.4, e: 103.94 }, { w: 'you', s: 103.94, e: 104.22 }] },
          { time: 104.64, text: 'Gave you tools just to stay alive', words: [{ w: 'Gave', s: 104.78, e: 104.88 }, { w: 'you', s: 104.88, e: 105.02 }, { w: 'tools', s: 105.02, e: 105.32 }, { w: 'just', s: 105.32, e: 105.58 }, { w: 'to', s: 105.58, e: 105.7 }, { w: 'stay', s: 105.7, e: 105.98 }, { w: 'alive', s: 105.98, e: 106.48 }] },
          { time: 106.61, text: 'And make it out when the sun is ruined', words: [{ w: 'And', s: 106.48, e: 106.92 }, { w: 'make', s: 106.92, e: 107.08 }, { w: 'it', s: 107.08, e: 107.38 }, { w: 'out', s: 107.38, e: 107.58 }, { w: 'when', s: 107.58, e: 107.82 }, { w: 'the', s: 107.82, e: 107.96 }, { w: 'sun', s: 107.96, e: 108.18 }, { w: 'is', s: 108.18, e: 108.46 }, { w: 'ruined', s: 108.46, e: 108.78 }] },
        ],
      },
      {
        time: 109.16,
        label: 'Chorus',
        lines: [
          { time: 109.16, text: 'That\'s the same way you showed me, showed me', words: [{ w: 'That\'s', s: 108.78, e: 109.48 }, { w: 'the', s: 109.48, e: 109.54 }, { w: 'same', s: 109.54, e: 109.9 }, { w: 'way', s: 109.9, e: 110.22 }, { w: 'you', s: 110.22, e: 110.54 }, { w: 'showed', s: 110.54, e: 111.18 }, { w: 'me,', s: 111.18, e: 111.82 }, { w: 'showed', s: 116.2, e: 117.42 }, { w: 'me', s: 117.42, e: 118.02 }] },
          { time: 116.58, text: 'You showed me love', words: [{ w: 'You', s: 116.1, e: 116.2 }, { w: 'showed', s: 116.2, e: 117.42 }, { w: 'me', s: 117.42, e: 118.02 }, { w: 'love', s: 118.02, e: 119.0 }] },
          { time: 122.66, text: 'Glory from above', words: [{ w: 'Glory', s: 122.3, e: 123.58 }, { w: 'from', s: 123.58, e: 124.18 }, { w: 'above', s: 124.18, e: 125.54 }] },
          { time: 125.69, text: 'Regard my dear', words: [{ w: 'Regard', s: 125.56, e: 126.28 }, { w: 'my', s: 127.55, e: 129.41 }, { w: 'dear', s: 127.24, e: 127.94 }] },
          { time: 131.27, text: 'It\'s all downhill from here', words: [{ w: 'It\'s', s: 131.0, e: 131.64 }, { w: 'all', s: 131.64, e: 132.08 }, { w: 'downhill', s: 132.08, e: 132.6 }, { w: 'from', s: 133.14, e: 133.74 }, { w: 'here', s: 133.74, e: 134.38 }] },
        ],
      },
      {
        time: 136.45,
        label: 'Outro',
        lines: [
          { time: 136.45, text: 'Remember life', words: [{ w: 'Remember', s: 136.45, e: 137.66 }, { w: 'life', s: 137.66, e: 138.88 }] },
          { time: 138.88, text: 'Remember how it was', words: [{ w: 'Remember', s: 138.88, e: 139.39 }, { w: 'how', s: 139.39, e: 139.91 }, { w: 'it', s: 139.91, e: 140.43 }, { w: 'was', s: 140.43, e: 140.94 }] },
          { time: 140.94, text: 'Climb trees, Michael Jackson, it all ends here', words: [{ w: 'Climb', s: 140.94, e: 141.5 }, { w: 'trees,', s: 141.5, e: 142.06 }, { w: 'Michael', s: 142.06, e: 142.62 }, { w: 'Jackson,', s: 142.62, e: 143.18 }, { w: 'it', s: 143.18, e: 143.74 }, { w: 'all', s: 143.74, e: 144.3 }, { w: 'ends', s: 144.3, e: 144.86 }, { w: 'here', s: 144.86, e: 145.42 }] },
          { time: 145.42, text: 'Say what up to Matthew, to Shoob', words: [{ w: 'Say', s: 145.42, e: 146.06 }, { w: 'what', s: 146.06, e: 146.71 }, { w: 'up', s: 146.71, e: 147.35 }, { w: 'to', s: 147.35, e: 147.99 }, { w: 'Matthew,', s: 147.99, e: 148.63 }, { w: 'to', s: 148.63, e: 149.28 }, { w: 'Shoob', s: 149.28, e: 149.92 }] },
          { time: 149.92, text: 'Say what up to Danny', words: [{ w: 'Say', s: 152.98, e: 153.26 }, { w: 'what', s: 153.62, e: 154.9 }, { w: 'up', s: 153.12, e: 154.72 }, { w: 'to', s: 154.72, e: 156.32 }, { w: 'Danny', s: 156.32, e: 157.92 }] },
        ],
      },
      {
        time: 152.19,
        label: null,
        lines: [
          { time: 152.19, text: 'Say what up to life immortality', words: [{ w: 'Say', s: 152.98, e: 153.26 }, { w: 'what', s: 153.62, e: 154.9 }, { w: 'up', s: 153.68, e: 154.43 }, { w: 'to', s: 154.43, e: 155.18 }, { w: 'life', s: 155.18, e: 155.92 }, { w: 'immortality', s: 155.92, e: 156.67 }] },
          { time: 156.67, text: 'Bending up my Nikes', words: [{ w: 'Bending', s: 158.48, e: 158.48 }, { w: 'up', s: 156.96, e: 157.25 }, { w: 'my', s: 157.25, e: 157.55 }, { w: 'Nikes', s: 157.55, e: 157.84 }] },
          { time: 157.84, text: 'Running out the melpomene, nicotine', words: [{ w: 'Running', s: 158.48, e: 158.48 }, { w: 'out', s: 158.48, e: 159.13 }, { w: 'the', s: 159.13, e: 159.77 }, { w: 'melpomene,', s: 159.77, e: 160.42 }, { w: 'nicotine', s: 160.42, e: 161.06 }] },
          { time: 161.06, text: 'Stealing granny cigs', words: [{ w: 'Stealing', s: 161.06, e: 161.86 }, { w: 'granny', s: 161.86, e: 162.65 }, { w: 'cigs', s: 159.86, e: 161.24 }] },
          { time: 163.45, text: 'Gimme something sweet', words: [{ w: 'Gimme', s: 163.45, e: 165.67 }, { w: 'something', s: 165.67, e: 167.88 }, { w: 'sweet', s: 167.88, e: 170.1 }] },
          { time: 170.1, text: 'This is life, life immortality', words: [{ w: 'This', s: 169.92, e: 170.54 }, { w: 'is', s: 171.7, e: 173.3 }, { w: 'life,', s: 173.3, e: 174.9 }, { w: 'life', s: 174.9, e: 176.5 }, { w: 'immortality', s: 176.5, e: 178.1 }] },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     3.  Pahintulot — Shirebound & Busking
     ═══════════════════════════════════════════════════════ */
  {
    id: 'pahintulot',
    title: 'Pahintulot',
    artist: 'Shirebound & Busking',
    audioSrc: '/audio/Pahintulot - Shirebound.mp3',
    cover: '/images/Pahintulot.png',
    timeOffset: 0,
    theme: {
      bg1: '#0a0a14',
      bg2: '#1c1033',
      bg3: '#0f0820',
      accent: '#fbbf24',
      accentRgb: '251, 191, 36',
      glow1: 'rgba(251, 191, 36, 0.25)',
      glow2: 'rgba(245, 158, 11, 0.15)',
      textPrimary: '#fefce8',
      textDimmed: 'rgba(254, 249, 195, 0.4)',
      textMuted: 'rgba(254, 249, 195, 0.12)',
      cardBorder: 'rgba(251, 191, 36, 0.08)',
      particles: ['#fbbf24', '#f59e0b', '#fde68a', '#fcd34d'],
    },
    verses: [
      {
        time: 14.06,
        label: 'Intro',
        lines: [
          { time: 14.06, text: 'Giliw, kung pahihintulutan mo ako', words: [{ w: 'Giliw,', s: 14.06, e: 16.66 }, { w: 'kung', s: 16.66, e: 19.25 }, { w: 'pahihintulutan', s: 19.25, e: 21.85 }, { w: 'mo', s: 21.85, e: 24.44 }, { w: 'ako', s: 24.44, e: 27.04 }] },
          { time: 27.04, text: 'Ipagkakatiwala ko sana sa \'yo ang puso ko', words: [{ w: 'Ipagkakatiwala', s: 27.04, e: 28.04 }, { w: 'ko', s: 28.04, e: 29.04 }, { w: 'sana', s: 29.04, e: 30.04 }, { w: 'sa', s: 30.04, e: 31.04 }, { w: '\'yo', s: 31.04, e: 32.04 }, { w: 'ang', s: 32.04, e: 33.04 }, { w: 'puso', s: 33.04, e: 34.04 }, { w: 'ko', s: 34.04, e: 35.04 }] },
        ],
      },
      {
        time: 55.81,
        label: 'Verse 1',
        lines: [
          { time: 55.81, text: 'Alamat lang ba ang pahinga', words: [{ w: 'Alamat', s: 56.5, e: 57.9 }, { w: 'lang', s: 57.9, e: 58.72 }, { w: 'ba', s: 58.72, e: 59.64 }, { w: 'ang', s: 59.64, e: 60.8 }, { w: 'pahinga', s: 60.8, e: 63.26 }] },
          { time: 63.77, text: 'Ng dalawang puyat sa', words: [{ w: 'Ng', s: 63.26, e: 64.0 }, { w: 'dalawang', s: 64.0, e: 66.32 }, { w: 'puyat', s: 66.32, e: 68.98 }, { w: 'sa', s: 69.96, e: 72.02 }] },
          { time: 72.02, text: 'Pira-pirasong mga bugtong?', words: [{ w: 'Pira-pirasong', s: 72.02, e: 74.34 }, { w: 'mga', s: 74.04, e: 76.08 }, { w: 'bugtong?', s: 76.08, e: 76.78 }] },
          { time: 78.98, text: 'Nagtatanong', words: [{ w: 'Nagtatanong', s: 78.34, e: 79.74 }] },
        ],
      },
      {
        time: 83.43,
        label: null,
        lines: [
          { time: 83.43, text: 'Sagot ay \'di mahalaga', words: [{ w: 'Sagot', s: 88.6, e: 90.38 }, { w: 'ay', s: 90.38, e: 90.94 }, { w: '\'di', s: 86.75, e: 88.42 }, { w: 'mahalaga', s: 88.42, e: 90.08 }] },
          { time: 90.08, text: 'Sapat na sa \'king nar\'yan ka', words: [{ w: 'Sapat', s: 88.6, e: 90.38 }, { w: 'na', s: 93.54, e: 94.36 }, { w: 'sa', s: 95.34, e: 95.68 }, { w: '\'king', s: 93.25, e: 94.31 }, { w: 'nar\'yan', s: 94.31, e: 95.36 }, { w: 'ka', s: 95.36, e: 96.42 }] },
          { time: 96.42, text: 'Paumanhin, paumanhin', words: [{ w: 'Paumanhin,', s: 95.68, e: 97.62 }, { w: 'paumanhin', s: 100.14, e: 101.54 }] },
          { time: 104.25, text: 'Salat sa kasanayang linawin', words: [{ w: 'Salat', s: 103.1, e: 104.5 }, { w: 'sa', s: 104.82, e: 105.62 }, { w: 'kasanayang', s: 105.62, e: 106.62 }, { w: 'linawin', s: 107.28, e: 108.68 }] },
        ],
      },
      {
        time: 111.42,
        label: 'Chorus',
        lines: [
          { time: 111.42, text: 'Giliw, kung pahihintulutan mo ako', words: [{ w: 'Giliw,', s: 111.42, e: 114.02 }, { w: 'kung', s: 111.98, e: 113.38 }, { w: 'pahihintulutan', s: 116.96, e: 118.36 }, { w: 'mo', s: 118.36, e: 118.68 }, { w: 'ako', s: 118.68, e: 119.9 }] },
          { time: 124.41, text: 'Ay ipapakilala ko sana sa \'yo ang buong mundo', words: [{ w: 'Ay', s: 124.16, e: 124.86 }, { w: 'ipapakilala', s: 128.66, e: 129.46 }, { w: 'ko', s: 126.19, e: 127.08 }, { w: 'sana', s: 127.08, e: 127.97 }, { w: 'sa', s: 127.97, e: 128.85 }, { w: '\'yo', s: 128.85, e: 129.74 }, { w: 'ang', s: 129.74, e: 130.63 }, { w: 'buong', s: 132.12, e: 132.74 }, { w: 'mundo', s: 132.74, e: 133.42 }] },
        ],
      },
      {
        time: 153.17,
        label: 'Verse 2',
        lines: [
          { time: 153.17, text: 'Balagtasan ng nagtatapatang', words: [{ w: 'Balagtasan', s: 152.8, e: 154.2 }, { w: 'ng', s: 156.47, e: 159.76 }, { w: 'nagtatapatang', s: 159.76, e: 163.06 }] },
          { time: 163.06, text: 'Makatang maligalig ang mga tugma', words: [{ w: 'Makatang', s: 169.48, e: 170.3 }, { w: 'maligalig', s: 165.2, e: 167.34 }, { w: 'ang', s: 170.3, e: 170.78 }, { w: 'mga', s: 169.47, e: 171.61 }, { w: 'tugma', s: 171.61, e: 173.75 }] },
          { time: 173.75, text: 'Limot na kung paano ang umasa', words: [{ w: 'Limot', s: 173.75, e: 175.08 }, { w: 'na', s: 172.62, e: 174.02 }, { w: 'kung', s: 178.7, e: 179.66 }, { w: 'paano', s: 177.75, e: 179.08 }, { w: 'ang', s: 179.08, e: 180.42 }, { w: 'umasa', s: 180.42, e: 181.75 }] },
        ],
      },
      {
        time: 194.92,
        label: 'Chorus',
        lines: [
          { time: 194.92, text: 'Giliw, kung pahihintulutan mo ako', words: [{ w: 'Giliw,', s: 194.92, e: 197.65 }, { w: 'kung', s: 199.94, e: 200.74 }, { w: 'pahihintulutan', s: 200.74, e: 201.7 }, { w: 'mo', s: 201.7, e: 202.2 }, { w: 'ako', s: 202.2, e: 203.94 }] },
          { time: 208.57, text: 'Ang aking hangganan ay ipapamalas ko sa \'yo', words: [{ w: 'Ang', s: 207.34, e: 208.74 }, { w: 'aking', s: 208.74, e: 209.32 }, { w: 'hangganan', s: 212.86, e: 212.86 }, { w: 'ay', s: 212.86, e: 214.1 }, { w: 'ipapamalas', s: 214.92, e: 215.72 }, { w: 'ko', s: 215.72, e: 216.06 }, { w: 'sa', s: 216.06, e: 216.44 }, { w: '\'yo', s: 216.44, e: 217.14 }] },
        ],
      },
      {
        time: 250.63,
        label: 'Outro',
        lines: [
          { time: 250.63, text: 'Giliw, \'pinakikiusap ko sa \'yo', words: [{ w: 'Giliw,', s: 250.63, e: 253.4 }, { w: '\'pinakikiusap', s: 255.6, e: 256.3 }, { w: 'ko', s: 257.2, e: 257.84 }, { w: 'sa', s: 257.84, e: 258.18 }, { w: '\'yo', s: 258.18, e: 259.86 }] },
          { time: 264.5, text: 'Sana\'y pakaiingatan \'yang puso ko', words: [{ w: 'Sana\'y', s: 267.02, e: 268.06 }, { w: 'pakaiingatan', s: 270.78, e: 271.3 }, { w: '\'yang', s: 271.3, e: 271.56 }, { w: 'puso', s: 269.3, e: 270.9 }, { w: 'ko', s: 270.9, e: 272.5 }] },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     4.  Your Universe — Rico Blanco
     ═══════════════════════════════════════════════════════ */
  {
    id: 'your-universe',
    title: 'Your Universe',
    artist: 'Rico Blanco',
    audioSrc: '/audio/Your Universe - Rico Blanco.mp3',
    cover: '/images/Your Universe.png',
    timeOffset: 0,
    theme: {
      bg1: '#0f0318',
      bg2: '#3b0764',
      bg3: '#1a0530',
      accent: '#e879f9',
      accentRgb: '232, 121, 249',
      glow1: 'rgba(232, 121, 249, 0.3)',
      glow2: 'rgba(192, 132, 252, 0.18)',
      textPrimary: '#fae8ff',
      textDimmed: 'rgba(245, 208, 254, 0.4)',
      textMuted: 'rgba(245, 208, 254, 0.12)',
      cardBorder: 'rgba(232, 121, 249, 0.1)',
      particles: ['#e879f9', '#d946ef', '#f0abfc', '#c084fc'],
    },
    verses: [
      {
        time: 0.77,
        label: 'Verse 1',
        lines: [
          { time: 0.77, text: 'Tell me something', words: [{ w: 'Tell', s: 0.0, e: 0.96 }, { w: 'me', s: 0.96, e: 1.18 }, { w: 'something', s: 1.18, e: 1.72 }] },
          { time: 3.47, text: 'When the rain falls on my face', words: [{ w: 'When', s: 3.62, e: 3.9 }, { w: 'the', s: 4.22, e: 4.97 }, { w: 'rain', s: 3.9, e: 4.2 }, { w: 'falls', s: 4.2, e: 4.64 }, { w: 'on', s: 4.64, e: 4.88 }, { w: 'my', s: 4.88, e: 5.22 }, { w: 'face', s: 5.22, e: 6.0 }] },
          { time: 8.73, text: 'How do you quickly replace it', words: [{ w: 'How', s: 7.9, e: 9.1 }, { w: 'do', s: 9.1, e: 9.32 }, { w: 'you', s: 9.32, e: 9.6 }, { w: 'quickly', s: 9.6, e: 10.16 }, { w: 'replace', s: 10.16, e: 11.04 }, { w: 'it', s: 11.04, e: 12.62 }] },
          { time: 13.5, text: 'With a golden summer smile?', words: [{ w: 'With', s: 12.62, e: 14.16 }, { w: 'a', s: 14.16, e: 14.96 }, { w: 'golden', s: 14.96, e: 15.38 }, { w: 'summer', s: 15.38, e: 15.98 }, { w: 'smile?', s: 15.98, e: 17.32 }] },
        ],
      },
      {
        time: 19.73,
        label: null,
        lines: [
          { time: 19.73, text: 'Tell me something', words: [{ w: 'Tell', s: 18.8, e: 20.0 }, { w: 'me', s: 20.0, e: 20.24 }, { w: 'something', s: 20.24, e: 20.94 }] },
          { time: 22.2, text: 'When I\'m feelin\' tired and afraid', words: [{ w: 'When', s: 20.94, e: 22.52 }, { w: 'I\'m', s: 22.52, e: 22.7 }, { w: 'feelin\'', s: 22.7, e: 22.98 }, { w: 'tired', s: 25.01, e: 25.95 }, { w: 'and', s: 23.6, e: 24.26 }, { w: 'afraid', s: 24.26, e: 24.94 }] },
          { time: 27.82, text: 'How do you know just what to say', words: [{ w: 'How', s: 27.22, e: 27.94 }, { w: 'do', s: 27.94, e: 28.12 }, { w: 'you', s: 28.12, e: 28.32 }, { w: 'know', s: 28.32, e: 28.66 }, { w: 'just', s: 28.66, e: 29.0 }, { w: 'what', s: 29.0, e: 29.4 }, { w: 'to', s: 29.4, e: 29.7 }, { w: 'say', s: 29.7, e: 30.36 }] },
          { time: 31.23, text: 'To make everything alright?', words: [{ w: 'To', s: 30.36, e: 31.62 }, { w: 'make', s: 31.62, e: 32.98 }, { w: 'everything', s: 32.98, e: 34.7 }, { w: 'alright?', s: 34.7, e: 36.2 }] },
        ],
      },
      {
        time: 40.74,
        label: 'Chorus',
        lines: [
          { time: 40.74, text: 'I don\'t think that you even realize', words: [{ w: 'I', s: 40.14, e: 40.86 }, { w: 'don\'t', s: 40.86, e: 41.22 }, { w: 'think', s: 41.22, e: 41.5 }, { w: 'that', s: 41.5, e: 41.82 }, { w: 'you', s: 41.82, e: 42.16 }, { w: 'even', s: 42.16, e: 42.66 }, { w: 'realize', s: 42.66, e: 43.34 }] },
          { time: 43.54, text: 'The joy you make me feel when I\'m inside your universe', words: [{ w: 'The', s: 43.54, e: 44.27 }, { w: 'joy', s: 43.64, e: 44.0 }, { w: 'you', s: 46.22, e: 47.52 }, { w: 'make', s: 51.88, e: 52.04 }, { w: 'me', s: 46.47, e: 47.21 }, { w: 'feel', s: 47.21, e: 47.94 }, { w: 'when', s: 47.94, e: 48.68 }, { w: 'I\'m', s: 52.34, e: 52.82 }, { w: 'inside', s: 49.41, e: 50.14 }, { w: 'your', s: 50.14, e: 50.88 }, { w: 'universe', s: 50.88, e: 51.61 }] },
          { time: 51.61, text: 'You hold me like I\'m the one who\'s precious', words: [{ w: 'You', s: 51.0, e: 51.88 }, { w: 'hold', s: 51.88, e: 52.04 }, { w: 'me', s: 52.22, e: 52.53 }, { w: 'like', s: 52.04, e: 52.34 }, { w: 'I\'m', s: 52.34, e: 52.82 }, { w: 'the', s: 52.82, e: 52.96 }, { w: 'one', s: 52.96, e: 53.24 }, { w: 'who\'s', s: 53.24, e: 53.66 }, { w: 'precious', s: 53.66, e: 54.08 }] },
          { time: 54.36, text: 'I hate to break it to you, but it\'s just the other way around', words: [{ w: 'I', s: 54.08, e: 54.56 }, { w: 'hate', s: 54.56, e: 54.76 }, { w: 'to', s: 54.76, e: 54.86 }, { w: 'break', s: 54.86, e: 55.12 }, { w: 'it', s: 55.12, e: 55.44 }, { w: 'to', s: 55.44, e: 55.72 }, { w: 'you,', s: 55.72, e: 55.94 }, { w: 'but', s: 55.94, e: 56.32 }, { w: 'it\'s', s: 56.32, e: 56.76 }, { w: 'just', s: 56.76, e: 57.0 }, { w: 'the', s: 57.0, e: 57.46 }, { w: 'other', s: 57.46, e: 58.04 }, { w: 'way', s: 58.04, e: 58.58 }, { w: 'around', s: 58.58, e: 59.44 }] },
        ],
      },
      {
        time: 61.18,
        label: null,
        lines: [
          { time: 61.18, text: 'You can thank your stars all you want', words: [{ w: 'You', s: 60.64, e: 61.52 }, { w: 'can', s: 61.52, e: 61.78 }, { w: 'thank', s: 61.78, e: 62.26 }, { w: 'your', s: 62.26, e: 62.52 }, { w: 'stars', s: 62.52, e: 63.3 }, { w: 'all', s: 65.0, e: 65.94 }, { w: 'you', s: 63.56, e: 63.96 }, { w: 'want', s: 63.96, e: 64.36 }] },
          { time: 64.36, text: 'But I\'ll always be the lucky one', words: [{ w: 'But', s: 64.38, e: 65.0 }, { w: 'I\'ll', s: 65.0, e: 65.94 }, { w: 'always', s: 65.94, e: 66.4 }, { w: 'be', s: 66.4, e: 66.88 }, { w: 'the', s: 66.88, e: 67.78 }, { w: 'lucky', s: 67.78, e: 68.38 }, { w: 'one', s: 68.38, e: 69.46 }] },
        ],
      },
      {
        time: 74.19,
        label: 'Verse 2',
        lines: [
          { time: 74.19, text: 'Tell me something', words: [{ w: 'Tell', s: 73.32, e: 74.56 }, { w: 'me', s: 74.56, e: 74.8 }, { w: 'something', s: 74.8, e: 75.4 }] },
          { time: 77.07, text: 'When I\'m \'bout to lose control', words: [{ w: 'When', s: 77.07, e: 77.95 }, { w: 'I\'m', s: 77.16, e: 77.56 }, { w: '\'bout', s: 77.56, e: 77.8 }, { w: 'to', s: 77.8, e: 78.16 }, { w: 'lose', s: 78.16, e: 78.76 }, { w: 'control', s: 78.76, e: 79.46 }] },
          { time: 82.35, text: 'How do you patiently hold my hand', words: [{ w: 'How', s: 81.5, e: 82.74 }, { w: 'do', s: 82.74, e: 83.02 }, { w: 'you', s: 83.02, e: 83.24 }, { w: 'patiently', s: 83.24, e: 84.14 }, { w: 'hold', s: 84.14, e: 84.76 }, { w: 'my', s: 84.76, e: 86.2 }, { w: 'hand', s: 86.2, e: 87.88 }] },
          { time: 88.38, text: 'And gently calm me down?', words: [{ w: 'And', s: 87.88, e: 88.62 }, { w: 'gently', s: 88.62, e: 89.08 }, { w: 'calm', s: 89.08, e: 89.44 }, { w: 'me', s: 89.44, e: 90.06 }, { w: 'down?', s: 90.06, e: 91.46 }] },
        ],
      },
      {
        time: 95.84,
        label: null,
        lines: [
          { time: 95.84, text: 'Tell me something', words: [{ w: 'Tell', s: 94.92, e: 96.32 }, { w: 'me', s: 96.32, e: 96.58 }, { w: 'something', s: 96.58, e: 97.32 }] },
          { time: 98.52, text: 'When you sing and when you laugh', words: [{ w: 'When', s: 97.32, e: 99.02 }, { w: 'you', s: 99.02, e: 99.28 }, { w: 'sing', s: 99.28, e: 99.58 }, { w: 'and', s: 99.58, e: 99.98 }, { w: 'when', s: 99.98, e: 100.24 }, { w: 'you', s: 100.24, e: 100.96 }, { w: 'laugh', s: 103.23, e: 104.02 }] },
          { time: 104.02, text: 'Why do I always photograph', words: [{ w: 'Why', s: 103.46, e: 104.34 }, { w: 'do', s: 104.34, e: 104.58 }, { w: 'I', s: 104.58, e: 104.74 }, { w: 'always', s: 104.74, e: 105.34 }, { w: 'photograph', s: 105.34, e: 106.3 }] },
          { time: 107.59, text: 'My heart flying way above the clouds?', words: [{ w: 'My', s: 106.3, e: 108.04 }, { w: 'heart', s: 108.04, e: 109.6 }, { w: 'flying', s: 109.88, e: 111.02 }, { w: 'way', s: 109.6, e: 110.74 }, { w: 'above', s: 110.74, e: 111.18 }, { w: 'the', s: 111.18, e: 111.62 }, { w: 'clouds?', s: 111.62, e: 112.52 }] },
        ],
      },
      {
        time: 117.17,
        label: 'Chorus',
        lines: [
          { time: 117.17, text: 'I don\'t think that you even realize', words: [{ w: 'I', s: 117.17, e: 117.52 }, { w: 'don\'t', s: 117.52, e: 117.88 }, { w: 'think', s: 117.88, e: 118.23 }, { w: 'that', s: 118.23, e: 118.58 }, { w: 'you', s: 118.58, e: 118.93 }, { w: 'even', s: 118.93, e: 119.29 }, { w: 'realize', s: 119.29, e: 119.64 }] },
          { time: 119.64, text: 'The joy you make me feel when I\'m inside your universe', words: [{ w: 'The', s: 119.92, e: 121.32 }, { w: 'joy', s: 120.39, e: 121.13 }, { w: 'you', s: 121.13, e: 121.88 }, { w: 'make', s: 121.32, e: 121.32 }, { w: 'me', s: 122.63, e: 123.38 }, { w: 'feel', s: 121.32, e: 121.32 }, { w: 'when', s: 124.12, e: 124.87 }, { w: 'I\'m', s: 124.87, e: 125.62 }, { w: 'inside', s: 121.32, e: 122.5 }, { w: 'your', s: 124.26, e: 124.26 }, { w: 'universe', s: 127.11, e: 127.86 }] },
          { time: 127.86, text: 'You hold me like I\'m the one who\'s precious', words: [{ w: 'You', s: 129.38, e: 129.42 }, { w: 'hold', s: 128.14, e: 128.41 }, { w: 'me', s: 130.88, e: 134.88 }, { w: 'like', s: 128.69, e: 128.97 }, { w: 'I\'m', s: 128.97, e: 129.24 }, { w: 'the', s: 129.24, e: 129.52 }, { w: 'one', s: 129.52, e: 129.8 }, { w: 'who\'s', s: 129.8, e: 130.07 }, { w: 'precious', s: 130.07, e: 130.35 }] },
          { time: 130.35, text: 'I hate to break it to you, but it\'s just the other way around', words: [{ w: 'I', s: 130.35, e: 130.92 }, { w: 'hate', s: 129.52, e: 129.52 }, { w: 'to', s: 129.52, e: 130.28 }, { w: 'break', s: 132.06, e: 132.64 }, { w: 'it', s: 135.72, e: 135.94 }, { w: 'to', s: 137.8, e: 137.8 }, { w: 'you,', s: 133.78, e: 134.35 }, { w: 'but', s: 134.35, e: 134.92 }, { w: 'it\'s', s: 137.8, e: 137.8 }, { w: 'just', s: 135.49, e: 136.06 }, { w: 'the', s: 138.04, e: 138.48 }, { w: 'other', s: 136.64, e: 137.21 }, { w: 'way', s: 137.21, e: 137.78 }, { w: 'around', s: 137.78, e: 138.35 }] },
        ],
      },
      {
        time: 137.44,
        label: null,
        lines: [
          { time: 137.44, text: 'You can thank your stars all you want', words: [{ w: 'You', s: 137.8, e: 137.8 }, { w: 'can', s: 137.86, e: 138.28 }, { w: 'thank', s: 138.28, e: 138.7 }, { w: 'your', s: 137.8, e: 137.8 }, { w: 'stars', s: 139.12, e: 139.54 }, { w: 'all', s: 139.54, e: 139.96 }, { w: 'you', s: 137.8, e: 137.8 }, { w: 'want', s: 140.38, e: 140.72 }] },
          { time: 140.8, text: 'But I\'ll always be the lucky one', words: [{ w: 'But', s: 140.72, e: 141.02 }, { w: 'I\'ll', s: 141.02, e: 142.32 }, { w: 'always', s: 142.32, e: 142.78 }, { w: 'be', s: 142.78, e: 143.26 }, { w: 'the', s: 143.26, e: 144.18 }, { w: 'lucky', s: 144.18, e: 144.72 }, { w: 'one', s: 144.72, e: 145.6 }] },
        ],
      },
      {
        time: 148.66,
        label: 'Bridge',
        lines: [
          { time: 148.66, text: 'Whoa-oh-ooh, ooh', words: [{ w: 'Whoa-oh-ooh,', s: 148.66, e: 151.33 }, { w: 'ooh', s: 151.33, e: 154.01 }] },
          { time: 154.01, text: 'Whoa-oh-ooh, ooh', words: [{ w: 'Whoa-oh-ooh,', s: 154.01, e: 156.69 }, { w: 'ooh', s: 156.69, e: 159.37 }] },
          { time: 159.37, text: 'Whoa-oh-ooh, ooh, ooh', words: [{ w: 'Whoa-oh-ooh,', s: 159.37, e: 162.04 }, { w: 'ooh,', s: 162.04, e: 164.7 }, { w: 'ooh', s: 164.7, e: 167.37 }] },
        ],
      },
      {
        time: 171.53,
        label: 'Chorus',
        lines: [
          { time: 171.53, text: 'I don\'t think that you even realize', words: [{ w: 'I', s: 171.2, e: 171.92 }, { w: 'don\'t', s: 171.92, e: 172.14 }, { w: 'think', s: 172.14, e: 172.4 }, { w: 'that', s: 172.4, e: 172.74 }, { w: 'you', s: 172.74, e: 173.06 }, { w: 'even', s: 173.06, e: 173.48 }, { w: 'realize', s: 173.48, e: 174.26 }] },
          { time: 174.28, text: 'The joy you make me feel when I\'m inside your universe', words: [{ w: 'The', s: 174.28, e: 175.03 }, { w: 'joy', s: 174.58, e: 174.96 }, { w: 'you', s: 177.08, e: 178.48 }, { w: 'make', s: 182.78, e: 182.9 }, { w: 'me', s: 177.27, e: 178.02 }, { w: 'feel', s: 178.02, e: 178.77 }, { w: 'when', s: 178.77, e: 179.52 }, { w: 'I\'m', s: 183.28, e: 183.82 }, { w: 'inside', s: 180.27, e: 181.01 }, { w: 'your', s: 181.01, e: 181.76 }, { w: 'universe', s: 181.76, e: 182.51 }] },
          { time: 182.51, text: 'You hold me like I\'m the one who\'s precious', words: [{ w: 'You', s: 182.06, e: 182.78 }, { w: 'hold', s: 182.78, e: 182.9 }, { w: 'me', s: 183.14, e: 183.45 }, { w: 'like', s: 182.9, e: 183.28 }, { w: 'I\'m', s: 183.28, e: 183.82 }, { w: 'the', s: 183.82, e: 183.92 }, { w: 'one', s: 183.92, e: 184.14 }, { w: 'who\'s', s: 184.14, e: 184.58 }, { w: 'precious', s: 184.58, e: 185.02 }] },
          { time: 185.34, text: 'I hate to break it to you, but it\'s just the other way around', words: [{ w: 'I', s: 185.02, e: 185.48 }, { w: 'hate', s: 185.48, e: 185.66 }, { w: 'to', s: 185.66, e: 185.8 }, { w: 'break', s: 185.8, e: 186.02 }, { w: 'it', s: 186.02, e: 186.3 }, { w: 'to', s: 186.3, e: 186.62 }, { w: 'you,', s: 186.62, e: 186.86 }, { w: 'but', s: 186.86, e: 187.26 }, { w: 'it\'s', s: 187.26, e: 187.68 }, { w: 'just', s: 187.68, e: 187.88 }, { w: 'the', s: 187.88, e: 188.42 }, { w: 'other', s: 188.42, e: 189.0 }, { w: 'way', s: 189.0, e: 189.46 }, { w: 'around', s: 189.46, e: 190.84 }] },
        ],
      },
      {
        time: 192.22,
        label: null,
        lines: [
          { time: 192.22, text: 'You can thank your stars all you want', words: [{ w: 'You', s: 191.84, e: 192.42 }, { w: 'can', s: 192.42, e: 192.6 }, { w: 'thank', s: 192.6, e: 193.04 }, { w: 'your', s: 193.04, e: 193.42 }, { w: 'stars', s: 193.42, e: 194.12 }, { w: 'all', s: 195.56, e: 196.8 }, { w: 'you', s: 194.39, e: 194.75 }, { w: 'want', s: 194.75, e: 195.11 }] },
          { time: 195.11, text: 'But I\'ll always be the lucky one', words: [{ w: 'But', s: 195.26, e: 195.56 }, { w: 'I\'ll', s: 195.56, e: 196.8 }, { w: 'always', s: 196.8, e: 197.24 }, { w: 'be', s: 197.24, e: 197.72 }, { w: 'the', s: 197.72, e: 198.64 }, { w: 'lucky', s: 198.64, e: 199.16 }, { w: 'one', s: 199.16, e: 199.82 }] },
        ],
      },
      {
        time: 203.16,
        label: 'Outro',
        lines: [
          { time: 203.16, text: 'You can thank your stars all you want', words: [{ w: 'You', s: 202.79, e: 203.3 }, { w: 'can', s: 203.3, e: 203.5 }, { w: 'thank', s: 203.5, e: 203.92 }, { w: 'your', s: 203.92, e: 204.3 }, { w: 'stars', s: 204.3, e: 204.84 }, { w: 'all', s: 206.5, e: 207.42 }, { w: 'you', s: 205.41, e: 205.78 }, { w: 'want', s: 205.78, e: 206.16 }] },
          { time: 206.16, text: 'But I\'ll always be the lucky one', words: [{ w: 'But', s: 206.22, e: 206.5 }, { w: 'I\'ll', s: 206.5, e: 207.42 }, { w: 'always', s: 207.42, e: 208.06 }, { w: 'be', s: 208.06, e: 209.0 }, { w: 'the', s: 209.0, e: 212.28 }, { w: 'lucky', s: 212.28, e: 212.86 }, { w: 'one', s: 212.86, e: 213.9 }] },
          { time: 218.05, text: 'I\'ll always be the lucky one', words: [{ w: 'I\'ll', s: 217.44, e: 218.64 }, { w: 'always', s: 218.64, e: 219.06 }, { w: 'be', s: 219.06, e: 219.46 }, { w: 'the', s: 219.46, e: 220.42 }, { w: 'lucky', s: 220.42, e: 220.96 }, { w: 'one', s: 220.96, e: 221.54 }] },
          { time: 226.31, text: 'I\'ll always be the lucky one', words: [{ w: 'I\'ll', s: 225.62, e: 226.82 }, { w: 'always', s: 226.82, e: 227.2 }, { w: 'be', s: 227.2, e: 227.76 }, { w: 'the', s: 227.76, e: 228.64 }, { w: 'lucky', s: 228.64, e: 229.3 }, { w: 'one', s: 229.3, e: 229.92 }] },
        ],
      },
    ],
  },
]
