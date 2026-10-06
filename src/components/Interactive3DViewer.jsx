import React, { useState, Suspense } from 'react';
import { X, RotateCcw, ShieldCheck, ShoppingBag, Eye } from 'lucide-react';
import { Product3DViewer } from './Product3DViewer';
import { useShop } from '../context/ShopContext';


function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border border-amber-500/30 text-amber-100 min-w-[240px]">
        <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-xs uppercase tracking-widest font-mono text-amber-300">Crafting 3D Model...</p>
      </div>
    </Html>
  );
}

export function Interactive3DViewer({ product, onClose }) {
  const { addToCart, setIsCartOpen } = useShop();

  const colors = product?.colors || [
    { name: "Standard Leather", hex: "#3B2317", primary3D: "#3B2317" },
    { name: "Onyx Black", hex: "#111113", primary3D: "#111113" },
    { name: "Cognac Amber", hex: "#8A4925", primary3D: "#8A4925" }
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[2] || 9 : 9);
  const [lightPreset, setLightPreset] = useState("studio");

  const modelParams = product?.model3DParams || {
    type: "oxford",
    baseColor: selectedColor.primary3D || selectedColor.hex,
    accentColor: "#C7A46A",
    leatherRoughness: 0.3,
    clearcoat: 0.8,
    hasCapToe: true
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor.name);
    setIsCartOpen(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl animate-fade-in">
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 pointer-events-auto">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-serif-title font-bold text-stone-100">{product.name}</h3>
            <p className="text-xs text-amber-400 font-mono uppercase tracking-wider">Interactive 3D Craft Studio</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full glass-panel hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-all border border-stone-700/50"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 3D Viewport Canvas */}
      <div className="w-full h-full relative">
        <Product3DViewer
          model={product?.model3D || null}
          productParams={{
            baseColor: selectedColor.primary3D || selectedColor.hex,
            accentColor: modelParams.accentColor || "#C7A46A",
            soleColor: selectedColor.sole3D || "#1A0F0A",
            roughness: modelParams.leatherRoughness || 0.3,
            clearcoat: modelParams.clearcoat || 0.8,
            type: modelParams.type || "oxford",
            hasCapToe: modelParams.hasCapToe !== false,
            loaferType: modelParams.loaferType,
            bootStyle: modelParams.bootStyle,
            hasBuckle: modelParams.hasBuckle
          }}
        />

        {/* Floating Hint Overlay */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-full border border-white/10 text-xs text-stone-400 pointer-events-none flex items-center space-x-2">
          <RotateCcw className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Drag to rotate 360° • Scroll to zoom leather texture</span>
        </div>
      </div>

      {/* Right Customization Control Panel */}
      <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:top-24 md:bottom-24 w-auto md:w-80 glass-panel-gold rounded-3xl p-6 flex flex-col justify-between z-20 shadow-2xl border border-amber-500/30">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[10px] tracking-widest text-amber-400 uppercase font-mono">{product.category}</span>
              <h4 className="text-xl font-serif-title font-bold text-stone-100">{product.name}</h4>
            </div>
            <span className="text-xl font-serif-title font-bold text-amber-400">₹{product.price?.toLocaleString()}</span>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Color Selector */}
          <div className="mb-6">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-300 block mb-2">
              Select Finish ({selectedColor.name})
            </label>
            <div className="flex space-x-3">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(c)}
                  className={`w-9 h-9 rounded-full border-2 transition-all p-0.5 flex items-center justify-center ${
                    selectedColor.name === c.name
                      ? 'border-amber-400 scale-110 shadow-lg shadow-amber-500/20'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={c.name}
                >
                  <span
                    className="w-full h-full rounded-full block border border-white/20"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-300 block mb-2">
              Select Size (UK/IN)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(product.sizes || [7, 8, 9, 10, 11]).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-2 text-xs font-mono rounded-lg transition-all border ${
                    selectedSize === sz
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'glass-panel border-stone-800 text-stone-400 hover:border-stone-600'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Craft Guarantee */}
          <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800/80 flex items-center space-x-3 text-stone-400 text-xs mb-6">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>{product.construction || "Goodyear Welted"} • Lifetime Resoling Warranty</span>
          </div>
        </div>

        {/* Add to Cart CTA */}
        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add To Order • ₹{product.price?.toLocaleString()}</span>
        </button>
      </div>
    </div>
  );
}
