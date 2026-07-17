import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="pb-11 pt-6">
      <div className="wrap flex flex-wrap items-center justify-center gap-4 pt-7 border-t-2 border-[var(--border-soft)]">
        <p className="text-muted text-[13.5px] text-center">
          © {new Date().getFullYear()} {profile.name}. Built with clean architecture &amp; coffee.
        </p>
      </div>
    </footer>
  )
}
