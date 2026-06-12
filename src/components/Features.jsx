"use client";

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
const marketingFeatures = [
{
title: "Real-Time Vital Monitoring",
desc: "Measures patient blood pressure and temperature and instantly synchronizes readings with the mobile application.",
size: "col-span-2",
icon: Activity,
},
{
title: "Mobile Healthcare Dashboard",
desc: "Provides doctors and caregivers with instant access to patient data, robot status, and healthcare records from anywhere.",
size: "col-span-1",
icon: Smartphone,
},
{
title: "Facial Recognition Security",
desc: "Medication drawers open only after secure patient verification using advanced facial recognition technology.",
size: "col-span-1",
icon: ScanFace,
},
{
title: "Smart Medication Delivery",
desc: "Stores and dispenses medications securely through automated smart drawers controlled remotely or through patient authentication.",
size: "col-span-2",
icon: Pill,
},
{
title: "Integrated Telemedicine",
desc: "Built-in tablet supports Zoom meetings and live doctor-patient consultations without requiring physical presence.",
size: "col-span-2",
icon: Video,
},
{
title: "Remote Robot Navigation",
desc: "Medical staff can remotely control robot movement while receiving live visual feedback from the onboard camera.",
size: "col-span-1",
icon: Navigation,
},
{
title: "Cloud-Based Control",
desc: "Enables secure remote operation through a centralized server infrastructure for real-time healthcare management.",
size: "col-span-1",
icon: Cloud,
},
{
title: "Bluetooth Backup Mode",
desc: "Automatically switches to Bluetooth communication when internet connectivity is unavailable, ensuring uninterrupted operation.",
size: "col-span-1",
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
  return (
    <section
      id="features"
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-100/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-violet-100/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black tracking-tight text-slate-900">
            Why Choose <span className="text-purple-600">CareGo</span>?
          </h2>

          <p className="text-slate-400 mt-4 font-medium uppercase tracking-[0.25em] text-xs">
            Redefining Quarantine Operations with Automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {marketingFeatures.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {f.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}