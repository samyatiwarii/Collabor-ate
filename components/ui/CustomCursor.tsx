"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const addHover = () => {
      document.querySelectorAll("button,a,input,select,textarea,label,[data-cursor='pointer']").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    addHover();
    raf.current = requestAnimationFrame(animate);
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{ mixBlendMode: "multiply" }}
        className={cn("fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,opacity,background] duration-150",
          hidden ? "opacity-0" : "opacity-100",
          clicked ? "w-2 h-2 bg-brand-400" : hovering ? "w-3 h-3 bg-brand-500" : "w-2.5 h-2.5 bg-brand-600")} />
      <div ref={ringRef}
        className={cn("fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,opacity] duration-300",
          hidden ? "opacity-0" : "opacity-40",
          hovering ? "w-10 h-10 border-brand-400 opacity-60" : "w-7 h-7 border-brand-500")} />
    </>
  );
}
