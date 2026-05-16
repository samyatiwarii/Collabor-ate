import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  gradient?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = { sm: "w-8 h-8 text-xs rounded-lg", md: "w-10 h-10 text-sm rounded-xl", lg: "w-12 h-12 text-base rounded-xl", xl: "w-16 h-16 text-xl rounded-2xl" };

export function Avatar({ initials, gradient = "from-brand-500 to-brand-700", size = "md", className }: AvatarProps) {
  return (
    <div className={cn("flex-shrink-0 flex items-center justify-center font-heading font-bold text-white bg-gradient-to-br", gradient, sizes[size], className)}>
      {initials}
    </div>
  );
}
