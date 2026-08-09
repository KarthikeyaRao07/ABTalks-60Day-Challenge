import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import { Flame, Medal } from 'lucide-react'

type Row = {
  rank: number
  name: string
  handle: string
  xp: number
  streak: number
}

const rows: Row[] = [
  { rank: 1, name: 'Ananya Reddy', handle: '@ananya.codes', xp: 14820, streak: 60 },
  { rank: 2, name: 'Rohan Mehta', handle: '@rohanm', xp: 13990, streak: 58 },
  { rank: 3, name: 'Priya Nair', handle: '@priyabuilds', xp: 13210, streak: 60 },
  { rank: 4, name: 'Arjun Sharma', handle: '@arjun.dev', xp: 11750, streak: 54 },
  { rank: 5, name: 'Sneha Iyer', handle: '@snehai', xp: 10980, streak: 51 },
  { rank: 6, name: 'Karthik Rao', handle: '@karthik.ml', xp: 9840, streak: 47 },
  { rank: 7, name: 'Ishita Gupta', handle: '@ishitag', xp: 9120, streak: 45 },
]

const medalColor: Record<number, string> = {
  1: 'text-amber-300',
  2: 'text-slate-300',
  3: 'text-orange-400',
}

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="Weekly leaderboard"
          title="Compete with the most consistent students"
          description="Rankings reset every week, so there's always a fresh shot at the top."
        />

        <Reveal className="mt-14">
          <div className="glass gradient-border overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border-b border-border px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:px-6">
              <span>Rank</span>
              <span>Student</span>
              <span className="text-right">XP</span>
              <span className="text-right">Streak</span>
            </div>

            <ul>
              {rows.map((r, i) => (
                <li
                  key={r.rank}
                  className={cn(
                    'grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.05] md:px-6',
                    i !== rows.length - 1 && 'border-b border-border/60',
                    r.rank <= 3 && 'bg-white/[0.03]',
                  )}
                >
                  <span className="flex w-9 items-center justify-center">
                    {r.rank <= 3 ? (
                      <Medal className={cn('size-5', medalColor[r.rank])} />
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">{r.rank}</span>
                    )}
                  </span>

                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 text-xs font-bold">
                      {r.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{r.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{r.handle}</p>
                    </div>
                  </div>

                  <span className="text-right text-sm font-semibold tabular-nums">
                    {r.xp.toLocaleString('en-IN')}
                  </span>

                  <span className="flex items-center justify-end gap-1 text-right text-sm font-semibold tabular-nums">
                    <Flame className="size-3.5 text-accent" />
                    {r.streak}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
