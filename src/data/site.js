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
  tagline: {
    en: 'Android Developer specializing in Kotlin and Jetpack Compose — from banking and fintech features to image-recognition tools and customer service platforms, I focus on clean architecture, thoughtful UX, and reliable releases, from first commit to Play Store launch.',
    id: 'Android Developer yang fokus di Kotlin dan Jetpack Compose — mulai dari fitur perbankan dan fintech, tools pengenalan gambar, sampai platform layanan pelanggan, saya selalu mengutamakan arsitektur yang bersih, UX yang matang, dan rilis yang bisa diandalkan, dari commit pertama sampai naik ke Play Store.',
  },
  avatar: profilePhoto,
}

export const navLinks = [
  { id: 'home', label: { en: 'Home', id: 'Beranda' } },
  { id: 'about', label: { en: 'About', id: 'Tentang' } },
  { id: 'skills', label: { en: 'Skills', id: 'Keahlian' } },
  { id: 'projects', label: { en: 'Projects', id: 'Proyek' } },
  { id: 'experience', label: { en: 'Experience', id: 'Pengalaman' } },
  { id: 'contact', label: { en: 'Contact', id: 'Kontak' } },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MhmmdRFadhil', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rzqnfadhil/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/rzqnfdhl/', icon: 'instagram' },
]

export const aboutText = [
  {
    en: "I'm an Android Developer with experience building and maintaining applications across fintech and consumer products — from banking features like bill payments and top-ups, to image-recognition tools, to customer service platforms with live chat and ticketing. My work is grounded in Kotlin and Jetpack Compose, backed by clean, testable architecture.",
    id: 'Saya seorang Android Developer dengan pengalaman membangun dan merawat aplikasi di berbagai produk fintech dan konsumen — mulai dari fitur perbankan seperti pembayaran tagihan dan top-up, tools pengenalan gambar, sampai platform layanan pelanggan dengan live chat dan tiket. Semua pekerjaan saya bertumpu pada Kotlin dan Jetpack Compose, didukung arsitektur yang bersih dan gampang diuji.',
  },
  {
    en: "Beyond feature delivery, I place equal weight on code quality and maintainability — sensible state management, thorough testing, and documentation that keeps collaboration smooth, whether I'm working solo or alongside a team in production.",
    id: 'Selain soal fitur, saya juga sama seriusnya soal kualitas kode dan kemudahan perawatannya — state management yang masuk akal, testing yang menyeluruh, dan dokumentasi yang bikin kolaborasi tetap lancar, baik kerja sendiri maupun bareng tim di production.',
  },
]

// `featured` + `blurb` mark the 3 signature skills that get a larger tile
// in the Skills bento grid — picked because they recur most across real
// shipped projects' skill tags.
export const skills = [
  { icon: 'kotlin', name: 'Kotlin', tag: { en: 'Primary Language', id: 'Bahasa Utama' } },
  {
    icon: 'compose', name: 'Jetpack Compose', tag: { en: 'Declarative UI', id: 'UI Deklaratif' },
    featured: true, blurb: {
      en: 'My daily driver for building declarative, state-driven UI.',
      id: 'Tools andalan saya sehari-hari buat bikin UI yang deklaratif dan berbasis state.',
    },
  },
  { icon: 'zap', name: 'Coroutines & Flow', tag: { en: 'Async', id: 'Asinkron' } },
  {
    icon: 'branch', name: 'MVVM · MVI', tag: { en: 'Architecture', id: 'Arsitektur' },
    featured: true, blurb: {
      en: 'The architecture backbone behind every app I ship.',
      id: 'Fondasi arsitektur yang saya pakai di hampir semua aplikasi yang saya bangun.',
    },
  },
  { icon: 'cpu', name: 'Hilt', tag: { en: 'Dependency Injection', id: 'Dependency Injection' } },
  { icon: 'db', name: 'Room · DataStore · SharedPreferences', tag: { en: 'Local Storage', id: 'Penyimpanan Lokal' } },
  { icon: 'globe', name: 'Retrofit', tag: { en: 'Networking', id: 'Jaringan' } },
  { icon: 'git', name: 'Git & Code Review', tag: { en: 'Collaboration', id: 'Kolaborasi' } },
  {
    icon: 'flame', name: 'Firebase', tag: { en: 'Backend Services', id: 'Layanan Backend' },
    featured: true, blurb: {
      en: 'Handles auth, storage, and real-time data behind the scenes.',
      id: 'Menangani autentikasi, penyimpanan, dan data real-time di balik layar.',
    },
  },
  { icon: 'layout', name: 'Material Design 3', tag: { en: 'UI System', id: 'Sistem UI' } },
  { icon: 'zap', name: 'Performance Profiling', tag: { en: 'Optimization', id: 'Optimasi' } },
]

