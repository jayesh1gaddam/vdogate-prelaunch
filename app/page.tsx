import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PWAProvider from '@/components/PWAProvider'
import MobileLayoutWrapper from '@/components/MobileLayoutWrapper'
import SeeRealSkills from '@/components/SeeRealSkills'
import LiveEventsPricing from '@/components/LiveEventsPricing'
import ForInfluencers from '@/components/ForInfluencers'

// Lazy load below-fold components with loading states
const FreelancerCategories = dynamic(() => import('@/components/FreelancerCategories'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})



const PlatformPricing = dynamic(() => import('@/components/PlatformPricing'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const FoundingCreator = dynamic(() => import('@/components/FoundingCreator'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const TermsFooter = dynamic(() => import('@/components/TermsFooter'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})

export default function Home() {
  return (
    <PWAProvider>
      <MobileLayoutWrapper>
        <div className="min-h-screen">
          {/* Navigation - shown on both mobile and desktop */}
          <Navigation />

          {/* Above-fold content - loaded immediately */}
          <Hero />

          {/* Below-fold content - lazy loaded */}
          <SeeRealSkills />
          <FreelancerCategories />
          <HowItWorks />
          <PlatformPricing />
          <LiveEventsPricing />
          <ForInfluencers />
          <FoundingCreator />
          <FinalCTA />
          <Footer />
          <TermsFooter />
        </div>
      </MobileLayoutWrapper>
    </PWAProvider>
  )
}
