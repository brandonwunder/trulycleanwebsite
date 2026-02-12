'use client'

import { useState, useMemo } from 'react'
import { Tab } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Filter } from 'lucide-react'
import { roomChecklists, type Tier } from '@/lib/cleaning-data'
import { staggerContainer, slideUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const checklistFilter = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
}

type TierFilter = 'all' | Tier

export default function ChecklistTabs() {
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [tierFilter, setTierFilter] = useState<TierFilter>('all')

  const currentRoom = roomChecklists[selectedRoom]

  // Filter checklist items based on selected tier
  const filteredItems = useMemo(() => {
    if (tierFilter === 'all') return currentRoom.items

    return currentRoom.items.filter((item) => item.tiers.includes(tierFilter as Tier))
  }, [currentRoom, tierFilter])

  const tierLabels: Record<TierFilter, string> = {
    all: 'All Services',
    standard: 'Standard',
    deep: 'Deep',
    moveout: 'Move-Out',
  }

  const tierColors: Record<TierFilter, string> = {
    all: 'text-gray-600 bg-gray-100 hover:bg-gray-200',
    standard: 'text-vibrant-green bg-vibrant-green/10 hover:bg-vibrant-green/20',
    deep: 'text-vibrant-orange bg-vibrant-orange/10 hover:bg-vibrant-orange/20',
    moveout: 'text-navy-dark bg-navy-dark/10 hover:bg-navy-dark/20',
  }

  return (
    <section
      id="checklist-tabs"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      {/* Background accents */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-green/5 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
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
            className="inline-flex items-center gap-2 bg-vibrant-teal/10 text-vibrant-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-vibrant-teal/20"
          >
            <Check className="w-4 h-4" />
            <span className="font-semibold text-sm">Service Details</span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-dark mb-4"
          >
            What We Actually
            <br />
            <span className="text-vibrant-green">Clean</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore room-by-room what's included in each service level. Transparency you can trust.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div variants={slideUp}>
          <Tab.Group selectedIndex={selectedRoom} onChange={setSelectedRoom}>
            {/* Room Tabs */}
            <Tab.List className="flex gap-2 md:gap-3 mb-8 bg-gray-100 p-2 rounded-2xl overflow-x-auto scrollbar-hide">
              {roomChecklists.map((room, idx) => (
                <Tab
                  key={room.room}
                  className={({ selected }) =>
                    cn(
                      'relative flex-1 min-w-max px-4 md:px-5 py-2.5 font-heading font-bold text-sm rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal',
                      selected
                        ? 'bg-white text-navy-dark shadow-sm'
                        : 'text-gray-600 hover:text-navy-dark'
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      {selected && (
                        <motion.div
                          layoutId="room-indicator"
                          className="absolute inset-0 bg-white rounded-xl -z-10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center gap-2">
                        <room.icon className="w-4 h-4" />
                        {room.displayName}
                      </div>
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>

            {/* Tier Filter Chips */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {(['all', 'standard', 'deep', 'moveout'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className={cn(
                    'px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2',
                    tierFilter === tier
                      ? tierColors[tier] + ' ring-2 ring-offset-2'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                  aria-pressed={tierFilter === tier}
                  role="button"
                >
                  <Filter className="w-4 h-4" />
                  {tierLabels[tier]}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <Tab.Panels className="w-full">
              <AnimatePresence mode="wait">
                {roomChecklists.map((room, idx) =>
                  selectedRoom === idx ? (
                    <Tab.Panel key={room.room}>
                      <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <AnimatePresence mode="popLayout">
                          {filteredItems.map((item, i) => (
                            <motion.div
                              key={`${room.room}-${item.task}`}
                              layout
                              variants={checklistFilter}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="flex items-start gap-3 p-4 glass rounded-lg hover:shadow-md transition-all"
                            >
                              <item.icon className="w-5 h-5 text-vibrant-teal flex-shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                  {item.task}
                                </p>
                                {item.tiers.length > 0 && (
                                  <div className="flex gap-1 mt-2 flex-wrap">
                                    {item.tiers.map((tier) => (
                                      <span
                                        key={tier}
                                        className="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700"
                                      >
                                        {tier === 'standard'
                                          ? 'STD'
                                          : tier === 'deep'
                                            ? 'DEEP'
                                            : 'MOVE'}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>

                      {filteredItems.length === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center py-12"
                        >
                          <p className="text-gray-500 text-lg">
                            No items for this service level in {room.displayName}
                          </p>
                        </motion.div>
                      )}
                    </Tab.Panel>
                  ) : null
                )}
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>

        {/* Info Box */}
        <motion.div
          variants={slideUp}
          className="mt-12 p-6 bg-vibrant-teal/10 border border-vibrant-teal/20 rounded-2xl"
        >
          <p className="text-navy-dark font-medium">
            <span className="font-bold">Pro tip:</span> Use the filter buttons above to see what's
            included in each service level. Light Refresh includes basics, while Move-Out gives you
            a completely rent-ready space.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
