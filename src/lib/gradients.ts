/**
 * Brand Gradient System
 * Consistent gradients for premium, cohesive design
 */

export const gradients = {
  // Primary brand gradients
  tealToGreen: 'bg-gradient-to-br from-vibrant-teal to-vibrant-green',
  tealToOrange: 'bg-gradient-to-br from-vibrant-teal to-vibrant-orange',
  greenToOrange: 'bg-gradient-to-br from-vibrant-green to-vibrant-orange',

  // Subtle gradients (for backgrounds)
  whiteToTeal: 'bg-gradient-to-br from-white via-vibrant-teal/5 to-vibrant-teal/10',
  whiteToGreen: 'bg-gradient-to-br from-white via-vibrant-green/5 to-vibrant-green/10',
  whiteToOrange: 'bg-gradient-to-br from-white via-vibrant-orange/5 to-vibrant-orange/10',

  // Dark gradients
  darkToTeal: 'bg-gradient-to-br from-navy-dark to-navy-dark/70',

  // Overlay gradients
  overlayDark: 'bg-gradient-to-t from-navy-dark/80 to-transparent',
  overlayTeal: 'bg-gradient-to-t from-vibrant-teal/80 to-transparent',
  overlayGreen: 'bg-gradient-to-t from-vibrant-green/80 to-transparent',

  // Shimmer effect
  shimmer: 'bg-gradient-to-r from-transparent via-white/20 to-transparent',

  // Hover gradients
  hoverTeal: 'hover:bg-gradient-to-br hover:from-vibrant-teal/90 hover:to-vibrant-teal transition-all duration-300',
  hoverGreen: 'hover:bg-gradient-to-br hover:from-vibrant-green/90 hover:to-vibrant-green transition-all duration-300',
} as const

export type GradientVariant = keyof typeof gradients
