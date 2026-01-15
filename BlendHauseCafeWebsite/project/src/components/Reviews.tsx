import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'The perfect blend of ambiance and taste! Their signature coffee blends are absolutely divine. This blend café has become my go-to spot in Gomti Nagar for both work and leisure.',
    date: '2 weeks ago',
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'Amazing café with a warm atmosphere! The hazelnut cold coffee is a must-try. The Blend Haus truly offers the best coffee blend experience in Lucknow.',
    date: '1 month ago',
  },
  {
    name: 'Ananya Singh',
    rating: 5,
    text: 'Love the cozy vibes here! Great place for evening hangouts with friends. The food is delicious and the coffee is always perfectly brewed. Best blend cafe in the area!',
    date: '3 weeks ago',
  },
  {
    name: 'Arjun Patel',
    rating: 5,
    text: 'Excellent service and quality! The cranberry espresso is unique and delicious. The ambiance transitions beautifully from day to night. Highly recommend this blend coffee bar!',
    date: '2 weeks ago',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-[#FAF3E0] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-5xl font-bold text-[#6F4E37]">4.8</span>
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFB703] text-[#FFB703]" />
                ))}
              </div>
              <p className="text-sm text-[#3E2723]/60">Based on 200+ reviews</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Guests Say
          </h2>
          <p className="text-lg text-[#3E2723]/80">
            Discover why The Blend Haus is loved by coffee enthusiasts across Lucknow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFB703]/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB703] text-[#FFB703]" />
                ))}
              </div>

              <p className="text-[#3E2723] text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#6F4E37]">{review.name}</p>
                  <p className="text-sm text-[#3E2723]/60">{review.date}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6F4E37] to-[#3E2723] flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#3E2723] text-lg">
            Join hundreds of satisfied customers who have discovered the perfect blend at The Blend Haus
          </p>
        </div>
      </div>
    </section>
  );
}
