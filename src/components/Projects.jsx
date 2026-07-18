import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github as GithubIcon, Rocket, Plus, Award } from 'lucide-react'
import { projects, projectFilters } from '../data/site'
import Reveal from './ui/Reveal'

// Google Play's official brand mark (simple-icons, MIT licensed), not a
// generic phone glyph — this link specifically points to the Play Store.
function PlayStoreLogo({ size = 14, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  )
}

// Theme-aware CSS vars so badges shift with light/dark mode instead of
// sitting on top as a fixed color. Signals what kind of project it was:
// solid fill for employer work, tinted for academic/coursework, neutral
// surface for personal projects.
const categoryColor = {
  company: 'bg-[var(--primary-fill)] text-white',
  college: 'bg-[var(--accent)] text-[var(--primary-dark)]',
  other: 'bg-[var(--surface)] text-[var(--ink)]',
}

// Canonical skill ordering (language, then architecture, then UI, then
// data/network, then misc) so every project's tag row reads the same
// left-to-right regardless of the order skills were added to its entry.
const skillOrder = ['Kotlin', 'MVVM', 'MVI', 'Jetpack Compose', 'REST API', 'Firebase', 'Machine Learning']
const sortedSkills = (skills) =>
  [...skills].sort((a, b) => {
    const ia = skillOrder.indexOf(a)
    const ib = skillOrder.indexOf(b)
    if (ia === -1 && ib === -1) return a.localeCompare(b)
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })

const VISIBLE_SKILLS = 3

// Caps the tag row at 3 skills, folding the rest behind a "+N" pill —
// tapping it reveals the remaining skills inline, in the card itself.
function SkillsRow({ skills }) {
  const [expanded, setExpanded] = useState(false)
  const sorted = sortedSkills(skills)
  const hidden = sorted.length - VISIBLE_SKILLS
  const visible = expanded ? sorted : sorted.slice(0, VISIBLE_SKILLS)

  return (
    <div className="flex flex-wrap gap-1.5 pt-1">
      {visible.map((skill) => (
        <span
          key={skill}
          className="text-[11px] font-bold text-primary bg-surfaceAlt px-2.5 py-1 rounded-full"
        >
          {skill}
        </span>
      ))}
      {!expanded && hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="inline-flex items-center justify-center text-[11px] font-bold text-primary bg-surfaceAlt px-2.5 py-1 rounded-full hover:bg-[var(--primary-tint)] transition-colors"
        >
          <Plus size={10} strokeWidth={3} className="-mr-0.5" />
          {hidden}
        </button>
      )}
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [hasFiltered, setHasFiltered] = useState(false)
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">Projects</span>
          <h2 className="text-3xl md:text-[40px]">What I've built</h2>
          <p className="text-muted mt-3">Apps I've shipped to production, alongside smaller projects that mark milestones in my growth as a developer.</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-nowrap justify-safe-center gap-1.5 sm:gap-2.5 mb-10 py-1.5 overflow-x-auto scrollbar-none">
          {projectFilters.map((f) => {
            const isActive = filter === f.key
            return (
              <div key={f.key} className="relative flex-shrink-0 group transition-transform duration-150 ease-out active:translate-y-1">
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--primary-fill)] shadow-[0_4px_0_0_var(--primary-fill-shadow)] transition-shadow duration-150 ease-out group-active:shadow-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <button
                  onClick={() => { setFilter(f.key); setHasFiltered(true) }}
                  className={`relative z-10 text-[12.5px] sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-lg whitespace-nowrap transition-colors active:shadow-none
                    ${isActive
                      ? 'text-white'
                      : 'bg-surface text-muted shadow-[0_4px_0_0_var(--ghost-shadow)] hover:text-ink'}`}
                >
                  {f.label}
                </button>
              </div>
            )
          })}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => {
            const isPlayStore = p.link.includes('play.google.com')
            const LinkIcon = isPlayStore ? PlayStoreLogo : GithubIcon
            const linkLabel = isPlayStore ? 'Play Store' : 'Github'

            return (
              <Reveal key={p.id} delay={(i % 3) * 0.08} mount={hasFiltered}>
                <div className="group card-chunky flex flex-col h-full overflow-hidden transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[0_9px_0_0_var(--ghost-shadow)]">
                  <div className="aspect-[3/2] bg-surfaceAlt border-b-2 border-line relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className={`absolute top-3.5 left-3.5 text-[11px] font-bold px-2.5 py-1 rounded-full capitalize ${categoryColor[p.category]}`}>
                      {p.category}
                    </div>
                    {isPlayStore && (
                      <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[var(--accent2)] text-white">
                        <Rocket size={11} />
                        Published
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <h3 className="text-[19px]">{p.title}</h3>
                    {p.description && (
                      <p className="text-muted text-[13.5px] leading-relaxed line-clamp-3">{p.description}</p>
                    )}
                    {p.skills && <SkillsRow skills={p.skills} />}
                    <div className="flex gap-4 mt-auto pt-2">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13.5px] font-bold text-primary flex items-center gap-1.5"
                      >
                        <LinkIcon size={14} /> {linkLabel}
                      </a>
                      {p.certificate && (
                        <a
                          href={p.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13.5px] font-bold text-primary flex items-center gap-1.5"
                        >
                          <Award size={14} /> Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
