'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { createOrderAction } from '@/app/actions/orderAction';

export default function DetailProdukPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedSize, setSelectedSize] = useState('L');
  const [customerNote, setCustomerNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Ambil data produk berdasarkan ID
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Isi nama dan nomor HP terlebih dahulu!');
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('customerName', customerName);
    formData.append('customerPhone', customerPhone);
    formData.append('productName', product.name);
    formData.append('size', selectedSize);
    formData.append('note', customerNote);
    formData.append('totalPrice', product.price);

    const result = await createOrderAction(formData);
    setIsSubmitting(false);

    if (result.success) {
      setOrderData(result.data);
    } else {
      alert(result.message);
    }
  };

  if (loading) return <div className="min-h-screen bg-slate-950 text-white p-10 text-center">Memuat produk...</div>;
  if (!product) return <div className="min-h-screen bg-slate-950 text-white p-10 text-center">Produk tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/usaha" className="text-amber-400 text-sm hover:underline mb-6 inline-block">
          ← Kembali ke Katalog
        </Link>

        {!orderData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/80 p-6 md:p-8 rounded-3xl border border-white/10">
            {/* Detail Produk */}
            <div>
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-2xl mb-4" />
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-white mt-3">{product.name}</h1>
              <p className="text-slate-400 text-sm mt-2">{product.description}</p>
              <p className="text-2xl font-extrabold text-amber-400 mt-4">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>

            {/* Form Pemesanan */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-amber-400 mb-4">Form Pemesanan Custom</h2>
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs uppercase text-slate-400 font-bold mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Budi Santoso"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-400 font-bold mb-1">Nomor HP / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-400 font-bold mb-2">Ukuran</label>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`w-10 h-10 rounded-xl text-sm font-bold border ${
                          selectedSize === sz
                            ? 'bg-amber-500 text-slate-950 border-amber-400'
                            : 'bg-slate-900 text-white border-white/10 hover:bg-slate-800'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-400 font-bold mb-1">Catatan Kustom (Opsional)</label>
                  <textarea
                    rows="2"
                    placeholder="Request ukuran/furing tambahan..."
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Memproses...' : 'Buat Pesanan Baru'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Struk / Confirmation View */
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-white">Pesanan Berhasil Dibuat</h2>
            <p className="text-amber-400 font-mono font-bold">ID Transaksi: {orderData.orderId}</p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 text-left text-sm space-y-2 text-slate-300">
              <p><strong className="text-white">Pelanggan:</strong> {orderData.customerName} ({orderData.customerPhone})</p>
              <p><strong className="text-white">Produk:</strong> {orderData.productName} (Ukuran: {orderData.size})</p>
              <p><strong className="text-white">Catatan:</strong> {orderData.note}</p>
              <p><strong className="text-white">Total:</strong> Rp {orderData.totalPrice.toLocaleString('id-ID')}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20konfirmasi%20pesanan%20%23${orderData.orderId}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition text-sm flex items-center justify-center gap-2"
              >
                💬 Kontak Admin via WA
              </a>
              <button
                onClick={() => setOrderData(null)}
                className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold"
              >
                Pesan Lagi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}