import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import {
  ArrowUpRight,
  MessagesSquare,
  MicVocal,
  Radio,
  Send,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react'

type Community = {
  icon: LucideIcon
  name: string
  desc: string
  meta: string
}

const items: Community[] = [
  { icon: MessagesSquare, name: 'Discord', desc: 'Daily accountability channels and instant doubt-solving.', meta: '18K members' },
  { icon: Users, name: 'WhatsApp', desc: 'Small squads that keep each other on streak.', meta: '600+ groups' },
  { icon: Send, name: 'Telegram', desc: 'Announcements, resources, and daily challenge drops.', meta: '22K members' },
  { icon: Video, name: 'Weekly Live Coding', desc: 'Watch mentors build in public, every weekend.', meta: 'Every Sat' },
  { icon: MicVocal, name: 'Mentor Sessions', desc: '1:1 and group guidance from working engineers.', meta: '150+ mentors' },
  { icon: Radio, name: 'AMA', desc: 'Ask-me-anything with recruiters and top performers.', meta: 'Bi-weekly' },
]

export function Community() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Community"
          title="You're never coding alone"
          description="Consistency is easier with people around you. Join thousands of students pushing each other forward."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <a
                href="#join"
                className="glass gradient-border group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/5 transition-colors group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
                    <c.icon className="size-5 transition-colors group-hover:text-primary-foreground" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <h3 className="mt-5 text-base font-bold">{c.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <span className="mt-4 text-xs font-semibold text-accent">{c.meta}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
