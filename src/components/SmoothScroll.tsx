import { useEffect } from 'react'
import { setLenis } from '../lib/scroll'
import { loadMotion } from '../lib/motion'

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduced || coarse) return

    let cancelled = false
    let cleanup = () => {}

    const start = () => {
      Promise.all([import('lenis'), loadMotion()]).then(([lenisMod, { gsap, ScrollTrigger }]) => {
        if (cancelled) return
        const lenis = new lenisMod.default({ duration: 1.2, touchMultiplier: 1.1, autoRaf: false })
        setLenis(lenis)
        lenis.on('scroll', ScrollTrigger.update)
        const ticker = (time: number) => {
          lenis.raf(time * 1000)
        }
        gsap.ticker.add(ticker)
        gsap.ticker.lagSmoothing(0)
        cleanup = () => {
          gsap.ticker.remove(ticker)
          gsap.ticker.lagSmoothing(500, 33)
          lenis.destroy()
          setLenis(null)
        }
      })
    }

    const idle = typeof requestIdleCallback === 'function' ? requestIdleCallback(start, { timeout: 1200 }) : undefined
    const timer = idle === undefined ? window.setTimeout(start, 200) : undefined

    return () => {
      cancelled = true
      if (idle !== undefined) cancelIdleCallback(idle)
      if (timer !== undefined) window.clearTimeout(timer)
      cleanup()
    }
  }, [])

  return null
}
