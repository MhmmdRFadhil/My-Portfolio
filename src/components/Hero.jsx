import { ArrowUpRight, Download, Github, Linkedin, Instagram, MapPin, Code2 } from 'lucide-react'
import { profile, socials } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import cvFile from '../assets/CV - MUHAMMAD RIZQAN FADHIL.pdf'

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram }

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const nameWords = profile.name.split(' ')
  const lastName = nameWords.pop()

  return (
    <section id="home" className="hero-section">
      <div className="wrap hero-grid">
        <div className="hero-copy hero-entrance">
          <span className="hero-role"><span aria-hidden="true" />{profile.role}</span>
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1><span className="block">{nameWords[0]}</span>{nameWords.slice(1).join(' ')} <span className="hero-name text-primary">{lastName}.</span></h1>
          <p className="hero-description">{profile.tagline[lang]}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="#projects">{t.hero.viewProjects}<ArrowUpRight size={17} /></Button>
            <Button href={cvFile} download="Muhammad Rizqan Fadhil - CV.pdf" variant="ghost"><Download size={16} />{t.hero.downloadCV}</Button>
          </div>
          <div className="hero-socials">
            <span className="flex items-center gap-1.5 text-muted text-xs"><MapPin size={14} />Indonesia</span>
            <span className="hero-social-divider" aria-hidden="true" />
            {socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="social-link"><Icon size={18} /></a>
            })}
          </div>
        </div>

        <Reveal delay={0.15} className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-label"><Code2 size={15} /><span>Kotlin & Jetpack Compose</span></div>
            <img src={profile.avatar} alt={profile.name} loading="eager" fetchpriority="high" decoding="async" className="hero-portrait" />
            <div className="portrait-caption">{t.hero.craft}</div>
          </div>
          <div className="hero-code" aria-label="Kotlin">
            <div className="flex items-center justify-between text-muted text-[11px] mb-3"><span>MainActivity.kt</span><span>KOTLIN</span></div>
            <code><span className="text-primary">fun</span> main() {'{'}<br /><span className="text-muted">&nbsp;&nbsp;println</span>(<span className="text-primary">"Hello, Android!"</span>)<br />{'}'}</code>
          </div>
        </Reveal>
      </div>
      <div className="wrap"><div className="hero-bottom"><span>{t.hero.focus}</span><span>Kotlin <span aria-hidden="true">/</span> Jetpack Compose <span aria-hidden="true">/</span> Clean Architecture</span></div></div>
    </section>
  )
}
