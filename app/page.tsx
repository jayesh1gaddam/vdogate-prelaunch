import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AccessBand from '@/components/AccessBand'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import LiveEvents from '@/components/LiveEvents'
import WhoItsFor from '@/components/WhoItsFor'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import TrustCredibility from '@/components/TrustCredibility'
import FoundingCreator from '@/components/FoundingCreator'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AccessBand />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <LiveEvents />
      <WhoItsFor />
      <CompetitiveAdvantage />
      <TrustCredibility />
      <FoundingCreator />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
