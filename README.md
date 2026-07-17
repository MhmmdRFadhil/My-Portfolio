# Portfolio — Android Developer (React + Vite + Tailwind)

Portfolio ini dibangun ulang dari file HTML satu-file kamu menjadi project
**React + Vite + Tailwind CSS + Framer Motion**, dengan tema baru yang solid
(bukan gradient) dan gaya tombol *chunky* seperti referensi screenshot kamu.

## Kenapa stack ini?

| Kebutuhan | Solusi |
|---|---|
| File terstruktur, bukan satu file besar | Vite membagi project jadi komponen per file |
| Ringan & build cepat | Vite jauh lebih cepat dari CRA/Webpack |
| Styling konsisten & mudah di-maintain | Tailwind CSS (utility-first) + token warna terpusat |
| Animasi scroll & saat load | Framer Motion |
| Icon rapi, bukan SVG manual | lucide-react |

Kalau kamu punya preferensi lain (Next.js, Vue, Astro, dll), beri tahu saya —
strukturnya bisa disesuaikan. Tapi untuk portfolio statis seperti ini,
Vite + React + Tailwind adalah kombinasi paling ringan dan populer saat ini.

---

## 1. Cara menjalankan project ini (file sudah lengkap)

Kamu tinggal pakai file-file di folder ini. Syaratnya cuma **Node.js** (versi
18 ke atas) sudah terinstall di komputer kamu. Cek dengan:

```bash
node -v
```

Kalau belum ada, download dari https://nodejs.org (pilih versi LTS).

Setelah itu, dari dalam folder project ini jalankan:

```bash
npm install      # install semua dependency (React, Tailwind, dll)
npm run dev      # jalankan development server
```

Buka browser ke alamat yang muncul di terminal (biasanya `http://localhost:5173`).
Setiap kamu simpan file, halaman otomatis refresh (hot reload).

Untuk build versi production (siap di-deploy):

```bash
npm run build     # hasilnya ada di folder dist/
npm run preview   # coba jalankan hasil build secara lokal
```

Folder `dist/` itulah yang di-upload ke hosting (Vercel, Netlify, GitHub Pages, dll).
Cara tercepat: buat akun di https://vercel.com, hubungkan repo GitHub kamu,
lalu Vercel otomatis build & deploy setiap kamu push.

---

## 2. Kalau mau bikin dari nol sendiri (tutorial manual)

Ini berguna kalau kamu mau paham betul isi tiap konfigurasi, atau mulai project
baru serupa di lain waktu.

```bash
# 1. Buat project Vite + React
npm create vite@latest nama-project -- --template react
cd nama-project
npm install

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Install Framer Motion & lucide-react
npm install framer-motion lucide-react
```

Lalu:
- Isi `tailwind.config.js` → `content` diarahkan ke `./index.html` dan `./src/**/*.{js,jsx}`.
- Tambahkan `@tailwind base; @tailwind components; @tailwind utilities;` di paling atas `src/index.css`.
- Salin semua isi folder `src/` dan `index.html` dari project ini ke project barumu.

Setelah itu, `npm run dev` seperti biasa.

---

## 3. Struktur folder

```
portfolio-react/
├─ index.html                # entry HTML, load font Google
├─ package.json               # daftar dependency & script
├─ vite.config.js             # konfigurasi Vite
├─ tailwind.config.js         # token warna & font custom Tailwind
├─ postcss.config.js
└─ src/
   ├─ main.jsx                # entry point React
   ├─ App.jsx                 # susunan halaman (urutan section)
   ├─ index.css                # design tokens (warna, radius) + style dasar
   ├─ context/
   │  └─ ThemeContext.jsx      # logic dark/light mode
   ├─ hooks/
   │  └─ useActiveSection.js   # deteksi section aktif saat scroll (buat navbar)
   ├─ data/
   │  └─ site.js                # SEMUA teks & data (project, skill, pengalaman, dst)
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Skills.jsx
      ├─ Projects.jsx
      ├─ Experience.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      └─ ui/
         ├─ Button.jsx          # tombol chunky reusable
         ├─ Badge.jsx           # badge tag kecil
         └─ Reveal.jsx          # wrapper animasi scroll-reveal
```

**Prinsipnya:** kalau kamu mau ganti *teks/konten* → edit `src/data/site.js`.
Kalau mau ganti *tampilan/warna* → edit `src/index.css` (bagian token) atau
`tailwind.config.js`. Kamu hampir tidak perlu menyentuh isi komponen untuk
kebutuhan sehari-hari.

---

## 4. Ringkasan perubahan dari versi lama

1. **Tema gradient dihapus.** Semua `linear-gradient` diganti warna solid.
   Warna diatur terpusat di `src/index.css` lewat CSS variable
   (`--paper`, `--primary`, `--accent`, dst) — ganti di satu tempat ini
   untuk mengubah seluruh warna web, termasuk mode gelap.
2. **Tombol jadi "chunky"** seperti screenshot referensi kamu: border tebal,
   hard shadow (bukan blur), dan efek "ditekan" (turun + shadow hilang) saat
   diklik. Lihat `src/components/ui/Button.jsx`.
3. **Contact section diperbaiki.** Form dan card info sekarang memakai
   `grid items-stretch` + `h-full flex flex-col`, jadi tinggi keduanya
   otomatis sejajar berapa pun panjang kontennya. Lihat `Contact.jsx`.
4. **Navbar mobile dilonggarkan.** Padding tiap link diperbesar (`py-3.5`)
   dan jarak antar item ditambah (`gap-2`), jadi area tap/hover tidak lagi
   mepet. Lihat `Navbar.jsx`.
5. **Struktur file React** menggantikan satu file HTML raksasa — lihat bagian
   struktur folder di atas.
6. **Animasi:**
   - Saat halaman pertama kali dibuka, konten hero muncul bertahap
     (staggered) — lihat `Hero.jsx`.
   - Saat scroll, tiap section/card muncul dengan fade + slide halus lewat
     komponen `<Reveal>` (pakai Framer Motion `whileInView`), dan otomatis
     nonaktif kalau user mengaktifkan "reduce motion" di OS-nya.

---

## 5. Kustomisasi cepat

- **Ganti nama, tagline, status:** `src/data/site.js` → objek `profile`.
- **Ganti project/skill/pengalaman:** array `projects`, `skillSet1/2`,
  `experienceData` di file yang sama.
- **Ganti warna utama:** `src/index.css`, ubah `--primary` (dan `--primary-dark`
  untuk warna shadow tombol) di `:root` dan `[data-theme="dark"]`.
- **Ganti foto profil:** di `Hero.jsx`, ganti div avatar dengan
  `<img src="/foto-kamu.jpg" className="..." />` (taruh file gambar di folder `public/`).
- **Hubungkan form contact ke email sungguhan:** paling gampang pakai
  [EmailJS](https://www.emailjs.com) atau [Formspree](https://formspree.io) —
  tinggal ganti fungsi `handleSubmit` di `Contact.jsx`.
