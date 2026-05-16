"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "teal";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, fullWidth, children, disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
      primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-button active:scale-[0.98]",
      secondary: "bg-white text-ink border border-surface-border2 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50 focus:ring-brand-400",
      ghost: "text-ink-secondary hover:text-ink hover:bg-surface focus:ring-brand-400",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      teal: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded-lg h-8",
      md: "text-sm px-4 py-2 rounded-xl h-9",
      lg: "text-sm px-6 py-2.5 rounded-xl h-11",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        {...props}
      >
        {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
