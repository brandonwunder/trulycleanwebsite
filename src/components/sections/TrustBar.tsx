'use client'

import { motion } from 'framer-motion'
import { Star, Award, Users, ShieldCheck } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations'

const trustItems = [
  {
    icon: Star,
    label: '5.0 Rating',
    sublabel: 'Google Reviews',
    stars: true,
  },
  {
    icon: Award,
    label: 'BBB Accredited',
    sublabel: 'A+ Rating',
  },
  {
    icon: Users,
    label: '492+',
    sublabel: 'Happy Customers',
  },
  {
    icon: ShieldCheck,
    label: '100%',
    sublabel: 'Satisfaction Guarantee',
  },
]

export default function TrustBar() {
  return (
    <section className="relative bg-navy-dark py-6 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-vibrant-teal/5 via-transparent to-vibrant-green/5" />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="flex items-center gap-3 justify-center py-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-vibrant-teal/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-vibrant-teal" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-heading font-bold text-white text-sm md:text-base">
                    {item.label}
                  </span>
                  {item.stars && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-gray-400 text-xs md:text-sm">{item.sublabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
