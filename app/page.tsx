import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import LiveEvents from '@/components/LiveEvents'
import FoundingCreator from '@/components/FoundingCreator'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import TermsFooter from '@/components/TermsFooter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <WhoItsFor />
      <LiveEvents />
      <FoundingCreator />
      <FinalCTA />
      <Footer />
      <TermsFooter />
    </main>
  )
}