export const projectFilters = [
  { key: 'all', label: { en: 'All', id: 'Semua' } },
  { key: 'company', label: { en: 'Company', id: 'Perusahaan' } },
  { key: 'college', label: { en: 'College', id: 'Kuliah' } },
  { key: 'other', label: { en: 'Other', id: 'Lainnya' } },
]

export const projects = [
  {
    id: 9,
    image: OctoCIMB,
    title: 'Octo by CIMB Niaga',
    category: 'company',
    link: 'https://play.google.com/store/apps/details?id=id.co.cimbniaga.mobile.android&pcampaignid=web_share',
    description: {
      en: "Contributed to the bill payment and top-up features of CIMB Niaga's banking super-app, focusing on feature development, architecture improvements, and production support.",
      id: 'Ikut membangun fitur pembayaran tagihan dan top-up di super-app perbankan CIMB Niaga, dengan fokus di pengembangan fitur, penguatan arsitektur, dan dukungan production.',
    },
    skills: ['Kotlin', 'MVVM', 'MVI', 'Jetpack Compose', 'REST API', 'Firebase'],
  },
  {
    id: 1,
    image: UnApps,
    title: 'UnApps',
    category: 'company',
    link: 'https://play.google.com/store/apps/details?id=com.uninet.umscustomerapp&pcampaignid=web_share',
    description: {
      en: "A customer portal for Uninet, built to help customers manage transactions and access service information — including ticketing, live chat, WhatsApp integration, speed test, and bill checking.",
      id: 'Portal pelanggan untuk Uninet, dibangun untuk membantu pelanggan mengelola transaksi dan mengakses informasi layanan — termasuk tiket, live chat, integrasi WhatsApp, speed test, dan pengecekan tagihan.',
    },
    skills: ['Kotlin', 'MVVM', 'REST API'],
  },
  {
    id: 2,
    image: Nutrilicious,
    title: 'Nutrilicious',
    category: 'college',
    link: 'https://play.google.com/store/apps/details?id=com.ryz.nutrilicious',
    description: {
      en: 'An Android app that detects fruits and vegetables using on-device image recognition, built with Kotlin and an MVVM architecture backed by Firebase for storing scan history and nutrition data.',
      id: 'Aplikasi Android yang mendeteksi buah dan sayur menggunakan pengenalan gambar on-device, dibangun dengan Kotlin dan arsitektur MVVM, didukung Firebase untuk menyimpan riwayat scan dan data nutrisi.',
    },
    skills: ['Kotlin', 'Firebase', 'Machine Learning', 'MVVM'],
    certificate: 'https://drive.google.com/file/d/1bxglVFCWqk5BNLuE4P9WtBBQt7Rv2jQH/view?usp=sharing',
  },
  {
    id: 10,
    image: MyStore,
    title: 'My Store',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/MyStore',
    description: {
      en: "Final project for a Dicoding Android course — an e-commerce app for browsing and purchasing products, using deep links to jump straight to product details and a REST API for catalog and order data.",
      id: 'Proyek akhir untuk kursus Android Dicoding — aplikasi e-commerce untuk menjelajah dan membeli produk, menggunakan deep link untuk langsung membuka detail produk, dan REST API untuk data katalog dan pesanan.',
    },
    skills: ['Kotlin', 'REST API', 'Deeplink'],
    certificate: 'https://www.dicoding.com/certificates/EYX4JQR8JZDL',
  },
  {
    id: 3,
    image: TernaKu,
    title: 'TernaKu',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/TernaKu',
    description: {
      en: 'An Android app for livestock sales in Dermaji Village, built with Kotlin and a RESTful API backend to connect local farmers with buyers, streamlining listings, transactions, and order tracking.',
      id: 'Aplikasi Android untuk jual-beli ternak di Desa Dermaji, dibangun dengan Kotlin dan backend RESTful API untuk menghubungkan peternak lokal dengan pembeli, mempermudah listing, transaksi, dan pelacakan pesanan.',
    },
    skills: ['Kotlin', 'REST API'],
  },
  {
    id: 4,
    image: Kryption,
    title: 'Kryption',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/Kryption',
    description: {
      en: 'A learning project exploring encryption and cryptography concepts, implemented as an Android application in Kotlin — covering symmetric and asymmetric algorithms, key management, and secure text encoding.',
      id: 'Proyek belajar buat eksplorasi konsep enkripsi dan kriptografi, dibangun sebagai aplikasi Android pakai Kotlin — mencakup algoritma simetris dan asimetris, manajemen kunci, dan enkripsi teks yang aman.',
    },
    skills: ['Kotlin'],
  },
  {
    id: 5,
    image: UrSkripsi,
    title: 'UrSkripsi',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/UrSkripsi',
    description: {
      en: 'A capstone project app for monitoring undergraduate thesis progress, built with Kotlin and Firebase to help students track milestones, manage advisor consultations, and stay on schedule toward graduation.',
      id: 'Aplikasi capstone project untuk memantau progres skripsi, dibangun dengan Kotlin dan Firebase untuk membantu mahasiswa melacak milestone, mengatur konsultasi dosen pembimbing, dan tetap on-track menuju kelulusan.',
    },
    skills: ['Kotlin', 'Firebase'],
  },
  {
    id: 6,
    image: MovieCatalogue,
    title: 'Movie Catalogue',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/BAJP-Final-Submission',
    description: {
      en: "Final project for the 'Belajar Android Jetpack Pro' course — an app that displays a catalogue of movies and TV shows, consuming a REST API to browse, search, and view detailed information for each title.",
      id: "Proyek akhir untuk kursus 'Belajar Android Jetpack Pro' — aplikasi yang menampilkan katalog film dan serial TV, mengonsumsi REST API untuk menjelajah, mencari, dan melihat detail informasi tiap judul.",
    },
    skills: ['Kotlin', 'REST API'],
    certificate: 'https://www.dicoding.com/certificates/MRZMKVK90PYQ',
  },
  {
    id: 7,
    image: Github,
    title: 'Github',
    category: 'other',
    link: 'https://github.com/MhmmdRFadhil/BFAA-Final-Submission',
    description: {
      en: "Final project for the 'Fundamental Android Development' course — an app that lists and searches GitHub users, consuming the GitHub REST API to display profiles, repositories, and follower details.",
      id: "Proyek akhir untuk kursus 'Fundamental Android Development' — aplikasi yang menampilkan dan mencari pengguna GitHub, mengonsumsi REST API GitHub untuk menampilkan profil, repository, dan detail follower.",
    },
    skills: ['Kotlin', 'REST API'],
    certificate: 'https://www.dicoding.com/certificates/98XWK0WMLXM3',
  },
  {
    id: 8,
    image: CoffeeShop,
    title: 'Coffee Shop',
    category: 'college',
    link: 'https://github.com/MhmmdRFadhil/Coffee-Shop-App',
    description: {
      en: 'A simple e-commerce app for selling coffee beans, with separate admin and customer access — built with Kotlin and Firebase to manage product listings, orders, and real-time inventory updates.',
      id: 'Aplikasi e-commerce sederhana untuk menjual biji kopi, dengan akses terpisah untuk admin dan pelanggan — dibangun dengan Kotlin dan Firebase untuk mengelola listing produk, pesanan, dan update stok real-time.',
    },
    skills: ['Kotlin', 'Firebase'],
  },
]

