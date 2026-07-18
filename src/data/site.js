// ============================================================
// SEMUA KONTEN PORTFOLIO ADA DI SINI.
// Ganti teks/data di file ini untuk memperbarui isi website
// tanpa perlu menyentuh komponen React.
// ============================================================

import profilePhoto from '../assets/profile.jpg'
import UnApps from '../assets/UnApps.jpg'
import Nutrilicious from '../assets/Nutrilicious.jpg'
import TernaKu from '../assets/TernaKu.jpg'
import Kryption from '../assets/Kryption.jpg'
import UrSkripsi from '../assets/UrSkripsi.jpg'
import MovieCatalogue from '../assets/MovieCatalogue.jpg'
import Github from '../assets/Github.jpg'
import CoffeeShop from '../assets/CoffeeShop.jpg'
import OctoCIMB from '../assets/OctoCIMB.svg'

export const profile = {
  name: 'Muhammad Rizqan Fadhil',
  shortName: 'rzqnfdhl',
  role: 'Android Developer',
  handle: '.dev',
  tagline:
    'Android Developer specializing in Kotlin and Jetpack Compose, with a track record of shipping production-grade applications across fintech and consumer products. I focus on clean architecture, thoughtful UX, and reliable releases — from first commit to Play Store launch.',
  avatar: profilePhoto,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MhmmdRFadhil', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rzqnfadhil/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/rzqnfdhl/', icon: 'instagram' },
]

export const stats = [
  { num: '3', label: 'Apps shipped' },
  { num: '3+', label: 'Years experience' },
  { num: '9', label: 'Featured projects' },
  { num: '100%', label: 'Kotlin & Compose' },
]

export const aboutText = [
  "I'm an Android Developer with experience building and maintaining applications across fintech and consumer products, from early-stage prototypes to features running in production. My work is grounded in Kotlin and Jetpack Compose, backed by clean, testable architecture.",
  "Beyond feature delivery, I place equal weight on code quality and maintainability — sensible state management, thorough testing, and documentation that keeps collaboration smooth across the development lifecycle.",
]

export const skillSet1 = [
  { icon: 'compose', name: 'Jetpack Compose', tag: 'Declarative UI' },
  { icon: 'zap', name: 'Coroutines & Flow', tag: 'Async' },
  { icon: 'branch', name: 'MVVM · MVI', tag: 'Architecture' },
  { icon: 'cpu', name: 'Hilt', tag: 'Dependency Injection' },
  { icon: 'db', name: 'Room · DataStore · SharedPreferences', tag: 'Local Storage' },
]

export const skillSet2 = [
  { icon: 'globe', name: 'Retrofit', tag: 'Networking' },
  { icon: 'git', name: 'Git & Code Review', tag: 'Collaboration' },
  { icon: 'flame', name: 'Firebase', tag: 'Backend Services' },
  { icon: 'layout', name: 'Material Design 3', tag: 'UI System' },
  { icon: 'zap', name: 'Performance Profiling', tag: 'Optimization' },
]

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'advanced', label: 'Advanced' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'other', label: 'Other' },
]

export const projects = [
  {
    id: 9,
    image: OctoCIMB,
    title: 'Octo by CIMB Niaga',
    category: 'advanced',
    link: 'https://play.google.com/store/apps/details?id=id.co.cimbniaga.mobile.android&pcampaignid=web_share',
    description: "Contributed to the bill payment and top-up features of CIMB Niaga's banking super-app, focusing on feature development, architecture improvements, and production support.",
    skills: ['Kotlin', 'MVVM', 'MVI', 'Jetpack Compose', 'REST API', 'Firebase'],
  },
  {
    id: 2,
    image: Nutrilicious,
    title: 'Nutrilicious',
    category: 'advanced',
    link: 'https://play.google.com/store/apps/details?id=com.ryz.nutrilicious',
    description: 'An Android app that detects fruits and vegetables using image recognition, built with Kotlin and a Firebase backend.',
    skills: ['Kotlin', 'Firebase', 'Machine Learning', 'MVVM'],
  },
  {
    id: 1,
    image: UnApps,
    title: 'UnApps',
    category: 'advanced',
    link: 'https://play.google.com/store/apps/details?id=com.uninet.umscustomerapp&pcampaignid=web_share',
    description: "A customer portal for Uninet, built to help customers manage transactions and access service information — including ticketing, live chat, WhatsApp integration, speed test, and bill checking.",
    skills: ['Kotlin', 'MVVM', 'REST API'],
  },
  {
    id: 3,
    image: TernaKu,
    title: 'TernaKu',
    category: 'intermediate',
    link: 'https://github.com/MhmmdRFadhil/TernaKu',
    description: 'An Android app for livestock sales in Dermaji Village, built with Kotlin and a RESTful API backend.',
    skills: ['Kotlin', 'REST API'],
  },
  {
    id: 4,
    image: Kryption,
    title: 'Kryption',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/Kryption',
    description: 'A learning project exploring encryption and cryptography concepts, implemented as an Android application.',
    skills: ['Kotlin'],
  },
  {
    id: 5,
    image: UrSkripsi,
    title: 'UrSkripsi',
    category: 'intermediate',
    link: 'https://github.com/MhmmdRFadhil/UrSkripsi',
    description: 'A capstone project app for monitoring undergraduate thesis progress.',
    skills: ['Kotlin', 'Firebase'],
  },
  {
    id: 6,
    image: MovieCatalogue,
    title: 'Movie Catalogue',
    category: 'intermediate',
    link: 'https://github.com/MhmmdRFadhil/BAJP-Final-Submission',
    description: "Final project for the 'Belajar Android Jetpack Pro' course — an app that displays a catalogue of movies and TV shows.",
    skills: ['Kotlin', 'REST API'],
  },
  {
    id: 7,
    image: Github,
    title: 'Github',
    category: 'intermediate',
    link: 'https://github.com/MhmmdRFadhil/BFAA-Final-Submission',
    description: "Final project for the 'Fundamental Android Development' course — an app that lists and searches GitHub users.",
    skills: ['Kotlin', 'REST API'],
  },
  {
    id: 8,
    image: CoffeeShop,
    title: 'Coffee Shop',
    category: 'intermediate',
    link: 'https://github.com/MhmmdRFadhil/Coffee-Shop-App',
    description: 'A simple e-commerce app for selling coffee beans, with separate admin and customer access.',
    skills: ['Kotlin', 'Firebase'],
  },
]

