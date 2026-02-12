'use client'

import { useState } from 'react'

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-vibrant-teal/10 via-white to-vibrant-green/10">
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-5xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-vibrant-teal/10 text-vibrant-teal px-4 py-2 rounded-full mb-6">
            ✨
            <span className="font-semibold">Professional Cleaning Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-navy-dark mb-6 leading-tight">
            Your Clean Home
            <br />
            <span className="text-vibrant-teal">Awaits</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Serving New River, Anthem, Cave Creek & surrounding AZ areas with professional residential and commercial cleaning services that transform your space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToQuote}
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition w-full sm:w-auto"
            >
              Get Your Free Quote
            </button>
            <a
              href={`tel:${phone}`}
              className="border-2 border-vibrant-teal text-vibrant-teal hover:bg-vibrant-teal hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition w-full sm:w-auto text-center"
            >
              📞 Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-vibrant-teal text-2xl">✓</span>
              <span>BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vibrant-teal text-2xl">✓</span>
              <span>Eco-Friendly Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vibrant-teal text-2xl">✓</span>
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-vibrant-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-vibrant-teal/20 rounded-full blur-3xl" />
    </section>
  )
}
