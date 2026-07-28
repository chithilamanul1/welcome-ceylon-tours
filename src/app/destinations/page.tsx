import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Destinations() {
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
                            <Image src="/images/dalada.webp" alt="Kandy" fill style={{ objectFit: 'cover' }} />
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
                            <Image src="/images/safa2.jpg" alt="Yala" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Yala</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>National Park Safari</p>
                            </div>
                        </div>
                        {/* Destination 5 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/gallefort.webp" alt="Galle" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Galle</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>Historic Dutch Fort</p>
                            </div>
                        </div>
                        {/* Destination 6 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/9arch2.jpg" alt="Ella" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Ella</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>Nine Arch Bridge</p>
                            </div>
                        </div>
                        {/* Destination 7 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/colombo.jpg" alt="Colombo" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Colombo</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>The Commercial Capital</p>
                            </div>
                        </div>
                        {/* Destination 8 */}
                        <div style={{ position: 'relative', height: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                            <Image src="/images/pinnawala.webp" alt="Pinnawala" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>Pinnawala</h3>
                                <p style={{ color: '#ddd', fontSize: '1.4rem' }}>Elephant Orphanage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
