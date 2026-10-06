import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroUI({ onInspectHero, heroProduct }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12 lg:p-20 max-w-7xl mx-auto left-0 right-0">
      
      {/* Top Left Craft Tag */}
      <div className="pt-20 md:pt-24 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The New Standard of Men's Footwear</span>
        </motion.div>
      </div>

      {/* Main Left Content & Headlines */}
      <div className="my-auto max-w-xl pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif-title font-extrabold text-stone-100 leading-[1.08] tracking-tight mb-6"
        >
          CRAFTED TO <br />
          <span className="gold-gradient-text">MAKE AN</span> <br />
          ENTRANCE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-md"
        >
          Premium footwear engineered for timeless style, uncompromised comfort, and effortless confidence.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/shop"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 flex items-center space-x-3 group"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="px-8 py-4 glass-panel hover:bg-stone-900/80 text-stone-200 hover:text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-stone-700/60 hover:border-amber-500/50"
          >
            Explore The Brand
          </Link>
        </motion.div>
      </div>

      {/* Floating Hero Product Interactive Card Trigger (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="pointer-events-auto self-end glass-panel-gold p-4 md:p-5 rounded-2xl max-w-xs border border-amber-500/30 shadow-2xl backdrop-blur-xl flex items-center justify-between space-x-4 mb-4"
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-0.5">Hero Featured</span>
          <h4 className="text-sm font-serif-title font-bold text-stone-100">{heroProduct?.name || "The Signature Cap Toe Oxford"}</h4>
          <p className="text-xs font-mono font-semibold text-stone-300 mt-1">₹{heroProduct?.price?.toLocaleString() || "6,499"}</p>
        </div>

        <button
          onClick={onInspectHero}
          className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition-transform hover:scale-110 flex-shrink-0 shadow-lg shadow-amber-500/30"
          title="Inspect in 3D"
        >
          <Eye className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
