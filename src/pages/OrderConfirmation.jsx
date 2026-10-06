import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Package, Truck, Calendar, Printer, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function OrderConfirmation() {
  const { orderId } = useParams();
  const displayId = orderId || `AUR-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto min-h-screen">
      <div className="glass-panel-gold rounded-3xl p-8 md:p-14 border border-amber-500/30 text-center shadow-2xl animate-fade-in relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block mb-1 inline-flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Bespoke Order Confirmed</span>
          </span>

          <h1 className="text-3xl md:text-5xl font-serif-title font-extrabold text-stone-100 mb-2">
            THANK YOU FOR YOUR ORDER
          </h1>

          <p className="text-sm font-mono text-stone-300 mb-8">
            Order Reference: <strong className="text-amber-400 font-bold">{displayId}</strong>
          </p>

          <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed max-w-lg mx-auto mb-10">
            Your footwear is now being inspected and hand-finished at our atelier. Confirmation details and real-time courier tracking information have been sent to your email.
          </p>

          {/* Timeline Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <div className="p-4 bg-[#121216] rounded-2xl border border-stone-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Status</span>
              <p className="text-xs font-serif-title font-bold text-stone-100 flex items-center space-x-1">
                <Package className="w-3.5 h-3.5 text-amber-400" />
                <span>Atelier Inspection</span>
              </p>
            </div>

            <div className="p-4 bg-[#121216] rounded-2xl border border-stone-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Estimated Arrival</span>
              <p className="text-xs font-serif-title font-bold text-stone-100 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>3 - 5 Business Days</span>
              </p>
            </div>

            <div className="p-4 bg-[#121216] rounded-2xl border border-stone-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Shipping Courier</span>
              <p className="text-xs font-serif-title font-bold text-stone-100 flex items-center space-x-1">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>Express Worldwide</span>
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handlePrint}
              className="px-6 py-3.5 glass-panel hover:bg-stone-800 text-stone-200 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-stone-700 flex items-center space-x-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print Invoice Receipt</span>
            </button>

            <Link
              to="/account"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl shadow-amber-500/20 flex items-center space-x-2"
            >
              <span>View Order In Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
