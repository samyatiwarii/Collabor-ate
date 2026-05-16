import { RequestCard } from "@/components/dashboard/RequestCard";
import { incomingRequests } from "@/data";
import { Badge } from "@/components/ui/Badge";

export default function InfluencerRequests() {
  const pending = incomingRequests.filter((r) => r.status === "pending");
  const accepted = incomingRequests.filter((r) => r.status === "accepted");
  const declined = incomingRequests.filter((r) => r.status === "declined");
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-ink mb-1">Requests</h1>
        <p className="text-sm text-ink-tertiary">Brands that want to collaborate with you</p>
      </div>
      <div className="space-y-8">
        {[{ label: "Pending", items: pending, variant: "warning" as const }, { label: "Accepted", items: accepted, variant: "success" as const }, { label: "Declined", items: declined, variant: "danger" as const }].map(({ label, items, variant }) =>
          items.length > 0 ? (
            <div key={label}>
              <div className="flex items-center gap-2 mb-3">
                <h2 className="font-heading font-semibold text-sm text-ink">{label}</h2>
                <Badge variant={variant}>{items.length}</Badge>
              </div>
              <div className="space-y-3">
                {items.map((req) => <RequestCard key={req.id} request={req} onAccept={() => {}} onDecline={() => {}} />)}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
