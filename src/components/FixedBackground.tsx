'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FixedBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Layer 1: Base Image */}
      <div className="fixed-background-wrapper">
        <div className="fixed-background-image">
          <Image
            src={isMobile ? '/images/bg-cleaner-mobile.webp' : '/images/bg-cleaner.webp'}
            alt="Professional cleaner working in modern Arizona home"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: '60% 40%' }}
          />
        </div>
      </div>

      {/* Layer 2: Radial Gradient Overlay */}
      <div className="background-overlay-radial" />

      {/* Layer 3: Brand Color Overlay */}
      <div className="background-overlay-brand" />
    </>
  )
}
