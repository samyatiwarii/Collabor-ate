"use client";
import { useState, useMemo } from "react";
import { creators } from "@/data";
import { CreatorCard } from "@/components/discovery/CreatorCard";
import { Input } from "@/components/ui/Input";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const niches = ["All", "Fitness", "Beauty", "Fashion", "Food", "Lifestyle", "Travel"];
const followerRanges = [
  { label: "Any", min: 0, max: Infinity },
  { label: "Micro (10K–50K)", min: 10000, max: 50000 },
  { label: "Mid (50K–200K)", min: 50000, max: 200000 },
  { label: "Macro (200K+)", min: 200000, max: Infinity },
];

export default function BrandDiscovery() {
  const [search, setSearch] = useState("");
  const [niche, setNiche] = useState("All");
  const [followerRange, setFollowerRange] = useState(0);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const range = followerRanges[followerRange];
    return creators.filter((c) => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.handle.toLowerCase().includes(search.toLowerCase())) return false;
      if (niche !== "All" && !c.niches.includes(niche)) return false;
      if (c.followers < range.min || c.followers > range.max) return false;
      if (availableOnly && !c.isAvailable) return false;
      if (maxPrice && c.pricePerReel > Number(maxPrice)) return false;
      return true;
    });
  }, [search, niche, followerRange, availableOnly, maxPrice]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-ink mb-1">Discover creators</h1>
        <p className="text-sm text-ink-tertiary">Find the perfect match for your next campaign</p>
      </div>

      {/* Search + filter bar */}
      <div className="flex gap-3 mb-5">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or handle..." className="w-full h-10 pl-10 pr-4 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className={cn("flex items-center gap-2 px-4 h-10 rounded-xl border text-sm font-medium transition-all", showFilters ? "bg-brand-600 text-white border-brand-600" : "bg-white border-surface-border2 text-ink-secondary hover:border-brand-300")}>
          <SlidersHorizontal className="w-4 h-4" />Filters
        </button>
      </div>

      {/* Niche chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {niches.map((n) => (
          <button key={n} onClick={() => setNiche(n)} className={cn("px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all", niche === n ? "bg-brand-600 text-white border-brand-600 shadow-sm" : "bg-white border-surface-border2 text-ink-secondary hover:border-brand-300 hover:text-brand-600")}>{n}</button>
        ))}
      </div>

      {/* Extended filters */}
      {showFilters && (
        <div className="bg-white border border-surface-border rounded-xl p-5 mb-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-ink-secondary mb-1.5">Followers</label>
            <select value={followerRange} onChange={(e) => setFollowerRange(Number(e.target.value))} className="w-full h-9 px-3 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400">
              {followerRanges.map((r, i) => <option key={r.label} value={i}>{r.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-ink-secondary mb-1.5">Max price / reel (₹)</label>
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="e.g. 25000" className="w-full h-9 px-3 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400" />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} className="rounded" />
              <span className="text-sm text-ink-secondary">Available only</span>
            </label>
          </div>
          <div className="flex items-end">
            <button onClick={() => { setNiche("All"); setFollowerRange(0); setMaxPrice(""); setAvailableOnly(false); }} className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors">
              <X className="w-3.5 h-3.5" />Clear filters
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-tertiary">{filtered.length} creator{filtered.length !== 1 ? "s" : ""} found</p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-ink-muted">
          <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-heading font-semibold text-ink-secondary">No creators found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((c) => <CreatorCard key={c.id} creator={c} onViewProfile={() => {}} onSendProposal={() => {}} />)}
        </div>
      )}
    </div>
  );
}
