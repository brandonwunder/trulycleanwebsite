'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Phone } from 'lucide-react'

interface ErrorStateProps {
  title?: string
  message: string
  onRetry?: () => void
  showPhoneOption?: boolean
  phone?: string
}

export default function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
  showPhoneOption = true,
  phone = '(602) 695-0607',
}: ErrorStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 px-4 bg-red-50 rounded-2xl border-2 border-red-200"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Error Icon Animation */}
      <motion.div
        className="mb-6"
        animate={{ x: [0, -5, 5, 0] }}
        transition={{ duration: 0.5, repeat: 3 }}
      >
        <div className="relative">
          <AlertTriangle className="w-16 h-16 text-red-500" />
          <motion.div
            className="absolute inset-0 border-2 border-red-300 rounded-full"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-2 text-center">
        {title}
      </h3>

      {/* Message */}
      <p className="text-gray-700 text-center max-w-md mb-8">
        {message}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {onRetry && (
          <motion.button
            onClick={onRetry}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </motion.button>
        )}

        {showPhoneOption && (
          <motion.a
            href={`tel:${phone}`}
            className="flex items-center gap-2 bg-ocean-blue hover:bg-ocean-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            Call Us Instead
          </motion.a>
        )}
      </div>

      {/* Helpful message */}
      <p className="text-sm text-gray-600 text-center">
        If the problem persists, please contact us directly at{' '}
        <a href={`tel:${phone}`} className="text-ocean-blue font-semibold hover:underline">
          {phone}
        </a>
      </p>
    </motion.div>
  )
}
