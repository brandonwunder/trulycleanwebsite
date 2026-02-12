/**
 * Brand Gradient System - Ocean Depths Palette
 * Consistent gradients for premium, cohesive design
 */

export const gradients = {
  // Primary brand gradients
  oceanToRoyal: 'bg-gradient-to-br from-ocean-blue to-royal-blue',
  oceanToPurple: 'bg-gradient-to-br from-ocean-blue to-vibrant-purple',
  royalToPurple: 'bg-gradient-to-br from-royal-blue to-vibrant-purple',

  // Subtle gradients (for backgrounds)
  whiteToOcean: 'bg-gradient-to-br from-white via-ocean-blue/5 to-ocean-blue/10',
  whiteToRoyal: 'bg-gradient-to-br from-white via-royal-blue/5 to-royal-blue/10',
  whiteToPurple: 'bg-gradient-to-br from-white via-vibrant-purple/5 to-vibrant-purple/10',

  // Dark gradients
  darkToOcean: 'bg-gradient-to-br from-deep-indigo to-deep-indigo/70',

  // Overlay gradients
  overlayDark: 'bg-gradient-to-t from-deep-indigo/80 to-transparent',
  overlayOcean: 'bg-gradient-to-t from-ocean-blue/80 to-transparent',
  overlayRoyal: 'bg-gradient-to-t from-royal-blue/80 to-transparent',

  // Shimmer effect
  shimmer: 'bg-gradient-to-r from-transparent via-white/20 to-transparent',

  // Hover gradients
  hoverOcean: 'hover:bg-gradient-to-br hover:from-ocean-blue/90 hover:to-ocean-blue transition-all duration-300',
  hoverRoyal: 'hover:bg-gradient-to-br hover:from-royal-blue/90 hover:to-royal-blue transition-all duration-300',
} as const

export type GradientVariant = keyof typeof gradients
