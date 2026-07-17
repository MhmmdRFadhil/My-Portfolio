import { useState } from 'react'
import { Smartphone, Github as GithubIcon } from 'lucide-react'
import { projects, projectFilters } from '../data/site'
import Reveal from './ui/Reveal'

// Fixed light backgrounds (not theme-dependent) — these badges float on
// top of project screenshots, so they need to stay legible regardless of
// theme rather than blend into a dark-mode tinted surface.
const categoryColor = {
  advanced: 'bg-[var(--primary-fill)] text-white',
  intermediate: 'bg-white text-[var(--primary-fill)]',
  other: 'bg-white text-[#1E1B2E]',
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">Projects</span>
          <h2 className="text-3xl md:text-[40px]">Selected work</h2>
          <p className="text-muted mt-3">A selection of production applications and focused projects that reflect my growth as an Android Developer.</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`text-[13.5px] font-bold px-5 py-2.5 rounded-2xl border-2 transition-colors
                ${filter === f.key
                  ? 'bg-[var(--primary-fill)] text-white border-[var(--primary-fill)] shadow-[0_4px_0_0_var(--primary-fill-shadow)]'
                  : 'bg-surface text-muted border-line shadow-[0_4px_0_0_var(--ghost-shadow)] hover:text-ink'}`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => {
            const isPlayStore = p.link.includes('play.google.com')
            const LinkIcon = isPlayStore ? Smartphone : GithubIcon
            const linkLabel = isPlayStore ? 'Play Store' : 'Github Source'

            return (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <div className="card-chunky flex flex-col h-full overflow-hidden transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[0_9px_0_0_var(--ghost-shadow)]">
                  <div className="aspect-[3/2] bg-surfaceAlt border-b-2 border-line relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    <div className={`absolute top-3.5 left-3.5 text-[11px] font-bold px-2.5 py-1 rounded-full capitalize ${categoryColor[p.category]}`}>
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <h3 className="text-[19px]">{p.title}</h3>
                    {p.description && (
                      <p className="text-muted text-[13.5px] leading-relaxed line-clamp-3">{p.description}</p>
                    )}
                    {p.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-bold text-primary bg-surfaceAlt px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4 mt-auto pt-2">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13.5px] font-bold text-primary flex items-center gap-1.5"
                      >
                        <LinkIcon size={14} /> {linkLabel}
                      </a>
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
