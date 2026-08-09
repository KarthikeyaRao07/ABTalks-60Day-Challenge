'use client'

import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Who can join the ABTalks 60-day challenge?',
    a: 'Any Indian college student, from any year or branch, who wants to build real coding consistency. Beginners are welcome — every track has a starting point for you.',
  },
  {
    q: 'How much time do I need each day?',
    a: 'Most students spend 2–3 hours a day. The goal is a small, consistent commit every day rather than long, irregular bursts.',
  },
  {
    q: 'Is there any cost to participate?',
    a: 'Joining the challenge is free. You only need a GitHub account and a LinkedIn profile to track your public progress.',
  },
  {
    q: 'What if I miss a day and break my streak?',
    a: 'Streaks are meant to motivate, not punish. You can pick right back up the next day, and each track includes a couple of grace days for real-life situations.',
  },
  {
    q: 'How does this actually help me get an internship?',
    a: 'Your daily commits, LinkedIn posts, and shipped projects create a public track record. Recruiters on ABTalks can discover you through the leaderboard and your recruiter-ready profile.',
  },
  {
    q: 'Can I switch tracks after starting?',
    a: 'Yes. You can switch once during the challenge if you feel another track fits your goals better. Your XP and streak carry over.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before you commit to your first 60 days."
        />

        <Reveal className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={cn(
                  'glass overflow-hidden rounded-2xl transition-colors',
                  isOpen && 'gradient-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                >
                  <span className="text-sm font-semibold md:text-base">{f.q}</span>
                  <span
                    className={cn(
                      'grid size-7 shrink-0 place-items-center rounded-full bg-white/5 transition-transform duration-300',
                      isOpen && 'rotate-45 bg-gradient-to-br from-primary to-accent',
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
