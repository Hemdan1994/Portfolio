import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [view, setView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    gsap.set(el, { xPercent: -50, yPercent: -50 })
    const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' })

    const move = (e: PointerEvent) => {
      x(e.clientX)
      y(e.clientY)
      el.style.opacity = '1'
      const target = e.target as HTMLElement | null
      setView(Boolean(target?.closest('[data-cursor="view"]')))
    }
    const leave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
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
