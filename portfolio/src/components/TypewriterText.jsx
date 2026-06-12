import { useEffect, useRef, useState } from 'react'

export default function TypewriterText({
  text,
  speed = 42,
  start = true,
  onComplete,
  as: Component = 'span',
  className = '',
  showCursor = true,
}) {
  const [count, setCount] = useState(0)
  const [instant, setInstant] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPreference = () => setInstant(media.matches)
    applyPreference()
    media.addEventListener('change', applyPreference)
    return () => media.removeEventListener('change', applyPreference)
  }, [])

  useEffect(() => {
    if (!start || instant) return

    if (count >= text.length) {
      if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
      return
    }

    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [start, count, text.length, speed, instant, onComplete])

  useEffect(() => {
    if (start && instant && !completedRef.current) {
      completedRef.current = true
      onComplete?.()
    }
  }, [start, instant, onComplete])

  const visibleCount = instant ? text.length : count
  const isTyping = start && !instant && visibleCount < text.length

  return (
    <Component className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`typewriter-char${i < visibleCount ? ' is-visible' : ''}`}
          aria-hidden={i >= visibleCount}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
      {showCursor && isTyping && (
        <span className="typewriter-cursor" aria-hidden="true">
          ▍
        </span>
      )}
    </Component>
  )
}
