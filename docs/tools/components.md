# 🧩 UI Component Libraries

This guide covers three powerful component libraries for building the UI.

---

## shadcn/ui ⭐ (Recommended)

**Purpose:** Pre-built, customizable components using Tailwind + Radix UI

**Documentation:** [shadcn/ui](https://ui.shadcn.com/)

**Unique Feature:** Copy-paste approach - you own the component code!

### Installation

```bash
# Initialize shadcn/ui in your project
npx shadcn-ui@latest init
```

### Add Needed Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form
```

This creates a `src/components/ui` directory with copy-paste components.

### Example Usage

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Hero() {
  return (
    <Card className="p-6">
      <h1>Get Your Free Quote</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <Button>Request Quote</Button>
      </div>
    </Card>
  )
}
```

### Advantages

✅ Copy-paste components (you control the code)
✅ Fully customizable with Tailwind
✅ No additional bundle bloat
✅ TypeScript support built-in
✅ Accessible by default (Radix UI primitives)
✅ Easy to modify without dependencies

### When to Use shadcn/ui

- Form components (inputs, textareas, selects)
- Buttons and CTAs
- Cards and containers
- Modals/dialogs
- Tabs and accordions

---

## Headless UI

**Purpose:** Unstyled, accessible component primitives by Tailwind creators

**Documentation:** [Headless UI](https://headlessui.com/)

### Example: Dropdown Menu

```tsx
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'

export default function Navigation() {
  return (
    <Menu>
      <MenuButton>Services ▼</MenuButton>
      <MenuItems>
        <MenuItem>
          <a href="/residential">Residential</a>
        </MenuItem>
        <MenuItem>
          <a href="/commercial">Commercial</a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
```

### When to Use Headless UI

- Maximum control over styling
- Want to build your own components
- Need simple, headless components
- Custom design systems

---

## Flowbite React

**Purpose:** 400+ pre-styled Tailwind components with dark mode support

**Install:** Already in package.json (`flowbite-react`)

**Documentation:** [Flowbite React](https://flowbite-react.com/)

### Hero Section Example

Flowbite provides ready-to-use hero components. Visit their website for live examples and copy-paste code.

```tsx
import { HeroSection } from 'flowbite-react'

export default function Hero() {
  return (
    <HeroSection
      title="Your Home Deserves Better"
      subtitle="Professional cleaning services for your home or business"
      backgroundImage="/hero-bg.jpg"
      ctaText="Get Quote"
      ctaLink="#quote-form"
    />
  )
}
```

### When to Use Flowbite

- Pre-styled complete sections
- Want to get up and running fast
- Need dark mode support
- Marketing landing pages
- Navbar, footer, testimonial sections

### Available Component Categories

- Navigation (navbar, breadcrumbs)
- Hero sections
- Feature sections
- Testimonials
- Cards and grids
- Forms
- Pricing tables
- FAQs

---

## Recommendation by Use Case

### Quote Form
✅ **shadcn/ui** - Highly customizable form controls

### Hero Section
✅ **Flowbite** - Pre-designed hero components
OR ✅ **shadcn/ui** - For full control

### Testimonial Cards
✅ **shadcn/ui** (Card) - Simple and customizable
✅ **Flowbite** - Pre-styled testimonial sections

### Service Features List
✅ **shadcn/ui** (Card) - Combine with icons

### Buttons & CTAs
✅ **shadcn/ui** (Button) - Great defaults

### Navigation
✅ **Flowbite** - Pre-built navbar
✅ **Headless UI** - Full control over styling

---

## Mixed Approach (Recommended)

Use all three together:

```tsx
// Flowbite for hero
import FlowbiteHero from 'flowbite-react/...'

// shadcn/ui for form
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Headless UI for custom dropdown
import { Menu } from '@headlessui/react'

export default function Page() {
  return (
    <>
      <FlowbiteHero />
      <QuoteForm />
      <ServiceMenu />
    </>
  )
}
```

---

## Component Setup Checklist

- [ ] Run `npx shadcn-ui@latest init`
- [ ] Add button component
- [ ] Add card component
- [ ] Add input component
- [ ] Add label component
- [ ] Add textarea component
- [ ] Add form component (for React Hook Form)
- [ ] Test shadcn/ui components work
- [ ] Customize button styles in `components/ui/button.tsx`
- [ ] Customize card styles in `components/ui/card.tsx`

---

## Customization

### Modify shadcn/ui Components

All shadcn/ui components are in `src/components/ui/`. You can modify them directly:

```tsx
// src/components/ui/button.tsx - Example modification

// Make all buttons vibrant by default
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium...",
  {
    variants: {
      variant: {
        default: "bg-vibrant-blue text-white hover:bg-vibrant-blue/90", // Modified!
        outline: "border border-vibrant-blue text-vibrant-blue...",
      },
    },
  }
)
```

---

**Last Updated:** February 11, 2026
