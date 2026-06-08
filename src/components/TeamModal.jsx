"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function TeamModal({ selected, setSelected }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE */}
            <div className="relative h-80 bg-slate-100">
              <Image
                src={selected?.image}
                alt={selected?.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* NAME */}
              <h3 className="text-xl font-black text-slate-900">
                {selected?.name}
              </h3>

              {/* ROLE */}
              <p className="mt-2 text-sm text-purple-600 font-bold uppercase tracking-wider">
                {selected?.role}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Member of CareGo Robotics team contributing to AI, IoT, hardware,
                and medical robotics system development.
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex gap-4">

                {/* LinkedIn */}
                {selected?.linkedin && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    className="
                      w-11 h-11 flex items-center justify-center
                      rounded-xl bg-blue-50 text-blue-600
                      hover:bg-blue-100 hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <FaLinkedin size={18} />
                  </a>
                )}

                {/* GitHub */}
                {selected?.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    className="
                      w-11 h-11 flex items-center justify-center
                      rounded-xl bg-slate-100 text-slate-700
                      hover:bg-slate-200 hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <FaGithub size={18} />
                  </a>
                )}

              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="
                  mt-6 w-full py-2 rounded-xl
                  bg-purple-600 text-white font-semibold
                  hover:bg-purple-700 transition
                "
              >
                Close
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}