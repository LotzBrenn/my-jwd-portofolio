'use server';

import { db } from '../library/db';

export async function createOrderAction(formData) {
  try {
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const productName = formData.get('productName');
    const size = formData.get('size');
    const note = formData.get('note') || '-';
    const totalPrice = parseInt(formData.get('totalPrice'), 10);

    const orderId = `ORD-BTK-${Math.floor(1000 + Math.random() * 9000)}`;

    const query = `
      INSERT INTO orders (order_id, customer_name, customer_phone, product_name, size, note, total_price)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [
      orderId,
      customerName,
      customerPhone,
      productName,
      size,
      note,
      totalPrice,
    ]);

    return {
      success: true,
      data: {
        orderId,
        customerName,
        customerPhone,
        productName,
        size,
        note,
        totalPrice,
        status: 'Menunggu Konfirmasi',
      },
    };
  } catch (error) {
    console.error('Database Order Error:', error);
    return { success: false, message: 'Gagal menyimpan pesanan ke database MySQL.' };
  }
}