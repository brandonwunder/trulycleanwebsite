'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Sparkles, Smile } from 'lucide-react'
import { staggerContainer, slideUp, scaleIn, drawLine, swingAnimation, pulseAnimation, floatingAnimation } from '@/lib/animations'

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Online',
    description: 'Fill out our quick form or give us a call. We\'ll match you with the perfect cleaning plan in minutes.',
    animation: swingAnimation,
    gradient: 'from-vibrant-teal/10 to-vibrant-teal/5',
    iconBg: 'bg-vibrant-teal/10',
    iconColor: 'text-vibrant-teal',
    accentColor: 'bg-vibrant-teal',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'We Clean',
    description: 'Our trained, background-checked team arrives on time with eco-friendly products and professional equipment.',
    animation: pulseAnimation,
    gradient: 'from-vibrant-green/10 to-vibrant-green/5',
    iconBg: 'bg-vibrant-green/10',
    iconColor: 'text-vibrant-green',
    accentColor: 'bg-vibrant-green',
  },
  {
    number: '03',
    icon: Smile,
    title: 'You Enjoy',
    description: 'Come home to a sparkling space. If you\'re not 100% happy, we\'ll re-clean for free. That\'s our promise.',
    animation: floatingAnimation,
    gradient: 'from-vibrant-orange/10 to-vibrant-orange/5',
    iconBg: 'bg-vibrant-orange/10',
    iconColor: 'text-vibrant-orange',
    accentColor: 'bg-vibrant-orange',
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
                <div className={`relative bg-gradient-to-br ${step.gradient} rounded-2xl p-8 md:p-10 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}>
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-2 w-10 h-10 ${step.accentColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="font-heading font-bold text-white text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                    animate={step.animation}
                  >
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-2xl text-navy-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
