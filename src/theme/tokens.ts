// Style tokens derived from "The China Effect" PDF
// Converted to dark theme with black background

export const colors = {
  // Background colors
  background: {
    primary: '#000000',
    secondary: '#0A0A0A',
    tertiary: '#111111',
    card: '#141414',
    cardHover: '#1A1A1A',
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#A3A3A3',
    tertiary: '#737373',
    muted: '#525252',
  },
  
  // Accent colors (inspired by Chinese red/gold aesthetics)
  accent: {
    primary: '#DC2626', // Chinese red
    primaryHover: '#EF4444',
    secondary: '#B91C1C',
    gold: '#F59E0B',
    goldMuted: '#D97706',
  },
  
  // Border colors
  border: {
    default: '#262626',
    light: '#1F1F1F',
    accent: '#DC2626',
  },
  
  // Status colors
  status: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
} as const;

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
} as const;

export const typography = {
  fonts: {
    heading: 'var(--font-oswald)',
    body: 'var(--font-inter)',
    chinese: 'var(--font-noto-sans-sc)',
  },
  sizes: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1.1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

export const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)',
  glow: '0 0 20px rgba(220, 38, 38, 0.3)',
  goldGlow: '0 0 20px rgba(245, 158, 11, 0.3)',
} as const;

export const transitions = {
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
} as const;
