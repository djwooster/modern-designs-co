"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroDevice() {
  return (
    <motion.div
      className="w-full mt-50 overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease }}
    >
      <motion.div
        animate={{ scale: 1.06 }}
        initial={{ scale: 1 }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/hero-img.png"
          alt="Hero"
          width={4500}
          height={3000}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
