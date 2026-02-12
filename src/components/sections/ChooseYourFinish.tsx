'use client'

import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { scentOptions, productSections } from '@/lib/cleaning-data'
import { staggerContainer, slideUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

type ScentId = 'fresh-linen' | 'citrus' | 'unscented'

export default function ChooseYourFinish() {
  const [selectedScent, setSelectedScent] = useState<ScentId>('fresh-linen')
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  return (
    <section
      id="choose-finish"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background accents */}
      <motion.div
        className="absolute top-20 right-0 w-80 h-80 bg-light-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 60, 0] }}
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
            className="inline-flex items-center gap-2 bg-light-teal/10 text-light-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-light-teal/20"
          >
            <Check className="w-4 h-4" />
            <span className="font-semibold text-sm">Customization</span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Choose Your
            <br />
            <span className="text-light-teal">Finish</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Personalize your cleaning experience. Select your preferred scent and learn about our
            eco-friendly, kid-and-pet-safe products.
          </motion.p>
        </div>

        {/* Scent Selector */}
        <motion.div variants={slideUp} className="mb-16">
          <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-6 text-center">
            Select Your Scent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scentOptions.map((scent) => (
              <label key={scent.id} className="cursor-pointer group">
                <input
                  type="radio"
                  name="scent"
                  value={scent.id}
                  checked={selectedScent === scent.id}
                  onChange={() => setSelectedScent(scent.id as ScentId)}
                  className="sr-only peer"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center',
                    selectedScent === scent.id
                      ? `border-${scent.color} bg-${scent.color}/5 shadow-lg`
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  )}
                >
                  <div className="mb-3">
                    <scent.icon className={cn('w-12 h-12 mx-auto', `text-${scent.color}`)} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-deep-indigo mb-2">
                    {scent.name}
                  </h4>
                  <p className="text-sm text-gray-600">{scent.description}</p>
                  {selectedScent === scent.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={cn(
                        'mt-4 flex items-center justify-center gap-2 font-semibold text-sm',
                        `text-${scent.color}`
                      )}
                    >
                      <Check className="w-4 h-4" />
                      Selected
                    </motion.div>
                  )}
                </motion.div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Product Transparency Sections */}
        <motion.div variants={slideUp}>
          <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-6 text-center">
            Product Transparency
          </h3>
          <div className="space-y-3">
            {productSections.map((section) => (
              <Disclosure
                key={section.id}
                defaultOpen={expandedSections.includes(section.id)}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex items-center justify-between gap-4 p-6 glass rounded-xl hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-teal"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0">
                          <section.icon className="w-6 h-6 text-deep-teal" />
                        </div>
                        <h4 className="font-heading font-bold text-lg text-deep-indigo">
                          {section.title}
                        </h4>
                      </div>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      </motion.div>
                    </Disclosure.Button>

                    <AnimatePresence>
                      {open && (
                        <Disclosure.Panel
                          as={motion.div}
                          static
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="space-y-2">
                              {section.content.map((item, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <Check className="w-4 h-4 text-rich-violet flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </Disclosure.Panel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={slideUp}
          className="mt-12 p-6 bg-rich-violet/10 border border-rich-violet/20 rounded-2xl text-center"
        >
          <p className="text-deep-indigo font-medium">
            <span className="font-bold">100% Transparent:</span> We believe you should know exactly
            what we're using to clean your home. All products are non-toxic, kid-safe, and pet-safe.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
