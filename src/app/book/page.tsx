"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tour: "cultural",
        date: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", tour: "cultural", date: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="bg-white text-black min-h-screen">
            {/* header section starts */}
            <header className="header" style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem", fontWeight: "normal", color: 'black' }}>
                    <img src="/logo.png" alt="Welcome Ceylon Tours Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    Welcome Ceylon Tours
                </Link>

                <nav className="navbar">
                    <div id="nav-close" className="fas fa-times" style={{ color: 'black' }}></div>
                    <Link href="/" style={{ color: 'black' }}>Home</Link>
                    <Link href="/about" style={{ color: 'black' }}>About</Link>
                    <Link href="/tours" style={{ color: 'black' }}>Tours</Link>
                    <Link href="/destinations" style={{ color: 'black' }}>Destinations</Link>
                    <Link href="/book" style={{ color: 'black' }}>Contact Us/Book Now</Link>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars" style={{ color: 'black' }}></div>
                    <div id="search-btn" className="fas fa-search" style={{ color: 'black' }}></div>
                </div>
            </header>
            {/* header section ends */}

            <section style={{ paddingTop: '150px', paddingBottom: '50px', minHeight: '60vh', backgroundColor: '#fff' }}>
                <div className="heading-container" style={{ position: 'relative', textAlign: 'center', padding: '50px 0', marginBottom: '30px' }}>
                    <span style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 'clamp(4rem, 10vw, 10rem)',
                        color: 'rgba(0,0,0,0.08)',
                        fontFamily: "'Great Vibes', cursive",
                        zIndex: 0,
                        whiteSpace: 'nowrap',
                        userSelect: 'none'
                    }}>
                        Contact Us
                    </span>
                    <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#00204a', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Book Your Tour
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Details Column */}
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                                <div className="bg-yellow-50 p-4 rounded-full text-[#c89b3c] flex items-center justify-center">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Visit us</h3>
                                    <p className="text-gray-600 text-lg">Negombo, Sri Lanka</p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                                <div className="bg-yellow-50 p-4 rounded-full text-[#c89b3c] flex items-center justify-center">
                                    <i className="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Call us</h3>
                                    <p className="text-gray-600 text-lg">+94 77 123 4567 (WhatsApp)</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                                <div className="bg-yellow-50 p-4 rounded-full text-[#c89b3c] flex items-center justify-center">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Email us</h3>
                                    <p className="text-gray-600 text-lg">info@welcomeceylontours.com</p>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                                <div className="bg-yellow-50 p-4 rounded-full text-[#c89b3c] flex items-center justify-center">
                                    <i className="fas fa-clock text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Office hours</h3>
                                    <p className="text-gray-600 text-lg">Mon – Sat: 9am – 6pm</p>
                                    <p className="text-gray-600 text-lg">Sunday: By appointment</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Send us a message</h2>

                            {status === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-8 text-center">
                                    Thank you for your message! We will get back to you shortly.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-8 text-center">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your name"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="you@email.com"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+94 ..."
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-2">Interested in</label>
                                    <div className="relative">
                                        <select
                                            id="tour"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors appearance-none"
                                            value={formData.tour}
                                            onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                                        >
                                            <option value="cultural">Cultural Heritage Tour</option>
                                            <option value="wildlife">Wildlife Safari Adventure</option>
                                            <option value="beach">Coastal Bliss & Relaxation</option>
                                            <option value="custom">Custom Itinerary</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <i className="fas fa-chevron-down text-sm"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your dream trip..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-[#c89b3c] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#b38a35] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {status === "submitting" ? "Sending..." : "Send message"}
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
