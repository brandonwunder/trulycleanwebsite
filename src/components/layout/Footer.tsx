'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Heart, Shield, Leaf, CheckCircle } from 'lucide-react'
import { staggerContainer, slideUp, slideLeft, slideRight } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'sonya_7653@hotmail.com'
  const serviceAreas = process.env.NEXT_PUBLIC_SERVICE_AREAS || 'New River, Anthem, Cave Creek & surrounding areas'

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#quote-form' },
  ]

  const trustBadges = [
    { icon: Shield, label: 'Licensed & Insured' },
    { icon: Leaf, label: 'Eco-Friendly' },
    { icon: Heart, label: '100% Satisfaction Guaranteed' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Sitemap', href: '#' },
  ]

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-deep-indigo text-white relative overflow-hidden">
      {/* Gradient divider */}
      <div className="h-1 bg-gradient-to-r from-deep-teal via-rich-violet to-deep-teal" />

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Brand Column */}
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-deep-teal to-rich-violet w-12 h-12 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Truly Clean</h3>
                <p className="text-xs text-gray-400">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing exceptional cleaning services for homes and businesses in the Phoenix area since excellence became our standard.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/TrulyCleanSonya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-deep-teal/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={slideUp}>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-gray-400 hover:text-deep-teal transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideUp}>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-deep-teal flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-deep-teal transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-deep-teal flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-deep-teal transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-deep-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">{serviceAreas}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Service Hours & Trust */}
          <motion.div variants={slideUp}>
            <h4 className="font-heading font-bold text-lg mb-6">Why Trust Us?</h4>
            <div className="space-y-4">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-5 h-5 text-deep-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{badge.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Copyright */}
          <motion.p
            variants={slideLeft}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Truly Clean. All rights reserved. | Proudly serving the Phoenix area
          </motion.p>

          {/* Legal Links */}
          <motion.div
            variants={slideRight}
            className="flex items-center gap-6"
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-deep-teal transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Built by credit */}
        <motion.div
          className="text-center mt-8 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs">
            Built for premium conversions
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
