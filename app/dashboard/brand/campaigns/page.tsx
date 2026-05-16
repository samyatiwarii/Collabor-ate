"use client";
import { useState } from "react";
import { campaigns } from "@/data";
import { CampaignCard } from "@/components/dashboard/CampaignCard";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export default function BrandCampaigns() {
  const [showCreate, setShowCreate] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "draft" | "completed">("all");

  const filtered = filter === "all" ? campaigns : campaigns.filter((c) => c.status === filter);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-ink mb-1">Campaigns</h1>
          <p className="text-sm text-ink-tertiary">Manage and track your influencer campaigns</p>
        </div>
        <Button onClick={() => setShowCreate(true)}><Plus className="w-3.5 h-3.5" />New campaign</Button>
      </div>

      {/* Create campaign modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-modal">
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border">
              <h2 className="font-heading font-bold text-base text-ink">Create campaign</h2>
              <button onClick={() => setShowCreate(false)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-surface text-ink-muted transition-colors"><X className="w-4 h-4" /></button>
            </div>
            <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <Input label="Campaign title" placeholder="e.g. Summer Glow Campaign" />
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1.5">Description</label>
                <textarea rows={3} placeholder="What's this campaign about? What kind of content do you need?" className="w-full px-3.5 py-2.5 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-ink-secondary mb-1.5">Niche</label>
                  <select className="w-full h-10 px-3 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400">
                    {["Beauty", "Fitness", "Fashion", "Food", "Lifestyle", "Travel"].map((n) => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <Input label="Deadline" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Min budget (₹)" type="number" placeholder="10000" />
                <Input label="Max budget (₹)" type="number" placeholder="50000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Deliverables</label>
                <div className="flex flex-wrap gap-2">
                  {["Instagram Reels", "Stories", "UGC Video", "Product Review", "Blog Post"].map((d) => (
                    <label key={d} className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input type="checkbox" className="rounded" />{d}
                    </label>
                  ))}
                </div>
              </div>
              <Input label="Target audience" placeholder="e.g. Women 22–35, urban India" />
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-surface-border">
              <Button variant="secondary" onClick={() => setShowCreate(false)}>Cancel</Button>
              <Button fullWidth onClick={() => setShowCreate(false)}>Create campaign</Button>
            </div>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex gap-1 mb-6 bg-surface p-1 rounded-xl w-fit">
        {(["all", "active", "draft", "completed"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all", filter === f ? "bg-white text-ink shadow-card" : "text-ink-muted hover:text-ink")}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((c) => <CampaignCard key={c.id} campaign={c} />)}
      </div>
    </div>
  );
}
