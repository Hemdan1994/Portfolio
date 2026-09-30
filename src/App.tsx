import { About } from './components/About'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ScrollFx } from './components/ScrollFx'
import { Services } from './components/Services'
import { SmoothScroll } from './components/SmoothScroll'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollFx />
    </>
  )
}

export default App
