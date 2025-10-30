import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VDOgate — India\'s Platform for Freelancers | No Ads, No Algorithm, 100% Earnings',
  description: 'Discover and hire freelancers by category and location. Earn directly from clients. ₹3,000/month, no ads, no algorithm, no commission on your services.',
  keywords: 'freelancer platform India, video portfolio, hire freelancers, freelance services, no commission platform, India freelance marketplace',
  openGraph: {
    title: 'VDOgate — India\'s Platform for Freelancers',
    description: 'No ads, no algorithm, no commission. ₹3,000/month for direct client access. Discover freelancers by category and location.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VDOgate — India\'s Platform for Freelancers',
    description: 'No ads, no algorithm, no commission. ₹3,000/month for direct client access.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
