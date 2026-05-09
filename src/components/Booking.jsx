"use client";
import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section className="py-32 bg-brand-surface">
      <div className="max-w-3xl mx-auto px-6 bg-white p-16 rounded-[5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16" />
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Join the Priority List</h2>
          <p className="text-slate-400 mt-4 font-bold uppercase tracking-widest text-[10px]">Institutional Deployment Q4 2026</p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Organization" className="w-full px-8 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all outline-none" />
            <input type="text" placeholder="Department" className="w-full px-8 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all outline-none" />
          </div>
          <input type="email" placeholder="Official Email Address" className="w-full px-8 py-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary transition-all outline-none" />
          <button className="w-full bg-brand-primary text-purple-400 py-6 rounded-3xl font-black uppercase tracking-widest text-xs hover:shadow-2xl hover:shadow-purple-300 transition-all active:scale-95">
            Request Institutional Access
          </button>
        </form>
      </div>
    </section>
  );
}