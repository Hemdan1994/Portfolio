import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { scrollToTarget } from '../lib/scroll'
import { ArrowSwap, Roll } from './ui'

const links = [
  { label: 'About', target: '#about' },
  { label: 'Portfolio', target: '#portfolio' },
  { label: 'Services', target: '#services' },
  { label: 'Contact', target: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* private mode */
    }
  }

  const go = (target: string) => {
    setOpen(false)
    scrollToTarget(target)
  }

  return (
    <>
      <header className="slide-down fixed top-0 left-0 z-40 hidden h-16 w-full mix-blend-difference lg:block">
        <nav className="container-x flex h-full items-center justify-between">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => go(link.target)}
              className="group text-2xl tracking-wider text-white uppercase"
            >
              <Roll>{link.label}</Roll>
            </button>
          ))}
        </nav>
      </header>

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed top-4 left-4 z-[45] grid size-14 place-items-center rounded-full bg-(--color-primary-fixed) mix-blend-difference lg:hidden"
      >
        <span className="relative block h-3 w-6">
          <span
            className={`absolute left-0 h-0.5 w-6 bg-black transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
          />
          <span
            className={`absolute left-0 h-0.5 w-6 bg-black transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
          />
        </span>
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[43] bg-black/75 transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <nav
        className={`fixed top-0 left-0 z-[44] flex h-full flex-col justify-center gap-3 px-4 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {links.map((link, i) => (
          <button
            key={link.label}
            type="button"
            onClick={() => go(link.target)}
            style={{ transitionDelay: open ? `${150 + i * 70}ms` : '0ms' }}
            className={`group flex w-fit items-center gap-4 rounded-full bg-(--color-primary-fixed) px-8 py-4 text-4xl font-medium text-black uppercase transition-all duration-500 ${
              open ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <Roll>{link.label}</Roll>
            <ArrowSwap dir="up-right" size={28} />
          </button>
        ))}
      </nav>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="fixed top-1/2 right-0 z-40 grid size-12 -translate-y-1/2 place-items-center rounded-l-xl border border-r-0 border-(--border) bg-(--bg-primary) text-(--text-primary) transition-colors hover:bg-(--bg-primary-inverse) hover:text-(--text-primary-inverse)"
      >
        {dark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
      </button>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => scrollToTarget(0)}
        className={`group fixed right-4 bottom-4 z-40 grid size-16 place-items-center rounded-full bg-(--color-primary-fixed) text-black mix-blend-difference transition-all duration-500 ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
        }`}
      >
        <ArrowSwap dir="up" size={28} />
      </button>
    </>
  )
}
