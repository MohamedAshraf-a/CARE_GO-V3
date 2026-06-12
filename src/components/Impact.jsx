"use client";

import { useState } from "react";

import ImpactCard from "@/components/ImpactCard";
import ImpactModal from "@/components/ImpactModal";

import {
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HeartIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

const impacts = [
  {
    icon: ShieldCheckIcon,
    title: "Enhanced Patient Safety",
    description:
      "Reduces unnecessary physical interaction while maintaining continuous patient supervision and secure medication access.",
  },
  {
    icon: BoltIcon,
    title: "Real-Time Monitoring",
    description:
      "Provides instant visibility into patient blood pressure and temperature readings through connected mobile applications and healthcare dashboards.",
  },
  {
    icon: ClockIcon,
    title: "Faster Medical Response",
    description:
      "Allows healthcare providers to receive immediate patient updates and respond quickly to changing medical conditions.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Operational Efficiency",
    description:
      "Automates repetitive healthcare tasks, reducing staff workload and improving resource utilization within medical facilities.",
  },
  {
    icon: HeartIcon,
    title: "Improved Patient Experience",
    description:
      "Enables comfortable communication with doctors through integrated video conferencing and simplifies medication accessibility.",
  },
  {
    icon: CpuChipIcon,
    title: "Healthcare Digital Transformation",
    description:
      "Combines robotics, IoT, telemedicine, cloud computing, and artificial intelligence to modernize healthcare delivery.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Remote Accessibility",
    description:
      "Empowers healthcare professionals to monitor patients, control robot functions, and manage medication access from virtually anywhere.",
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