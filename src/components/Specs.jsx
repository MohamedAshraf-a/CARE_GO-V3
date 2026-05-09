"use client";
import { motion } from "framer-motion";

export default function Specs() {
  const data = [
    { label: "Battery Life", val: "18 Hours", color: "bg-purple-500" },
    { label: "Vision", val: "4K AI Depth", color: "bg-indigo-500" },
    { label: "Payload", val: "25kg", color: "bg-violet-500" },
    { label: "Sensors", val: "IoT Hub V2", color: "bg-fuchsia-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={`w-1 h-8 ${item.color} rounded-full mb-4`} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
              <span className="text-2xl font-black text-slate-900 mt-2">{item.val}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}