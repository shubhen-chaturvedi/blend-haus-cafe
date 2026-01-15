import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit" className="py-20 px-4 bg-[#FAF3E0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit Our Blend Café
          </h2>
          <p className="text-lg text-[#3E2723]/80">
            Find us in the heart of Gomti Nagar, Lucknow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <MapPin className="w-12 h-12 text-[#FFB703] mb-4" />
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Address</h3>
              <p className="text-[#3E2723] leading-relaxed">
                B-2, B-3, Kissan Bazar, Opposite Hotel Dayal Gateway,<br />
                Vibhuti Khand, Gomti Nagar,<br />
                Lucknow, Uttar Pradesh 226010, India
              </p>
              <a
                href="https://www.google.com/maps/dir//B-2,+B-3,+Kissan+Bazar,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-[#FFB703] text-[#3E2723] font-semibold rounded-full hover:bg-[#6F4E37] hover:text-white transition-all duration-300"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Phone className="w-12 h-12 text-[#FFB703] mb-4" />
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Contact</h3>
              <a
                href="tel:+917084271813"
                className="text-[#3E2723] text-xl hover:text-[#FFB703] transition-colors"
              >
                +91 70842 71813
              </a>
              <a
                href="tel:+917084271813"
                className="inline-block mt-4 px-6 py-3 bg-[#6F4E37] text-white font-semibold rounded-full hover:bg-[#FFB703] hover:text-[#3E2723] transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Clock className="w-12 h-12 text-[#FFB703] mb-4" />
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Hours</h3>
              <div className="space-y-2 text-[#3E2723]">
                <p className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-semibold">10:00 AM - 11:00 PM</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#6F4E37] to-[#3E2723] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white">
              <Instagram className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
              <p className="mb-4 text-white/90">Stay updated with our latest blends and offers</p>
              <a
                href="https://www.instagram.com/theblendhaus.coffeebar_dine/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-[#3E2723] font-semibold rounded-full hover:bg-[#FFB703] transition-all duration-300"
              >
                @theblendhaus.coffeebar_dine
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2736699999995!2d80.9966!3d26.8589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzMyLjAiTiA4MMKwNTknNDcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Blend Haus Coffee Bar & Dine location in Gomti Nagar, Lucknow"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
