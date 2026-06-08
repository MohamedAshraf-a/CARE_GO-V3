"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ShieldPlus,
  Hospital,
  Ambulance,
  Stethoscope,
  Building2,
  Users,
  HeartHandshake,
  Cpu,
} from "lucide-react";

import ApplicationCard from "@/components/ApplicationCard";
import ApplicationModal from "@/components/ApplicationModal";

const applications = [
  {
    title: "Quarantine Wards",
    icon: ShieldPlus,
    description:
      "Enables fully contactless patient management in isolation wards by automating vital monitoring, medication delivery, and routine checks, significantly reducing infection transmission risk for healthcare staff.",
  },
  {
    title: "Infectious Disease Hospitals",
    icon: Hospital,
    description:
      "Assists medical teams with continuous patient surveillance, AI-based alerts for abnormal vitals, and automated task handling to improve response efficiency in high-risk infectious environments.",
  },
  {
    title: "Emergency & Field Hospitals",
    icon: Ambulance,
    description:
      "Provides rapid-deployment robotic support in temporary and disaster medical facilities, ensuring immediate patient monitoring and logistics assistance during crisis situations.",
  },
  {
    title: "Pandemic Response Centers",
    icon: Stethoscope,
    description:
      "Supports large-scale screening operations, remote consultations, and automated patient triage to reduce workload during epidemic outbreaks and public health emergencies.",
  },
  {
    title: "Military Medical Facilities",
    icon: Building2,
    description:
      "Delivers secure and autonomous healthcare support in high-risk and restricted environments, including biohazard zones and remote military operations.",
  },
  {
    title: "Rural Clinics",
    icon: Users,
    description:
      "Bridges healthcare gaps in underserved regions by enabling remote diagnosis support, telemedicine connectivity, and automated patient monitoring systems.",
  },
  {
    title: "Elderly Care Centers",
    icon: HeartHandshake,
    description:
      "Enhances elderly care through continuous health tracking, emergency detection systems, and seamless communication between patients, caregivers, and doctors.",
  },
  {
    title: "Smart Hospitals",
    icon: Cpu,
    description:
      "Integrates with AI-powered hospital ecosystems to enable intelligent automation, predictive analytics, and full digital transformation of healthcare operations.",
  },
];

export default function Applications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="applications" className="py-28 bg-gradient-to-b from-white via-white to-purple-50 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-100/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-violet-100/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900">
            Applications
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {applications.map((item) => (
            <ApplicationCard
              key={item.title}
              item={item}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* MODAL */}
        <ApplicationModal
          selected={selected}
          setSelected={setSelected}
        />

      </div>
    </section>
  );
}