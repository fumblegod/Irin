import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { songs } from './data/songs'

/* ─────────────────────── Particles ─────────────────────── */

function Particles({ colors }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        size: Math.random() * 3.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dur: Math.random() * 22 + 14,
        delay: Math.random() * -20,
        drift: Math.random() * 80 - 40,
      })),
    [colors]
  )

  return (
    <div className="particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="dot"
          style={{
            '--x': `${p.x}%`,
            '--y': `${p.y}%`,
            '--sz': `${p.size}px`,
            '--c': p.color,
            '--dur': `${p.dur}s`,
            '--del': `${p.delay}s`,
            '--dr': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────── Hearts ────────────────────────── */

function FloatingHearts({ color, isPlaying }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 14 + 8,
        dur: Math.random() * 12 + 10,
        delay: Math.random() * -15,
        drift: Math.random() * 60 - 30,
        opacity: Math.random() * 0.15 + 0.05,
      })),
    []
  )

  return (
    <div className={`hearts ${isPlaying ? 'hearts-beating' : ''}`}>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            '--hx': `${h.x}%`,
            '--hsz': `${h.size}px`,
            '--hdur': `${h.dur}s`,
            '--hdel': `${h.delay}s`,
            '--hdr': `${h.drift}px`,
            '--hop': h.opacity,
            '--hc': color,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

/* ─────────────────────── Starfield ─────────────────────── */

function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        dur: Math.random() * 4 + 2,
        delay: Math.random() * -6,
        brightness: Math.random() * 0.5 + 0.3,
      })),
    []
  )

  return (
    <div className="starfield">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            '--sx': `${s.x}%`,
            '--sy': `${s.y}%`,
            '--ssz': `${s.size}px`,
            '--sdur': `${s.dur}s`,
            '--sdel': `${s.delay}s`,
            '--sop': s.brightness,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────── Petal Rain ────────────────────── */

const PETAL_COLORS = [
  'rgba(255, 182, 193, 0.7)',
  'rgba(255, 160, 180, 0.6)',
  'rgba(255, 200, 210, 0.65)',
  'rgba(248, 170, 188, 0.55)',
  'rgba(255, 140, 170, 0.5)',
]

function PetalRain({ isPlaying }) {
  const [petals, setPetals] = useState([])
  const nextId = useRef(0)
  const timerRef = useRef(null)

  const spawnPetal = useCallback(() => {
    const id = nextId.current++
    const p = {
      id,
      x: Math.random() * 100,
      size: Math.random() * 12 + 8,
      dur: Math.random() * 8 + 10,
      delay: 0,
      drift: Math.random() * 120 - 60,
      rotation: Math.random() * 360,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }
    setPetals((prev) => [...prev, p])
    setTimeout(() => {
      setPetals((prev) => prev.filter((pp) => pp.id !== id))
    }, p.dur * 1000 + 500)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      spawnPetal()
      const loop = () => {
        spawnPetal()
        timerRef.current = setTimeout(loop, Math.random() * 1500 + 800)
      }
      timerRef.current = setTimeout(loop, Math.random() * 1000 + 500)
    } else {
      clearTimeout(timerRef.current)
    }
    return () => clearTimeout(timerRef.current)
  }, [isPlaying, spawnPetal])

  return (
    <div className={`petal-rain ${isPlaying ? 'petals-active' : 'petals-paused'}`}>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            '--ptx': `${p.x}%`,
            '--ptsz': `${p.size}px`,
            '--ptdur': `${p.dur}s`,
            '--ptdrift': `${p.drift}px`,
            '--ptrot': `${p.rotation}deg`,
            '--ptc': p.color,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────── Sparkle Trail ─────────────────── */

function SparkleTrail({ accentColor }) {
  const [sparkles, setSparkles] = useState([])
  const nextId = useRef(0)
  const lastSpawn = useRef(0)

  const handleMouseMove = useCallback(
    (e) => {
      const now = Date.now()
      if (now - lastSpawn.current < 60) return // throttle
      lastSpawn.current = now
      const id = nextId.current++
      const s = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 3,
        offsetX: Math.random() * 20 - 10,
        offsetY: Math.random() * 20 - 10,
      }
      setSparkles((prev) => [...prev, s])
      setTimeout(() => {
        setSparkles((prev) => prev.filter((sp) => sp.id !== id))
      }, 900)
    },
    []
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div className="sparkle-layer">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: s.x + s.offsetX,
            top: s.y + s.offsetY,
            '--spsz': `${s.size}px`,
            '--spc': accentColor,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────── Love Quotes ──────────────────── */

const LOVE_QUOTES = [
  "You're my favorite notification ♡",
  "Every love song is about you",
  "I'd choose you in every lifetime",
  "You make my heart skip a beat",
  "Forever isn't long enough with you",
  "You're the reason I believe in love",
  "My heart found its home in you",
  "Every moment with you is a gift",
  "You're my today and all my tomorrows",
  "In your eyes, I found my world",
  "You are my sun, my moon, my stars",
  "Falling for you was the best decision",
]

function LoveQuotes({ isPlaying }) {
  const [quote, setQuote] = useState('')
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)
  const usedRef = useRef([])

  const pickQuote = useCallback(() => {
    const available = LOVE_QUOTES.filter((q) => !usedRef.current.includes(q))
    const pool = available.length > 0 ? available : LOVE_QUOTES
    if (available.length === 0) usedRef.current = []
    const q = pool[Math.floor(Math.random() * pool.length)]
    usedRef.current.push(q)
    return q
  }, [])

  useEffect(() => {
    if (!isPlaying) {
      setVisible(false)
      clearTimeout(timerRef.current)
      return
    }
    const cycle = () => {
      setQuote(pickQuote())
      setVisible(true)
      timerRef.current = setTimeout(() => {
        setVisible(false)
        timerRef.current = setTimeout(cycle, 2000)
      }, 5000)
    }
    timerRef.current = setTimeout(cycle, 3000)
    return () => clearTimeout(timerRef.current)
  }, [isPlaying, pickQuote])

  return (
    <div className={`love-quote ${visible ? 'quote-visible' : 'quote-hidden'}`}>
      <p>{quote}</p>
    </div>
  )
}

/* ─────────────────────── Vinyl Record ─────────────────── */

function VinylRecord({ isPlaying, albumCover, accentColor }) {
  return (
    <div className={`vinyl-container ${isPlaying ? 'vinyl-visible' : 'vinyl-hidden'}`}>
      <div className={`vinyl ${isPlaying ? 'vinyl-spinning' : ''}`}>
        <div className="vinyl-grooves" />
        <div className="vinyl-grooves vinyl-grooves-2" />
        <div className="vinyl-label" style={{ '--vc': accentColor }}>
          {albumCover ? (
            <img src={albumCover} alt="Album" className="vinyl-cover" draggable={false} />
          ) : (
            <div className="vinyl-dot" />
          )}
        </div>
        <div className="vinyl-hole" />
      </div>
    </div>
  )
}

/* ─────────────────────── Falling Polaroids ─────────────── */

const POLAROID_IMAGES = [
  '/images/irin ^_^.jpg',
  '/images/Screenshot 2025-07-04 at 14-48-34 (1) Instagram.png',
  '/images/Screenshot 2025-07-04 at 14-48-48 (1) Instagram.png',
  '/images/Screenshot 2025-07-04 at 14-48-51 (1) Instagram.png',
  '/images/Screenshot 2025-07-04 at 14-49-11 (1) Instagram.png',
  '/images/Screenshot 2025-07-04 at 14-49-20 (1) Instagram.png',
  '/images/Screenshot 2025-07-15 at 20-58-57 Instagram.png',
  '/images/Screenshot 2025-07-15 at 21-00-02 Instagram.png',
  '/images/Screenshot 2025-07-15 at 21-00-10 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-28-04 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-28-17 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-28-30 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-28-42 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-28-51 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-29-02 Instagram.png',
  '/images/Screenshot 2026-02-17 at 22-29-18 Instagram.png',
]

function FallingPolaroids({ isPlaying }) {
  const [polaroids, setPolaroids] = useState([])
  const nextId = useRef(0)
  const spawnTimer = useRef(null)

  // Shuffle helper — picks a random image, avoids repeating the last 4
  const recentRef = useRef([])
  const pickImage = useCallback(() => {
    const available = POLAROID_IMAGES.filter(img => !recentRef.current.includes(img))
    const pool = available.length > 0 ? available : POLAROID_IMAGES
    const img = pool[Math.floor(Math.random() * pool.length)]
    recentRef.current.push(img)
    if (recentRef.current.length > 4) recentRef.current.shift()
    return img
  }, [])

  // Spawn a new polaroid
  const spawnOne = useCallback(() => {
    const id = nextId.current++
    const p = {
      id,
      src: pickImage(),
      x: Math.random() < 0.5
        ? Math.random() * 20 + 2          // left side: 2–22%
        : Math.random() * 20 + 78,        // right side: 78–98%
      rotation: Math.random() * 30 - 15,     // -15° to 15°
      duration: Math.random() * 8 + 12,      // 12-20s fall
      delay: 0,
      size: Math.random() * 30 + 90,         // 90-120px
    }
    setPolaroids(prev => [...prev, p])
    // Remove after animation ends
    setTimeout(() => {
      setPolaroids(prev => prev.filter(pp => pp.id !== id))
    }, p.duration * 1000 + 500)
  }, [pickImage])

  // Start/stop spawning based on isPlaying
  useEffect(() => {
    if (isPlaying) {
      // Spawn one immediately, then every 2-4s
      spawnOne()
      const interval = () => {
        spawnOne()
        spawnTimer.current = setTimeout(interval, Math.random() * 2000 + 2000)
      }
      spawnTimer.current = setTimeout(interval, Math.random() * 2000 + 1500)
    } else {
      clearTimeout(spawnTimer.current)
    }
    return () => clearTimeout(spawnTimer.current)
  }, [isPlaying, spawnOne])

  return (
    <div className={`falling-polaroids ${isPlaying ? 'polaroids-active' : 'polaroids-paused'}`}>
      {polaroids.map(p => (
        <div
          key={p.id}
          className="polaroid"
          style={{
            '--px': `${p.x}%`,
            '--prot': `${p.rotation}deg`,
            '--pdur': `${p.duration}s`,
            '--psz': `${p.size}px`,
          }}
        >
          <div className="polaroid-frame">
            <img src={p.src} alt="" loading="lazy" draggable={false} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────── Verse Display ─────────────────── */

function VerseDisplay({ verse, isActive, isPrev, currentTime, timeOffset }) {
  if (!verse) return null

  const stateClass = isActive ? 'verse-enter' : isPrev ? 'verse-exit' : 'verse-idle'
  const adjusted = currentTime - (timeOffset || 0)

  // Build line state (resolve object/string format, compute nextTime)
  const lineStates = useMemo(() => {
    return verse.lines.map((line, i) => {
      const lineObj = typeof line === 'object' ? line : { time: verse.time, text: line }
      const nextLine = verse.lines[i + 1]
      const nextObj = nextLine
        ? (typeof nextLine === 'object' ? nextLine : { time: verse.time, text: nextLine })
        : null
      return { ...lineObj, nextTime: nextObj ? nextObj.time : null, index: i }
    })
  }, [verse])

  // Find the active line index (last line whose time has been reached)
  const activeLineIdx = useMemo(() => {
    if (!isActive) return -1
    let idx = -1
    for (let i = lineStates.length - 1; i >= 0; i--) {
      if (adjusted >= lineStates[i].time) {
        idx = i
        break
      }
    }
    return idx
  }, [isActive, adjusted, lineStates])

  return (
    <div className={`verse-block ${stateClass}`}>
      {verse.label && <span className="verse-label">{verse.label}</span>}
      <div className="verse-lines">
        {lineStates.map((line, i) => {
          const reached = isActive && adjusted >= line.time
          const isCurrentLine = isActive && i === activeLineIdx
          const isPastLine = isActive && i < activeLineIdx

          // Use per-word timestamps if available, else fall back to text split + even distribution
          const hasWordTiming = line.words && line.words.length > 0
          const wordEntries = hasWordTiming
            ? line.words
            : line.text.split(/\s+/).filter(Boolean).map(w => ({ w, s: null, e: null }))

          return (
            <p
              key={i}
              className={`verse-line ${reached || isPrev ? 'line-visible' : 'line-hidden'}`}
            >
              {wordEntries.map((entry, j) => {
                const word = hasWordTiming ? entry.w : entry.w
                let spoken = false

                if (isPastLine || isPrev) {
                  spoken = true
                } else if (isCurrentLine && hasWordTiming) {
                  // Word is spoken when adjusted time >= its start time
                  spoken = adjusted >= entry.s
                } else if (isCurrentLine) {
                  // Fallback: even distribution
                  const lineStart = line.time
                  const lineEnd = line.nextTime || (lineStart + 8)
                  const lineDur = lineEnd - lineStart
                  const progress = lineDur > 0 ? Math.min(1, Math.max(0, (adjusted - lineStart) / lineDur)) : 0
                  const spokenCount = Math.min(wordEntries.length, 1 + Math.floor(progress * (wordEntries.length - 1)))
                  spoken = j < spokenCount
                }

                return (
                  <span
                    key={j}
                    className={`word ${spoken ? 'word-spoken' : ''}`}
                  >
                    {word}{' '}
                  </span>
                )
              })}
            </p>
          )
        })}
      </div>
    </div>
  )
}

/* ─────────────────────── Main App ──────────────────────── */

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [activeVerse, setActiveVerse] = useState(-1)
  const [prevVerse, setPrevVerse] = useState(-1)
  const [isSeeking, setIsSeeking] = useState(false)
  const [seekTime, setSeekTime] = useState(0)
  const [audioError, setAudioError] = useState(false)
  const [letterMode, setLetterMode] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)

  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const song = songs[activeIndex]
  const { theme } = song

  /* ── Audio reset on song change ── */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setActiveVerse(-1)
    setPrevVerse(-1)
    setAudioError(false)
    audio.pause()
    audio.src = song.audioSrc
    audio.volume = volume
    audio.load()
  }, [activeIndex])

  /* ── Audio events ── */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onMeta = () => setDuration(audio.duration)
    const onEnd = () => {
      setIsPlaying(false)
      // auto-advance
      if (activeIndex < songs.length - 1) setActiveIndex((i) => i + 1)
    }
    const onErr = () => setAudioError(true)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('error', onErr)
    return () => {
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('error', onErr)
    }
  }, [activeIndex])

  /* ── Smooth time tracking via requestAnimationFrame ── */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    let rafId
    const tick = () => {
      if (!audio.paused) {
        setCurrentTime(audio.currentTime)
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [activeIndex])

  /* ── Determine active verse from playback time ── */
  const timeOffset = song.timeOffset || 0
  useEffect(() => {
    const verses = song.verses
    const adjusted = currentTime - timeOffset
    let idx = -1
    for (let i = verses.length - 1; i >= 0; i--) {
      // Verse start is the time of its first line
      const v = verses[i]
      const firstLine = v.lines[0]
      const vTime = typeof firstLine === 'object' ? firstLine.time : v.time
      if (adjusted >= vTime) {
        idx = i
        break
      }
    }
    if (idx !== activeVerse) {
      setPrevVerse(activeVerse)
      setActiveVerse(idx)
    }
  }, [currentTime, song.verses, timeOffset])

  /* ── Clear prevVerse after exit animation ── */
  useEffect(() => {
    if (prevVerse < 0) return
    const t = setTimeout(() => setPrevVerse(-1), 800)
    return () => clearTimeout(t)
  }, [prevVerse])

  /* ── Controls ── */
  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setAudioError(true))
    }
  }, [isPlaying])

  const seekFromEvent = useCallback(
    (e) => {
      const bar = progressRef.current
      if (!bar || !duration) return 0
      const rect = bar.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      return pct * duration
    },
    [duration]
  )

  const onSeekStart = useCallback(
    (e) => {
      e.preventDefault()
      const t = seekFromEvent(e)
      setIsSeeking(true)
      setSeekTime(t)
      setCurrentTime(t)
    },
    [seekFromEvent]
  )

  useEffect(() => {
    if (!isSeeking) return
    const onMove = (e) => {
      const t = seekFromEvent(e)
      setSeekTime(t)
      setCurrentTime(t)
    }
    const onUp = () => {
      const audio = audioRef.current
      if (audio) audio.currentTime = seekTime
      setIsSeeking(false)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [isSeeking, seekFromEvent, seekTime])

  const onVolume = useCallback((e) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }, [])

  const skip = useCallback((dir) => {
    setActiveIndex((i) => {
      const n = i + dir
      if (n < 0) return songs.length - 1
      if (n >= songs.length) return 0
      return n
    })
  }, [])

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`
  }

  const pct = duration ? (currentTime / duration) * 100 : 0
  const currentVerseData = activeVerse >= 0 ? song.verses[activeVerse] : null
  const prevVerseData = prevVerse >= 0 ? song.verses[prevVerse] : null

  return (
    <div
      className="app"
      style={{
        '--bg1': theme.bg1,
        '--bg2': theme.bg2,
        '--bg3': theme.bg3,
        '--accent': theme.accent,
        '--accent-rgb': theme.accentRgb,
        '--glow1': theme.glow1,
        '--glow2': theme.glow2,
        '--text-primary': theme.textPrimary,
        '--text-dimmed': theme.textDimmed,
        '--text-muted': theme.textMuted,
            '--card-border': theme.cardBorder,
      }}
    >
      <audio ref={audioRef} preload="metadata" />

      {/* ── Background ── */}
      <div className="bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="noise" />
      <div className="vignette" />
      <Starfield />
      <Particles colors={theme.particles} />
      <FloatingHearts color={theme.accent} isPlaying={isPlaying} />
      <FallingPolaroids isPlaying={isPlaying} />
      <PetalRain isPlaying={isPlaying} />
      <SparkleTrail accentColor={theme.accent} />
      <VinylRecord isPlaying={isPlaying} albumCover={song.cover} accentColor={theme.accent} />

      {/* ── Tab Bar ── */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <svg width="16" height="16" fill="var(--accent)" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>Irin</span>
          </div>
          <div className="divider" />
          <nav className="tabs no-scroll">
            {songs.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setActiveIndex(i); setLetterMode(false) }}
                className={`tab ${!letterMode && i === activeIndex ? 'tab-on' : ''}`}
              >
                {s.title}
                {!letterMode && i === activeIndex && <span className="tab-dot" />}
              </button>
            ))}
            <button
              onClick={() => { setLetterMode(true); if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false) } }}
              className={`tab tab-letter ${letterMode ? 'tab-on' : ''}`}
            >
              For you Mon chéri
              {letterMode && <span className="tab-dot" />}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Centre Stage ── */}
      {letterMode ? (
        <main className="stage letter-stage">
          <div className="letter-container">
            {!letterOpen ? (
              <div className="envelope" onClick={() => setLetterOpen(true)}>
                <div className="envelope-flap" />
                <div className="envelope-body">
                  <div className="envelope-heart">♥</div>
                  <p className="envelope-text">Tap to open</p>
                </div>
              </div>
            ) : (
              <div className="letter-card">
                <button className="letter-close" onClick={() => setLetterOpen(false)}>
                  ✕
                </button>
                <span className="letter-heart">♥</span>
                <img src="/images/catgirl.png" alt="" className="letter-image" draggable={false} />
                <h2 className="letter-heading">For you, Mon chéri</h2>
                <div className="letter-body">
                  <p>
                    Hello my love, I made this for you as valentines gift, I know its a little late but I wanted to make something special for you,
                    and I'm no good with my hands the best I can do write code and make something special for you, I hope you like it.
                  </p>
                  <p>
                    I love you very very much, you're the best thing thats ever happened to me,
                    never in my life would I wish for anyone else. You make me so happy,
                    you make my life better in every way possible, you make me want to be a better person,
                     you inspire me and support me and love me unconditionally, and I hope I do the same for you.
                  </p>
                  <p>
                    Thank you for being my person. Thank you for every laugh and
                    every quiet moment where nothing needed to be said because your presence
                    alone was enough.
                  </p>
                  <p className="letter-sign">Forever yours ♡</p>
                </div>
              </div>
            )}
          </div>
        </main>
      ) : (
        <main className="stage">
        {/* Song title — always visible */}
        <div className="meta">
          <h1 className="title">{song.title}</h1>
          <p className="artist">{song.artist}</p>
        </div>

        {/* Verse crossfade area */}
        <div className={`verse-stage ${isPlaying ? 'breathing-glow' : ''}`}>
          {/* Previous verse fading out */}
          {prevVerseData && (
            <VerseDisplay
              key={`prev-${activeIndex}-${prevVerse}`}
              verse={prevVerseData}
              isActive={false}
              isPrev={true}
              currentTime={currentTime}
              timeOffset={timeOffset}
            />
          )}
          {/* Current verse fading in */}
          {currentVerseData && (
            <VerseDisplay
              key={`active-${activeIndex}-${activeVerse}`}
              verse={currentVerseData}
              isActive={true}
              isPrev={false}
              currentTime={currentTime}
              timeOffset={timeOffset}
            />
          )}
          {/* Idle state */}
          {!currentVerseData && !prevVerseData && !isPlaying && (
            <div className="verse-idle-msg">
              <span className="idle-heart">♥</span>
              <p>Press play to begin</p>
            </div>
          )}
        </div>

        {/* Audio error hint */}
        {audioError && (
          <p className="audio-hint">
            Place <code>{song.audioSrc.split('/').pop()}</code> in the{' '}
            <code>public/audio/</code> folder
          </p>
        )}

        <LoveQuotes isPlaying={isPlaying} />
      </main>
      )}

      {/* ── Player Bar ── */}
      {!letterMode && (
      <footer className="player">
        {/* Progress bar */}
        <div className="progress-row">
          <span className="time">{fmt(currentTime)}</span>
          <div
            ref={progressRef}
            className={`bar ${isSeeking ? 'bar-seeking' : ''}`}
            onMouseDown={onSeekStart}
            onTouchStart={onSeekStart}
          >
            <div className="bar-fill" style={{ width: `${pct}%` }}>
              <div className="bar-thumb" />
            </div>
          </div>
          <span className="time">{fmt(duration)}</span>
        </div>

        {/* Controls */}
        <div className="controls">
          {/* Left — now playing */}
          <div className="ctrl-left">
            <p className="ctrl-title">{song.title}</p>
            <p className="ctrl-artist">{song.artist}</p>
          </div>

          {/* Centre — transport */}
          <div className="transport">
            <button onClick={() => skip(-1)} className="tbtn" aria-label="Previous">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
              </svg>
            </button>
            <button onClick={togglePlay} className="play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button onClick={() => skip(1)} className="tbtn" aria-label="Next">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Right — volume */}
          <div className="ctrl-right">
            <svg width="16" height="16" fill="var(--text-dimmed)" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.97v6.06c1.48-.73 2.5-2.25 2.5-4.03zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolume}
              className="vol"
              style={{ '--fill': `${volume * 100}%` }}
            />
          </div>
        </div>
      </footer>
      )}
    </div>
  )
}
