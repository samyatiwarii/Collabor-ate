"use client";
import { cn, formatCurrency, formatDate } from "@/lib/utils";
import type { CollabRequest } from "@/types";
import { StatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Building2, Calendar, DollarSign } from "lucide-react";

export function RequestCard({ request, onAccept, onDecline }: { request: CollabRequest; onAccept?: () => void; onDecline?: () => void; }) {
  return (
    <div className="bg-white border border-surface-border rounded-xl p-4 hover:border-brand-200 transition-all duration-150">
      <div className="flex items-start gap-3">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-heading flex-shrink-0", request.senderColor)}>
          {request.senderInitials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-ink">{request.senderName}</p>
                <StatusBadge status={request.status} />
              </div>
              <p className="text-xs text-ink-muted mt-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3" />{formatDate(request.createdAt)}
              </p>
            </div>
            {request.budget && (
              <div className="flex items-center gap-1 text-sm font-semibold text-ink flex-shrink-0">
                <DollarSign className="w-3.5 h-3.5 text-ink-muted" />
                {formatCurrency(request.budget)}
              </div>
            )}
          </div>
          <p className="text-sm text-ink-secondary mt-2 line-clamp-2">{request.message}</p>
          {request.deliverables && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {request.deliverables.map((d) => (
                <span key={d} className="text-[10px] font-medium bg-surface border border-surface-border px-2 py-0.5 rounded-full text-ink-secondary">{d}</span>
              ))}
            </div>
          )}
          {request.status === "pending" && (
            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="teal" onClick={onAccept}>Accept & connect</Button>
              <Button size="sm" variant="secondary" onClick={onDecline}>Decline</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
