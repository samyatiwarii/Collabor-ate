"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, direction = "up", className, once = true }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const dirMap = { up: { y: 24, x: 0 }, down: { y: -24, x: 0 }, left: { x: 32, y: 0 }, right: { x: -32, y: 0 }, none: { x: 0, y: 0 } };
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, ...dirMap[direction] }} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
