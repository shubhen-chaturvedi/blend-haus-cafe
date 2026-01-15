import { Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#FAF3E0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Coffee className="w-12 h-12 text-[#6F4E37] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            About The Blend Haus Coffee Bar & Dine
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#3E2723] leading-relaxed">
            <p className="text-lg">
              The Blend Haus Coffee Bar & Dine is a cozy and vibrant café located in the heart of Gomti Nagar, Lucknow. It's more than just a coffee place — it's a gathering spot where warm conversations, creative meetings, and memorable moments happen over expertly brewed coffee and thoughtfully prepared dishes.
            </p>
            <p className="text-lg">
              Stepping inside feels like entering a sanctuary of comfort, with soft lighting, tasteful interiors, and a welcoming ambiance that instantly puts guests at ease. Whether you're stopping by for a relaxing solo coffee, a casual lunch with friends, or an evening hangout, The Blend Haus offers the perfect balance of comfort and style.
            </p>
            <p className="text-lg">
              The menu reflects creativity and quality, featuring rich pastas, hearty rice bowls, delicious snacks, and handcrafted beverages. Signature drinks such as cranberry-infused espresso creations and smooth hazelnut cold coffees pair perfectly with comfort dishes designed to satisfy every craving.
            </p>
            <p className="text-lg">
              Known for its friendly service and relaxed atmosphere, The Blend Haus Coffee Bar & Dine is a space designed to be enjoyed at any time of day — bright and lively during the afternoon, and warm, cozy, and inviting as the evening sets in.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Blend Haus coffee bar interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FFB703] text-[#3E2723] p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Signature Coffee Blends
              </p>
              <p className="text-sm">
                Every cup is crafted with premium beans and passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
