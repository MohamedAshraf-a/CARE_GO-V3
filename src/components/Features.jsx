"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Activity,
  ScanFace,
  Pill,
  Video,
  Navigation,
  Cloud,
  Wifi,
} from "lucide-react";

import FeatureModal from "./FeatureModal";

const marketingFeatures = [
  {
    title: "Real-Time Vital Monitoring",
    desc: "Measures patient blood pressure and temperature and instantly synchronizes readings with the mobile application.",
    details:
      "CareGo continuously monitors patient vital signs including blood pressure, body temperature, heart rate, and oxygen saturation. All readings are synchronized instantly with the healthcare dashboard, enabling doctors and caregivers to track patient conditions in real-time and respond quickly to emergencies.",
    size: "md:col-span-2",
    icon: Activity,
  },
  {
    title: "Mobile Healthcare Dashboard",
    desc: "Provides doctors and caregivers with instant access to patient data, robot status, and healthcare records from anywhere.",
    details:
      "The CareGo mobile dashboard gives healthcare professionals complete access to patient records, medication schedules, robot activity, and live monitoring data through a secure and user-friendly interface.",
    size: "md:col-span-1",
    icon: Smartphone,
  },
  {
    title: "Facial Recognition Security",
    desc: "Medication drawers open only after secure patient verification using advanced facial recognition technology.",
    details:
      "Advanced AI-powered facial recognition ensures medications are delivered only to authorized patients, reducing human errors and improving overall healthcare security.",
    size: "md:col-span-1",
    icon: ScanFace,
  },
  {
    title: "Smart Medication Delivery",
    desc: "Stores and dispenses medications securely through automated smart drawers controlled remotely or through patient authentication.",
    details:
      "CareGo features intelligent medication storage and dispensing systems that securely manage patient medications while maintaining accurate delivery schedules and records.",
    size: "md:col-span-2",
    icon: Pill,
  },
  {
    title: "Integrated Telemedicine",
    desc: "Built-in tablet supports Zoom meetings and live doctor-patient consultations without requiring physical presence.",
    details:
      "The integrated telemedicine system enables video consultations, remote checkups, and virtual doctor visits directly through the robot, reducing unnecessary physical contact.",
    size: "md:col-span-2",
    icon: Video,
  },
  {
    title: "Remote Robot Navigation",
    desc: "Medical staff can remotely control robot movement while receiving live visual feedback from the onboard camera.",
    details:
      "Healthcare professionals can remotely navigate CareGo through hospital corridors and quarantine areas using real-time video streaming and precise movement controls.",
    size: "md:col-span-1",
    icon: Navigation,
  },
  {
    title: "Cloud-Based Control",
    desc: "Enables secure remote operation through a centralized server infrastructure for real-time healthcare management.",
    details:
      "Cloud connectivity allows centralized management of multiple robots, real-time monitoring, secure data storage, and remote software updates.",
    size: "md:col-span-1",
    icon: Cloud,
  },
  {
    title: "Bluetooth Backup Mode",
    desc: "Automatically switches to Bluetooth communication when internet connectivity is unavailable, ensuring uninterrupted operation.",
    details:
      "In the event of internet failure, CareGo automatically switches to Bluetooth communication, ensuring continuous operation and uninterrupted healthcare services.",
    size: "md:col-span-1",
    icon: Wifi,
  },
];

function AnimatedIcon({ Icon }) {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0],
        rotate: [0, 4, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon className="w-8 h-8" strokeWidth={2.2} />
    </motion.div>
  );
}

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <>
      <section
        id="features"
        className="py-32 bg-white relative"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-100/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-violet-100/20 blur-[160px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tight text-slate-900">
              Why Choose{" "}
              <span className="text-purple-600">
                CareGo
              </span>
              ?
            </h2>

            <p
              className="
                text-slate-400
                mt-4
                font-medium
                uppercase
                tracking-[0.25em]
                text-xs
              "
            >
              Redefining Quarantine Operations with
              Automation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {marketingFeatures.map((f, i) => {
              const Icon = f.icon;

              return (
                <motion.div
                  key={i}
                  onClick={() => setSelectedFeature(f)}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className={`
                    ${f.size}
                    cursor-pointer
                    group
                    relative
                    p-10
                    rounded-[2rem]
                    bg-white/70
                    backdrop-blur-xl
                    border border-slate-100
                    shadow-lg
                    hover:shadow-2xl
                    hover:border-purple-200
                    transition-all
                    duration-300
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 15,
                      scale: 1.15,
                    }}
                    className="
                      w-16 h-16
                      mb-6
                      rounded-2xl
                      bg-gradient-to-br
                      from-purple-100
                      to-violet-100
                      text-purple-600
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <AnimatedIcon Icon={Icon} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                      mb-3
                      group-hover:text-purple-600
                      transition-colors
                    "
                  >
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>

                  {/* Read More */}
                  <div
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      text-purple-600
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    Click to learn more →
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FeatureModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </>
  );
}