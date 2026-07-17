import { aboutText, stats } from '../data/site'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-[130px]">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="text-3xl md:text-[40px] mb-6">Building Android apps people actually enjoy using</h2>
          {aboutText.map((p, i) => (
            <p key={i} className="text-muted text-[16px] mb-4">{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-chunky p-6"
            >
              <div className="font-display text-[32px] font-extrabold text-primary">{s.num}</div>
              <div className="text-[13.5px] text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
