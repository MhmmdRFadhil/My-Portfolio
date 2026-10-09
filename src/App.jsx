import { MotionConfig } from 'framer-motion'
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
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
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
        <MotionConfig reducedMotion="user">
          <AppContent />
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  )
}
