import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export function HeroSection() {
  const { setQuickViewProduct } = useShop();
  const heroProduct = products.find((p) => p.heroModel) || products[0];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Radial Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Luxury Headlines & CTAs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The New Standard of Men's Footwear</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-title font-extrabold text-stone-100 leading-[1.08] tracking-tight">
            CRAFTED TO <br />
            <span className="gold-gradient-text">MAKE AN</span> <br />
            ENTRANCE.
          </h1>

          {/* Subtext */}
          <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-md">
            Premium footwear engineered for timeless style, uncompromised comfort, and effortless confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/shop"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 flex items-center justify-center space-x-3 group text-center"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 glass-panel hover:bg-stone-900 text-stone-200 hover:text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-stone-700/60 hover:border-amber-500/50 text-center"
            >
              Explore Craftsmanship
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 flex items-center space-x-6 text-stone-400 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Goodyear Welted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9 / 5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: High-Resolution Product Showcase Hero Card */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden bg-[#151515] border border-amber-500/30 shadow-2xl aspect-[4/3] sm:aspect-[16/11] group">
            {/* Main Product Image */}
            <img
              src={heroProduct.images[0]}
              alt={heroProduct.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 glass-panel text-amber-400 font-mono text-[10px] uppercase tracking-widest rounded-full border border-amber-500/30">
                Signature Flagship
              </span>
            </div>

            {/* Bottom Floating Info Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 glass-panel-gold rounded-2xl border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                  {heroProduct.category}
                </span>
                <h3 className="text-sm sm:text-base font-serif-title font-bold text-stone-100">
                  {heroProduct.name}
                </h3>
                <p className="text-xs font-mono font-bold text-stone-300 mt-0.5">
                  ₹{heroProduct.price.toLocaleString()}
                </p>
              </div>

              <Link
                to={`/product/${heroProduct.id}`}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-mono font-bold uppercase rounded-xl transition-all shadow-md flex-shrink-0"
              >
                Inspect
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
