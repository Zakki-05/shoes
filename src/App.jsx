import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ShopProvider, useShop } from './context/ShopContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';
import { Interactive3DViewer } from './components/Interactive3DViewer';
import { CustomCursor } from './components/CustomCursor';
import { Sparkles } from 'lucide-react';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Account } from './pages/Account';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '1082739482910-demo-aurelius-google-client-id.apps.googleusercontent.com';

function ToastNotification() {
  const { toastMessage } = useShop();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-panel-gold px-6 py-3 rounded-full border border-amber-500/40 text-amber-300 font-mono text-xs shadow-2xl flex items-center space-x-2 animate-bounce">
      <Sparkles className="w-4 h-4 text-amber-400" />
      <span>{toastMessage}</span>
    </div>
  );
}

function Global3DInspectorModal() {
  const { inspect3DProduct, setInspect3DProduct } = useShop();
  if (!inspect3DProduct) return null;

  return (
    <Interactive3DViewer
      product={inspect3DProduct}
      onClose={() => setInspect3DProduct(null)}
    />
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <CustomCursor />
      
      <div className={`min-h-screen flex flex-col justify-between bg-[#0A0A0C] text-[#F4EFE7] selection:bg-amber-500 selection:text-black ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
          </Routes>
        </main>

        <Footer />
        <CartDrawer />
        <WishlistDrawer />
        <SearchModal />
        <LoginModal />
        <Global3DInspectorModal />
        <ToastNotification />
      </div>
    </>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ShopProvider>
        <Router>
          <AppContent />
        </Router>
      </ShopProvider>
    </GoogleOAuthProvider>
  );
}
