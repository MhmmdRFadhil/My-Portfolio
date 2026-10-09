import { skills } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './ui/Reveal'
import TiltWrap from './ui/TiltWrap'
import {
  Layers, Layers3, Zap, GitBranch, Cpu, Database, Globe, GitMerge, Flame, LayoutGrid,
} from 'lucide-react'

const iconMap = {
  compose: Layers, zap: Zap, branch: GitBranch, cpu: Cpu, db: Database,
  globe: Globe, git: GitMerge, flame: Flame, layout: LayoutGrid, kotlin: KotlinLogo,
}

// Kotlin's official brand mark (simple-icons, MIT licensed), not a generic
// icon-set glyph — this banner is specifically about the language.
function KotlinLogo({ size = 26, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  )
}

function SkillCard({ s, lang }) {
  const Icon = iconMap[s.icon]

  return (
    <TiltWrap max={3} className="h-full">
      <div className="card-chunky h-full p-5">
        <div className="flex items-start gap-3">
          <div className="skill-icon w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-primary bg-[var(--primary-tint)]">
            <Icon size={19} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base leading-snug break-words">{s.name}</h3>
            <p className="text-[13px] text-muted mt-1">{s.tag[lang]}</p>
          </div>
        </div>
        {s.blurb && <p className="text-sm text-muted leading-relaxed mt-4">{s.blurb[lang]}</p>}
      </div>
    </TiltWrap>
  )
}

export default function Skills() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="skills" className="py-24 md:py-[130px] relative bg-band">
      <div className="wrap">
        <Reveal className="max-w-xl mb-12">
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2 className="text-3xl md:text-[40px]">{t.skills.heading}</h2>
          <p className="text-muted mt-3">{t.skills.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="stack-banner flex items-center gap-5 rounded-[var(--radius-lg)] p-6 md:p-7 mb-8 relative overflow-hidden">
            <div className="stack-icon w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers3 size={26} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-1">{t.skills.bannerTitle}</h3>
              <p className="text-sm">{t.skills.bannerBody}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <Reveal
              key={s.name}
              delay={0.15 + i * 0.05}
              y={16}
              className="h-full"
            >
              <SkillCard s={s} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
