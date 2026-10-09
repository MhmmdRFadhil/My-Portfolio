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
    en: "I make Android apps with Kotlin and Jetpack Compose. Most days, you'll find me working on banking features, fixing bugs, or figuring out how to make an app easier to use.",
    id: "Saya bikin aplikasi Android pakai Kotlin dan Jetpack Compose. Biasanya saya sibuk ngulik fitur perbankan, beresin bug, atau cari cara supaya aplikasinya lebih gampang dipakai.",
  },
  avatar: profilePhoto,
}

export const navLinks = [
  { id: 'home', label: { en: 'Home', id: 'Beranda' } },
  { id: 'about', label: { en: 'About', id: 'Tentang' } },
  { id: 'projects', label: { en: 'Projects', id: 'Proyek' } },
  { id: 'skills', label: { en: 'Skills', id: 'Keahlian' } },
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
    en: "I'm an Android developer, mostly working on banking and consumer apps. I've built bill payments, image recognition, and customer support features with chat and ticketing.",
    id: "Saya Android developer yang banyak ngerjain aplikasi perbankan dan kebutuhan sehari hari. Proyeknya macam macam, dari pembayaran tagihan dan pengenalan gambar sampai fitur chat dan tiket bantuan pelanggan.",
  },
  {
    en: "I like code that's easy to read and change. I make time for tests and documentation so the next person working on it doesn't have to guess what's going on.",
    id: "Saya suka kode yang gampang dibaca dan diubah. Testing dan dokumentasi juga saya kerjakan supaya orang berikutnya yang pegang kode ini nggak perlu nebak maksudnya.",
  },
]

