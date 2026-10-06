import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Eye, Clock, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, products, setInspect3DProduct } = useShop();
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelius_recent_searches');
      return saved ? JSON.parse(saved) : ["Cap Toe Oxfords", "Chelsea Boots", "Tassel Loafers"];
    } catch {
      return ["Cap Toe Oxfords", "Chelsea Boots", "Tassel Loafers"];
    }
  });

  const inputRef = useRef();

  // Keyboard ESC listener to close search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const saveRecentSearch = (searchTerm) => {
    const updated = [searchTerm, ...recentSearches.filter((s) => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('aurelius_recent_searches', JSON.stringify(updated));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('aurelius_recent_searches');
  };

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.leatherType.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-3xl glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
          <div className="flex items-center space-x-3 flex-1">
            <Search className="w-5 h-5 text-amber-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search loafers, oxfords, chelsea boots, suede, wholecuts..."
              className="w-full bg-transparent text-stone-100 placeholder-stone-500 text-lg font-serif-title focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-9 h-9 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            title="Press ESC to close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recent & Suggested Searches */}
        {query.trim() === '' && (
          <div className="space-y-6">
            {recentSearches.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-3 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Recent Searches:</span>
                  </span>
                  <button onClick={clearRecentSearches} className="hover:text-red-400 flex items-center space-x-1">
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 text-xs font-mono rounded-xl border border-stone-800 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block mb-3">
                Popular Footwear Searches:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Cap Toe Oxfords", "Penny Loafers", "Chelsea Boots", "Wholecuts", "Double Monk Strap", "Velvet Slippers", "Italian Suede"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                      saveRecentSearch(tag);
                    }}
                    className="px-3 py-1.5 glass-panel hover:bg-amber-500/20 hover:border-amber-400 text-stone-300 hover:text-amber-300 text-xs font-mono rounded-full border border-stone-800 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query.trim() !== '' && (
          <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Found {filteredProducts.length} matching footwear {filteredProducts.length === 1 ? 'result' : 'results'}
            </span>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-8 text-stone-400 font-light text-sm">
                No bespoke shoes matched "{query}". Try searching "loafer", "boot", or "oxford".
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 bg-[#14141A] rounded-2xl border border-stone-800 flex items-center justify-between hover:border-amber-500/40 transition-colors group"
                >
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      saveRecentSearch(query);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center space-x-4 flex-1"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-xl bg-stone-900 border border-stone-800"
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-400 block">{product.category}</span>
                      <h4 className="text-sm font-serif-title font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-stone-400 font-mono">₹{product.price.toLocaleString()}</p>
                    </div>
                  </Link>

                  <button
                    onClick={() => {
                      saveRecentSearch(query);
                      setInspect3DProduct(product);
                      setIsSearchOpen(false);
                    }}
                    className="px-3 py-2 glass-panel-gold hover:bg-amber-500 text-amber-300 hover:text-stone-950 text-xs font-mono font-bold rounded-xl transition-all border border-amber-500/30 flex items-center space-x-1.5 ml-4"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>3D Inspect</span>
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
