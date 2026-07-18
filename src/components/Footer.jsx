import { profile } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './ui/Reveal'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer className="pb-11 pt-6">
      <Reveal y={14} className="wrap flex flex-wrap items-center justify-center gap-4 pt-7 border-t-2 border-[var(--border-soft)]">
        <p className="text-muted text-[13.5px] text-center">
          © {new Date().getFullYear()} {profile.name}.<br className="sm:hidden" /> {t.footer.tagline}
        </p>
      </Reveal>
    </footer>
  )
}
