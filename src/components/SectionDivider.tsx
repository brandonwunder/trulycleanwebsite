'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'steam'
}

export function SectionDivider({ variant = 'wave' }: SectionDividerProps) {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definition */}
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.1)" />
          </linearGradient>
        </defs>

        {/* Wave path */}
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
