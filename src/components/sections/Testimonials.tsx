'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { staggerContainer, slideUp, floatingAnimation } from '@/lib/animations'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah Johnson',
    service: 'Residential Cleaning',
    location: 'New River, AZ',
    rating: 5,
    text: 'Truly Clean transformed my home! Their attention to detail is incredible. I highly recommend their services to anyone looking for professional cleaning.',
    initials: 'SJ',
    color: 'from-pink-400 to-rose-400',
  },
  {
    name: 'Michael Chen',
    service: 'Commercial Cleaning',
    location: 'Anthem, AZ',
    rating: 5,
    text: "We've been using Truly Clean for our office for 6 months now. The team is reliable, thorough, and professional. Our workspace has never looked better!",
    initials: 'MC',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Emily Rodriguez',
    service: 'Deep Cleaning',
    location: 'Cave Creek, AZ',
    rating: 5,
    text: 'Amazing service! They did a deep clean of my entire house and it feels brand new. The eco-friendly products they use are a huge plus for me.',
    initials: 'ER',
    color: 'from-purple-400 to-pink-400',
  },
  {
    name: 'David Thompson',
    service: 'Move-Out Cleaning',
    location: 'Phoenix, AZ',
    rating: 5,
    text: "Truly Clean made my move-out process so much easier. They got my deposit back in full thanks to their thorough cleaning. Worth every penny!",
    initials: 'DT',
    color: 'from-orange-400 to-amber-400',
  },
  {
    name: 'Lisa Martinez',
    service: 'Recurring Cleaning',
    location: 'Tramonto, AZ',
    rating: 5,
    text: "I've tried many cleaning services over the years, and Truly Clean is by far the best. They're consistent, punctual, and my house sparkles after every visit.",
    initials: 'LM',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    name: 'Robert Williams',
    service: 'Deep Cleaning',
    location: 'Desert Hills, AZ',
    rating: 5,
    text: "Sonya and her team are amazing. They cleaned areas I didn't even think to clean. Truly professional and the eco-friendly products are a bonus!",
    initials: 'RW',
    color: 'from-indigo-400 to-blue-400',
  },
]

const marqueeQuotes = [
  '"Best cleaning service in the valley!" — Sarah J.',
  '"Our office has never looked better!" — Michael C.',
  '"They got my full deposit back!" — David T.',
  '"Consistent, punctual, and thorough!" — Lisa M.',
  '"Truly professional and eco-friendly!" — Robert W.',
  '"Feels brand new after every visit!" — Emily R.',
]

export default function Testimonials() {
  const swiperRef = useRef<any>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handlePrev = () => swiperRef.current?.swiper.slidePrev()
  const handleNext = () => swiperRef.current?.swiper.slideNext()

  const handleSlideChange = () => {
    const swiper = swiperRef.current?.swiper
    if (swiper) {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }
  }

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-white via-deep-teal/5 to-rich-violet/5 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-deep-teal/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute -bottom-20 left-20 w-80 h-80 bg-rich-violet/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp}>
            <div className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20">
              <Star className="w-4 h-4 fill-deep-teal" />
              <span className="text-sm font-semibold">Customer Testimonials</span>
            </div>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            What Our <span className="text-deep-teal">Customers Say</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it — hear from our satisfied customers
          </motion.p>
        </motion.div>

        {/* Google-style 5-star badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white shadow-lg rounded-2xl px-8 py-5 flex items-center gap-6 border border-gray-100">
            <div className="text-center">
              <div className="font-heading font-bold text-4xl text-deep-indigo">5.0</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <div className="font-heading font-bold text-deep-indigo flex items-center gap-1.5">
                Excellent
                <BadgeCheck className="w-5 h-5 text-deep-teal" />
              </div>
              <p className="text-gray-500 text-sm">Based on 15+ verified reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Marquee ticker */}
        <div className="relative mb-12 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeQuotes, ...marqueeQuotes].map((quote, index) => (
              <span
                key={index}
                className="mx-8 text-gray-400 text-sm font-medium inline-flex items-center gap-2"
              >
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                {quote}
              </span>
            ))}
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            pagination={{ clickable: true, bulletActiveClass: 'bg-deep-teal' }}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            loop
            onSlideChange={handleSlideChange}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col relative group hover:bg-white transition-all duration-300 hover:shadow-xl border-l-4 border-deep-teal shadow-md">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-12 h-12 text-deep-teal" />
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 flex-1 italic text-base leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-deep-teal/0 via-deep-teal/20 to-deep-teal/0 mb-6" />

                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`bg-gradient-to-br ${testimonial.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="font-bold text-white text-lg">{testimonial.initials}</span>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-bold text-deep-indigo flex items-center gap-1.5">
                          {testimonial.name}
                          <BadgeCheck className="w-4 h-4 text-deep-teal" />
                        </h4>
                        <p className="text-sm text-gray-600 truncate">{testimonial.service}</p>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="mt-4">
                      <Badge variant="primary" size="sm" className="text-xs">
                        {testimonial.location}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <motion.button
            onClick={handlePrev}
            disabled={isBeginning}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed md:-left-14"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={isEnd}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed md:-right-14"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { value: '492+', label: 'Happy Customers' },
            { value: '5.0', label: 'Average Rating', star: true },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="glass p-4 rounded-xl text-center"
            >
              <div className="font-heading font-bold text-2xl text-deep-teal mb-1 flex items-center justify-center gap-1">
                {stat.star && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
