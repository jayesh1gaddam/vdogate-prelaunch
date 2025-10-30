/**
 * VDOGATE BRAND CONSTANTS
 * Official Brand Guidelines v1.0
 *
 * This file contains all brand-related constants including colors,
 * typography, spacing, and other design tokens from the official
 * VDOgate Brand Guidelines.
 */

// ============================================
// PRIMARY BRAND COLORS
// ============================================

export const BRAND_COLORS = {
  // Portal Colors - Innovation & Premium
  portal: {
    primary: '#463DC7',
    dark: '#352780',
    light: '#6B63CF',
    lighter: '#9088D9',
  },

  // VDO Orange - Creativity & Energy
  vdo: {
    orange: '#F7682B',
    orangeDark: '#EA580C',
  },

  // Gate Blue - Trust & Professional
  gate: {
    blue: '#2563EB',
    blueLight: '#3B82F6',
  },

  // Extended Colors
  extended: {
    success: '#4ED33C',
    warning: '#F79F2B',
    error: '#FF3321',
  },

  // Neutral Palette
  neutral: {
    black: '#111827',
    gray900: '#374151',
    gray600: '#6B7280',
    gray200: '#F3F4F6',
    gray50: '#FAFAFA',
    white: '#FFFFFF',
  },
} as const

// ============================================
// GRADIENTS
// ============================================

export const BRAND_GRADIENTS = {
  portal: 'linear-gradient(135deg, #463DC7 0%, #6B63CF 50%, #9088D9 100%)',
  portalHover: 'linear-gradient(135deg, #352780 0%, #463DC7 50%, #6B63CF 100%)',
  portalVertical: 'linear-gradient(180deg, #463DC7 0%, #6B63CF 50%, #9088D9 100%)',
  vdo: 'linear-gradient(135deg, #F7682B 0%, #EA580C 100%)',
  gate: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
  subtle: 'linear-gradient(135deg, rgba(70,61,199,0.05) 0%, rgba(144,136,217,0.05) 100%)',
} as const

// ============================================
// TYPOGRAPHY
// ============================================

export const BRAND_TYPOGRAPHY = {
  fontFamily: {
    primary: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    fallback: ['Helvetica', 'Arial', 'sans-serif'].join(', '),
  },

  // Desktop sizes (in pixels)
  fontSize: {
    title: 56,
    h1: 48,
    h2: 36,
    h3: 24,
    h4: 20,
    body: 16,
    small: 14,
  },

  // Mobile sizes (in pixels)
  fontSizeMobile: {
    title: 36,
    h1: 28,
    h2: 24,
    h3: 20,
    h4: 18,
    body: 14,
    small: 12,
  },

  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },

  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },
} as const

// ============================================
// SPACING SYSTEM (8px base grid)
// ============================================

export const BRAND_SPACING = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  '4xl': '8rem',   // 128px
  '5xl': '10rem',  // 160px
} as const

// ============================================
// BORDER RADIUS
// ============================================

export const BRAND_RADIUS = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const

// ============================================
// SHADOWS
// ============================================

export const BRAND_SHADOWS = {
  portal: {
    sm: '0 8px 16px rgba(70, 61, 199, 0.2)',
    md: '0 12px 24px rgba(70, 61, 199, 0.25)',
    lg: '0 20px 40px rgba(70, 61, 199, 0.3)',
  },
  elevation: {
    1: '0 1px 3px rgba(0, 0, 0, 0.1)',
    2: '0 4px 6px rgba(0, 0, 0, 0.1)',
    3: '0 10px 15px rgba(0, 0, 0, 0.1)',
    4: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
  glow: {
    portal: '0 0 20px rgba(70, 61, 199, 0.4)',
    vdo: '0 0 20px rgba(247, 104, 43, 0.4)',
    gate: '0 0 20px rgba(37, 99, 235, 0.4)',
  },
} as const

// ============================================
// BREAKPOINTS
// ============================================

export const BRAND_BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ============================================
// ANIMATION TIMINGS
// ============================================

export const BRAND_ANIMATION = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
} as const

// ============================================
// Z-INDEX SYSTEM
// ============================================

export const BRAND_Z_INDEX = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
} as const

// ============================================
// BRAND MESSAGING
// ============================================

export const BRAND_MESSAGING = {
  tagline: 'The Professional Gateway to Creator Success',
  mission: 'To democratize skill monetization by creating a professional gateway where talented creators transform their expertise into thriving businesses through video-first experiences.',
  personality: ['Professional', 'Innovative', 'Trustworthy', 'Empowering', 'Accessible'],
} as const

// ============================================
// LOGO GUIDELINES
// ============================================

export const BRAND_LOGO = {
  minWidth: {
    digital: 140, // pixels
    print: 1.2,   // inches
  },
  clearSpace: 'Equal to the height of the 3D "D" element',
  paths: {
    primary: '/logo.png',
    alternate: '/vdogate_logo.png',
  },
} as const

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color with optional opacity
 */
export const getColorWithOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

/**
 * Get responsive font size
 */
export const getResponsiveFontSize = (size: keyof typeof BRAND_TYPOGRAPHY.fontSize, isMobile: boolean = false) => {
  return isMobile ? BRAND_TYPOGRAPHY.fontSizeMobile[size] : BRAND_TYPOGRAPHY.fontSize[size]
}

// Export all as a single object for convenience
export const BRAND = {
  colors: BRAND_COLORS,
  gradients: BRAND_GRADIENTS,
  typography: BRAND_TYPOGRAPHY,
  spacing: BRAND_SPACING,
  radius: BRAND_RADIUS,
  shadows: BRAND_SHADOWS,
  breakpoints: BRAND_BREAKPOINTS,
  animation: BRAND_ANIMATION,
  zIndex: BRAND_Z_INDEX,
  messaging: BRAND_MESSAGING,
  logo: BRAND_LOGO,
} as const

export default BRAND
