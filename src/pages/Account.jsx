import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Package,
  Heart,
  ShoppingBag,
  LogOut,
  ShieldCheck,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: "AUR-498270",
    date: "2026-10-06",
    status: "In Atelier Finishing",
    statusStep: 2,
    total: 7999,
    items: [
      {
        name: "The Sovereign Seamless Wholecut",
        category: "Wholecut Oxfords",
        finish: "Patina Bordeaux",
        size: "UK 9",
        price: 7999,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: "AUR-108293",
    date: "2026-09-15",
    status: "Delivered",
    statusStep: 4,
    total: 6499,
    items: [
      {
        name: "The Signature Cap Toe Oxford",
        category: "Cap Toe Oxfords",
        finish: "Espresso Brown",
        size: "UK 9",
        price: 6499,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=400&q=80"
      }
    ]
  }
];

export function Account() {
  const { user, logoutUser, setIsWishlistOpen, setIsCartOpen } = useShop();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  if (!user) {
    return (
      <div className="pt-40 pb-32 text-center px-6 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto mb-4 text-amber-400">
          <User className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif-title text-stone-100 mb-2 font-bold">Authentication Required</h2>
        <p className="text-xs text-stone-400 mb-6 font-light">Please sign in with your Google Account to access your bespoke dashboard.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400"
        >
          Return To Home
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* User Header Profile Card */}
      <div className="p-8 bg-[#121216] rounded-3xl border border-stone-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center space-x-6">
          {/* Profile Image Avatar */}
          <div className="relative">
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shadow-xl shadow-amber-500/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-stone-950">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                VIP Bespoke Client
              </span>
              <span className="text-[10px] font-mono text-stone-500">
                ID: {user.googleId?.slice(0, 10)}...
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif-title font-extrabold text-stone-100">
              {user.name}
            </h1>
            <p className="text-xs font-mono text-stone-400 mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 glass-panel hover:bg-stone-800 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-colors border border-stone-700 flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4 text-stone-400" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b border-stone-800 pb-4 mb-8 font-mono text-xs uppercase tracking-widest">
        <button
          onClick={() => setActiveTab('orders')}
          className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            activeTab === 'orders'
              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>My Orders ({MOCK_ORDERS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`py-2 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            activeTab === 'profile'
              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Account Settings</span>
        </button>
      </div>

      {/* Tab Content: Orders */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {MOCK_ORDERS.map((order) => (
            <div
              key={order.id}
              className="p-6 bg-[#121216] rounded-3xl border border-stone-800 space-y-6 shadow-xl"
            >
              {/* Order Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-800/80 pb-4 gap-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-serif-title font-bold text-stone-100">
                      Order Reference: <strong className="text-amber-400">{order.id}</strong>
                    </span>
                    <span className="text-xs font-mono text-stone-400 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{order.date}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-mono rounded-full border border-amber-500/30 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{order.status}</span>
                  </span>
                  <span className="text-sm font-serif-title font-bold text-amber-400">
                    ₹{order.total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl bg-stone-900 border border-stone-800"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-serif-title font-bold text-stone-100">{item.name}</h4>
                      <p className="text-xs font-mono text-stone-400 mt-0.5">
                        Finish: {item.finish} • Size: {item.size}
                      </p>
                    </div>
                    <span className="text-sm font-serif-title font-bold text-stone-200">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: Profile Settings */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800 space-y-4">
            <h3 className="text-base font-serif-title font-bold text-stone-100 uppercase tracking-wider">
              Google Verified Credentials
            </h3>
            <div className="space-y-3 font-mono text-xs text-stone-300">
              <p><strong className="text-stone-400">Full Name:</strong> {user.name}</p>
              <p><strong className="text-stone-400">Email:</strong> {user.email}</p>
              <p><strong className="text-stone-400">Auth Method:</strong> Google OAuth 2.0 (SSO)</p>
              <p><strong className="text-stone-400">Google Sub ID:</strong> {user.googleId}</p>
              <p><strong className="text-stone-400">Last Login:</strong> {new Date(user.lastLogin).toLocaleString()}</p>
            </div>
          </div>

          <div className="p-6 bg-[#121216] rounded-3xl border border-stone-800 space-y-4">
            <h3 className="text-base font-serif-title font-bold text-stone-100 uppercase tracking-wider">
              Bespoke Fit Preferences
            </h3>
            <div className="space-y-3 font-mono text-xs text-stone-300">
              <p><strong className="text-stone-400">Default Shoe Size:</strong> UK 9.0 (IN 9)</p>
              <p><strong className="text-stone-400">Preferred Leather:</strong> Full-Grain Italian Calfskin</p>
              <p><strong className="text-stone-400">Resoling Warranty:</strong> Active Lifetime Goodyear Membership</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
