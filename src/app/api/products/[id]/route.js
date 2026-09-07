import { db } from '../../../library/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const result = await db.query('SELECT * FROM products WHERE id = ?', [id]);

    if (result && Array.isArray(result) && result[0] && result[0].length > 0) {
      return NextResponse.json(result[0][0]);
    }

    return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: 'Database Error', error }, { status: 500 });
  }
}