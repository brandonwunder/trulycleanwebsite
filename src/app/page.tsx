import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Testimonials from '@/components/sections/Testimonials'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import CTABreak from '@/components/sections/CTABreak'
import WhyDifferent from '@/components/sections/WhyDifferent'
import CleanOMeter from '@/components/sections/CleanOMeter'
import ServiceAreaMap from '@/components/sections/ServiceAreaMap'
import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { StickyCTA } from '@/components/StickyCTA'

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
        subtext="See why New River families trust Truly Clean. Book now to secure your preferred cleaning date."
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
