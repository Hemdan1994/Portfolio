import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDown, Star as StarIcon } from 'lucide-react'
import { badgeFaces, heroStats, mosaic, profile } from '../data/site'
import { scrollToTarget } from '../lib/scroll'
import { FitName } from './FitName'
import { ArrowSwap, Roll, Separator } from './ui'

const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]

function HireBadge() {
  const text = 'hire me ✺ hire me ✺ hire me ✺ hire me ✺ '
  return (
    <button
      type="button"
      onClick={() => scrollToTarget('#contact')}
      aria-label="Hire me — go to contact"
      className="group scale-up relative grid size-48 place-items-center text-(--color-primary-fixed) lg:size-64"
    >
      <svg viewBox="0 0 500 500" className="spin-slow absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id="hire-circle" d="M250,250 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" />
        </defs>
        <text className="font-primary text-5xl uppercase" fill="currentColor" letterSpacing="2">
          <textPath href="#hire-circle" textLength="940">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="arrow-swap" data-dir="down" style={{ width: 34, height: 34 }}>
        <ArrowDown size={34} strokeWidth={1.5} />
        <ArrowDown size={34} strokeWidth={1.5} aria-hidden="true" />
      </span>
    </button>
  )
}

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      gsap.to('.hero-wrapper', {
        y: 300,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-wrapper', start: 'top top', scrub: true },
      })

      gsap.fromTo(
        '.mosaic-grid',
        { scale: 1.5 },
        { scale: 1, ease: 'power1.inOut', scrollTrigger: { trigger: '.mosaic-wrap', scrub: 1.5 } },
      )

      mm.add({ desktop: '(min-width: 1024px)', mobile: '(max-width: 1023px)' }, (ctx) => {
        gsap.to('.mosaic-mid', {
          y: ctx.conditions?.desktop ? 192 : 32,
          ease: 'none',
          scrollTrigger: { trigger: '.mosaic-wrap', scrub: 1.5 },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="home" ref={root} className="!min-h-0">
      <div className="hero-wrapper relative space-y-12 pt-28 pb-8">
        <div className="px-2">
          <FitName text={profile.name} className="scale-y-175" />
        </div>
        <div className="container-x grid grid-cols-1 gap-4 text-center font-secondary text-xl text-(--text-primary) sm:grid-cols-2 lg:gap-32 lg:text-3xl">
          <div className="overflow-hidden">
            <span className="slide-up block" style={{ animationDelay: '500ms' }}>
              {profile.role}
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="slide-up block" style={{ animationDelay: '500ms' }}>
              Based in {profile.location}
            </span>
          </div>
        </div>
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:hidden">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-1 text-2xl font-light uppercase"
            >
              <Roll>{s.label}</Roll>
              <ArrowSwap size={18} />
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollToTarget('#contact')}
            className="group flex items-center gap-2 rounded-full border-2 border-(--text-primary) px-5 py-2 text-2xl uppercase"
          >
            <Roll>Let&apos;s work</Roll>
            <ArrowSwap dir="right" size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10 grid h-screen bg-(--color-landing) lg:grid-cols-12">
        <div className="relative hidden lg:col-span-3 lg:flex lg:justify-center lg:pt-32">
          <HireBadge />
        </div>
        <div className="relative overflow-hidden lg:col-span-6">
            <img
              src={profile.heroPhoto}
              alt={profile.name}
              width={800}
              height={1312}
              sizes="(max-width: 1023px) 100vw, 50vw"
              fetchPriority="high"
              decoding="async"
              className="fade-in size-full object-cover object-[50%_35%] grayscale contrast-110"
            />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute top-6 right-4 lg:hidden">
            <HireBadge />
          </div>
        </div>
        <div className="relative hidden flex-col items-center gap-6 pt-32 lg:col-span-3 lg:flex">
          {socials.map((s) => (
            <div key={s.label} className="overflow-hidden">
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group slide-up flex items-center gap-2 text-3xl font-light tracking-wide text-(--color-primary-fixed) uppercase"
                style={{ animationDelay: '700ms' }}
              >
                <Roll>{s.label}</Roll>
                <ArrowSwap size={26} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="sticky top-0 z-[2] bg-(--bg-secondary) py-10 lg:py-16">
          <div className="fade-in absolute -top-20 left-1/2 z-10 flex w-max -translate-x-1/2 items-center gap-4 bg-black p-2 pr-5">
            <div className="flex">
              {badgeFaces.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  decoding="async"
                  className="size-11 rounded-full border-2 border-black object-cover"
                  style={{ marginLeft: i ? -14 : 0 }}
                />
              ))}
            </div>
            <div className="text-(--color-primary-fixed)">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1 font-secondary text-sm">98%</span>
              </div>
              <div className="font-secondary text-xs text-(--light-text-fixed) uppercase">Certified UI Developer</div>
            </div>
          </div>

          <div className="container-x grid grid-cols-3 gap-4 pt-8 text-center">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-secondary text-5xl font-medium text-(--text-primary) md:text-7xl lg:text-8xl">
                  {stat.value}
                </div>
                <h1 className="mt-2 text-lg text-(--text-secondary) md:text-3xl lg:text-4xl">{stat.label}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 bg-(--bg-secondary) pb-16 lg:pb-48">
          <div className="container-x space-y-10 pt-10 lg:space-y-16 lg:pt-16">
            <Separator />
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <p className="font-secondary text-xl text-(--text-primary) lg:w-140 lg:text-2xl">
                “I build fast, pixel-perfect web experiences that help products stand out and rank.”
              </p>
              <div className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => scrollToTarget('#portfolio')}
                  className="group slide-up flex items-center gap-3 text-4xl uppercase lg:text-5xl"
                >
                  <Roll>My work</Roll>
                  <ArrowSwap dir="down" size={40} />
                </button>
              </div>
            </div>
          </div>

          <div className="mosaic-wrap mt-10 overflow-hidden lg:mt-16 border-y border-(--border) bg-black lg:aspect-[1.5/1]">
            <div className="mosaic-grid grid grid-cols-3 gap-2 p-2 lg:gap-4 lg:p-4">
              {mosaic.map((col, ci) => (
                <div key={ci} className={`flex flex-col gap-2 lg:gap-4 ${ci === 1 ? 'mosaic-mid' : ''}`}>
                  {col.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      width={800}
                      height={600}
                      sizes="33vw"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/12] w-full rounded-xl object-cover object-top"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
