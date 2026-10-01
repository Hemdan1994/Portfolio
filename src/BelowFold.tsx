import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Footer } from './components/Footer'
import { ScrollFx } from './components/ScrollFx'
import { Services } from './components/Services'
import { Work } from './components/Work'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Everything below the hero: loaded after first paint so the portrait can win the network. */
export function BelowFold() {
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      <About />
      <Credentials />
      <Work />
      <Services />
      <Contact />
      <Footer />
      <ScrollFx />
    </>
  )
}
