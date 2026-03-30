'use client'

import { useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook: observes elements with class "reveal-hidden", "reveal-left", or "reveal-right"
 * and adds "reveal-visible" when they enter the viewport.
 * Also handles "stagger-children".
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-hidden, .reveal-left, .reveal-right, .stagger-children')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])
}

/**
 * Smooth counter animation for stats.
 */
export function useCountUp(end: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const step = end / (duration / 16)
          const tick = () => {
            start += step
            if (start >= end) {
              el.textContent = end.toLocaleString()
              return
            }
            el.textContent = Math.floor(start).toLocaleString()
            requestAnimationFrame(tick)
          }
          tick()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return ref
}
