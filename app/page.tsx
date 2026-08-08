import { Community } from '@/components/site/community'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { HowItWorks } from '@/components/site/how-it-works'
import { Navbar } from '@/components/site/navbar'
import { Stats } from '@/components/site/stats'
import { Streak } from '@/components/site/streak'
import { Tracks } from '@/components/site/tracks'
import { TonightCommit } from '@/components/site/tonight-commit'

export default function Page() {
  return (
    <main id="top" className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Tracks />
      <Streak />
      <TonightCommit />
      <Community />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
