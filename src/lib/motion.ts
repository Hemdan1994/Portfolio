let loading: Promise<{
  gsap: typeof import('gsap').default
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
}> | null = null

/** Loads GSAP after first paint so the hero image is not stuck behind the motion bundle. */
export function loadMotion() {
  if (!loading) {
    loading = (async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      return { gsap, ScrollTrigger }
    })()
  }
  return loading
}
