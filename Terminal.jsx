"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Terminal() {
  const [logs, setLogs] = useState(["[SYS] CareGo Protocol Initialized..."]);

  useEffect(() => {
    const messages = [
      "PACKET RECEIVED: TCP/IP Port 8080",
      "BIOMETRIC SYNC: SpO2 98%",
      "AI_MODULE: Object 'Medicine_Bottle' detected",
      "ROUTE_UPDATE: OSPF Path Recomputed",
      "ENCRYPTION: AES Handshake Successful"
    ];
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), `[DATA] ${messages[Math.floor(Math.random()*messages.length)]}`]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="bg-slate-800 px-6 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 ml-4 uppercase tracking-widest font-bold">System_Monitor.exe</span>
          </div>
          <div className="p-8 font-mono text-sm space-y-2 h-64">
            {logs.map((log, i) => (
              <motion.p 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                key={i} 
                className={log.includes("SYS") ? "text-purple-400" : "text-emerald-400"}
              >
                <span className="text-slate-600">{"> "}</span> {log}
              </motion.p>
            ))}
            <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-purple-500 align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
}