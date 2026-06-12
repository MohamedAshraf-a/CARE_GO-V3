"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

export default function FeatureModal({ feature, onClose }) {
  if (!feature) return null;

  const Icon = feature.icon;

  return createPortal(
    <AnimatePresence>
      {feature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed inset-0
            z-[9999]
            bg-black/40
            backdrop-blur-md
            flex items-center justify-center
            p-4 md:p-6
          "
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-3xl
              bg-white
              rounded-[2rem]
              p-8 md:p-10
              shadow-2xl
              relative
              max-h-[90vh]
              overflow-y-auto
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-5 right-5
                p-2 rounded-full
                text-slate-400
                hover:text-slate-600
                hover:bg-slate-100
                transition
              "
            >
              <X size={24} />
            </button>

            {/* Icon */}
            <div
              className="
                w-20 h-20
                rounded-3xl
                mb-6
                flex items-center justify-center
                bg-gradient-to-br
                from-purple-100
                to-violet-100
                text-purple-600
              "
            >
              <Icon size={42} />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              {feature.title}
            </h2>

            {/* Details */}
            <p className="text-slate-600 text-lg leading-8">
              {feature.details}
            </p>

            {/* Extra Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-purple-50 p-5 rounded-2xl">
                <h4 className="font-bold text-slate-800 mb-2">
                  AI Powered
                </h4>
                <p className="text-sm text-slate-500">
                  Smart healthcare automation.
                </p>
              </div>

              <div className="bg-violet-50 p-5 rounded-2xl">
                <h4 className="font-bold text-slate-800 mb-2">
                  Secure
                </h4>
                <p className="text-sm text-slate-500">
                  Patient data protection.
                </p>
              </div>

              <div className="bg-fuchsia-50 p-5 rounded-2xl">
                <h4 className="font-bold text-slate-800 mb-2">
                  Real-Time
                </h4>
                <p className="text-sm text-slate-500">
                  Instant monitoring & response.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}