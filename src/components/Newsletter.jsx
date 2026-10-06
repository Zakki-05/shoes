import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showNotification } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    showNotification('Welcome to Aurelius Private Trunk Show Club');
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="relative rounded-3xl glass-panel-gold p-8 md:p-16 border border-amber-500/30 overflow-hidden shadow-2xl text-center max-w-4xl mx-auto">
        {/* Glow orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-3 inline-flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Atelier Membership</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-serif-title font-extrabold text-stone-100 mb-4">
            JOIN THE <span className="gold-gradient-text">INNER CIRCLE</span>
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
            Be the first to receive invitation-only trunk show previews, limited bespoke batch releases, and private leather allocation notices.
          </p>

          {subscribed ? (
            <div className="p-4 bg-amber-500/20 border border-amber-400 rounded-2xl inline-flex items-center space-x-2 text-amber-300 font-mono text-xs uppercase tracking-widest">
              <Check className="w-4 h-4 text-amber-400" />
              <span>You are now subscribed to the Aurelius Trunk Show Privé.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your gentleman's email..."
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-stone-950/80 border border-stone-800 rounded-full text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg shadow-amber-500/20 flex-shrink-0"
              >
                Request Invite
              </button>
            </form>
          )}

          <p className="text-[10px] text-stone-500 font-mono mt-4">
            We respect your privacy. No spam. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
}
