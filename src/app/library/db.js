// src/lib/db.js (atau src/app/library/db.js)
import 'server-only';
import mysql from 'mysql2/promise';

const globalForDb = global;

export const db =
  globalForDb.db ||
  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan password MySQL kamu
    database: 'jwd_batik',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;