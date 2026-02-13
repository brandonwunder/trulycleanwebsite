# 🎠 Swiper - Carousel & Testimonials

**Purpose:** Best-in-class carousel/slider for testimonials

**Install:** Already in package.json (`swiper`)

**GitHub Stars:** 28K+

**Documentation:** [Swiper React](https://swiperjs.com/react)

---

## Basic Setup

### Import Required Modules

```tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
```

---

## Testimonial Carousel Example

### Complete Working Example

```tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'TrulyClean made my home sparkle! The team was professional, on-time, and thorough. Highly recommended!',
      rating: 5,
      image: '/testimonials/sarah.jpg'
    },
    {
      name: 'Mike Davis',
      text: 'Professional service, great prices, amazing results. My office has never been cleaner!',
      rating: 5,
      image: '/testimonials/mike.jpg'
    },
    {
      name: 'Jennifer Lee',
      text: 'They handle my home bi-weekly. Reliable, friendly, and they respect my home. Perfect!',
      rating: 5,
      image: '/testimonials/jennifer.jpg'
    },
    {
      name: 'Robert Martinez',
      text: 'Best commercial cleaning service in the area. Transformed our office space!',
      rating: 5,
      image: '/testimonials/robert.jpg'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">What Customers Say</h2>
        <p className="text-gray-600 text-center mb-12">
          Trusted by hundreds of satisfied customers
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* Quote Icon */}
                <Quote
                  size={48}
                  className="text-blue-200 mb-4"
                />

                {/* Testimonial Text */}
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
```

---

## Configuration Options

### Core Parameters

```tsx
<Swiper
  // Autoplay
  autoplay={{
    delay: 5000,                    // 5 seconds between slides
    disableOnInteraction: false,    // Keep autoplay after interaction
    pauseOnMouseEnter: true         // Pause on hover
  }}

  // Navigation (Previous/Next buttons)
  navigation={true}

  // Pagination (Dots at bottom)
  pagination={{
    clickable: true,                // Make dots clickable
    type: 'bullets',                // 'bullets', 'fraction', 'progressbar'
    dynamicBullets: true            // Show only nearby bullets
  }}

  // Layout
  spaceBetween={30}                 // Gap between slides (px)
  slidesPerView={1}                 // Number of visible slides
  loop={true}                       // Infinite loop

  // Responsive
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}

  // Keyboard/Mouse
  keyboard={{ enabled: true }       // Arrow key navigation
  mousewheel={{ forceToAxis: true }}
>
```

---

## Responsive Testimonials (2 Columns on Larger Screens)

```tsx
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  autoplay={{ delay: 5000 }}
  pagination={{ clickable: true }}
  navigation
  spaceBetween={24}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
```

---

## Styling Swiper

### Custom Navigation Buttons

```tsx
import 'swiper/css'
import 'swiper/css/navigation'

// In your CSS file:
// .swiper-button-next,
// .swiper-button-prev {
//   color: #2563eb;
// }
//
// .swiper-button-next:after,
// .swiper-button-prev:after {
//   font-size: 20px;
// }
```

### Custom Pagination

```tsx
pagination={{
  clickable: true,
  bulletClass: 'swiper-pagination-bullet',
  bulletActiveClass: 'swiper-pagination-bullet-active'
}}

// CSS:
// .swiper-pagination-bullet {
//   background: #d1d5db;
// }
//
// .swiper-pagination-bullet-active {
//   background: #2563eb;
// }
```

---

## Advanced Features

### Programmatic Navigation

```tsx
const swiperRef = useRef(null)

<Swiper ref={swiperRef}>
  {/* slides */}
</Swiper>

<button onClick={() => swiperRef.current?.swiper.slideNext()}>
  Next
</button>
```

### On Slide Change Event

```tsx
<Swiper
  onSlideChange={(swiper) => {
    console.log('Current slide:', swiper.activeIndex)
  }}
>
```

### Centered Slide Mode

```tsx
<Swiper
  centeredSlides={true}
  slidesPerView="auto"
  spaceBetween={30}
  loop={true}
>
```

---

## Testimonial Carousel Checklist

- [ ] Install Swiper modules correctly
- [ ] Import CSS files (swiper/css, navigation, pagination)
- [ ] Add 'use client' directive (Next.js App Router)
- [ ] Configure autoplay timing
- [ ] Test pagination dots
- [ ] Test navigation buttons
- [ ] Test responsive breakpoints
- [ ] Test keyboard navigation
- [ ] Add custom styling to match brand
- [ ] Test on mobile devices
- [ ] Verify accessibility (keyboard nav works)

---

## Performance Tips

1. **Use `triggerOnce` with animations** - Don't re-animate on scroll
2. **Lazy load images** - Use `loading="lazy"` on testimonial images
3. **Optimize images** - Compress testimonial photos
4. **Disable effects if needed** - For better mobile performance

---

## Alternatives

- **Embla Carousel** - Lightweight alternative to Swiper
- **React Slick** - Another popular option

But Swiper is recommended (28K+ stars, best features).

---

**Last Updated:** February 11, 2026
