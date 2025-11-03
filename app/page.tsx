import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FreelancerCategories from '@/components/FreelancerCategories'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import PlatformPricing from '@/components/PlatformPricing'
import FoundingCreator from '@/components/FoundingCreator'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import TermsFooter from '@/components/TermsFooter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FreelancerCategories />
      <ProblemSolution />
      <HowItWorks />
      <WhoItsFor />
      <PlatformPricing />
      <FoundingCreator />
      <FinalCTA />
      <Footer />
      <TermsFooter />
    </main>
  )
}
