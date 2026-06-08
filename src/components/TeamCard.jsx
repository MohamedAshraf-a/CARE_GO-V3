import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParallaxStrength } from "./useParallaxStrength";

export function TeamCard({ member, onClick }) {
  const { ref, handleMouseMove, reset } = useParallaxStrength(12);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      className="
        relative cursor-pointer group
        rounded-[28px]
        overflow-hidden

        bg-white/70 backdrop-blur-xl
        border border-slate-100

        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-[240px] overflow-hidden">

        <Image
        src={member.image || "/team/default.png"}
  alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* TEXT */}
      <div className="p-4">
        <h3 className="text-sm font-black group-hover:text-purple-600 transition">
          {member.name}
        </h3>

        <p className="text-xs text-purple-500 font-bold mt-1">
          {member.role}
        </p>

        {/* ICONS */}
        <div className="flex gap-3 mt-3">

          <a
            href={member.linkedin}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="
              text-blue-500 hover:text-blue-600
              transition hover:scale-110
            "
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={member.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="
              text-slate-600 hover:text-black
              transition hover:scale-110
            "
          >
            <FaGithub size={18} />
          </a>

        </div>
      </div>

      {/* glow */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition
        bg-gradient-to-br from-purple-100/40 via-transparent to-violet-100/30
      " />
    </motion.div>
  );
}