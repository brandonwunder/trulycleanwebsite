'use client'

import { motion } from 'framer-motion'
import { MapPin, Sparkles, Star } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations'

export default function ServiceAreaMap() {
  return (
    <section
      id="service-area"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-5xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-sm">Our Service Area</span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Proudly Serving
            <br />
            <span className="text-deep-teal">North Phoenix</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Local roots, premium service across the I-17 corridor from our New River headquarters.
          </motion.p>
        </div>

        {/* Arizona Map Card */}
        <motion.div
          variants={slideUp}
          className="relative"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-gray-200/50">
            {/* Map Container */}
            <div className="relative max-w-md mx-auto">
              {/* Arizona SVG Outline */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="arizona-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891B2" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <radialGradient id="hq-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0891B2" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#0891B2" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Arizona State Outline (Simplified) */}
                <path
                  d="M 50 50 L 350 50 L 350 110 L 320 180 L 310 250 L 300 320 L 290 380 L 280 420 L 250 450 L 200 460 L 150 450 L 120 420 L 100 380 L 90 320 L 80 250 L 70 180 L 60 110 Z"
                  fill="url(#arizona-gradient)"
                  stroke="#0891B2"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Service Area Circle (North Phoenix Region) */}
                <motion.circle
                  cx="200"
                  cy="150"
                  r="60"
                  fill="url(#hq-glow)"
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* HQ Star Marker */}
                <g transform="translate(200, 150)">
                  {/* Star Background Glow */}
                  <motion.circle
                    r="25"
                    fill="#0891B2"
                    opacity="0.15"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Star Icon */}
                  <motion.path
                    d="M 0 -12 L 3.5 -4 L 12 -4 L 5.5 2 L 8 10 L 0 5 L -8 10 L -5.5 2 L -12 -4 L -3.5 -4 Z"
                    fill="#0891B2"
                    filter="url(#glow)"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  />

                  {/* Inner Star Highlight */}
                  <motion.path
                    d="M 0 -8 L 2.3 -2.7 L 8 -2.7 L 3.7 1.3 L 5.3 6.7 L 0 3.3 L -5.3 6.7 L -3.7 1.3 L -8 -2.7 L -2.3 -2.7 Z"
                    fill="#22D3EE"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.7, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </g>
              </svg>

              {/* HQ Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-20"
              >
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-deep-teal/20">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-deep-teal fill-deep-teal" />
                    <span className="font-heading font-bold text-sm text-deep-indigo">
                      New River HQ
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Info Section Below Map */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center"
            >
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="flex items-center justify-center gap-2 text-deep-teal">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-heading font-bold text-lg">
                    Serving 6 Communities
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'New River',
                    'Anthem',
                    'Cave Creek',
                    'Tramonto',
                    'Desert Hills',
                    'Black Canyon City'
                  ].map((city, idx) => (
                    <motion.span
                      key={city}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + idx * 0.1 }}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {city}
                    </motion.span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm md:text-base mt-6">
                  <span className="font-bold text-deep-indigo">Family-owned and operated.</span>
                  {' '}We're your neighbors, committed to keeping North Phoenix homes spotless.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={slideUp}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-rich-violet/10 border border-rich-violet/20 rounded-2xl">
            <MapPin className="w-4 h-4 text-rich-violet" />
            <span className="text-rich-violet font-semibold text-sm">
              Fast Response Times • 15-25 Minute Service Radius
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
