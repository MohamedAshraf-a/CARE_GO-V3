"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FullscreenViewer from "./FullscreenViewer";

const images = ["/1.png", "/2.png", "/3.png"];
const blurImages = ["/1-blur.jpg", "/2-blur.jpg", "/3-blur.jpg"];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loaded, setLoaded] = useState({});

  // autoplay
  useEffect(() => {
    if (isFullscreen) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isFullscreen]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-[640px] overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 scale-105 blur-3xl bg-purple-500/10 -z-10 rounded-full" />

      {/* card */}
      <div
        onClick={() => setIsFullscreen(true)}
        className="relative cursor-pointer rounded-[50px] p-6 bg-white/60 backdrop-blur-md border w-full shadow-lg overflow-hidden"
      >

        {/* image container */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-[35px] bg-slate-100">

          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={blurImages[i]}
                alt="blur"
                fill
                className="object-cover scale-105 blur-xl"
              />

              <Image
                src={src}
                alt="carego"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoadingComplete={() =>
                  setLoaded((p) => ({ ...p, [i]: true }))
                }
                className={`object-contain p-4 transition-all duration-700 ${
                  loaded[i] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}

          {/* =========================
              NAV BUTTONS
          ========================= */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       text-slate-800 
                       w-10 h-10 rounded-full 
                       shadow-md backdrop-blur 
                       flex items-center justify-center
                       transition"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       text-slate-800 
                       w-10 h-10 rounded-full 
                       shadow-md backdrop-blur 
                       flex items-center justify-center
                       transition"
          >
            ›
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-purple-600" : "w-2 bg-purple-200"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-4">
          Click to view full-screen
        </p>
      </div>

      {/* fullscreen */}
      <FullscreenViewer
        isOpen={isFullscreen}
        onClose={() => setIsFullscreen(false)}
        images={images}
        currentIndex={index}
        setCurrentIndex={setIndex}
      />
    </div>
  );
}