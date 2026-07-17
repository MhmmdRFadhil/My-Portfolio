import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // Default tema selalu 'light' terlepas dari preferensi sistem — hanya
  // beralih ke dark kalau user sendiri yang pernah men-toggle (tersimpan
  // di localStorage).
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme harus dipakai di dalam <ThemeProvider>')
  return ctx
}
