import type { Metadata, Viewport } from 'next'
import './globals.css'

function getSafeMetadataBase(): URL {
  const fallback = 'https://vdogate.com'
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  if (!raw) {
    return new URL(fallback)
  }
  try {
    return new URL(raw)
  } catch {
    return new URL(fallback)
  }
}

export const metadata: Metadata = {
  metadataBase: getSafeMetadataBase(),
  title: 'VDOgate Live Events - Easy to Host. Easy to Earn. | ₹299 per event',
  description: 'Earn through live sessions. Create events, sell tickets, or invite attendees for free. ₹299 per live event. No monthly subscriptions. No commitments. 85% earnings to you.',
  keywords: 'live events platform, host live sessions, sell tickets online, live workshops, online masterclass, earn from live events, no subscription events',
  applicationName: 'VDOgate',
  authors: [{ name: 'VDOgate' }],
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon-512x512.png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VDOgate',
  },
  openGraph: {
    title: 'VDOgate Live Events - Easy to Host. Easy to Earn.',
    description: 'Earn through live sessions. ₹299 per event. No subscriptions. 85% earnings to you. Create events, sell tickets, or invite attendees for free.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'VDOgate',
    images: [
      {
        url: '/vdogate_app_logo.png',
        width: 1200,
        height: 630,
        alt: 'VDOgate Live Events - Easy to Host. Easy to Earn.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VDOgate Live Events - Easy to Host. Easy to Earn.',
    description: 'Earn through live sessions. ₹299 per event. No subscriptions. 85% earnings to you.',
    images: ['/vdogate_app_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#020617' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="https://app.vdogate.com" />
        <link rel="preconnect" href="https://app.vdogate.com" crossOrigin="anonymous" />

        {/* Preload critical hero image */}
        <link rel="preload" href="/hero_carousel.webp" as="image" type="image/webp" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Meta Tags */}
        <meta name="application-name" content="VDOgate" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VDOgate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* iOS Splash Screens */}
        <link rel="apple-touch-startup-image" href="/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1242x2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1242x2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-828x1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1170x2532.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1284x2778.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1290x2796.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />

        {/* Safe area insets */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --safe-area-inset-top: env(safe-area-inset-top);
              --safe-area-inset-right: env(safe-area-inset-right);
              --safe-area-inset-bottom: env(safe-area-inset-bottom);
              --safe-area-inset-left: env(safe-area-inset-left);
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
