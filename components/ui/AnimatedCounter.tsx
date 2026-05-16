"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps { value: number; suffix?: string; prefix?: string; duration?: number; decimals?: number; }

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1800, decimals = 0 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(parseFloat((eased * value).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, decimals]);
  return <span ref={ref}>{prefix}{display.toFixed(decimals)}{suffix}</span>;
}
