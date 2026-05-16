"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ToggleProps { label: string; description?: string; defaultChecked?: boolean; onChange?: (checked: boolean) => void; }

export function Toggle({ label, description, defaultChecked = false, onChange }: ToggleProps) {
  const [on, setOn] = useState(defaultChecked);
  const toggle = () => { const n = !on; setOn(n); onChange?.(n); };
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {description && <p className="text-xs text-ink-muted mt-0.5">{description}</p>}
      </div>
      <button onClick={toggle} role="switch" aria-checked={on}
        className={cn("relative flex-shrink-0 rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2", on ? "bg-brand-600" : "bg-gray-200")}
        style={{ width: 44, height: 24 }}>
        <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }} className="block w-5 h-5 bg-white rounded-full shadow-md" style={{ marginLeft: on ? "auto" : 0 }} />
      </button>
    </div>
  );
}
