"use client";
import { motion } from "framer-motion";

export default function Registration() {
  return (
    <section id="register" className="py-32 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-purple-200/50 border border-purple-100"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-2">Reserve your unit</h3>
              <p className="text-slate-400 text-sm mb-10 font-medium">Join the priority list for Q4 2026 deployment.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Hospital Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-purple-600 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Contact Person</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-purple-600 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Institutional Email</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-purple-600 outline-none transition-all" />
                </div>
                <button className="w-full bg-purple-600 text-white py-5 rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:bg-purple-700 transition-all shadow-xl shadow-purple-200">
                  SUBMIT APPLICATION
                </button>
              </form>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight"
            >
              Ready to <span className="text-purple-600">Scale</span> Your Medical Support?
            </motion.h2>
            <p className="mt-8 text-slate-500 text-lg font-medium leading-relaxed">
              We are accepting limited partners for our global pilot program. 
              Secure a CareGo unit to automate 90% of your isolation ward's routine checks.
            </p>
            <ul className="mt-10 space-y-4">
              {["Full hardware warranty", "Cloud-based AI updates", "24/7 Remote support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}