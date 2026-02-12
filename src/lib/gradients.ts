/**
 * Brand Gradient System - Teal Harmony Palette
 * Consistent gradients for premium, cohesive design
 */

export const gradients = {
  // Primary brand gradients
  tealToViolet: 'bg-gradient-to-br from-deep-teal to-rich-violet',
  tealToLight: 'bg-gradient-to-br from-deep-teal to-light-teal',
  violetToLight: 'bg-gradient-to-br from-rich-violet to-light-teal',

  // Subtle gradients (for backgrounds)
  whiteToTeal: 'bg-gradient-to-br from-white via-deep-teal/5 to-deep-teal/10',
  whiteToViolet: 'bg-gradient-to-br from-white via-rich-violet/5 to-rich-violet/10',
  whiteToLight: 'bg-gradient-to-br from-white via-light-teal/5 to-light-teal/10',

  // Dark gradients
  darkToTeal: 'bg-gradient-to-br from-deep-indigo to-deep-indigo/70',

  // Overlay gradients
  overlayDark: 'bg-gradient-to-t from-deep-indigo/80 to-transparent',
  overlayTeal: 'bg-gradient-to-t from-deep-teal/80 to-transparent',
  overlayViolet: 'bg-gradient-to-t from-rich-violet/80 to-transparent',

  // Shimmer effect
  shimmer: 'bg-gradient-to-r from-transparent via-white/20 to-transparent',

  // Hover gradients
  hoverTeal: 'hover:bg-gradient-to-br hover:from-deep-teal/90 hover:to-deep-teal transition-all duration-300',
  hoverViolet: 'hover:bg-gradient-to-br hover:from-rich-violet/90 hover:to-rich-violet transition-all duration-300',
} as const

export type GradientVariant = keyof typeof gradients
