import { Coffee, Snowflake, Sandwich, Cake } from 'lucide-react';

const menuCategories = [
  {
    icon: Coffee,
    title: 'Coffee & Espresso',
    description: 'Expertly crafted coffee blends',
    items: ['Cranberry Espresso', 'Signature Blend Cappuccino', 'Classic Americano', 'Rich Mocha'],
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Snowflake,
    title: 'Cold Beverages',
    description: 'Refreshing iced delights',
    items: ['Hazelnut Cold Coffee', 'Iced Caramel Latte', 'Cold Brew Blend', 'Frappe Specials'],
    image: 'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Sandwich,
    title: 'Snacks & Starters',
    description: 'Perfect companions to your blend',
    items: ['Garlic Bread', 'Loaded Nachos', 'Crispy Fries', 'Club Sandwich'],
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Cake,
    title: 'Main Dishes & Desserts',
    description: 'Hearty meals & sweet endings',
    items: ['Creamy Pasta', 'Hearty Rice Bowls', 'Chocolate Brownie', 'Tiramisu'],
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-white to-[#FAF3E0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Our Blend Is Different
          </h2>
          <p className="text-lg text-[#3E2723]/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of signature coffee blends, refreshing beverages, and comfort food
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} at The Blend Haus`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <category.icon className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#6F4E37] font-semibold mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-[#3E2723]/80 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#FFB703] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#3E2723] text-lg">
            Each item is prepared with care, featuring the perfect blend of taste and comfort
          </p>
        </div>
      </div>
    </section>
  );
}
