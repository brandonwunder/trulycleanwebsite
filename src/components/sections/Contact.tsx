'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle, Star } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import { Card } from '@/components/ui/card'
import { staggerContainer, slideUp, slideLeft, slideRight, floatingAnimation } from '@/lib/animations'
import { trustBadges } from '@/lib/cleaning-data'

export default function Contact() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'sonya_7653@hotmail.com'
  const serviceAreas =
    process.env.NEXT_PUBLIC_SERVICE_AREAS ||
    'New River, Anthem, Cave Creek & surrounding areas'

  const contactMethods = [
    { icon: Phone, title: 'Phone', value: phone, href: `tel:${phone}` },
    { icon: Mail, title: 'Email', value: email, href: `mailto:${email}` },
    { icon: MapPin, title: 'Service Area', value: serviceAreas },
  ]

  const benefits = [
    'BBB Accredited & trusted by 492+ followers',
    'Eco-friendly cleaning products',
    '100% satisfaction guarantee',
    'Flexible scheduling options',
  ]

  return (
    <section
      id="quote-form"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-ocean-blue/5 to-gray-50 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-0 right-20 w-72 h-72 bg-ocean-blue/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-80 h-80 bg-royal-blue/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp}>
            <div className="inline-flex items-center gap-2 bg-ocean-blue/10 text-ocean-blue px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-ocean-blue/20">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-semibold">Let's Get Started</span>
            </div>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Get Your <span className="text-ocean-blue">Free Quote</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Fill out the form or contact us directly. We'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16 relative">
          {/* Form with animated border */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideLeft}
            className="relative"
          >
            {/* Trust Badges */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-2 justify-center mb-6"
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-ocean-blue/10 border border-ocean-blue/20 backdrop-blur-sm"
                >
                  <badge.icon className={`w-3 h-3 text-${badge.color}`} />
                  <span className="text-xs font-semibold text-gray-700">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-ocean-blue via-royal-blue to-ocean-blue rounded-2xl opacity-20" />
            <div className="relative">
              <QuoteForm />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {/* Floating testimonial snippet — desktop only */}
            <motion.div
              variants={slideRight}
              className="hidden lg:block"
            >
              <div className="glass p-4 rounded-xl border border-ocean-blue/10">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-2">
                  "Truly Clean transformed my home! Attention to detail is incredible."
                </p>
                <span className="text-xs text-gray-400 font-medium">— Sarah J., New River</span>
              </div>
            </motion.div>

            <div>
              <motion.h3
                variants={slideRight}
                className="font-heading font-bold text-2xl text-deep-indigo mb-6"
              >
                Or Contact Us Directly
              </motion.h3>
              <motion.div className="space-y-4" variants={staggerContainer}>
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.div key={index} variants={slideRight}>
                      <Card variant="glass" size="md" hover="lift" className="group" interactive>
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="bg-gradient-to-br from-ocean-blue/20 to-ocean-blue/5 p-3 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Icon className="w-6 h-6 text-ocean-blue" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-deep-indigo mb-1">{method.title}</h4>
                            {method.href ? (
                              <a
                                href={method.href}
                                className="text-gray-600 hover:text-ocean-blue transition break-all"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-gray-600">{method.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* Benefits Card */}
            <motion.div variants={slideRight}>
              <Card variant="gradient" size="lg" className="group">
                <h4 className="font-heading font-bold text-xl text-deep-indigo mb-4">
                  Why Choose Truly Clean?
                </h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.1, type: 'spring', stiffness: 500 }}
                      >
                        <CheckCircle className="w-5 h-5 text-ocean-blue flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
