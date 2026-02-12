'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Sparkles, Smile } from 'lucide-react'
import { staggerContainer, slideUp, scaleIn, drawLine, floatingAnimation } from '@/lib/animations'

// Premium floating animation for all icons (uniform)
const iconFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Online',
    description: 'Fill out our quick form or give us a call. We\'ll match you with the perfect cleaning plan in minutes.',
    gradient: 'from-white to-gray-50',
    iconColor: 'text-vibrant-teal',
    accentColor: 'bg-vibrant-teal',
    glowColor: 'shadow-vibrant-teal/20',
    borderGradient: 'from-vibrant-teal via-vibrant-teal/80 to-vibrant-teal',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'We Clean',
    description: 'Our trained, background-checked team arrives on time with eco-friendly products and professional equipment.',
    gradient: 'from-white to-gray-50',
    iconColor: 'text-vibrant-green',
    accentColor: 'bg-vibrant-green',
    glowColor: 'shadow-vibrant-green/20',
    borderGradient: 'from-vibrant-green via-vibrant-green/80 to-vibrant-green',
  },
  {
    number: '03',
    icon: Smile,
    title: 'You Enjoy',
    description: 'Come home to a sparkling space. If you\'re not 100% happy, we\'ll re-clean for free. That\'s our promise.',
    gradient: 'from-white to-gray-50',
    iconColor: 'text-vibrant-orange',
    accentColor: 'bg-vibrant-orange',
    glowColor: 'shadow-vibrant-orange/20',
    borderGradient: 'from-vibrant-orange via-vibrant-orange/80 to-vibrant-orange',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-vibrant-green/5 to-white">
      {/* Background floating blobs */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-vibrant-green/10 rounded-full blur-3xl pointer-events-none"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-vibrant-teal/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-vibrant-green/10 text-vibrant-green px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-vibrant-green/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm">Simple Process</span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-dark mb-4"
          >
            Sparkling Clean in{' '}
            <span className="text-vibrant-green">3 Easy Steps</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            No hassle, no hidden fees. Just a simple process that gets your space spotless.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-0.5">
            <motion.svg
              className="w-full h-8 overflow-visible"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M 0 4 L 100 4"
                stroke="#06B6D4"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                fill="none"
                strokeOpacity="0.3"
                variants={drawLine}
              />
            </motion.svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                {/* Premium card with gradient background */}
                <div className={`relative bg-gradient-to-br ${step.gradient} rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3`}>
                  {/* Step number badge with premium styling */}
                  <div className={`absolute -top-4 -left-2 w-12 h-12 ${step.accentColor} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <span className="font-heading font-bold text-white text-base">{step.number}</span>
                  </div>

                  {/* Premium icon with gradient border ring */}
                  <div className="relative w-20 h-20 mb-6">
                    {/* Gradient border ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.borderGradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className={`absolute inset-[2px] bg-white rounded-2xl`} />

                    {/* Icon container with float animation */}
                    <motion.div
                      className={`relative w-full h-full flex items-center justify-center`}
                      animate={iconFloat}
                    >
                      <step.icon className={`w-10 h-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>

                    {/* Subtle glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.borderGradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-2xl text-navy-dark mb-4 group-hover:text-opacity-90 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.borderGradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
