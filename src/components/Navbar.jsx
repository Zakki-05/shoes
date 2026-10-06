import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, User, ChevronDown, LogOut, Package } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    user,
    setIsLoginModalOpen,
    logoutUser,
    cartTotalItems,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen
  } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-amber-500/10 text-amber-300 border-b border-amber-500/20 py-2 px-4 text-center text-xs font-mono tracking-widest uppercase flex items-center justify-center space-x-2 z-50 relative">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Complimentary Express Worldwide Shipping & Free Returns on All Bespoke Orders</span>
      </div>

      <header className="fixed top-8 left-0 right-0 z-40 transition-all duration-500 px-4 sm:px-8 max-w-7xl mx-auto">
        <div
          className={`rounded-full transition-all duration-500 px-6 py-3.5 flex items-center justify-between ${
            isScrolled
              ? 'glass-panel-gold shadow-2xl border border-amber-500/30'
              : 'bg-stone-950/40 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* LEFT: Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-serif-title text-stone-950 font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="font-serif-title font-bold text-lg sm:text-xl tracking-wider text-stone-100 group-hover:text-amber-400 transition-colors">
              AURELIUS <span className="text-amber-400 font-sans font-light text-xs tracking-widest">& CO.</span>
            </span>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-stone-300">
            <Link
              to="/shop"
              className={`hover:text-amber-400 transition-colors ${
                location.pathname === '/shop' ? 'text-amber-400 font-bold' : ''
              }`}
            >
              All Shoes
            </Link>
            <Link to="/shop?category=loafers" className="hover:text-amber-400 transition-colors">
              Loafers
            </Link>
            <Link to="/shop?category=oxfords" className="hover:text-amber-400 transition-colors">
              Oxfords
            </Link>
            <Link to="/shop?category=boots" className="hover:text-amber-400 transition-colors">
              Boots
            </Link>
            <Link
              to="/collections"
              className={`hover:text-amber-400 transition-colors ${
                location.pathname === '/collections' ? 'text-amber-400 font-bold' : ''
              }`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`hover:text-amber-400 transition-colors ${
                location.pathname === '/about' ? 'text-amber-400 font-bold' : ''
              }`}
            >
              Craftsmanship
            </Link>
          </nav>

          {/* RIGHT: Action Controls & Auth State */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full hover:bg-white/10 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-colors"
              title="Search Footwear"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="w-10 h-10 rounded-full hover:bg-white/10 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-bold font-mono flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-2 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>{cartTotalItems}</span>
            </button>

            {/* AUTH STATE: Sign In button vs Logged-In User Profile Avatar Dropdown */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 p-1 pr-3 glass-panel-gold rounded-full border border-amber-500/40 hover:border-amber-400 transition-all"
                >
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-amber-400"
                  />
                  <span className="text-xs font-mono font-bold text-stone-100 hidden sm:inline">
                    {user.firstName}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 glass-panel-gold rounded-2xl p-2 shadow-2xl border border-amber-500/30 text-xs font-mono text-stone-200 animate-fade-in z-50">
                    <div className="p-3 border-b border-stone-800">
                      <p className="font-serif-title font-bold text-sm text-stone-100 line-clamp-1">{user.name}</p>
                      <p className="text-[10px] text-amber-400 truncate">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/account"
                        className="flex items-center space-x-2 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                      >
                        <User className="w-4 h-4 text-amber-400" />
                        <span>My Account</span>
                      </Link>

                      <Link
                        to="/account"
                        className="flex items-center space-x-2 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                      >
                        <Package className="w-4 h-4 text-amber-400" />
                        <span>My Orders</span>
                      </Link>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          setIsWishlistOpen(true);
                        }}
                        className="w-full text-left flex items-center space-x-2 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                      >
                        <Heart className="w-4 h-4 text-amber-400" />
                        <span>Wishlist ({wishlist.length})</span>
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          setIsCartOpen(true);
                        }}
                        className="w-full text-left flex items-center space-x-2 px-3 py-2.5 rounded-xl hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 text-amber-400" />
                        <span>Shopping Bag ({cartTotalItems})</span>
                      </button>
                    </div>

                    <div className="pt-1 border-t border-stone-800">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logoutUser();
                        }}
                        className="w-full text-left flex items-center space-x-2 px-3 py-2.5 rounded-xl text-stone-400 hover:bg-red-500/20 hover:text-red-300 transition-colors"
                      >
                        <LogOut className="w-4 h-4 text-red-400" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center space-x-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-stone-200 flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-6 glass-panel-gold rounded-3xl border border-amber-500/30 text-center animate-fade-in">
            <div className="flex flex-col space-y-4 text-xs font-mono uppercase tracking-widest text-stone-200">
              <Link to="/shop" className="py-2 hover:text-amber-400">All Shoes</Link>
              <Link to="/shop?category=loafers" className="py-2 hover:text-amber-400">Loafers</Link>
              <Link to="/shop?category=oxfords" className="py-2 hover:text-amber-400">Oxfords</Link>
              <Link to="/shop?category=boots" className="py-2 hover:text-amber-400">Boots</Link>
              <Link to="/collections" className="py-2 hover:text-amber-400">Collections</Link>
              <Link to="/about" className="py-2 hover:text-amber-400">Craftsmanship & Story</Link>
              {user ? (
                <Link to="/account" className="py-2 text-amber-400 font-bold">My Account ({user.firstName})</Link>
              ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className="py-2 text-amber-400 font-bold">Sign In With Google</button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
