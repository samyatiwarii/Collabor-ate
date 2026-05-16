"use client";
import { MetricCard } from "@/components/ui/MetricCard";
import { analyticsData } from "@/data";
import { Users, TrendingUp, Play, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function InfluencerAnalytics() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-ink mb-1">Analytics</h1>
        <p className="text-sm text-ink-tertiary">Your Instagram performance over the last 6 months</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard label="Followers" value="84.2K" change="+1.2K this week" trend="up" icon={<Users size={14} />} />
        <MetricCard label="Engagement rate" value="8.2%" change="Above average" trend="up" icon={<TrendingUp size={14} />} />
        <MetricCard label="Avg reel views" value="41K" change="Steady" trend="flat" icon={<Play size={14} />} />
        <MetricCard label="Monthly earnings" value="₹85K" change="+18% vs last month" trend="up" icon={<DollarSign size={14} />} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {[
          { title: "Followers growth", data: analyticsData.followers, key: "value", color: "#4f46e5", fmt: (v: number) => `${(v / 1000).toFixed(0)}K` },
          { title: "Engagement rate %", data: analyticsData.engagementRate, key: "value", color: "#10b981", fmt: (v: number) => `${v}%` },
          { title: "Avg reel views", data: analyticsData.reelViews, key: "value", color: "#f59e0b", fmt: (v: number) => `${(v / 1000).toFixed(0)}K` },
          { title: "Monthly earnings (₹)", data: analyticsData.earnings, key: "value", color: "#8b5cf6", fmt: (v: number) => `₹${(v / 1000).toFixed(0)}K` },
        ].map((chart) => (
          <div key={chart.title} className="bg-white border border-surface-border rounded-xl p-5">
            <h3 className="font-heading font-semibold text-sm text-ink mb-4">{chart.title}</h3>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f8" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9291a5" }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={chart.fmt} tick={{ fontSize: 11, fill: "#9291a5" }} axisLine={false} tickLine={false} width={40} />
                <Tooltip formatter={(v: number) => chart.fmt(v)} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e8e8f2" }} />
                <Line type="monotone" dataKey="value" stroke={chart.color} strokeWidth={2} dot={{ r: 3, fill: chart.color }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
