import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { BRAND_NAME, CRAFTSMANSHIP_PILLARS } from '../data/products';

export function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 flex items-center justify-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Atelier & Philosophy</span>
        </span>
        <h1 className="text-4xl md:text-6xl font-serif-title font-extrabold text-stone-100 mb-6">
          THE STORY OF <span className="gold-gradient-text">{BRAND_NAME}</span>
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
          Founded on the principle that true luxury is defined by timeless craftsmanship, uncompromised materials, and authentic human dedication.
        </p>
      </div>

      {/* Main Story Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-serif-title font-bold text-stone-100">
            HERITAGE FORGED IN TUSCANY & ALSACE
          </h2>
          <p className="text-stone-300 text-sm font-light leading-relaxed">
            In an era dominated by fast fashion and disposable synthetic footwear, Aurelius & Co. stands as a bastion of permanent elegance. Our master shoemakers have spent decades honing the precise hand-lasting and welt-stitching techniques that define European luxury.
          </p>
          <p className="text-stone-400 text-xs font-light leading-relaxed">
            Every pair begins its life in renowned tanneries across Tuscany and France, where top-grade full-grain hides are oak-bark tanned for over two months. The result is leather that does not wear out—it develops a rich, personal patina with every step you take.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80"
              alt="Atelier Craftsman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 200 Step Goodyear Welt Process */}
      <div className="bg-[#121216] rounded-3xl p-8 md:p-14 border border-stone-800 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Technological & Artisanal Benchmark
          </span>
          <h2 className="text-3xl font-serif-title font-bold text-stone-100">
            THE 200-STEP GOODYEAR WELT PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CRAFTSMANSHIP_PILLARS.map((p, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-2xl font-mono font-bold text-amber-400">{p.step}</span>
              <h3 className="text-lg font-serif-title font-bold text-stone-100">{p.title}</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Commitment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 glass-panel rounded-3xl border border-stone-800 space-y-3">
          <ShieldCheck className="w-8 h-8 text-amber-400" />
          <h3 className="text-lg font-serif-title font-bold text-stone-100">Ethical Tannery Sourcing</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            100% byproduct full-grain leathers sourced only from certified European tanneries adhering to strict REACH environmental standards.
          </p>
        </div>

        <div className="p-8 glass-panel rounded-3xl border border-stone-800 space-y-3">
          <Award className="w-8 h-8 text-amber-400" />
          <h3 className="text-lg font-serif-title font-bold text-stone-100">Lifetime Recraftable</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Because our shoes are welted, the soles can be replaced endlessly, eliminating footwear landfill waste and giving your shoes a multi-decade life.
          </p>
        </div>

        <div className="p-8 glass-panel rounded-3xl border border-stone-800 space-y-3">
          <HeartHandshake className="w-8 h-8 text-amber-400" />
          <h3 className="text-lg font-serif-title font-bold text-stone-100">Fair Artisan Wages</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Our shoemakers work in heritage workshops with living wages, healthcare, and preserved artisanal apprenticeships for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}
