"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Core...");

  useEffect(() => {
    const logs = ["Loading Neural Engine...", "Calibrating Sensors...", "Connecting IoT Hub...", "System Ready"];
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        const next = p + Math.floor(Math.random() * 5) + 1;
        setStatus(logs[Math.floor((next/101) * logs.length)]);
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div 
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] }}}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-3xl bg-brand-primary/10 flex items-center justify-center mb-8"
          >
            <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">CareGo <span className="text-brand-primary italic">OS</span></h1>
          <p className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase mb-12">{status}</p>
          <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-full bg-brand-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}