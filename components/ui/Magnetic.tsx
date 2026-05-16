"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps { children: React.ReactNode; strength?: number; className?: string; }

export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({ x: (e.clientX - rect.left - rect.width / 2) * strength, y: (e.clientY - rect.top - rect.height / 2) * strength });
  };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => setPos({ x: 0, y: 0 })} animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }} className={className}>
      {children}
    </motion.div>
  );
}
