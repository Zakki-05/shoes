import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, Truck, CreditCard, Sparkles } from 'lucide-react';

export function Checkout() {
  const { cart, cartSubtotal, cartTotalItems } = useShop();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Delivery, 3: Payment, 4: Confirmed
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    deliveryMethod: 'express',
    paymentMethod: 'card'
  });

  const freeShipping = cartSubtotal >= 10000;
  const shippingFee = freeShipping || formData.deliveryMethod === 'express' ? 0 : 499;
  const grandTotal = Math.max(cartSubtotal - discount + shippingFee, 0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'AURELIUS10' || promoCode.toUpperCase() === 'LUXURY') {
      const disc = Math.round(cartSubtotal * 0.1);
      setDiscount(disc);
    } else {
      alert('Invalid Promo Code. Try "AURELIUS10" for 10% bespoke discount.');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep(4); // Confirmed screen
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="pt-40 pb-32 text-center px-6 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto mb-4 text-amber-400">
          <Truck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif-title text-stone-100 mb-2 font-bold">Your Bag is Empty</h2>
        <p className="text-xs text-stone-400 mb-6 font-light">Add luxury footwear to your order to proceed with checkout.</p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400"
        >
          Return To Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Step Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1 flex items-center justify-center space-x-1">
          <Lock className="w-3.5 h-3.5" />
          <span>Encrypted 256-Bit SSL Luxury Checkout</span>
        </span>
        <h1 className="text-3xl md:text-4xl font-serif-title font-extrabold text-stone-100">
          ORDER <span className="gold-gradient-text">CHECKOUT</span>
        </h1>
      </div>

      {step === 4 ? (
        /* ORDER CONFIRMED SCREEN */
        <div className="max-w-xl mx-auto glass-panel-gold rounded-3xl p-8 md:p-12 border border-amber-500/30 text-center animate-fade-in shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
            Bespoke Order Confirmed
          </span>
          <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-stone-100 mb-2">
            THANK YOU FOR YOUR ORDER
          </h2>
          <p className="text-xs text-stone-300 font-mono mb-6">
            Order Reference: <strong className="text-amber-400">{orderId}</strong>
          </p>

          <p className="text-xs text-stone-400 font-light leading-relaxed mb-8">
            Your footwear is being inspected and hand-packed at our atelier. Confirmation details and real-time tracking have been sent to your email.
          </p>

          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-amber-400 transition-colors shadow-lg"
          >
            <span>Return To Home</span>
          </Link>
        </div>
      ) : (
        /* MAIN CHECKOUT FORM & SUMMARY */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Checkout Form Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step Indicators */}
            <div className="flex justify-between items-center p-4 bg-[#121216] rounded-2xl border border-stone-800 font-mono text-xs">
              <span className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-500'}`}>
                1. Shipping
              </span>
              <span className="text-stone-600">•</span>
              <span className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-500'}`}>
                2. Delivery
              </span>
              <span className="text-stone-600">•</span>
              <span className={`px-3 py-1 rounded-full ${step >= 3 ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-500'}`}>
                3. Payment
              </span>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Shipping Address Form */}
              <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800 space-y-4">
                <h3 className="text-base font-serif-title font-bold text-stone-100 uppercase tracking-wider">
                  Shipping Destination
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Street Address / Suite *"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                />

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="State *"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="PIN / Postal Code *"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800 space-y-4">
                <h3 className="text-base font-serif-title font-bold text-stone-100 uppercase tracking-wider">
                  Payment Method
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <label className="flex items-center space-x-3 p-3 bg-stone-950 rounded-xl border border-stone-800 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="accent-amber-400"
                    />
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-200">Credit / Debit Card (Visa, Mastercard, Amex)</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 bg-stone-950 rounded-xl border border-stone-800 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className="accent-amber-400"
                    />
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-200">UPI / Net Banking Instant Direct Pay</span>
                  </label>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Complete Bespoke Order • ₹{grandTotal.toLocaleString()}</span>
              </button>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800/80 sticky top-28 space-y-6">
              <h3 className="text-base font-serif-title font-bold text-stone-100 uppercase tracking-wider pb-4 border-b border-stone-800">
                Order Summary ({cartTotalItems})
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-xl bg-stone-950 border border-stone-800"
                    />
                    <div className="flex-1">
                      <h4 className="text-xs font-serif-title font-bold text-stone-100 line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] font-mono text-stone-400">
                        Finish: {item.color} • Size: UK {item.size} • Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-serif-title font-bold text-amber-400">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2 pt-4 border-t border-stone-800">
                <input
                  type="text"
                  placeholder="Promo Code (AURELIUS10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 uppercase font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs font-bold rounded-xl"
                >
                  Apply
                </button>
              </form>

              {/* Breakdown */}
              <div className="space-y-2 font-mono text-xs pt-4 border-t border-stone-800">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span className="text-stone-200">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>VIP Privilege Discount</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-400">
                  <span>Express Courier</span>
                  <span className="text-amber-400 font-bold">{shippingFee === 0 ? "FREE" : "₹499"}</span>
                </div>
                <div className="pt-3 border-t border-stone-800 flex justify-between text-sm font-serif-title font-bold text-stone-100">
                  <span>Total Amount</span>
                  <span className="text-amber-400 text-xl">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
