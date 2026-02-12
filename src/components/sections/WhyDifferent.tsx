'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, Leaf, Shield, Award, DollarSign, Phone, Sparkles, Zap } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations'

const comparisons = [
  {
    icon: Leaf,
    others: 'Generic cleaning products',
    truly: 'Eco-friendly, family-safe products',
  },
  {
    icon: Shield,
    others: 'Unvetted, rotating workers',
    truly: 'Trained, background-checked team',
  },
  {
    icon: Award,
    others: 'No satisfaction guarantee',
    truly: '100% satisfaction guarantee',
  },
  {
    icon: DollarSign,
    others: 'Hidden fees & surprise charges',
    truly: 'Transparent, upfront pricing',
  },
  {
    icon: Phone,
    others: 'Hard to reach, slow response',
    truly: 'Responsive same-day support',
  },
  {
    icon: Sparkles,
    others: 'Cookie-cutter cleaning plans',
    truly: 'Customized to your home\'s needs',
  },
]

export default function WhyDifferent() {
  return (
    <section id="why-different" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-vibrant-green/5 to-white">
      {/* Background blobs */}
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-vibrant-green/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-6xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-vibrant-green/10 text-vibrant-green px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-vibrant-green/20"
          >
            <Zap className="w-4 h-4" />
            <span className="font-semibold text-sm">The Truly Clean Difference</span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-dark mb-4"
          >
            Why Families{' '}
            <span className="text-vibrant-green">Choose Us</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Not all cleaning services are created equal. Here's what sets Truly Clean apart.
          </motion.p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block">
          {/* Header Row */}
          <motion.div
            variants={slideUp}
            className="grid grid-cols-[1fr_1fr_auto_1fr] gap-4 mb-6 px-6"
          >
            <div className="text-center">
              <span className="font-heading font-semibold text-gray-400 text-sm uppercase tracking-wider">Other Cleaners</span>
            </div>
            <div />
            <div />
            <div className="text-center">
              <span className="font-heading font-semibold text-vibrant-teal text-sm uppercase tracking-wider">Truly Clean</span>
            </div>
          </motion.div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center"
              >
                {/* Others column */}
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-100">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-500">{item.others}</span>
                </div>

                {/* Icon (center) */}
                <div className="w-12 h-12 rounded-xl bg-vibrant-teal/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-vibrant-teal" />
                </div>

                {/* Truly Clean column */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-vibrant-teal/5 to-vibrant-green/5 rounded-xl px-6 py-4 border border-vibrant-teal/20">
                  <CheckCircle className="w-5 h-5 text-vibrant-green flex-shrink-0" />
                  <span className="text-navy-dark font-medium">{item.truly}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-vibrant-teal/5 border-b border-vibrant-teal/10">
                <div className="w-8 h-8 rounded-lg bg-vibrant-teal/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-vibrant-teal" />
                </div>
                <span className="font-heading font-semibold text-navy-dark text-sm">{item.truly.split(',')[0]}</span>
              </div>
              <div className="px-5 py-3 space-y-2">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">{item.others}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-vibrant-green flex-shrink-0" />
                  <span className="text-navy-dark font-medium text-sm">{item.truly}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
