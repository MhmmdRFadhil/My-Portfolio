import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram, MapPin, Mail, Send } from 'lucide-react'
import { contactInfo } from '../data/site'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const iconMap = { instagram: Instagram, pin: MapPin, email: Mail }

// Set in .env as VITE_FORMSPREE_ENDPOINT (see .env.example) — a Formspree
// form endpoint, e.g. https://formspree.io/f/xxxxxxxx. Not a secret (it's
// meant to be public in client-side code), just kept out of source so
// swapping accounts doesn't require a code change.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      console.error('VITE_FORMSPREE_ENDPOINT is not set — see .env.example')
      setStatus('error')
      return
    }

    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-12">
          <span className="eyebrow">Contact</span>
          <h2 className="text-3xl md:text-[40px]">Let's work together</h2>
          <p className="text-muted mt-3">Interested in collaborating or have a role in mind? Send a message and I'll get back to you within 1–2 business days.</p>
        </Reveal>

        <Reveal delay={0.1} className="card-chunky overflow-hidden grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact info panel */}
          <div className="relative bg-[var(--primary-fill)] text-white p-6 md:p-8 flex flex-col justify-center overflow-hidden">
            <Send className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none" size={170} strokeWidth={1.5} />

            <div className="relative flex flex-col gap-5">
              <div>
                <h3 className="text-white text-xl md:text-2xl mb-1.5">Get in touch</h3>
                <p className="text-white/75 text-sm">Prefer social? DM me on Instagram and I'll usually reply within a day or two, even on weekends.</p>
              </div>

              <div className="flex flex-col gap-3.5">
                {contactInfo.map((c) => {
                  const Icon = iconMap[c.icon]
                  const inner = (
                    <>
                      <span className="w-9 h-9 rounded-lg bg-white/15 border-2 border-white/25 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} />
                      </span>
                      <span className="text-[14.5px] text-white/90">{c.text}</span>
                    </>
                  )
                  return c.href ? (
                    <a
                      key={c.text}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3.5 hover:opacity-80 transition-opacity"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.text} className="flex items-center gap-3.5">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13.5px] font-bold mb-1.5">Name</label>
              {/* Underline is two stacked bars instead of a plain
                  border-bottom: the soft static one, and a primary-color
                  one that grows in from the left on focus (peer-focus)
                  rather than just flipping color instantly. */}
              <div className="relative">
                <input
                  id="name" name="name" type="text" required placeholder="Your name"
                  className="peer w-full px-1 py-2 border-0 bg-transparent text-ink focus:outline-none"
                />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--border-soft)]" />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 ease-out" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[13.5px] font-bold mb-1.5">Email</label>
              <div className="relative">
                <input
                  id="email" name="email" type="email" required placeholder="you@example.com"
                  className="peer w-full px-1 py-2 border-0 bg-transparent text-ink focus:outline-none"
                />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--border-soft)]" />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 ease-out" />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-[13.5px] font-bold mb-1.5">Message</label>
              <div className="relative">
                <textarea
                  id="message" name="message" required placeholder="Tell me about your project or requirement..."
                  className="peer w-full min-h-[80px] px-1 py-2 border-0 bg-transparent text-ink resize-none focus:outline-none"
                />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--border-soft)]" />
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 ease-out" />
              </div>
            </div>
            <Button
              as="button"
              type="submit"
              variant="primary"
              disabled={status === 'sending'}
              className="mt-4 w-full sm:w-fit disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>
            <AnimatePresence mode="wait">
              {status === 'sent' && (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[13.5px] text-primary mt-3"
                >
                  Thanks! Your message has been sent — I'll get back to you within 1–2 business days.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[13.5px] text-red-500 mt-3"
                >
                  Something went wrong sending that — please try again, or email me directly instead.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
