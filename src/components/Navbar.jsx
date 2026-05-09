"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#capabilities" },
    { name: "Monitor", href: "#monitor" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#register" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    setHidden(latest > prev && latest > 120);
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tight">
          Care<span className="text-purple-600 italic">Go</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-purple-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}