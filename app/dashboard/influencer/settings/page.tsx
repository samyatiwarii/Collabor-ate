"use client";
import { Toggle } from "@/components/ui/Toggle";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { creators } from "@/data";
import { getNicheColor } from "@/lib/utils";
import { Shield, Instagram } from "lucide-react";

export default function InfluencerSettings() {
  const me = creators[0];
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-ink mb-1">Settings</h1>
        <p className="text-sm text-ink-tertiary">Manage your profile and preferences</p>
      </div>
      <div className="space-y-5">
        <div className="bg-white border border-surface-border rounded-xl p-6">
          <h2 className="font-heading font-semibold text-sm text-ink mb-4">Profile details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input label="Display name" defaultValue={me.name} />
              <Input label="Instagram handle" defaultValue={me.handle} />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-1.5">Bio</label>
              <textarea defaultValue={me.bio} rows={3} className="w-full px-3.5 py-2.5 text-sm border border-surface-border2 rounded-xl bg-white text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Price per reel (₹)" type="number" defaultValue={me.pricePerReel} />
              <Input label="Price per story (₹)" type="number" defaultValue={me.pricePerStory} />
            </div>
            <Input label="Location" defaultValue={me.location} />
          </div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-6">
          <h2 className="font-heading font-semibold text-sm text-ink mb-4">Instagram connection</h2>
          <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <Instagram className="w-5 h-5 text-emerald-600" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-800">Connected — {me.handle}</p>
              <p className="text-xs text-emerald-600">Metrics synced · Last updated today</p>
            </div>
            <Button variant="secondary" size="sm">Reconnect</Button>
          </div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-6">
          <h2 className="font-heading font-semibold text-sm text-ink mb-1">Profile visibility</h2>
          <p className="text-xs text-ink-muted mb-4">Control who can see your full profile and analytics</p>
          <div className="space-y-3">
            {(["Public — anyone can view", "Verified brands only", "Private — invite only"] as const).map((opt, i) => (
              <label key={opt} className="flex items-center gap-3 p-3 border border-surface-border rounded-xl cursor-pointer hover:bg-surface transition-colors">
                <input type="radio" name="visibility" defaultChecked={i === 0} className="text-brand-600" />
                <span className="text-sm text-ink">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-6">
          <h2 className="font-heading font-semibold text-sm text-ink mb-4">Collaboration preferences</h2>
          <div className="space-y-4">
            <Toggle label="Available for collaborations" defaultChecked={me.isAvailable} />
            <Toggle label="Open to barter / gifting collabs" defaultChecked={me.openToBarter} />
            <Toggle label="Open to paid collaborations" defaultChecked={me.openToPaid} />
            <Toggle label="Email notifications for new requests" defaultChecked />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="secondary">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  );
}
