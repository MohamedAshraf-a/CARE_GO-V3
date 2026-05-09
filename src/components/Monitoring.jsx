"use client";
import { motion } from "framer-motion";

const Metrics = [
  { label: "SpO2 Level", val: "98%", status: "Optimal", color: "text-blue-500" },
  { label: "Heart Rate", val: "72 BPM", status: "Stable", color: "text-brand-primary" },
  { label: "Surface Temp", val: "36.8°C", status: "Normal", color: "text-emerald-500" },
];

export default function Monitoring() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-12">Remote Bio-Link</h2>
            <div className="flex items-end gap-2 h-48 mb-12">
              {[...Array(40)].map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ height: [20, Math.random() * 150 + 20, 20] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                  className="flex-1 bg-brand-primary/20 rounded-full" 
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {Metrics.map((m, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-2">{m.label}</p>
                  <p className={`text-2xl font-black ${m.color}`}>{m.val}</p>
                  <span className="text-[8px] font-bold bg-slate-50 px-2 py-1 rounded mt-3 inline-block">{m.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary p-12 rounded-[4rem] text-white flex flex-col justify-between shadow-3xl shadow-purple-200">
            <div>
              <h3 className="text-3xl font-black tracking-tight mb-4 text-white">AI Identification</h3>
              <p className="text-purple-100 text-sm leading-relaxed font-medium">
                Our MobileNetV2 architecture ensures medication is only dispensed after positive patient facial verification.
              </p>
            </div>
            <div className="w-full aspect-square bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center text-6xl">
              👤
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}