'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Home, Star, Sparkles, Circle, DotIcon } from 'lucide-react'
import { staggerContainer, slideUp, slideLeft, slideRight, pulseAnimation, floatingAnimation } from '@/lib/animations'

interface ServiceLocation {
  name: string
  description: string
  primary: boolean
  cx: number  // SVG coordinate (%)
  cy: number  // SVG coordinate (%)
  year?: number
}

const serviceAreas: ServiceLocation[] = [
  { name: 'New River', description: 'Our home base — where Truly Clean was born.', primary: true, cx: 50, cy: 50, year: 2020 },
  { name: 'Anthem', description: 'Serving the Anthem community with pride.', primary: false, cx: 52, cy: 62 },
  { name: 'Cave Creek', description: 'Premium cleaning for Cave Creek homes.', primary: false, cx: 62, cy: 55 },
  { name: 'Tramonto', description: 'Trusted by Tramonto families.', primary: false, cx: 42, cy: 58 },
  { name: 'Desert Hills', description: 'Eco-friendly cleaning in Desert Hills.', primary: false, cx: 46, cy: 45 },
  { name: 'Black Canyon City', description: 'Extending our reach to Black Canyon City.', primary: false, cx: 48, cy: 28 },
]

// Animation variants
const contourPulse = {
  initial: { scale: 1, opacity: 0.15 },
  animate: {
    scale: [1, 1.03, 1],
    opacity: [0.15, 0.2, 0.15],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
}

const pinReveal = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.6 + i * 0.12, type: 'spring', stiffness: 400, damping: 15 }
  })
}

const labelAppear = {
  hidden: { opacity: 0, y: -8, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350 } }
}

