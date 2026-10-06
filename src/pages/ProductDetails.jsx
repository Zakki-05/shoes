import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { SizeGuideModal } from '../components/SizeGuideModal';
import { CustomerReviews } from '../components/CustomerReviews';
import { TrustSection } from '../components/TrustSection';
import { productService } from '../services/productService';
import {
  Eye,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Star,
  ChevronDown,
  ChevronUp,
  Ruler
} from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist, setInspect3DProduct, setIsCartOpen } = useShop();

  const product = products.find((p) => p.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || 9);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('specs');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const isWish = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor.name);
    }
    setIsCartOpen(true);
  };

  const relatedProducts = productService.getRelatedProducts(product.id, product.categoryGroup, 3);

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-mono text-stone-400 mb-8">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-400">Footwear</Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{product.name}</span>
        </div>

        {/* Main Details 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* LEFT COLUMN: Gallery & 3D Viewer Launch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Showcase Image */}
            <div className="relative rounded-3xl overflow-hidden bg-[#151515] border border-stone-800 shadow-2xl aspect-[4/3] group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating "VIEW IN 3D" Interactive Button */}
              <div className="absolute bottom-6 right-6 z-10">
                <button
                  onClick={() => setInspect3DProduct(product)}
                  className="px-6 py-3.5 glass-panel-gold hover:bg-amber-500 text-stone-100 hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-amber-500/40 shadow-xl shadow-amber-500/20 flex items-center space-x-2 animate-bounce"
                  style={{ animationDuration: '3s' }}
                >
                  <Eye className="w-4 h-4" />
                  <span>View In Interactive 3D</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex space-x-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? 'border-amber-400 scale-105 shadow-lg shadow-amber-500/20'
                      : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Information & Customizer */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              {/* Category & Badge */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1.5 glass-panel px-3 py-1 rounded-full border border-stone-800">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-mono font-bold text-stone-200">{product.rating}</span>
                  <span className="text-[10px] text-stone-500 font-mono">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h1 className="text-3xl sm:text-4xl font-serif-title font-extrabold text-stone-100 mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-3xl font-serif-title font-bold text-amber-400">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-stone-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Taxes & Duties Included
                </span>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color Finish Selection */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase tracking-wider text-stone-300 block mb-3">
                  Selected Finish: <span className="text-amber-400 font-bold">{selectedColor.name}</span>
                </label>
                <div className="flex space-x-3">
                  {product.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(c)}
                      className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 flex items-center justify-center ${
                        selectedColor.name === c.name
                          ? 'border-amber-400 scale-110 shadow-lg shadow-amber-500/20'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
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
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-300">
                    Select Size (UK/IN):
                  </label>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[11px] font-mono text-amber-400 hover:underline flex items-center space-x-1"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Sizing & Fit Calculator</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 text-xs font-mono rounded-xl transition-all border ${
                        selectedSize === sz
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-md'
                          : 'glass-panel border-stone-800 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Order • ₹{(product.price * quantity).toLocaleString()}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-14 h-14 rounded-xl glass-panel border flex items-center justify-center transition-all ${
                    isWish ? 'border-amber-400 text-amber-400 bg-amber-500/20' : 'border-stone-800 text-stone-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWish ? 'fill-amber-400' : ''}`} />
                </button>
              </div>
            </div>

            {/* Craftsmanship Accordion Details */}
            <div className="border-t border-stone-800 pt-6 space-y-4">
              
              {/* Accordion 1: Specs */}
              <div className="border border-stone-800 rounded-2xl bg-[#151515] overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'specs' ? '' : 'specs')}
                  className="w-full p-4 flex justify-between items-center text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider"
                >
                  <span>Material & Construction Specs</span>
                  {activeAccordion === 'specs' ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                </button>
                {activeAccordion === 'specs' && (
                  <div className="p-4 pt-0 text-xs font-mono space-y-2 text-stone-400 border-t border-stone-800/80">
                    <p><strong className="text-stone-200">Leather:</strong> {product.leatherType}</p>
                    <p><strong className="text-stone-200">Construction:</strong> {product.construction}</p>
                    <p><strong className="text-stone-200">Outsole:</strong> {product.sole}</p>
                    <p><strong className="text-stone-200">Lining:</strong> Soft calfskin arch support bed</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Shipping */}
              <div className="border border-stone-800 rounded-2xl bg-[#151515] overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                  className="w-full p-4 flex justify-between items-center text-xs font-serif-title font-bold text-stone-100 uppercase tracking-wider"
                >
                  <span>Express Shipping & Return Policy</span>
                  {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="p-4 pt-0 text-xs font-mono space-y-2 text-stone-400 border-t border-stone-800/80">
                    <p>• Free Express Worldwide Delivery on orders above ₹10,000.</p>
                    <p>• 14-Day complimentary fit exchange & home return pickup service.</p>
                    <p>• Delivered in protective velvet shoe dust bags.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Customer Reviews Section */}
        <CustomerReviews product={product} />

        {/* Related Footwear Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="pt-20 border-t border-stone-800 mt-16">
            <h3 className="text-2xl font-serif-title font-bold text-stone-100 mb-8">
              YOU MAY ALSO <span className="gold-gradient-text">APPRECIATE</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Trust Section Footer Bar */}
      <div className="mt-20">
        <TrustSection />
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
