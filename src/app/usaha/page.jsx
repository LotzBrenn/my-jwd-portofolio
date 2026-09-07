// src/app/usaha/page.jsx
import { db } from '../library/db';
import KatalogClient from './KatalogClient';

export const revalidate = 0;

export default async function TokoUsahaPage() {
  let products = [];

  try {
    // Gunakan db.query() bukan db.execute()
    const [rows] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
    if (rows) {
      products = rows;
    }
  } catch (error) {
    console.error('Gagal mengambil data produk dari MySQL:', error);
  }

  return <KatalogClient initialProducts={products} />;
}