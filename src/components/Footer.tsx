import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/logo.png" alt="Welcome Ceylon Tours Logo" width={40} height={40} className="rounded-full" />
                            <span className="font-bold text-lg tracking-wider uppercase">Welcome Ceylon Tours</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your trusted tour operator in Negombo, Sri Lanka. We provide the best travel experiences across the island.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                            <li><Link href="/#tours" className="hover:text-yellow-400 transition-colors">Tour Packages</Link></li>
                            <li><Link href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase">Contact Info</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Negombo, Sri Lanka</li>
                            <li>Email: info@welcomeceylontours.com</li>
                            <li>Phone: +94 123 456 789</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Welcome Ceylon Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
