import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/site'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToId, smoothScrollTo } from '../utils/smoothScroll'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))

  const closeMenu = () => setOpen(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    // 'home' always goes to the true top (y=0), same as the back-to-top
    // button — at y=0 the sticky navbar is still in normal document flow
    // (not pinned yet), so it never overlaps the Hero content beneath it.
    if (id === 'home') {
      smoothScrollTo(0)
      history.pushState(null, '', '#home')
    } else {
      scrollToId(id, 0)
    }
    closeMenu()
  }

  return (
    <header className="sticky top-0 z-[100]">
      <div className="wrap pt-3.5">
        <nav className="flex items-center justify-between h-[76px] px-4 md:px-5
          bg-surface rounded-2xl shadow-[0_5px_0_0_var(--ghost-shadow)]">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="font-display font-extrabold text-lg flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            {profile.shortName}
            <span className="text-primary">{profile.handle}</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1.5 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-colors
                    ${active === link.id ? 'text-white bg-[var(--primary-fill)]' : 'text-muted hover:text-primary hover:bg-[var(--primary-tint)]'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle tema"
              className="w-10 h-10 rounded-xl border-2 border-line bg-surface flex items-center justify-center
                hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_var(--ghost-shadow)] transition-transform"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden w-10 h-10 rounded-xl border-2 border-line bg-surface flex items-center justify-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile nav — absolute supaya overlay di atas konten, tidak mendorong layout saat dibuka */}
      <div
        className={`md:hidden absolute inset-x-0 top-full transition-all duration-300 ease-out origin-top
          ${open ? 'opacity-100 scale-y-100 pointer-events-auto mt-3' : 'opacity-0 scale-y-95 pointer-events-none mt-0'}`}
      >
        <div className="wrap">
          <ul className="flex flex-col gap-3 p-4 bg-surface rounded-2xl
            shadow-[0_5px_0_0_var(--ghost-shadow)] list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block text-[15px] font-bold px-5 py-4 rounded-xl transition-colors
                    ${active === link.id ? 'text-white bg-[var(--primary-fill)]' : 'text-muted hover:text-primary hover:bg-[var(--primary-tint)]'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
