/**
 * Framer Motion Animation Utilities
 * Reusable animation variants for consistent, premium motion
 */

import { Variants } from 'framer-motion'

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Slide down animation
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Slide left animation
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Slide right animation
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Stagger container - manages children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// Stagger container for fast reveals
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// Floating animation - for background elements
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Floating animation - slower
export const floatingAnimationSlow = {
  y: [0, -30, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Floating animation with rotation
export const floatingWithRotation = {
  y: [0, -20, 0],
  rotate: [0, 3, -3, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Pulse animation
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Glow animation
export const glowAnimation = {
  boxShadow: [
    '0 0 20px rgba(6, 182, 212, 0.3)',
    '0 0 40px rgba(6, 182, 212, 0.5)',
    '0 0 20px rgba(6, 182, 212, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Shimmer animation - for loading states
export const shimmerAnimation = {
  backgroundPosition: ['200% 0', '-200% 0'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'linear',
  },
}

// Bounce animation (subtle)
export const bounceAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Swing animation - for icons
export const swingAnimation = {
  rotate: [-3, 3, -3],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Hover lift effect
export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: 'none' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2 },
  },
}

// Hover scale effect
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
}

// Hover glow effect
export const hoverGlow: Variants = {
  initial: { boxShadow: 'none' },
  hover: {
    boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
    transition: { duration: 0.3 },
  },
}

// Page transition - enter
export const pageEnter: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// Success animation
export const successAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      duration: 0.6,
    },
  },
}

// Error animation - shake
export const errorShake: Variants = {
  animate: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

// Reveal up animation - cinematic text reveal with clip-path
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// Draw line animation - for SVG path drawing
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
}

// Tier content switcher - for Clean-O-Meter
export const tierSwitch: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// Tab content reveal - for ChecklistTabs and other tabs
export const tabReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Checklist item filter animation
export const checklistFilter: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
}
