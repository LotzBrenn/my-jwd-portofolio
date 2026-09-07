'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function KatalogClient({ initialProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('terbaru');

  const categories = ['Semua', 'Batik Tulis', 'Batik Cap', 'Batik Kombinasi', 'Kain Sutra', 'Pakaian Jadi'];

  // Filter & Search Logic dari Data MySQL
  const filteredProducts = initialProducts
    .filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'harga-rendah') return a.price - b.price;
      if (sortBy === 'harga-tinggi') return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#141414] text-white min-h-screen py-12 px-6 md:px-12 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO HEADER */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Griya Batik Nusantara
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Galeri karya batik tulis dan cap kustom berkualitas tinggi. Pilih motif pilihanmu dan sesuaikan ukuran secara langsung.
          </p>
          <div className="pt-2">
            <a
              href="#katalog"
              className="inline-block px-8 py-3 bg-[#D9A441] text-[#141414] font-bold text-sm rounded-lg hover:bg-amber-400 transition shadow-lg"
            >
              Jelajahi Katalog
            </a>
          </div>
        </header>

        {/* CONTAINER FILTER & PENCARIAN (BAR KUNING) */}
        <div id="katalog" className="bg-[#D9A441] p-4 md:p-6 rounded-2xl text-[#141414] mb-12 shadow-xl space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Cari motif batik..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#2A2A2A] text-white placeholder-slate-400 pl-4 pr-10 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <svg className="w-5 h-5 text-slate-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto justify-end items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#2A2A2A] text-white text-xs md:text-sm px-4 py-2.5 rounded-full focus:outline-none cursor-pointer border border-transparent hover:border-amber-400"
              >
                <option value="Semua">Semua Kategori</option>
                <option value="Batik Tulis">Batik Tulis</option>
                <option value="Batik Cap">Batik Cap</option>
                <option value="Batik Kombinasi">Batik Kombinasi</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#2A2A2A] text-white text-xs md:text-sm px-4 py-2.5 rounded-full focus:outline-none cursor-pointer border border-transparent hover:border-amber-400"
              >
                <option value="terbaru">Urutkan: Terbaru</option>
                <option value="harga-rendah">Harga: Termurah</option>
                <option value="harga-tinggi">Harga: Tertinggi</option>
              </select>

              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); setSortBy('terbaru'); }}
                className="bg-[#2A2A2A] text-white p-2.5 rounded-full hover:bg-black transition"
                title="Reset Filter"
              >
                <svg className="w-5 h-5 text-[#D9A441]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            <div className="bg-[#2A2A2A] text-[#D9A441] p-2 rounded-full shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-[#D9A441]'
                    : 'bg-[#2A2A2A] text-slate-200 hover:bg-[#141414]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* GRID PRODUK DARI MYSQL */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#2A2A2A] rounded-3xl overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between hover:border-[#D9A441]/50 transition duration-300 group"
              >
                <div className="relative w-full h-56 bg-[#D9A441]/20 overflow-hidden">
                  <Image
                    src={product.image || '/products/megamendung.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <span className="absolute top-3 left-3 bg-[#141414]/80 text-[#D9A441] text-[10px] font-mono px-3 py-1 rounded-full border border-[#D9A441]/30 uppercase font-bold">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D9A441] transition line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">HARGA</span>
                      <span className="text-lg font-black text-[#D9A441]">
                        Rp {Number(product.price).toLocaleString('id-ID')}
                      </span>
                    </div>

                    <Link
                      href={`/usaha/produk/${product.id}`}
                      className="px-4 py-2 bg-[#D9A441] text-[#141414] font-bold text-xs rounded-xl hover:bg-amber-400 transition"
                    >
                      Pesan Custom →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#2A2A2A] rounded-3xl border border-white/5">
            <p className="text-slate-400 text-base">Belum ada produk di database MySQL atau pencarian tidak ditemukan.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); }}
              className="mt-4 px-6 py-2 bg-[#D9A441] text-[#141414] font-bold text-xs rounded-lg hover:bg-amber-400 transition"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </div>
  );
}