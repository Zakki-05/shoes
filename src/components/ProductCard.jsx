import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist, addToCart, setInspect3DProduct, setIsCartOpen } = useShop();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(9);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const isWish = isInWishlist(product.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor.name);
    setShowQuickAdd(false);
    setIsCartOpen(true);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInspect3DProduct(product);
  };

  return (
    <div className="group relative bg-[#151515] rounded-3xl border border-stone-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10 pointer-events-none">
          {product.isNew && (
            <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[9px] font-mono uppercase tracking-widest rounded-full shadow-md">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="px-2.5 py-1 bg-stone-100 text-stone-950 font-bold text-[9px] font-mono uppercase tracking-widest rounded-full shadow-md">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-transform active:scale-95 z-10 ${
            isWish ? 'text-amber-400 bg-amber-500/20 border-amber-400' : 'text-stone-300 hover:text-white'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWish ? 'fill-amber-400' : ''}`} />
        </button>

        {/* Quick Action Buttons Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 z-10">
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 glass-panel-gold hover:bg-amber-500 text-stone-100 hover:text-stone-950 text-[10px] font-mono uppercase tracking-wider font-bold rounded-xl transition-all border border-amber-500/40 flex items-center justify-center space-x-1.5 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowQuickAdd(!showQuickAdd);
            }}
            className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 text-[10px] font-mono font-bold rounded-xl transition-colors border border-stone-700 flex items-center justify-center"
            title="Quick Size Add"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Add Size Picker Panel */}
      {showQuickAdd && (
        <div className="p-3 bg-stone-900 border-t border-amber-500/30 animate-fade-in">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] font-mono uppercase text-amber-400">Select UK Size:</span>
            <button
              onClick={() => setShowQuickAdd(false)}
              className="text-[10px] text-stone-400 hover:text-white uppercase font-mono"
            >
              Close
            </button>
          </div>
          <div className="grid grid-cols-5 gap-1 mb-2">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`py-1 text-[10px] font-mono rounded transition-all border ${
                  selectedSize === sz
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                    : 'bg-stone-800 text-stone-300 border-stone-700'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
          <button
            onClick={handleQuickAdd}
            className="w-full py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-md"
          >
            Add (UK {selectedSize})
          </button>
        </div>
      )}

      {/* Product Content Details */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-mono font-semibold text-stone-300">{product.rating}</span>
            </div>
          </div>

          <Link to={`/product/${product.id}`} className="block group-hover:text-amber-400 transition-colors">
            <h3 className="text-base sm:text-lg font-serif-title font-bold text-stone-100 line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-stone-400 font-light line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        {/* Bottom Swatches & Price */}
        <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
          <div className="flex space-x-1.5">
            {product.colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(c)}
                className={`w-3.5 h-3.5 rounded-full border border-white/20 transition-transform ${
                  selectedColor.name === c.name ? 'scale-125 ring-2 ring-amber-400 ring-offset-2 ring-offset-stone-950' : 'opacity-70'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          <div className="text-right">
            <div className="text-sm sm:text-base font-serif-title font-bold text-amber-400">
              ₹{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-[9px] text-stone-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
