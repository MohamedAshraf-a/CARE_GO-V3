"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PatientMonitor() {
  const [pulse, setPulse] = useState(75);
  useEffect(() => {
    const interval = setInterval(() => setPulse(72 + Math.floor(Math.random() * 6)), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="monitor" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Live Vital Stream</h2>
              <div className="flex gap-2 items-center text-purple-600 font-bold text-xs bg-purple-100 px-4 py-2 rounded-full border border-purple-200">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-ping" /> SYSTEM ACTIVE
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-7xl font-black text-purple-600 tabular-nums">
                  {pulse} <span className="text-xl text-slate-400 font-medium italic uppercase">Bpm</span>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {[...Array(30)].map((_, i) => (
                    <motion.div key={i} animate={{ height: [10, Math.random() * 80 + 10, 10] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.04 }} className="flex-1 bg-purple-200 rounded-full" />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Metric label="Oxygen SpO2" value="98.2%" status="Optimal" />
                <Metric label="Body Temp" value="37.1°C" status="Stable" />
                <Metric label="Blood Pressure" value="120/80" status="Normal" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-purple-600 p-10 rounded-[3.5rem] text-white flex flex-col justify-between">
            <h3 className="text-3xl font-black leading-tight">Emergency <br/> Readiness.</h3>
            <p className="text-purple-100 font-medium text-sm">The system uses AI to detect anomalies in vital signs and alerts medical staff instantly via the cloud.</p>
            <button className="w-full bg-white text-purple-600 py-4 rounded-2xl font-black text-sm hover:shadow-lg transition-all">
              View Patient History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, status }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div>
        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
        <div className="text-lg font-bold text-slate-900">{value}</div>
      </div>
      <span className="text-[10px] font-bold text-green-600 px-2 py-1 bg-green-50 rounded-lg">{status}</span>
    </div>
  );
}