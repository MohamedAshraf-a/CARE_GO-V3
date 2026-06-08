"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.main>
  );
}