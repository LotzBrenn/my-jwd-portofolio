import { db } from '../../library/db';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminDashboardPage() {
  let orders = [];

  try {
    const result = await db.query('SELECT * FROM orders ORDER BY created_at DESC');
    if (result && Array.isArray(result) && result[0]) {
      orders = result[0];
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Dashboard CRM Admin</h1>
            <p className="text-slate-400 text-sm">Data Pesanan Real-time dari Database MySQL</p>
          </div>
          <Link href="/usaha" className="px-4 py-2 bg-zinc-800 hover:bg-slate-700 text-amber-400 rounded-xl text-sm font-semibold border border-white/10">
            ← Kembali ke Toko
          </Link>
        </div>

        {/* Tabel Pesanan */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-950 text-amber-400 text-xs uppercase border-b border-white/10">
                <tr>
                  <th className="p-4">ID Transaksi</th>
                  <th className="p-4">Pelanggan</th>
                  <th className="p-4">No. HP</th>
                  <th className="p-4">Motif Batik</th>
                  <th className="p-4">Ukuran</th>
                  <th className="p-4">Catatan</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {orders.length > 0 ? (
                  orders.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition">
                      <td className="p-4 font-mono text-amber-400 font-bold">{item.order_id}</td>
                      <td className="p-4 font-medium text-white">{item.customer_name}</td>
                      <td className="p-4">{item.customer_phone}</td>
                      <td className="p-4">{item.product_name}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded-md text-xs font-bold">
                          {item.size}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs truncate">{item.note}</td>
                      <td className="p-4 font-bold text-emerald-400">
                        Rp {Number(item.total_price).toLocaleString('id-ID')}
                      </td>
                      <td className="p-4 text-xs text-slate-400">
                        {new Date(item.created_at).toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-8 text-center text-slate-500">
                      Belum ada transaksi di database MySQL.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}