export default function ServiceAreaMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const handleLocationClick = (name: string) => {
    setActiveLocation(activeLocation === name ? null : name)
  }

  const isHighlighted = (name: string) => {
    return activeLocation === name || hoveredLocation === name
  }

  return (
    <section id="service-area" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background floating blob */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={floatingAnimation}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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
            Proudly Serving{' '}
            <span className="text-deep-teal">North Phoenix</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Local roots, premium service across 6 communities in the I-17 corridor.
          </motion.p>
        </div>

        {/* Map + Location List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* MAP CARD - Left Side (Desktop) / Bottom (Mobile) */}
          <motion.div
            variants={slideRight}
            className="relative order-2 lg:order-1"
          >
            {/* Map Container Card */}
            <div className="relative bg-gradient-to-br from-white via-deep-teal/3 to-white rounded-3xl p-6 md:p-8 border border-deep-teal/10 shadow-xl overflow-hidden">

              {/* Microfiber Texture Overlay */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 7px,
                    rgba(8, 145, 178, 0.03) 7px,
                    rgba(8, 145, 178, 0.03) 8px
                  )`
                }}
              />

              {/* SVG Map */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-auto relative z-10"
                style={{ maxHeight: '450px' }}
              >
                {/* Define microfiber pattern */}
                <defs>
                  <pattern id="microfiber" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="8" y2="8" stroke="rgba(8, 145, 178, 0.04)" strokeWidth="0.5" />
                  </pattern>

                  {/* Radial gradient for service radius glow */}
                  <radialGradient id="serviceGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#0891B2" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* North Phoenix Region Silhouette (I-17 Corridor) */}
                <motion.path
                  d="M 30 20 Q 35 18, 42 22 L 48 18 L 55 22 Q 58 20, 62 22 L 68 25 L 70 35 Q 72 45, 70 55 L 68 65 Q 65 72, 60 75 L 52 78 L 45 80 L 38 78 L 32 75 Q 28 72, 26 65 L 25 55 Q 23 45, 25 35 L 28 25 Z"
                  fill="url(#microfiber)"
                  stroke="none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Gradient fill for region */}
                <motion.path
                  d="M 30 20 Q 35 18, 42 22 L 48 18 L 55 22 Q 58 20, 62 22 L 68 25 L 70 35 Q 72 45, 70 55 L 68 65 Q 65 72, 60 75 L 52 78 L 45 80 L 38 78 L 32 75 Q 28 72, 26 65 L 25 55 Q 23 45, 25 35 L 28 25 Z"
                  fill="url(#serviceGlow)"
                  stroke="#0891B2"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 1, pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Service Radius Glow (centered on HQ) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="url(#serviceGlow)"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  animate={floatingAnimation}
                />

                {/* Topographic Contour Lines (radiating from HQ) */}
                {[15, 22, 30].map((radius, i) => (
                  <motion.circle
                    key={i}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#0891B2"
                    strokeWidth="0.3"
                    strokeOpacity="0.15"
                    strokeDasharray="2,2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    variants={contourPulse}
                    animate="animate"
                  />
                ))}

                {/* Service Location Pins */}
                {serviceAreas.map((area, index) => {
                  const highlighted = isHighlighted(area.name)
                  const active = activeLocation === area.name

                  return (
                    <motion.g
                      key={index}
                      custom={index}
                      variants={pinReveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredLocation(area.name)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      onClick={() => handleLocationClick(area.name)}
                    >
                      {/* Pin Glow Ring (on highlight) */}
                      <AnimatePresence>
                        {highlighted && (
                          <motion.circle
                            cx={area.cx}
                            cy={area.cy}
                            r="5"
                            fill="none"
                            stroke={area.primary ? '#0891B2' : '#8B5CF6'}
                            strokeWidth="0.5"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.3, opacity: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </AnimatePresence>

                      {/* HQ Pin (Sparkle Shape) */}
                      {area.primary ? (
                        <>
                          {/* Star/Sparkle Background */}
                          <motion.path
                            d={`M ${area.cx} ${area.cy - 3.5} L ${area.cx + 1} ${area.cy - 1} L ${area.cx + 3.5} ${area.cy} L ${area.cx + 1} ${area.cy + 1} L ${area.cx} ${area.cy + 3.5} L ${area.cx - 1} ${area.cy + 1} L ${area.cx - 3.5} ${area.cy} L ${area.cx - 1} ${area.cy - 1} Z`}
                            fill="#0891B2"
                            animate={highlighted ? { scale: 1.3 } : { scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          {/* Center Icon */}
                          <circle cx={area.cx} cy={area.cy} r="1.5" fill="white" />
                        </>
                      ) : (
                        /* Service Location Pin (Teardrop Shape) */
                        <>
                          <motion.path
                            d={`M ${area.cx} ${area.cy - 3} Q ${area.cx + 2.5} ${area.cy - 1.5}, ${area.cx + 1.5} ${area.cy + 1} Q ${area.cx} ${area.cy + 2.5}, ${area.cx - 1.5} ${area.cy + 1} Q ${area.cx - 2.5} ${area.cy - 1.5}, ${area.cx} ${area.cy - 3} Z`}
                            fill={highlighted ? '#8B5CF6' : 'rgba(139, 92, 246, 0.8)'}
                            stroke="white"
                            strokeWidth="0.3"
                            animate={highlighted ? { scale: 1.3, y: -2 } : { scale: 1, y: 0 }}
                            transition={{ duration: 0.3, type: 'spring' }}
                          />
                          <circle cx={area.cx} cy={area.cy - 1.5} r="0.6" fill="white" />
                        </>
                      )}

                      {/* Pin Label (appears on highlight) */}
                      <AnimatePresence>
                        {(highlighted || active) && (
                          <motion.g
                            variants={labelAppear}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            {/* Label Background */}
                            <rect
                              x={area.cx + 4}
                              y={area.cy - 2.5}
                              width={area.name.length * 1.8 + 3}
                              height="5"
                              rx="1"
                              fill="rgba(255, 255, 255, 0.95)"
                              stroke={area.primary ? '#0891B2' : '#8B5CF6'}
                              strokeWidth="0.15"
                            />
                            {/* Label Text */}
                            <text
                              x={area.cx + 5.5}
                              y={area.cy + 0.7}
                              fontSize="2"
                              fill="#1E1B4B"
                              fontWeight="600"
                              fontFamily="system-ui"
                            >
                              {area.name}
                            </text>
                          </motion.g>
                        )}
                      </AnimatePresence>
                    </motion.g>
                  )
                })}
              </svg>

              {/* Legend Below Map */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-deep-teal/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Star className="w-3.5 h-3.5 text-deep-teal fill-deep-teal" />
                  <span className="font-medium">New River HQ</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-3 h-3 rounded-full bg-rich-violet/80" />
                  <span>Service Locations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Circle className="w-3.5 h-3.5 text-deep-teal/30" />
                  <span>Coverage Zones</span>
                </div>
              </motion.div>
            </div>

            {/* Active Location Caption */}
            <AnimatePresence>
              {activeLocation && (
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm text-gray-600 font-medium">
                    <Sparkles className="w-4 h-4 inline-block mr-1 text-deep-teal" />
                    Serving {activeLocation} with pride
                    {serviceAreas.find(a => a.name === activeLocation)?.year &&
                      ` since ${serviceAreas.find(a => a.name === activeLocation)?.year}`
                    }
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* LOCATION LIST - Right Side (Desktop) / Top (Mobile) */}
          <motion.div
            variants={slideLeft}
            className="space-y-3 order-1 lg:order-2"
          >
            {serviceAreas.map((area, index) => {
              const highlighted = isHighlighted(area.name)
              const active = activeLocation === area.name

              return (
                <motion.button
                  key={index}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                    area.primary
                      ? 'bg-gradient-to-r from-deep-teal/10 to-rich-violet/5 border border-deep-teal/20 shadow-md'
                      : active
                      ? 'bg-gradient-to-r from-deep-teal/15 to-rich-violet/10 border-2 border-deep-teal shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md'
                  } ${highlighted && !area.primary && !active ? 'border-deep-teal/40 shadow-md' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  onMouseEnter={() => setHoveredLocation(area.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleLocationClick(area.name)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    area.primary
                      ? 'bg-deep-teal/15'
                      : active
                      ? 'bg-deep-teal/20'
                      : 'bg-gray-100'
                  }`}>
                    {area.primary ? (
                      <Home className="w-5 h-5 text-deep-teal" />
                    ) : (
                      <MapPin className={`w-5 h-5 ${active || highlighted ? 'text-deep-teal' : 'text-gray-500'}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-heading font-semibold transition-colors ${
                      area.primary || active ? 'text-deep-teal' : 'text-deep-indigo'
                    }`}>
                      {area.name}
                      {area.primary && (
                        <span className="ml-2 text-xs bg-deep-teal/15 text-deep-teal px-2 py-0.5 rounded-full">HQ</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm mt-0.5">{area.description}</p>
                  </div>

                  {/* Active Indicator */}
                  {active && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-deep-teal"
                      style={{
                        boxShadow: '0 0 8px rgba(8, 145, 178, 0.6)'
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
