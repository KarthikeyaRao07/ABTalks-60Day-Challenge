import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { Quote } from 'lucide-react'
import Image from 'next/image'

type Story = {
  image: string
  name: string
  role: string
  company: string
  package: string
  track: string
  quote: string
}

const stories: Story[] = [
  {
    image: '/images/student-1.png',
    name: 'Ananya Reddy',
    role: 'SDE Intern',
    company: 'Google',
    package: '₹1.2L / month',
    track: 'DSA Track',
    quote:
      'The daily streak forced me to stay consistent. By day 60 my GitHub was so active that a recruiter reached out to me directly on LinkedIn.',
  },
  {
    image: '/images/student-2.png',
    name: 'Rohan Mehta',
    role: 'Full-Stack Intern',
    company: 'Razorpay',
    package: '₹85K / month',
    track: 'Web Dev Track',
    quote:
      'I shipped 4 real projects in 60 days. My portfolio did the talking in interviews — I barely had to explain my skills.',
  },
  {
    image: '/images/student-3.png',
    name: 'Priya Nair',
    role: 'ML Intern',
    company: 'Microsoft',
    package: '₹1.1L / month',
    track: 'AI/ML Track',
    quote:
      'The AI feedback on my posts helped me communicate my work clearly. That storytelling is exactly what got me noticed.',
  },
]

export function SuccessStories() {
  return (
    <section id="stories" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Success stories"
          title="From daily commits to real offers"
          description="Students who trusted the process and turned 60 days of consistency into internships they're proud of."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <article className="glass gradient-border group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:glow-cyan">
                <Quote className="size-7 text-primary/60" />
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                  {s.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <Image
                    src={s.image || '/placeholder.svg'}
                    alt={`${s.name}, ${s.role} at ${s.company}`}
                    width={52}
                    height={52}
                    className="size-13 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{s.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {s.role} · <span className="font-semibold text-foreground">{s.company}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {s.package}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {s.track}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
