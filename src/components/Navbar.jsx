"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
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
    const section = document.querySelector(href);

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        90;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  useEffect(() => {
    const sections = links.map((l) =>
      document.getElementById(l.href.replace("#", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-violet-600 origin-left z-[100]"
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 flex justify-center"
      >
        <motion.nav
          animate={{
            width: scrolled ? "92%" : "100%",
            marginTop: scrolled ? 12 : 20,
            borderRadius: scrolled ? 24 : 0,
            scale: scrolled ? 0.985 : 1,
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.82)"
              : "rgba(255,255,255,0.35)",
            backdropFilter: "blur(24px)",
            boxShadow: scrolled
              ? "0 20px 60px rgba(0,0,0,0.12)"
              : "none",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-16 px-6 flex items-center justify-between border border-white/30"
        >
          {/* LOGO */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer select-none"
            whileHover="hover"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative"
              variants={{
                hover: {
                  scale: 1.08,
                  rotate: [0, -6, 6, -3, 0],
                },
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-purple-500/40 blur-2xl"
              />

              {/* Logo box */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/logo.png"
                  width={34}
                  height={34}
                  alt="Logo"
                  className="relative z-10"
                />
              </motion.div>
            </motion.div>

            <div className="leading-tight">
            <h1 className="text-lg font-black tracking-tight flex items-center gap-[2px]">
  <span className="text-black">CARE</span>
  <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
    GO
  </span>
</h1>
              <p className="text-[11px] text-slate-500">
AI-Powered Medical Care 
Robot for Quarantine              </p>
            </div>
          </motion.div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative text-sm transition ${
                  active === link.href.replace("#", "")
                    ? "text-purple-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                {link.name}

                {active === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="dot"
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
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold hover:scale-105 transition"
            >
              Booking
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </motion.nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-[70]"
            >
              <div className="flex justify-end p-5">
                <button onClick={() => setOpen(false)}>
                  <X size={30} />
                </button>
              </div>

              <div className="px-8 mt-8 flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`text-lg ${
                      active === link.href.replace("#", "")
                        ? "text-purple-600 font-bold"
                        : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="mt-4 text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold"
                >
                  Booking
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}