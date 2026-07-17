# Portfolio — Android Developer

Personal portfolio site for **Muhammad Rizqan Fadhil**, an Android Developer
specializing in Kotlin and Jetpack Compose. Built with **React + Vite +
Tailwind CSS + Framer Motion**, featuring a solid-color "chunky"
neobrutalist design system, light/dark mode, and scroll-reveal animations.

Live: https://github.com/MhmmdRFadhil/My-Portfolio

## Tech stack

| Purpose | Choice |
|---|---|
| Build tool | [Vite](https://vitejs.dev) — fast dev server & builds |
| UI framework | [React](https://react.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) (utility-first, centralized design tokens) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev) |

## Getting started

Requires **Node.js 18+**. Check your version with:

```bash
node -v
```

Then, from the project root:

```bash
npm install      # install dependencies
npm run dev      # start the dev server (usually http://localhost:5173)
```

The page hot-reloads on save. To build for production:

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages,
etc.). The fastest path: connect this repo on [Vercel](https://vercel.com) —
it builds and deploys automatically on every push.

## Project structure

```
portfolio-react/
├─ index.html                 # HTML entry point, Google Fonts, favicon
├─ package.json                # dependencies & scripts
├─ vite.config.js              # Vite config
├─ tailwind.config.js          # Tailwind theme extensions
├─ postcss.config.js
├─ public/
│  └─ favicon.svg              # browser tab icon
└─ src/
   ├─ main.jsx                 # React entry point
   ├─ App.jsx                  # page layout — section order + background decor
   ├─ index.css                 # design tokens (colors, radius) + base styles
   ├─ context/
   │  └─ ThemeContext.jsx       # light/dark mode logic
   ├─ hooks/
   │  └─ useActiveSection.js    # tracks the active section on scroll (for the navbar)
   ├─ utils/
   │  └─ smoothScroll.js        # fixed-duration eased scroll (nav links, back-to-top)
   ├─ data/
   │  └─ site.js                 # ALL content — profile, projects, skills, experience
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Skills.jsx
      ├─ Projects.jsx
      ├─ Experience.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      ├─ BackToTop.jsx           # floating scroll-to-top button
      └─ ui/
         ├─ Button.jsx           # reusable "chunky" button
         ├─ Badge.jsx            # small tag/badge
         └─ Reveal.jsx           # scroll-reveal animation wrapper
```

**Rule of thumb:** to change *content* (text, projects, experience), edit
`src/data/site.js`. To change *look and feel* (colors, spacing), edit the
design tokens at the top of `src/index.css` or `tailwind.config.js`. Day to
day, you shouldn't need to touch the component files at all.

## Design system

All colors are defined once as CSS variables in `src/index.css` (`:root` for
light mode, `[data-theme="dark"]` for dark mode) — change a value there to
re-theme the entire site, including dark mode. Buttons, cards, and badges
follow a consistent "chunky" style: solid backgrounds with a hard drop
shadow (no blur) that matches the element's own color, rather than a
generic black shadow.

## Quick customization

- **Name, tagline, role:** `src/data/site.js` → `profile` object.
- **Projects / skills / experience:** the `projects`, `skillSet1`/`skillSet2`,
  and `experienceData` arrays in the same file.
- **Primary color:** `src/index.css` → `--primary` / `--primary-fill` in
  `:root` and `[data-theme="dark"]`.
- **Profile photo / CV:** replace the files in `src/assets/` and update the
  corresponding import in `src/data/site.js` or `src/components/Hero.jsx`.
- **Contact form backend:** wire up `handleSubmit` in `Contact.jsx` to a
  service like [EmailJS](https://www.emailjs.com) or
  [Formspree](https://formspree.io).
