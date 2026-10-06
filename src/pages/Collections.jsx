import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CURATED_COLLECTIONS = [
  {
    id: "heritage-oxfords",
    title: "The Heritage Oxford Capsule",
    subtitle: "Commanding Black Tie & Formal Elegance",
    desc: "Goodyear welted wholecuts and cap toe oxfords fashioned from pristine French box calfskin.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
    categoryParam: "oxfords",
    count: "5 Masterpieces"
  },
  {
    id: "executive-loafers",
    title: "The Executive Loafer Series",
    subtitle: "Tuscan Penny & Venetian Tassels",
    desc: "Unstructured glove leather loafers built for Riviera leisure and high-powered boardrooms.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=80",
    categoryParam: "loafers",
    count: "5 Masterpieces"
  },
  {
    id: "kensington-boots",
    title: "The Kensington Boot Line",
    subtitle: "Goodyear Welted Chelsea & Dress Boots",
    desc: "Weatherproof hydro-tanned box calf leather boots engineered for all-terrain sophistication.",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80",
    categoryParam: "boots",
    count: "6 Masterpieces"
  },
  {
    id: "metropolitan-sneakers",
    title: "The Metropolitan Sneaker Suite",
    subtitle: "Minimalist Italian Nappa Leather Low-Tops",
    desc: "Hand-stitched Margom rubber cupsole sneakers blending athletic freedom with bespoke luxury.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    categoryParam: "sneakers",
    count: "4 Masterpieces"
  }
];

export function Collections() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 flex items-center justify-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Style Portfolios</span>
        </span>
        <h1 className="text-4xl md:text-6xl font-serif-title font-extrabold text-stone-100 mb-6">
          EDITORIAL <span className="gold-gradient-text">COLLECTIONS</span>
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
          Explore our thematic footwear capsules tailored for formal galas, coastal summers, executive travel, and urban lifestyle.
        </p>
      </div>

      {/* Collection Cards */}
      <div className="space-y-16">
        {CURATED_COLLECTIONS.map((col, idx) => (
          <div
            key={col.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121216] rounded-3xl p-6 md:p-10 border border-stone-800 hover:border-amber-500/40 transition-all duration-500 shadow-2xl ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-7 h-96 rounded-2xl overflow-hidden relative group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 glass-panel text-amber-400 text-[10px] font-mono uppercase tracking-widest rounded-full border border-amber-500/30">
                  {col.count}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
                {col.subtitle}
              </span>
              <h2 className="text-3xl font-serif-title font-bold text-stone-100">
                {col.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                {col.desc}
              </p>

              <div className="pt-4">
                <Link
                  to={`/shop?category=${col.categoryParam}`}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl shadow-amber-500/20 group"
                >
                  <span>Explore Capsule</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
