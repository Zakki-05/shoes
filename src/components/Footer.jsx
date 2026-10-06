import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Truck, Globe, Award, Heart } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../data/products';

export function Footer() {
  const [currency, setCurrency] = useState('INR (₹)');

  return (
    <footer className="bg-[#0A0A0C] text-stone-400 border-t border-stone-800/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top 3 Assurance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-stone-800/80">
          <div className="flex items-center space-x-4 p-6 glass-panel rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif-title font-bold text-stone-100 uppercase tracking-wider">Express Worldwide Delivery</h4>
              <p className="text-xs text-stone-400 font-light">Free tracked courier on orders over ₹10,000</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 glass-panel rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif-title font-bold text-stone-100 uppercase tracking-wider">Lifetime Resoling Warranty</h4>
              <p className="text-xs text-stone-400 font-light">Handcrafted Goodyear welt recrafting program</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 glass-panel rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif-title font-bold text-stone-100 uppercase tracking-wider">30-Day Bespoke Exchange</h4>
              <p className="text-xs text-stone-400 font-light">Complimentary return pickup & size fit exchange</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-serif-title text-stone-950 font-bold text-lg">
                A
              </div>
              <span className="font-serif-title font-bold text-xl tracking-wider text-stone-100">
                {BRAND_NAME}
              </span>
            </Link>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {BRAND_TAGLINE}. Engineered with full-grain Italian & French leathers, Goodyear welt construction, and uncompromised luxury ergonomics.
            </p>

            {/* Currency Selector */}
            <div className="pt-2">
              <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1.5">Currency / Region:</label>
              <div className="inline-flex items-center space-x-2 glass-panel px-3 py-1.5 rounded-xl border border-stone-800 text-xs font-mono text-stone-200">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-stone-200 focus:outline-none cursor-pointer"
                >
                  <option value="INR (₹)" className="bg-stone-900 text-stone-100">INR (₹) • India</option>
                  <option value="USD ($)" className="bg-stone-900 text-stone-100">USD ($) • International</option>
                  <option value="EUR (€)" className="bg-stone-900 text-stone-100">EUR (€) • Europe</option>
                  <option value="GBP (£)" className="bg-stone-900 text-stone-100">GBP (£) • UK</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footwear Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">Footwear Categories</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">Cap Toe Oxfords</Link></li>
              <li><Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">Seamless Wholecuts</Link></li>
              <li><Link to="/shop?category=loafers" className="hover:text-amber-400 transition-colors">Penny & Tassel Loafers</Link></li>
              <li><Link to="/shop?category=monk-straps" className="hover:text-amber-400 transition-colors">Double Monk Straps</Link></li>
              <li><Link to="/shop?category=boots" className="hover:text-amber-400 transition-colors">Chelsea & Dress Boots</Link></li>
              <li><Link to="/shop?category=sneakers" className="hover:text-amber-400 transition-colors">Nappa Leather Sneakers</Link></li>
              <li><Link to="/shop?category=casual-slippers" className="hover:text-amber-400 transition-colors">Velvet Evening Slippers</Link></li>
            </ul>
          </div>

          {/* Artisan Heritage */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">The Atelier</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Goodyear Welted Process</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">French & Italian Leather Sourcing</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Hand-Patina Finishing Studio</Link></li>
              <li><Link to="/collections" className="hover:text-amber-400 transition-colors">Lookbook & Collections</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Sustainability & Ethics</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">Client Services</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><span className="hover:text-amber-400 cursor-pointer">Bespoke Size Fitting Guide</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer">Goodyear Resoling Service</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer">Shipping & Global Concierge</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer">30-Day Returns & Exchanges</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer">Shoe Care & Cream Guide</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-stone-500">
          <p>© {new Date().getFullYear()} AURELIUS & CO. Luxury Footwear. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold flex items-center space-x-1">
              <span>Production-Ready API Scalable Architecture</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
