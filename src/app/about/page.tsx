import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function About() {
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
                        Welcome Ceylon
                    </span>
                    <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#00204a', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        About Us
                    </h1>
                </div>

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
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
                        </div>
                    </div>

                    {/* Additional Detailed Content */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '2rem', color: '#00204a', marginBottom: '15px' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.5rem', lineHeight: '1.7', color: '#555' }}>
                                To showcase the unparalleled beauty, rich heritage, and warm hospitality of Sri Lanka to the world. We strive to create personalized, sustainable, and authentic travel experiences that leave our guests with lifelong memories.
                            </p>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '2rem', color: '#00204a', marginBottom: '15px' }}>Why Choose Us?</h3>
                            <ul style={{ fontSize: '1.5rem', lineHeight: '1.7', color: '#555', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Local Expertise:</strong> Deep knowledge of hidden gems and iconic spots.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Tailor-Made Itineraries:</strong> Customized tours to fit your preferences.</li>
                                <li style={{ marginBottom: '10px' }}><strong>24/7 Support:</strong> We are always here for you during your journey.</li>
                                <li><strong>Professional Guides:</strong> Friendly, experienced, and multilingual drivers/guides.</li>
                            </ul>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '2rem', color: '#00204a', marginBottom: '15px' }}>Our Story</h3>
                            <p style={{ fontSize: '1.5rem', lineHeight: '1.7', color: '#555' }}>
                                What started as a small passion project by a group of local travel enthusiasts has grown into a premier travel agency. Our love for Sri Lanka drives us to continuously explore and curate the best possible experiences for travelers from all corners of the globe.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Link href="/book" className="btn" style={{ display: 'inline-block', padding: '1.2rem 4rem', fontSize: '1.8rem', color: '#fff', background: '#00204a', borderRadius: '5rem', textTransform: 'capitalize', transition: 'background 0.3s' }}>
                            Start Your Journey With Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
