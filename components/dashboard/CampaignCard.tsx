import { cn, formatCurrency, formatDate } from "@/lib/utils";
import type { Campaign } from "@/types";
import { StatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, Calendar, Target } from "lucide-react";

export function CampaignCard({ campaign, onClick }: { campaign: Campaign; onClick?: () => void }) {
  const total = campaign.accepted + campaign.pending + (campaign.applicants - campaign.accepted - campaign.pending);
  return (
    <div onClick={onClick} className="bg-white border border-surface-border rounded-xl p-5 hover:border-brand-300 hover:shadow-card-hover transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-heading font-semibold text-sm text-ink">{campaign.title}</p>
            <StatusBadge status={campaign.status} />
          </div>
          <p className="text-xs text-ink-muted">{campaign.brandName}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-semibold text-ink">{formatCurrency(campaign.budgetMin)}–{formatCurrency(campaign.budgetMax)}</p>
          <p className="text-xs text-ink-muted mt-0.5">budget range</p>
        </div>
      </div>
      <p className="text-sm text-ink-secondary line-clamp-2 mb-4">{campaign.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {campaign.deliverables.map((d) => (
          <span key={d} className="text-[10px] font-medium bg-brand-50 text-brand-700 border border-brand-100 px-2 py-0.5 rounded-full">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4 pt-3 border-t border-surface-border">
        <div className="text-center">
          <p className="font-heading font-bold text-base text-ink">{campaign.applicants}</p>
          <p className="text-[10px] text-ink-muted uppercase tracking-wide">Applicants</p>
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-base text-emerald-600">{campaign.accepted}</p>
          <p className="text-[10px] text-ink-muted uppercase tracking-wide">Accepted</p>
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-base text-amber-500">{campaign.pending}</p>
          <p className="text-[10px] text-ink-muted uppercase tracking-wide">Pending</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-ink-muted">
        <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />Due {formatDate(campaign.deadline)}</div>
        <div className="flex items-center gap-1"><Target className="w-3 h-3" />{campaign.niche}</div>
      </div>
    </div>
  );
}
