import React, { useState, useEffect, useRef } from 'react';
import { ShoeScene } from './ShoeScene';
import { HeroUI } from './HeroUI';
import { products } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export function HeroSection() {
  const { setInspect3DProduct } = useShop();
  const heroProduct = products.find((p) => p.heroModel) || products[0];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroContainerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      if (heroContainerRef.current) {
        const { top, height } = heroContainerRef.current.getBoundingClientRect();
        const progress = Math.min(Math.max(-top / height, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInspectHero = () => {
    setInspect3DProduct(heroProduct);
  };

  return (
    <section
      ref={heroContainerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-radial from-[#141419] via-[#0A0A0C] to-[#050507]"
    >
      {/* Background Soft Glow Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 3D R3F Canvas Viewport */}
      <div className="absolute inset-0 z-0">
        <ShoeScene
          mousePosition={mousePosition}
          scrollProgress={scrollProgress}
          onClickHero={handleInspectHero}
        />
      </div>

      {/* Hero UI Overlay Layer */}
      <HeroUI
        onInspectHero={handleInspectHero}
        heroProduct={heroProduct}
      />

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        <div className="w-5 h-9 rounded-full border-2 border-stone-600/60 p-1 mx-auto mb-2 flex justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Scroll To Discover</span>
      </div>
    </section>
  );
}
