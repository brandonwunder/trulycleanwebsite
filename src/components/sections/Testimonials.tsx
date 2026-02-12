'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { staggerContainer, slideUp, floatingAnimation } from '@/lib/animations'

// Import Swiper styles
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
    text: 'We\'ve been using Truly Clean for our office for 6 months now. The team is reliable, thorough, and professional. Our workspace has never looked better!',
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
    text: 'Truly Clean made my move-out process so much easier. They got my deposit back in full thanks to their thorough cleaning. Worth every penny!',
    initials: 'DT',
    color: 'from-orange-400 to-amber-400',
  },
]

export default function Testimonials() {
  const swiperRef = useRef<any>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

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
      className="py-20 bg-gradient-to-br from-white via-vibrant-teal/5 to-vibrant-green/5 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-vibrant-teal/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute -bottom-20 left-20 w-80 h-80 bg-vibrant-green/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp}>
            <div className="inline-block mb-3">
              <div className="glass px-4 py-1.5 rounded-full">
                <span className="text-sm font-semibold text-vibrant-teal">
                  Customer Testimonials
                </span>
              </div>
            </div>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-4"
          >
            What Our <span className="text-vibrant-teal">Customers Say</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it—hear from our satisfied customers
          </motion.p>
        </motion.div>

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
            pagination={{ clickable: true, bulletActiveClass: 'bg-vibrant-teal' }}
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
                  <div className="glass p-8 rounded-2xl h-full flex flex-col relative group hover:bg-white/95 transition-all duration-300 hover:shadow-xl">
                    {/* Quote Icon - Top Right */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-12 h-12 text-vibrant-teal" />
                    </div>

                    {/* Star Rating */}
                    <motion.div
                      className="flex gap-1 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 flex-1 italic text-base leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-vibrant-teal/0 via-vibrant-teal/20 to-vibrant-teal/0 mb-6" />

                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <motion.div
                        className={`bg-gradient-to-br ${testimonial.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="font-bold text-white text-lg">
                          {testimonial.initials}
                        </span>
                      </motion.div>

                      {/* Name & Service */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-bold text-navy-dark">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="mt-4 flex items-center gap-2">
                      <Badge
                        variant="primary"
                        size="sm"
                        className="text-xs"
                      >
                        {testimonial.location}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            disabled={isBeginning}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-vibrant-teal text-white hover:bg-vibrant-teal/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:scale-110 md:-left-14"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={isEnd}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-vibrant-teal text-white hover:bg-vibrant-teal/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:scale-110 md:-right-14"
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
          <motion.div
            variants={slideUp}
            className="glass p-4 rounded-xl text-center"
          >
            <div className="font-heading font-bold text-2xl text-vibrant-teal mb-1">
              {testimonials.length}+
            </div>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </motion.div>
          <motion.div
            variants={slideUp}
            className="glass p-4 rounded-xl text-center"
          >
            <div className="font-heading font-bold text-2xl text-vibrant-teal mb-1">
              ⭐ 5.0
            </div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </motion.div>
          <motion.div
            variants={slideUp}
            className="glass p-4 rounded-xl text-center"
          >
            <div className="font-heading font-bold text-2xl text-vibrant-teal mb-1">
              100%
            </div>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
