import './globals.css';

export const metadata = {
  title: "Af'wan Ikho Rahmadhani - Junior Web Developer",
  description: "Portofolio Pribadi & Website Usaha Batik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased selection:bg-[#D9A441] selection:text-[#141414]">
        {children}
      </body>
    </html>
  );
}