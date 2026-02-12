'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { recentCleans } from '@/lib/cleaning-data'

export default function RecentCleansTicker() {
  return (
    <section className="relative py-3 bg-navy-dark overflow-hidden">
      {/* Ticker content */}
      <div className="relative flex items-center min-h-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set */}
          {recentCleans.map((clean, i) => (
            <div key={`first-${i}`} className="flex items-center gap-3 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-vibrant-teal flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">{clean}</span>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {recentCleans.map((clean, i) => (
            <div key={`second-${i}`} className="flex items-center gap-3 flex-shrink-0">
              <Sparkles className="w-4 h-4 text-vibrant-teal flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">{clean}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges for visual polish */}
      <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-navy-dark to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-navy-dark to-transparent pointer-events-none" />

      {/* CSS media query for reduced motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          ::-webkit-keyframes none {
            0%, 100% {
              transform: translateX(0%);
            }
          }
        }
      `}</style>
    </section>
  )
}