export const experienceTabs = [
  { key: 'work', label: 'Work' },
  { key: 'education', label: 'Education' },
]

export const experienceData = {
  work: [
    {
      year: 'Feb 2025 – Present',
      title: 'Android Developer',
      org: 'CIMB Niaga',
      desc: 'Building bill payment and top-up features for the OCTO Mobile app in Kotlin, implementing MVVM architecture, and collaborating closely with the Bills & Top Up team.',
    },
    {
      year: 'Feb 2024 – Jan 2025',
      title: 'Android Developer',
      org: 'PT Uninet Media Sakti',
      desc: 'Built three Android apps — Mudita (lodging), UnApp (internet service booking), and MettaDC (visit requests) — using Kotlin, MVVM, and RESTful API integration.',
    },
    {
      year: 'Sep 2023 – Dec 2023',
      title: 'Android Developer',
      org: 'PT Aplikasi Bisnis Sejahtera',
      desc: 'Developed SiLancar, a home-industry Android app, from UI design to backend integration using Kotlin and MVVM architecture.',
    },
    {
      year: 'Mar 2023 – Jul 2023',
      title: 'Assistant of Mobile Programming',
      org: 'Telkom Purwokerto Institute of Technology',
      desc: 'Mentored students in Android and Kotlin fundamentals, prepared practicum materials, and helped debug their coursework projects.',
    },
    {
      year: 'Sep 2022 – Nov 2022',
      title: 'Mobile Developer',
      org: 'Telkom Purwokerto Institute of Technology',
      desc: 'Built TernaKu, an Android livestock sales app for Dermaji Village, from Figma design through to a tested, working application.',
    },
    {
      year: 'Mar 2022 – Jul 2022',
      title: 'Assistant of Mobile Programming',
      org: 'Telkom Purwokerto Institute of Technology',
      desc: 'Mentored students in Android and Kotlin fundamentals, prepared practicum materials, and helped debug their coursework projects.',
    },
    {
      year: 'Oct 2021 – Jan 2022',
      title: 'Assistant of Programming Algorithm',
      org: 'Telkom Purwokerto Institute of Technology',
      desc: 'Taught C++ programming fundamentals and algorithms, guided students through practicum exercises, and evaluated their assignments.',
    },
    {
      year: 'Aug 2021 – Jan 2022',
      title: 'Studi Independen Bersertifikat Dicoding x Kampus Merdeka',
      org: 'Kampus Merdeka',
      desc: 'Completed an intensive Android development track covering app fundamentals and Jetpack, plus soft-skills training, capped by a final project.',
    },
  ],
  education: [
    {
      year: '2019 – 2023',
      title: 'Informatics Engineering',
      org: 'Telkom Purwokerto Institute of Technology',
      desc: "Bachelor's degree in Informatics Engineering, concentrating on Android development with Kotlin and Jetpack Compose, backed by coursework in software engineering and mobile architecture.",
    },
    {
      year: '2019 – 2023',
      title: 'Computer and Network Engineering',
      org: 'Telkom Vocational High School Banjarbaru',
      desc: 'Studied computer network engineering fundamentals — networking, hardware, and systems administration — laying an early technical foundation before pursuing software development.',
    },
    {
      year: '2013 – 2016',
      title: 'MTsN',
      org: 'Islamic Junior High School Martapura',
      desc: 'Completed junior secondary education at an Islamic school in Martapura, South Kalimantan.',
    },
    {
      year: '2007 – 2013',
      title: 'SDN',
      org: 'Jawa 2 Elementary School Martapura',
      desc: 'Completed primary education in Martapura, South Kalimantan.',
    },
  ],
}

export const contactInfo = [
  { icon: 'instagram', text: '@rzqnfdhl', href: 'https://www.instagram.com/rzqnfdhl/' },
  { icon: 'email', text: 'rzqnfadhil@gmail.com', href: 'mailto:rzqnfadhil@gmail.com' },
  { icon: 'pin', text: 'Indonesia' },
]
