'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Sparkles } from 'lucide-react'
import { ReactNode } from 'react'

interface SuccessCelebrationProps {
  title: string
  message: string
  details?: string[]
  action?: {
    label: string
    onClick: () => void
  }
  icon?: ReactNode
}

// Confetti particle component
function Confetti() {
  const particles = Array.from({ length: 30 })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const delay = (i % 10) * 0.1
        const duration = 2 + (i % 3) * 0.5
        const x = Math.random() * 100
        const rotation = Math.random() * 360

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${x}%`,
              top: '-10px',
              background: ['#06b6d4', '#84cc16', '#f97316'][i % 3],
            }}
            animate={{
              y: window.innerHeight + 20,
              x: Math.sin(rotation) * 100,
              rotate: rotation,
              opacity: [1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              ease: 'easeIn',
            }}
          />
        )
      })}
    </div>
  )
}

export default function SuccessCelebration({
  title,
  message,
  details,
  action,
  icon,
}: SuccessCelebrationProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-vibrant-green/10 to-vibrant-teal/10 rounded-2xl border-2 border-vibrant-green/30 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Confetti effect */}
      <Confetti />

      {/* Icon with animation */}
      <motion.div
        className="mb-6 relative z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6 }}
      >
        {icon || (
          <CheckCircle className="w-20 h-20 text-vibrant-green" />
        )}

        {/* Floating sparkles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${-10 - i * 5}px`,
              left: `${-10 + i * 10}px`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-5 h-5 text-vibrant-teal" />
          </motion.div>
        ))}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="font-heading font-bold text-3xl text-navy-dark mb-2 text-center relative z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Message */}
      <motion.p
        className="text-gray-700 text-center max-w-md mb-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {message}
      </motion.p>

      {/* Details list */}
      {details && details.length > 0 && (
        <motion.ul
          className="space-y-3 mb-8 w-full max-w-md relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {details.map((detail, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 p-3 bg-white/80 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <CheckCircle className="w-5 h-5 text-vibrant-green flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Action Button */}
      {action && (
        <motion.button
          onClick={action.onClick}
          className="bg-gradient-to-r from-vibrant-teal to-vibrant-green text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  )
}
