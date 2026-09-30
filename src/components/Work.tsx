import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { X } from 'lucide-react'
import { featuredWork } from '../data/site'
import { getLenis, scrollToTarget } from '../lib/scroll'
import { ArrowSwap, Roll, Separator } from './ui'

type Project = (typeof featuredWork)[number]

function ProjectDialog({
  project,
  index,
  onClose,
  onNext,
}: {
  project: Project | null
  index: number
  onClose: () => void
  onNext: () => void
}) {
  const open = project !== null
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (project) bodyRef.current?.scrollTo({ top: 0 })
  }, [project])

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop()
    else lenis?.start()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const p = featuredWork[index]
  const num = String(index + 1).padStart(2, '0')

  return createPortal(
    <div inert={!open}>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[48] bg-white/50 backdrop-blur-sm transition-opacity duration-700 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <button
        type="button"
        aria-label="Close project"
        onClick={onClose}
        className={`group fixed top-4 right-4 z-[52] grid size-20 place-items-center rounded-full bg-(--color-primary-fixed) text-black mix-blend-difference transition-all duration-700 lg:size-32 ${
          open ? 'translate-y-0 opacity-100 delay-500' : 'pointer-events-none -translate-y-[150%] opacity-0'
        }`}
      >
        <X size={40} strokeWidth={1.25} className="transition-transform duration-500 group-hover:rotate-90" />
      </button>
      <div
        ref={bodyRef}
        role="dialog"
        aria-modal="true"
        data-lenis-prevent
        className={`no-scrollbar fixed bottom-0 left-0 z-[50] size-full overflow-y-auto bg-(--bg-secondary) transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {p && (
          <div className="container-x space-y-16 py-28 lg:space-y-24 lg:py-32">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="space-y-4">
                <span className="font-secondary text-2xl font-light text-(--text-secondary)">{num} / 09</span>
                <h1 className="text-6xl font-medium lg:text-7xl 2xl:text-8xl">{p.title}</h1>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-20 w-fit items-center gap-4 rounded-full border-2 border-(--text-primary) px-8 text-2xl uppercase transition-colors duration-300 hover:bg-(--bg-primary-inverse) hover:text-(--text-primary-inverse)"
                >
                  <Roll>Visit site</Roll>
                  <ArrowSwap size={28} />
                </a>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-(--border) bg-black">
              <img src={p.image} alt={p.title} className="block h-auto w-full" />
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-6 lg:col-span-3">
                <h1 className="text-3xl text-(--text-secondary)">Project tags</h1>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rad border border-(--border) px-4 py-1 font-secondary text-(--text-primary)">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6 lg:col-span-6">
                <h1 className="text-3xl text-(--text-secondary)">About work</h1>
                <p className="text-xl leading-relaxed text-(--text-primary) lg:text-2xl">{p.about}</p>
              </div>
              <div className="space-y-6 lg:col-span-3">
                <h1 className="text-3xl text-(--text-secondary)">Tools</h1>
                <ul className="space-y-2">
                  {p.tools.map((tool) => (
                    <li key={tool} className="border-b border-(--border) pb-2 font-secondary text-lg text-(--text-primary)">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={onNext}
              className="group flex w-full items-center justify-between border-t-2 border-(--border) pt-10 text-left"
            >
              <span className="font-secondary text-xl text-(--text-secondary)">Next project</span>
              <span className="flex items-center gap-4 text-5xl uppercase lg:text-7xl">
                <Roll>{featuredWork[(index + 1) % featuredWork.length].title}</Roll>
                <ArrowSwap dir="right" size={48} />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

export function Work() {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [last, setLast] = useState(0)
  const openProject = (i: number) => {
    setLast(i)
    setActive(i)
  }
  const close = useCallback(() => setActive(null), [])
  const next = useCallback(() => {
    const n = (last + 1) % featuredWork.length
    setLast(n)
    setActive(n)
  }, [last])

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.project-frame').forEach((frame) => {
        const img = frame.querySelector('.parallax-image')
        if (!img) return
        gsap.fromTo(img, { y: -25 }, { y: 25, ease: 'none', scrollTrigger: { trigger: frame, scrub: true } })
      })
    },
    { scope: root },
  )

  return (
    <section id="portfolio" ref={root} className="pt-32 lg:pt-48">
      <div className="container-x space-y-16">
        <Separator />
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            <p className="max-w-xl text-2xl leading-snug font-medium lg:text-4xl">
              <span className="fill-text">
                Banking, government, hospitality and hiring products — shipped with care for every pixel and every
                millisecond.
              </span>
            </p>
            <button
              type="button"
              onClick={() => scrollToTarget('#contact')}
              className="group flex items-center gap-3 rounded-full border-2 border-(--text-primary) px-6 py-3 text-2xl uppercase transition-colors duration-300 hover:bg-(--bg-primary-inverse) hover:text-(--text-primary-inverse)"
            >
              <Roll>Let&apos;s work</Roll>
              <ArrowSwap dir="right" size={24} />
            </button>
          </div>
          <h1 className="text-end text-[clamp(50px,10vw,10vw)] leading-[clamp(46px,8vw,8vw)] font-bold">
            <span className="fill-text">
              Featured
              <br />
              <span className="align-middle font-secondary text-[clamp(18px,3vw,4rem)] font-normal">01 — 09</span>{' '}
              Work
            </span>
          </h1>
        </div>
      </div>

      <div className="mt-24 lg:mt-32">
        {featuredWork.map((project, i) => {
          const num = String(i + 1).padStart(2, '0')
          return (
            <div
              key={project.title}
              data-cursor="view"
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title}`}
              onClick={() => openProject(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openProject(i)}
              className="project-frame relative h-screen cursor-pointer overflow-clip lg:cursor-none"
            >
              <div className="relative -top-[100vh] h-[300vh]">
                <div className="sticky top-0 h-screen overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="parallax-image absolute inset-0 size-full scale-[1.08] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />
                  <div className="relative flex h-full items-center justify-center px-4 text-white lg:justify-between lg:px-16">
                    <span className="hidden font-secondary text-5xl font-light lg:block">{num}</span>
                    <div className="flex flex-col items-center gap-8">
                      <span className="font-secondary text-2xl font-light lg:hidden">{num}</span>
                      <h1 className="text-center text-5xl font-medium text-nowrap text-white sm:text-6xl lg:text-7xl">
                        {project.title}
                      </h1>
                      <div className="w-80 overflow-hidden rounded-lg sm:w-[28rem] lg:w-[40rem]">
                        <img src={project.image} alt={project.title} loading="lazy" className="block h-auto w-full" />
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rad border border-white/70 px-4 py-1 font-secondary text-sm text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden font-secondary text-5xl font-light lg:block">{num}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <ProjectDialog
        project={active === null ? null : featuredWork[active]}
        index={last}
        onClose={close}
        onNext={next}
      />
    </section>
  )
}
