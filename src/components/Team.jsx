"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { TeamCard } from "./TeamCard";
import TeamModal from "@/components/TeamModal";
import { SupervisorCard } from "@/components/SupervisorCard";

export default function Team() {
  const [selected, setSelected] = useState(null);

  const supervisor = {
    name: "Dr. Aly Abd Rabou Aly Daby",
    image: "/team/dr.png",
    linkedin: "#",
    github: "#",
  };

  const members = [
    {
      name: "Mohamed Ashraf",
      role: "Frontend Developer React(Next.js) ",
      image: "/team/ana.png",
      linkedin: "https://www.linkedin.com/in/mohamed-ashraf-99b754317/",
      github: "https://github.com/MohamedAshraf-a",
    },
    {
      name: "Ahmed Rady",
      role: "Ui/Ux Designer",
      image: "/team/rady.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Abdelrahman Atef",
      role: "Ai artificial intelligence",
      image: "/team/abdo.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Abdelrahman Essam",
      role: "Forntend Developer",
      image: "/team/hussry.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Essam Hisham",
      role: "Hardware",
      image: "/team/essam.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mohamed Sheref",
      role: "Hardware",
      image: "/team/sheref.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Youssef Mohamed",
      role: "Flutter Developer",
      image: "/team/u.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mahmoud Ezzat",
      role: "Flutter Developer",
      image: "/team/SHE55.png",
      linkedin: "https://www.linkedin.com/in/mahmoud-elsheikh-31773b3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#",
    },
    {
      name: "Mohamed Ezzat",
      role: "Frontend",
      image: "/team/mor.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Abdelrahman Magdy",
      role: "Backend Developer",
      image: "/team/magdy.png",
      linkedin: "#",
      github: "#",
    },
  ];

  const roleOrder = {
    "Ai artificial intelligence": 1,
    "Backend Developer": 2,
    "Frontend Developer (React)": 3,
    "Forntend Developer": 3,
    "Ui/Ux Designer": 4,
    "Flutter Developer": 5,
    "Hardware": 6,
    "Team Member": 7,
  };

  const sortedMembers = [...members].sort(
    (a, b) =>
      (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99)
  );

  // 🎬 Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="team" className="py-32 bg-slate-50 overflow-hidden">
      
        <h2 className="text-center  text-5xl md:text-6xl font-black text-slate-900 mb-6">
    Meet The Team
  </h2>

      {/* Supervisor */}
      <SupervisorCard data={supervisor} onClick={setSelected} />

      {/* Members */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {sortedMembers.map((m, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TeamCard member={m} onClick={() => setSelected(m)} />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <TeamModal selected={selected} setSelected={setSelected} />
    </section>
  );
}
