"use client";

import { motion } from "framer-motion";

export default function ImpactCard({ item, onClick }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={() => onClick(item)}
      className="
        group relative p-8 rounded-3xl cursor-pointer

        bg-white/70 backdrop-blur-xl

        border border-slate-100

        shadow-[0_10px_30px_rgba(0,0,0,0.04)]

        transition-all duration-300

        hover:shadow-[0_25px_60px_rgba(168,85,247,0.12)]
        hover:border-purple-200
      "
    >

      {/* ICON */}
      <div className="
        w-12 h-12 flex items-center justify-center
        rounded-2xl bg-purple-50
        group-hover:bg-purple-100
        group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        transition
      ">
        <Icon className="w-5 h-5 text-purple-500" />
      </div>

      {/* TITLE */}
      <h3 className="
        mt-5 text-lg font-semibold text-slate-900
        group-hover:text-purple-600 transition
      ">
        {item.title}
      </h3>

      {/* preview */}
      <p className="mt-3 text-sm text-slate-500 line-clamp-2">
        {item.description}
      </p>

    </motion.div>
  );
}