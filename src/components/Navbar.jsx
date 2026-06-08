"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Applications", href: "#applications" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("overview");
  const { scrollYProgress } = useScroll();

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-[60]"
      />

      <motion.header
        animate={{ y: hidden ? -120 : 0 }}
        className="fixed top-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">

          <nav className="
            backdrop-blur-2xl bg-white/60
            border border-white/40
            rounded-2xl shadow-lg
          ">

            {/* MAIN BAR */}
            <div className="h-16 flex items-center justify-between px-4 sm:px-6">

              {/* LOGO */}
              <div className="flex items-center gap-3">
                <Image src="/logo.png" width={48} height={48} alt="logo" />

                <div className="leading-tight">
                  <h1 className="font-black text-sm sm:text-base">
                    CareGo
                  </h1>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    AI Robot
                  </p>
                </div>
              </div>

              {/* DESKTOP LINKS */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {links.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={(e) => handleScroll(e, l.href)}
                    className={`
                      text-sm relative transition
                      hover:text-purple-600
                      ${active === l.href.replace("#", "")
                        ? "text-purple-600"
                        : "text-slate-700"}
                    `}
                  >
                    {l.name}

                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px]
                        bg-purple-600 transition-all duration-300
                        ${active === l.href.replace("#", "") ? "w-full" : "w-0"}
                      `}
                    />
                  </a>
                ))}
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden md:block">
                <Link
                  href="/booking"
                  className="
                    px-5 py-2 rounded-xl
                    bg-gradient-to-r from-purple-600 to-violet-600
                    text-white text-sm font-semibold
                    hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)]
                    transition-all
                  "
                >
                  Booking
                </Link>
              </div>

              {/* MOBILE BUTTON */}
              <button
                className="md:hidden p-2"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden px-6 pb-6 flex flex-col gap-4"
              >
                {links.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={(e) => handleScroll(e, l.href)}
                    className="text-sm text-slate-700 hover:text-purple-600 transition"
                  >
                    {l.name}
                  </a>
                ))}

                {/* MOBILE CTA */}
                <Link
                  href="/booking"
                  className="
                    mt-2 text-center px-5 py-2 rounded-xl
                    bg-gradient-to-r from-purple-600 to-violet-600
                    text-white text-sm font-semibold
                  "
                >
                  Booking
                </Link>
              </motion.div>
            )}

          </nav>
        </div>
      </motion.header>
    </>
  );
}