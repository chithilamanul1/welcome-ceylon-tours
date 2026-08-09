"use client";

import { useState, useEffect } from "react";
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

export default function BookPage() {
    const [cc, setCc] = useState("+94");
    const [sent, setSent] = useState(false);

    useEffect(() => {
        if (window.location.search.includes("success=1")) setSent(true);
    }, []);

    return (
        <>
            <style>{`
        * { box-sizing: border-box; }
        .book-page { background: #f5f5f3; min-height: 100vh; font-family: 'Inter','Segoe UI',sans-serif; }

        .book-nav { background: #fff; border-bottom: 1px solid #e8e8e4; position: sticky; top: 0; z-index: 100; }
        .book-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .book-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .book-logo img { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; }
        .book-logo span { font-family: 'Great Vibes',cursive; font-size: 1.8rem; color: #1a1a1a; white-space: nowrap; }
        .book-nav-links { display: flex; gap: 2rem; }
        .book-nav-links a { font-size: 1.4rem; color: #555; text-decoration: none; font-weight: 500; }

        .book-main { max-width: 1200px; margin: 0 auto; padding: 5rem 2rem 0; }
        .book-eyebrow { font-size: 1.2rem; color: #888; letter-spacing: 0.07em; text-transform: uppercase; font-weight: 500; margin-bottom: 1rem; }

        .book-headline { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 4rem; flex-wrap: wrap; }
        .book-h1 { font-size: clamp(3.6rem,7vw,7rem); font-weight: 800; color: #1a1a1a; line-height: 1; margin: 0; letter-spacing: -0.02em; }
        .book-subtitle { font-size: 1.5rem; color: #666; max-width: 320px; line-height: 1.6; text-align: right; }

        .book-grid { display: grid; grid-template-columns: 1fr 300px; gap: 3rem; align-items: start; }
        .book-side { position: sticky; top: 80px; }
        .book-side-img { position: relative; border-radius: 20px; overflow: hidden; height: 520px; }
        .book-side-badge { position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.92); backdrop-filter: blur(8px); border-radius: 999px; padding: 5px 14px; font-size: 1.2rem; font-weight: 600; color: #1a1a1a; }
        .book-side-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent,rgba(0,0,0,0.65)); padding: 3rem 2rem 2rem; color: #fff; }
        .book-side-caption p { font-size: 1.4rem; line-height: 1.6; margin: 0; }

        .book-form-card { background: #fff; border-radius: 20px; padding: 3rem; box-shadow: 0 2px 24px rgba(0,0,0,0.06); }
        .book-alert-ok { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 1.4rem 1.8rem; border-radius: 12px; margin-bottom: 2rem; font-size: 1.5rem; }
        .book-form { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem; }
        .book-field { display: flex; flex-direction: column; gap: 7px; }
        .book-field-full { display: flex; flex-direction: column; gap: 7px; grid-column: 1 / -1; }
        .book-label { font-size: 1.3rem; font-weight: 600; color: #444; }
        .book-hint { font-size: 1.1rem; color: #888; font-weight: 400; margin-left: 5px; }
        .book-input { width: 100%; background: #f8f8f6; border: 1px solid #e4e4e0; border-radius: 10px; padding: 1.2rem 1.4rem; font-size: 1.5rem; color: #1a1a1a; outline: none; font-family: inherit; transition: border-color 0.2s; }
        .book-input:focus { border-color: #c89b3c; }
        .book-wa-row { display: flex; gap: 8px; }
        .book-cc { width: 200px; flex-shrink: 0; }
        .book-wa-num { flex: 1; }
        .book-select-wrap { position: relative; }
        .book-select-wrap::after { content: "▾"; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #888; }
        .book-btn-row { grid-column: 1 / -1; display: flex; gap: 1.2rem; flex-wrap: wrap; align-items: center; }
        .book-submit { display: inline-flex; align-items: center; background: #1a1a1a; color: #fff; border: none; border-radius: 999px; padding: 1.2rem 2.4rem; font-size: 1.6rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: background 0.2s; }
        .book-submit:hover { background: #333; }
        .book-submit-icon { background: #fff; color: #1a1a1a; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-left: 8px; }
        .book-wa-btn { display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: #fff; border-radius: 999px; padding: 1.2rem 2.4rem; font-size: 1.5rem; font-weight: 600; text-decoration: none; }
        .book-wa-btn:hover { background: #1ebe5e; }

        .book-strip { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; margin: 5rem 0; text-align: center; }
        .book-strip-card { padding: 2.8rem 1.6rem; background: #fff; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
        .book-strip-icon { font-size: 2.6rem; margin-bottom: 1rem; }
        .book-strip-title { font-size: 1.6rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.6rem; }
        .book-strip-line { font-size: 1.3rem; color: #666; margin: 0.2rem 0; }

        .book-cta { display: grid; grid-template-columns: 1fr 1fr; background: #fff; border-radius: 24px; overflow: hidden; margin-bottom: 6rem; box-shadow: 0 2px 20px rgba(0,0,0,0.05); }
        .book-cta-text { padding: 4rem; }
        .book-cta-tag { background: #f0f0ec; border-radius: 999px; padding: 4px 14px; font-size: 1.2rem; color: #666; font-weight: 500; }
        .book-cta-h2 { font-size: clamp(2.2rem,3.5vw,3.2rem); font-weight: 800; color: #1a1a1a; margin-top: 1.4rem; line-height: 1.2; }
        .book-cta-p { font-size: 1.4rem; color: #666; line-height: 1.7; margin-top: 1rem; }
        .book-cta-link { display: inline-block; margin-top: 2rem; background: #1a1a1a; color: #fff; padding: 1.2rem 2.4rem; border-radius: 999px; font-size: 1.5rem; font-weight: 600; text-decoration: none; }
        .book-cta-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 2rem 2rem 2rem 0; }
        .book-cta-img { border-radius: 16px; overflow: hidden; position: relative; height: 210px; }

        @media (max-width: 768px) {
          .book-nav-links { display: none; }
          .book-main { padding: 3rem 1.6rem 0; }
          .book-headline { flex-direction: column; align-items: flex-start; gap: 0.8rem; margin-bottom: 2.4rem; }
          .book-subtitle { text-align: left; max-width: 100%; }
          .book-grid { grid-template-columns: 1fr; }
          .book-side { display: none; }
          .book-form { grid-template-columns: 1fr; }
          .book-field-full { grid-column: auto; }
          .book-btn-row { grid-column: auto; flex-direction: column; }
          .book-submit, .book-wa-btn { width: 100%; justify-content: center; }
          .book-cc { width: 130px; }
          .book-strip { grid-template-columns: 1fr; gap: 1.2rem; margin: 3rem 0; }
          .book-cta { grid-template-columns: 1fr; }
          .book-cta-imgs { display: none; }
          .book-cta-text { padding: 2.8rem 2rem; }
          .book-form-card { padding: 2rem 1.6rem; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .book-grid { grid-template-columns: 1fr 250px; }
          .book-side-img { height: 420px; }
          .book-cc { width: 155px; }
          .book-form { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

            <div className="book-page">
                <nav className="book-nav">
                    <div className="book-nav-inner">
                        <Link href="/" className="book-logo">
                            <img src="/logo.png" alt="Welcome Ceylon Tours" />
                            <span>Welcome Ceylon Tours</span>
                        </Link>
                        <div className="book-nav-links">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/tours">Tours</Link>
                            <Link href="/destinations">Destinations</Link>
                        </div>
                    </div>
                </nav>

                <main className="book-main">
                    <p className="book-eyebrow">Plan Your Trip</p>
                    <div className="book-headline">
                        <h1 className="book-h1">Contact Us</h1>
                        <p className="book-subtitle">Tell us when and where you&apos;d like to go and we&apos;ll confirm availability within 24 hours.</p>
                    </div>

                    <div className="book-grid">
                        {/* Form card */}
                        <div className="book-form-card">
                            {sent && (
                                <div className="book-alert-ok">
                                    ✓ Inquiry sent! We&apos;ll reach out on WhatsApp or Email within 24 hours.
                                </div>
                            )}

                            {/* Plain HTML POST — no AJAX, no CORS issues */}
                            <form
                                action="https://formsubmit.co/info@welcomeceylontours.lk"
                                method="POST"
                                className="book-form"
                            >
                                <input type="hidden" name="_subject" value="New Booking Inquiry – Welcome Ceylon Tours" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="https://welcomeceylontours.lk/book?success=1" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="book-field">
                                    <label htmlFor="b-name" className="book-label">Name <span style={{ color: "#e74c3c" }}>*</span></label>
                                    <input id="b-name" name="Name" type="text" className="book-input" placeholder="Your full name" required />
                                </div>

                                <div className="book-field">
                                    <label htmlFor="b-email" className="book-label">Email <span style={{ color: "#e74c3c" }}>*</span></label>
                                    <input id="b-email" name="Email" type="email" className="book-input" placeholder="you@example.com" required />
                                </div>

                                <div className="book-field-full">
                                    <label htmlFor="b-wa" className="book-label">
                                        WhatsApp Number <span style={{ color: "#e74c3c" }}>*</span>
                                        <span className="book-hint">(we&apos;ll confirm your booking here)</span>
                                    </label>
                                    <div className="book-wa-row">
                                        <select
                                            name="_cc_select"
                                            className="book-input book-cc"
                                            value={cc}
                                            onChange={(e) => setCc(e.target.value)}
                                        >
                                            {COUNTRY_CODES.map((c) => (
                                                <option key={`${c.code}-${c.country}`} value={c.code}>{c.code} — {c.country}</option>
                                            ))}
                                        </select>
                                        <input id="b-wa" name="WhatsApp" type="tel" className="book-input book-wa-num" placeholder="771234567" required />
                                        <input type="hidden" name="Country Code" value={cc} />
                                    </div>
                                </div>

                                <div className="book-field">
                                    <label htmlFor="b-tour" className="book-label">Select Your Tour</label>
                                    <div className="book-select-wrap">
                                        <select id="b-tour" name="Tour Interested In" className="book-input" style={{ appearance: "none", width: "100%", cursor: "pointer" }}>
                                            <option value="">Choose your tour…</option>
                                            <option value="Cultural Heritage">Cultural Heritage Tour</option>
                                            <option value="Wildlife Safari">Wildlife Safari Adventure</option>
                                            <option value="Coastal Bliss">Coastal Bliss &amp; Relaxation</option>
                                            <option value="Custom Itinerary">Custom Itinerary</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="book-field">
                                    <label htmlFor="b-travelers" className="book-label">Number of Travelers</label>
                                    <input id="b-travelers" name="Number of Travelers" type="text" className="book-input" placeholder="e.g. 2 adults, 1 child" />
                                </div>

                                <div className="book-field-full">
                                    <label htmlFor="b-date" className="book-label">Preferred Date</label>
                                    <input id="b-date" name="Preferred Date" type="date" className="book-input" />
                                </div>

                                <div className="book-field-full">
                                    <label htmlFor="b-msg" className="book-label">Message / Special Requests</label>
                                    <textarea id="b-msg" name="Message" rows={4} className="book-input" placeholder="Anything else we should know?" style={{ resize: "vertical" }} />
                                </div>

                                <div className="book-btn-row">
                                    <button type="submit" className="book-submit">
                                        Reserve Your Spot
                                        <span className="book-submit-icon">↗</span>
                                    </button>
                                    <a
                                        href="https://wa.me/94771234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20tour!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="book-wa-btn"
                                    >
                                        <i className="fab fa-whatsapp" style={{ fontSize: "1.8rem" }}></i> Chat on WhatsApp
                                    </a>
                                </div>
                            </form>
                        </div>

                        {/* Side image — hidden on mobile */}
                        <div className="book-side">
                            <div className="book-side-img">
                                <Image src="/images/sigiriya12.webp" alt="Scenic Sri Lanka" fill style={{ objectFit: "cover" }} />
                                <div className="book-side-badge">Your Journey ✦</div>
                                <div className="book-side-caption">
                                    <p>Sri Lanka — the Pearl of the Indian Ocean, awaits you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact strip */}
                    <div className="book-strip">
                        {[
                            { icon: "📞", title: "Call & WhatsApp", lines: ["+94 77 123 4567"] },
                            { icon: "🕐", title: "Working Hours", lines: ["Mon – Sat: 9am – 6pm", "Sunday: By Appointment"] },
                            { icon: "✉️", title: "Write to Us", lines: ["info@welcomeceylontours.lk"] },
                        ].map((item) => (
                            <div key={item.title} className="book-strip-card">
                                <div className="book-strip-icon">{item.icon}</div>
                                <div className="book-strip-title">{item.title}</div>
                                {item.lines.map((l) => <p key={l} className="book-strip-line">{l}</p>)}
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="book-cta">
                        <div className="book-cta-text">
                            <span className="book-cta-tag">Start now</span>
                            <h2 className="book-cta-h2">Discover your <em style={{ fontStyle: "italic" }}>next perfect</em> Sri Lanka escape</h2>
                            <p className="book-cta-p">Plan your trip in minutes and enjoy every moment of your Sri Lanka adventure.</p>
                            <Link href="/tours" className="book-cta-link">View Our Tours →</Link>
                        </div>
                        <div className="book-cta-imgs">
                            <div className="book-cta-img">
                                <Image src="/images/9arch2.jpg" alt="Nine Arch Bridge" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="book-cta-img">
                                <Image src="/images/sigiriya2.jpg" alt="Sigiriya" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