// `featured` + `blurb` mark the 3 signature skills that get a larger tile
// in the Skills bento grid — picked because they recur most across real
// shipped projects' skill tags.
export const skills = [
  {
    icon: 'kotlin', name: 'Kotlin', tag: { en: 'Primary Language', id: 'Bahasa Utama' },
    blurb: {
      en: 'The language I use for Android, from handling user input to writing app logic.',
      id: 'Bahasa yang saya pakai buat Android, dari menangani input pengguna sampai menulis logika aplikasi.',
    },
  },
  {
    icon: 'compose', name: 'Jetpack Compose', tag: { en: 'Declarative UI', id: 'UI Deklaratif' },
    featured: true, blurb: {
      en: "What I use to build screens and keep them in sync with app data.",
      id: "Andalan saya buat bikin tampilan yang ngikutin perubahan data aplikasi.",
    },
  },
  {
    icon: 'zap', name: 'Coroutines & Flow', tag: { en: 'Async', id: 'Asinkron' },
    blurb: {
      en: 'For loading data without freezing the screen and passing updates to the UI.',
      id: 'Buat mengambil data tanpa bikin layar macet dan meneruskan pembaruan ke tampilan.',
    },
  },
  {
    icon: 'branch', name: 'MVVM · MVI', tag: { en: 'Architecture', id: 'Arsitektur' },
    featured: true, blurb: {
      en: "Keeps the UI and app logic apart, so changes are easier to follow.",
      id: "Biar kode tampilan dan logika aplikasi nggak campur, jadi lebih gampang diubah.",
    },
  },
  {
    icon: 'cpu', name: 'Hilt', tag: { en: 'Dependency Injection', id: 'Dependency Injection' },
    blurb: {
      en: 'Connects the classes an app needs, so I can swap implementations more easily when testing.',
      id: 'Bantu menyiapkan objek yang dibutuhkan aplikasi, jadi implementasinya lebih gampang diganti saat testing.',
    },
  },
  {
    icon: 'db', name: 'Room · DataStore · SharedPreferences', tag: { en: 'Local Storage', id: 'Penyimpanan Lokal' },
    blurb: {
      en: 'For saving app data and preferences on the device. I pick the tool to suit the data.',
      id: 'Buat menyimpan data dan pengaturan di perangkat. Saya pilih tools sesuai jenis data yang disimpan.',
    },
  },
  {
    icon: 'globe', name: 'Retrofit', tag: { en: 'Networking', id: 'Jaringan' },
    blurb: {
      en: 'Connects the app to REST APIs, from sending requests to reading server responses.',
      id: 'Menghubungkan aplikasi ke REST API, dari kirim request sampai membaca respons server.',
    },
  },
  {
    icon: 'git', name: 'Git & Code Review', tag: { en: 'Collaboration', id: 'Kolaborasi' },
    blurb: {
      en: 'For tracking changes, working on branches, and checking code together before merging.',
      id: 'Buat melacak perubahan, kerja lewat branch, dan cek kode bareng sebelum digabung.',
    },
  },
  {
    icon: 'flame', name: 'Firebase', tag: { en: 'Backend Services', id: 'Layanan Backend' },
    featured: true, blurb: {
      en: "My go to for sign in, storage, and keeping data up to date.",
      id: "Saya pakai buat login, simpan data, dan sinkronisasi perubahan.",
    },
  },
  {
    icon: 'layout', name: 'Material Design 3', tag: { en: 'UI System', id: 'Sistem UI' },
    blurb: {
      en: 'My starting point for components, colors, and typography that feel consistent across screens.',
      id: 'Acuan saya buat komponen, warna, dan tipografi supaya tampilan tiap halaman terasa konsisten.',
    },
  },
  {
    icon: 'zap', name: 'Performance Profiling', tag: { en: 'Optimization', id: 'Optimasi' },
    blurb: {
      en: 'Helps me find slow frames and memory issues, then check whether a fix actually helps.',
      id: 'Bantu nyari penyebab frame lambat dan masalah memori, lalu cek apakah perbaikannya benar membantu.',
    },
  },
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
      en: "I help build bill payments and top ups for CIMB Niaga's banking app. I also work on the code structure and fix issues after release.",
      id: "Saya ikut ngerjain fitur bayar tagihan dan isi saldo di aplikasi CIMB Niaga, merapikan kode, dan menangani masalah setelah rilis.",
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
      en: "An app for Uninet customers to check bills, manage transactions, and get help through tickets or chat. It also connects to WhatsApp and includes a speed test.",
      id: "Aplikasi buat pelanggan Uninet cek tagihan, kelola transaksi, dan minta bantuan lewat tiket atau chat. Ada juga WhatsApp dan tes kecepatan internet.",
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
      en: "Point the camera at a fruit or vegetable to find out what it is. I built it with Kotlin and MVVM, with Firebase for scan history and nutrition info.",
      id: "Arahkan kamera ke buah atau sayur buat mengenalinya. Saya bikin pakai Kotlin dan MVVM, lalu pakai Firebase buat riwayat scan dan info nutrisi.",
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
      en: "A shopping app I made for a Dicoding course. Product links open straight to the details, while a REST API handles the catalog and orders.",
      id: "Aplikasi belanja buat tugas akhir kursus Dicoding. Link produk bisa langsung buka halaman detail, sedangkan katalog dan pesanan terhubung lewat REST API.",
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
      en: "An app that connects livestock farmers in Dermaji Village with buyers. I used Kotlin and a REST API for listings and order tracking.",
      id: "Aplikasi jual beli ternak buat mempertemukan peternak Desa Dermaji dengan pembeli. Saya pakai Kotlin dan REST API buat daftar ternak dan status pesanan.",
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
      en: "My place to try out encryption in Kotlin, from symmetric and asymmetric algorithms to working with keys and encrypting text.",
      id: "Tempat saya nyobain enkripsi pakai Kotlin, mulai dari algoritma simetris dan asimetris sampai mengelola kunci dan mengenkripsi teks.",
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
      en: "An app to keep thesis progress, advisor meetings, and deadlines in one place. I made it with Kotlin and Firebase for a capstone project.",
      id: "Aplikasi buat nyatet progres skripsi, jadwal bimbingan, dan tenggat tugas. Saya bikin pakai Kotlin dan Firebase buat proyek capstone.",
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
      en: "A movie and TV catalog I made for the Belajar Android Jetpack Pro course. You can browse titles, search, and read the details from a REST API.",
      id: "Katalog film dan serial TV buat tugas kursus Belajar Android Jetpack Pro. Bisa cari judul dan baca detailnya dari REST API.",
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
      en: "A course project for looking up GitHub users. You can check their profiles, repositories, and followers.",
      id: "Proyek kursus buat cari pengguna GitHub dan lihat profil, repository, serta pengikutnya.",
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
      en: "A small shop app for coffee beans, built with Kotlin and Firebase. Customers and admins have their own access, and stock updates as it changes.",
      id: "Aplikasi toko biji kopi pakai Kotlin dan Firebase. Pelanggan dan admin punya akses masing masing, dengan stok yang langsung diperbarui saat berubah.",
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
  { num: String(projects.length), label: { en: 'Projects so far', id: 'Proyek sejauh ini' } },
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
        en: "I work with the Bills & Top Up team on bill payments and top ups in OCTO Mobile, using Kotlin and MVVM.",
        id: "Saya ngerjain fitur bayar tagihan dan isi saldo di OCTO Mobile bareng tim Bills & Top Up, pakai Kotlin dan MVVM.",
      },
    },
    {
      year: { en: 'Feb 2024 – Jan 2025', id: 'Feb 2024 – Jan 2025' },
      title: { en: 'Android Developer', id: 'Android Developer' },
      org: 'PT Uninet Media Sakti',
      desc: {
        en: "I built Mudita for lodging, UnApp for internet service bookings, and MettaDC for visit requests. All three use Kotlin, MVVM, and REST APIs.",
        id: "Saya bikin Mudita buat penginapan, UnApp buat pemesanan layanan internet, dan MettaDC buat permintaan kunjungan. Ketiganya pakai Kotlin, MVVM, dan REST API.",
      },
    },
    {
      year: { en: 'Sep 2023 – Dec 2023', id: 'Sep 2023 – Des 2023' },
      title: { en: 'Android Developer', id: 'Android Developer' },
      org: 'PT Aplikasi Bisnis Sejahtera',
      desc: {
        en: "I worked on SiLancar, an app for home businesses. I handled the UI and connected it to the backend using Kotlin and MVVM.",
        id: "Saya ngerjain SiLancar, aplikasi buat usaha rumahan. Mulai dari bikin tampilan sampai menghubungkannya ke backend pakai Kotlin dan MVVM.",
      },
    },
    {
      year: { en: 'Mar 2023 – Jul 2023', id: 'Mar 2023 – Jul 2023' },
      title: { en: 'Assistant of Mobile Programming', id: 'Asisten Praktikum Pemrograman Mobile' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "I helped students learn Android and Kotlin, put together practice materials, and worked through bugs in their assignments.",
        id: "Saya bantu mahasiswa belajar Android dan Kotlin, nyiapin bahan praktikum, dan cari solusi buat bug di tugas mereka.",
      },
    },
    {
      year: { en: 'Sep 2022 – Nov 2022', id: 'Sep 2022 – Nov 2022' },
      title: { en: 'Mobile Developer', id: 'Mobile Developer' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "I built TernaKu for livestock sales in Dermaji Village, starting with the Figma designs and taking it through development and testing.",
        id: "Saya bikin TernaKu buat jual beli ternak di Desa Dermaji, dari desain di Figma sampai pengembangan dan pengujian aplikasinya.",
      },
    },
    {
      year: { en: 'Mar 2022 – Jul 2022', id: 'Mar 2022 – Jul 2022' },
      title: { en: 'Assistant of Mobile Programming', id: 'Asisten Praktikum Pemrograman Mobile' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "I helped students learn Android and Kotlin, put together practice materials, and worked through bugs in their assignments.",
        id: "Saya bantu mahasiswa belajar Android dan Kotlin, nyiapin bahan praktikum, dan cari solusi buat bug di tugas mereka.",
      },
    },
    {
      year: { en: 'Oct 2021 – Jan 2022', id: 'Okt 2021 – Jan 2022' },
      title: { en: 'Assistant of Programming Algorithm', id: 'Asisten Praktikum Algoritma Pemrograman' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "I taught the basics of C++ and algorithms, helped students during practice sessions, and reviewed their assignments.",
        id: "Saya ngajarin dasar C++ dan algoritma, mendampingi sesi praktikum, dan memeriksa tugas mahasiswa.",
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
        en: "I studied Android fundamentals and Jetpack, joined soft skills sessions, and put what I learned into a final project.",
        id: "Saya belajar dasar Android dan Jetpack, ikut sesi soft skills, lalu nerapin hasil belajarnya di proyek akhir.",
      },
    },
  ],
  education: [
    {
      year: { en: '2019 – 2023', id: '2019 – 2023' },
      title: { en: 'Informatics Engineering', id: 'Teknik Informatika' },
      org: 'Telkom Purwokerto Institute of Technology',
      desc: {
        en: "I earned my degree in Informatics Engineering here. I spent a lot of that time learning Android, Kotlin, Jetpack Compose, and software engineering.",
        id: "Saya kuliah Teknik Informatika di sini. Banyak waktu saya habiskan buat belajar Android, Kotlin, Jetpack Compose, dan rekayasa perangkat lunak.",
      },
    },
    {
      year: { en: '2019 – 2023', id: '2019 – 2023' },
      title: { en: 'Computer and Network Engineering', id: 'Teknik Komputer dan Jaringan' },
      org: 'Telkom Vocational High School Banjarbaru',
      desc: {
        en: "This is where I learned about networks, hardware, and managing computer systems, before getting into app development.",
        id: "Di sini saya mulai belajar jaringan, hardware, dan pengelolaan sistem komputer, sebelum tertarik bikin aplikasi.",
      },
    },
    {
      year: { en: '2013 – 2016', id: '2013 – 2016' },
      title: { en: 'MTsN', id: 'MTsN' },
      org: 'Islamic Junior High School Martapura',
      desc: {
        en: "I went to junior high school in Martapura, South Kalimantan.",
        id: "Saya sekolah di MTsN di Martapura, Kalimantan Selatan.",
      },
    },
    {
      year: { en: '2007 – 2013', id: '2007 – 2013' },
      title: { en: 'SDN', id: 'SDN' },
      org: 'Jawa 2 Elementary School Martapura',
      desc: {
        en: "I went to elementary school in Martapura, South Kalimantan.",
        id: "Saya sekolah dasar di Martapura, Kalimantan Selatan.",
      },
    },
  ],
}

export const contactInfo = [
  { icon: 'instagram', text: '@rzqnfdhl', href: 'https://www.instagram.com/rzqnfdhl/' },
  { icon: 'email', text: 'rzqnfadhil@gmail.com', href: 'mailto:rzqnfadhil@gmail.com' },
  { icon: 'pin', text: 'Indonesia' },
]
