'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Leaf,
  Heart,
  Award,
  Users,
  Zap,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { staggerContainer, slideUp, slideLeft, slideRight, floatingAnimation } from '@/lib/animations'
import { useEffect, useState } from 'react'

export default function About() {
  const { ref: containerRef, controls: containerControls } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [counts, setCounts] = useState({ followers: 0, satisfaction: 0 })

  // Animate numbers
  useEffect(() => {
    let interval: NodeJS.Timeout

    const animateCount = () => {
      setCounts((prev) => ({
        followers: Math.min(prev.followers + 20, 492),
        satisfaction: Math.min(prev.satisfaction + 5, 100),
      }))
    }

    interval = setInterval(animateCount, 30)

    return () => clearInterval(interval)
  }, [])

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on the quality of our work',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Safe, green cleaning products for your health',
    },
    {
      icon: Heart,
      title: 'Customer Focused',
      description: 'Your satisfaction is our top priority',
    },
  ]

  const stats = [
    { label: 'BBB Accredited', icon: Award, color: 'text-vibrant-teal' },
    { label: 'Community Followers', value: counts.followers, icon: Users },
    { label: 'Satisfaction Rate', value: `${counts.satisfaction}%`, icon: Zap },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-vibrant-green/5 to-white relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-vibrant-green/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-80 h-80 bg-vibrant-teal/10 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={containerControls}
            variants={staggerContainer}
          >
            <motion.div variants={slideLeft}>
              <div className="inline-block mb-4">
                <div className="glass px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-vibrant-teal uppercase tracking-widest">
                    Our Story
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-6"
            >
              About <span className="text-vibrant-teal">Truly Clean</span>
            </motion.h2>

            <motion.p
              variants={slideLeft}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              At Truly Clean, we believe that a clean space is the foundation for a
              healthy, happy life. Our mission is to provide exceptional cleaning
              services that exceed expectations every single time.
            </motion.p>

            <motion.p
              variants={slideLeft}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Founded and operated by Sonya Ansell, we've built our reputation on
              reliability, professionalism, and attention to detail. Every member of
              our team is trained, vetted, and committed to delivering the highest
              quality service. We're proud to be accredited by the Better Business
              Bureau, a testament to our commitment to excellence.
            </motion.p>

            {/* Values - Card Layout */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3"
            >
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={slideLeft}
                  >
                    <div className="glass p-4 rounded-xl flex items-start gap-4 hover:bg-white/90 transition-all duration-300">
                      <motion.div
                        className="bg-gradient-to-br from-vibrant-teal/20 to-vibrant-teal/5 p-3 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-vibrant-teal" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-navy-dark mb-0.5">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={slideRight}
                >
                  <Card
                    variant="gradient"
                    size="lg"
                    hover="lift"
                    className="group"
                  >
                    <div className="flex items-center gap-6">
                      <motion.div
                        className="bg-white/80 p-5 rounded-xl flex-shrink-0 group-hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-vibrant-teal" />
                      </motion.div>

                      <div className="flex-1">
                        {stat.value !== undefined && (
                          <motion.div
                            className="font-heading font-bold text-3xl md:text-4xl text-vibrant-teal mb-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                          >
                            {stat.value}
                            {stat.label.includes('Satisfaction') && '%'}
                            {stat.label.includes('Community') && '+'}
                          </motion.div>
                        )}
                        {stat.value === undefined && (
                          <motion.div
                            className="font-heading font-bold text-3xl text-vibrant-teal mb-1 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                          >
                            <CheckCircle className="w-8 h-8" />
                            Verified
                          </motion.div>
                        )}
                        <p className="text-gray-600 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}

            {/* Trust Badge Section */}
            <motion.div
              variants={slideRight}
              className="glass p-6 rounded-2xl border border-vibrant-teal/20 mt-4"
            >
              <h4 className="font-heading font-bold text-navy-dark mb-4">
                Why Trust Us?
              </h4>
              <ul className="space-y-3">
                {[
                  'Licensed, bonded, and fully insured',
                  'Professional team training & vetting',
                  'Eco-friendly cleaning solutions',
                  '24/7 customer support available',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-vibrant-teal flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
