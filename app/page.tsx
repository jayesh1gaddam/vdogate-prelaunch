import LiveEventsNav from '@/components/live-events/LiveEventsNav'
import LiveEventsHero from '@/components/live-events/LiveEventsHero'
import WhoIsThisFor from '@/components/live-events/WhoIsThisFor'
import HowItWorksLive from '@/components/live-events/HowItWorksLive'
import WhyVideogate from '@/components/live-events/WhyVideogate'
import WhatYouCanHost from '@/components/live-events/WhatYouCanHost'
import PricingSnapshot from '@/components/live-events/PricingSnapshot'
import LiveEventsCTA from '@/components/live-events/LiveEventsCTA'
import LiveEventsFooter from '@/components/live-events/LiveEventsFooter'

// JSON-LD structured data for rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://vdogate.com/#website',
      url: 'https://vdogate.com',
      name: 'VDOgate',
      description: 'Live Events Platform - Easy to Host. Easy to Earn.',
      publisher: {
        '@id': 'https://vdogate.com/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://app.vdogate.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://vdogate.com/#organization',
      name: 'VDOgate',
      url: 'https://vdogate.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vdogate.com/vdogate_app_logo.png',
        width: 512,
        height: 512
      },
      sameAs: [
        'https://twitter.com/vdogate',
        'https://instagram.com/vdogate',
        'https://linkedin.com/company/vdogate'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@vdogate.com'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://vdogate.com/#app',
      name: 'VDOgate Live Events',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'INR',
        description: 'Per live event - No subscriptions'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150'
      },
      featureList: [
        'Host live workshops and masterclasses',
        'Sell tickets or invite for free',
        '85% earnings to creators',
        '7-day settlement',
        'No monthly subscriptions'
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does it cost to host a live event on VDOgate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It costs ₹299 per live event. There are no monthly subscriptions or hidden fees.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much do creators earn from ticket sales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Creators keep 85% of all ticket sales. VDOgate charges a 15% platform fee.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take to receive payments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Payments are settled within 7 days of the event, with statutory deductions of 1-2% for TDS/TCS.'
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}
