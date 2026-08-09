const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add "use client" and framer-motion
if (!content.includes('"use client";')) {
    content = '"use client";\n\n' + content;
}
if (!content.includes('import { motion }')) {
    content = content.replace('import Footer from "../components/Footer";', 'import Footer from "../components/Footer";\nimport { motion } from "framer-motion";');
}

// 2. Fix Services Section with icons and "Book Now"
const servicesSectionOld = `<section className="category adventure" id="adventure">
        <h2 className="heading">Our Services</h2>
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
      </section>`;

const servicesSectionNew = `<section className="category adventure" id="adventure">
        <motion.h2 
          className="heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="box-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
          <motion.div 
            className="box"
            style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <i className="fas fa-map-marked-alt" style={{ fontSize: '6rem', color: '#219150', marginBottom: '2rem' }}></i>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Tour Packages</h3>
              <p style={{ fontSize: '1.6rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>Explore the beauty of Sri Lanka with our carefully crafted tour packages tailored to your preferences...</p>
            </div>
            <Link href="/tours" className="btn" style={{ marginTop: 'auto' }}>Book Now</Link>
          </motion.div>
          <motion.div 
            className="box"
            style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <i className="fas fa-plane-arrival" style={{ fontSize: '6rem', color: '#219150', marginBottom: '2rem' }}></i>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Airport Transfers</h3>
              <p style={{ fontSize: '1.6rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>Enjoy a hassle-free start to your vacation with our reliable and comfortable airport transfer services...</p>
            </div>
            <Link href="/book" className="btn" style={{ marginTop: 'auto' }}>Book Now</Link>
          </motion.div>
          <motion.div 
            className="box"
            style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <i className="fas fa-paw" style={{ fontSize: '6rem', color: '#219150', marginBottom: '2rem' }}></i>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Safari Tours</h3>
              <p style={{ fontSize: '1.6rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>Experience the thrill of the wild with our exciting safari tours in Sri Lanka's top national parks...</p>
            </div>
            <Link href="/tours" className="btn" style={{ marginTop: 'auto' }}>Book Now</Link>
          </motion.div>
        </div>
      </section>`;

content = content.replace(servicesSectionOld, servicesSectionNew);

// 3. Fix alt tags and anchor links
content = content.replace(/<img src="\\/images\\/map2\\.2\\.jpg" className="center" alt="" \\/ > /g, '<img src="/images / map2.2.jpg" className="center" alt="Map of Sri Lanka" />');
content = content.replace(/<a href="#map" className="btn">read more<\\/a > /g, '<Link href="/destinations" className="btn">read more</Link>');

content = content.replace(/<img src="\\/images\\/lotustower\\.jpg" alt="" \\/ > /g, '<img src="/images / lotustower.jpg" alt="Lotus Tower" />');
content = content.replace(/<a href="#lotus" className="btn">read more<\\/a > /g, '<Link href="/destinations" className="btn">read more</Link>');

content = content.replace(/<img src="\\/images\\/gallefort\\.webp" alt="" \\/ > /g, '<img src="/images / gallefort.webp" alt="Galle Fort" />');
content = content.replace(/<a href="#" className="btn">read more<\\/a > /g, '<Link href="/destinations" className="btn">read more</Link>');

content = content.replace(/<img src="\\/images\\/dalada\\.webp" alt="" \\/ > /g, '<img src="/images / dalada.webp" alt="Temple Of Tooth" />');
content = content.replace(/<img src="\\/images\\/unawatuna\\.webp" alt="" \\/ > /g, '<img src="/images / unawatuna.webp" alt="Unawatuna Beach" />');
content = content.replace(/<img src="\\/images\\/peradeniya\\.webp" alt="" \\/ > /g, '<img src="/images / peradeniya.webp" alt="Peradeniya Botanical Garden" />');
content = content.replace(/<img src="\\/images\\/gangarama\\.jpg" alt="" \\/ > /g, '<img src="/images / gangarama.jpg" alt="Gangaramaya Temple" />');

content = content.replace(/<a href="#sripada" className="Ebutton">Read more<\\/a > /g, '<Link href="/destinations" className="Ebutton">Read more</Link>');
content = content.replace(/<a href="#awurudu" className="Ebutton">Read more<\\/a > /g, '<Link href="/destinations" className="Ebutton">Read more</Link>');
content = content.replace(/<a href="#asala" className="Ebutton">Read more<\\/a > /g, '<Link href="/destinations" className="Ebutton">Read more</Link>');
content = content.replace(/<a href="#vesak" className="Ebutton">Read more<\\/a > /g, '<Link href="/destinations" className="Ebutton">Read more</Link>');

content = content.replace(/<img src="\\/images\\/pic-1\\.png" alt="" \\/ > /g, '<img src="/images / pic - 1.png" alt="Samara Smith" />');
content = content.replace(/<img src="\\/images\\/pic-2\\.png" alt="" \\/ > /g, '<img src="/images / pic - 2.png" alt="Simona Alixa" />');
content = content.replace(/<img src="\\/images\\/pic-3\\.png" alt="" \\/ > /g, '<img src="/images / pic - 3.png" alt="Petra Marick" />');
content = content.replace(/<img src="\\/images\\/pic-4\\.png" alt="" \\/ > /g, '<img src="/images / pic - 4.png" alt="Chloe Loues" />');
content = content.replace(/<img src="\\/images\\/pic-5\\.png" alt="" \\/ > /g, '<img src="/images / pic - 5.png" alt="john deo" />');
content = content.replace(/<img src="\\/images\\/pic-6\\.png" alt="" \\/ > /g, '<img src="/images / pic - 6.png" alt="Jing lee" />');

// 4. Update hero section "book now" to "Book Now"
content = content.replace(/<Link href="\\/book" className="hbtn">book now<\\/Link>/g, '<Link href=" / book" className="hbtn">Book Now</Link>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
