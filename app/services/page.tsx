import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import PWAProvider from '@/components/PWAProvider'
import MobileLayoutWrapper from '@/components/MobileLayoutWrapper'
import ServicesHeroV2 from '@/components/ServicesHeroV2'

// Lazy load below-fold components with loading states
const BuyerValueProps = dynamic(() => import('@/components/BuyerValueProps'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const BrowseCategoriesBlue = dynamic(() => import('@/components/BrowseCategoriesBlue'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const BuyerProblemSolution = dynamic(() => import('@/components/BuyerProblemSolution'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const BuyerTestimonials = dynamic(() => import('@/components/BuyerTestimonials'), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse" />
})

const BuyerBenefits = dynamic(() => import('@/components/BuyerBenefits'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const BuyerFinalCTA = dynamic(() => import('@/components/BuyerFinalCTA'), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const TermsFooter = dynamic(() => import('@/components/TermsFooter'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})

export const metadata = {
  title: 'Discover Services | VDOgate - Find Skilled Freelancers',
  description: 'Find skilled freelancers on VDOgate. Watch video portfolios, browse by category and location, and connect directly. Free for buyers, always.',
}

export default function ServicesPage() {
  return (
    <PWAProvider>
      <MobileLayoutWrapper>
        <div className="min-h-screen">
          {/* Navigation */}
          <Navigation />

          {/* Above-fold content */}
          <ServicesHeroV2 />

          {/* Below-fold content - lazy loaded */}
          <BuyerValueProps />
          <BrowseCategoriesBlue />
          <BuyerProblemSolution />
          <HowItWorks defaultTab="customers" />
          <BuyerTestimonials />
          <BuyerBenefits />
          <BuyerFinalCTA />
          <Footer />
          <TermsFooter />
        </div>
      </MobileLayoutWrapper>
    </PWAProvider>
  )
}
