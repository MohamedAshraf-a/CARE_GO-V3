"use client";

import { motion } from "framer-motion";
import TypingText from "./TypingText";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-clip flex items-center bg-[#fbfbff]">

      {/* =========================
          CLEAN BACKGROUND SYSTEM
      ========================= */}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-violet-100/30" />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_60%)]" />

      {/* Floating orbs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-purple-300/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-violet-300/20 rounded-full blur-[120px]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* =========================
          CONTENT WRAPPER
      ========================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-6 border border-purple-200/50 shadow-sm">
            Graduation Project 2025 – 2026
          </span>

          <div className="text-6xl md:text-7xl font-black leading-tight flex gap-3">
            <span className="text-slate-900">CARE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
              GO
            </span>
          </div>

          <TypingText
            words={[
              "Revolutionizing Smart Healthcare Systems",
              "AI-Powered Patient Monitoring Robot",
              "Future of Remote Medical Care",
            ]}
            typingSpeed={65}
            deletingSpeed={40}
            delay={1800}
            className="text-2xl md:text-3xl font-semibold text-purple-600 mt-3"
          />

          <p className="mt-8 text-slate-600 text-lg max-w-2xl leading-relaxed">
            CAREGO is an intelligent medical robot designed to transform hospital care and provide reliable automation for modern healthcare systems.
          </p>

          {/* =========================
              CTA BUTTONS
          ========================= */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Booking Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="booking"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Book Now
            </motion.a>

            {/* Our Team Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#team"
              className="px-6 py-3 rounded-xl border border-purple-300 text-purple-700 font-semibold bg-white/60 backdrop-blur hover:bg-white transition-all shadow-sm"
            >
              Our Team
            </motion.a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center items-center w-full"
          style={{ willChange: "transform" }}
        >
          <ImageSlider />
        </motion.div>

      </div>
    </section>
  );
}