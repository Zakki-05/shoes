import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CATEGORY_CARDS = [
  {
    title: "LOAFERS & SLIP-ONS",
    sub: "Penny, Tassel & Driving Loafers",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=loafers",
    count: "5 Models"
  },
  {
    title: "OXFORDS & DERBYS",
    sub: "Cap Toe, Wholecut & Brogues",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=oxfords",
    count: "5 Models"
  },
  {
    title: "DOUBLE MONK STRAPS",
    sub: "Executive Brass Buckle Classics",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=monk-straps",
    count: "2 Models"
  },
  {
    title: "CHELSEA & DRESS BOOTS",
    sub: "Kensington, Chukka & Cap Toe Boots",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=boots",
    count: "6 Models"
  },
  {
    title: "METROPOLITAN SNEAKERS",
    sub: "Low-Top Nappa Leather Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=sneakers",
    count: "4 Models"
  },
  {
    title: "VELVET & CASUAL SLIPPERS",
    sub: "Florentine Bullion Embroidery & Riviera",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=casual-slippers",
    count: "3 Models"
  }
];

export function CategorySection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Section Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            The Range of Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-title font-extrabold text-stone-100">
            DISCOVER THE <span className="gold-gradient-text">COLLECTION</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
          From formal Goodyear-welted oxfords to unlined Tuscan loafers, explore footwear crafted to elevate every wardrobe.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORY_CARDS.map((cat, idx) => (
          <Link
            key={idx}
            to={cat.link}
            className="group relative h-96 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-500/50 transition-all duration-700 shadow-xl"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            {/* Top Pill */}
            <div className="absolute top-6 left-6">
              <span className="px-3.5 py-1.5 glass-panel text-amber-400 font-mono text-[10px] uppercase tracking-widest rounded-full border border-amber-500/30">
                {cat.count}
              </span>
            </div>

            {/* Bottom Details */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-xs text-stone-400 font-mono mb-1">{cat.sub}</p>
                <h3 className="text-xl font-serif-title font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full glass-panel-gold text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center transition-all duration-300 shadow-lg">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
