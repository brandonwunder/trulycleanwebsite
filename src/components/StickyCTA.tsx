'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      const shouldShow = window.scrollY > 300

      // Hide when Contact section is visible
      const contactSection = document.getElementById('quote-form')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(shouldShow && !isContactVisible && !isDismissed)
      } else {
        setIsVisible(shouldShow && !isDismissed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 max-w-sm"
        >
          <div className="relative">
            {/* Dismiss button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
              aria-label="Dismiss free quote offer"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Main CTA Button */}
            <div className="glass rounded-full p-1.5 shadow-2xl border border-vibrant-teal/30">
              <button
                onClick={scrollToQuote}
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-vibrant-teal to-vibrant-teal/90 text-white font-heading font-bold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="hidden md:inline">Get Your Free Quote</span>
                <span className="md:hidden">Get Quote</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
