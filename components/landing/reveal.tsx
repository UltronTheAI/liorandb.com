"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={`w-full min-w-0 max-w-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`w-full min-w-0 max-w-full ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
