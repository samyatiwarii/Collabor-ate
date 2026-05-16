"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toggle } from "@/components/ui/Toggle";
import Link from "next/link";
import { Instagram, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const niches = ["Fitness", "Beauty", "Fashion", "Food", "Lifestyle", "Travel", "Tech", "Gaming", "Wellness", "Parenting", "Finance", "Sports"];
const steps = ["Connect Instagram", "Your profile", "Preferences", "Go live"];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [igConnected, setIgConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  const connectIG = () => {
    setConnecting(true);
    setTimeout(() => { setConnecting(false); setIgConnected(true); }, 1600);
  };

  const toggleNiche = (n: string) => setSelectedNiches((prev) => prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading font-bold text-lg text-ink">collabor<span className="text-brand-600">·</span>ate</Link>
          <p className="text-sm text-ink-tertiary mt-2">Creator onboarding</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all", i < step ? "bg-brand-600 text-white" : i === step ? "bg-brand-600 text-white ring-2 ring-brand-200" : "bg-gray-200 text-ink-muted")}>
                {i < step ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={cn("text-xs hidden sm:block", i === step ? "text-brand-600 font-medium" : "text-ink-muted")}>{s}</span>
              {i < steps.length - 1 && <div className={cn("flex-1 h-px", i < step ? "bg-brand-300" : "bg-gray-200")} />}
            </div>
          ))}
        </div>

        <div className="bg-white border border-surface-border rounded-2xl overflow-hidden">
          {/* Step 0: Connect Instagram */}
          {step === 0 && (
            <div className="p-7">
              <h2 className="font-heading text-xl font-bold text-ink mb-2">Connect Instagram</h2>
              <p className="text-sm text-ink-tertiary mb-6">We pull your metrics automatically via OAuth — nothing to enter manually.</p>
              {!igConnected ? (
                <button onClick={connectIG} disabled={connecting} className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-200 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm text-ink">{connecting ? "Connecting..." : "Connect your Instagram"}</p>
                    <p className="text-xs text-ink-muted">Authorize via Instagram OAuth — read-only access</p>
                  </div>
                </button>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div><p className="text-sm font-semibold text-emerald-800">@priyaarora connected</p><p className="text-xs text-emerald-600">Metrics pulled successfully</p></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[["128K", "Followers"], ["8.2%", "Eng. rate"], ["62K", "Avg views"]].map(([v, l]) => (
                      <div key={l} className="bg-white rounded-lg p-2.5 text-center border border-emerald-100">
                        <p className="font-heading font-bold text-sm text-ink">{v}</p>
                        <p className="text-[10px] text-ink-muted uppercase tracking-wide mt-0.5">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 1: Profile */}
          {step === 1 && (
            <div className="p-7 space-y-4">
              <h2 className="font-heading text-xl font-bold text-ink mb-1">Your creator profile</h2>
              <p className="text-sm text-ink-tertiary mb-4">Tell brands who you are and what you create.</p>
              <Input label="Display name" placeholder="Priya Arora" />
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1.5">Bio</label>
                <textarea rows={3} placeholder="Tell brands about yourself and the kind of content you create..." className="w-full px-3.5 py-2.5 text-sm border border-surface-border2 rounded-xl bg-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Select your niches</label>
                <div className="grid grid-cols-3 gap-2">
                  {niches.map((n) => (
                    <button key={n} onClick={() => toggleNiche(n)} className={cn("px-3 py-2 rounded-xl text-xs font-medium border transition-all", selectedNiches.includes(n) ? "bg-brand-50 border-brand-400 text-brand-700" : "bg-surface border-surface-border text-ink-secondary hover:border-brand-200")}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Price per reel (₹)" type="number" placeholder="18000" />
                <Input label="Price per story (₹)" type="number" placeholder="6000" />
              </div>
              <Input label="Location" placeholder="Mumbai, India" />
            </div>
          )}

          {/* Step 2: Preferences */}
          {step === 2 && (
            <div className="p-7 space-y-4">
              <h2 className="font-heading text-xl font-bold text-ink mb-1">Preferences</h2>
              <p className="text-sm text-ink-tertiary mb-4">Set your availability and visibility settings.</p>
              <div className="space-y-3">
                <Toggle label="Available for collaborations" description="Brands can send you requests" defaultChecked />
                <Toggle label="Open to barter / gifting collabs" description="Accept product-based compensation" defaultChecked />
                <Toggle label="Open to paid collaborations" defaultChecked />
                <Toggle label="Email notifications for requests" defaultChecked />
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium text-ink-secondary mb-2">Profile visibility</p>
                <div className="space-y-2">
                  {["Public — anyone can discover you", "Verified brands only", "Private — invite only"].map((opt, i) => (
                    <label key={opt} className="flex items-center gap-3 p-3 border border-surface-border rounded-xl cursor-pointer hover:bg-surface">
                      <input type="radio" name="vis" defaultChecked={i === 0} className="text-brand-600" /><span className="text-sm text-ink">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <div className="p-7 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-brand-600" />
              </div>
              <h2 className="font-heading text-xl font-bold text-ink mb-2">You're live on collabor·ate 🎉</h2>
              <p className="text-sm text-ink-tertiary mb-6">Your profile is active. Brands can now discover and reach out to you.</p>
              <div className="bg-surface border border-surface-border rounded-xl p-4 text-left mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold font-heading">PA</div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-ink">Priya Arora</p>
                    <p className="text-xs text-ink-muted">@priyaarora · Fitness · Mumbai</p>
                  </div>
                </div>
              </div>
              <Button fullWidth size="lg" asChild><Link href="/dashboard/influencer">Go to dashboard →</Link></Button>
            </div>
          )}

          {/* Footer nav */}
          {step < 3 && (
            <div className="flex gap-3 px-7 py-5 border-t border-surface-border">
              {step > 0 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Back</Button>}
              <Button fullWidth={step === 0} className={step > 0 ? "flex-1" : ""} onClick={() => setStep(step + 1)} disabled={step === 0 && !igConnected}>
                {step === 2 ? "Complete setup →" : "Continue →"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
