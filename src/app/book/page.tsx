"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

const COUNTRY_CODES = [
    { code: "+93", country: "Afghanistan" },
    { code: "+355", country: "Albania" },
    { code: "+213", country: "Algeria" },
    { code: "+376", country: "Andorra" },
    { code: "+244", country: "Angola" },
    { code: "+1-268", country: "Antigua and Barbuda" },
    { code: "+54", country: "Argentina" },
    { code: "+374", country: "Armenia" },
    { code: "+61", country: "Australia" },
    { code: "+43", country: "Austria" },
    { code: "+994", country: "Azerbaijan" },
    { code: "+1-242", country: "Bahamas" },
    { code: "+973", country: "Bahrain" },
    { code: "+880", country: "Bangladesh" },
    { code: "+1-246", country: "Barbados" },
    { code: "+375", country: "Belarus" },
    { code: "+32", country: "Belgium" },
    { code: "+501", country: "Belize" },
    { code: "+229", country: "Benin" },
    { code: "+975", country: "Bhutan" },
    { code: "+591", country: "Bolivia" },
    { code: "+387", country: "Bosnia and Herzegovina" },
    { code: "+267", country: "Botswana" },
    { code: "+55", country: "Brazil" },
    { code: "+673", country: "Brunei" },
    { code: "+359", country: "Bulgaria" },
    { code: "+226", country: "Burkina Faso" },
    { code: "+257", country: "Burundi" },
    { code: "+238", country: "Cape Verde" },
    { code: "+855", country: "Cambodia" },
    { code: "+237", country: "Cameroon" },
    { code: "+1", country: "Canada" },
    { code: "+236", country: "Central African Republic" },
    { code: "+235", country: "Chad" },
    { code: "+56", country: "Chile" },
    { code: "+86", country: "China" },
    { code: "+57", country: "Colombia" },
    { code: "+269", country: "Comoros" },
    { code: "+242", country: "Congo" },
    { code: "+243", country: "Congo (DRC)" },
    { code: "+506", country: "Costa Rica" },
    { code: "+385", country: "Croatia" },
    { code: "+53", country: "Cuba" },
    { code: "+357", country: "Cyprus" },
    { code: "+420", country: "Czech Republic" },
    { code: "+45", country: "Denmark" },
    { code: "+253", country: "Djibouti" },
    { code: "+1-767", country: "Dominica" },
    { code: "+1-809", country: "Dominican Republic" },
    { code: "+593", country: "Ecuador" },
    { code: "+20", country: "Egypt" },
    { code: "+503", country: "El Salvador" },
    { code: "+240", country: "Equatorial Guinea" },
    { code: "+291", country: "Eritrea" },
    { code: "+372", country: "Estonia" },
    { code: "+268", country: "Eswatini" },
    { code: "+251", country: "Ethiopia" },
    { code: "+679", country: "Fiji" },
    { code: "+358", country: "Finland" },
    { code: "+33", country: "France" },
    { code: "+241", country: "Gabon" },
    { code: "+220", country: "Gambia" },
    { code: "+995", country: "Georgia" },
    { code: "+49", country: "Germany" },
    { code: "+233", country: "Ghana" },
    { code: "+30", country: "Greece" },
    { code: "+1-473", country: "Grenada" },
    { code: "+502", country: "Guatemala" },
    { code: "+224", country: "Guinea" },
    { code: "+245", country: "Guinea-Bissau" },
    { code: "+592", country: "Guyana" },
    { code: "+509", country: "Haiti" },
    { code: "+504", country: "Honduras" },
    { code: "+36", country: "Hungary" },
    { code: "+354", country: "Iceland" },
    { code: "+91", country: "India" },
    { code: "+62", country: "Indonesia" },
    { code: "+98", country: "Iran" },
    { code: "+964", country: "Iraq" },
    { code: "+353", country: "Ireland" },
    { code: "+972", country: "Israel" },
    { code: "+39", country: "Italy" },
    { code: "+1-876", country: "Jamaica" },
    { code: "+81", country: "Japan" },
    { code: "+962", country: "Jordan" },
    { code: "+7", country: "Kazakhstan" },
    { code: "+254", country: "Kenya" },
    { code: "+686", country: "Kiribati" },
    { code: "+383", country: "Kosovo" },
    { code: "+965", country: "Kuwait" },
    { code: "+996", country: "Kyrgyzstan" },
    { code: "+856", country: "Laos" },
    { code: "+371", country: "Latvia" },
    { code: "+961", country: "Lebanon" },
    { code: "+266", country: "Lesotho" },
    { code: "+231", country: "Liberia" },
    { code: "+218", country: "Libya" },
    { code: "+423", country: "Liechtenstein" },
    { code: "+370", country: "Lithuania" },
    { code: "+352", country: "Luxembourg" },
    { code: "+261", country: "Madagascar" },
    { code: "+265", country: "Malawi" },
    { code: "+60", country: "Malaysia" },
    { code: "+960", country: "Maldives" },
    { code: "+223", country: "Mali" },
    { code: "+356", country: "Malta" },
    { code: "+692", country: "Marshall Islands" },
    { code: "+222", country: "Mauritania" },
    { code: "+230", country: "Mauritius" },
    { code: "+52", country: "Mexico" },
    { code: "+691", country: "Micronesia" },
    { code: "+373", country: "Moldova" },
    { code: "+377", country: "Monaco" },
    { code: "+976", country: "Mongolia" },
    { code: "+382", country: "Montenegro" },
    { code: "+212", country: "Morocco" },
    { code: "+258", country: "Mozambique" },
    { code: "+95", country: "Myanmar" },
    { code: "+264", country: "Namibia" },
    { code: "+674", country: "Nauru" },
    { code: "+977", country: "Nepal" },
    { code: "+31", country: "Netherlands" },
    { code: "+64", country: "New Zealand" },
    { code: "+505", country: "Nicaragua" },
    { code: "+227", country: "Niger" },
    { code: "+234", country: "Nigeria" },
    { code: "+389", country: "North Macedonia" },
    { code: "+47", country: "Norway" },
    { code: "+968", country: "Oman" },
    { code: "+92", country: "Pakistan" },
    { code: "+680", country: "Palau" },
    { code: "+970", country: "Palestine" },
    { code: "+507", country: "Panama" },
    { code: "+675", country: "Papua New Guinea" },
    { code: "+595", country: "Paraguay" },
    { code: "+51", country: "Peru" },
    { code: "+63", country: "Philippines" },
    { code: "+48", country: "Poland" },
    { code: "+351", country: "Portugal" },
    { code: "+974", country: "Qatar" },
    { code: "+40", country: "Romania" },
    { code: "+7", country: "Russia" },
    { code: "+250", country: "Rwanda" },
    { code: "+1-869", country: "Saint Kitts and Nevis" },
    { code: "+1-758", country: "Saint Lucia" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines" },
    { code: "+685", country: "Samoa" },
    { code: "+378", country: "San Marino" },
    { code: "+239", country: "Sao Tome and Principe" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+221", country: "Senegal" },
    { code: "+381", country: "Serbia" },
    { code: "+248", country: "Seychelles" },
    { code: "+232", country: "Sierra Leone" },
    { code: "+65", country: "Singapore" },
    { code: "+421", country: "Slovakia" },
    { code: "+386", country: "Slovenia" },
    { code: "+677", country: "Solomon Islands" },
    { code: "+252", country: "Somalia" },
    { code: "+27", country: "South Africa" },
    { code: "+211", country: "South Sudan" },
    { code: "+34", country: "Spain" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+249", country: "Sudan" },
    { code: "+597", country: "Suriname" },
    { code: "+46", country: "Sweden" },
    { code: "+41", country: "Switzerland" },
    { code: "+963", country: "Syria" },
    { code: "+886", country: "Taiwan" },
    { code: "+992", country: "Tajikistan" },
    { code: "+255", country: "Tanzania" },
    { code: "+66", country: "Thailand" },
    { code: "+670", country: "Timor-Leste" },
    { code: "+228", country: "Togo" },
    { code: "+676", country: "Tonga" },
    { code: "+1-868", country: "Trinidad and Tobago" },
    { code: "+216", country: "Tunisia" },
    { code: "+90", country: "Turkey" },
    { code: "+993", country: "Turkmenistan" },
    { code: "+688", country: "Tuvalu" },
    { code: "+256", country: "Uganda" },
    { code: "+380", country: "Ukraine" },
    { code: "+971", country: "United Arab Emirates" },
    { code: "+44", country: "United Kingdom" },
    { code: "+1", country: "United States" },
    { code: "+598", country: "Uruguay" },
    { code: "+998", country: "Uzbekistan" },
    { code: "+678", country: "Vanuatu" },
    { code: "+58", country: "Venezuela" },
    { code: "+84", country: "Vietnam" },
    { code: "+967", country: "Yemen" },
    { code: "+260", country: "Zambia" },
    { code: "+263", country: "Zimbabwe" },
];

const fw: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };

const lbl: React.CSSProperties = { fontSize: "1.3rem", fontWeight: 600, color: "#444" };

const inp: React.CSSProperties = {
    width: "100%",
    background: "#f8f8f6",
    border: "1px solid #e4e4e0",
    borderRadius: 10,
    padding: "1.2rem 1.4rem",
    fontSize: "1.5rem",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
};

const submitBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: 999,
    padding: "1.2rem 2.4rem",
    fontSize: "1.6rem",
    fontWeight: 700,
    cursor: "pointer",
};

const waBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#25D366",
    color: "#fff",
    borderRadius: 999,
    padding: "1.2rem 2.4rem",
    fontSize: "1.5rem",
    fontWeight: 600,
    textDecoration: "none",
};

