'use client'

import { LinkedinIcon } from '@/components/site/brand-icons'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import { Code2, Flame, GitCommitHorizontal, Route, Trophy } from 'lucide-react'
import { useState } from 'react'

const steps = [
  { icon: Route, title: 'Choose a Track', desc: 'Pick DSA, Web Development, AI/ML, DevOps, or Android.' },
  { icon: Code2, title: "Get Today’s Task", desc: 'Open one focused build designed for your current day.' },
  { icon: Code2, title: 'Build Something', desc: 'Spend a focused session shipping something real.' },
  { icon: GitCommitHorizontal, title: 'Push to GitHub', desc: 'Create a commit that becomes your daily proof.' },
  { icon: LinkedinIcon, title: 'Share on LinkedIn', desc: 'Share what you built and what you learned.' },
  { icon: Flame, title: 'Keep Your Streak', desc: 'Show up again tomorrow and keep the momentum alive.' },
  { icon: Trophy, title: 'Finish 60 Days', desc: 'Turn consistent work into visible proof of progress.' },
]

export function HowItWorks() {
  const [active, setActive] = useState(0)
  return (
    <section id="how-it-works" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="How the challenge works" title="A simple loop that compounds" description="Choose a track, build every day, prove the work, and keep moving." />
        <div className="relative mt-10">
          <ol className="flex snap-x gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-7 lg:overflow-visible">
            {steps.map((step, i) => {
              const activeStep = i === active
              return <Reveal as="li" key={step.title} delay={i * 50} className="min-w-[190px] snap-start lg:min-w-0">
                <button type="button" onClick={() => setActive(i)} className="group w-full text-center focus:outline-none">
                  <span className={cn('relative mx-auto grid size-14 place-items-center rounded-2xl transition-all', activeStep ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30' : 'glass text-muted-foreground')}>
                    <step.icon className="size-5" />
                    <span className="absolute -right-2 -bottom-2 grid size-5 place-items-center rounded-full bg-background text-[9px] font-bold text-accent ring-1 ring-border">{i + 1}</span>
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </button>
              </Reveal>
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
