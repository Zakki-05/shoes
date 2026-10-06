import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Truck, Globe } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { HelpModal } from './HelpModal';
import { SizeGuideModal } from './SizeGuideModal';

export function Footer() {
  const [currency, setCurrency] = useState('INR (₹)');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [helpTab, setHelpTab] = useState('faq');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const openHelpTab = (tabName) => {
    setHelpTab(tabName);
    setIsHelpOpen(true);
  };

  return (
    <>
      <footer className="bg-[#0B0B0B] text-stone-400 border-t border-stone-800/80 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-stone-800/80">
            
            {/* Brand Identity Col */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-serif-title text-stone-950 font-bold text-lg">
                  A
                </div>
                <span className="font-serif-title font-bold text-xl tracking-wider text-stone-100">
                  {BRAND_CONFIG.brandName}
                </span>
              </Link>
              <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
                {BRAND_CONFIG.brandDescription}
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

            {/* SHOP Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">SHOP</h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li><Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">New Arrivals</Link></li>
                <li><Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">Best Sellers</Link></li>
                <li><Link to="/shop?category=loafers" className="hover:text-amber-400 transition-colors">Loafers</Link></li>
                <li><Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">Oxfords</Link></li>
                <li><Link to="/shop?category=boots" className="hover:text-amber-400 transition-colors">Boots</Link></li>
                <li><Link to="/shop?category=sneakers" className="hover:text-amber-400 transition-colors">Sneakers</Link></li>
              </ul>
            </div>

            {/* HELP Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">HELP</h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li>
                  <button onClick={() => openHelpTab('contact')} className="hover:text-amber-400 transition-colors text-left">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => openHelpTab('shipping')} className="hover:text-amber-400 transition-colors text-left">
                    Shipping Information
                  </button>
                </li>
                <li>
                  <button onClick={() => openHelpTab('returns')} className="hover:text-amber-400 transition-colors text-left">
                    Returns & Exchanges
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-amber-400 transition-colors text-left">
                    Size Guide
                  </button>
                </li>
                <li>
                  <button onClick={() => openHelpTab('faq')} className="hover:text-amber-400 transition-colors text-left">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* COMPANY & SOCIAL Column */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2.5 text-xs font-light mb-6">
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">Our Story</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">Careers</Link></li>
              </ul>

              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200 font-bold mb-3">SOCIAL</h4>
              <div className="flex space-x-3 text-xs font-mono text-stone-400">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Instagram</a>
                <span>•</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
                <span>•</span>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          {/* Bottom Rights */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-stone-500">
            <p>© 2026 {BRAND_CONFIG.brandName}. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button onClick={() => openHelpTab('faq')} className="hover:text-amber-400 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => openHelpTab('faq')} className="hover:text-amber-400 transition-colors">Terms of Service</button>
              <span>•</span>
              <span className="text-amber-400 font-semibold">Production Ready Architecture</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive HELP & SIZE GUIDE Modals */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} initialTab={helpTab} />
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </>
  );
}
