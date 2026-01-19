import LiveEventsNav from '@/components/live-events/LiveEventsNav'
import LiveEventsHero from '@/components/live-events/LiveEventsHero'
import WhoIsThisFor from '@/components/live-events/WhoIsThisFor'
import HowItWorksLive from '@/components/live-events/HowItWorksLive'
import WhyVideogate from '@/components/live-events/WhyVideogate'
import WhatYouCanHost from '@/components/live-events/WhatYouCanHost'
import PricingSnapshot from '@/components/live-events/PricingSnapshot'
import LiveEventsCTA from '@/components/live-events/LiveEventsCTA'
import LiveEventsFooter from '@/components/live-events/LiveEventsFooter'

export default function Home() {
  return (
    <main className="bg-slate-950">
      <LiveEventsNav />
      <LiveEventsHero />
      <WhoIsThisFor />
      <HowItWorksLive />
      <WhyVideogate />
      <WhatYouCanHost />
      <PricingSnapshot />
      <LiveEventsCTA />
      <LiveEventsFooter />
    </main>
  )
}
