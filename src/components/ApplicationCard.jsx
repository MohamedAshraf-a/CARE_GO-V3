"use client";

import { motion } from "framer-motion";

export default function ApplicationCard({ item, onClick }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={() => onClick(item)}
      className="
        group relative p-8 rounded-3xl cursor-pointer

        bg-white/70 backdrop-blur-xl
        border border-slate-100

        shadow-[0_8px_25px_rgba(0,0,0,0.04)]

        transition-all duration-300
        hover:shadow-[0_25px_60px_rgba(168,85,247,0.12)]
        hover:border-purple-100
      "
    >
      {/* glow */}
      <div className="
        absolute inset-0 rounded-3xl
        opacity-0 group-hover:opacity-100
        transition duration-300
        bg-gradient-to-br from-purple-50/60 via-transparent to-violet-50/40
      " />

      {/* icon */}
      <div className="
        relative w-12 h-12 flex items-center justify-center
        rounded-2xl bg-purple-50
        group-hover:bg-purple-100
        group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
        transition
      ">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>

      {/* title */}
      <h3 className="
        relative text-lg font-bold mt-5 text-slate-900
        group-hover:text-purple-600 transition
      ">
        {item.title}
      </h3>

      {/* preview */}
      <p className="relative mt-3 text-sm text-slate-500 line-clamp-2">
        {item.description}
      </p>
    </motion.div>
  );
}