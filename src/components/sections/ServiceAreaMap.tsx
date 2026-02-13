import { MapPin, Sparkles, Star } from 'lucide-react'

export default function ServiceAreaMap() {
  return (
    <section
      id="service-area"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none animate-float-bg"
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20 animate-slide-up animate-slide-up-1"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-sm">Our Service Area</span>
          </div>

          <h2
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4 animate-slide-up animate-slide-up-2"
          >
            Proudly Serving
            <br />
            <span className="text-deep-teal">North Phoenix</span>
          </h2>

          <p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up animate-slide-up-3"
          >
            Local roots, premium service across the I-17 corridor from our New River headquarters.
          </p>
        </div>

        {/* Service Area Content */}
        <div
          className="relative animate-slide-up animate-slide-up-4"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-gray-200/50">
            {/* Info Section */}
            <div
              className="text-center"
            >
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-2 text-deep-teal">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-heading font-bold text-lg">
                    Serving 6 Communities
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'New River',
                    'Anthem',
                    'Cave Creek',
                    'Tramonto',
                    'Desert Hills',
                    'Black Canyon City'
                  ].map((city, idx) => (
                    <span
                      key={city}
                      className={`px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium animate-slide-up animate-slide-up-${(idx % 4) + 1}`}
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm md:text-base mt-6">
                  <span className="font-bold text-deep-indigo">Family-owned and operated.</span>
                  {' '}We're your neighbors, committed to keeping North Phoenix homes spotless.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div
          className="mt-8 text-center animate-slide-up animate-slide-up-1"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-rich-violet/10 border border-rich-violet/20 rounded-2xl">
            <MapPin className="w-4 h-4 text-rich-violet" />
            <span className="text-rich-violet font-semibold text-sm">
              Fast Response Times • 15-25 Minute Service Radius
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
