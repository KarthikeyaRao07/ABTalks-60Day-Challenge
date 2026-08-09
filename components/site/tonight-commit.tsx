'use client'

import Link from 'next/link'
import { Clock3, Flame, GitCommitHorizontal, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

export function TonightCommit() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="gradient-border glow-cyan overflow-hidden rounded-3xl p-5 sm:p-7">
            <div className="glass-strong rounded-2xl p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  <Sparkles className="size-4" /> Tonight's Commit
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1.5 font-mono text-xs text-muted-foreground">11:47 PM</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">Still have 25 minutes?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">Complete tonight's mini-build. One focused session, one GitHub proof, one step closer to Day 60.</p>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:max-w-lg">
                {[['25 min', Clock3], ['1 task', Flame], ['1 proof', GitCommitHorizontal]].map(([label, Icon]) => {
                  const I = Icon as typeof Clock3
                  return <div key={label as string} className="rounded-2xl border border-white/10 bg-black/10 p-3"><I className="size-4 text-accent" /><div className="mt-2 text-sm font-semibold">{label as string}</div></div>
                })}
              </div>
              <Link href="/dashboard" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">Start 25-Minute Build</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
