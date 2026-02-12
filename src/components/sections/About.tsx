'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
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
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      animate(count, target, { duration: 2, ease: 'easeOut' })
    }
  }, [inView, count, target])

  return (
    <motion.span ref={ref}>
      {inView ? <motion.span>{display}</motion.span> : '0'}
    </motion.span>
  )
}

export default function About() {
  const { ref: containerRef, controls: containerControls } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
  })

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
    { label: 'BBB Accredited', icon: Award, isVerified: true },
    { label: 'Community Followers', target: 492, suffix: '+', icon: Users },
    { label: 'Satisfaction Rate', target: 100, suffix: '%', icon: Zap },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-br from-white via-rich-violet/5 to-white relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-rich-violet/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-80 h-80 bg-deep-teal/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
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
              <div className="inline-flex items-center gap-2 bg-rich-violet/10 text-rich-violet px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-rich-violet/20">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Story</span>
              </div>
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-6"
            >
              About <span className="text-deep-teal">Truly Clean</span>
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

            {/* Values */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3"
            >
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div key={index} variants={slideLeft}>
                    <div className="glass p-4 rounded-xl flex items-start gap-4 hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                      <motion.div
                        className="bg-gradient-to-br from-deep-teal/20 to-deep-teal/5 p-3 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-deep-teal" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-deep-indigo mb-0.5">
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
                <motion.div key={index} variants={slideRight}>
                  <Card variant="gradient" size="lg" hover="lift" className="group">
                    <div className="flex items-center gap-6">
                      <motion.div
                        className="bg-white/80 p-5 rounded-xl flex-shrink-0 group-hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-deep-teal" />
                      </motion.div>
                      <div className="flex-1">
                        {stat.isVerified ? (
                          <div className="font-heading font-bold text-3xl text-deep-teal mb-1 flex items-center gap-2">
                            <CheckCircle className="w-8 h-8" />
                            Verified
                          </div>
                        ) : (
                          <div className="font-heading font-bold text-3xl md:text-4xl text-deep-teal mb-1">
                            <AnimatedCounter target={stat.target!} suffix={stat.suffix} />
                          </div>
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
              className="bg-gradient-to-br from-deep-teal/10 to-rich-violet/10 p-6 rounded-2xl border border-deep-teal/20 mt-4"
            >
              <h4 className="font-heading font-bold text-deep-indigo mb-4 text-lg">
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
                    <CheckCircle className="w-5 h-5 text-rich-violet flex-shrink-0" />
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
