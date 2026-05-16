import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-brand-50 text-brand-700 border border-brand-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    danger: "bg-red-50 text-red-700 border border-red-200",
    neutral: "bg-gray-50 text-gray-600 border border-gray-200",
  };
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full", variants[variant], className)}>
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: "pending" | "accepted" | "declined" | "active" | "completed" | "draft" | "paused" }) {
  const map = {
    pending: { variant: "warning" as const, label: "Pending" },
    accepted: { variant: "success" as const, label: "Accepted" },
    declined: { variant: "danger" as const, label: "Declined" },
    active: { variant: "success" as const, label: "Active" },
    completed: { variant: "neutral" as const, label: "Completed" },
    draft: { variant: "neutral" as const, label: "Draft" },
    paused: { variant: "warning" as const, label: "Paused" },
  };
  const { variant, label } = map[status];
  return <Badge variant={variant}>{label}</Badge>;
}
