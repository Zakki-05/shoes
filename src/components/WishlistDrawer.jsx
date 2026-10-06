import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag, Eye, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setInspect3DProduct,
    setIsCartOpen
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F0F13] border-l border-amber-500/20 shadow-2xl flex flex-col justify-between z-10 animate-slide-left">
          
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Heart className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-serif-title font-bold text-stone-100">Saved Wishlist</h3>
                <p className="text-xs text-stone-400 font-mono">{wishlist.length} items bookmarked</p>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto mb-4 text-amber-400">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-base font-serif-title text-stone-300 font-bold mb-2">No Saved Items</h4>
                <p className="text-xs text-stone-500 mb-6 max-w-xs mx-auto">
                  Click the heart icon on any footwear product card to save it for later.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Discover Shoes
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-[#14141A] rounded-2xl border border-stone-800 flex space-x-4 relative group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-stone-900 border border-stone-800"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          to={`/product/${product.id}`}
                          onClick={() => setIsWishlistOpen(false)}
                          className="hover:text-amber-400 transition-colors"
                        >
                          <h4 className="text-sm font-serif-title font-bold text-stone-100 line-clamp-1">
                            {product.name}
                          </h4>
                        </Link>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-stone-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mt-0.5">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-serif-title font-bold text-amber-400">
                        ₹{product.price.toLocaleString()}
                      </span>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setInspect3DProduct(product);
                            setIsWishlistOpen(false);
                          }}
                          className="px-2.5 py-1.5 glass-panel text-stone-300 hover:text-white text-[10px] font-mono rounded-lg border border-stone-700 flex items-center space-x-1"
                          title="View 3D"
                        >
                          <Eye className="w-3 h-3" />
                          <span>3D</span>
                        </button>

                        <button
                          onClick={() => {
                            addToCart(product, 9, product.colors[0].name);
                            setIsWishlistOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-[10px] font-mono font-bold uppercase rounded-lg flex items-center space-x-1 shadow-md"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
