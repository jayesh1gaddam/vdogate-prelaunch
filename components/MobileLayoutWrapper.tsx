'use client'

import { useIsMobile, useViewportHeight } from '@/hooks/usePWA'
import InstallPrompt from '@/components/mobile/InstallPrompt'

interface MobileLayoutWrapperProps {
  children: React.ReactNode
}

export default function MobileLayoutWrapper({ children }: MobileLayoutWrapperProps) {
  const isMobile = useIsMobile()
  useViewportHeight() // Sets --vh CSS variable

  return (
    <>
      {isMobile ? (
        <>
          {/* Page Content - Navigation is handled in page.tsx */}
          <main>
            {children}
          </main>

          {/* PWA Install Prompt */}
          <InstallPrompt />
        </>
      ) : (
        /* Desktop Layout - unchanged */
        <main>
          {children}
        </main>
      )}
    </>
  )
}
