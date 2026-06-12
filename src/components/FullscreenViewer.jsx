"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FullscreenViewer({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, currentIndex]);

  const next = () => {
    setZoom(1);
    setCurrentIndex((p) => (p + 1) % images.length);
  };

  const prev = () => {
    setZoom(1);
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-2xl">

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 text-white text-xl flex items-center justify-center z-[100000]"
      >
        ✕
      </button>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-5 text-white text-4xl z-[100000]"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-5 text-white text-4xl z-[100000]"
      >
        ›
      </button>

      {/* Image (click to close) */}
      <motion.div
        key={currentIndex}
        className="relative w-[90vw] h-[85vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: zoom }}
        transition={{ duration: 0.25 }}

        // Click image to close
        onClick={onClose}

        // Prevent accidental propagation on zoom
        onDoubleClick={(e) => {
          e.stopPropagation();
          setZoom((z) => (z === 1 ? 2 : 1));
        }}
      >
        <Image
          src={images[currentIndex]}
          alt="fullscreen image"
          fill
          className="object-contain pointer-events-none"
          priority
        />
      </motion.div>

      {/* Hint text */}
      <div className="absolute bottom-5 text-white text-sm opacity-60">
        Click image or ✕ to close • Use ← → to navigate
      </div>
    </div>
  );
}