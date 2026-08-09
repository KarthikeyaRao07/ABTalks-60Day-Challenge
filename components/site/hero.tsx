'use client'

import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'
import { MagneticButton } from '@/components/site/magnetic-button'
import { ArrowRight, Check, Flame, GitCommitHorizontal, Sparkles } from 'lucide-react'

const floating = [
  { icon: GithubIcon, label: 'commit pushed', className: 'left-0 top-10' },
  { icon: LinkedinIcon, label: 'proof shared', className: 'right-0 top-24' },
]

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] h-[440px] w-[700px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-[-15%] top-[35%] h-[300px] w-[300px] rounded-full bg-cyan/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
            <Sparkles className="size-3.5 text-accent" /> 60-day coding challenge for Indian college students
          </div>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            60 Days.<br /><span className="gradient-text">60 Proofs.</span><br />One Stronger You.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
            Code every day. Ship something real. Push a GitHub commit. Share your learning on LinkedIn. Build a streak that proves you show up.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <MagneticButton href="/dashboard" className="min-h-11 w-full sm:w-auto">Start My 60-Day Journey <ArrowRight className="size-4" /></MagneticButton>
            <MagneticButton href="#how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">See How It Works</MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-md sm:mt-16">
          <div className="gradient-border glow-purple rounded-[2rem] p-2">
            <div className="glass-strong relative overflow-hidden rounded-[1.65rem] p-5">
              <div className="flex items-center justify-between">
                <div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">mission control</div><div className="mt-1 text-sm font-semibold">Your coding streak</div></div>
                <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary"><Flame className="size-5" /></div>
              </div>
              <div className="mx-auto mt-6 grid size-48 place-items-center rounded-full border-[10px] border-white/5 bg-[radial-gradient(circle,rgba(139,92,246,.2),transparent_65%)] shadow-[0_0_70px_-20px_rgba(139,92,246,.9)]">
                <div className="grid size-36 place-items-center rounded-full border border-primary/40 bg-background/80 text-center">
                  <div><div className="text-4xl font-bold gradient-text">12</div><div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">days active</div></div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-3"><GitCommitHorizontal className="size-4 text-primary" /><div className="mt-2 text-xs font-semibold">GitHub proof</div><div className="mt-0.5 text-[10px] text-muted-foreground">commit verified</div></div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-3"><LinkedinIcon className="size-4 text-cyan" /><div className="mt-2 text-xs font-semibold">LinkedIn proof</div><div className="mt-0.5 text-[10px] text-muted-foreground">post ready</div></div>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-2 text-xs"><Check className="size-4 text-cyan" /> Day 12 of 60 · +150 XP</div>
            </div>
          </div>
          {floating.map(({ icon: Icon, label, className }) => <div key={label} className={`glass-strong absolute ${className} hidden items-center gap-2 rounded-xl px-3 py-2 text-[10px] shadow-xl sm:flex animate-float-medium`}><Icon className="size-4" /><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  )
}
