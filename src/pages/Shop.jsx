import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products, ALL_CATEGORIES_LIST, PRODUCT_CATEGORIES } from '../data/products';
import { SlidersHorizontal, Filter, X, Sparkles } from 'lucide-react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategoryParam);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedLeather, setSelectedLeather] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category Filter
        if (selectedCategory !== 'all') {
          if (p.categoryGroup !== selectedCategory && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }
        // Price Filter
        if (p.price > maxPrice) return false;

        // Leather Filter
        if (selectedLeather !== 'all') {
          if (!p.leatherType.toLowerCase().includes(selectedLeather.toLowerCase())) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return b.isNew ? 1 : -1;
        return 0; // featured default
      });
  }, [selectedCategory, maxPrice, selectedLeather, sortBy]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(10000);
    setSelectedLeather('all');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen">
      
      {/* Top Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Footwear Catalog</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-serif-title font-extrabold text-stone-100">
            THE FOOTWEAR <span className="gold-gradient-text">COLLECTION</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden px-4 py-2.5 glass-panel text-stone-200 text-xs font-mono rounded-xl border border-stone-800 flex items-center space-x-2"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Filter Catalog</span>
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-2 font-mono text-xs">
            <span className="text-stone-400 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#121216] border border-stone-800 text-stone-200 py-2.5 px-4 rounded-xl focus:outline-none focus:border-amber-400 font-mono text-xs cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Right Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Filter Sidebar */}
        <div className={`lg:col-span-3 space-y-8 ${showMobileFilter ? 'block' : 'hidden lg:block'}`}>
          <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800/80 sticky top-28 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-stone-800">
              <h3 className="text-sm font-serif-title font-bold text-stone-100 uppercase tracking-wider flex items-center space-x-2">
                <Filter className="w-4 h-4 text-amber-400" />
                <span>Refine Footwear</span>
              </h3>
              <button
                onClick={resetFilters}
                className="text-[10px] font-mono text-amber-400 hover:underline uppercase"
              >
                Reset All
              </button>
            </div>

            {/* Category Groups */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-3">
                Footwear Category
              </label>
              <div className="space-y-1.5 font-mono text-xs">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left py-2 px-3 rounded-xl transition-colors flex justify-between items-center ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-60">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2">
                <span>Max Price:</span>
                <span className="text-amber-400 font-bold">₹{maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="4000"
                max="10000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer bg-stone-800"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
                <span>₹4,000</span>
                <span>₹10,000+</span>
              </div>
            </div>

            {/* Leather Material Filter */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-3">
                Leather Material
              </label>
              <div className="space-y-1.5 font-mono text-xs">
                {[
                  { id: 'all', name: 'All Leathers' },
                  { id: 'calfskin', name: 'Full-Grain Calfskin' },
                  { id: 'suede', name: 'Italian Repello Suede' },
                  { id: 'nappa', name: 'Supple Nappa Leather' },
                  { id: 'velvet', name: 'Venetian Velvet' }
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedLeather(mat.id)}
                    className={`w-full text-left py-1.5 px-3 rounded-xl transition-colors ${
                      selectedLeather === mat.id
                        ? 'bg-amber-500/20 text-amber-300 font-bold'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {mat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Products Grid */}
        <div className="lg:col-span-9">
          <div className="flex justify-between items-center mb-6 font-mono text-xs text-stone-400">
            <span>Showing <strong className="text-amber-400">{filteredProducts.length}</strong> Bespoke Models</span>
            {selectedCategory !== 'all' && (
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                Active Category: {selectedCategory}
              </span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-16 text-center bg-[#121216] rounded-3xl border border-stone-800">
              <h3 className="text-lg font-serif-title text-stone-200 mb-2">No Footwear Matches Your Filter</h3>
              <p className="text-xs text-stone-500 mb-6 max-w-sm mx-auto">
                Try raising your price threshold or clearing material selection.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
