import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div id="top"></div>

      {/* header section starts */}
      <header className="header">
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

      {/* search form */}
      <div className="search-form">
        <div id="close-search" className="fas fa-times"></div>
        <form action="">
          <input type="search" name="" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>

      {/* home section starts */}
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box second" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/images/sigiriya2.jpg"
                  alt="Visit Sri Lanka"
                  fill
                  style={{ objectFit: 'cover', zIndex: 0 }}
                  priority
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0))', zIndex: 1 }} />
                <div className="content" style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{ color: "white" }}>#Visit</span>
                  <h3>Sri Lanka</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, offering the best experiences across the island. Discover the wonders of Sri Lanka with Welcome Ceylon Tours, your trusted partner for unforgettable journeys.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/images/rail image.jpg"
                  alt="Welcome to Paradise"
                  fill
                  style={{ objectFit: 'cover', zIndex: 0 }}
                  priority
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0))', zIndex: 1 }} />
                <div className="content" style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{ color: "white" }}>Welcome to</span>
                  <h3>Paradise</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, offering the best experiences across the island. Discover the wonders of Sri Lanka with Welcome Ceylon Tours, your trusted partner for unforgettable journeys.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/images/orkhanshots.jpg"
                  alt="Explore the Island"
                  fill
                  style={{ objectFit: 'cover', zIndex: 0 }}
                  priority
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(#ffffff00, #000000a0)', zIndex: 1 }} />
                <div className="content" style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{ color: "white" }}>Explore the</span>
                  <h3>Island</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, offering the best experiences across the island. Discover the wonders of Sri Lanka with Welcome Ceylon Tours, your trusted partner for unforgettable journeys.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/images/beach-2.jpg"
                  alt="Wonder of Asia"
                  fill
                  style={{ objectFit: 'cover', zIndex: -2 }}
                  priority
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0))', zIndex: -1 }} />
                <div className="content" style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ color: "white" }}>Wonder of</span>
                  <h3>Asia</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, offering the best experiences across the island. Discover the wonders of Sri Lanka with Welcome Ceylon Tours, your trusted partner for unforgettable journeys.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
      {/* home section ends */}

      {/* category/services section starts */}
      <section className="category adventure" id="adventure">
        <h1 className="heading">Our Services</h1>
        <div className="box-container">
          <div className="box">
            <img src="/images/rail image.jpg" alt="Tour Packages" />
            <h3>Tour Packages</h3>
            <p>Explore the beauty of Sri Lanka with our carefully crafted tour packages tailored to your preferences...</p>
            <a href="#tours" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="/images/colombo.jpg" alt="Airport Transfers" />
            <h3>Airport Transfers</h3>
            <p>Enjoy a hassle-free start to your vacation with our reliable and comfortable airport transfer services...</p>
            <a href="#transfers" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="/images/safa2.jpg" alt="Safari Tours" />
            <h3>Safari Tours</h3>
            <p>Experience the thrill of the wild with our exciting safari tours in Sri Lanka's top national parks...</p>
            <a href="#safari" className="btn">read more</a>
          </div>
        </div>
      </section>
      {/* category/services section ends */}

      {/* map section starts */}
      <section className="map" id="map">
        <div className="image">
          <img src="/images/map2.2.jpg" className="center" alt="" />
        </div>
        <div className="content">
          <h3>Explore the island</h3>
          <p>Full of romantic landscapes, stirring mountains, lush green tea gardens and golden beaches, the island nation of Sri Lanka is nothing short of magnificent. The country has no shortage of beautiful awe-inspiring spots, natural, historic and cultural, each more picture-perfect than the next. From soulful Buddhist monasteries and temples to exotic and impeccable spots rarely explored, Sri Lanka offers everything that makes your escape a memorable one!.</p>
          <p>Whether traveling with your significant other or planning a vacay with your family, Sri Lanka won’t disappoint you!</p>
          <a href="#map" className="btn">read more</a>
        </div>
      </section>
      {/* map section ends */}

      {/* blogs section starts */}
      <section className="blogs" id="blogs">
        <h1 className="heading"> our daily posts </h1>
        <div className="swiper blogs-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src="/images/lotustower.jpg" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Lotus Tower</h3>
              <p>Lotus Tower also referred to as Colombo Lotus Tower, is a 350 m (1,150 ft) tall tower...</p>
              <a href="#lotus" className="btn">read more</a>
            </div>
            <div className="swiper-slide slide">
              <img src="/images/gallefort.webp" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Galle Fort</h3>
              <p>The Galle Fort, or Dutch Fort as it is also known, is a fortification first built by...</p>
              <a href="#" className="btn">read more</a>
            </div>
            <div className="swiper-slide slide">
              <img src="/images/dalada.webp" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Temple Of Tooth</h3>
              <p>The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka.</p>
              <a href="#" className="btn">read more</a>
            </div>
            <div className="swiper-slide slide">
              <img src="/images/unawatuna.webp" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Unawatuna Beach</h3>
              <p>Unawatuna is one of the biggest tourist destinations in Sri Lanka and is the most “famous” beach in the country..</p>
              <a href="#" className="btn">read more</a>
            </div>
            <div className="swiper-slide slide">
              <img src="/images/peradeniya.webp" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Peradeniya Botanical Garden</h3>
              <p>Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy in the Central Province of Sri Lanka. </p>
              <a href="#" className="btn">read more</a>
            </div>
            <div className="swiper-slide slide">
              <img src="/images/gangarama.jpg" alt="" />
              <div className="icons">
                <a href="#"> <i className="fas fa-calendar"></i> 25th Dec, 2022 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>Gangaramaya Temple</h3>
              <p>Gangaramaya Temple is one of the most well-known Buddhist temples in Colombo...</p>
              <a href="#" className="btn">read more</a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}

      {/* event home page section starts */}
      <section className="event" id="events">
        <h1 className="heading1">Upcoming Events</h1>
        <div className="eventrow">
          <div className="example-2 card">
            <div className="wrapper">
              <div className="head">
                <div className="date">
                  <span className="day">05</span>
                  <span className="month">Dec</span>
                  <span className="year">2022</span>
                </div>
                <ul className="menu-content">
                  <li><a href="#" className="fa fa-bookmark-o"></a></li>
                  <li><a href="#" className="fa fa-heart-o" id="heart"><span>18</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                </ul>
              </div>
              <div className="data">
                <div className="Econtent">
                  <span className="author">Welcome Ceylon Tours</span>
                  <h1 className="title"><a href="#">Sri Pada Pilgrimage Season</a></h1>
                  <p className="text1">Though not the highest mountain of Sri Lanka, the striking pyramid of Adam's Peak (7,360 ft) is certainly the... </p>
                  <a href="#sripada" className="Ebutton">Read more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="example-2 card">
            <div className="wrapper" style={{ background: "linear-gradient(#ffffff00, #00000082), url(/images/awurudu.jpg) center/cover no-repeat" }}>
              <div className="head">
                <div className="date">
                  <span className="day">05</span>
                  <span className="month">Dec</span>
                  <span className="year">2022</span>
                </div>
                <ul className="menu-content">
                  <li><a href="#" className="fa fa-bookmark-o"></a></li>
                  <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                </ul>
              </div>
              <div className="data">
                <div className="Econtent">
                  <span className="author">Welcome Ceylon Tours</span>
                  <h1 className="title"><a href="#">Sinhala & Hindu New Year - 2023</a></h1>
                  <p className="text1">Sinhalese New Year, generally known as Aluth Avurudda in Sri Lanka, is a Sri Lankan holiday that celebrates the...</p>
                  <a href="#awurudu" className="Ebutton">Read more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="example-2 card">
            <div className="wrapper" style={{ background: "linear-gradient(#ffffff00, #00000082), url(/images/perahera.jpg) center/cover no-repeat" }}>
              <div className="head">
                <div className="date">
                  <span className="day">05</span>
                  <span className="month">Dec</span>
                  <span className="year">2022</span>
                </div>
                <ul className="menu-content">
                  <li><a href="#" className="fa fa-bookmark-o"></a></li>
                  <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                </ul>
              </div>
              <div className="data">
                <div className="Econtent">
                  <span className="author">Welcome Ceylon Tours</span>
                  <h1 className="title"><a href="#">Asala Perahera - 2023</a></h1>
                  <p className="text1">The Kandy Esala Perahera (the Sri Dalada Perahara procession of Kandy) also known as The... </p>
                  <a href="#asala" className="Ebutton">Read more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="example-2 card">
            <div className="wrapper" style={{ background: "url(/images/vesak.jpg) center/cover no-repeat" }}>
              <div className="head">
                <div className="date">
                  <span className="day">05</span>
                  <span className="month">Dec</span>
                  <span className="year">2022</span>
                </div>
                <ul className="menu-content">
                  <li><a href="#" className="fa fa-bookmark-o"></a></li>
                  <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                </ul>
              </div>
              <div className="data">
                <div className="Econtent">
                  <span className="author">Welcome Ceylon Tours</span>
                  <h1 className="title"><a href="#">Vesak Festival</a></h1>
                  <p className="text1">Vesak is a religious and cultural festival in Sri Lanka. It is celebrated on the day of the full moon in the month of May...</p>
                  <a href="#vesak" className="Ebutton">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event home page section ends */}

      {/* Traditional Products section start */}
      <section className="products py-20 bg-gray-50" id="products">
        <h1 className="text-center text-5xl font-bold text-[#00204a] mb-16">Traditional Products</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/images/mask.jpg" alt="Traditional Mask" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Traditional Mask</h3>
                <p className="text-gray-600 text-lg leading-relaxed">At a time when the people worshipped trees and animals, masks were an indispensable part of Sri Lankan rituals and ceremonies.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/images/spices.jpg" alt="Traditional Spices" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Traditional Spices</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Herbs and spices have been a major influence on Eastern cuisine since times immemorial. Spices heighten the flavour and aroma of a dish.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/images/food.jpg" alt="Traditional Foods" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Traditional Foods</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Rice and curry is the Sri Lankan staple, though various kinds of bread, both roti style flatbreads and even loaves of bread.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/images/clothes.jpg" alt="Industrial Goods" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Goods</h3>
                <p className="text-gray-600 text-lg leading-relaxed">The land is home to a lot of resourceful industries that manufacture a wide range of product varieties.</p>
              </div>
            </div>
            {/* Item 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/images/art.jpg" alt="Arts And Crafts" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Arts And Crafts</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Colour, creativity and commerce abound when it comes to arts and crafts in Sri Lanka. And Pottery is of Sri Lanka's oldest crafts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Traditional Products section end */}

      {/* reviews section starts */}
      <section className="reviews" id="reviews">
        <h1 className="heading">Tourist's reviews</h1>
        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <p className="text">My family were based in Negombo for two weeks and Rukshan took us on a number of excursions including Sigiriya, Dambulla, Nuwara Eliya, Ella, Kandy and Galle. Rukshan is very friendly and an excellent tour guide who is flexible, experienced and knowledgeable about the key sites across Sri Lanka - I highly recommend him.</p>
              <div className="user">
                <img src="/images/pic-1.png" alt="" />
                <div className="info">
                  <h3>Samara Smith</h3>
                  <span>10 months ago</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <p className="text">I have been to Sri Lanka for 2 times now and I really love the country and the people there. We help some poor people there who are now close family! We travelled around the country with a great guide named Wicky.</p>
              <div className="user">
                <img src="/images/pic-2.png" alt="" />
                <div className="info">
                  <h3>Simona Alixa</h3>
                  <span>New Zealand</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <p className="text">If you want to explore the must-see sights of Sri Lanka, but also enjoy your well-earned vacation from work, here are our suggestions on how to make the most of your days in the land of serendipity.</p>
              <div className="user">
                <img src="/images/pic-3.png" alt="" />
                <div className="info">
                  <h3>Petra Marick</h3>
                  <span>London</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <p className="text">Sri Lanka is known for its rich culture and history, with fascinating temples and tea plantations to explore. The country is home to amazing wildlife and exotic flora and fauna, and visitors can experience all of this in the beautiful national parks.</p>
              <div className="user">
                <img src="/images/pic-4.png" alt="" />
                <div className="info">
                  <h3>Chloe Loues</h3>
                  <span>Korea</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <p className="text">Sri Lanka (historically known as Ceylon) has been called “the gem of the Indian ocean” because of its shape and location. Sri Jayewardenepura Kotte is its legislative capital, and Colombo is its largest city and centre of commerce.</p>
              <div className="user">
                <img src="/images/pic-5.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>USA</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <p className="text">Sri Lanka is a popular backpacker destination and known to be really cheap. We gathered a few tips for all the travelers who are really on a budget. </p>
              <div className="user">
                <img src="/images/pic-6.png" alt="" />
                <div className="info">
                  <h3>Jing lee</h3>
                  <span>China</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reviews section ends */}

      {/* newsletter section */}
      <section className="newsletter">
        <div className="content">
          <h1 className="heading">subscribe now</h1>
          <p>Subscribe for our travel newsletter to receive exclusive deals, destination inspiration, and helpful tips for your next vacation. Stay informed and get the most out of your travels by subscribing to our email list today.</p>
          <form action="">
            <input type="email" name="" placeholder="enter your email" id="" className="email" />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </section>



      <Footer />

      {/* scroller to top */}
      <a href="#top" className="to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
