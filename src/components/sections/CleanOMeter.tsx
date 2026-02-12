'use client'

import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Clock, Calendar } from 'lucide-react'
import { cleaningTiers } from '@/lib/cleaning-data'
import { staggerContainer, slideUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export default function CleanOMeter() {
  const [selectedTier, setSelectedTier] = useState(0)
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const tier = cleaningTiers[selectedTier]

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Dynamic animation variants that respect reduced motion preference
  const tierSwitch = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : { y: 20, scale: 0.95 }),
    },
    visible: {
      opacity: 1,
      ...(shouldReduceMotion ? {} : { y: 0, scale: 1 }),
      transition: { duration: shouldReduceMotion ? 0.1 : 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : { y: -20, scale: 0.95 }),
      transition: { duration: shouldReduceMotion ? 0.05 : 0.3, ease: 'easeIn' },
    },
  }

  return (
    <section
      id="clean-o-meter"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background accents */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-6xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-rich-violet/10 text-rich-violet px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-rich-violet/20"
          >
            <Check className="w-4 h-4" />
            <span className="font-semibold text-sm">Service Tiers</span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Choose Your
            <br />
            <span className="text-rich-violet">Clean Level</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Every home is unique. Find the perfect cleaning package for your needs and schedule.
          </motion.p>
        </div>

        {/* Tab Group */}
        <motion.div variants={slideUp}>
          <Tab.Group selectedIndex={selectedTier} onChange={setSelectedTier}>
            {/* Tab List - Segmented Control */}
            <Tab.List className="flex gap-2 md:gap-4 mb-12 bg-gray-100 p-2 rounded-2xl w-full overflow-x-auto">
              {cleaningTiers.map((t, idx) => (
                <Tab
                  key={t.id}
                  className={({ selected }) =>
                    cn(
                      'relative flex-1 min-w-max px-4 md:px-6 py-3 font-heading font-bold text-sm md:text-base rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-teal focus-visible:ring-offset-2',
                      selected
                        ? 'bg-white text-deep-indigo shadow-md'
                        : 'text-gray-600 hover:text-deep-indigo'
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      {selected && (
                        <motion.div
                          layoutId="tab-indicator"
                          className="absolute inset-0 bg-white rounded-xl -z-10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="flex items-center gap-2">
                        <t.icon className="w-4 h-4" />
                        {t.name}
                      </span>
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>

            {/* Tab Panels - Content */}
            <Tab.Panels className="w-full">
              <AnimatePresence mode="wait">
                <Tab.Panel key={tier.id}>
                  {/* ARIA live region for screen readers */}
                  <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                    {tier.name} tier selected. {tier.description}
                  </div>

                  <motion.div
                    key={selectedTier}
                    variants={tierSwitch}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                  >
                    {/* Checklist Column */}
                    <div className="md:col-span-1">
                      <div className="glass p-6 rounded-2xl">
                        <h3 className="font-heading font-bold text-lg text-deep-indigo mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {tier.checklist.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <Check className="w-5 h-5 text-rich-violet flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Details Column - Time & Frequency */}
                    <div className="md:col-span-1">
                      <div className="space-y-4">
                        {/* Duration Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="glass p-6 rounded-2xl"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Clock className="w-5 h-5 text-deep-teal" />
                            <h3 className="font-heading font-bold text-deep-indigo">
                              Duration
                            </h3>
                          </div>
                          <p className="text-3xl font-heading font-bold text-deep-teal">
                            {tier.duration}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Typical cleaning time
                          </p>
                        </motion.div>

                        {/* Frequency Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="glass p-6 rounded-2xl"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-5 h-5 text-rich-violet" />
                            <h3 className="font-heading font-bold text-deep-indigo">
                              Frequency
                            </h3>
                          </div>
                          <p className="text-2xl font-heading font-bold text-rich-violet">
                            {tier.frequency}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Recommended schedule
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* CTA Column */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="md:col-span-1"
                    >
                      <div className="glass-violet p-8 rounded-2xl h-full flex flex-col justify-center items-center text-center border-2 border-rich-violet/20">
                        <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-4">
                          Ready to get started?
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                          Get a personalized quote based on your home size and cleaning needs.
                        </p>
                        <button
                          onClick={() => {
                            document
                              .getElementById('quote-form')
                              ?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="w-full px-6 py-4 bg-gradient-to-r from-rich-violet to-rich-violet/80 text-white font-heading font-bold rounded-xl hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                </Tab.Panel>
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </motion.div>
    </section>
  )
}
