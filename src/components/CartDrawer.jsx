import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartTotalItems
  } = useShop();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 10000;
  const progressPercent = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - cartSubtotal, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F0F13] border-l border-amber-500/20 shadow-2xl flex flex-col justify-between z-10 animate-slide-left">
          
          {/* Top Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif-title font-bold text-stone-100">Your Shopping Bag</h3>
                <p className="text-xs text-stone-400 font-mono">{cartTotalItems} {cartTotalItems === 1 ? 'item' : 'items'} selected</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-stone-900/80 border-b border-stone-800">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="flex items-center text-amber-400 space-x-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>
                  {remainingForFreeShipping === 0
                    ? "Unlocked: Free Express Worldwide Delivery!"
                    : `Add ₹${remainingForFreeShipping.toLocaleString()} for Free Express Shipping`}
                </span>
              </span>
            </div>
            <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto mb-4 text-stone-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-serif-title text-stone-300 font-bold mb-2">Your Bag is Empty</h4>
                <p className="text-xs text-stone-500 mb-6 max-w-xs mx-auto">
                  Explore our luxury footwear collection to craft your perfect entrance.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Explore Footwear
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-4 bg-[#14141A] rounded-2xl border border-stone-800 flex space-x-4 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl bg-stone-900 border border-stone-800"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-serif-title font-bold text-stone-100 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-stone-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] font-mono text-stone-400 mt-0.5">
                        Finish: <span className="text-amber-400">{item.color}</span> • Size: <span className="text-amber-400">UK {item.size}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-stone-700 rounded-lg bg-stone-900">
                        <button
                          onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-mono font-bold text-stone-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-serif-title font-bold text-amber-400">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-stone-800 bg-[#121216]">
              <div className="space-y-2 font-mono text-xs mb-4">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span className="text-stone-200">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Express Shipping</span>
                  <span className="text-amber-400 font-semibold">
                    {remainingForFreeShipping === 0 ? "FREE" : "₹499"}
                  </span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Duties & Craft Taxes</span>
                  <span className="text-stone-200">Included</span>
                </div>
                <div className="pt-2 border-t border-stone-800 flex justify-between text-sm font-serif-title font-bold text-stone-100">
                  <span>Estimated Total</span>
                  <span className="text-amber-400 text-lg">
                    ₹{(cartSubtotal + (remainingForFreeShipping === 0 ? 0 : 499)).toLocaleString()}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
              >
                <span>Proceed To Luxury Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
