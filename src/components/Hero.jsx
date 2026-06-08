"use client";

import { motion } from "framer-motion";

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

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-6">
            Graduation Project 2025 – 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
            AI-Powered
            <span className="block text-purple-600">
              Medical Care Robot
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            An intelligent healthcare assistant designed to monitor
            patients remotely, deliver essential supplies, support
            telemedicine communication, and reduce infection risks
            in quarantine environments.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* Explore */}
            <a
              href="#overview"
              className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Explore Project
            </a>

            {/* Team */}
            <a
              href="#team"
              className="px-8 py-4 rounded-2xl border border-slate-300 font-semibold hover:bg-slate-50 transition"
            >
              Meet The Team
            </a>

            {/* 🔥 BOOKING CTA (MAIN CONVERSION) */}
            <a
              href="/booking"
              className="
                px-8 py-4 rounded-2xl
                bg-gradient-to-r from-purple-600 to-violet-600
                text-white font-semibold
                hover:shadow-[0_15px_40px_rgba(168,85,247,0.45)]
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              Book Deployment
            </a>

          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-black text-purple-600">AI</h3>
              <p className="text-slate-500">Intelligence</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-purple-600">IoT</h3>
              <p className="text-slate-500">Connectivity</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-purple-600">24/7</h3>
              <p className="text-slate-500">Monitoring</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500 to-violet-600 blur-3xl opacity-20 absolute" />

          {/* Card */}
          <div className="relative rounded-[40px] p-10 backdrop-blur-xl bg-white/50 border border-white/40 shadow-fuchsia-950 shadow-initial shadow-2xl">
            <img
              src="/logo.png"
              alt="Robot"
              className="w-[380px] mx-auto drop-shadow-2xl animate-pulse"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}