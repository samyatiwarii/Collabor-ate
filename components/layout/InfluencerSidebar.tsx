"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Inbox, Briefcase, BarChart2, Bookmark, Settings, LogOut, DollarSign, MessageSquare, User } from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/influencer" },
  { label: "Requests", icon: Inbox, href: "/dashboard/influencer/requests", badge: 3 },
  { label: "Campaigns", icon: Briefcase, href: "/dashboard/influencer/campaigns" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/influencer/messages", badge: 2 },
  { label: "Earnings", icon: DollarSign, href: "/dashboard/influencer/earnings" },
  { label: "Analytics", icon: BarChart2, href: "/dashboard/influencer/analytics" },
  { label: "Saved Brands", icon: Bookmark, href: "/dashboard/influencer/saved" },
];
const bottomItems = [
  { label: "Profile", icon: User, href: "/dashboard/influencer/profile" },
  { label: "Settings", icon: Settings, href: "/dashboard/influencer/settings" },
];

export function InfluencerSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[220px] flex-shrink-0 bg-white border-r border-surface-border h-screen sticky top-0 flex flex-col">
      <div className="h-16 px-5 flex items-center border-b border-surface-border">
        <Link href="/" className="font-heading text-base font-bold text-ink">
          collabor<span className="text-brand-600">·</span>ate
        </Link>
      </div>
      <div className="px-4 py-4 border-b border-surface-border">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-50 border border-brand-100">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-heading">PA</div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink truncate">Priya Arora</p>
            <p className="text-xs text-brand-600 font-medium">Creator</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-3 overflow-y-auto">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted px-2 mb-2">Menu</p>
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} className={cn("flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-150", active ? "bg-brand-600 text-white font-medium shadow-sm" : "text-ink-secondary hover:bg-surface hover:text-ink")}>
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", active ? "bg-white/20 text-white" : "bg-brand-100 text-brand-600")}>{item.badge}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="px-3 pb-4 border-t border-surface-border pt-3">
        {bottomItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-ink-secondary hover:bg-surface hover:text-ink transition-all duration-150">
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
        <Link href="/" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-ink-secondary hover:bg-surface hover:text-ink transition-all duration-150 mt-0.5">
          <LogOut className="w-4 h-4" /><span>Sign out</span>
        </Link>
      </div>
    </aside>
  );
}
