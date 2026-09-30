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
  const faceSpacer = useRef<HTMLDivElement>(null)
  const faces = useRef<HTMLDivElement>(null)
  const footSpacer = useRef<HTMLDivElement>(null)
  const foot = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      faces.current,
      { y: 300 },
      {
        y: '-75%',
        ease: 'none',
        scrollTrigger: { trigger: faceSpacer.current, start: 'top bottom', end: 'bottom 25%', scrub: true },
      },
    )
    gsap.fromTo(
      foot.current,
      { y: 300 },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: { trigger: footSpacer.current, start: '-45% bottom', end: 'top 25%', scrub: true },
      },
    )
  })

  return (
    <>
      <div id="footer" ref={faceSpacer} className="relative h-screen" />
      <div
        ref={faces}
        aria-hidden="true"
        className="fixed bottom-0 left-0 z-[1] h-screen w-screen bg-black bg-cover bg-center grayscale md:bg-contain"
        style={{ backgroundImage: `url(${profile.photo})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
      </div>
      <div ref={footSpacer} className="relative h-[75vh]" />
      <footer
        ref={foot}
        className="fixed bottom-0 left-0 z-0 flex h-[75vh] w-full flex-col justify-between bg-black pt-16 pb-6 text-(--color-primary-fixed)"
      >
        <div className="container-x flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <p className="font-secondary text-lg text-(--light-text-fixed)">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-2 text-3xl font-light uppercase"
              >
                <Roll>{s.label}</Roll>
                <ArrowSwap size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="px-2 pb-[3vw]">
          <FitName text={profile.name} animate={false} className="scale-y-175 !text-(--color-primary-fixed)" />
        </div>
      </footer>
    </>
  )
}
