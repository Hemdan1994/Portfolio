import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

/** Page-wide scroll effects bound by class name. Must render after all sections. */
export function ScrollFx() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.fill-text').forEach((el) => {
      gsap.to(el, {
        backgroundSize: '100% 100%',
        ease: 'power1.inOut',
        scrollTrigger: { trigger: el, end: 'bottom center', scrub: 1.5 },
      })
    })

    gsap.utils.toArray<HTMLElement>('.separator').forEach((el) => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none', scrollTrigger: { trigger: el, end: 'bottom center', scrub: 3 } },
      )
    })

    gsap.utils.toArray<HTMLElement>('.zoom-out-image').forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 1.25 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: el, scrub: 1.5 } },
      )
    })
  })

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return null
}
