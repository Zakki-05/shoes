import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish && onFinish(), 400);
          return 100;
        }
        const inc = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + inc, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center p-6 text-stone-100"
    >
      <div className="text-center max-w-sm w-full">
        {/* Logo Crest */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-serif-title text-stone-950 font-bold text-2xl mx-auto mb-6 shadow-2xl shadow-amber-500/30"
        >
          A
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-serif-title font-extrabold tracking-widest text-stone-100 mb-2"
        >
          AURELIUS <span className="text-amber-400 font-sans font-light text-sm">& CO.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] font-mono uppercase tracking-[0.3em] text-amber-400 mb-10"
        >
          Crafted for the Journey
        </motion.p>

        {/* Minimal Progress Bar */}
        <div className="w-full h-1 bg-stone-900 rounded-full overflow-hidden mb-4 border border-stone-800">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest">
          <span>Initializing 3D Studio...</span>
          <span className="text-amber-400 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
