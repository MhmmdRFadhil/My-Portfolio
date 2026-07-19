// Static UI copy (headings, labels, placeholders, aria-labels) that isn't
// tied to a specific data item. Per-project/skill/experience content lives
// as { en, id } fields directly in site.js instead — this file only holds
// text that's the same regardless of which item is being shown.
export const translations = {
  en: {
    app: {
      skipToContent: 'Skip to content',
    },
    nav: {
      themeToggle: 'Toggle theme',
      langToggle: 'Switch to Indonesian',
      menu: 'Menu',
    },
    hero: {
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
    },
    about: {
      eyebrow: 'About',
      heading: 'Building Android apps people actually enjoy using',
    },
    skills: {
      eyebrow: 'Skills',
      heading: 'My everyday toolkit',
      intro: 'The languages, frameworks, and tools I reach for to build, test, and ship Android apps end-to-end.',
      bannerTitle: 'The stack behind everything I ship',
      bannerBody: 'Kotlin and Jetpack Compose are the foundation, backed by the architecture, data, and workflow tools below that keep every app fast, testable, and easy to maintain.',
    },
    experience: {
      eyebrow: 'Experience',
      heading: "Where I've worked & learned",
      intro: 'The roles that shaped my Android development skills, and the education that got me started.',
      tapHint: 'Tap for details',
    },
    projects: {
      eyebrow: 'Projects',
      heading: "What I've built",
      intro: "Apps I've shipped to production, alongside smaller projects that mark milestones in my growth as a developer.",
      playStore: 'Play Store',
      github: 'Github',
      certificate: 'Certificate',
      published: 'Published',
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's work together",
      intro: "Got a project, a role, or just wanna say hi? Shoot me a message and I'll get back to you in a day or two.",
      getInTouch: 'Get in touch',
      dmText: 'Not really a form person? Slide into my Instagram DMs instead — same day or two reply, weekends included.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: "What's your name?",
      emailPlaceholder: 'Where can I reach you?',
      messagePlaceholder: "So, what's on your mind?",
      sendButton: 'Send Message',
      sending: 'Sending…',
      sentMessage: "Thanks! Your message has been sent — I'll get back to you within 1–2 business days.",
      errorMessage: 'Something went wrong sending that — please try again, or email me directly instead.',
      nameError: 'Oops, forgot your name there',
      emailRequiredError: "Hey, we'll need your email",
      emailInvalidError: "Hmm, that email doesn't look right",
      messageError: "Don't leave me hanging, write something!",
    },
    footer: {
      tagline: 'Made by one dev, a laptop, and way too many tabs open.',
    },
    backToTop: {
      label: 'Back to top',
    },
  },
  id: {
    app: {
      skipToContent: 'Langsung ke konten',
    },
    nav: {
      themeToggle: 'Ganti tema',
      langToggle: 'Ganti ke Bahasa Inggris',
      menu: 'Menu',
    },
    hero: {
      viewProjects: 'Lihat Proyek',
      downloadCV: 'Unduh CV',
    },
    about: {
      eyebrow: 'Tentang',
      heading: 'Membangun aplikasi Android yang orang-orang beneran suka pakai',
    },
    skills: {
      eyebrow: 'Keahlian',
      heading: 'Tools andalan saya sehari-hari',
      intro: 'Bahasa pemrograman, framework, dan tools yang saya pakai buat membangun, menguji, dan merilis aplikasi Android dari nol sampai jadi.',
      bannerTitle: 'Fondasi di balik semua yang saya rilis',
      bannerBody: 'Kotlin dan Jetpack Compose adalah fondasi utamanya, didukung tools arsitektur, data, dan workflow di bawah ini yang bikin tiap aplikasi tetap cepat, gampang diuji, dan gampang dirawat.',
    },
    experience: {
      eyebrow: 'Pengalaman',
      heading: 'Tempat saya bekerja & belajar',
      intro: 'Peran-peran yang membentuk kemampuan saya sebagai Android developer, plus latar pendidikan yang jadi titik awalnya.',
      tapHint: 'Ketuk untuk detail',
    },
    projects: {
      eyebrow: 'Proyek',
      heading: 'Yang sudah saya bangun',
      intro: 'Aplikasi yang sudah saya rilis ke production, plus beberapa proyek kecil yang jadi penanda perjalanan saya sebagai developer.',
      playStore: 'Play Store',
      github: 'Github',
      certificate: 'Sertifikat',
      published: 'Dipublikasikan',
    },
    contact: {
      eyebrow: 'Kontak',
      heading: 'Yuk kerja bareng',
      intro: 'Punya proyek, ada posisi kosong, atau cuma mau say hi? Kirim pesan aja, nanti saya balas dalam satu-dua hari.',
      getInTouch: 'Hubungi saya',
      dmText: 'Nggak suka isi form? DM aja Instagram saya — tetap dibalas dalam satu-dua hari, termasuk weekend.',
      nameLabel: 'Nama',
      emailLabel: 'Email',
      messageLabel: 'Pesan',
      namePlaceholder: 'Siapa nama kamu?',
      emailPlaceholder: 'Email kamu apa?',
      messagePlaceholder: 'Ada yang mau disampaikan?',
      sendButton: 'Kirim Pesan',
      sending: 'Mengirim…',
      sentMessage: 'Makasih! Pesan kamu sudah terkirim — saya akan balas dalam 1–2 hari kerja.',
      errorMessage: 'Waduh, ada yang salah saat mengirim — coba lagi, atau email saya langsung.',
      nameError: 'Eh, namanya belum diisi nih',
      emailRequiredError: 'Emailnya jangan lupa diisi ya',
      emailInvalidError: 'Hmm, emailnya kayaknya salah deh',
      messageError: 'Jangan digantung dong, tulis sesuatu dulu!',
    },
    footer: {
      tagline: 'Dibuat oleh satu dev, satu laptop, dan tab browser yang kebanyakan.',
    },
    backToTop: {
      label: 'Kembali ke atas',
    },
  },
}
