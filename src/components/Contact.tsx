import { useState, type FormEvent } from 'react'
import { profile } from '../data/site'
import { ArrowSwap, Roll, Separator } from './ui'

const words = Array.from({ length: 6 }).flatMap(() => ["Let's talk", "Let's work"])

const infos = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Location', value: profile.location, href: 'https://maps.google.com/?q=Dubai' },
  { label: 'LinkedIn', value: 'in/mohamedhemdan', href: profile.linkedin },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="pt-32 pb-32 lg:pt-48">
      <div className="container-x">
        <Separator />
      </div>

      <div className="mask-x overflow-hidden py-[5vw] font-black">
        <div className="animate-scroll-x-reverse flex w-max whitespace-nowrap">
          {[...words, ...words].map((word, i) => (
            <h1
              key={i}
              className={`scale-y-200 px-[2vw] text-[clamp(90px,13vw,13vw)] leading-none font-black ${
                i % 2 ? 'outlined-text' : ''
              }`}
            >
              {word}
            </h1>
          ))}
        </div>
      </div>

      <div className="container-x space-y-20 lg:space-y-24">
        <h1 className="text-6xl leading-[0.95] font-medium normal-case sm:text-7xl lg:text-9xl 2xl:text-[10.75rem]">
          ✺ Interested in
          <br />
          working with{' '}
          <span className="inline-block h-[0.75em] overflow-hidden rounded-full align-middle">
            <img src={profile.photo} alt="" className="aspect-video h-full origin-[40%_0%] scale-[2.4] object-cover object-[50%_20%] grayscale" />
          </span>{' '}
          ?
        </h1>

        <div className="flex flex-wrap gap-4">
          {infos.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group relative rounded-full border-2 border-(--border) p-6 text-2xl text-(--text-primary) transition-colors duration-300 hover:border-(--text-primary) sm:p-8 sm:text-3xl"
            >
              <span className="absolute -top-4 left-8 translate-y-2 rounded-full bg-(--bg-primary-inverse) px-4 py-1 font-secondary text-sm text-(--text-primary-inverse) opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {info.label}
              </span>
              <Roll>{info.value}</Roll>
            </a>
          ))}
        </div>

        <form onSubmit={submit} className="border-y border-(--border)">
          <div className="grid md:grid-cols-2">
            <label className="block space-y-4 border-(--border) py-12 md:border-r md:py-16 md:pr-8">
              <h1 className="text-3xl">Your name *</h1>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mohamed Ali"
                className="w-full text-2xl"
              />
            </label>
            <label className="block space-y-4 border-t border-(--border) py-12 md:border-t-0 md:py-16 md:pl-8">
              <h1 className="text-3xl">Your email *</h1>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full text-2xl"
              />
            </label>
          </div>
          <div className="grid border-t border-(--border) lg:grid-cols-12">
            <label className="block space-y-4 py-12 lg:col-span-9 lg:py-16 lg:pr-8">
              <h1 className="text-3xl">Your message *</h1>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product, timeline and goals…"
                className="w-full resize-none text-2xl"
              />
            </label>
            <button
              type="submit"
              className="group mb-8 flex min-h-40 flex-col items-start justify-between bg-(--bg-primary-inverse) p-8 text-4xl text-(--text-primary-inverse) uppercase lg:col-span-3 lg:my-0 lg:aspect-square lg:min-h-0"
            >
              <ArrowSwap size={48} />
              <Roll>Send to me</Roll>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
