import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Tours() {
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

            <section style={{ paddingTop: '150px', paddingBottom: '50px', minHeight: '60vh' }}>
                <div className="heading-container" style={{ position: 'relative', textAlign: 'center', padding: '50px 0', marginBottom: '30px' }}>
                    <span style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 'clamp(4rem, 10vw, 10rem)',
                        color: 'rgba(0,0,0,0.03)',
                        fontFamily: "'Great Vibes', cursive",
                        zIndex: 0,
                        whiteSpace: 'nowrap',
                        userSelect: 'none'
                    }}>
                        Experiences
                    </span>
                    <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#00204a', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Our Tours
                    </h1>
                </div>

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Tour 1 */}
                        <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <div style={{ position: 'relative', height: '250px' }}>
                                <Image src="/images/sigiriya12.webp" alt="Cultural Tour" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>Cultural Heritage Tour</h3>
                                <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '20px' }}>Explore the ancient cities, temples, and rich history of Sri Lanka.</p>
                                <Link href="/book" style={{ display: 'inline-block', padding: '10px 20px', background: '#00204a', color: '#fff', borderRadius: '5px', fontSize: '1.4rem' }}>Book Now</Link>
                            </div>
                        </div>
                        {/* Tour 2 */}
                        <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <div style={{ position: 'relative', height: '250px' }}>
                                <Image src="/images/beach.jpg" alt="Beach Holiday" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>Beach Holiday</h3>
                                <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '20px' }}>Relax on the pristine beaches of the southern and eastern coasts.</p>
                                <Link href="/book" style={{ display: 'inline-block', padding: '10px 20px', background: '#00204a', color: '#fff', borderRadius: '5px', fontSize: '1.4rem' }}>Book Now</Link>
                            </div>
                        </div>
                        {/* Tour 3 */}
                        <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <div style={{ position: 'relative', height: '250px' }}>
                                <Image src="/images/orkhanshots.jpg" alt="Wildlife Safari" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>Wildlife Safari</h3>
                                <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '20px' }}>Experience the thrill of seeing elephants, leopards, and exotic birds.</p>
                                <Link href="/book" style={{ display: 'inline-block', padding: '10px 20px', background: '#00204a', color: '#fff', borderRadius: '5px', fontSize: '1.4rem' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
