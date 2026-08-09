import { GithubIcon, LinkedinIcon } from '@/components/site/brand-icons'
import { Code2, Send } from 'lucide-react'

const groups = [
  {
    title: 'Platform',
    links: ['How it Works', 'Tracks', 'Leaderboard', 'Gamification'],
  },
  {
    title: 'Community',
    links: ['Discord', 'Telegram', 'Live Coding', 'Mentors'],
  },
  {
    title: 'Company',
    links: ['About', 'Success Stories', 'For Recruiters', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2" aria-label="ABTalks home">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Code2 className="size-4 text-primary-foreground" />
              </span>
              <span className="text-base font-bold tracking-tight">ABTalks</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A 60-day coding challenge that turns daily consistency into recruiter
              visibility for Indian college students.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[GithubIcon, LinkedinIcon, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#join"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-full glass transition-colors hover:bg-white/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ABTalks. Built for consistent coders.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
