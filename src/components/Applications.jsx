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
title: "Smart Hospitals",
icon: Cpu,
description:
"Transforms healthcare operations through intelligent patient monitoring, remote robot control, telemedicine services, and secure medication management integrated into a unified digital ecosystem.",
},
{
title: "Patient Care Rooms",
icon: Hospital,
description:
"Continuously monitors patient temperature and blood pressure while transmitting real-time health data directly to healthcare providers through the mobile application.",
},
{
title: "Isolation & Infectious Disease Wards",
icon: ShieldPlus,
description:
"Reduces unnecessary physical contact by automating patient monitoring and medication access while maintaining direct communication between patients and medical teams.",
},
{
title: "Emergency & Critical Care Units",
icon: Ambulance,
description:
"Provides immediate access to patient vital signs, remote consultations, and rapid healthcare support in high-priority medical environments.",
},
{
title: "Elderly Care Centers",
icon: HeartHandshake,
description:
"Improves quality of life for elderly patients through continuous health monitoring, medication management, and easy communication with caregivers and physicians.",
},
{
title: "Rural & Remote Clinics",
icon: Users,
description:
"Extends healthcare accessibility by enabling telemedicine consultations, remote monitoring, and intelligent robotic assistance in underserved regions.",
},
{
title: "Military & Restricted Facilities",
icon: Building2,
description:
"Provides secure and autonomous healthcare assistance in controlled environments where minimizing direct interaction is critical.",
},
{
title: "Telemedicine Centers",
icon: Stethoscope,
description:
"Allows healthcare professionals to conduct remote consultations through the robot’s integrated tablet, camera, and video conferencing capabilities.",
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