"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-12 flex items-center justify-between transition-all duration-300", scrolled && "bg-white/90 backdrop-blur-xl border-b border-surface-border shadow-sm")}>
      <Link href="/" className="font-heading text-lg font-bold text-ink tracking-tight">
        collabor<span className="text-brand-600">·</span>ate
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#how-it-works" className="text-sm text-ink-secondary hover:text-ink transition-colors">How it works</Link>
        <Link href="#creators" className="text-sm text-ink-secondary hover:text-ink transition-colors">For creators</Link>
        <Link href="#brands" className="text-sm text-ink-secondary hover:text-ink transition-colors">For brands</Link>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild><Link href="/auth/login">Sign in</Link></Button>
        <Button size="sm" asChild><Link href="/auth/signup">Get started →</Link></Button>
      </div>
      <button className="md:hidden p-2 rounded-lg hover:bg-surface" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-surface-border shadow-lg p-4 flex flex-col gap-3 md:hidden">
          <Link href="#how-it-works" className="text-sm py-2 text-ink-secondary">How it works</Link>
          <Link href="/auth/login" className="text-sm py-2 text-ink-secondary">Sign in</Link>
          <Button size="sm" fullWidth asChild><Link href="/auth/signup">Get started →</Link></Button>
        </div>
      )}
    </nav>
  );
}
