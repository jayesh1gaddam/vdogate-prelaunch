'use client'

import { useEffect } from 'react'
import { useIsMobile, useViewportHeight } from '@/hooks/usePWA'
import MobileNavigation from '@/components/mobile/MobileNavigation'
import FloatingActionButton from '@/components/mobile/FloatingActionButton'
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
          {/* Mobile Navigation */}
          <MobileNavigation showBottomNav={true} />

          {/* Page Content with padding for fixed navigation */}
          <main className="pt-16 pb-24">
            {children}
          </main>

          {/* Floating Action Button */}
          <FloatingActionButton />

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
