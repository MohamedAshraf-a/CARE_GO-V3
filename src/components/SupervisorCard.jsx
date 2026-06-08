"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export  function SupervisorCard({ data, onClick }) {
  return (
    <div className="flex justify-center mb-24 px-6">

      <motion.div
        onClick={() => onClick(data)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        whileHover={{
          scale: 1.02,
          y: -8,
        }}

        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}

        className="
          relative cursor-pointer
          w-full max-w-4xl

          rounded-[42px]
          overflow-hidden

          bg-white/60 backdrop-blur-2xl
          border border-purple-100/60

          shadow-[0_25px_70px_rgba(168,85,247,0.18)]

          transition-all duration-500
        "
      >

        {/* 🌌 SOFT SPOTLIGHT */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-purple-200/30 via-transparent to-violet-200/20
          opacity-60
        " />

        {/* IMAGE */}
        <div className="relative h-[500px]">

          <Image
            src={data.image}
            alt={data.name}
            fill
            className="
              object-cover object-top
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* cinematic overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/75 via-black/20 to-transparent
          " />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 p-10 text-white">

          <p className="
            text-purple-300 text-xs uppercase tracking-[0.35em]
            font-bold
          ">
            Project Supervisor
          </p>

          <h3 className="text-4xl font-black mt-3 leading-tight">
            {data.name}
          </h3>

          <p className="text-white/70 mt-3 max-w-2xl text-sm leading-relaxed">
            {data.description}
          </p>

          {/* hint */}
          <p className="text-white/40 text-xs mt-6">
            Click to view details
          </p>

        </div>

        {/* glow edge */}
        <div className="
          absolute inset-0
          rounded-[42px]
          opacity-0 hover:opacity-100
          transition duration-500
          shadow-[inset_0_0_120px_rgba(168,85,247,0.25)]
        " />

      </motion.div>
    </div>
  );
}