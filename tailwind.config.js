/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        surfaceAlt: 'var(--surface-alt)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--border)',
        primary: 'var(--primary)',
        primaryDark: 'var(--primary-dark)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        // Kept in sync with --font-mono in index.css rather than
        // duplicating the stack here.
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        xl2: '22px',
      },
    },
  },
  plugins: [],
}

