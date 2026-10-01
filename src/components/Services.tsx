import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { serviceCards } from '../data/site'
import { scrollToTarget } from '../lib/scroll'
import { ArrowSwap, Label, Star } from './ui'
import { ResponsiveImage } from './ResponsiveImage'

export function Services() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = track.current
      if (!el) return
      const distance = () => el.scrollWidth - window.innerWidth
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: root },
  )

  return (
    <section id="services" ref={root} className="overflow-hidden border-y border-(--border)">
      <div ref={track} className="flex h-screen w-max">
        <div className="relative flex h-screen w-screen shrink-0 flex-col items-center justify-center px-4">
          <Star className="absolute top-10 left-6 size-12 text-(--text-primary) lg:top-16 lg:left-16 lg:size-30" />
          <Star className="absolute top-10 right-6 size-12 text-(--text-primary) lg:top-16 lg:right-16 lg:size-30" />
          <Star className="absolute bottom-10 left-6 size-12 text-(--text-primary) lg:bottom-16 lg:left-16 lg:size-30" />
          <Star className="absolute right-6 bottom-10 size-12 text-(--text-primary) lg:right-16 lg:bottom-16 lg:size-30" />
          <div className="flex w-full max-w-6xl items-center justify-between">
            <Label>Services</Label>
            <span className="font-secondary text-3xl text-(--text-primary) lg:text-6xl">01 — 06</span>
          </div>
          <h1 className="text-[27vw] leading-none font-semibold lg:text-[13.5rem] 2xl:text-[16rem]">
            <span className="fill-text">Services</span>
          </h1>
        </div>

        {serviceCards.map((service, i) => (
          <article
            key={service.title}
            className="group relative flex h-screen w-[88vw] shrink-0 flex-col justify-between overflow-hidden border-x border-(--border) bg-(--bg-secondary) px-6 py-16 sm:px-8 lg:w-[50vw]"
          >
            <div className="relative z-10 flex items-start justify-between">
              <span className="font-secondary text-6xl text-(--text-primary) opacity-50 transition-opacity duration-500 group-hover:opacity-100 lg:text-7xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => scrollToTarget('#contact')}
                  className="flex translate-y-0 items-center gap-2 text-3xl text-(--text-primary) uppercase transition-transform duration-500 lg:translate-y-full lg:text-5xl lg:group-hover:translate-y-0 2xl:text-6xl"
                >
                  Let&apos;s work
                  <ArrowSwap dir="right" size={40} />
                </button>
              </div>
            </div>

            <ResponsiveImage
              image={service.image}
              alt=""
              sizes="(max-width: 640px) 320px, (max-width: 1280px) 440px, 560px"
              frameClassName="contents"
              className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[320px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 origin-top scale-y-[1.15] rounded-lg opacity-0 grayscale transition-all duration-1000 group-hover:scale-y-100 group-hover:opacity-100 max-lg:scale-y-100 max-lg:opacity-60 sm:w-[440px] xl:w-[560px]"
            />

            <div className="relative z-10 space-y-4 text-white mix-blend-difference">
              <h1 className="text-4xl text-white lg:text-5xl">{service.title}</h1>
              <p className="line-clamp-3 max-w-xl text-lg text-white/80">{service.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
