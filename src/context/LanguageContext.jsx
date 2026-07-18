import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'en')

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  const toggleLanguage = () => setLang((l) => (l === 'en' ? 'id' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
