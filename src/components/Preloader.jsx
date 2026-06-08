"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + Math.random() * 8;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0, y: "-100%" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-8"
          >
            <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
          </motion.div>

          <h1 className="text-3xl font-black">
            CareGo <span className="text-purple-600">OS</span>
          </h1>

          <p className="text-xs tracking-[0.3em] text-slate-400 mt-2 uppercase">
            Loading System...
          </p>

          <div className="w-72 h-1 bg-slate-100 rounded-full mt-10 overflow-hidden">
            <motion.div
              className="h-full bg-purple-600"
              style={{ width: `${progress}%` }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}