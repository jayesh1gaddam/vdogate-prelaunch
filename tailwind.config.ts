import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY BRAND COLORS - Official VDOgate Brand Guidelines
        portal: {
          primary: '#463DC7',    // Portal Blue - Innovation & Premium
          dark: '#352780',       // Portal Dark - Deep Purple
          light: '#6B63CF',      // Portal Light
          lighter: '#9088D9',    // Portal Lighter
        },
        vdo: {
          orange: '#F7682B',     // VDO Orange - Creativity & Energy
          'orange-dark': '#EA580C', // Emphasis color for earnings/metrics
        },
        gate: {
          blue: '#2563EB',       // Gate Blue - Trust & Professional
          'blue-light': '#3B82F6', // Gate Blue Light
        },

        // EXTENDED COLOR SYSTEM
        success: '#4ED33C',      // Success Green
        warning: '#F79F2B',      // Warning Orange
        error: '#FF3321',        // Error Red

        // NEUTRAL PALETTE - Official Brand Guidelines
        brand: {
          black: '#111827',      // Charcoal Black
          'gray-900': '#374151', // Dark Gray
          'gray-600': '#6B7280', // Medium Gray
          'gray-200': '#F3F4F6', // Light Gray
          'gray-50': '#FAFAFA',  // Background Gray
          white: '#FFFFFF',      // Pure White
        },

        // Legacy neutral colors for backward compatibility
        neutral: {
          black: '#111827',
          'gray-dark': '#374151',
          gray: '#6B7280',
          'gray-light': '#9CA3AF',
          'gray-lighter': '#E5E7EB',
          white: '#FFFFFF',
          background: '#FAFAFA',
        },
      },
      backgroundImage: {
        // PRIMARY PORTAL GRADIENT
        'portal-gradient': 'linear-gradient(135deg, #463DC7 0%, #6B63CF 50%, #9088D9 100%)',
        'portal-gradient-hover': 'linear-gradient(135deg, #352780 0%, #463DC7 50%, #6B63CF 100%)',
        'portal-gradient-vertical': 'linear-gradient(180deg, #463DC7 0%, #6B63CF 50%, #9088D9 100%)',

        // SECONDARY GRADIENTS
        'vdo-gradient': 'linear-gradient(135deg, #F7682B 0%, #EA580C 100%)',
        'gate-gradient': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',

        // SUBTLE BACKGROUNDS
        'portal-subtle': 'linear-gradient(135deg, rgba(70,61,199,0.05) 0%, rgba(144,136,217,0.05) 100%)',
        'brand-mesh': 'radial-gradient(at 40% 20%, rgba(70,61,199,0.15) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(247,104,43,0.1) 0px, transparent 50%)',
      },
      fontFamily: {
        // OFFICIAL TYPOGRAPHY SYSTEM
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // BRAND TYPOGRAPHY HIERARCHY (Desktop / Mobile)
        // T (Title) - 56px / 36px
        'title': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'title-mobile': ['2.25rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.01em' }],

        // H1 - 48px / 28px
        'h1': ['3rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1-mobile': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],

        // H2 - 36px / 24px
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.25', fontWeight: '700' }],

        // H3 - 24px / 20px
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.3', fontWeight: '700' }],

        // H4 - 20px / 18px
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-mobile': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],

        // Body Text (BT) - 16px / 14px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],

        // Small Text (ST) - 14px / 12px
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small-mobile': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],

        // Legacy sizes for backward compatibility
        'display-lg': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'headline-lg': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'headline-sm': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '30': '7.5rem',   // 120px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },
      borderRadius: {
        'brand-sm': '8px',
        'brand-md': '12px',
        'brand-lg': '16px',
        'brand-xl': '24px',
      },
      boxShadow: {
        // PORTAL SHADOWS
        'portal': '0 20px 40px rgba(70, 61, 199, 0.3)',
        'portal-md': '0 12px 24px rgba(70, 61, 199, 0.25)',
        'portal-sm': '0 8px 16px rgba(70, 61, 199, 0.2)',
        'portal-xs': '0 4px 8px rgba(70, 61, 199, 0.15)',

        // ELEVATION SYSTEM
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'elevation-4': '0 20px 25px rgba(0, 0, 0, 0.1)',

        // GLOW EFFECTS
        'glow-portal': '0 0 20px rgba(70, 61, 199, 0.4)',
        'glow-vdo': '0 0 20px rgba(247, 104, 43, 0.4)',
        'glow-gate': '0 0 20px rgba(37, 99, 235, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'brand': '12px',
      },
    },
  },
  plugins: [],
}

export default config
