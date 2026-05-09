"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // High-end parallax effect linked to scroll
  const { scrollY } = useScroll();
  const robotY = useTransform(scrollY, [0, 500], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#fcfcff] overflow-hidden pt-20"
    >
      {/* Background Tech Grain & Blur */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT: CONTENT AREA */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="lg:col-span-7"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Project CareGo • Institutional V1
            </span>
          </motion.div>

          {/* Main Heading with Staggered Letters */}
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="block"
            >
              The Next Era of
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
              className="text-purple-600 italic block"
            >
              Autonomous Care.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-12"
          >
            An AI-powered medical proxy designed to bridge the gap between clinicians and patients in high-risk zones. 
            <span className="text-slate-900"> Zero contact. Maximum precision.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:bg-purple-600 active:scale-95 shadow-2xl shadow-purple-200">
              <span className="relative z-10">Reserve Unit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: INTERACTIVE IMAGE AREA */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            style={{ y: robotY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "anticipate" }}
            className="relative z-10"
          >
            {/* Robot Image */}
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(124,58,237,0.15)] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1000&auto=format&fit=crop" 
                alt="CareGo Robot" 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>

            {/* Floating Live Telemetry Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 glass-card p-6 rounded-3xl border border-white bg-white/70 backdrop-blur-xl shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">System Link</p>
                  <p className="text-sm font-black text-slate-900">Uptime 99.9%</p>
                </div>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "85%" }} 
                  className="h-full bg-purple-600" 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Rings behind the robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-purple-100 rounded-full opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-purple-50 rounded-full opacity-30" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-300">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-600 to-transparent" />
      </motion.div>
    </section>
  );
}