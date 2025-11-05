import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PremiumMessage from '@/components/PremiumMessage'
import FreelancerCategories from '@/components/FreelancerCategories'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import PlatformPricing from '@/components/PlatformPricing'
import FoundingCreator from '@/components/FoundingCreator'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import TermsFooter from '@/components/TermsFooter'
import PWAProvider from '@/components/PWAProvider'
import MobileLayoutWrapper from '@/components/MobileLayoutWrapper'

export default function Home() {
  return (
    <PWAProvider>
      <MobileLayoutWrapper>
        <div className="min-h-screen">
          {/* Navigation - shown on both mobile and desktop */}
          <Navigation />

          <Hero />
          <PremiumMessage />
          <FreelancerCategories />
          <ProblemSolution />
          <HowItWorks />
          <WhoItsFor />
          <PlatformPricing />
          <FoundingCreator />
          <FinalCTA />
          <Footer />
          <TermsFooter />
        </div>
      </MobileLayoutWrapper>
    </PWAProvider>
  )
}
