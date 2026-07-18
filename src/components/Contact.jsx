import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram, MapPin, Mail, Send } from 'lucide-react'
import { contactInfo } from '../data/site'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const iconMap = { instagram: Instagram, pin: MapPin, email: Mail }

function FieldError({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13px] text-red-500 mt-1.5"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

// Set in .env as VITE_FORMSPREE_ENDPOINT (see .env.example) — a Formspree
// form endpoint, e.g. https://formspree.io/f/xxxxxxxx. Not a secret (it's
// meant to be public in client-side code), just kept out of source so
// swapping accounts doesn't require a code change.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

function validate(form) {
  const errors = {}
  if (form.elements.name.validity.valueMissing) errors.name = "Oops, forgot your name there"
  if (form.elements.email.validity.valueMissing) errors.email = "Hey, we'll need your email"
  else if (form.elements.email.validity.typeMismatch) errors.email = "Hmm, that email doesn't look right"
  if (form.elements.message.validity.valueMissing) errors.message = "Don't leave me hanging, write something!"
  return errors
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const fieldErrors = validate(form)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    if (!FORMSPREE_ENDPOINT) {
      console.error('VITE_FORMSPREE_ENDPOINT is not set — see .env.example')
      setStatus('error')
      return
    }

    setStatus('sending')
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
          <p className="text-muted mt-3">Got a project, a role, or just wanna say hi? Shoot me a message and I'll get back to you in a day or two.</p>
        </Reveal>

        <Reveal delay={0.1} className="card-chunky overflow-hidden grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact info panel */}
          <div className="relative bg-[var(--primary-fill)] text-white p-6 md:p-8 flex flex-col justify-center overflow-hidden">
            <Send className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none" size={170} strokeWidth={1.5} />

            <div className="relative flex flex-col gap-5">
              <div>
                <h3 className="text-white text-xl md:text-2xl mb-1.5">Get in touch</h3>
                <p className="text-white/75 text-sm">Not really a form person? Slide into my Instagram DMs instead — same day or two reply, weekends included.</p>
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
          <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[13.5px] font-bold mb-1.5">Name</label>
              <div className={`rounded-[var(--radius-sm)] border-2 bg-[var(--surface)] transition-colors focus-within:border-[var(--primary)] ${errors.name ? 'border-red-500' : 'border-[var(--border-soft)]'}`}>
                <input
                  id="name" name="name" type="text" required placeholder="What's your name?"
                  aria-invalid={!!errors.name}
                  onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
                  className="w-full px-3.5 py-2.5 border-0 bg-transparent text-ink text-[17px] placeholder:text-[14px] focus:outline-none"
                />
              </div>
              <FieldError message={errors.name} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[13.5px] font-bold mb-1.5">Email</label>
              <div className={`rounded-[var(--radius-sm)] border-2 bg-[var(--surface)] transition-colors focus-within:border-[var(--primary)] ${errors.email ? 'border-red-500' : 'border-[var(--border-soft)]'}`}>
                <input
                  id="email" name="email" type="email" required placeholder="Where can I reach you?"
                  aria-invalid={!!errors.email}
                  onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: undefined }))}
                  className="w-full px-3.5 py-2.5 border-0 bg-transparent text-ink text-[17px] placeholder:text-[14px] focus:outline-none"
                />
              </div>
              <FieldError message={errors.email} />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-[13.5px] font-bold mb-1.5">Message</label>
              <div className={`rounded-[var(--radius-sm)] border-2 bg-[var(--surface)] transition-colors focus-within:border-[var(--primary)] ${errors.message ? 'border-red-500' : 'border-[var(--border-soft)]'}`}>
                <textarea
                  id="message" name="message" required placeholder="So, what's on your mind?"
                  aria-invalid={!!errors.message}
                  onChange={() => errors.message && setErrors((prev) => ({ ...prev, message: undefined }))}
                  className="w-full min-h-[80px] px-3.5 py-2.5 border-0 bg-transparent text-ink text-[17px] placeholder:text-[14px] resize-none focus:outline-none"
                />
              </div>
              <FieldError message={errors.message} />
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
