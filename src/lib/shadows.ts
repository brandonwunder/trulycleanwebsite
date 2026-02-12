/**
 * Enterprise-Grade Shadow System
 * Elevation-based shadows with glow effects for premium design
 */

export const shadows = {
  // Standard elevation shadows
  sm: 'shadow-sm',
  md: 'shadow-md hover:shadow-lg transition-shadow duration-200',
  lg: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
  xl: 'shadow-xl hover:shadow-2xl transition-shadow duration-300',
  '2xl': 'shadow-2xl',

  // Inner shadow (for inset effects)
  inner: 'shadow-inner',

  // Glow effects - Teal (primary)
  glow: 'shadow-[0_0_25px_rgba(6,182,212,0.3)]',
  glowHover: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-shadow duration-300',
  glowActive: 'shadow-[0_0_40px_rgba(6,182,212,0.5)]',

  // Glow effects - Green (secondary)
  glowGreen: 'shadow-[0_0_25px_rgba(132,204,22,0.3)]',
  glowGreenHover: 'hover:shadow-[0_0_35px_rgba(132,204,22,0.4)] transition-shadow duration-300',

  // Glow effects - Orange (accent)
  glowOrange: 'shadow-[0_0_25px_rgba(249,115,22,0.3)]',
  glowOrangeHover: 'hover:shadow-[0_0_35px_rgba(249,115,22,0.4)] transition-shadow duration-300',

  // Soft shadow (for cards)
  card: 'shadow-md',
  cardHover: 'shadow-md hover:shadow-xl transition-shadow duration-300',

  // Deep shadow (for modals, overlays)
  deep: 'shadow-2xl',
} as const

export type ShadowVariant = keyof typeof shadows
