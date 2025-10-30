import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VDOgate — India\'s Platform for Freelancers | No Ads, No Algorithm, 100% Earnings',
  description: 'Discover and hire freelancers by category and location. Earn directly from clients. ₹3,000/month, no ads, no algorithm, no commission on your services.',
  keywords: 'freelancer platform India, video portfolio, hire freelancers, freelance services, no commission platform, India freelance marketplace',
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.png',
      },
    ],
  },
  openGraph: {
    title: 'VDOgate — India\'s Platform for Freelancers',
    description: 'No ads, no algorithm, no commission. ₹3,000/month for direct client access. Discover freelancers by category and location.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'VDOgate - India\'s Platform for Freelancers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VDOgate — India\'s Platform for Freelancers',
    description: 'No ads, no algorithm, no commission. ₹3,000/month for direct client access.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
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
