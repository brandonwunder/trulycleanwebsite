'use client'

import { useState } from 'react'
import { TrulyCleanLogo } from '@/components/Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <TrulyCleanLogo variant="full" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-navy-dark hover:text-vibrant-teal transition">
              Services
            </a>
            <a href="#testimonials" className="text-navy-dark hover:text-vibrant-teal transition">
              Testimonials
            </a>
            <a href="#about" className="text-navy-dark hover:text-vibrant-teal transition">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="text-navy-dark hover:text-vibrant-teal transition font-semibold"
            >
              {phone}
            </a>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white px-6 py-2 rounded-lg transition"
            >
              Get Free Quote
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-navy-dark hover:text-vibrant-teal transition">
                Services
              </a>
              <a href="#testimonials" className="text-navy-dark hover:text-vibrant-teal transition">
                Testimonials
              </a>
              <a href="#about" className="text-navy-dark hover:text-vibrant-teal transition">
                About
              </a>
              <a href={`tel:${phone}`} className="font-semibold text-vibrant-teal">
                {phone}
              </a>
              <button
                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white px-6 py-2 rounded-lg transition w-full"
              >
                Get Free Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
