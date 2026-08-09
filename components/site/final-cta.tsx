import { MagneticButton } from '@/components/site/magnetic-button'
import { Reveal } from '@/components/site/reveal'
import { ArrowRight, Compass } from 'lucide-react'

export function FinalCta() {
  return (
    <section id="join" className="relative px-4 py-20 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center md:p-16">
          {/* animated gradient bg */}
          <div
            aria-hidden
            className="animate-drift absolute inset-0 -z-10 bg-[linear-gradient(120deg,oklch(0.3_0.12_295),oklch(0.28_0.09_240),oklch(0.32_0.11_320),oklch(0.3_0.12_295))]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_50%_-20%,oklch(0.7_0.2_300/0.5),transparent_60%)]"
          />

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Career in 60 Days?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-foreground/80">
            Your future self starts with a single commit today. Join thousands of
            students turning daily effort into internships that change everything.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton href="#top" className="w-full sm:w-auto">
              Start Today <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton href="#tracks" variant="ghost" className="w-full sm:w-auto">
              <Compass className="size-4 text-accent" /> Explore Tracks
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
