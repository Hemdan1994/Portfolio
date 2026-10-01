import { useEffect, useState, type ComponentType } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { SmoothScroll } from './components/SmoothScroll'

export default function App() {
  const [BelowFold, setBelowFold] = useState<ComponentType | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = () => {
      import('./BelowFold').then((mod) => {
        if (!cancelled) setBelowFold(() => mod.BelowFold)
      })
    }
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(load, { timeout: 800 })
      return () => {
        cancelled = true
        cancelIdleCallback(id)
      }
    }
    const timer = window.setTimeout(load, 1)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        {BelowFold ? <BelowFold /> : <div className="min-h-screen bg-(--bg-secondary)" aria-hidden="true" />}
      </main>
    </>
  )
}
