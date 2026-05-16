import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading font-bold text-lg text-ink">collabor<span className="text-brand-600">·</span>ate</Link>
          <h1 className="font-heading text-2xl font-bold text-ink mt-4 mb-1">Create your account</h1>
          <p className="text-sm text-ink-tertiary">Choose how you want to use the platform</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: "I'm a creator", sub: "Influencer or UGC creator", icon: "📸", href: "/onboarding" },
            { label: "I'm a brand", sub: "Company or agency", icon: "🏢", href: "/dashboard/brand" },
          ].map((opt) => (
            <Link key={opt.label} href={opt.href} className="group bg-white border border-surface-border2 rounded-xl p-5 text-center hover:border-brand-400 hover:bg-brand-50 transition-all duration-150 cursor-pointer">
              <div className="text-2xl mb-2">{opt.icon}</div>
              <p className="font-heading font-semibold text-sm text-ink group-hover:text-brand-700">{opt.label}</p>
              <p className="text-xs text-ink-muted mt-0.5">{opt.sub}</p>
            </Link>
          ))}
        </div>
        <form className="bg-white border border-surface-border rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input label="First name" placeholder="Priya" />
            <Input label="Last name" placeholder="Arora" />
          </div>
          <Input label="Email" type="email" placeholder="you@company.com" />
          <Input label="Password" type="password" placeholder="Min 8 characters" />
          <Button fullWidth size="lg" asChild><Link href="/onboarding">Create account →</Link></Button>
          <p className="text-xs text-ink-muted text-center">By creating an account you agree to our <Link href="#" className="text-brand-600 hover:underline">Terms</Link> and <Link href="#" className="text-brand-600 hover:underline">Privacy Policy</Link></p>
        </form>
        <p className="text-sm text-ink-tertiary text-center mt-4">Already have an account? <Link href="/auth/login" className="text-brand-600 hover:text-brand-700 font-medium">Sign in</Link></p>
      </div>
    </div>
  );
}
