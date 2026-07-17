import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <ThemeProvider>
      {/* Bentuk solid mengambang di background — pengganti aurora gradient lama */}
      <div className="chunky-field" aria-hidden="true">
        <span className="chunky-shape square" style={{ width: 160, height: 160, top: -70, left: -90, borderColor: 'var(--primary)' }} />
        <span className="chunky-shape square" style={{ width: 140, height: 140, bottom: -80, left: '20%', borderColor: 'var(--accent)', animationDelay: '-8s' }} />
        <span className="chunky-shape circle" style={{ width: 130, height: 130, bottom: -70, right: -80, borderColor: 'var(--accent2)', animationDelay: '-14s' }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
