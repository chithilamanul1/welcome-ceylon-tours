import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Welcome Ceylon Tours Logo" width={50} height={50} className="rounded-full" />
              <span className="text-white font-bold text-xl tracking-wider uppercase">Welcome Ceylon Tours</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors uppercase text-sm font-medium">Home</Link>
            <Link href="/#about" className="text-white hover:text-yellow-400 transition-colors uppercase text-sm font-medium">About</Link>
            <Link href="/#tours" className="text-white hover:text-yellow-400 transition-colors uppercase text-sm font-medium">Tours</Link>
            <Link href="/#contact" className="text-white hover:text-yellow-400 transition-colors uppercase text-sm font-medium">Contact</Link>
            <Link href="/admin" className="text-white/50 hover:text-white transition-colors uppercase text-sm font-medium">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
