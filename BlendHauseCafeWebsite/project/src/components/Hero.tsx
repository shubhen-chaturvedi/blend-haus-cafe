import { MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Blend Haus Coffee Bar & Dine
        </h1>
        <p className="text-xl md:text-3xl text-[#FFB703] mb-8 font-light">
          Where Coffee Meets Comfort
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          At The Blend Haus Coffee Bar & Dine, every cup is a carefully crafted blend of quality beans, flavor, and comfort. Known locally as a favorite blend café in Gomti Nagar, we bring together the perfect blend of coffee, food, and ambiance for every time of day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-[#FFB703] text-[#3E2723] font-semibold rounded-full hover:bg-[#D2B48C] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('visit')}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Get Directions
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FFB703]" />
            <span>Gomti Nagar, Lucknow</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#FFB703]" />
            <a href="tel:+917084271813" className="hover:text-[#FFB703] transition-colors">
              +91 70842 71813
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
