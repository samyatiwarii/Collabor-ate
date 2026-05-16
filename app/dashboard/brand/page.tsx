import { MetricCard } from "@/components/ui/MetricCard";
import { CampaignCard } from "@/components/dashboard/CampaignCard";
import { Button } from "@/components/ui/Button";
import { campaigns, creators } from "@/data";
import { Briefcase, Users, TrendingUp, DollarSign, Plus, Bell } from "lucide-react";
import Link from "next/link";

export default function BrandOverview() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-ink mb-1">Good morning, Mamaearth 👋</h1>
          <p className="text-sm text-ink-tertiary">Here's your campaign overview</p>
        </div>
        <div className="flex gap-2">
          <button className="relative w-9 h-9 rounded-xl bg-white border border-surface-border flex items-center justify-center hover:bg-surface transition-colors">
            <Bell className="w-4 h-4 text-ink-secondary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500" />
          </button>
          <Button size="sm" asChild><Link href="/dashboard/brand/campaigns"><Plus className="w-3.5 h-3.5" />New campaign</Link></Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard label="Active campaigns" value="4" change="+1 this week" trend="up" icon={<Briefcase size={14} />} />
        <MetricCard label="Creators reached" value="28" change="This month" trend="flat" icon={<Users size={14} />} />
        <MetricCard label="Avg engagement" value="7.8%" change="+0.4% vs last batch" trend="up" icon={<TrendingUp size={14} />} />
        <MetricCard label="Total spent" value="₹2.4L" change="This quarter" trend="flat" icon={<DollarSign size={14} />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-base text-ink">Active campaigns</h2>
            <Button variant="ghost" size="sm" asChild><Link href="/dashboard/brand/campaigns">View all</Link></Button>
          </div>
          <div className="space-y-4">
            {campaigns.map((c) => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white border border-surface-border rounded-xl p-5">
            <h3 className="font-heading font-semibold text-sm text-ink mb-4">Suggested creators</h3>
            <div className="space-y-3">
              {creators.filter((c) => c.isAvailable).slice(0, 4).map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-xs font-bold font-heading flex-shrink-0`}>{c.initials}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{c.name}</p>
                    <p className="text-xs text-ink-muted">{c.niches[0]} · {c.engagementRate}% ER</p>
                  </div>
                  <Button size="sm" variant="secondary" asChild><Link href="/dashboard/brand/discovery">View</Link></Button>
                </div>
              ))}
            </div>
            <Button variant="secondary" fullWidth size="sm" className="mt-4" asChild>
              <Link href="/dashboard/brand/discovery">Browse all creators →</Link>
            </Button>
          </div>

          <div className="bg-white border border-surface-border rounded-xl p-5">
            <h3 className="font-heading font-semibold text-sm text-ink mb-3">Quick stats</h3>
            <div className="space-y-2">
              {[["Pending replies", "7"], ["Accepted this month", "5"], ["Posts submitted", "12"], ["Avg collab cost", "₹22K"]].map(([l, v]) => (
                <div key={l} className="flex justify-between text-sm">
                  <span className="text-ink-tertiary">{l}</span>
                  <span className="font-medium text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
