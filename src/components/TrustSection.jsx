import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Award } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export function TrustSection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 border-y border-stone-800/80 bg-[#0E0E11]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#151515] border border-stone-800">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider">Free Shipping</h4>
            <p className="text-[11px] text-stone-400 font-light">On orders above {BRAND_CONFIG.currency.symbol}{BRAND_CONFIG.freeShippingThreshold.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#151515] border border-stone-800">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider">Easy 14-Day Returns</h4>
            <p className="text-[11px] text-stone-400 font-light">Complimentary return pickup & size fit exchange</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#151515] border border-stone-800">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider">Secure Payments</h4>
            <p className="text-[11px] text-stone-400 font-light">256-Bit SSL Encrypted checkout protection</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#151515] border border-stone-800">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider">Quality Guarantee</h4>
            <p className="text-[11px] text-stone-400 font-light">Handcrafted Goodyear welted durability</p>
          </div>
        </div>

      </div>
    </section>
  );
}
