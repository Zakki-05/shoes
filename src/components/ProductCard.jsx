import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';
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

  const handleOpen3D = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInspect3DProduct(product);
  };

  return (
    <div className="group relative bg-[#121216] rounded-3xl border border-stone-800/80 hover:border-amber-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] bg-stone-900/60 overflow-hidden cursor-pointer">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-1.5 z-10 pointer-events-none">
          {product.isNew && (
            <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] font-mono uppercase tracking-widest rounded-full shadow-md">
              New Arrival
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="px-3 py-1 bg-stone-100 text-stone-950 font-bold text-[10px] font-mono uppercase tracking-widest rounded-full shadow-md">
              Best Seller
            </span>
          )}
          <span className="px-3 py-1 glass-panel text-stone-300 text-[10px] font-mono uppercase tracking-widest rounded-full border border-white/10">
            {product.construction ? product.construction.split(' ')[0] : 'Goodyear'}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-transform hover:scale-110 z-10 ${
            isWish ? 'text-amber-400 bg-amber-500/20 border-amber-400' : 'text-stone-300 hover:text-white'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWish ? 'fill-amber-400' : ''}`} />
        </button>

        {/* Hover Quick Action Buttons Overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 z-10">
          <button
            onClick={handleOpen3D}
            className="flex-1 py-2.5 glass-panel-gold hover:bg-amber-500 text-stone-100 hover:text-stone-950 text-[11px] font-mono uppercase tracking-wider font-bold rounded-xl transition-all duration-300 border border-amber-500/40 flex items-center justify-center space-x-1.5 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View In 3D</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowQuickAdd(!showQuickAdd);
            }}
            className="px-3 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 text-[11px] font-mono font-bold rounded-xl transition-colors border border-stone-700 flex items-center justify-center"
            title="Quick Size Add"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Add Size Picker Panel (Overlay) */}
      {showQuickAdd && (
        <div className="p-4 bg-stone-900/95 border-t border-amber-500/30 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-mono uppercase text-amber-400">Select UK Size:</span>
            <button
              onClick={() => setShowQuickAdd(false)}
              className="text-[10px] text-stone-400 hover:text-white uppercase font-mono"
            >
              Close
            </button>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mb-3">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`py-1.5 text-[11px] font-mono rounded-lg transition-all border ${
                  selectedSize === sz
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                    : 'bg-stone-800 text-stone-300 border-stone-700 hover:border-stone-500'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
          <button
            onClick={handleQuickAdd}
            className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:from-amber-400 hover:to-amber-500"
          >
            Confirm Add (Size {selectedSize})
          </button>
        </div>
      )}

      {/* Product Content Details */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-mono font-semibold text-stone-300">{product.rating}</span>
            </div>
          </div>

          <Link to={`/product/${product.id}`} className="block group-hover:text-amber-400 transition-colors">
            <h3 className="text-lg font-serif-title font-bold text-stone-100 line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-stone-400 font-light line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        {/* Bottom Swatches & Price */}
        <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
          {/* Color Swatches */}
          <div className="flex space-x-1.5">
            {product.colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(c)}
                className={`w-4 h-4 rounded-full border border-white/20 transition-transform ${
                  selectedColor.name === c.name ? 'scale-125 ring-2 ring-amber-400 ring-offset-2 ring-offset-stone-950' : 'opacity-70'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-base font-serif-title font-bold text-amber-400">
              ₹{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-[10px] text-stone-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
