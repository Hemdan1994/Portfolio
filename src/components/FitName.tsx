import { useLayoutEffect, useRef } from 'react'

/** Renders one line of display text sized so it spans its own full width. */
export function FitName({ text, className, animate = true }: { text: string; className?: string; animate?: boolean }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      const probe = document.createElement('span')
      const styles = getComputedStyle(el)
      probe.textContent = text
      Object.assign(probe.style, {
        position: 'absolute',
        visibility: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight,
        letterSpacing: styles.letterSpacing,
        textTransform: 'uppercase',
        fontSize: '100px',
      })
      document.body.appendChild(probe)
      const width = probe.getBoundingClientRect().width
      probe.remove()
      if (!width) return
      const px = (el.clientWidth / width) * 100 * 0.985
      const vw = (px / window.innerWidth) * 100
      el.style.fontSize = `${vw}vw`
      el.style.lineHeight = `${vw}vw`
    }
    fit()
    document.fonts?.ready.then(fit)
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [text])

  return (
    <h1 ref={ref} className={`overflow-hidden text-center font-extrabold text-nowrap ${className ?? ''}`}>
      <span className={`block ${animate ? 'slide-up' : ''}`}>{text}</span>
    </h1>
  )
}
