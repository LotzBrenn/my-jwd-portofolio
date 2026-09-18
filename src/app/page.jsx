'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const URL_WEB_TOKO = process.env.NEXT_PUBLIC_TOKO_URL || "https://toko-batik-kamu.vercel.app";

  // State untuk Popup / Modal Sertifikat
  const [selectedCert, setSelectedCert] = useState(null);

  // Data Dummy Sertifikat
  const sertifikatList = [
    {
      id: 1,
      title: "Sertifikasi Teknis Junior Web Developer",
      issuer: "BNSP / Skema Ujian Praktik JWD",
      year: "2026",
      image: "/sertifikat.png", // Dummy Image
      desc: "Bukti kompetensi penguasaan pemrograman web statis, dinamis, dan basis data."
    }
  ];

  return (
    <div className="bg-[#141414] text-white min-h-screen font-sans selection:bg-[#D9A441] selection:text-[#141414]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-[#2A2A2A] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9A441] flex items-center justify-center font-bold text-[#141414] text-xs">
              AIR
            </div>
            <span className="font-bold text-[#D9A441] tracking-wider text-sm hidden sm:inline">AIR_DEV</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-xs font-semibold overflow-x-auto">
            <a href="#profile" className="hover:text-[#D9A441] transition">Profile</a>
            <a href="#about" className="hover:text-[#D9A441] transition">Tentang</a>
            <a href="#pendidikan" className="hover:text-[#D9A441] transition">Pendidikan</a>
            <a href="#pengalaman" className="hover:text-[#D9A441] transition">Pengalaman</a>
            <a href="#karya" className="hover:text-[#D9A441] transition">Karya</a>
            <a href="#skills" className="hover:text-[#D9A441] transition">Keahlian</a>
            <a href="#sertifikasi" className="hover:text-[#D9A441] transition">Sertifikasi</a>
            <a href="#kegiatan" className="hover:text-[#D9A441] transition">Kegiatan</a>
            <a href="#blog" className="hover:text-[#D9A441] transition">Blog</a>
            <a href="#kontak" className="hover:text-[#D9A441] transition">Kontak</a>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO / PROFILE */}
      <section id="profile" className="min-h-screen bg-[#141414] pt-24 pb-12 px-6 md:px-16 flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="hidden md:flex md:col-span-1 flex-col items-center gap-4 z-20">
            <span className="text-[#D9A441] text-xs font-mono font-bold tracking-widest uppercase mb-1">Profile_</span>
            <div className="w-4 h-9 bg-[#D9A441] rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          <div className="md:col-span-11 flex flex-col md:flex-row items-center justify-center w-full">
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[350px] md:h-[440px] lg:w-[400px] lg:h-[490px] shrink-0">
              <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-[#D9A441] z-0"></div>
              <div className="absolute bottom-0 left-0 w-[88%] h-[88%] z-10 overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Af'wan Ikho Rahmadhani"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="relative z-20 mt-8 md:mt-0 md:-ml-20 lg:-ml-32 text-center md:text-left select-none">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
                AF'WAN IKHO<br />
                RAHMADHANI
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-light text-white tracking-wide pt-4 md:pt-6 font-mono text-center md:text-right">
                Junior Web Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="bg-[#2A2A2A] py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#D9A441]">Perkenalkan, Saya</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Af’wan Ikho Rahmadhani</h3>
            <p className="text-[#D9A441] text-sm md:text-base font-mono">Junior Web Developer — Rekayasa Perangkat Lunak</p>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              Saya adalah siswa Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan aplikasi web modern. Prinsip utama saya adalah menciptakan kode yang bersih, terstruktur, responsif, dan mudah diakses oleh pengguna.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#141414] p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block">Profil Profesional</span>
            <h4 className="text-lg font-bold text-white">Junior Web Developer</h4>
            <p className="text-xs text-slate-400">Instansi: SMKN 1 Jenangan Ponorogo</p>
            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
              Memiliki kompetensi dalam implementasi User Interface responsif, pemrograman terstruktur, pengelolaan database MySQL, serta pembuatan aplikasi web dinamis sesuai standar SKKNI.
            </p>
          </div>
        </div>
      </section>

      {/* REVISI 1: SEKSI PENDIDIKAN TERSENDIRI (SD - SMK) */}
      <section id="pendidikan" className="py-20 px-6 md:px-16 bg-[#141414] border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">Riwayat Akademik_</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Pendidikan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2A2A2A] p-6 rounded-2xl border-l-4 border-[#D9A441]">
              <span className="text-xs text-[#D9A441] font-mono block mb-1">Sekolah Dasar</span>
              <h3 className="text-lg font-bold text-white">SD Muhammadiyah Ponorogo</h3>
              <p className="text-xs text-slate-400 mt-2">Jl. Batorokatong, Ponorogo. Bersekolah 2015 - 202 dan seing mengikuti lomba uji kopetensi</p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-2xl border-l-4 border-[#D9A441]">
              <span className="text-xs text-[#D9A441] font-mono block mb-1">Sekolah Menengah Pertama</span>
              <h3 className="text-lg font-bold text-white">SMPN 1 Siman Ponorogo</h3>
              <p className="text-xs text-slate-400 mt-2">Siman, Ponorogo. Bersekolah 2021- 2024 dan aktif dalam berorganisasi di dalam sekolah</p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-2xl border-l-4 border-[#D9A441]">
              <span className="text-xs text-[#D9A441] font-mono block mb-1">2024 – Sekarang (SMK)</span>
              <h3 className="text-lg font-bold text-white">SMKN 1 Jenangan Ponorogo</h3>
              <p className="text-xs text-slate-300 font-semibold mt-1">Rekayasa Perangkat Lunak</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Fokus pada pengembangan aplikasi web, dan pengembangan data dan gim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVISI 1: SEKSI PENGALAMAN TERSENDIRI (LKS & PROYEK TOKO) */}
      <section id="pengalaman" className="py-20 px-6 md:px-16 bg-[#2A2A2A] border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">Pengalaman Kerja & Kompetisi_</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Pengalaman</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tambahan LKS 2026 */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/10 space-y-3">
              <span className="px-3 py-1 bg-[#D9A441]/20 text-[#D9A441] text-xs font-bold rounded-full border border-[#D9A441]/30">
                Kompetensi / Lomba
              </span>
              <h3 className="text-xl font-bold text-white">Mengikuti Lomba LKS Tahun 2026</h3>
              <p className="text-xs text-[#D9A441] font-mono">Bidang: Web Technologies / Web Development</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Berpartisipasi dalam Lomba Kompetensi Siswa (LKS) tingkat SMK tahun 2026 untuk menguji ketrampilan dalam membangun aplikasi web modern yang cepat, terstruktur, dan sesuai standar industri.
              </p>
            </div>

            {/* Proyek Toko */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/10 space-y-3">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                Proyek Aplikasi
              </span>
              <h3 className="text-xl font-bold text-white">Pengembangan E-Commerce Toko Batik</h3>
              <p className="text-xs text-[#D9A441] font-mono">Next.js & MySQL Cloud Aiven</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Membangun platform toko online karya tangan terpisah yang terintegrasi dengan database cloud, memiliki fitur pencarian, detail produk, serta admin dashboard.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* SECTION KARYA / PORTFOLIO */}
      <section id="karya" className="py-20 px-6 md:px-16 bg-[#141414] border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">Portfolio & Proyek Unggulan_</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Karya</h2>
          </div>

          {/* Card Griya Batik */}
          <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto lg:col-span-2 bg-gradient-to-br from-[#D9A441]/20 to-[#141414]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#D9A441]/10 border-4 border-[#D9A441] flex items-center justify-center">
                    <span className="text-4xl">🛍️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Griya Batik</h3>
                  <p className="text-xs text-[#D9A441] font-mono">E-Commerce Platform</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3 p-8 space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full border border-purple-500/30">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">
                  Railway
                </span>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-white">Toko Online Kain Batik Tradisional</h4>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-[#D9A441]">Griya Batik</strong> adalah platform e-commerce yang menjual kain batik tradisional berkualitas tinggi dengan berbagai motif khas Nusantara. Platform ini memungkinkan pelanggan untuk memesan kain batik dengan <strong>ukuran custom sesuai kebutuhan</strong>, mulai dari pesanan retail hingga grosir untuk keperluan bisnis fashion, konveksi, atau acara formal.
                </p>
                <p>
                  Setiap produk dilengkapi dengan <strong>deskripsi detail motif, asal daerah, filosofi batik, dan panduan perawatan</strong> untuk menjaga kualitas kain. Sistem keranjang belanja terintegrasi dengan manajemen stok real-time dan dashboard admin untuk pengelolaan produk, pesanan, dan laporan penjualan.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs font-bold text-[#D9A441] uppercase tracking-wide mb-3">Fitur Utama:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Katalog produk dengan filter motif & harga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Pemesanan ukuran kustom (meter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Pencarian & detail produk interaktif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Admin dashboard lengkap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Database cloud (MySQL Aiven)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A441] mt-0.5">▸</span>
                    <span>Deploy otomatis via Railway</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://tokobatik-project-production-3f24.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-[#141414] font-bold text-sm rounded-xl hover:bg-amber-400 transition shadow-lg hover:shadow-[#D9A441]/20"
                >
                  🌐 Kunjungi Toko Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVISI 2: KEAHLIAN (JAVASCRIPT DI BACKEND) */}
      <section id="skills" className="py-20 px-6 md:px-16 bg-[#2A2A2A] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#D9A441] mb-10">Keahlian & Technical Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-lg font-bold text-[#D9A441] border-b border-white/10 pb-2">Front End</h3>
              <ul className="space-y-2.5 text-slate-300 text-sm">
                <li className="flex justify-between items-center">
                  <span>• HTML5 & CSS3</span>
                  <span className="text-xs text-[#D9A441] font-mono">Mahir</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>• React / Next.js</span>
                  <span className="text-xs text-[#D9A441] font-mono">Menengah</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>• Tailwind CSS</span>
                  <span className="text-xs text-[#D9A441] font-mono">Menengah</span>
                </li>
              </ul>
            </div>

            {/* JavaScript dipindah ke Back End */}
            <div className="bg-[#2A2A2A] p-6 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-lg font-bold text-[#D9A441] border-b border-white/10 pb-2">Back End & Database</h3>
              <ul className="space-y-2.5 text-slate-300 text-sm">
                <li className="flex justify-between items-center">
                  <span>• JavaScript (Node.js/ES6+)</span>
                  <span className="text-xs text-[#D9A441] font-mono">Menengah</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>• Server Actions & API</span>
                  <span className="text-xs text-[#D9A441] font-mono">Menengah</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>• MySQL / SQL Query</span>
                  <span className="text-xs text-[#D9A441] font-mono">Menengah</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-lg font-bold text-[#D9A441] border-b border-white/10 pb-2">Tools</h3>
              <ul className="space-y-2.5 text-slate-300 text-sm">
                <li className="flex justify-between items-center">
                  <span>• VS Code & Git/GitHub</span>
                  <span className="text-xs text-[#D9A441] font-mono">Mahir</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>• Laragon / TablePlus</span>
                  <span className="text-xs text-[#D9A441] font-mono">Mahir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVISI 3: SERTIFIKASI DENGAN POPUP GAMBAR */}
      <section id="sertifikasi" className="py-20 px-6 md:px-16 bg-[#2A2A2A] border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">Bukti Kompetensi_</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Sertifikasi</h2>
            <p className="text-xs text-slate-400 mt-1">Klik card untuk melihat bukti fisik/gambar sertifikat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sertifikatList.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-[#141414] p-6 rounded-2xl border border-white/10 cursor-pointer hover:border-[#D9A441] transition group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[#D9A441] text-xs font-mono">{cert.issuer}</span>
                  <span className="px-2 py-0.5 bg-[#D9A441]/10 text-[#D9A441] text-[10px] rounded font-bold">{cert.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D9A441] transition">{cert.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{cert.desc}</p>
                <div className="mt-4 text-xs text-[#D9A441] font-semibold flex items-center gap-1">
                  🔍 Lihat Sertifikat (Popup)
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVISI 4: DOKUMENTASI & WORKSHOP (2 KEGIATAN 2026) */}
      <section id="kegiatan" className="py-20 px-6 md:px-16 bg-[#141414] border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">Aktivitas & Pelatihan_</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Dokumentasi & Workshop</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Demo Website Map Daerah di Madiun */}
            <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden border border-white/10 flex flex-col">
              <div className="relative h-56 w-full bg-slate-800">
                <Image
                  src="/demo.jpg"
                  alt="Demo Website Map Daerah Madiun"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#D9A441] font-mono block mb-1">Madiun • 2026</span>
                  <h3 className="text-lg font-bold text-white">Demo Website Map Daerah Madiun</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    Mempresentasikan dan mendemonstrasikan hasil pengembangan sistem peta interaktif wilayah Madiun untuk pemetaan potensi lokal dan fasilitas publik.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Pembukaan Ajang Prestasi Siswa di Surabaya */}
            <div className="bg-[#2A2A2A] rounded-2xl overflow-hidden border border-white/10 flex flex-col">
              <div className="relative h-56 w-full bg-slate-800">
                <Image
                  src="/ajang-siswa.jpg"
                  alt="Pembukaan Ajang Prestasi Siswa Surabaya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#D9A441] font-mono block mb-1">Surabaya • 2026</span>
                  <h3 className="text-lg font-bold text-white">Pembukaan Ajang Prestasi Siswa</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    Menghadiri serangkaian pembukaan ajang kompetisi dan unjuk prestasi siswa tingkat provinsi di Surabaya sebagai perwakilan bidang Web Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVISI 5: SEKSI BLOG TERSENDIRI (TENTANG FRAMEWORK) */}
      {/* SECTION BLOG (DIRECT HTML - 1 ARTICLE, 4 PARAGRAPHS) */}
      <section id="blog" className="py-20 px-6 md:px-16 bg-[#2A2A2A] border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest block mb-2">
              Artikel & Catatan Teknis_
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Blog</h2>
          </div>

          {/* Card Blog Langsung */}
          <article className="bg-[#141414] p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl space-y-6">
            <header className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#D9A441]/20 text-[#D9A441] text-xs font-bold rounded-full border border-[#D9A441]/30">
                  Framework & Modern Web
                </span>
                <span className="text-xs text-slate-400 font-mono">15 September 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                Pentingnya Memahami Architecture Next.js App Router dalam Pengembangan Web Modern
              </h3>
            </header>

            <div className="text-slate-300 text-sm md:text-base leading-relaxed space-y-5">
              {/* Paragraf 1 */}
              <p>
                Perkembangan ekosistem JavaScript, khususnya React, telah membawa perubahan besar dalam cara kita merancang aplikasi web dinamis. Kehadiran Next.js dengan fitur <strong className="text-[#D9A441] font-semibold">App Router</strong> berbasis Server Components menjadi standar baru yang memisahkan beban eksekusi antara *server* dan *client*. Sebagai siswa Rekayasa Perangkat Lunak, memahami pergeseran paradigma ini adalah langkah krusial untuk menghasilkan aplikasi yang tidak hanya menarik dari sisi visual, tetapi juga optimal dari segi performa.
              </p>

              {/* Paragraf 2 */}
              <p>
                Keunggulan utama Next.js terletak pada kemampuannya melakukan prapemrosesan halaman di sisi server secara *default*. Dengan pendekatan ini, komponen yang tidak membutuhkan interaktivitas kompleks—seperti tata letak utama, artikel, dan elemen statis—dapat dirender lebih awal sebelum dikirimkan ke peramban pengguna. Hasilnya, *bundle* JavaScript yang dikirim ke *client* menjadi jauh lebih ringan, yang secara langsung berdampak pada kecepatan pemuatan halaman awal (*First Contentful Paint*) serta efisiensi penggunaan memori.
              </p>

              {/* Paragraf 3 */}
              <p>
                Selain efisiensi *rendering*, fitur <strong className="text-[#D9A441] font-semibold">Server Actions</strong> pada Next.js juga menyederhanakan alur komunikasi data antara *front end* dan *database*. Kita tidak perlu lagi menulis kode *boilerplate* API terpisah hanya untuk menangani pengiriman formulir atau kueri data sederhana. Semua proses interaksi database dapat dikelola secara aman di dalam skrip sisi server, mengurangi potensi kebocoran kredensial sensitif sekaligus mempercepat waktu pengembangan aplikasi web secara keseluruhan.
              </p>

              {/* Paragraf 4 */}
              <p>
                Kesimpulannya, penguasaan *framework* Next.js memberikan fondasi teknis yang kokoh bagi seorang Junior Web Developer dalam menghadapi tantangan industri modern. Kombinasi antara arsitektur komponen terstruktur, performa tinggi secara *out-of-the-box*, serta kemudahan integrasi basis data menjadikan Next.js sebagai perkakas yang sangat ideal—baik untuk membangun portofolio pribadi maupun sistem aplikasi e-commerce yang kompleks.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION KONTAK */}
      <section id="kontak" className="py-20 px-6 md:px-16 bg-[#141414] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[#D9A441] text-xs font-mono uppercase tracking-widest">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">Hubungi Saya</h2>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs md:text-sm">
            <div className="bg-[#2A2A2A] px-6 py-4 rounded-xl border border-white/5">
              <span className="block text-xs text-slate-400 mb-1">Email</span>
              <span className="font-bold text-[#D9A441]">afwanikhor26@gmail.com</span>
            </div>
            <div className="bg-[#2A2A2A] px-6 py-4 rounded-xl border border-white/5">
              <span className="block text-xs text-slate-400 mb-1">WhatsApp</span>
              <span className="font-bold text-[#D9A441]">+62 851 3447 7938</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141414] py-8 px-6 text-center text-xs text-slate-500 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Af'wan Ikho Rahmadhani. All rights reserved.</p>
          <p className="text-[#D9A441]">Proyek Ujian Praktik Kompetensi Junior Web Developer</p>
        </div>
      </footer>

      {/* POPUP / MODAL SERTIFIKAT */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#2A2A2A] max-w-2xl w-full rounded-2xl overflow-hidden border border-[#D9A441]/40 shadow-2xl space-y-4 p-6 relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
            <p className="text-xs text-[#D9A441] font-mono">{selectedCert.issuer} — {selectedCert.year}</p>

            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-black">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-slate-300">{selectedCert.desc}</p>
            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 bg-[#D9A441] text-[#141414] font-bold text-xs rounded-xl hover:bg-amber-400 transition"
            >
              Tutup Preview
            </button>
          </div>
        </div>
      )}

    </div>
  );
}