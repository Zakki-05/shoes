import React, { useState, useEffect } from 'react';
import { X, HelpCircle, Mail, Truck, RotateCcw, ShieldCheck, ChevronDown, ChevronUp, Send, Check } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { useShop } from '../context/ShopContext';

const FAQ_ITEMS = [
  {
    q: "How do I determine my correct shoe size?",
    a: "Our shoes are crafted according to standard UK sizing lasts. We recommend selecting your normal UK dress shoe size. If you fall between sizes, we advise ordering the half-size up for Goodyear welted footwear."
  },
  {
    q: "What is the Goodyear welted process and can my shoes be resoled?",
    a: "Yes. Goodyear welted construction attaches the leather upper to the sole via a perimeter welt strip. This allows our workshop or any cobbler to replace worn outsoles multiple times over decades of wear."
  },
  {
    q: "What is your return & exchange policy?",
    a: "We offer a complimentary 14-day exchange and return policy for all un-worn shoes in original packaging. We arrange free courier pickup from your home."
  },
  {
    q: "How long does international express delivery take?",
    a: "Orders are dispatched within 24 hours from our atelier. Express courier delivery typically takes 3 to 5 business days worldwide with full tracking."
  },
  {
    q: "How should I care for full-grain calfskin leathers?",
    a: "Use wooden shoe trees after each wear to absorb moisture and maintain shoe shape. Apply natural beeswax leather conditioner every 4-6 weeks to nourish the leather grain."
  }
];

export function HelpModal({ isOpen, onClose, initialTab = 'faq' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeFaq, setActiveFaq] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const { showNotification } = useShop();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    showNotification("Support message sent to Aurelius Concierge");
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-3xl bg-[#121216] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in max-h-[85vh] flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-stone-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif-title font-bold text-stone-100">Help Center & Client Support</h3>
              <p className="text-xs text-amber-400 font-mono">Aurelius Concierge Assistance</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-stone-800/80 pb-4 mb-6 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'faq'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'contact'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'shipping'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Shipping</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeTab === 'returns'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Returns</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          
          {/* TAB 1: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-stone-800 rounded-2xl bg-[#151515] overflow-hidden transition-colors hover:border-stone-700"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    className="w-full p-4 text-left flex justify-between items-center text-xs font-serif-title font-bold text-stone-100"
                  >
                    <span>{item.q}</span>
                    {activeFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: CONTACT US */}
          {activeTab === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div className="p-8 text-center bg-amber-500/10 rounded-2xl border border-amber-400/30 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-serif-title font-bold text-stone-100">Message Received</h4>
                  <p className="text-xs font-mono text-stone-300">
                    Thank you. Our client concierge team will respond to {contactForm.email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-stone-400 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Lord Aurelius"
                        className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="aurelius@luxury.com"
                        className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1">Subject</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-400"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Size Fitting Advice">Size Fitting Advice</option>
                      <option value="Order Tracking">Order Tracking</option>
                      <option value="Returns & Exchanges">Returns & Exchanges</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="How may our concierge team assist you today?"
                      className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: SHIPPING */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 text-xs font-light text-stone-300">
              <div className="p-4 bg-[#151515] rounded-2xl border border-stone-800 space-y-2">
                <h4 className="font-serif-title font-bold text-stone-100 uppercase text-sm">Express Worldwide Shipping</h4>
                <p>• Complimentary express shipping on all orders over ₹10,000.</p>
                <p>• Standard courier shipping fee of ₹499 applies to orders under threshold.</p>
                <p>• Tracked express delivery window: 3 to 5 business days worldwide.</p>
              </div>
              <div className="p-4 bg-[#151515] rounded-2xl border border-stone-800 space-y-2">
                <h4 className="font-serif-title font-bold text-stone-100 uppercase text-sm">Packaging & Handling</h4>
                <p>• Every order is hand-inspected and shipped in protective double-walled Aurelius boxes with velvet dust bags.</p>
              </div>
            </div>
          )}

          {/* TAB 4: RETURNS */}
          {activeTab === 'returns' && (
            <div className="space-y-4 text-xs font-light text-stone-300">
              <div className="p-4 bg-[#151515] rounded-2xl border border-stone-800 space-y-2">
                <h4 className="font-serif-title font-bold text-stone-100 uppercase text-sm">14-Day Complimentary Returns</h4>
                <p>• Returns & fit exchanges accepted within 14 days of delivery.</p>
                <p>• Shoes must be unworn and returned in original condition with box & dust bags.</p>
                <p>• We arrange free courier pickup directly from your address.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
