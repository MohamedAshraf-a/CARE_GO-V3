"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CardModal({ selected, setSelected }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50
            bg-black/40 backdrop-blur-sm
            flex items-center justify-center
            px-6
          "
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              max-w-xl w-full
              bg-white rounded-3xl p-10
              shadow-2xl
              border border-slate-100
            "
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {selected?.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {selected?.description}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="
                mt-6 px-5 py-2 rounded-xl
                bg-purple-600 text-white
                hover:bg-purple-700 transition
              "
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}