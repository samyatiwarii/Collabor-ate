import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "flat";
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ label, value, change, trend, icon, className }: MetricCardProps) {
  return (
    <div className={cn("bg-white border border-surface-border rounded-xl p-4", className)}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-ink-muted uppercase tracking-wide">{label}</p>
        {icon && <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">{icon}</div>}
      </div>
      <p className="font-heading text-2xl font-bold text-ink tracking-tight">{value}</p>
      {change && (
        <div className={cn("flex items-center gap-1 mt-1.5 text-xs font-medium", trend === "up" && "text-emerald-600", trend === "down" && "text-red-500", trend === "flat" && "text-ink-muted")}>
          {trend === "up" && <TrendingUp className="w-3 h-3" />}
          {trend === "down" && <TrendingDown className="w-3 h-3" />}
          {trend === "flat" && <Minus className="w-3 h-3" />}
          {change}
        </div>
      )}
    </div>
  );
}
