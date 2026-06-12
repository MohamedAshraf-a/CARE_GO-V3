"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-100" />

      {/* Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-6">
            Graduation Project 2025 – 2026
          </span>

          {/* 🔥 ANIMATED TITLE */}
          <div className="text-6xl md:text-7xl font-black leading-tight flex items-end gap-2">

            {/* CARE */}
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-slate-900 tracking-tight"
            >
              CARE
            </motion.span>

            {/* GO animated */}
            <motion.span
              initial={{ x: -40, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 120,
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600"
            >
              GO
            </motion.span>

          </div>

          {/* Typing Subtitle */}
          <TypingText
            words={[
              "Revolutionizing Smart Healthcare Systems",
              "AI-Powered Patient Monitoring Robot",
              "Future of Remote Medical Care"
            ]}
            typingSpeed={65}
            deletingSpeed={40}
            delay={1800}
            className="text-2xl md:text-3xl font-semibold text-purple-600 mt-3"
          />

          {/* 🔥 STRONG DESCRIPTION */}
          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-2xl">
            CAREGO is an intelligent medical robot designed to transform hospital care.
            It continuously monitors patient vitals, delivers medication safely, and enables
            real-time communication between doctors and patients — reducing human error,
            infection risk, and response time in critical situations.
          </p>

          {/* FEATURES */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 bg-white shadow rounded-full">Real-time Vital Monitoring</span>
            <span className="px-3 py-1 bg-white shadow rounded-full">AI Face Recognition</span>
            <span className="px-3 py-1 bg-white shadow rounded-full">Remote Control System</span>
            <span className="px-3 py-1 bg-white shadow rounded-full">Telemedicine Integration</span>
            <span className="px-3 py-1 bg-white shadow rounded-full">Cloud + Bluetooth Backup</span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#overview"
              className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Explore System
            </a>

            <a
              href="#team"
              className="px-8 py-4 rounded-2xl border border-slate-300 font-semibold hover:bg-slate-50 transition"
            >
              Meet The Team
            </a>

            <a
              href="/booking"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:shadow-[0_15px_40px_rgba(168,85,247,0.45)] hover:scale-[1.02] transition-all duration-300"
            >
              Request Demo
            </a>

          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-black text-purple-600">AI</h3>
              <p className="text-slate-500">Medical Intelligence</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-purple-600">IoT</h3>
              <p className="text-slate-500">Smart Connectivity</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-purple-600">24/7</h3>
              <p className="text-slate-500">Continuous Care</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500 to-violet-600 blur-3xl opacity-20 absolute" />

          {/* Card */}
          <div className="relative rounded-[40px] p-10 backdrop-blur-xl bg-white/50 border border-white/40 shadow-2xl">

            <Image
              src="/logo.png"
              alt="Robot"
              width={380}
              height={380}
              priority
              className="mx-auto drop-shadow-2xl animate-pulse"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}