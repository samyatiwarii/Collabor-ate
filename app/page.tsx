"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Magnetic } from "@/components/ui/Magnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Star, TrendingUp, Users, Zap, BarChart2, ChevronRight } from "lucide-react";

function FloatingCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute bg-white border border-surface-border rounded-xl p-3.5 shadow-card-hover pointer-events-none select-none ${className}`}
      style={{ animation: `floatCard ${4 + delay * 2}s ease-in-out ${delay}s infinite` }}>
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes floatCard { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(0.4deg)} }
        @keyframes gridPulse { 0%,100%{opacity:.3} 50%{opacity:.55} }
        .hero-grid{animation:gridPulse 5s ease-in-out infinite}
      `}</style>
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#FAFAFD]">
        <div className="hero-grid absolute inset-0 bg-[linear-gradient(rgba(199,210,254,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(199,210,254,0.4)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <motion.div animate={{ scale:[1,1.08,1], x:[0,20,0] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }} className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-brand-200/25 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.06,1], x:[0,-15,0] }} transition={{ duration:11, repeat:Infinity, ease:"easeInOut", delay:3 }} className="absolute -bottom-20 -right-16 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.1,1], y:[0,-20,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:1.5 }} className="absolute top-1/3 right-[8%] w-[260px] h-[260px] bg-pink-200/15 rounded-full blur-3xl pointer-events-none" />

        <FloatingCard delay={0.3} className="top-[18%] left-[3%] min-w-[180px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">PA</div>
            <div><p className="text-xs font-semibold text-ink">Priya Arora</p><p className="text-[10px] text-ink-muted">@priyaarora</p></div>
          </div>
          <div className="flex gap-4">
            <div><p className="text-xs font-bold text-ink">128K</p><p className="text-[9px] text-ink-muted uppercase tracking-wide">Followers</p></div>
            <div><p className="text-xs font-bold text-ink">8.2%</p><p className="text-[9px] text-ink-muted uppercase tracking-wide">Eng. rate</p></div>
          </div>
        </FloatingCard>

        <FloatingCard delay={0.6} className="top-[20%] right-[3%] min-w-[160px]">
          <div className="flex items-center gap-1.5 mb-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /><p className="text-[10px] font-semibold text-emerald-600">Open to pitches</p></div>
          <p className="text-xs font-semibold text-ink">Mamaearth</p>
          <p className="text-[10px] text-ink-muted">Beauty · ₹10K–₹80K</p>
        </FloatingCard>

        <FloatingCard delay={0.9} className="bottom-[22%] left-[5%] min-w-[190px]">
          <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wide mb-1.5">New request ✦</p>
          <p className="text-xs font-semibold text-ink">Zara India wants to collab</p>
          <p className="text-[10px] text-ink-muted mt-0.5">Fashion · ₹45,000 · 2 reels</p>
        </FloatingCard>

        <FloatingCard delay={1.1} className="bottom-[18%] right-[4%] min-w-[165px]">
          <div className="flex text-amber-400 text-xs mb-1.5">★★★★★</div>
          <p className="text-xs text-ink leading-relaxed">"Best collab — so professional!"</p>
          <p className="text-[10px] text-ink-muted mt-1">— Nykaa Beauty</p>
        </FloatingCard>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-1.5 text-xs font-medium text-brand-700 mb-8 shadow-sm">
            <motion.span animate={{ scale:[1,1.4,1] }} transition={{ duration:2, repeat:Infinity }} className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Now in early access — join 12,000+ creators
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.6, ease:[0.22,1,0.36,1] }} className="font-heading text-5xl md:text-7xl font-bold text-ink leading-[1.02] tracking-tight mb-6">
            Connect brands with<br />
            <span className="text-brand-600">creators who convert.</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25, duration:0.5 }} className="text-lg md:text-xl text-ink-tertiary font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            The modern platform where DTC brands discover verified Instagram creators, launch campaigns, and track results — all in one place.
          </motion.p>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.35, duration:0.5 }} className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Magnetic strength={0.25}>
              <Link href="/dashboard/brand/discovery" className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-brand-700 transition-all duration-150 shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Find creators <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="/onboarding" className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium px-8 py-3.5 rounded-xl border border-surface-border2 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50 transition-all duration-150">
                Join as creator
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5, duration:0.5 }} className="flex flex-wrap border border-surface-border rounded-2xl bg-white shadow-card overflow-hidden">
            {[{ n:12, suffix:"K+", label:"Influencers" },{ n:3.4, suffix:"K+", label:"Active brands" },{ n:28, suffix:"K+", label:"Collabs closed" },{ n:4.9, suffix:"★", label:"Avg rating" }].map((s) => (
              <div key={s.label} className="flex-1 py-5 px-4 text-center border-r border-surface-border last:border-r-0 min-w-[80px]">
                <p className="font-heading text-2xl font-bold text-brand-600"><AnimatedCounter value={s.n} suffix={s.suffix} decimals={s.n % 1 !== 0 ? 1 : 0} /></p>
                <p className="text-xs text-ink-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
      <Reveal>
        <section className="border-y border-surface-border bg-surface py-5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm font-medium text-ink-tertiary">Trusted by</span>
            {["Mamaearth","Nykaa","Zara India","Swiggy","MakeMyTrip","FabIndia"].map((b,i) => (
              <motion.span key={b} initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ delay:i*0.07 }} viewport={{ once:true }} className="font-heading font-semibold text-ink-secondary hover:text-brand-600 transition-colors cursor-default text-sm">{b}</motion.span>
            ))}
          </div>
        </section>
      </Reveal>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">How it works</p>
          <h2 className="font-heading text-4xl font-bold text-ink tracking-tight mb-4">Two sides, one platform</h2>
          <p className="text-ink-tertiary max-w-md mx-auto">Whether you create or run campaigns — collaborate directly, no agencies needed.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title:"For creators", color:"bg-brand-50 border-brand-100", accent:"bg-brand-600", steps:["Connect Instagram — metrics auto-pulled via OAuth","Set your niche, pricing & availability","Receive brand requests or pitch brands directly","Accept collabs, deliver content, get paid"] },
            { title:"For brands", color:"bg-emerald-50 border-emerald-100", accent:"bg-emerald-600", steps:["Create your brand profile in minutes","Set campaign type, budget & target niche","Discover and filter verified creators","Send brief → track campaign → close deals"] },
          ].map((side, si) => (
            <Reveal key={side.title} delay={si * 0.15}>
              <motion.div whileHover={{ y:-4, boxShadow:"0 12px 40px rgba(79,70,229,0.08)" }} transition={{ duration:0.2 }} className={`rounded-2xl p-8 border ${side.color} h-full`}>
                <h3 className="font-heading text-xl font-bold text-ink mb-6">{side.title}</h3>
                <ol className="space-y-3">
                  {side.steps.map((step, i) => (
                    <motion.li key={step} initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }} transition={{ delay:0.1+i*0.07 }} viewport={{ once:true }} className="flex items-start gap-3">
                      <span className={`w-5 h-5 rounded-full ${side.accent} text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{i+1}</span>
                      <span className="text-sm text-ink-secondary">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">Platform features</p>
            <h2 className="font-heading text-4xl font-bold text-ink tracking-tight mb-4">Everything you need to collab smarter</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon:Shield, title:"Verified metrics", desc:"Every creator's stats pulled directly via Instagram OAuth — no inflated numbers, ever." },
              { icon:BarChart2, title:"Campaign analytics", desc:"Track views, engagement, and ROI for every campaign in real time." },
              { icon:Users, title:"Smart discovery", desc:"Filter by niche, engagement rate, audience demographics, location, and budget." },
              { icon:Zap, title:"Trust score", desc:"AI-powered score based on engagement authenticity, response rate, and review history." },
              { icon:TrendingUp, title:"Brand fit score", desc:"See how well a creator's audience aligns with your target demographics before reaching out." },
              { icon:Star, title:"Review system", desc:"Both brands and creators leave verified reviews after every collab — building real reputation." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <motion.div whileHover={{ y:-5, borderColor:"#a5b4fc", boxShadow:"0 12px 32px rgba(79,70,229,0.09)" }} transition={{ duration:0.2 }} className="bg-white border border-surface-border rounded-xl p-5 h-full">
                  <motion.div whileHover={{ scale:1.1, rotate:5 }} transition={{ type:"spring", stiffness:300 }} className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    <f.icon className="text-brand-600" size={18} />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-sm text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-tertiary leading-relaxed">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-ink tracking-tight mb-4">What people are saying</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote:"Found 3 perfect creators in under an hour. The verified metrics saved us from inflated follower accounts.", name:"Shreya Mehta", role:"Marketing Head, Mamaearth" },
              { quote:"As a micro-creator with 42K followers I was getting ignored. Collabor·ate got me brand deals in week one.", name:"Rahul Sharma", role:"Fitness creator, @rahulfitsup" },
              { quote:"The campaign tracking dashboard is exactly what we needed. No more spreadsheets and chasing influencers on DMs.", name:"Aditya Verma", role:"Brand Manager, Nykaa" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y:-4, boxShadow:"0 12px 32px rgba(0,0,0,0.07)" }} className="bg-white border border-surface-border rounded-xl p-6 h-full">
                  <div className="flex mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400"/>)}</div>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">"{t.quote}"</p>
                  <div><p className="text-sm font-semibold text-ink">{t.name}</p><p className="text-xs text-ink-muted">{t.role}</p></div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-ink tracking-tight mb-3">Frequently asked</h2>
          </Reveal>
          <div className="space-y-3">
            {[
              { q:"How are creator metrics verified?", a:"Creators connect their Instagram account via OAuth. We pull followers, engagement rate, average reel views, and audience demographics directly from Instagram's API — no manual entry." },
              { q:"Is it free to join as a creator?", a:"Yes. Creating a profile and receiving brand requests is always free for creators. We only take a small platform fee on completed paid collaborations." },
              { q:"Can I control who sees my profile?", a:"Absolutely. Creators can set their visibility to Public, Verified brands only, or Private. Full analytics and pricing are only shared after connection approval." },
              { q:"How does messaging work?", a:"All communication happens inside the platform. Once a request is accepted, both parties get access to an in-app messaging thread for the collaboration." },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <div className="bg-white border border-surface-border rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-heading font-semibold text-sm text-ink hover:bg-surface transition-colors">
                    {faq.q}
                    <motion.div animate={{ rotate: openFaq === i ? 90 : 0 }} transition={{ duration:0.2 }}>
                      <ChevronRight className="w-4 h-4 text-ink-muted flex-shrink-0" />
                    </motion.div>
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }} transition={{ duration:0.25, ease:[0.22,1,0.36,1] }} className="overflow-hidden">
                    <div className="px-5 pb-4 text-sm text-ink-tertiary leading-relaxed border-t border-surface-border pt-3">{faq.a}</div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ink text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.15)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <motion.div animate={{ scale:[1,1.1,1], opacity:[0.2,0.3,0.2] }} transition={{ duration:6, repeat:Infinity }} className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-brand-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">Ready to find your match?</h2>
            <p className="text-white/60 text-lg mb-10 font-light">Join thousands of creators and brands already closing deals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Magnetic strength={0.2}>
                <Link href="/dashboard/brand/discovery" className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-brand-500 transition-all duration-150 shadow-button hover:-translate-y-0.5">
                  Find creators →
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link href="/onboarding" className="inline-flex items-center gap-2 bg-transparent text-white text-sm font-medium px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-150">
                  Join as creator
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink border-t border-white/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading font-bold text-white/70 text-base">collabor<span className="text-brand-400">·</span>ate</p>
          <p className="text-white/30 text-sm">© 2025 Collabor·ate. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
