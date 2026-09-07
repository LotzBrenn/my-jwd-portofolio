import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-[#2A2A2A] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-[#D9A441] tracking-wider text-sm">AIR_DEV</span>
        <div className="flex gap-6 text-xs font-semibold">
          <a href="#profile" className="hover:text-[#D9A441] transition">Profile</a>
          <a href="#about" className="hover:text-[#D9A441] transition">About</a>
          <a href="#skills" className="hover:text-[#D9A441] transition">Skills</a>
          <a href="#project" className="hover:text-[#D9A441] transition">Project</a>
          <Link 
            href="/usaha" 
            className="text-[#D9A441] border border-[#D9A441] px-3 py-1 rounded-md hover:bg-[#D9A441] hover:text-[#141414] transition"
          >
            Toko Batik →
          </Link>
        </div>
      </div>
    </nav>
  );
}