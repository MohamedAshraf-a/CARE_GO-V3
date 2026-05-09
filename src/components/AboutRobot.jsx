"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutRobot() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  // Apple-style scroll reveal effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={ref} id="about" className="py-32 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            Anatomy of <span className="text-cyan-400">CareGo</span>
          </motion.h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="w-full h-[600px] rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden relative group"
        >
          {/* يمكنك استبدال الرابط أدناه برابط تصميمك الخاص من موقع Spline */}
          <iframe 
            src="https://my.spline.design/robot-placeholder/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="absolute inset-0 pointer-events-auto"
          />
          
          <div className="absolute bottom-10 left-10 bg-black/50 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
            <h3 className="text-white font-bold mb-1">Interactive 3D Model</h3>
            <p className="text-slate-400 text-sm">Drag to rotate • Scroll to zoom</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}