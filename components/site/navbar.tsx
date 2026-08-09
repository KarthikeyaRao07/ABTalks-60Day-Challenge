'use client'

import { cn } from '@/lib/utils'
import { Code2, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Stories', href: '#stories' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-5',
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent',
        )}
      >
        <a href="#top" className="flex items-center gap-2 pl-1" aria-label="ABTalks home">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Code2 className="size-4 text-primary-foreground" />
          </span>
          <span className="text-base font-bold tracking-tight">ABTalks</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/dashboard"
            className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 sm:inline-flex"
          >
            Join Challenge
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Join Challenge
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
