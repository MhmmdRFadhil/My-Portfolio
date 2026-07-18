import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { translations } from './data/translations'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function AppContent() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <>
      <a href="#main" className="skip-link">{t.app.skipToContent}</a>
      <ScrollProgress />

      {/* Bentuk solid mengambang di background — pengganti aurora gradient lama */}
      <div className="chunky-field" aria-hidden="true">
        <span className="chunky-shape square" style={{ width: 160, height: 160, top: -70, left: -90, borderColor: 'var(--primary)' }} />
        <span className="chunky-shape square" style={{ width: 140, height: 140, bottom: -80, left: '20%', borderColor: 'var(--accent)', animationDelay: '-8s' }} />
        <span className="chunky-shape circle" style={{ width: 130, height: 130, bottom: -70, right: -80, borderColor: 'var(--accent2)', animationDelay: '-14s' }} />
        <span className="chunky-shape circle" style={{ width: 120, height: 120, top: -60, right: -70, borderColor: 'var(--primary)', animationDelay: '-20s' }} />
        <span className="chunky-shape circle" style={{ width: 80, height: 80, top: '45%', left: -55, borderColor: 'var(--accent2)', animationDelay: '-26s' }} />
        <span className="chunky-shape square" style={{ width: 100, height: 100, bottom: '10%', right: -55, borderColor: 'var(--accent)', animationDelay: '-32s' }} />
      </div>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
