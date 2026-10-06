import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products, PRODUCT_CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedCollection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all'
    ? products.slice(0, 8)
    : products.filter((p) => p.categoryGroup === activeTab).slice(0, 8);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-stone-800/80">
      
      {/* Title Header & Tabs */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Masterpieces</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-title font-extrabold text-stone-100 mb-6">
          THE FEATURED <span className="gold-gradient-text">COLLECTION</span>
        </h2>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 glass-panel rounded-full border border-stone-800">
          {PRODUCT_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-white/5'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center space-x-3 px-8 py-4 glass-panel-gold hover:bg-amber-500 text-amber-300 hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-amber-500/40 shadow-xl shadow-amber-500/10 group"
        >
          <span>View All 25 Footwear Models</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