export default function BookPage() {
    const [form, setForm] = useState({ name: "", email: "", cc: "+44", wa: "", tour: "", travelers: "", date: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

    const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm((p) => ({ ...p, [key]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://formsubmit.co/ajax/info@welcomeceylontours.lk", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    _subject: `New Booking Inquiry – ${form.name}`,
                    _captcha: "false",
                    Name: form.name,
                    Email: form.email,
                    WhatsApp: `${form.cc} ${form.wa}`,
                    "Tour Interested In": form.tour || "Not specified",
                    "Number of Travelers": form.travelers || "Not specified",
                    "Preferred Date": form.date || "Not specified",
                    Message: form.message || "—",
                }),
            });
            const data = await res.json();
            if (data.success === "true" || data.success === true) {
                setStatus("ok");
                setForm({ name: "", email: "", cc: "+44", wa: "", tour: "", travelers: "", date: "", message: "" });
            } else {
                setStatus("err");
            }
        } catch {
            setStatus("err");
        }
    };

    return (
        <div style={{ background: "#f5f5f3", minHeight: "100vh", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

            {/* Navbar */}
            <header style={{ background: "#fff", borderBottom: "1px solid #e8e8e4", position: "sticky", top: 0, zIndex: 100 }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.4rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <img src="/logo.png" alt="Welcome Ceylon Tours" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                        <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem", color: "#1a1a1a" }}>Welcome Ceylon Tours</span>
                    </Link>
                    <nav style={{ display: "flex", gap: "2.4rem" }}>
                        {([["Home", "/"], ["About", "/about"], ["Tours", "/tours"], ["Destinations", "/destinations"]] as [string, string][]).map(([l, h]) => (
                            <Link key={l} href={h} style={{ fontSize: "1.4rem", color: "#555", textDecoration: "none", fontWeight: 500 }}>{l}</Link>
                        ))}
                    </nav>
                </div>
            </header>

            <main style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2.4rem 0" }}>

                {/* Hero label */}
                <p style={{ fontSize: "1.3rem", color: "#888", letterSpacing: "0.07em", marginBottom: "1rem", textTransform: "uppercase", fontWeight: 500 }}>Plan Your Trip</p>

                {/* Headline row */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
                    <h1 style={{ fontSize: "clamp(4rem, 8vw, 7.2rem)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: "1.6rem", color: "#666", maxWidth: 340, lineHeight: 1.6, textAlign: "right" }}>
                        Tell us when and where you'd like to go and we'll confirm availability within 24 hours.
                    </p>
                </div>

                {/* Main grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3.2rem", alignItems: "start" }}>

                    {/* Form card */}
                    <div style={{ background: "#fff", borderRadius: 20, padding: "3.2rem", boxShadow: "0 2px 24px rgba(0,0,0,0.06)" }}>
                        {status === "ok" && (
                            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534", padding: "1.4rem 1.8rem", borderRadius: 12, marginBottom: "2.4rem", fontSize: "1.5rem" }}>
                                ✓ Inquiry sent! We'll reach out on WhatsApp or Email within 24 hours.
                            </div>
                        )}
                        {status === "err" && (
                            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#991b1b", padding: "1.4rem 1.8rem", borderRadius: 12, marginBottom: "2.4rem", fontSize: "1.5rem" }}>
                                ✗ Something went wrong. Please try again or WhatsApp us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            {/* Name */}
                            <div style={fw}>
                                <label htmlFor="name" style={lbl}>Name <span style={{ color: "#e74c3c" }}>*</span></label>
                                <input id="name" type="text" placeholder="Your full name" required style={inp} value={form.name} onChange={set("name")} />
                            </div>

                            {/* Email */}
                            <div style={fw}>
                                <label htmlFor="email" style={lbl}>Email <span style={{ color: "#e74c3c" }}>*</span></label>
                                <input id="email" type="email" placeholder="you@example.com" required style={inp} value={form.email} onChange={set("email")} />
                            </div>

                            {/* WhatsApp – full width */}
                            <div style={{ ...fw, gridColumn: "1 / -1" }}>
                                <label htmlFor="wa" style={lbl}>
                                    WhatsApp Number <span style={{ color: "#e74c3c" }}>*</span>
                                    <span style={{ fontWeight: 400, color: "#888", fontSize: "1.2rem", marginLeft: 6 }}>(we'll confirm your booking here)</span>
                                </label>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <select value={form.cc} onChange={set("cc")} style={{ ...inp, width: 210, flexShrink: 0 }}>
                                        {COUNTRY_CODES.map((c) => (
                                            <option key={`${c.code}-${c.country}`} value={c.code}>{c.code} — {c.country}</option>
                                        ))}
                                    </select>
                                    <input id="wa" type="tel" placeholder="771234567" required style={{ ...inp, flex: 1 }} value={form.wa} onChange={set("wa")} />
                                </div>
                            </div>

                            {/* Tour */}
                            <div style={fw}>
                                <label htmlFor="tour" style={lbl}>Select Your Tour</label>
                                <div style={{ position: "relative" }}>
                                    <select id="tour" style={{ ...inp, appearance: "none", cursor: "pointer" }} value={form.tour} onChange={set("tour")}>
                                        <option value="">Choose your tour…</option>
                                        <option value="Cultural Heritage">Cultural Heritage Tour</option>
                                        <option value="Wildlife Safari">Wildlife Safari Adventure</option>
                                        <option value="Coastal Bliss">Coastal Bliss &amp; Relaxation</option>
                                        <option value="Custom Itinerary">Custom Itinerary</option>
                                    </select>
                                    <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#888" }}>▾</span>
                                </div>
                            </div>

                            {/* Travelers */}
                            <div style={fw}>
                                <label htmlFor="travelers" style={lbl}>Number of Travelers</label>
                                <input id="travelers" type="text" placeholder="e.g. 2 adults, 1 child" style={inp} value={form.travelers} onChange={set("travelers")} />
                            </div>

                            {/* Date – full width */}
                            <div style={{ ...fw, gridColumn: "1 / -1" }}>
                                <label htmlFor="date" style={lbl}>Preferred Date</label>
                                <input id="date" type="date" style={{ ...inp, width: "100%" }} value={form.date} onChange={set("date")} />
                            </div>

                            {/* Message – full width */}
                            <div style={{ ...fw, gridColumn: "1 / -1" }}>
                                <label htmlFor="message" style={lbl}>Message / Special Requests</label>
                                <textarea id="message" rows={4} placeholder="Anything else we should know?" style={{ ...inp, resize: "vertical" }} value={form.message} onChange={set("message")} />
                            </div>

                            {/* Buttons – full width */}
                            <div style={{ gridColumn: "1 / -1", display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                                <button type="submit" disabled={status === "sending"} style={submitBtn}>
                                    {status === "sending" ? "Sending…" : "Reserve Your Spot"}
                                    <span style={{ background: "#fff", color: "#1a1a1a", borderRadius: "50%", width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginLeft: 8 }}>↗</span>
                                </button>
                                <a href="https://wa.me/94771234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20tour!" target="_blank" rel="noopener noreferrer" style={waBtn}>
                                    <i className="fab fa-whatsapp" style={{ fontSize: "1.8rem" }}></i> Chat on WhatsApp
                                </a>
                            </div>
                        </form>
                    </div>

                    {/* Side image */}
                    <div style={{ position: "sticky", top: 80 }}>
                        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: 520 }}>
                            <Image src="/images/sigiriya12.webp" alt="Scenic Sri Lanka" fill style={{ objectFit: "cover" }} />
                            <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 999, padding: "5px 14px", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a1a" }}>
                                Your Journey ✦
                            </div>
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "3rem 2rem 2rem", color: "#fff" }}>
                                <p style={{ fontSize: "1.4rem", lineHeight: 1.6, margin: 0 }}>Sri Lanka — the Pearl of the Indian Ocean, awaits you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact strip */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", margin: "5.6rem 0", textAlign: "center" }}>
                    {[
                        { icon: "📞", title: "Call & WhatsApp", lines: ["+94 77 123 4567"] },
                        { icon: "🕐", title: "Working Hours", lines: ["Mon – Sat: 9am – 6pm", "Sunday: By Appointment"] },
                        { icon: "✉️", title: "Write to Us", lines: ["info@welcomeceylontours.lk"] },
                    ].map((item) => (
                        <div key={item.title} style={{ padding: "3rem 2rem", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                            <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{item.icon}</div>
                            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.8rem" }}>{item.title}</h3>
                            {item.lines.map((l) => <p key={l} style={{ fontSize: "1.4rem", color: "#666", margin: "0.2rem 0" }}>{l}</p>)}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", background: "#fff", borderRadius: 24, overflow: "hidden", marginBottom: "6rem", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
                    <div style={{ padding: "4.8rem" }}>
                        <span style={{ background: "#f0f0ec", borderRadius: 999, padding: "4px 14px", fontSize: "1.2rem", color: "#666", fontWeight: 500 }}>Start now</span>
                        <h2 style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", fontWeight: 800, color: "#1a1a1a", marginTop: "1.6rem", lineHeight: 1.2 }}>
                            Discover your <em style={{ fontStyle: "italic" }}>next perfect</em> Sri Lanka escape
                        </h2>
                        <p style={{ fontSize: "1.5rem", color: "#666", lineHeight: 1.7, marginTop: "1.2rem" }}>
                            Plan your trip in minutes and enjoy every moment of your Sri Lanka adventure.
                        </p>
                        <Link href="/tours" style={{ display: "inline-block", marginTop: "2.4rem", background: "#1a1a1a", color: "#fff", padding: "1.2rem 2.4rem", borderRadius: 999, fontSize: "1.5rem", fontWeight: 600, textDecoration: "none" }}>
                            View Our Tours →
                        </Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "2rem 2rem 2rem 0" }}>
                        <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 220 }}>
                            <Image src="/images/9arch2.jpg" alt="Nine Arch Bridge" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: 220 }}>
                            <Image src="/images/sigiriya2.jpg" alt="Sigiriya" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
