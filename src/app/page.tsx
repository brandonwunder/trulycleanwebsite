import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import RecentCleansTicker from '@/components/sections/RecentCleansTicker'
import HowItWorks from '@/components/sections/HowItWorks'
import CleanOMeter from '@/components/sections/CleanOMeter'
import Services from '@/components/sections/Services'
import CTABreak from '@/components/sections/CTABreak'
import BeforeAfter from '@/components/sections/BeforeAfter'
import WhyDifferent from '@/components/sections/WhyDifferent'
import Testimonials from '@/components/sections/Testimonials'
import PricingAnchor from '@/components/sections/PricingAnchor'
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

      <RecentCleansTicker />
      <HowItWorks />
      <CleanOMeter />

      <div className="section-overlay-medium">
        <Services />
      </div>

      <CTABreak
        id="cta-1"
        headline="Ready for a Spotless Home?"
        subtext="Get your free, no-obligation quote in under 60 seconds."
        ctaLabel="Get My Free Quote"
        variant="teal"
      />

      <BeforeAfter />
      <WhyDifferent />
      <Testimonials />

      <CTABreak
        id="cta-2"
        headline="Join 492+ Happy Customers"
        subtext="See why New River families trust Truly Clean for their homes and businesses."
        ctaLabel="Request Your Quote"
        variant="green"
      />

      <PricingAnchor />
      <ServiceAreaMap />

      <div className="section-overlay-heavy">
        <About />
      </div>

      <div className="section-overlay-heavy">
        <FAQ />
      </div>

      <CTABreak
        id="cta-3"
        headline="Limited Availability This Week"
        subtext="Book now to secure your preferred cleaning date."
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
