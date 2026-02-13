'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { staggerContainer, slideUp, slideRight, floatingAnimation } from '@/lib/animations'
import QuoteFormModal from '@/components/QuoteFormModal'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
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
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-0 right-20 w-72 h-72 bg-deep-teal/8 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-80 h-80 bg-rich-violet/8 rounded-full blur-3xl"
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
            <div className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-semibold">Let's Get Started</span>
            </div>
          </motion.div>

          {/* Premium Divider with Shield */}
          <motion.div
            variants={slideUp}
            className="flex items-center justify-center gap-4 my-8"
          >
            {/* Left line */}
            <div
              className="h-[1px] w-16 sm:w-24 lg:w-32"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #0891B2 50%, #8B5CF6 100%)'
              }}
            />

            {/* Shield icon */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/logo/logo-icon-40.png"
                alt="Truly Clean"
                width={32}
                height={32}
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            {/* Right line */}
            <div
              className="h-[1px] w-16 sm:w-24 lg:w-32"
              style={{
                background: 'linear-gradient(to left, transparent 0%, #8B5CF6 50%, #0891B2 100%)'
              }}
            />
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Get in <span className="text-deep-teal">Touch</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready for a spotless home? Get a quote or reach us directly.
          </motion.p>
        </motion.div>

        {/* Single column centered layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {/* Get Quote Button */}
            <motion.div variants={slideUp}>
              <button
                onClick={openModal}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-5 px-8 rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
              >
                <FileText className="w-6 h-6" />
                Get Your Free Quote
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div variants={slideUp} className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <span className="text-gray-500 font-medium">Or reach us directly</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </motion.div>

            {/* Contact Methods */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div key={index} variants={slideRight}>
                    <Card variant="glass" size="md" hover="lift" className="group" interactive>
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="bg-gradient-to-br from-deep-teal/20 to-deep-teal/5 p-3 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-6 h-6 text-deep-teal" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-deep-indigo mb-1">{method.title}</h4>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-gray-600 hover:text-deep-teal transition break-all"
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
                        <CheckCircle className="w-5 h-5 text-deep-teal flex-shrink-0 mt-0.5" />
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

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
