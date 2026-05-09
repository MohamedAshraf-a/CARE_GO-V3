"use client";
import { motion } from "framer-motion";

export default function Team() {
  const members = [
    { name: "Mohamed Ashraf", role: "AI & Software Lead" },
    { name: "Team Member 2", role: "Hardware Engineer" },
    { name: "Team Member 3", role: "IoT Specialist" },
    { name: "Team Member 4", role: "Robotics Design" },
    { name: "Team Member 5", role: "Medical Integration" },
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 tracking-tighter"
          >
            Project <span className="text-purple-600 italic">Engineers</span>
          </motion.h2>
          <p className="text-slate-400 mt-4 font-medium uppercase tracking-widest text-xs">Graduation Project Class of 2026</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-center transition-all hover:bg-white hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-black text-slate-900 leading-tight">{member.name}</h4>
              <p className="text-purple-500 text-[10px] font-bold uppercase tracking-widest mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}