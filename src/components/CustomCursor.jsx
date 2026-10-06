import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices or when reduced motion is preferred
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover targets dynamically via event bubble or element data attributes
      const target = e.target;
      const isButton = target.closest('button, a, input, select');
      const is3DCanvas = target.closest('canvas, .cursor-grab');
      const isProductCard = target.closest('.group');

      if (is3DCanvas) {
        setCursorVariant('canvas3D');
        setCursorText('360°');
      } else if (isProductCard) {
        setCursorVariant('product');
        setCursorText('VIEW');
      } else if (isButton) {
        setCursorVariant('button');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(199, 164, 106, 0.4)",
      border: "1px solid rgba(199, 164, 106, 0.8)",
      transition: { type: "spring", mass: 0.1, stiffness: 800, damping: 35 }
    },
    button: {
      x: position.x - 20,
      y: position.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(199, 164, 106, 0.15)",
      border: "1px solid rgba(199, 164, 106, 0.6)",
      transition: { type: "spring", mass: 0.15, stiffness: 600, damping: 30 }
    },
    product: {
      x: position.x - 30,
      y: position.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(199, 164, 106, 0.85)",
      border: "1px solid #FFF",
      color: "#0A0A0C",
      transition: { type: "spring", mass: 0.2, stiffness: 500, damping: 28 }
    },
    canvas3D: {
      x: position.x - 32,
      y: position.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(18, 18, 22, 0.85)",
      border: "1px solid rgba(199, 164, 106, 0.8)",
      color: "#E5C992",
      transition: { type: "spring", mass: 0.2, stiffness: 500, damping: 28 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-widest shadow-xl backdrop-blur-[2px]"
      animate={cursorVariant}
      variants={variants}
    >
      {cursorText}
    </motion.div>
  );
}
