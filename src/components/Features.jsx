"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Visual Intelligence", desc: "MobileNetV2 driven classification.", size: "col-span-2", icon: "👁️" },
  { title: "IoT Mesh", desc: "OSPF & Static routing protocols.", size: "col-span-1", icon: "🌐" },
  { title: "Encryption", desc: "AES-256 secure telemetry.", size: "col-span-1", icon: "🔐" },
  { title: "CareGo Cloud", desc: "Real-time biometric sync with hospital databases.", size: "col-span-2", icon: "☁️" },
];

export default function Features() {
  return (
    <section id="capabilities" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl font-black tracking-tighter text-slate-900">Technical Foundation</h2>
          <p className="text-slate-400 mt-4 font-medium uppercase tracking-[0.3em] text-xs">Computer Engineering Core</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${f.size} group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-100 transition-all cursor-default`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}