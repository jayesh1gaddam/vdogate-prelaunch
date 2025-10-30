import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VDOgate - Transform Your Skills Into A Thriving Business | India\'s Premier Creator Platform',
  description: 'Join VDOgate, India\'s video-first platform where creators build professional profiles and monetize their skills. 90% revenue share.',
  keywords: 'creator platform India, video portfolio, freelancer platform, skill monetization, creator economy',
  openGraph: {
    title: 'VDOgate - Transform Your Skills Into A Thriving Business',
    description: 'India\'s premium video-first platform for creators. 90% revenue share. Build your professional profile today.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VDOgate - Transform Your Skills Into A Thriving Business',
    description: 'India\'s premium video-first platform for creators. 90% revenue share.',
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
