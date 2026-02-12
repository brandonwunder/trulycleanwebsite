/**
 * Cleaning Service Data
 * Central data hub for all cleaning-themed components
 * Includes tiers, checklists, trust badges, scent options, and product info
 */

import {
  Sparkles,
  Clock,
  Calendar,
  Home,
  Building2,
  ChefHat,
  Droplets,
  Bed,
  Sofa,
  ShieldCheck,
  Citrus,
  Leaf,
  Package,
  Heart,
  Award,
  Star,
  CheckCircle,
  Shield,
  type LucideIcon,
} from 'lucide-react'

/**
 * CLEANING TIERS DATA
 * Used by: CleanOMeter component
 */

export interface CleanTier {
  id: 'light' | 'standard' | 'deep' | 'moveout'
  name: string
  duration: string
  frequency: string
  checklist: string[]
  priceRange: string
  icon: LucideIcon
  color: string
  description: string
}

export const cleaningTiers: CleanTier[] = [
  {
    id: 'light',
    name: 'Light Refresh',
    duration: '1-2 hours',
    frequency: 'Weekly',
    priceRange: '$60-90',
    icon: Sparkles,
    color: 'vibrant-teal',
    description: 'Perfect for weekly maintenance',
    checklist: [
      'Quick dust all surfaces',
      'Vacuum high-traffic areas',
      'Wipe kitchen counters & appliances',
      'Clean bathroom mirrors & sinks',
      'Empty all trash bins',
      'Tidy common areas',
    ],
  },
  {
    id: 'standard',
    name: 'Standard Clean',
    duration: '2-3 hours',
    frequency: 'Biweekly',
    priceRange: '$120-180',
    icon: Home,
    color: 'vibrant-green',
    description: 'Our most popular service',
    checklist: [
      'Thorough dust all surfaces',
      'Vacuum & mop all floors',
      'Clean kitchen (counters, appliances, sink)',
      'Scrub bathrooms (toilet, shower, sink)',
      'Wipe baseboards & door frames',
      'Change bed linens (if requested)',
      'Empty trash & replace liners',
      'General organizing & tidying',
    ],
  },
  {
    id: 'deep',
    name: 'Deep Clean',
    duration: '3-4 hours',
    frequency: 'Monthly',
    priceRange: '$200-300',
    icon: Award,
    color: 'vibrant-orange',
    description: 'Complete top-to-bottom cleaning',
    checklist: [
      'Everything in Standard Clean, PLUS:',
      'Inside oven, fridge, microwave',
      'Behind & under furniture',
      'Ceiling fans & light fixtures',
      'Window sills & tracks',
      'Cabinet fronts & drawers',
      'Baseboards & crown molding',
      'Grout scrubbing in bathrooms',
      'Dust blinds & window treatments',
    ],
  },
  {
    id: 'moveout',
    name: 'Move-Out Reset',
    duration: '4-6 hours',
    frequency: 'One-time',
    priceRange: '$300-500',
    icon: Package,
    color: 'navy-dark',
    description: 'Rent-ready, inspection-ready',
    checklist: [
      'Everything in Deep Clean, PLUS:',
      'Inside all cabinets & closets',
      'All appliances (inside & out)',
      'Window washing (interior)',
      'Wall spot cleaning',
      'Light switch & outlet plates',
      'Air vents & returns',
      'Carpet stain treatment',
      'Garage/patio sweep (if requested)',
    ],
  },
]

/**
 * ROOM CHECKLIST DATA
 * Used by: ChecklistTabs component
 */

export type Tier = 'standard' | 'deep' | 'moveout'

export interface ChecklistItem {
  task: string
  tiers: Tier[]
  icon: LucideIcon
}

export interface RoomChecklist {
  room: string
  displayName: string
  icon: LucideIcon
  items: ChecklistItem[]
}

