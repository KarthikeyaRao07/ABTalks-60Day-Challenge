import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import { BadgeCheck, FolderGit2, MapPin, Sparkles } from 'lucide-react'

const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'System Design', 'Docker']

export function Recruiter() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For recruiters"
              title={
                <>
                  Recruiters don&apos;t just read resumes. They review your{' '}
                  <span className="gradient-text">consistency.</span>
                </>
              }
              description="A single resume is a snapshot. A 60-day public streak is a track record. ABTalks turns your daily work into a recruiter-ready profile that proves you show up."
            />
            <ul className="mt-8 space-y-3">
              {[
                'Verified GitHub activity and contribution history',
                'A LinkedIn presence that grows every week',
                'Live portfolio of shipped projects',
                'Skills backed by real, dated commits',
              ].map((item) => (
                <Reveal as="li" key={item} className="flex items-center gap-3">
                  <BadgeCheck className="size-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* recruiter profile preview */}
          <Reveal from="left">
            <div className="glass gradient-border glow-purple rounded-3xl p-6">
              {/* profile header */}
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                  AR
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate font-bold">Ananya Reddy</p>
                    <BadgeCheck className="size-4 text-accent" />
                  </div>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" /> Bengaluru · Open to internships
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  <Sparkles className="size-3" /> Top 1%
                </span>
              </div>

              {/* social previews */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="size-4" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <p className="mt-2 text-xl font-bold">486</p>
                  <p className="text-[11px] text-muted-foreground">commits this challenge</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="size-4 text-accent" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <p className="mt-2 text-xl font-bold">3,240</p>
                  <p className="text-[11px] text-muted-foreground">followers gained</p>
                </div>
              </div>

              {/* mini contribution graph */}
              <div className="mt-3 rounded-2xl bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold">Contribution graph</span>
                  <span className="text-[11px] text-muted-foreground">Last 8 weeks</span>
                </div>
                <div className="grid grid-cols-[repeat(28,minmax(0,1fr))] gap-1">
                  {Array.from({ length: 140 }).map((_, i) => {
                    const r = ((i * 9301 + 49297) % 233280) / 233280
                    const level = r > 0.65 ? 3 : r > 0.4 ? 2 : r > 0.2 ? 1 : 0
                    return (
                      <span
                        key={i}
                        className={cn(
                          'aspect-square rounded-[2px]',
                          level === 0 && 'bg-white/5',
                          level === 1 && 'bg-primary/30',
                          level === 2 && 'bg-primary/60',
                          level === 3 && 'bg-gradient-to-br from-primary to-accent',
                        )}
                      />
                    )
                  })}
                </div>
              </div>

              {/* portfolio + skills */}
              <div className="mt-3 rounded-2xl bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="size-4 text-cyan" />
                  <span className="text-xs font-semibold">Portfolio & Skills</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
