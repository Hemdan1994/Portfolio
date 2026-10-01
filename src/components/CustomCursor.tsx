import { useEffect, useRef, useState } from 'react'
import { loadMotion } from '../lib/motion'

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [view, setView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return

    let cancelled = false
    let cleanup = () => {}

    const start = () => {
      loadMotion().then(({ gsap }) => {
        if (cancelled || !ref.current) return
        const node = ref.current
        gsap.set(node, { xPercent: -50, yPercent: -50 })
        const x = gsap.quickTo(node, 'x', { duration: 0.35, ease: 'power3.out' })
        const y = gsap.quickTo(node, 'y', { duration: 0.35, ease: 'power3.out' })

        const move = (e: PointerEvent) => {
          x(e.clientX)
          y(e.clientY)
          node.style.opacity = '1'
          const target = e.target as HTMLElement | null
          const next = Boolean(target?.closest('[data-cursor="view"]'))
          setView((prev) => (prev === next ? prev : next))
        }
        const leave = () => {
          node.style.opacity = '0'
        }

        window.addEventListener('pointermove', move)
        document.documentElement.addEventListener('pointerleave', leave)
        cleanup = () => {
          window.removeEventListener('pointermove', move)
          document.documentElement.removeEventListener('pointerleave', leave)
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

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor-dot pointer-events-none fixed top-0 left-0 z-[99] hidden place-items-center rounded-full bg-(--color-primary-fixed) opacity-0 mix-blend-difference lg:grid ${
        view ? 'size-32' : 'size-4'
      }`}
    >
      <span
        className={`font-primary text-3xl font-semibold text-black uppercase -rotate-12 transition-opacity duration-300 ${
          view ? 'opacity-100' : 'opacity-0'
        }`}
      >
        View
      </span>
    </div>
  )
}