export const roomChecklists: RoomChecklist[] = [
  {
    room: 'kitchen',
    displayName: 'Kitchen',
    icon: ChefHat,
    items: [
      {
        task: 'Wipe down all countertops & backsplash',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean exterior of all appliances',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Clean inside microwave',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Clean inside oven',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Clean inside refrigerator',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe cabinet fronts',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean inside all cabinets & drawers',
        tiers: ['moveout'],
        icon: Package,
      },
      {
        task: 'Scrub sink & polish faucet',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Sweep & mop floors',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Take out trash & replace liner',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Package,
      },
      {
        task: 'Wipe light switches & handles',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean range hood & filters',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
    ],
  },
  {
    room: 'bathrooms',
    displayName: 'Bathrooms',
    icon: Droplets,
    items: [
      {
        task: 'Scrub toilet (bowl, seat, base)',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean shower/tub & tiles',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Scrub grout lines',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe down sink & countertop',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Polish mirrors & fixtures',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe cabinet exteriors',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean inside cabinets & drawers',
        tiers: ['moveout'],
        icon: Package,
      },
      {
        task: 'Sweep & mop floors',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Empty trash & replace liner',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Package,
      },
      {
        task: 'Dust light fixtures & exhaust fan',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe baseboards & door frames',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
    ],
  },
  {
    room: 'bedrooms',
    displayName: 'Bedrooms',
    icon: Bed,
    items: [
      {
        task: 'Dust all surfaces & furniture',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Vacuum carpets & rugs',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Change bed linens (if provided)',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Bed,
      },
      {
        task: 'Wipe mirrors & glass',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Dust ceiling fans & light fixtures',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe baseboards & window sills',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Vacuum under bed & furniture',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean inside closets',
        tiers: ['moveout'],
        icon: Package,
      },
      {
        task: 'Wipe light switches & door handles',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Organize & tidy (general)',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Package,
      },
    ],
  },
  {
    room: 'living',
    displayName: 'Living Areas',
    icon: Sofa,
    items: [
      {
        task: 'Dust all surfaces & shelves',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Vacuum carpets & upholstery',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Mop hard floors',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Wipe TV & entertainment center',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Dust ceiling fans & light fixtures',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Wipe baseboards & crown molding',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Clean window sills & tracks',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Dust blinds & window treatments',
        tiers: ['deep', 'moveout'],
        icon: Sparkles,
      },
      {
        task: 'Vacuum behind & under furniture',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'Wipe light switches & outlets',
        tiers: ['deep', 'moveout'],
        icon: Droplets,
      },
      {
        task: 'General organizing & tidying',
        tiers: ['standard', 'deep', 'moveout'],
        icon: Package,
      },
    ],
  },
]

/**
 * RECENT CLEANS TICKER DATA
 * Used by: RecentCleansTicker component
 */

export const recentCleans = [
  'Just cleaned in Anthem',
  'Deep clean in New River',
  'Move-out in Cave Creek',
  'Standard clean in Desert Hills',
  'Office clean in Phoenix',
  'Post-construction in Scottsdale',
  'Bi-weekly clean in Peoria',
  'Deep clean in Surprise',
]

/**
 * TRUST BADGES DATA
 * Used by: Hero component, Contact component
 */

export interface TrustBadge {
  icon: LucideIcon
  text: string
  color: string
}

export const trustBadges: TrustBadge[] = [
  { icon: Shield, text: 'Insured', color: 'vibrant-teal' },
  { icon: Award, text: 'BBB Accredited', color: 'vibrant-green' },
  { icon: Star, text: '5.0 Rating', color: 'vibrant-orange' },
  { icon: CheckCircle, text: '100% Satisfaction', color: 'vibrant-teal' },
]

/**
 * SCENT OPTIONS DATA
 * Used by: ChooseYourFinish component
 */

export interface ScentOption {
  id: 'fresh-linen' | 'citrus' | 'unscented'
  name: string
  icon: LucideIcon
  color: string
  description: string
}

export const scentOptions: ScentOption[] = [
  {
    id: 'fresh-linen',
    name: 'Fresh Linen',
    icon: Sparkles,
    color: 'vibrant-teal',
    description: 'Clean, crisp, and refreshing',
  },
  {
    id: 'citrus',
    name: 'Citrus Burst',
    icon: Citrus,
    color: 'vibrant-orange',
    description: 'Energizing and uplifting',
  },
  {
    id: 'unscented',
    name: 'Unscented',
    icon: ShieldCheck,
    color: 'vibrant-green',
    description: 'Hypoallergenic and gentle',
  },
]

/**
 * PRODUCT TRANSPARENCY SECTIONS
 * Used by: ChooseYourFinish component
 */

export interface ProductSection {
  id: string
  title: string
  icon: LucideIcon
  content: string[]
}

export const productSections: ProductSection[] = [
  {
    id: 'kid-pet-safe',
    title: 'Kid + Pet Safe Products',
    icon: Heart,
    content: [
      'Non-toxic, EPA Safer Choice certified cleaners',
      'Fragrance-free options always available',
      'Plant-based ingredients when possible',
      'Brands: Method, Seventh Generation, Mrs. Meyer\'s',
      'No harsh chemicals like bleach or ammonia',
      'Safe for all family members, including furry ones',
    ],
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Products',
    icon: Leaf,
    content: [
      'Biodegradable and phosphate-free formulas',
      'Cruelty-free (never tested on animals)',
      'Recyclable packaging',
      'Concentrated solutions to reduce waste',
      'EPA certified green products',
      'Low environmental impact',
    ],
  },
  {
    id: 'what-we-bring',
    title: 'What We Bring',
    icon: Package,
    content: [
      'All cleaning supplies & equipment included',
      'HEPA-filter vacuums for better air quality',
      'Microfiber cloths (reduce waste & allergens)',
      'Mops, buckets, scrub brushes',
      'Extension poles for high dusting',
      'You don\'t need to provide anything!',
    ],
  },
]
