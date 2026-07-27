import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
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
                        Welcome Ceylon
                    </span>
                    <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#00204a', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        About Us
                    </h1>
                </div>

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <Image
                                src="/images/sigiriya12.webp"
                                alt="About Welcome Ceylon Tours"
                                width={800}
                                height={600}
                                style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Your Trusted Partner in Sri Lanka</h2>
                            <p style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                                Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, dedicated to providing you with the most unforgettable experiences across our beautiful island. Based in Negombo, we have years of experience in crafting the perfect itineraries for our guests.
                            </p>
                            <p style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#666', marginBottom: '30px' }}>
                                Whether you are looking for a relaxing beach holiday, an adventurous wildlife safari, or a cultural journey through ancient temples and palaces, we have the expertise to make your dream vacation a reality.
                            </p>
                            <Link href="/book" className="btn" style={{ display: 'inline-block', padding: '1rem 3rem', fontSize: '1.7rem', color: '#fff', background: '#00204a', borderRadius: '5rem', textTransform: 'capitalize' }}>
                                Book Your Tour
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
