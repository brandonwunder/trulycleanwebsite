# 🎨 Lucide React Icons

**Purpose:** 1,500+ beautiful, consistent SVG icons

**Install:** Already in package.json (`lucide-react`)

**Documentation:** [Lucide Icons](https://lucide.dev/)

**Browse all icons:** https://lucide.dev/

---

## Basic Usage

### Simple Icon
```tsx
import { Heart, Star, CheckCircle, Menu } from 'lucide-react'

export default function Component() {
  return (
    <div>
      <Heart size={24} color="red" />
      <Star size={32} className="text-yellow-400" />
      <CheckCircle className="w-6 h-6 text-green-500" />
    </div>
  )
}
```

### Icon with Hover Effect
```tsx
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-2"
    >
      <Phone size={20} />
      Call Us
    </motion.button>
  )
}
```

---

## Popular Icons for This Project

### Navigation & Structure
- `Home` - Homepage/navigation
- `Menu` - Mobile menu toggle
- `X` - Close button
- `ChevronDown` - Dropdown indicator
- `ChevronRight` - Next/forward

### Contact & Communication
- `Phone` - Phone number
- `Mail` - Email contact
- `MessageSquare` - Chat/contact form
- `MapPin` - Location/address

### Services & Benefits
- `CheckCircle` - Service features
- `Sparkles` - Highlights/premium features
- `Shield` - Trust/security
- `Zap` - Speed/efficiency
- `Heart` - Care/quality
- `Users` - Team/community

### Testimonials & Reviews
- `Quote` - Testimonial quote mark
- `Star` - Ratings/reviews
- `ThumbsUp` - Approval/satisfaction

### Cleaning Specific
- `Droplets` - Water/cleaning
- `Wind` - Fresh/clean air
- `Leaf` - Eco-friendly
- `Sparkles` - Sparkling clean

---

## Icon Sizing

### Standard Sizes
```tsx
// Small (buttons, inline)
<Phone size={16} />

// Medium (default UI)
<Phone size={24} />

// Large (headings, emphasis)
<Phone size={32} />

// Extra Large (hero sections)
<Phone size={48} />
```

### Using Tailwind Classes
```tsx
// Instead of size prop
<Phone className="w-6 h-6" />      // 24px
<Phone className="w-8 h-8" />      // 32px
<Phone className="w-12 h-12" />    // 48px
```

---

## Styling Icons

### Color Options
```tsx
// Using color prop
<CheckCircle size={24} color="green" />

// Using Tailwind classes
<CheckCircle className="text-green-500" size={24} />

// Using opacity
<CheckCircle className="text-green-500/70" size={24} />
```

### With Backgrounds
```tsx
<div className="bg-blue-100 rounded-full p-3 inline-flex">
  <CheckCircle className="text-blue-600" size={24} />
</div>
```

---

## Accessibility

### Always Add Alt Text for Icon-Only Buttons
```tsx
<button
  title="Call us now"
  aria-label="Phone number"
>
  <Phone size={24} />
</button>
```

### Icon with Text (Better Accessibility)
```tsx
<button className="flex items-center gap-2">
  <Phone size={20} />
  <span>(555) 123-4567</span>
</button>
```

---

## Common Patterns for Cleaning Websites

### Feature List with Icons
```tsx
export default function Services() {
  const services = [
    { icon: Sparkles, label: 'Professional Cleaning' },
    { icon: Zap, label: 'Fast & Efficient' },
    { icon: Shield, label: 'Fully Insured' },
    { icon: Heart, label: 'Quality Guaranteed' }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {services.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center">
          <Icon size={32} className="text-blue-600 mb-2" />
          <p>{label}</p>
        </div>
      ))}
    </div>
  )
}
```

### Contact CTA with Icons
```tsx
export default function ContactSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone size={24} className="text-green-600" />
        <a href="tel:(555)123-4567">(555) 123-4567</a>
      </div>
      <div className="flex items-center gap-3">
        <Mail size={24} className="text-blue-600" />
        <a href="mailto:info@trulyclean.com">info@trulyclean.com</a>
      </div>
      <div className="flex items-center gap-3">
        <MapPin size={24} className="text-red-600" />
        <p>123 Main St, Your City, ST 12345</p>
      </div>
    </div>
  )
}
```

### Testimonial Quote Icon
```tsx
<div className="relative">
  <Quote size={48} className="text-gray-300 absolute -top-4 -left-4" />
  <p className="relative z-10 italic">
    "TrulyClean transformed my home. Highly recommended!"
  </p>
</div>
```

---

## Icon Import Tips

### One-Liner for Multiple Icons
```tsx
import { Phone, Mail, MapPin, Sparkles, Heart, Shield } from 'lucide-react'
```

### Dynamic Icon Selection
```tsx
const icons = {
  phone: Phone,
  mail: Mail,
  location: MapPin,
  sparkle: Sparkles
}

// Use like:
const Icon = icons['phone']
<Icon size={24} />
```

---

## Alternatives (If Needed)

- **Heroicons** - 316 icons by Tailwind creators (see docs/tools/...)
- **Phosphor Icons** - 9,000+ icons in 6 weights (see docs/RESOURCES.md)

But Lucide React is recommended for most projects.

---

**Last Updated:** February 11, 2026
