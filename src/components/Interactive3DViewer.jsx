import React, { useState } from 'react';
import { X, ShieldCheck, ShoppingBag, Eye, Star, Ruler } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function Interactive3DViewer({ product, onClose }) {
  const { addToCart, setIsCartOpen } = useShop();

  const colors = product?.colors || [
    { name: "Espresso Brown", hex: "#3B2317" },
    { name: "Midnight Black", hex: "#111113" },
    { name: "Antique Cognac", hex: "#7E4727" }
  ];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[2] || 9 : 9);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor.name);
    setIsCartOpen(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-4xl bg-[#121216] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full glass-panel hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-all border border-stone-700/50 z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: High-Res Photo Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 aspect-[4/3]">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === img ? 'border-amber-400 scale-105' : 'border-stone-800 opacity-60'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Customization Controls */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">{product.category}</span>
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-xs font-mono font-bold text-stone-200">{product.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl font-serif-title font-bold text-stone-100 mb-2">{product.name}</h3>
              <p className="text-xl font-serif-title font-bold text-amber-400 mb-4">₹{product.price?.toLocaleString()}</p>
              <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Finish Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-300 block mb-2">
                Selected Finish: <span className="text-amber-400 font-bold">{selectedColor.name}</span>
              </label>
              <div className="flex space-x-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c)}
                    className={`w-9 h-9 rounded-full border-2 transition-all p-0.5 flex items-center justify-center ${
                      selectedColor.name === c.name ? 'border-amber-400 scale-110 shadow-lg shadow-amber-500/20' : 'border-transparent opacity-70'
                    }`}
                  >
                    <span className="w-full h-full rounded-full block border border-white/20" style={{ backgroundColor: c.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-300 block mb-2">
                Select Size (UK/IN):
              </label>
              <div className="grid grid-cols-5 gap-2">
                {(product.sizes || [7, 8, 9, 10, 11]).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono rounded-xl transition-all border ${
                      selectedSize === sz
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-600'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-stone-400 text-xs flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{product.construction || "Goodyear Welted"} • Lifetime Resoling Warranty</span>
            </div>

            {/* Add to Order CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add To Order • ₹{product.price?.toLocaleString()}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
