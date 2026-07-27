import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{
            position: 'relative',
            backgroundImage: 'url("/images/rail image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            color: '#fff',
            padding: '80px 20px 40px',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0, 32, 74, 0.5), rgba(0, 32, 74, 0.95))',
                zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                {/* Call to Action */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>
                        Let us take you on a tropical adventure!
                    </h2>
                    <Link href="/book" style={{
                        display: 'inline-block',
                        padding: '10px 30px',
                        background: '#001533',
                        color: '#fff',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease'
                    }}>
                        INQUIRE NOW &gt;
                    </Link>
                </div>

                {/* Footer Content */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>

                    {/* Column 1: Contact */}
                    <div style={{ flex: '1 1 250px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                            <i className="fas fa-map-marker-alt" style={{ marginTop: '5px' }}></i>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0 }}>
                                WELCOME CEYLON TOURS<br />
                                NEGOMBO,<br />
                                SRI LANKA.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                            <i className="fas fa-phone"></i>
                            <a href="tel:0777535969" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>(+94) 77 753 5969</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@welcomeceylontours.lk" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>info@welcomeceylontours.lk</a>
                        </div>
                    </div>

                    {/* Column 2: Links 1 */}
                    <div style={{ flex: '1 1 150px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '10px' }}><Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Home</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>About Us</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/destinations" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Destinations</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/tours" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Tours</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/book" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Links 2 */}
                    <div style={{ flex: '1 1 150px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Experiences</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Ticketing & Visa</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', textTransform: 'uppercase' }}>Island Weather</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '15px' }}>Newsletter Subscription</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.5' }}>Get updates about new tours, travel tips, photo guides and more.</p>
                        <form style={{ display: 'flex', marginBottom: '30px' }}>
                            <input type="email" placeholder="Your Email" style={{ flex: 1, padding: '10px 15px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '5px 0 0 5px', outline: 'none' }} />
                            <button type="submit" style={{ padding: '10px 20px', background: '#001533', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderLeft: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', fontWeight: 'bold' }}>SUBSCRIBE &gt;</button>
                        </form>

                        <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '15px' }}>Follow Us</h3>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #fff', color: '#fff', textDecoration: 'none' }}><i className="fab fa-facebook-f"></i></a>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #fff', color: '#fff', textDecoration: 'none' }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                    Made by <a href="https://seranex.lk" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>seranex.lk</a> and love with <a href="https://github.com/chithilamanul1" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>chithila manul</a>
                </div>

                {/* Floating WhatsApp Icon */}
                <a href="https://wa.me/94777535969" target="_blank" rel="noopener noreferrer" style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: '#25D366',
                    color: '#fff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '35px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    textDecoration: 'none'
                }}>
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );
}
