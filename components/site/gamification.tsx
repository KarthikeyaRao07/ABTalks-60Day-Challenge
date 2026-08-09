import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import {
  Award,
  Crown,
  Flame,
  GitCommitHorizontal,
  Gem,
  Rocket,
  Sprout,
  Star,
  Trophy,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Badge = {
  icon: LucideIcon
  name: string
  xp: string
  ring: string
}

const badges: Badge[] = [
  { icon: Sprout, name: 'Rookie', xp: '0 – 500 XP', ring: 'ring-chart-4/60' },
  { icon: Rocket, name: 'Explorer', xp: '500 – 2K XP', ring: 'ring-cyan/60' },
  { icon: Gem, name: 'Builder', xp: '2K – 5K XP', ring: 'ring-accent/60' },
  { icon: Crown, name: 'Master', xp: '5K – 10K XP', ring: 'ring-primary/60' },
  { icon: Trophy, name: 'Legend', xp: '10K+ XP', ring: 'ring-chart-5/60' },
]

const achievements = [
  { icon: GitCommitHorizontal, title: 'First Commit', desc: 'Pushed your very first day of code.', tone: 'text-accent bg-accent/15' },
  { icon: Flame, title: '30-Day Streak', desc: 'A full month without missing a beat.', tone: 'text-primary bg-primary/15' },
  { icon: Star, title: '100 Commits', desc: 'Crossed a century of contributions.', tone: 'text-cyan bg-cyan/15' },
  { icon: Award, title: 'Top Performer', desc: 'Ranked in the weekly top 10.', tone: 'text-accent bg-accent/15' },
]

export function Gamification() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Gamification"
          title="Earn XP, unlock badges, stay hooked"
          description="Consistency should feel rewarding. Level up from Rookie to Legend and collect achievements along the way."
        />

        {/* badge ladder */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {badges.map((b, i) => (
            <Reveal
              key={b.name}
              delay={i * 80}
              className={i === 4 ? 'col-span-2 sm:col-span-1' : ''}
            >
              <div className="glass gradient-border group flex h-full flex-col items-center rounded-3xl p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                <span
                  className={`grid size-16 place-items-center rounded-full bg-white/5 ring-2 ${b.ring} transition-transform duration-300 group-hover:scale-110`}
                >
                  <b.icon className="size-7 text-foreground" />
                </span>
                <p className="mt-4 text-base font-bold">{b.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{b.xp}</p>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Level {i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* achievement cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="glass group flex h-full items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${a.tone}`}>
                  <a.icon className="size-5" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold">{a.title}</h3>
                    <Zap className="size-3.5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
