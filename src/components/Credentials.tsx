import { aiCases, certificates } from '../data/site'
import { ArrowSwap, Label, Roll, Star } from './ui'

function CertCard({ cert, n }: { cert: (typeof certificates)[number]; n: number }) {
  return (
    <article className="rad flex w-[22rem] shrink-0 flex-col justify-between gap-10 border-2 border-(--border) bg-(--bg-primary) p-8 sm:w-[30rem]">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-sm tracking-widest text-(--light-text-fixed) uppercase">{cert.date}</span>
        <span className="font-secondary text-3xl text-(--text-primary) opacity-50">{String(n).padStart(2, '0')}</span>
      </div>
      <p className="text-lg leading-relaxed sm:text-xl">“{cert.description}”</p>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-medium sm:text-3xl">{cert.title}</h1>
          <p className="text-base">{cert.issuer}</p>
        </div>
        <a
          href={cert.pdf}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${cert.title} certificate`}
          className="group grid size-14 shrink-0 place-items-center rounded-full border-2 border-(--border) text-(--text-primary) transition-colors hover:bg-(--bg-primary-inverse) hover:text-(--text-primary-inverse)"
        >
          <ArrowSwap size={22} />
        </a>
      </div>
    </article>
  )
}

function AICard({ item, n }: { item: (typeof aiCases)[number]; n: number }) {
  return (
    <article className="rad flex w-[22rem] shrink-0 flex-col justify-between gap-10 border-2 border-(--border) bg-(--bg-primary) p-8 sm:w-[30rem]">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-sm tracking-widest text-(--light-text-fixed) uppercase">{item.context}</span>
        <Star className="size-7 text-(--text-primary) opacity-60" />
      </div>
      <p className="text-lg leading-relaxed sm:text-xl">{item.copy}</p>
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-2xl font-medium sm:text-3xl">{item.title}</h1>
        <span className="font-secondary text-3xl text-(--text-primary) opacity-50">{String(n).padStart(2, '0')}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rad border border-(--border) px-4 py-1 font-secondary text-sm text-(--text-secondary)">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Credentials() {
  const certLoop = [...certificates, ...certificates, ...certificates, ...certificates]
  const aiLoop = [...aiCases, ...aiCases, ...aiCases, ...aiCases]

  return (
    <section id="credentials" className="overflow-hidden py-32 lg:py-48">
      <div className="container-x mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="space-y-8">
          <Label>Certificates & AI</Label>
          <h1 className="text-6xl leading-[0.95] font-medium lg:text-7xl 2xl:text-8xl">
            <span className="fill-text">
              Proof of
              <br />
              my craft
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="font-secondary text-7xl font-medium text-(--text-primary) lg:text-8xl">98%</div>
          <div className="space-y-1">
            <h1 className="text-3xl">UI certification</h1>
            <a
              href={certificates[1].pdf}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-xl text-(--text-secondary) uppercase"
            >
              <Roll>NTI Egypt</Roll>
              <ArrowSwap size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mask-x space-y-8">
        <div className="animate-scroll-x flex w-max [&>*]:mr-8 hover:[animation-play-state:paused]">
          {certLoop.map((cert, i) => (
            <CertCard key={i} cert={cert} n={(i % certificates.length) + 1} />
          ))}
        </div>
        <div className="animate-scroll-x-reverse flex w-max [&>*]:mr-8 hover:[animation-play-state:paused]">
          {aiLoop.map((item, i) => (
            <AICard key={i} item={item} n={(i % aiCases.length) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
