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
        <span className="chunky-shape square" style={{ width: 160, height: 160, top: -50, left: -60, borderColor: 'var(--primary)' }} />
        <span className="chunky-shape circle" style={{ width: 130, height: 130, top: '18%', right: -60, borderColor: 'var(--accent2)' }} />
        <span className="chunky-shape square" style={{ width: 140, height: 140, bottom: -50, left: '20%', borderColor: 'var(--accent)', animationDelay: '-8s' }} />
        <span className="chunky-shape square" style={{ width: 110, height: 110, bottom: '8%', right: -40, borderColor: 'var(--primary)', animationDelay: '-14s' }} />
        <span className="chunky-shape circle" style={{ width: 70, height: 70, top: '42%', left: '6%', borderColor: 'var(--accent2)', animationDelay: '-18s' }} />
        <span className="chunky-shape circle" style={{ width: 150, height: 150, bottom: '30%', left: -70, borderColor: 'var(--primary)', animationDelay: '-6s' }} />
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