const appsShippedCount = projects.filter((p) =>
  p.link.includes('play.google.com')
).length

export const stats = [
  { num: String(appsShippedCount), label: { en: 'Apps shipped', id: 'Aplikasi dirilis' } },
  { num: '3+', label: { en: 'Years experience', id: 'Tahun pengalaman' } },
  { num: String(projects.length), label: { en: 'Featured projects', id: 'Proyek unggulan' } },
  { num: '100%', label: { en: 'Kotlin & Compose', id: 'Kotlin & Compose' } },
]

export const experienceTabs = [
  { key: 'work', label: { en: 'Work', id: 'Kerja' } },
  { key: 'education', label: { en: 'Education', id: 'Pendidikan' } },
]

export const experienceData = {
  work: [
    {
      year: { en: 'Feb 2025 – Present', id: 'Feb 2025 – Sekarang' },
      title: { en: 'Android Developer', id: 'Android Developer' },
      org: 'CIMB Niaga',
      desc: {
        en: 'Building bill payment and top-up features for the OCTO Mobile app in Kotlin, implementing MVVM architecture, and collaborating closely with the Bills & Top Up team.',
        id: 'Membangun fitur pembayaran tagihan dan top-up untuk aplikasi OCTO Mobile menggunakan Kotlin, menerapkan arsitektur MVVM, dan berkolaborasi erat dengan tim Bills & Top Up.',
      },
    },
    {
      year: { en: 'Feb 2024 – Jan 2025', id: 'Feb 2024 – Jan 2025' },
      title: { en: 'Android Developer', id: 'Android Developer' },
      org: 'PT Uninet Media Sakti',
      desc: {
        en: 'Built three Android apps — Mudita (lodging), UnApp (internet service booking), and MettaDC (visit requests) — using Kotlin, MVVM, and RESTful API integration.',
        id: 'Membangun tiga aplikasi Android — Mudita (penginapan), UnApp (pemesanan layanan internet), dan MettaDC (permintaan kunjungan) — menggunakan Kotlin, MVVM, dan integrasi RESTful API.',
      },
    },
    {
      year: { en: 'Sep 2023 – Dec 2023', id: 'Sep 2023 – Des 2023' },
      title: { en: 'Android Developer', id: 'Android Developer' },
      org: 'PT Aplikasi Bisnis Sejahtera',
      desc: {
        en: 'Developed SiLancar, a home-industry Android app, from UI design to backend integration using Kotlin and MVVM architecture.',
        id: 'Mengembangkan SiLancar, aplikasi Android untuk industri rumahan, mulai dari desain UI hingga integrasi backend menggunakan Kotlin dan arsitektur MVVM.',
      },
    },
    {
      year: { en: 'Mar 2023 – Jul 2023', id: 'Mar 2023 – Jul 2023' },
      title: { en: 'Assistant of Mobile Programming', id: 'Asisten Praktikum Pemrograman Mobile' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: 'Mentored students in Android and Kotlin fundamentals, prepared practicum materials, and helped debug their coursework projects.',
        id: 'Membimbing mahasiswa dalam dasar-dasar Android dan Kotlin, menyiapkan materi praktikum, dan membantu debugging proyek tugas kuliah mereka.',
      },
    },
    {
      year: { en: 'Sep 2022 – Nov 2022', id: 'Sep 2022 – Nov 2022' },
      title: { en: 'Mobile Developer', id: 'Mobile Developer' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: 'Built TernaKu, an Android livestock sales app for Dermaji Village, from Figma design through to a tested, working application.',
        id: 'Membangun TernaKu, aplikasi Android jual-beli ternak untuk Desa Dermaji, mulai dari desain Figma hingga jadi aplikasi yang teruji dan berjalan lancar.',
      },
    },
    {
      year: { en: 'Mar 2022 – Jul 2022', id: 'Mar 2022 – Jul 2022' },
      title: { en: 'Assistant of Mobile Programming', id: 'Asisten Praktikum Pemrograman Mobile' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: 'Mentored students in Android and Kotlin fundamentals, prepared practicum materials, and helped debug their coursework projects.',
        id: 'Membimbing mahasiswa dalam dasar-dasar Android dan Kotlin, menyiapkan materi praktikum, dan membantu debugging proyek tugas kuliah mereka.',
      },
    },
    {
      year: { en: 'Oct 2021 – Jan 2022', id: 'Okt 2021 – Jan 2022' },
      title: { en: 'Assistant of Programming Algorithm', id: 'Asisten Praktikum Algoritma Pemrograman' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: 'Taught C++ programming fundamentals and algorithms, guided students through practicum exercises, and evaluated their assignments.',
        id: 'Mengajar dasar-dasar pemrograman C++ dan algoritma, membimbing mahasiswa dalam latihan praktikum, dan menilai tugas mereka.',
      },
    },
    {
      year: { en: 'Aug 2021 – Jan 2022', id: 'Agu 2021 – Jan 2022' },
      title: {
        en: 'Studi Independen Bersertifikat Dicoding x Kampus Merdeka',
        id: 'Studi Independen Bersertifikat Dicoding x Kampus Merdeka',
      },
      org: 'Kampus Merdeka',
      desc: {
        en: 'Completed an intensive Android development track covering app fundamentals and Jetpack, plus soft-skills training, capped by a final project.',
        id: 'Menyelesaikan program intensif pengembangan Android yang mencakup dasar-dasar aplikasi dan Jetpack, ditambah pelatihan soft skills, diakhiri dengan proyek akhir.',
      },
    },
  ],
  education: [
    {
      year: { en: '2019 – 2023', id: '2019 – 2023' },
      title: { en: 'Informatics Engineering', id: 'Teknik Informatika' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "Bachelor's degree in Informatics Engineering, concentrating on Android development with Kotlin and Jetpack Compose, backed by coursework in software engineering and mobile architecture.",
        id: 'Gelar Sarjana Teknik Informatika, dengan konsentrasi pengembangan Android menggunakan Kotlin dan Jetpack Compose, didukung mata kuliah rekayasa perangkat lunak dan arsitektur mobile.',
      },
    },
    {
      year: { en: '2019 – 2023', id: '2019 – 2023' },
      title: { en: 'Computer and Network Engineering', id: 'Teknik Komputer dan Jaringan' },
      org: 'Telkom Vocational High School Banjarbaru',
      desc: {
        en: 'Studied computer network engineering fundamentals — networking, hardware, and systems administration — laying an early technical foundation before pursuing software development.',
        id: 'Mempelajari dasar-dasar teknik jaringan komputer — jaringan, hardware, dan administrasi sistem — membangun fondasi teknis awal sebelum menekuni pengembangan software.',
      },
    },
    {
      year: { en: '2013 – 2016', id: '2013 – 2016' },
      title: { en: 'MTsN', id: 'MTsN' },
      org: 'Islamic Junior High School Martapura',
      desc: {
        en: 'Completed junior secondary education at an Islamic school in Martapura, South Kalimantan.',
        id: 'Menyelesaikan pendidikan menengah pertama di sekolah Islam di Martapura, Kalimantan Selatan.',
      },
    },
    {
      year: { en: '2007 – 2013', id: '2007 – 2013' },
      title: { en: 'SDN', id: 'SDN' },
      org: 'Jawa 2 Elementary School Martapura',
      desc: {
        en: 'Completed primary education in Martapura, South Kalimantan.',
        id: 'Menyelesaikan pendidikan dasar di Martapura, Kalimantan Selatan.',
      },
    },
  ],
}

export const contactInfo = [
  { icon: 'instagram', text: '@rzqnfdhl', href: 'https://www.instagram.com/rzqnfdhl/' },
  { icon: 'email', text: 'rzqnfadhil@gmail.com', href: 'mailto:rzqnfadhil@gmail.com' },
  { icon: 'pin', text: 'Indonesia' },
]
