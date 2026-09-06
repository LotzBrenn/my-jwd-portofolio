// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function ProfilePage() {
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <Navbar />

      {/* SECTION 1: PROFILE / HERO */}
      <section id="profile" className="min-h-screen bg-[#141414] pt-24 pb-12 px-6 md:px-12 lg:px-16 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative">
          
          {/* Indikator Titik & Label Kiri */}
          <div className="hidden md:flex flex-col items-center gap-4 z-20 pr-4">
            <span className="text-[#D9A441] text-xs font-mono font-bold tracking-widest uppercase mb-1">
              Profile_
            </span>
            <div className="w-4 h-9 bg-[#D9A441] rounded-full"></div> {/* Pill Aktif */}
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          {/* Area Utama: Foto Offset + Teks Overlap Besar */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:pl-6 w-full">
            
            {/* Container Frame Foto (Papan Kuning + Foto Geser) */}
            <div className="relative w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] md:w-[380px] md:h-[470px] lg:w-[440px] lg:h-[530px] shrink-0">
              
              {/* Landasan Kuning (Pojok Atas-Kanan) */}
              <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-[#D9A441] z-0"></div>

              {/* Foto Profil Offset (Pojok Kiri-Bawah) */}
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

            {/* Teks Nama & Profesi (Skala Besar + Menimpa Foto) */}
            <div className="relative z-20 mt-8 md:mt-0 md:-ml-28 lg:-ml-40 text-center md:text-left pointer-events-none select-none">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
                AF'WAN IKHO<br />
                RAHMADHANI
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-light text-slate-300 tracking-wide pt-4 md:pt-6 font-mono">
                Junior Web Developer
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="min-h-screen bg-[#2A2A2A] py-20 px-6 md:px-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Indikator Titik Kiri */}
          <div className="hidden md:flex flex-col items-center gap-4 z-20 pr-4">
            <span className="text-[#D9A441] text-xs font-mono font-bold tracking-widest uppercase mb-1">
              About_
            </span>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-8 bg-[#D9A441] rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          <div className="md:col-span-11 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-[#D9A441] mb-1">
              Perkenalkan, Saya
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Af’wan Ikho Rahmadhani
            </h3>
            <p className="text-[#D9A441] text-sm md:text-base font-medium mb-3">
              Junior Web Developer
            </p>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl">
              Saya adalah siswa kelas XII Rekayasa Perangkat Lunak yang memiliki minat dalam pengembangan website. Saya terus mempelajari teknologi web dan membangun antarmuka yang rapi, responsif, serta mudah digunakan.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: SKILLS */}
      <section id="skills" className="min-h-screen bg-[#141414] py-20 px-6 md:px-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="hidden md:flex flex-col items-center gap-4 z-20 pr-4">
            <span className="text-[#D9A441] text-xs font-mono font-bold tracking-widest uppercase mb-1">
              Skills_</span>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-8 bg-[#D9A441] rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          <div className="md:col-span-11">
            <h2 className="text-3xl md:text-5xl font-black text-[#D9A441] mb-10">
              Web Dev.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Front End</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> HTML</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> CSS</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> Bootstrap</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> JS</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Backend</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> PHP</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> MySQL</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> PostgreSQL</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Tools</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> VSCode</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> GitHub</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D9A441] rounded-full"></span> Laragon</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: PROJECT */}
      <section id="project" className="min-h-screen bg-[#2A2A2A] py-20 px-6 md:px-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="hidden md:flex flex-col items-center gap-4 z-20 pr-4">
            <span className="text-[#D9A441] text-xs font-mono font-bold tracking-widest uppercase mb-1">
              Project_</span>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-8 bg-[#D9A441] rounded-full"></div>
          </div>

          <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-[#D9A441]">
                Website
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Aplikasi Web Usaha Pengrajin Batik Nusantara dengan fitur pemesanan kustom (pilih motif, ukuran, catatan khusus) yang langsung terintegrasi dengan database MySQL.
              </p>
              <div className="pt-2">
                <Link
                  href="/usaha"
                  className="inline-block px-6 py-3 bg-[#D9A441] text-[#141414] font-bold text-sm rounded-lg hover:bg-amber-400 transition shadow-lg"
                >
                  Buka Aplikasi Toko Batik →
                </Link>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <Link href="/usaha" className="group block w-full max-w-sm bg-[#D9A441] p-6 rounded-3xl transition transform hover:-translate-y-1">
                <div className="border-2 border-dashed border-[#141414]/40 bg-[#D9A441]/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center">
                  <svg className="w-16 h-16 text-[#141414]/60 mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-[#141414] font-bold text-sm">Lihat Galeri Toko Batik</span>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>
      
      <footer className="bg-[#141414] py-6 text-center text-xs text-slate-500 border-t border-white/5">
        &copy; 2026 Af'wan Ikho Rahmadhani. All rights reserved.
      </footer>
    </div>
  );
}