'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  variant?: 'default' | 'minimal'
}

export default function Loading({
  size = 'md',
  text = 'Loading...',
  variant = 'default',
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-5 h-5 text-deep-teal" />
        </motion.div>
        {text && <span className="text-sm text-gray-600">{text}</span>}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Rotating outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-3 border-transparent border-t-deep-teal border-r-deep-teal"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Rotating inner ring (slower) */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-rich-violet border-l-rich-violet"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-1/2 h-1/2 text-deep-teal" />
        </motion.div>
      </div>

      {text && (
        <motion.p
          className="text-gray-600 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}
