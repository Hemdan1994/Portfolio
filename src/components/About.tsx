import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  siAngular,
  siCursor,
  siFigma,
  siGreensock,
  siJavascript,
  siNextdotjs,
  siReact,
  siRedux,
  siSass,
  siTailwindcss,
  siTypescript,
  siUmbraco,
} from 'simple-icons'
import { experience, howIWork, profile, skillBars, techStack } from '../data/site'
import { ArrowSwap, Label, Roll } from './ui'

const icons = {
  siAngular,
  siCursor,
  siFigma,
  siGreensock,
  siJavascript,
  siNextdotjs,
  siReact,
  siRedux,
  siSass,
  siTailwindcss,
  siTypescript,
  siUmbraco,
}

function brandColor(hex: string) {
  const n = parseInt(hex, 16)
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
  return lum < 0.2 ? 'var(--text-primary)' : `#${hex}`
}

const titleClass = 'text-6xl leading-[0.95] font-medium lg:text-7xl 2xl:text-8xl'

export function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          { scaleX: 1, ease: 'power1.inOut', scrollTrigger: { trigger: bar, end: 'bottom center', scrub: 1.5 } },
        )
      })

      gsap.utils.toArray<HTMLElement>('.tool-item').forEach((item) => {
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power1.out', scrollTrigger: { trigger: item, end: 'top 70%', scrub: 1.5 } },
        )
      })

      const cards = gsap.utils.toArray<HTMLElement>('.stacked-card')
      cards.slice(0, -1).forEach((card) => {
        gsap.to(card, {
          scale: 0.85,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 80px', scrub: 0.3 },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="about" ref={root} className="py-12 lg:py-48">
      <div className="container-x space-y-20 lg:space-y-48">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-8">
            <Label>About</Label>
            <h1 className="text-[clamp(90px,12vw,12vw)] leading-[clamp(80px,9vw,9vw)] font-semibold tracking-tight">
              <span className="fill-text">
                About
                <br />
                me
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed lg:text-xl">{profile.summary[0]}</p>
          </div>
          <div className="mx-auto aspect-[2/3] w-full max-w-md overflow-hidden lg:max-w-lg">
            <img
              src={profile.photo}
              alt={profile.name}
              width={800}
              height={1200}
              sizes="(max-width: 1023px) 28rem, 32rem"
              loading="lazy"
              decoding="async"
              className="zoom-out-image size-full scale-125 object-cover object-center grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-32">
          <div>
            <h1 className={`lg:sticky lg:top-16 ${titleClass}`}>
              <span className="fill-text">
                How do
                <br />I work
              </span>
            </h1>
          </div>
          <div className="space-y-16">
            {howIWork.map((line, i) => (
              <div key={i} className="space-y-4">
                <h1 className="text-4xl font-medium lg:text-5xl">
                  <span className="fill-text">✺ {String(i + 1).padStart(2, '0')}</span>
                </h1>
                <p className="text-2xl leading-snug font-medium lg:text-[2.3rem] lg:leading-tight">
                  <span className="fill-text">{line}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-32">
          <div>
            <h1 className={`lg:sticky lg:top-16 ${titleClass}`}>
              <span className="fill-text">
                My
                <br />
                skills
              </span>
            </h1>
          </div>
          <div className="space-y-4">
            {skillBars.map((skill, i) => (
              <div
                key={skill.name}
                className="group rounded-full border-2 border-(--border) p-1 transition-colors duration-300 hover:border-(--text-primary)"
              >
                <div className="relative flex items-center justify-between overflow-hidden rounded-full p-4 text-xl sm:text-3xl">
                  <div
                    className="skill-bar absolute inset-y-0 left-0 origin-left rounded-full bg-(--bg-primary-inverse)"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="relative flex items-center gap-4 text-white mix-blend-difference">
                    <span className="font-secondary text-lg opacity-50 transition-opacity group-hover:opacity-100 sm:text-2xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h1 className="text-white">{skill.name}</h1>
                  </div>
                  <span className="relative font-secondary text-lg text-white mix-blend-difference sm:text-2xl">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-32">
          <div>
            <h1 className={`lg:sticky lg:top-16 ${titleClass}`}>
              <span className="fill-text">
                My tech
                <br />
                stack
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
            {techStack.map((tool) => {
              const icon = icons[tool.icon]
              return (
                <div
                  key={tool.name}
                  className="tool-item group relative grid aspect-square place-items-center rounded-full border-2 border-(--border) transition-colors duration-300 hover:border-(--text-primary)"
                  style={{ ['--brand' as string]: brandColor(icon.hex) }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-1/3 fill-(--text-secondary) opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:fill-(--brand) group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>
                  <span className="absolute bottom-[14%] text-sm tracking-wider text-(--text-secondary) uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base">
                    {tool.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-32">
          <div>
            <div className="space-y-10 lg:sticky lg:top-20">
              <h1 className={titleClass}>
                <span className="fill-text">
                  My
                  <br />
                  experience
                </span>
              </h1>
              <div className="flex items-center gap-4 text-2xl uppercase">
                <span className="available-pulse relative size-3 rounded-full bg-[#08ff00]" />
                Available for work
              </div>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-20 items-center gap-4 rounded-full border-2 border-(--text-primary) px-8 text-2xl uppercase transition-colors duration-300 hover:bg-(--bg-primary-inverse) hover:text-(--text-primary-inverse)"
              >
                <Roll>View my CV</Roll>
                <ArrowSwap size={28} />
              </a>
            </div>
          </div>
          <div>
            {experience.map((job, i) => (
              <div
                key={`${job.company}-${i}`}
                className="stacked-card sticky top-20 flex origin-top flex-col gap-6 border-t-2 border-(--border) bg-(--bg-secondary) py-10 md:flex-row md:items-center md:gap-10"
              >
                <div className="rad w-fit shrink-0 border-2 border-(--border) px-8 py-6 font-secondary text-lg text-(--text-primary) md:w-52 md:text-center">
                  {job.years}
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-(--text-primary) md:text-2xl">{job.title}</h2>
                  <p className="text-lg capitalize">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
