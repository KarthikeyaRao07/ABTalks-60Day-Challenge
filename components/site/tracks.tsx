import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  Globe,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'

type Track = {
  icon: LucideIcon
  name: string
  difficulty: string
  duration: string
  projects: string
  outcome: string
  accent: string
}

const tracks: Track[] = [
  {
    icon: Binary,
    name: 'DSA',
    difficulty: 'Intermediate → Advanced',
    duration: '60 days · ~2 hrs/day',
    projects: '120+ problems, 3 contest sets',
    outcome: 'Crack product-based company interviews',
    accent: 'from-primary/25 to-primary/5',
  },
  {
    icon: Globe,
    name: 'Web Development',
    difficulty: 'Beginner → Advanced',
    duration: '60 days · ~2.5 hrs/day',
    projects: '4 full-stack apps',
    outcome: 'Frontend / full-stack internships',
    accent: 'from-accent/25 to-accent/5',
  },
  {
    icon: BrainCircuit,
    name: 'AI / ML',
    difficulty: 'Intermediate',
    duration: '60 days · ~3 hrs/day',
    projects: '5 ML models + 1 capstone',
    outcome: 'ML / Data Science roles',
    accent: 'from-primary/25 to-accent/10',
  },
  {
    icon: Server,
    name: 'DevOps',
    difficulty: 'Intermediate',
    duration: '60 days · ~2 hrs/day',
    projects: 'CI/CD pipeline + cloud deploys',
    outcome: 'Cloud & platform engineering',
    accent: 'from-cyan/25 to-cyan/5',
  },
  {
    icon: Smartphone,
    name: 'Android',
    difficulty: 'Beginner → Intermediate',
    duration: '60 days · ~2.5 hrs/day',
    projects: '3 published apps',
    outcome: 'Mobile developer internships',
    accent: 'from-accent/25 to-primary/10',
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Choose your track"
          title="Pick the path that fits your dream role"
          description="Every track is a structured 60-day plan with daily goals, projects, and a clear career outcome."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="glass gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:glow-purple">
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${t.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/5">
                    <t.icon className="size-6 text-accent" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>

                <h3 className="relative mt-5 text-xl font-bold">{t.name}</h3>

                <dl className="relative mt-4 space-y-2.5 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-muted-foreground">Difficulty</dt>
                    <dd className="text-right font-medium">{t.difficulty}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-muted-foreground">Duration</dt>
                    <dd className="text-right font-medium">{t.duration}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-muted-foreground">Projects</dt>
                    <dd className="text-right font-medium">{t.projects}</dd>
                  </div>
                </dl>

                <div className="relative mt-5 rounded-2xl bg-white/5 p-3.5">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Career outcome
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{t.outcome}</p>
                </div>

                <a
                  href="#join"
                  className="relative mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-sm font-semibold transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground"
                >
                  Start this track <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
