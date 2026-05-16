import { cn } from "@/lib/utils";

interface CardProps { children: React.ReactNode; className?: string; hover?: boolean; onClick?: () => void; }

export function Card({ children, className, hover, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={cn("bg-white border border-surface-border rounded-xl", hover && "transition-all duration-200 cursor-pointer hover:border-brand-300 hover:shadow-card-hover", onClick && "cursor-pointer", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-5 py-4 border-b border-surface-border", className)}>{children}</div>;
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-5 py-4", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-5 py-3 border-t border-surface-border bg-surface rounded-b-xl", className)}>{children}</div>;
}
