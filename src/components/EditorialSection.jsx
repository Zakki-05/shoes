import React from 'react';
import { EDITORIAL_ARTICLES } from '../data/products';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EditorialSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-stone-800/80">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 flex items-center justify-center space-x-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Editorial Journal</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-title font-extrabold text-stone-100 mb-4">
          THE ART OF THE <span className="gold-gradient-text">PERFECT STEP</span>
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm font-light">
          Insights into sartorial elegance, shoe care rituals, and European bespoke craftsmanship.
        </p>
      </div>

      {/* Editorial Magazine Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDITORIAL_ARTICLES.map((article) => (
          <div
            key={article.id}
            className="group relative rounded-3xl overflow-hidden bg-[#121216] border border-stone-800 hover:border-amber-500/40 transition-all duration-500 shadow-2xl flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
              
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 glass-panel text-amber-400 text-[10px] font-mono uppercase tracking-widest rounded-full border border-amber-500/30">
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-8 -mt-12 relative z-10">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                {article.subtitle}
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-stone-100 mb-4 group-hover:text-amber-400 transition-colors">
                {article.title}
              </h3>
              <blockquote className="text-stone-300 italic text-sm border-l-2 border-amber-400 pl-4 py-1 mb-6 font-serif-title">
                "{article.quote}"
              </blockquote>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400 group-hover:text-amber-300 font-bold"
              >
                <span>Read Full Journal Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
