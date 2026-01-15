import { Coffee, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2723] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[#FFB703]" />
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Blend Haus
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Your favorite blend café in Gomti Nagar, Lucknow. Where every cup is a perfect blend of quality, comfort, and craftsmanship. Experience the best coffee blends and food in a warm, welcoming atmosphere.
            </p>
            <a
              href="https://www.instagram.com/theblendhaus.coffeebar_dine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB703] text-[#3E2723] font-semibold rounded-full hover:bg-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB703]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('visit')}
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB703]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm">
                  B-2, B-3, Kissan Bazar, Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFB703]" />
                <a
                  href="tel:+917084271813"
                  className="text-white/80 hover:text-[#FFB703] transition-colors"
                >
                  +91 70842 71813
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-white/60 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} The Blend Haus Coffee Bar & Dine. All rights reserved.</p>
            <p className="mt-2">Best Blend Café in Gomti Nagar, Lucknow | Signature Coffee Blends | Premium Dining Experience</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
