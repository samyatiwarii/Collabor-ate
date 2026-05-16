import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, icon, ...props }, ref) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-ink-secondary mb-1.5">{label}</label>}
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted">{icon}</div>}
      <input
        ref={ref}
        className={cn("w-full h-10 px-3.5 text-sm border rounded-xl bg-white text-ink placeholder-ink-muted outline-none transition-all duration-150", "border-surface-border2 focus:border-brand-400 focus:ring-2 focus:ring-brand-100", icon && "pl-10", error && "border-red-400 focus:border-red-400 focus:ring-red-100", className)}
        {...props}
      />
    </div>
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
));
Input.displayName = "Input";
export { Input };
