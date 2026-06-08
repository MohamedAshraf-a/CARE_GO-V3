  "use client";
  import { motion } from "framer-motion";

  import {
    ShieldCheckIcon,
    ChartBarIcon,
    CpuChipIcon,
    ChatBubbleLeftRightIcon,
  } from "@heroicons/react/24/outline";

  const marketingFeatures = [
    { 
      title: "Zero-Contact Safety", 
      desc: "Eliminates cross-contamination by handling routine checks automatically, reducing medical staff exposure risks by up to 90%.", 
      size: "col-span-2", 
      icon: ShieldCheckIcon 
    },
    { 
      title: "Real-Time Bio-Link", 
      desc: "Continuous, non-stop vital telemetry (SpO2, HR, Temp) streamed straight to clinician dashboards.", 
      size: "col-span-1", 
      icon: ChartBarIcon 
    },
    { 
      title: "AI-Verified Dispensing", 
      desc: "Utilizes MobileNetV2 facial recognition to ensure medications and supplies are only delivered to verified patients.", 
      size: "col-span-1", 
      icon: CpuChipIcon 
    },
    { 
      title: "Telemedicine Window", 
      desc: "Integrated two-way audio and live video streams connect isolated patients with doctors and families seamlessly.", 
      size: "col-span-2", 
      icon: ChatBubbleLeftRightIcon 
    },
  ];

  export default function Features() {
    return (
      <section id="features" className="py-32 bg-white relative overflow-hidden">

        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-100/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-violet-100/20 blur-[160px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tight text-slate-900">
              Why Choose <span className="text-purple-600">CareGo</span>?
            </h2>

            <p className="text-slate-400 mt-4 font-medium uppercase tracking-[0.25em] text-xs">
              Redefining Quarantine Operations with Automation
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {marketingFeatures.map((f, i) => {
              const Icon = f.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}

                  className={`
                    ${f.size} group relative p-10 rounded-[2.5rem]

                    bg-white/60 backdrop-blur-xl

                    border border-slate-100

                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]

                    transition-all duration-300 ease-out

                    hover:shadow-[0_25px_60px_rgba(168,85,247,0.12)]
                    hover:border-purple-100
                  `}
                >

                  {/* ICON */}
                  <div className="
                    relative w-12 h-12 mb-6
                    flex items-center justify-center
                    rounded-2xl bg-purple-50
                    text-purple-600

                    transition-all duration-300
                    group-hover:bg-purple-100
                    group-hover:scale-105
                  ">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="
                    relative text-xl font-bold text-slate-900 mb-2
                    group-hover:text-purple-600
                    transition-colors
                  ">
                    {f.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative text-slate-500 text-sm leading-relaxed font-medium">
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