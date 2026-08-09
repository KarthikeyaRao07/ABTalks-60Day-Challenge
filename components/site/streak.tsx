'use client'

import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import { LinkedinIcon } from '@/components/site/brand-icons'
import { Flame, GitCommitHorizontal, Sparkles, Terminal } from 'lucide-react'
import { useMemo, useState } from 'react'

type Day = {
  day: number
  done: boolean
  intensity: 0 | 1 | 2 | 3
  problems: number
  commit: string
  post: boolean
  xp: number
}

function buildDays(): Day[] {
  // deterministic pseudo-random so server/client match
  const days: Day[] = []
  for (let i = 1; i <= 60; i++) {
    const seed = (i * 9301 + 49297) % 233280
    const r = seed / 233280
    const done = i <= 47 ? r > 0.08 : false
    const intensity = (done ? Math.min(3, Math.floor(r * 4) + 1) : 0) as Day['intensity']
    days.push({
      day: i,
      done,
      intensity,
      problems: done ? Math.floor(r * 5) + 1 : 0,
      commit: done ? `feat: day ${i} progress` : '—',
      post: done && r > 0.4,
      xp: done ? (Math.floor(r * 4) + 1) * 50 : 0,
    })
  }
  return days
}

const intensityClass: Record<number, string> = {
  0: 'bg-white/5',
  1: 'bg-primary/30',
  2: 'bg-primary/60',
  3: 'bg-gradient-to-br from-primary to-accent',
}

export function Streak() {
  const days = useMemo(buildDays, [])
  const [hovered, setHovered] = useState<Day | null>(null)

  const totalXp = days.reduce((a, d) => a + d.xp, 0)
  const completed = days.filter((d) => d.done).length

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Daily streak"
          title="Watch your consistency light up"
          description="Every day you show up, a square glows. Hover any day to relive exactly what you shipped."
        />

        <Reveal className="mt-14">
          <div className="glass gradient-border rounded-3xl p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <Flame className="size-5 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-lg font-bold leading-none">47-day streak</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {completed} of 60 days completed
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm">
                <Sparkles className="size-4 text-accent" />
                <span className="font-semibold">{totalXp.toLocaleString('en-IN')} XP</span>
                <span className="text-muted-foreground">earned</span>
              </div>
            </div>

            <div className="relative mt-8">
              <div className="grid grid-cols-10 gap-2 sm:grid-cols-12 md:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-[repeat(20,minmax(0,1fr))]">
                {days.map((d) => (
                  <button
                    key={d.day}
                    type="button"
                    onMouseEnter={() => setHovered(d)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(d)}
                    onBlur={() => setHovered(null)}
                    aria-label={`Day ${d.day}${d.done ? ` — ${d.problems} problems, ${d.xp} XP` : ' — not completed'}`}
                    className={cn(
                      'aspect-square rounded-[6px] transition-all duration-200 hover:scale-125 hover:ring-2 hover:ring-accent focus:outline-none focus:ring-2 focus:ring-accent',
                      intensityClass[d.intensity],
                    )}
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>Day 1</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  {[0, 1, 2, 3].map((n) => (
                    <span key={n} className={cn('size-3 rounded-[3px]', intensityClass[n])} />
                  ))}
                  <span>More</span>
                </div>
                <span>Day 60</span>
              </div>
            </div>

            {/* hover detail panel */}
            <div className="mt-6 rounded-2xl bg-white/5 p-4">
              {hovered && hovered.done ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Detail
                    icon={<Terminal className="size-4 text-primary" />}
                    label={`Day ${hovered.day} · Problems`}
                    value={`${hovered.problems} solved`}
                  />
                  <Detail
                    icon={<GitCommitHorizontal className="size-4 text-accent" />}
                    label="GitHub commit"
                    value={hovered.commit}
                  />
                  <Detail
                    icon={<LinkedinIcon className="size-4 text-cyan" />}
                    label="LinkedIn post"
                    value={hovered.post ? 'Published' : 'Skipped'}
                  />
                  <Detail
                    icon={<Sparkles className="size-4 text-accent" />}
                    label="XP earned"
                    value={`+${hovered.xp} XP`}
                  />
                </div>
              ) : (
                <p className="text-center text-sm text-muted-foreground">
                  {hovered && !hovered.done
                    ? `Day ${hovered.day} — rest day, no activity logged.`
                    : 'Hover over a day to see problems solved, commits, posts, and XP.'}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-white/5">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-semibold">{value}</p>
      </div>
    </div>
  )
}
