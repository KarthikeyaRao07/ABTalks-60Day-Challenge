'use client'

import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'
import { ArrowRight, Award, Check, Flame, Home, LayoutGrid, Trophy, UserRound } from 'lucide-react'

const achievements = ['First Commit', '7-Day Streak', '10 Projects']

export default function DashboardPage() {
  return <main className="min-h-screen overflow-x-hidden pb-24">
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold"><span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">&lt;/&gt;</span> ABTalks</Link>
        <span className="rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">Student mode</span>
      </div>
    </header>

    <div className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
      <section>
        <p className="text-sm text-muted-foreground">Good evening, Arjun 👋</p>
        <div className="mt-1 flex items-end justify-between gap-3"><div><h1 className="text-2xl font-bold tracking-tight">Day 12 of 60</h1><p className="mt-1 text-xs text-muted-foreground">Keep the momentum going tonight.</p></div><div className="flex items-center gap-2 rounded-2xl bg-orange-500/10 px-3 py-2"><Flame className="size-5 text-orange-400" /><div><div className="text-sm font-bold">11 days</div><div className="text-[9px] text-muted-foreground">current streak</div></div></div></div>
      </section>

      <section className="mt-6 gradient-border glow-purple rounded-3xl p-1">
        <div className="glass-strong rounded-[1.35rem] p-5 sm:p-6">
          <div className="flex items-center justify-between"><span className="rounded-full bg-primary/15 px-2.5 py-1 font-mono text-[10px] font-semibold text-primary">DAY 12</span><span className="text-xs text-muted-foreground">45 min · Intermediate</span></div>
          <h2 className="mt-5 text-2xl font-bold">Build: Responsive Portfolio Hero</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">Create a polished hero section that adapts to mobile and desktop, with a clear heading and CTA.</p>
          <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent">+150 XP</span><span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">Web Development</span></div>
          <Link href="/day/12" className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 text-sm font-semibold text-primary-foreground sm:w-auto">Start Today's Challenge <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="glass rounded-2xl p-4"><div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">Challenge progress</span><span className="text-xs font-semibold">20%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-1/5 rounded-full bg-gradient-to-r from-primary to-accent" /></div><div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px] text-muted-foreground"><div><b className="block text-sm text-foreground">12</b>days</div><div><b className="block text-sm text-foreground">8</b>projects</div><div><b className="block text-sm text-foreground">12</b>GitHub</div><div><b className="block text-sm text-foreground">11</b>LinkedIn</div></div></div>
        <div className="glass rounded-2xl p-4"><div className="flex items-center justify-between"><span className="text-xs font-semibold">7-day streak</span><span className="text-[10px] text-muted-foreground">M T W T F S S</span></div><div className="mt-4 grid grid-cols-7 gap-1.5">{['✓','✓','✓','✓','—','✓','✓'].map((x,i)=><div key={i} className={`grid aspect-square place-items-center rounded-lg text-xs font-bold ${x==='—'?'bg-white/5 text-muted-foreground':'bg-primary/15 text-accent'}`}>{x}</div>)}</div><p className="mt-3 text-[10px] text-muted-foreground">One missed day doesn't erase your progress.</p></div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between"><h2 className="text-lg font-bold">Achievements</h2><span className="text-xs text-muted-foreground">Swipe →</span></div>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{achievements.map((a,i)=><div key={a} className="glass min-w-[145px] rounded-2xl p-4"><Award className="size-5 text-accent" /><div className="mt-3 text-sm font-semibold">{a}</div><div className="mt-1 text-[10px] text-muted-foreground">Unlocked</div></div>)}</div>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="glass rounded-2xl p-4"><div className="flex items-center gap-2"><Trophy className="size-4 text-accent" /><span className="text-xs text-muted-foreground">Student standing</span></div><div className="mt-3 text-2xl font-bold">#184</div><p className="mt-1 text-xs text-muted-foreground">You're ahead of 72% of participants <span className="text-[9px]">(demo)</span>.</p></div>
        <div className="glass rounded-2xl p-4"><div className="flex items-center gap-2"><Check className="size-4 text-cyan" /><span className="text-xs text-muted-foreground">Tonight's Commit</span></div><div className="mt-3 text-sm font-semibold">25 minutes. One focused build.</div><Link href="/day/12" className="mt-3 inline-flex text-xs font-semibold text-accent">Continue →</Link></div>
      </section>
    </div>

    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/90 px-3 py-2 backdrop-blur-xl"><div className="mx-auto grid max-w-md grid-cols-4 gap-1">{[[Home,'Home','/dashboard'],[LayoutGrid,'Challenge','/day/12'],[Trophy,'Progress','/dashboard'],[UserRound,'Profile','/dashboard']].map(([Icon,label,href])=>{const I=Icon as typeof Home;return <Link key={label as string} href={href as string} className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] text-muted-foreground hover:bg-white/5 hover:text-foreground"><I className="size-4" />{label as string}</Link>})}</div></nav>
  </main>
}
