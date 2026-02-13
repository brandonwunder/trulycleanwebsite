import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Testimonials from '@/components/sections/Testimonials'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Services from '@/components/sections/Services'
import { StickyCTA } from '@/components/StickyCTA'

// Dynamic imports for below-fold sections
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'))
const CTABreak = dynamic(() => import('@/components/sections/CTABreak'))
const WhyDifferent = dynamic(() => import('@/components/sections/WhyDifferent'))
const CleanOMeter = dynamic(() => import('@/components/sections/CleanOMeter'))
const ServiceAreaMap = dynamic(() => import('@/components/sections/ServiceAreaMap'))
const About = dynamic(() => import('@/components/sections/About'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function HomePage() {
  return (
    <>
      <div className="section-overlay-light">
        <Hero />
      </div>

      <div className="section-overlay-heavy">
        <TrustBar />
      </div>

      <Testimonials />
      <BeforeAfter />

      <div className="section-overlay-medium">
        <Services />
      </div>

      <HowItWorks />

      <CTABreak
        id="cta-1"
        headline="Ready for a Spotless Home?"
        subtext="Get your free, no-obligation quote in under 60 seconds."
        ctaLabel="Get My Free Quote"
        variant="teal"
      />

      <WhyDifferent />
      <CleanOMeter />
      <ServiceAreaMap />

      <div className="section-overlay-heavy">
        <About />
      </div>

      <div className="section-overlay-heavy">
        <FAQ />
      </div>

      <CTABreak
        id="cta-final"
        headline="Limited Availability This Week - Join 492+ Happy Customers"
        subtext="See why New River families trust TrulyClean. Book now to secure your preferred cleaning date."
        ctaLabel="Book Your Clean Today"
        variant="dark"
      />

      <div className="section-overlay-medium">
        <Contact />
      </div>

      {/* Floating Components */}
      <StickyCTA />
    </>
  )
}
