import { Sun, Moon } from 'lucide-react';

export default function DayNightExperience() {
  return (
    <section id="experience" className="py-20 px-4 bg-[#3E2723]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFB703] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Perfect Blend of Taste & Comfort
          </h2>
          <p className="text-[#D2B48C] text-lg">
            Experience our café's unique atmosphere from morning to night
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Blend café in Gomti Nagar Lucknow daytime"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFB703]/90 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-[#3E2723]">
              <Sun className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Daytime Vibes
              </h3>
              <p className="text-lg leading-relaxed">
                Bright and lively atmosphere perfect for work sessions, creative meetings, and casual catch-ups. Natural light floods through our windows, creating an energizing space for productivity and conversation over our signature coffee blends.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Signature coffee blend at The Blend Haus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/95 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Moon className="w-12 h-12 mb-4 text-[#FFB703]" />
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Evening Ambiance
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                Warm, cozy lighting transforms our space into an intimate haven for evening hangouts. The perfect blend of comfort and style makes it ideal for romantic dates, friendly gatherings, and unwinding after a long day with our specialty beverages.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#D2B48C] text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you visit during the bright afternoon or cozy evening, The Blend Haus offers an experience that adapts to your mood, making every visit memorable with our perfect blend of ambiance and service.
          </p>
        </div>
      </div>
    </section>
  );
}
