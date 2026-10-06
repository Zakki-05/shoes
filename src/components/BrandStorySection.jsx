import React from 'react';
import { CRAFTSMANSHIP_PILLARS } from '../data/products';
import { ShieldCheck, Award, Flame, HeartHandshake } from 'lucide-react';

export function BrandStorySection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-stone-800/80">
      
      {/* Upper Headline Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Our Heritage & Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-serif-title font-extrabold text-stone-100 leading-tight mb-6">
            CRAFTED WITH <br />
            <span className="gold-gradient-text">PURPOSE & SOUL.</span>
          </h2>
          <p className="text-stone-300 text-base font-light leading-relaxed mb-6">
            At Aurelius & Co., we believe a truly exceptional shoe is an architecture of passion. We reject mass production in favor of small-batch artisanal craftsmanship in our Tuscan and French ateliers.
          </p>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Every pair requires over 200 meticulous manual steps, from cutting flawless 1% calfskin hides to hand-stitching the Goodyear welt that promises decades of resoleable durability.
          </p>
        </div>

        {/* Hero Craftsmanship Visual Card */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel-gold rounded-2xl border border-amber-500/30">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">100% Handcrafted Guarantee</span>
              </div>
              <p className="text-xs text-stone-300 font-light">
                Goodyear Welted 360° Construction • Hand-burnished Museum Calfskin • Natural Oak Bark Tanned Soles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Craftsmanship */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CRAFTSMANSHIP_PILLARS.map((pillar, idx) => (
          <div
            key={idx}
            className="p-8 bg-[#121216] rounded-3xl border border-stone-800 hover:border-amber-500/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-serif-title font-extrabold text-amber-500/40 group-hover:text-amber-400 transition-colors block mb-4">
                {pillar.step}
              </span>
              <h3 className="text-xl font-serif-title font-bold text-stone-100 mb-1">
                {pillar.title}
              </h3>
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-4">
                {pillar.subtitle}
              </span>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-center justify-between text-stone-500 text-[10px] font-mono">
              <span>AURELIUS ATELIER</span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
