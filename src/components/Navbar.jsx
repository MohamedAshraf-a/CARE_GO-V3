"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Hero", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "Applications", href: "#applications" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-violet-600 origin-left z-[60]"
      />

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="fixed top-0 w-full z-50 flex justify-center"
      >
        {/* 🍏 MORPHING CONTAINER */}
        <motion.nav
          animate={{
            width: scrolled ? "92%" : "100%",
            marginTop: scrolled ? 12 : 20,
            borderRadius: scrolled ? 20 : 0,
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.65)"
              : "rgba(255,255,255,0.35)",
            backdropFilter: "blur(24px)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(0,0,0,0.08)"
              : "none",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="
            flex items-center justify-between
            px-6 h-16
            border border-white/30
          "
        >

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={42} height={42} alt="logo" />
            <div className="leading-tight">
              <h1 className="font-bold text-sm">CareGo</h1>
              <p className="text-[10px] text-slate-500">AI Medical System</p>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className={`relative text-sm transition ${
                  active === l.href.replace("#", "")
                    ? "text-purple-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                {l.name}

                {/* active indicator dot */}
                {active === l.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="
                px-5 py-2 rounded-xl
                bg-gradient-to-r from-purple-600 to-violet-600
                text-white text-sm font-semibold
                hover:scale-105 transition
              "
            >
              Booking
            </Link>
          </div>

          {/* MOBILE */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </motion.nav>
      </motion.header>
    </>
  );
}