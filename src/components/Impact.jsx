"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HeartIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

import ImpactCard from "@/components/ImpactCard";
import ImpactModal from "@/components/ImpactModal";

const impacts = [
  {
    icon: ShieldCheckIcon,
    title: "Reduced Infection Risk",
    description:
      "Minimizes direct human-to-patient contact by automating routine monitoring, medication delivery, and essential in-room interactions, significantly lowering the risk of cross-contamination and hospital-acquired infections in critical care environments.",
  },
  {
    icon: BoltIcon,
    title: "Continuous Monitoring",
    description:
      "Enables 24/7 AI-powered surveillance of patient vital signs including heart rate, SpO₂, temperature, and respiratory patterns, ensuring real-time anomaly detection and immediate clinical alerts for faster decision-making.",
  },
  {
    icon: ClockIcon,
    title: "Faster Response",
    description:
      "Reduces critical response time by integrating predictive analytics and automated alert systems that detect early physiological deterioration, allowing healthcare providers to intervene before conditions escalate.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Lower Operational Costs",
    description:
      "Optimizes hospital resource utilization by reducing dependency on PPE, minimizing manual labor requirements, and automating repetitive clinical tasks, resulting in significant long-term operational savings.",
  },
  {
    icon: HeartIcon,
    title: "Improved Patient Care",
    description:
      "Enhances overall patient experience and safety through consistent monitoring, reduced human error, and improved communication between patients, caregivers, and medical staff in high-risk environments.",
  },
  {
    icon: CpuChipIcon,
    title: "Healthcare Automation",
    description:
      "Represents a shift toward fully autonomous healthcare systems powered by AI, robotics, and IoT integration, enabling scalable, intelligent, and adaptive medical environments of the future.",
  },
];

export default function Impact() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="impact" className="py-32 bg-white relative overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-100/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-violet-100/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900">
            Impact Analysis
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {impacts.map((item) => (
            <ImpactCard
              key={item.title}
              item={item}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* MODAL */}
        <ImpactModal
          selected={selected}
          setSelected={setSelected}
        />

      </div>
    </section>
  );
}