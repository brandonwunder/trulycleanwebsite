# 🎬 Animation Libraries Guide

## Framer Motion ⭐ (Recommended for 95% of animations)

**Purpose:** Industry-standard animation library with 120fps GPU acceleration

**Install:** Already in package.json (`framer-motion`)

**Documentation:** [Framer Motion Docs](https://motion.dev/)

### Common Patterns

#### Page Transition Animation
```tsx
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      Content
    </motion.div>
  )
}
```

#### Scroll-Triggered Animation (WITH Intersection Observer)
```tsx
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function ScrollAnimation() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
    >
      This animates on scroll
    </motion.div>
  )
}
```

#### Hover Button Animation
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
  Click Me
</motion.button>
```

### Use Cases

✅ Hero section entrance animations
✅ Fade-in effects for testimonials
✅ Button hover animations
✅ Page transitions
✅ Scroll-triggered reveals
✅ Staggered list animations
✅ Modal opens/closes

### Performance Tip

Use intersection observer for scroll animations - it's more efficient than scroll event listeners!

---

## React Intersection Observer

**Purpose:** Detect when elements enter the viewport (scroll triggers)

**Install:** Already in package.json (`react-intersection-observer`)

**Documentation:** [React Intersection Observer on npm](https://www.npmjs.com/package/react-intersection-observer)

### Quick Example

```tsx
import { useInView } from 'react-intersection-observer'

export default function Testimonial() {
  const { ref, inView } = useInView({
    threshold: 0.2,        // Trigger when 20% visible
    triggerOnce: true      // Only trigger once
  })

  return (
    <div ref={ref}>
      {inView ? 'Visible!' : 'Not visible yet'}
    </div>
  )
}
```

### Configuration Options

- `threshold` - How much of element must be visible to trigger (0-1, default 0)
- `triggerOnce` - Only trigger animation once (useful for performance)
- `triggerOnce: false` - Animate every time element enters/leaves viewport
- `fallbackInView` - Assume in view if intersection observer not supported

### Best Practices

1. Always use `triggerOnce: true` unless you need repeated animations
2. Combine with Framer Motion for smooth animations
3. Set `threshold` based on when you want animation to start
4. Test on mobile - some devices have performance constraints

---

## GSAP (Optional - For Advanced Animations)

**Purpose:** Professional-grade animations with ScrollTrigger plugin

**Documentation:** [GSAP](https://gsap.com/)

**Use when:**
- You need timeline-based animations
- Complex scroll-linked effects
- Advanced scrubbing/pinning
- Professional motion graphics

**Note:** For most cleaning service website needs, Framer Motion is sufficient. Only use GSAP if you need advanced features.

---

## Implementation Priority

- **Phase 1 (Must-Have):** Framer Motion for page transitions & button animations
- **Phase 2 (Important):** React Intersection Observer for scroll reveals
- **Phase 3 (Optional):** GSAP for advanced effects

---

## Common Animation Patterns for Cleaning Websites

### Hero Section Entrance
```tsx
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your Clean Home Awaits
</motion.h1>
```

### Testimonial Card Reveal on Scroll
```tsx
const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

<motion.div
  ref={ref}
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.5 }}
>
  Customer testimonial...
</motion.div>
```

### Service Benefits List (Staggered)
```tsx
<motion.ul>
  {benefits.map((benefit, i) => (
    <motion.li
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
    >
      ✓ {benefit}
    </motion.li>
  ))}
</motion.ul>
```

---

**Last Updated:** February 11, 2026
