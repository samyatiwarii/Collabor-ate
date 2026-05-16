import { cn, formatNumber, formatCurrency, getNicheColor } from "@/lib/utils";
import type { Creator } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Shield, Star, MapPin, Lock } from "lucide-react";

interface CreatorCardProps {
  creator: Creator;
  onViewProfile?: () => void;
  onSendProposal?: () => void;
}

export function CreatorCard({ creator, onViewProfile, onSendProposal }: CreatorCardProps) {
  const isRestricted = creator.visibility === "private";
  return (
    <div className={cn("bg-white border border-surface-border rounded-xl overflow-hidden transition-all duration-200 hover:border-brand-300 hover:shadow-card-hover group")}>
      {/* Header strip */}
      <div className={cn("h-1.5 w-full bg-gradient-to-r", creator.gradient)} />
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <Avatar initials={creator.initials} gradient={creator.gradient} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-heading font-semibold text-sm text-ink truncate">{creator.name}</p>
              {creator.isVerified && <Shield className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />}
            </div>
            <p className="text-xs text-ink-muted">{creator.handle}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-ink-muted" />
              <p className="text-xs text-ink-muted">{creator.location}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {creator.isAvailable ? (
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Available</span>
            ) : (
              <span className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">Booked</span>
            )}
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-medium text-ink">{creator.rating}</span>
            </div>
          </div>
        </div>

        {/* Niches */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {creator.niches.slice(0, 3).map((n) => (
            <span key={n} className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", getNicheColor(n))}>{n}</span>
          ))}
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Followers", value: formatNumber(creator.followers) },
            { label: "Eng. rate", value: creator.engagementRate + "%" },
            { label: "Avg views", value: isRestricted ? "—" : formatNumber(creator.avgReelViews) },
          ].map((m) => (
            <div key={m.label} className="bg-surface rounded-lg px-2.5 py-2 text-center">
              <p className="font-heading font-bold text-sm text-ink">{m.value}</p>
              <p className="text-[9px] text-ink-muted uppercase tracking-wide mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Trust score */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <div className="text-xs text-ink-muted">Trust score</div>
            <div className="flex-1 w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${creator.trustScore}%` }} />
            </div>
            <span className="text-xs font-medium text-ink">{creator.trustScore}</span>
          </div>
          {creator.visibility === "verified_only" && (
            <div className="flex items-center gap-1 text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">
              <Lock className="w-2.5 h-2.5" />
              Verified only
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-surface-border">
          <div>
            <p className="text-xs text-ink-muted">Starting from</p>
            <p className="text-sm font-semibold text-ink">{formatCurrency(creator.pricePerReel)}<span className="text-xs font-normal text-ink-muted"> / reel</span></p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={onViewProfile}>View profile</Button>
            <Button size="sm" onClick={onSendProposal}>Request collab</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
