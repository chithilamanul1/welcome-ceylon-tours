import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="top"></div>

      {/* header section starts */}
      <header className="header">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Welcome Ceylon Tours Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          Welcome Ceylon Tours
        </Link>

        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <Link href="/">home</Link>
          <Link href="#adventure">Adventure</Link>
          <Link href="#map">map</Link>
          <Link href="#blogs">blogs</Link>
          <Link href="#events">Events</Link>
          <Link href="#products">Products</Link>
          <Link href="/book">Book Now</Link>
          <Link href="/admin">Admin</Link>
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
              <div className="box second" style={{
                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0)), url('/images/sigiriya12.webp')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
                <div className="content">
                  <span style={{ color: "white" }}>#Visit</span>
                  <h3>Sri Lanka</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours, based in Negombo, offers you the best experiences in Sri Lanka. It is known for its beautiful beaches, ancient temples and palaces, and stunning natural landscapes.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{
                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0)), url('/images/9arch2.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
                <div className="content">
                  <span style={{ color: "white" }}>Welcome to</span>
                  <h3>Paradise</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours, based in Negombo, offers you the best experiences in Sri Lanka. It is known for its beautiful beaches, ancient temples and palaces, and stunning natural landscapes.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{
                backgroundImage: "linear-gradient(#ffffff00, #000000a0), url('/images/colombo.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
                <div className="content">
                  <span style={{ color: "white" }}>Explore the</span>
                  <h3>Island</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours, based in Negombo, offers you the best experiences in Sri Lanka. It is known for its beautiful beaches, ancient temples and palaces, and stunning natural landscapes.
                  </p>
                  <Link href="/book" className="hbtn">book now</Link>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={{
                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.615), rgba(255, 255, 0, 0)), url('/images/beach.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
                <div className="content">
                  <span style={{ color: "white" }}>Wonder of</span>
                  <h3>Asia</h3>
                  <p style={{ color: "white" }}>
                    Welcome Ceylon Tours, based in Negombo, offers you the best experiences in Sri Lanka. It is known for its beautiful beaches, ancient temples and palaces, and stunning natural landscapes.
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

      {/* category/adventure section starts */}
      <section className="category adventure" id="adventure">
        <h1 className="heading">adventure Activities</h1>
        <div className="box-container">
          <div className="box">
            <img src="/images/paragliding.jpg" alt="" />
            <h3>Paragliding</h3>
            <p>Recently introduced to Sri Lanka, this adventure sport is an ideal way to indulge yourself...</p>
            <a href="#para" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="/images/helicopter.jpg" alt="" />
            <h3>Helicopter Tours</h3>
            <p>Whether you in a packed schedule or hate wasting time on the road or simply like to indulge...</p>
            <a href="#heli" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="/images/balloon.jpg" alt="" />
            <h3>Hot Air Ballooning</h3>
            <p>Why Not Enjoy This Beautiful Paradise In The Bird’s Eye View Floating Over The Thick Dense Forests...</p>
            <a href="#balloon" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="/images/safa2.jpg" alt="" />
            <h3>Wild life Safari</h3>
            <p>With a wildlife abundance rich in diversity and quantity, Sri Lanka promises you...</p>
            <a href="#safa" className="btn">read more</a>
          </div>
        </div>
      </section>
      {/* category/adventure section ends */}

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

      {/* Tradional Products section start */}
      <section className="products" id="products">
        <h1 className="heading1">Tradional Products</h1>
        <div className="wrapper">
          <div className="item-bg"></div>
          <div className="news-slider">
            <div className="news-slider__wrp swiper-wrapper">
              <div className="news-slider__item swiper-slide">
                <a href="#mask" className="news__item">
                  <div className="news__title">Traditional Mask</div>
                  <p className="news__txt">At a time when the people worshipped trees and animals, masks were an indispensable part of Sri Lankan rituals and ceremonies.</p>
                  <div className="news__img">
                    <img src="/images/mask.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="news-slider__item swiper-slide">
                <a href="#spices" className="news__item">
                  <div className="news__title">Tradional Spices</div>
                  <p className="news__txt">Herbs and spices have been a major influence on Eastern cuisine since times immemorial. Spices heighten the flavour and aroma of a dish.</p>
                  <div className="news__img">
                    <img src="/images/spices.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="news-slider__item swiper-slide">
                <a href="#food" className="news__item">
                  <div className="news__title">Traditional Foods</div>
                  <p className="news__txt">Rice and curry is the Sri Lankan staple, though various kinds of bread, both roti style flatbreads and even loaves of...</p>
                  <div className="news__img">
                    <img src="/images/food.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="news-slider__item swiper-slide">
                <a href="#goods" className="news__item">
                  <div className="news__title">Industrial Goods</div>
                  <p className="news__txt">The land is home to a lot of resourceful industries that manufacture a wide range of product varieties...</p>
                  <div className="news__img">
                    <img src="/images/clothes.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="news-slider__item swiper-slide">
                <a href="#art" className="news__item">
                  <div className="news__title">Arts And Crafts</div>
                  <p className="news__txt">Colour, creativity and commerce abound when it comes to arts and crafts in Sri Lanka. And Pottery is of Sri Lanka's oldest crafts.</p>
                  <div className="news__img">
                    <img src="/images/art.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="news-slider__ctr">
              <div className="news-slider__arrows">
                <button className="news-slider__arrow news-slider-prev">
                  <span className="icon-font">
                    <svg className="picon icon-arrow-left"><use xlinkHref="#icon-arrow-left"></use></svg>
                  </span>
                </button>
                <button className="news-slider__arrow news-slider-next">
                  <span className="icon-font">
                    <svg className="picon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
                  </span>
                </button>
              </div>
              <div className="news-slider__pagination"></div>
            </div>
          </div>
        </div>

        <svg style={{ display: 'none' }}>
          <defs>
            <symbol id="icon-arrow-left" viewBox="0 0 32 32">
              <title>arrow-left</title>
              <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
            </symbol>
            <symbol id="icon-arrow-right" viewBox="0 0 32 32">
              <title>arrow-right</title>
              <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
            </symbol>
          </defs>
        </svg>
      </section>
      {/* Tradional Products section end */}

      {/* reviews section starts */}
      <section className="reviews" id="reviews">
        <h1 className="heading">Tourist's reviews</h1>
        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <p className="text">Fantastic! Really great country with hospitable people who are excited to show you around. The places we went to were really varied...Sri Lanka has everything...coasts, wildlife, mountains, culture, food....and so much more.</p>
              <div className="user">
                <img src="/images/pic-1.png" alt="" />
                <div className="info">
                  <h3>David Thomsan</h3>
                  <span>United Kingdom</span>
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

      <section className="clients">
        <div className="swiper clients-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide silde"><img src="/images/client-logo-1.png" alt="" /></div>
            <div className="swiper-slide silde"><img src="/images/client-logo-2.png" alt="" /></div>
            <div className="swiper-slide silde"><img src="/images/client-logo-3.png" alt="" /></div>
            <div className="swiper-slide silde"><img src="/images/client-logo-4.png" alt="" /></div>
          </div>
        </div>
      </section>

      {/* footer section starts */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <Link href="/">home</Link>
            <Link href="#adventure">adventure</Link>
            <Link href="#map">map</Link>
            <Link href="#blogs">blog</Link>
            <Link href="#events">events</Link>
            <Link href="#products">products</Link>
            <Link href="/book">book now</Link>
          </div>
          <div className="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my order</a>
            <a href="#">my wishlist</a>
            <a href="#">ask questions</a>
            <a href="#">terms of use</a>
            <a href="#">privacy policy</a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +94 123 456 789 </a>
            <a href="#"> <i className="fas fa-envelope"></i> info@welcomeceylontours.com </a>
            <a href="#"> <i className="fas fa-map"></i> Negombo, Sri Lanka</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#" target="_blank"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#" target="_blank"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#" target="_blank"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#" target="_blank"> <i className="fab fa-linkedin"></i> linkedin </a>
            <a href="#" target="_blank"><i className="fab fa-pinterest"></i> pinterest </a>
          </div>
        </div>
        <div className="credit">Made with 🤍 in<span> Sri Lanka</span> <br /> Copyright ©️ {new Date().getFullYear()} - Welcome Ceylon Tours!</div>
      </section>
      {/* footer section ends */}

      {/* scroller to top */}
      <a href="#top" className="to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
