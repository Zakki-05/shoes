import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { X, ShieldCheck, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { authService } from '../services/authService';

export function LoginModal() {
  const { isLoginModalOpen, setIsLoginModalOpen, setUser, showNotification } = useShop();
  const [loading, setLoading] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    const result = await authService.handleGoogleResponse(credentialResponse);
    setLoading(false);

    if (result.success) {
      setUser(result.user);
      setIsLoginModalOpen(false);
      showNotification(`Welcome back, ${result.user.firstName}`);
    } else {
      showNotification(`Authentication failed: ${result.error}`);
    }
  };

  const handleDemoSignIn = () => {
    setLoading(true);
    const demoUser = authService.loginDemoUser();
    setTimeout(() => {
      setUser(demoUser);
      setLoading(false);
      setIsLoginModalOpen(false);
      showNotification(`Signed in as ${demoUser.name}`);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsLoginModalOpen(false)}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-md glass-panel-gold rounded-3xl p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in text-center">
        {/* Close Button */}
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon / Crest */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-serif-title text-stone-950 font-bold text-2xl mx-auto mb-6 shadow-xl shadow-amber-500/20">
          A
        </div>

        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 block mb-1 flex items-center justify-center space-x-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Member Portal</span>
        </span>

        <h2 className="text-2xl md:text-3xl font-serif-title font-extrabold text-stone-100 mb-2">
          WELCOME BACK
        </h2>

        <p className="text-xs text-stone-300 font-light leading-relaxed mb-8 max-w-xs mx-auto">
          Sign in to continue your bespoke shopping experience, manage your footwear orders, and access private trunk show privileges.
        </p>

        {/* Real Google OAuth Button Wrapper */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <div className="w-full flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => showNotification("Google Login Failed or Closed")}
              theme="filled_black"
              shape="pill"
              text="continue_with"
              size="large"
              width="320"
            />
          </div>

          {/* Quick Demo Google Account Trigger */}
          <div className="w-full pt-4 border-t border-stone-800">
            <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-3">
              Testing without Google API key?
            </p>
            <button
              onClick={handleDemoSignIn}
              disabled={loading}
              className="w-full py-3.5 px-6 glass-panel hover:bg-amber-500/20 hover:border-amber-400 text-amber-300 hover:text-stone-100 text-xs font-mono font-bold rounded-full border border-stone-800 transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Simulate Verified Google Client Sign-In</span>
            </button>
          </div>
        </div>

        {/* Security Assurance */}
        <div className="pt-4 border-t border-stone-800/80 flex items-center justify-center space-x-2 text-[10px] font-mono text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Google OAuth 2.0 Encrypted • Zero Passwords Stored</span>
        </div>
      </div>
    </div>
  );
}
