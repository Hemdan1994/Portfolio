import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { profile } from '../data/site'
import { FitName } from './FitName'
import { ArrowSwap, Roll } from './ui'

const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export function Footer() {
  const foot = useRef<HTMLElement>(null)
  const name = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      name.current,
      { yPercent: 40, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: foot.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
      },
    )
  })

  return (
    <footer
      id="footer"
      ref={foot}
      className="relative overflow-hidden bg-black pt-8 text-(--color-primary-fixed)"
    >
      <div className="container-x flex flex-col items-center gap-5 text-center">
        <p className="font-secondary text-base text-(--light-text-fixed) sm:text-lg">
          © {new Date().getFullYear()} {profile.name} All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-1.5 text-xl font-light uppercase sm:text-2xl"
            >
              <Roll>{s.label}</Roll>
              <ArrowSwap size={18} />
            </a>
          ))}
        </div>
      </div>
      <div ref={name} className="px-2 pt-3 pb-[1vw]">
        <FitName text={profile.name} animate={false} className="mb-[0.72em] origin-top scale-y-175 !text-(--color-primary-fixed)" />
      </div>
    </footer>
  )
}
