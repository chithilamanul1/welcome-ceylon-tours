import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&w=1920&q=80"
            alt="Sri Lanka Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Discover the Magic of <span className="text-yellow-400">Sri Lanka</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Experience breathtaking landscapes, ancient temples, and pristine beaches with Welcome Ceylon Tours.
          </p>
          <Link
            href="#tours"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors uppercase tracking-wider"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">About Welcome Ceylon Tours</h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Based in the beautiful coastal city of Negombo, Welcome Ceylon Tours is your premier travel partner in Sri Lanka. We specialize in creating unforgettable journeys tailored to your preferences.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Whether you're seeking an adventurous wildlife safari, a relaxing beach holiday, or a cultural exploration of ancient ruins, our experienced guides ensure you experience the true essence of Sri Lanka.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-2xl font-bold text-white">10+</h4>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-2xl font-bold text-white">1000+</h4>
                  <p className="text-gray-500">Happy Travelers</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1539183204366-63a0589187ab?auto=format&fit=crop&w=800&q=80"
                alt="Sri Lanka Culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Tour Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose from our carefully crafted tour packages to experience the best of what Sri Lanka has to offer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80"
                  alt="Cultural Triangle"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Cultural Heritage Tour</h3>
                <p className="text-gray-400 mb-6">Explore the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya.</p>
                <Link href="/book?tour=cultural" className="text-yellow-400 font-bold hover:text-yellow-300 flex items-center gap-2 uppercase text-sm tracking-wider">
                  Book Now <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            {/* Tour 2 */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1546708973-c339543602f1?auto=format&fit=crop&w=800&q=80"
                  alt="Wildlife Safari"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Wildlife Safari Adventure</h3>
                <p className="text-gray-400 mb-6">Witness elephants, leopards, and exotic birds in Yala and Udawalawe.</p>
                <Link href="/book?tour=wildlife" className="text-yellow-400 font-bold hover:text-yellow-300 flex items-center gap-2 uppercase text-sm tracking-wider">
                  Book Now <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            {/* Tour 3 */}
            <div className="bg-neutral-900 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80"
                  alt="Beach Holiday"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Coastal Bliss & Relaxation</h3>
                <p className="text-gray-400 mb-6">Relax on the golden sands of Mirissa, Unawatuna, and Bentota beaches.</p>
                <Link href="/book?tour=beach" className="text-yellow-400 font-bold hover:text-yellow-300 flex items-center gap-2 uppercase text-sm tracking-wider">
                  Book Now <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            Contact us today to plan your perfect Sri Lankan holiday. Our team is ready to assist you with custom itineraries and bookings.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors uppercase tracking-wider"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
