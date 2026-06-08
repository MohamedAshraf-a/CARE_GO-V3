import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* BRAND */}
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          CareGo <span className="text-purple-600">Robotics</span>
        </h2>

        <p className="text-slate-500 text-sm mt-3 font-medium">
          Empowering Healthcare through AI, Robotics & IoT
        </p>

        {/* ICON LINKS */}
        <div className="flex justify-center gap-6 mt-10">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
          >
            <FaLinkedin size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 hover:bg-slate-100 transition"
          >
            <FaGithub size={18} />
          </a>

          {/* Documentation */}
          <a
            href="#"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition"
          >
            <DocumentTextIcon className="w-5 h-5" />
          </a>

          {/* Contact */}
          <a
            href="mailto:example@gmail.com"
            className="p-3 rounded-2xl border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 transition"
          >
            <EnvelopeIcon className="w-5 h-5" />
          </a>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-slate-100 pt-8">

          <p className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            © 2026 CareGo Team • Graduation Project • All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}