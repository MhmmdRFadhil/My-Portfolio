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
import MyStore from '../assets/MyStore.svg'

export const profile = {
  name: 'Muhammad Rizqan Fadhil',
  shortName: 'rzqnfdhl',
  role: 'Android Developer',
  handle: '.dev',
  tagline:
    'Android Developer specializing in Kotlin and Jetpack Compose — from banking and fintech features to image-recognition tools and customer service platforms, I focus on clean architecture, thoughtful UX, and reliable releases, from first commit to Play Store launch.',
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

export const aboutText = [
  "I'm an Android Developer with experience building and maintaining applications across fintech and consumer products — from banking features like bill payments and top-ups, to image-recognition tools, to customer service platforms with live chat and ticketing. My work is grounded in Kotlin and Jetpack Compose, backed by clean, testable architecture.",
  "Beyond feature delivery, I place equal weight on code quality and maintainability — sensible state management, thorough testing, and documentation that keeps collaboration smooth, whether I'm working solo or alongside a team in production.",
]

// `featured` + `blurb` mark the 3 signature skills that get a larger tile
// in the Skills bento grid — picked because they recur most across real
// shipped projects' skill tags.
export const skills = [
  { icon: 'kotlin', name: 'Kotlin', tag: 'Primary Language' },
  {
    icon: 'compose', name: 'Jetpack Compose', tag: 'Declarative UI',
    featured: true, blurb: 'My daily driver for building declarative, state-driven UI.',
  },
  { icon: 'zap', name: 'Coroutines & Flow', tag: 'Async' },
  {
    icon: 'branch', name: 'MVVM · MVI', tag: 'Architecture',
    featured: true, blurb: 'The architecture backbone behind every app I ship.',
  },
  { icon: 'cpu', name: 'Hilt', tag: 'Dependency Injection' },
  { icon: 'db', name: 'Room · DataStore · SharedPreferences', tag: 'Local Storage' },
  { icon: 'globe', name: 'Retrofit', tag: 'Networking' },
  { icon: 'git', name: 'Git & Code Review', tag: 'Collaboration' },
  {
    icon: 'flame', name: 'Firebase', tag: 'Backend Services',
    featured: true, blurb: 'Handles auth, storage, and real-time data behind the scenes.',
  },
  { icon: 'layout', name: 'Material Design 3', tag: 'UI System' },
  { icon: 'zap', name: 'Performance Profiling', tag: 'Optimization' },
]

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'company', label: 'Company' },
  { key: 'college', label: 'College' },
  { key: 'other', label: 'Other' },
]

export const projects = [
  {
    id: 10,
    image: MyStore,
    title: 'My Store',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/MyStore',
    description: "Final project for a Dicoding Android course — an e-commerce app for browsing and purchasing products, using deep links to jump straight to product details and a REST API for catalog and order data.",
    skills: ['Kotlin', 'REST API', 'Deeplink'],
    certificate: 'https://www.dicoding.com/certificates/EYX4JQR8JZDL',
  },
  {
    id: 9,
    image: OctoCIMB,
    title: 'Octo by CIMB Niaga',
    category: 'company',
    link: 'https://play.google.com/store/apps/details?id=id.co.cimbniaga.mobile.android&pcampaignid=web_share',
    description: "Contributed to the bill payment and top-up features of CIMB Niaga's banking super-app, focusing on feature development, architecture improvements, and production support.",
    skills: ['Kotlin', 'MVVM', 'MVI', 'Jetpack Compose', 'REST API', 'Firebase'],
  },
  {
    id: 2,
    image: Nutrilicious,
    title: 'Nutrilicious',
    category: 'college',
    link: 'https://play.google.com/store/apps/details?id=com.ryz.nutrilicious',
    description: 'An Android app that detects fruits and vegetables using on-device image recognition, built with Kotlin and an MVVM architecture backed by Firebase for storing scan history and nutrition data.',
    skills: ['Kotlin', 'Firebase', 'Machine Learning', 'MVVM'],
    certificate: 'https://drive.google.com/file/d/1bxglVFCWqk5BNLuE4P9WtBBQt7Rv2jQH/view?usp=sharing',
  },
  {
    id: 1,
    image: UnApps,
    title: 'UnApps',
    category: 'company',
    link: 'https://play.google.com/store/apps/details?id=com.uninet.umscustomerapp&pcampaignid=web_share',
    description: "A customer portal for Uninet, built to help customers manage transactions and access service information — including ticketing, live chat, WhatsApp integration, speed test, and bill checking.",
    skills: ['Kotlin', 'MVVM', 'REST API'],
  },
  {
    id: 3,
    image: TernaKu,
    title: 'TernaKu',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/TernaKu',
    description: 'An Android app for livestock sales in Dermaji Village, built with Kotlin and a RESTful API backend to connect local farmers with buyers, streamlining listings, transactions, and order tracking.',
    skills: ['Kotlin', 'REST API'],
  },
  {
    id: 4,
    image: Kryption,
    title: 'Kryption',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/Kryption',
    description: 'A learning project exploring encryption and cryptography concepts, implemented as an Android application in Kotlin — covering symmetric and asymmetric algorithms, key management, and secure text encoding.',
    skills: ['Kotlin'],
  },
  {
    id: 5,
    image: UrSkripsi,
    title: 'UrSkripsi',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/UrSkripsi',
    description: 'A capstone project app for monitoring undergraduate thesis progress, built with Kotlin and Firebase to help students track milestones, manage advisor consultations, and stay on schedule toward graduation.',
    skills: ['Kotlin', 'Firebase'],
  },
  {
    id: 6,
    image: MovieCatalogue,
    title: 'Movie Catalogue',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/BAJP-Final-Submission',
    description: "Final project for the 'Belajar Android Jetpack Pro' course — an app that displays a catalogue of movies and TV shows, consuming a REST API to browse, search, and view detailed information for each title.",
    skills: ['Kotlin', 'REST API'],
    certificate: 'https://www.dicoding.com/certificates/MRZMKVK90PYQ',
  },
  {
    id: 7,
    image: Github,
    title: 'Github',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/BFAA-Final-Submission',
    description: "Final project for the 'Fundamental Android Development' course — an app that lists and searches GitHub users, consuming the GitHub REST API to display profiles, repositories, and follower details.",
    skills: ['Kotlin', 'REST API'],
    certificate: 'https://www.dicoding.com/certificates/98XWK0WMLXM3',
  },
  {
    id: 8,
    image: CoffeeShop,
    title: 'Coffee Shop',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/Coffee-Shop-App',
    description: 'A simple e-commerce app for selling coffee beans, with separate admin and customer access — built with Kotlin and Firebase to manage product listings, orders, and real-time inventory updates.',
    skills: ['Kotlin', 'Firebase'],
  },
]

const appsShippedCount = projects.filter((p) =>
  p.link.includes('play.google.com')
).length

export const stats = [
  { num: String(appsShippedCount), label: 'Apps shipped' },
  { num: '3+', label: 'Years experience' },
  { num: String(projects.length), label: 'Featured projects' },
  { num: '100%', label: 'Kotlin & Compose' },
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
