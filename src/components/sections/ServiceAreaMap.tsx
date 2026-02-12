'use client'

import { motion } from 'framer-motion'
import { MapPin, Sparkles } from 'lucide-react'
import { staggerContainer, slideUp, slideLeft, slideRight, pulseAnimation } from '@/lib/animations'

const serviceAreas = [
  { name: 'New River', description: 'Our home base — where Truly Clean was born.', primary: true, cx: 52, cy: 35 },
  { name: 'Anthem', description: 'Serving the Anthem community with pride.', primary: false, cx: 54, cy: 45 },
  { name: 'Cave Creek', description: 'Premium cleaning for Cave Creek homes.', primary: false, cx: 58, cy: 50 },
  { name: 'Tramonto', description: 'Trusted by Tramonto families.', primary: false, cx: 48, cy: 42 },
  { name: 'Desert Hills', description: 'Eco-friendly cleaning in Desert Hills.', primary: false, cx: 50, cy: 38 },
  { name: 'Black Canyon City', description: 'Extending our reach to Black Canyon City.', primary: false, cx: 46, cy: 28 },
]

export default function ServiceAreaMap() {
  return (
    <section id="service-area" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-deep-teal/5 to-white">
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
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
            Local roots, premium service. We know these communities because we live here too.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Map */}
          <motion.div variants={slideRight} className="relative">
            <div className="relative bg-gradient-to-br from-deep-teal/5 to-rich-violet/5 rounded-3xl p-8 border border-deep-teal/10">
              <svg viewBox="0 0 100 80" className="w-full h-auto" style={{ maxHeight: '400px' }}>
                {/* Simplified Arizona outline */}
                <motion.path
                  d="M 20 5 L 80 5 L 82 10 L 78 15 L 80 20 L 80 75 L 55 75 L 45 65 L 20 65 L 20 5 Z"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                {/* State fill */}
                <path
                  d="M 20 5 L 80 5 L 82 10 L 78 15 L 80 20 L 80 75 L 55 75 L 45 65 L 20 65 L 20 5 Z"
                  fill="#06B6D4"
                  fillOpacity="0.03"
                />

                {/* Service area dots */}
                {serviceAreas.map((area, index) => (
                  <motion.g key={index}>
                    {/* Pulse ring for primary */}
                    {area.primary && (
                      <motion.circle
                        cx={area.cx}
                        cy={area.cy}
                        r="4"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="0.3"
                        initial={{ r: 2, opacity: 1 }}
                        animate={{ r: 6, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <motion.circle
                      cx={area.cx}
                      cy={area.cy}
                      r={area.primary ? 2.5 : 1.8}
                      fill={area.primary ? '#06B6D4' : '#84CC16'}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5, type: 'spring' }}
                    />
                    {/* Label */}
                    <motion.text
                      x={area.cx + 4}
                      y={area.cy + 1}
                      fontSize="2.5"
                      fill="#0F172A"
                      fontWeight="600"
                      fontFamily="system-ui"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.7 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      {area.name}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Area List */}
          <motion.div variants={slideLeft} className="space-y-3">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                  area.primary
                    ? 'bg-gradient-to-r from-deep-teal/10 to-rich-violet/5 border border-deep-teal/20 shadow-md'
                    : 'bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  area.primary ? 'bg-deep-teal/10' : 'bg-gray-100'
                }`}>
                  <MapPin className={`w-5 h-5 ${area.primary ? 'text-deep-teal' : 'text-gray-500'}`} />
                </div>
                <div>
                  <h3 className={`font-heading font-semibold ${area.primary ? 'text-deep-teal' : 'text-deep-indigo'}`}>
                    {area.name}
                    {area.primary && (
                      <span className="ml-2 text-xs bg-deep-teal/10 text-deep-teal px-2 py-0.5 rounded-full">HQ</span>
                    )}
                  </h3>
                  <p className="text-gray-500 text-sm">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
