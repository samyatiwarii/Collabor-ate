import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface flex">
      <div className="hidden lg:flex w-1/2 bg-ink flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.12)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl" />
        <Link href="/" className="relative font-heading font-bold text-xl text-white z-10">
          collabor<span className="text-brand-400">·</span>ate
        </Link>
        <div className="relative z-10">
          <blockquote className="text-white/80 text-lg leading-relaxed mb-6 font-light">
            "Collabor·ate helped us find 5 verified fitness creators in under 2 hours. The trust scores and verified metrics are game-changers."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold font-heading">MB</div>
            <div>
              <p className="text-sm font-semibold text-white">Neha Kapoor</p>
              <p className="text-xs text-white/50">Head of Marketing, Mamaearth</p>
            </div>
          </div>
        </div>
        <p className="relative z-10 text-white/30 text-xs">© 2025 Collabor·ate</p>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <Link href="/" className="font-heading font-bold text-base text-ink lg:hidden mb-6 block">
              collabor<span className="text-brand-600">·</span>ate
            </Link>
            <h1 className="font-heading text-2xl font-bold text-ink mb-1">Welcome back</h1>
            <p className="text-sm text-ink-tertiary">Sign in to your account</p>
          </div>
          <form className="space-y-4">
            <Input label="Email address" type="email" placeholder="you@company.com" icon={<Mail size={15} />} />
            <Input label="Password" type="password" placeholder="••••••••" icon={<Lock size={15} />} />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-ink-secondary cursor-pointer">
                <input type="checkbox" className="rounded border-surface-border2" />
                Remember me
              </label>
              <Link href="#" className="text-brand-600 hover:text-brand-700 font-medium">Forgot password?</Link>
            </div>
            <Button fullWidth size="lg" asChild>
              <Link href="/dashboard/influencer">Sign in</Link>
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-ink-tertiary">Don't have an account? <Link href="/auth/signup" className="text-brand-600 hover:text-brand-700 font-medium">Create one</Link></p>
          </div>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-surface-border" /></div>
            <div className="relative text-center"><span className="px-3 bg-surface text-xs text-ink-muted">or continue with</span></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" fullWidth>🔍 Google</Button>
            <Button variant="secondary" fullWidth>📷 Instagram</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
