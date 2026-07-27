"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

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
        <>
            {/* header section starts */}
            <header className="header" style={{ background: 'black' }}>
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem", fontWeight: "normal" }}>
                    <img src="/logo.png" alt="Welcome Ceylon Tours Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    Welcome Ceylon Tours
                </Link>

                <nav className="navbar">
                    <div id="nav-close" className="fas fa-times"></div>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/tours">Tours</Link>
                    <Link href="/destinations">Destinations</Link>
                    <Link href="/book">Contact Us/Book Now</Link>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                    <div id="search-btn" className="fas fa-search"></div>
                </div>
            </header>
            {/* header section ends */}

            <div className="min-h-screen pt-40 pb-12 bg-neutral-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
                        <h1 className="text-3xl font-bold text-white mb-2 text-center uppercase tracking-wider">Book Your Tour</h1>
                        <p className="text-gray-400 text-center mb-8">Fill out the form below and we will get back to you shortly.</p>

                        {status === "success" && (
                            <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-8 text-center">
                                Thank you for your booking request! We will contact you soon.
                            </div>
                        )}

                        {status === "error" && (
                            <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-8 text-center">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="tour" className="block text-sm font-medium text-gray-300 mb-2">Select Tour Package</label>
                                <select
                                    id="tour"
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                                    value={formData.tour}
                                    onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                                >
                                    <option value="cultural">Cultural Heritage Tour</option>
                                    <option value="wildlife">Wildlife Safari Adventure</option>
                                    <option value="beach">Coastal Bliss & Relaxation</option>
                                    <option value="custom">Custom Itinerary</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Additional Requirements / Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-yellow-400 text-black font-bold text-lg py-4 rounded-lg hover:bg-yellow-300 transition-colors uppercase tracking-wider disabled:opacity-50"
                            >
                                {status === "submitting" ? "Submitting..." : "Submit Booking Request"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
