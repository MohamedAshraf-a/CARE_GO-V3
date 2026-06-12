"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-28 bg-gradient-to-b from-white via-white to-slate-50 border-t border-slate-100 overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-200/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* BRAND */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black text-slate-900 tracking-tight"
        >
          CareGo <span className="text-purple-600">Robotics</span>
        </motion.h2>

        <p className="text-slate-500 text-sm mt-4 font-medium max-w-xl mx-auto leading-relaxed">
          Empowering Healthcare through Artificial Intelligence, Robotics, and IoT systems
          to deliver safer and smarter patient care.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-5 mt-10">

          <a
            href="https://www.linkedin.com/in/mohamed-ashraf-99b754317/"
            target="_blank"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600
            hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50
            transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/MohamedAshraf-a"
            target="_blank"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600
            hover:text-black hover:border-slate-400 hover:bg-slate-100
            transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="#"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600
            hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50
            transition-all duration-300 hover:scale-110"
          >
            <DocumentTextIcon className="w-5 h-5" />
          </a>

          <a
            href="mailto:pop164412@gmail.com"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600
            hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50
            transition-all duration-300 hover:scale-110"
          >
            <EnvelopeIcon className="w-5 h-5" />
          </a>

        </div>

        {/* divider */}
        <div className="mt-14 border-t border-slate-100 pt-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            © 2026 CareGo Team • Graduation Project • All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}