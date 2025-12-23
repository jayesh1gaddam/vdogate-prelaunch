import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import PWAProvider from '@/components/PWAProvider'
import MobileLayoutWrapper from '@/components/MobileLayoutWrapper'
import ServicesHero from '@/components/ServicesHero'

const FreelancerCategories = dynamic(() => import('@/components/FreelancerCategories'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const TrustCredibility = dynamic(() => import('@/components/TrustCredibility'), {
  loading: () => <div className="h-64 bg-white animate-pulse" />
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
          <Navigation />
          <ServicesHero />
          <FreelancerCategories />
          <HowItWorks />
          <TrustCredibility />
          <Footer />
          <TermsFooter />
        </div>
      </MobileLayoutWrapper>
    </PWAProvider>
  )
}
