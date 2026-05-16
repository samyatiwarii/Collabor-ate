import { MetricCard } from "@/components/ui/MetricCard";
import { RequestCard } from "@/components/dashboard/RequestCard";
import { Button } from "@/components/ui/Button";
import { creators, incomingRequests, analyticsData } from "@/data";
import { Users, TrendingUp, Play, DollarSign, Bell, Star, Shield, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function InfluencerOverview() {
  const me = creators[0];
  const pending = incomingRequests.filter((r) => r.status === "pending");
  const profileCompletion = 82;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Page header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-ink mb-1">Good morning, Priya 👋</h1>
          <p className="text-sm text-ink-tertiary">Here's how your profile is performing</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-9 h-9 rounded-xl bg-white border border-surface-border flex items-center justify-center hover:bg-surface transition-colors">
            <Bell className="w-4 h-4 text-ink-secondary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500" />
          </button>
          <Button size="sm" asChild><Link href="/dashboard/influencer/settings">Edit profile</Link></Button>
        </div>
      </div>

      {/* Profile completion banner */}
      {profileCompletion < 100 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-900">Complete your profile to get more brand requests</p>
              <p className="text-xs text-amber-700 mt-0.5">Profile {profileCompletion}% complete — add portfolio samples to reach 100%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-24 h-1.5 bg-amber-200 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${profileCompletion}%` }} />
            </div>
            <Button size="sm" variant="secondary" asChild>
              <Link href="/dashboard/influencer/profile">Complete</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard label="Followers" value="84.2K" change="+1.2K this week" trend="up" icon={<Users size={14} />} />
        <MetricCard label="Engagement rate" value="8.2%" change="Above avg ↑" trend="up" icon={<TrendingUp size={14} />} />
        <MetricCard label="Avg reel views" value="41K" change="Steady" trend="flat" icon={<Play size={14} />} />
        <MetricCard label="This month" value="₹85K" change="+18% vs last month" trend="up" icon={<DollarSign size={14} />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Requests */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-base text-ink">Incoming requests</h2>
            <Button variant="ghost" size="sm" asChild><Link href="/dashboard/influencer/requests">View all</Link></Button>
          </div>
          <div className="space-y-3">
            {incomingRequests.slice(0, 3).map((req) => (
              <RequestCard key={req.id} request={req} onAccept={() => {}} onDecline={() => {}} />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Creator stats */}
          <div className="bg-white border border-surface-border rounded-xl p-5">
            <h3 className="font-heading font-semibold text-sm text-ink mb-4">Creator profile</h3>
            <div className="space-y-3">
              {[
                { label: "Trust score", value: me.trustScore + "/100", color: "bg-brand-500", pct: me.trustScore },
                { label: "Response rate", value: me.responseRate + "%", color: "bg-emerald-500", pct: me.responseRate },
                { label: "Profile completion", value: profileCompletion + "%", color: "bg-amber-500", pct: profileCompletion },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-ink-secondary">{s.label}</span>
                    <span className="font-medium text-ink">{s.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified badge */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-brand-600" />
              <p className="text-sm font-semibold text-brand-800">Verified Creator</p>
            </div>
            <p className="text-xs text-brand-600 leading-relaxed">Your Instagram is connected and metrics are verified. Brands see your real analytics.</p>
          </div>

          {/* Past brands */}
          <div className="bg-white border border-surface-border rounded-xl p-5">
            <h3 className="font-heading font-semibold text-sm text-ink mb-3">Past collaborations</h3>
            <div className="flex flex-wrap gap-2">
              {me.pastBrands.map((brand) => (
                <span key={brand} className="text-xs bg-surface border border-surface-border px-3 py-1 rounded-full text-ink-secondary">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
