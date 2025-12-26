import dynamic from 'next/dynamic'
import NavigationBlue from '@/components/NavigationBlue'
import PWAProvider from '@/components/PWAProvider'
import MobileLayoutWrapper from '@/components/MobileLayoutWrapper'
import ServicesHeroV2 from '@/components/ServicesHeroV2'

// Lazy load below-fold components with loading states
const BuyerValueProps = dynamic(() => import('@/components/BuyerValueProps'), {
  loading: () => <div className="h-64 bg-white animate-pulse" />
})

const BrowseCategoriesBlue = dynamic(() => import('@/components/BrowseCategoriesBlue'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />
})

const BuyerTestimonials = dynamic(() => import('@/components/BuyerTestimonials'), {
  loading: () => <div className="h-64 bg-slate-900 animate-pulse" />
})

const BuyerFinalCTA = dynamic(() => import('@/components/BuyerFinalCTA'), {
  loading: () => <div className="h-64 bg-slate-900 animate-pulse" />
})

const FooterBlue = dynamic(() => import('@/components/FooterBlue'), {
  loading: () => <div className="h-64 bg-slate-900 animate-pulse" />
})

const TermsFooter = dynamic(() => import('@/components/TermsFooter'), {
  loading: () => <div className="h-16 bg-gray-50 animate-pulse" />
})

export const metadata = {
  title: 'For Buyers | VDOgate - Find Skilled Freelancers',
  description: 'Find skilled freelancers on VDOgate. Watch video portfolios, browse by category and location, and connect directly. Free for buyers, always.',
}

export default function BuyersPage() {
  return (
    <PWAProvider>
      <MobileLayoutWrapper>
        <div className="min-h-screen">
          {/* Navigation - Blue theme for buyers */}
          <NavigationBlue />

          {/* Above-fold content */}
          <ServicesHeroV2 />

          {/* Below-fold content - lazy loaded */}
          <BuyerValueProps />
          <BrowseCategoriesBlue />
          <BuyerTestimonials />
          <BuyerFinalCTA />
          <FooterBlue />
          <TermsFooter />
        </div>
      </MobileLayoutWrapper>
    </PWAProvider>
  )
}
