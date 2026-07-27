import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Destinations() {
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
                        Explore
                    </span>
                    <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#00204a', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Destinations
                    </h1>
                </div>

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Destination 1 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/sigiriya12.webp" alt="Sigiriya" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Sigiriya</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>The Ancient Rock Fortress</p>
                            </div>
                        </div>
                        {/* Destination 2 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/kandy.jpg" alt="Kandy" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Kandy</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>The Cultural Capital</p>
                            </div>
                        </div>
                        {/* Destination 3 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/beach.jpg" alt="Mirissa" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Mirissa</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>Whale Watching & Beaches</p>
                            </div>
                        </div>
                        {/* Destination 4 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/orkhanshots.jpg" alt="Yala" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Yala</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>National Park Safari</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
