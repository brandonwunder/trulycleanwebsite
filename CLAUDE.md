# TrulyClean - Website Development Guide (CLAUDE.md)

**Last Updated:** February 11, 2026
**Project:** TrulyClean - Residential & Commercial Cleaning Service Website

---

## 📋 Project Overview

**Company:** TrulyClean
**Business Type:** Residential & Commercial Cleaning Services
**Primary Goal:** Build a modern website with a quick-quote form and customer testimonials
**Facebook Page:** https://www.facebook.com/TrulyCleanSonya

This document serves as the master instruction guide for all development work on the TrulyClean website. Any AI assistant working on this project should read this file first to understand the vision, requirements, and technical approach.

---

## 🎯 Core Requirements

### Website Features (Priority Order)
1. **Quote Request Form** - Main conversion goal
   - Fields: Full Name, Email, Phone Number
   - Service Type Selector: Residential or Commercial
   - Mobile-responsive design
   - Form validation with helpful error messages
   - Success confirmation after submission

2. **Landing Page with Hero Section**
   - Clear call-to-action buttons (quote form, phone contact)
   - Service type toggle/selector
   - Compelling headline and value proposition
   - Professional, modern, energetic design

3. **Testimonials/Reviews Section**
   - Display customer success stories prominently
   - Build trust and credibility
   - Include customer names/details if available

4. **Services Overview**
   - Separate sections or clear distinction: Residential vs Commercial
   - Brief descriptions of what's offered
   - Key benefits highlighted

5. **Multiple Contact Options**
   - Quote form (primary conversion)
   - Phone number (from Facebook page)
   - Email contact (optional, from Facebook page)

6. **About Section**
   - Company background and mission
   - Information to be extracted from Facebook page

---

## 🎨 Design Direction

### Style & Brand
- **Design Philosophy:** Modern and Vibrant (Standout)
- **Energy Level:** Professional but energetic
- **Visual Approach:** Bold, contemporary design that catches attention
- **Trust Elements:** Testimonials, clear contact info, professional layout

### Brand Information to Extract from Facebook
*Fill in this section after reviewing https://www.facebook.com/TrulyCleanSonya*

```
COMPANY BRANDING INFORMATION
============================

Company Name: TrulyClean
Tagline/Slogan: [TO BE EXTRACTED FROM FACEBOOK]

Primary Services (Residential):
- [TO BE EXTRACTED FROM FACEBOOK]
- [TO BE EXTRACTED FROM FACEBOOK]

Primary Services (Commercial):
- [TO BE EXTRACTED FROM FACEBOOK]
- [TO BE EXTRACTED FROM FACEBOOK]

Service Areas/Locations: [TO BE EXTRACTED FROM FACEBOOK]

Business Hours: [TO BE EXTRACTED FROM FACEBOOK]

Contact Information:
- Phone: [TO BE EXTRACTED FROM FACEBOOK]
- Email: [TO BE EXTRACTED FROM FACEBOOK]
- Address: [TO BE EXTRACTED FROM FACEBOOK]

Unique Selling Points: [TO BE EXTRACTED FROM FACEBOOK]

Brand Voice/Tone: [TO BE EXTRACTED FROM FACEBOOK]

Brand Colors: [TO BE DECIDED OR EXTRACTED]
- Primary:
- Secondary:
- Accent:

Typography Preferences: [TO BE DECIDED]

Customer Testimonials/Reviews: [TO BE EXTRACTED IF AVAILABLE]

Logo/Visual Assets: [TO BE GATHERED]

Social Media:
- Facebook: https://www.facebook.com/TrulyCleanSonya
- Other: [TO BE FILLED IF AVAILABLE]
```

---

## 🛠️ Technical Stack

### Framework & Languages
- **Framework:** Next.js 14+ (React-based, modern)
- **Language:** TypeScript (recommended for type safety)
- **Styling:** Tailwind CSS (for modern, vibrant design)
- **Node Version:** 18+ or 20+

### Key Libraries
- **Form Handling:** React Hook Form
- **Validation:** Zod or React Hook Form built-in validation
- **UI Components:** shadcn/ui (optional, for polished components)
- **Icons:** Lucide React or similar

### Infrastructure & Deployment
- **Hosting:** Vercel (recommended for Next.js)
- **Version Control:** Git
- **Package Manager:** npm or pnpm

### Optional Integrations (For Future)
- **Email Service:** SendGrid, Resend, or similar (for quote submissions)
- **Admin Dashboard:** Next.js API routes + simple admin panel
- **Analytics:** Google Analytics, Plausible
- **CRM:** HubSpot, Pipedrive (for quote management)

---

## 🛠️ Tools & Libraries Reference

This project includes carefully-selected industry-leading tools and libraries. **Detailed documentation for each tool is in the `docs/` folder.**

When building a specific feature, refer to the relevant tool guide:

### 🎬 Animations
**→ See [docs/tools/animations.md](docs/tools/animations.md)**

Use Framer Motion for page transitions, scroll reveals, and micro-interactions.
- Entrance animations for hero section
- Fade-in effects for testimonials
- Button hover effects
- Implementation priority: **Phase 1 (Must-Have)**

### 🎨 Icons
**→ See [docs/tools/icons.md](docs/tools/icons.md)**

Use Lucide React for 1,500+ beautiful, consistent SVG icons.
- Phone, mail, contact icons
- Check marks, sparkles for features
- Star ratings for testimonials
- Implementation priority: **Phase 1 (Must-Have)**

### 🧩 UI Components
**→ See [docs/tools/components.md](docs/tools/components.md)**

Choose from three complementary libraries:
- **shadcn/ui** (recommended) - Copy-paste, customizable components
- **Headless UI** - Unstyled, maximum control
- **Flowbite React** - Pre-styled complete sections
- Implementation priority: **Phase 1 (Must-Have)**

### 🎠 Carousels & Testimonials
**→ See [docs/tools/carousels.md](docs/tools/carousels.md)**

Use Swiper (28K+ stars) for the testimonial carousel.
- Autoplay, navigation, pagination
- Responsive breakpoints
- Full working example included
- Implementation priority: **Phase 2 (Important)**

### ✅ Form Validation
**→ See [docs/tools/validation.md](docs/tools/validation.md)**

Use Zod for type-safe schema validation with React Hook Form.
- Quote form validation
- Error messages & display
- Server-side validation patterns
- Implementation priority: **Phase 1 (Must-Have)**

### 🔧 Utilities
**→ See [docs/tools/utilities.md](docs/tools/utilities.md)**

Use clsx & tailwind-merge for conditional Tailwind classes.
- Build flexible components
- Avoid class conflicts
- Implementation priority: **Phase 2 (Important)**

### 📧 Email Services
**→ See [docs/tools/email.md](docs/tools/email.md)**

Choose ONE email service:
- **Resend** (recommended) - Modern, simple API
- **SendGrid** - Enterprise-grade, reliable
- **Nodemailer** - Free, self-hosted with Gmail/Outlook
- Implementation priority: **Phase 3 (When Needed)**

### 🗄️ Databases
**→ See [docs/tools/databases.md](docs/tools/databases.md)**

Choose ONE database:
- **Supabase** (recommended) - PostgreSQL + Auth, scalable
- **Airtable** - Simple spreadsheet API
- **MongoDB** - Document database, flexible
- Implementation priority: **Phase 3 (When Needed)**

---

## 📚 Documentation Index

- **[docs/README.md](docs/README.md)** - Documentation overview & navigation
- **[docs/SETUP.md](docs/SETUP.md)** - Installation & initialization guide
- **[docs/DESIGN-INSPIRATION.md](docs/DESIGN-INSPIRATION.md)** - Real cleaning website examples & design patterns
- **[docs/RESOURCES.md](docs/RESOURCES.md)** - All external links (60+ resources)
- **[docs/tools/](docs/tools/)** - Detailed guides for each tool

---

## 📁 Project Structure

```
truly-clean/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page (main website)
│   │   ├── layout.tsx            # Root layout with header/footer
│   │   ├── globals.css           # Global Tailwind styles
│   │   └── api/
│   │       └── quote/
│   │           └── route.ts      # POST endpoint for quote form submissions
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section with CTAs
│   │   │   ├── Services.tsx      # Services overview (residential & commercial)
│   │   │   ├── Testimonials.tsx  # Customer testimonials
│   │   │   └── About.tsx         # Company about section
│   │   ├── QuoteForm.tsx         # Main quote request form component
│   │   ├── ServiceSelector.tsx   # Residential/Commercial toggle
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── utils.ts              # Utility functions
│   │   └── validation.ts         # Form validation schemas (Zod)
│   │
│   └── styles/
│       └── globals.css           # Tailwind configuration and globals
│
├── public/
│   └── assets/
│       ├── logo.png              # Company logo
│       ├── hero-image.jpg        # Hero section image
│       └── testimonials/          # Customer photos (if available)
│
├── .next/                         # Build output (generated)
├── node_modules/                  # Dependencies (generated)
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
├── CLAUDE.md                      # This file
└── README.md                      # Technical documentation for developers
```

---

## 🚀 Implementation Priorities

### Phase 1: Project Setup (First Sprint)
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS
3. Set up project structure and basic layouts
4. Create Header and Footer components

### Phase 2: Core Landing Page (Second Sprint)
1. Build Hero section with CTAs
2. Create Services section (Residential & Commercial)
3. Implement responsive design (mobile-first)
4. Add basic About section (placeholder content)

### Phase 3: Quote Form (Third Sprint)
1. Build QuoteForm component
2. Implement form validation (React Hook Form + Zod)
3. Create ServiceSelector toggle
4. Add form success/error states
5. Create API endpoint for form submissions

### Phase 4: Trust & Social Proof (Fourth Sprint)
1. Build Testimonials section
2. Add customer review cards
3. Integrate testimonials into page layout
4. Style with modern, vibrant design

### Phase 5: Polish & Optimization (Fifth Sprint)
1. Responsive design refinements
2. Performance optimization (image optimization, lazy loading)
3. SEO optimization (meta tags, semantic HTML)
4. Accessibility audit (WCAG AA compliance)
5. Mobile testing and fixes

### Phase 6: Form Backend (Sixth Sprint)
1. Create quote form API endpoint
2. Implement email notification (SendGrid/Resend)
3. Data storage/database consideration
4. Error handling and user feedback

---

## 💻 Development Guidelines

### Code Standards
- **Component Style:** Functional components with hooks
- **File Naming:** PascalCase for components, camelCase for utilities
- **Imports:** Absolute imports from `@/` (configured in tsconfig.json)
- **Styling:** Tailwind utility classes (avoid custom CSS when possible)

### Component Structure
```tsx
// Example component structure
'use client'  // Add if using client-side features

import { ReactNode } from 'react'

interface ComponentProps {
  // Define prop types
}

export default function Component({ prop1, prop2 }: ComponentProps): ReactNode {
  // Component logic here
  return (
    // JSX
  )
}
```

### Form Handling Pattern
- Use React Hook Form for form state management
- Use Zod for schema validation
- Display validation errors inline
- Show loading state during submission
- Provide clear success/error feedback

### Responsive Design
- **Mobile-first approach:** Design for mobile, enhance for larger screens
- **Breakpoints:** Follow Tailwind defaults (sm, md, lg, xl, 2xl)
- **Testing:** Test on real devices (iPhone, Android, tablets)

### Accessibility
- Semantic HTML (use `<button>`, `<input>`, `<nav>`, etc.)
- ARIA labels where needed
- Proper heading hierarchy (h1, h2, h3)
- Color contrast ratios (WCAG AA minimum)
- Keyboard navigation support
- Focus states visible

### Performance
- Image optimization (Next.js Image component)
- Lazy load below-the-fold components
- Minimize JavaScript bundle
- Optimize Tailwind CSS (tree-shake unused styles)
- Avoid layout shifts (define image dimensions)

### SEO Best Practices
- Unique, descriptive meta titles and descriptions
- Semantic HTML structure
- Image alt text
- Mobile-friendly design
- Fast page load times
- Structured data if needed

---

## 📱 Quote Form Specification

### Form Fields
```
1. Full Name (required)
   - Type: Text input
   - Validation: Min 2 characters, max 100 characters
   - Placeholder: "Your Full Name"

2. Email Address (required)
   - Type: Email input
   - Validation: Valid email format
   - Placeholder: "your@email.com"

3. Phone Number (required)
   - Type: Tel input
   - Validation: Valid phone format
   - Placeholder: "(555) 123-4567"

4. Service Type (required)
   - Type: Radio buttons or toggle
   - Options: "Residential" or "Commercial"
   - Required selection before submit

5. Additional Notes (optional)
   - Type: Textarea
   - Placeholder: "Tell us about your cleaning needs..."
   - Max: 500 characters
```

### Form Behavior
- **Validation:** Real-time feedback on errors
- **Submission:** POST to `/api/quote`
- **Success State:** Thank you message, clear next steps
- **Error State:** Clear error messages, allow retry
- **Loading State:** Disable submit button, show spinner

---

## 🔄 Development Workflow

### Before Starting
1. Read this CLAUDE.md file completely
2. Review the project structure
3. Check the latest version of dependencies
4. Understand the current state of the project

### When Adding Features
1. Create feature branch: `git checkout -b feature/feature-name`
2. Follow component structure patterns
3. Keep components small and focused
4. Write self-documenting code
5. Test on multiple screen sizes

### Committing Changes
- Write clear, descriptive commit messages
- Reference which section/feature was worked on
- Keep commits focused and logical

### Code Review Checklist
- [ ] Follows project structure and naming conventions
- [ ] Mobile-responsive design implemented
- [ ] Accessibility considerations addressed
- [ ] Form validation works correctly
- [ ] No console errors or warnings
- [ ] Performance optimized (images, lazy loading, etc.)
- [ ] SEO best practices followed

---

## 🌐 Site Navigation & CTA Strategy

### Navigation Priority
1. **Hero Section CTA:** "Get Your Free Quote" (button to form)
2. **Phone Contact:** Prominent display throughout page
3. **Quote Form:** Accessible and easy to use
4. **About:** Builds trust, second priority
5. **Testimonials:** Social proof, builds credibility

### Call-to-Action Design
- Multiple paths to quote form (hero button, floating CTA, form section)
- Phone number visible in header/footer
- Mobile-friendly form experience
- Clear success confirmation

---

## 📊 Analytics & Tracking (Future Phase)

When ready to implement:
- Track form submissions
- Monitor conversion rates
- Identify drop-off points
- Track page load performance
- Monitor user scroll depth

---

## 🔐 Security Considerations

- Form submission handling (validate on both client & server)
- Protect email submissions (use environment variables for API keys)
- HTTPS for all deployments
- No sensitive data in client-side code
- CSRF protection for forms

---

## 📞 Contact & Communication

**Project Owner:** TrulyClean / Sonya
**Facebook Page:** https://www.facebook.com/TrulyCleanSonya
**Primary Contact Method:** [TO BE FILLED FROM FACEBOOK]

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✅ Verification Checklist

Before considering the website "complete," verify:

- [ ] Quote form works on all devices (mobile, tablet, desktop)
- [ ] Form validation displays errors correctly
- [ ] Success confirmation appears after submission
- [ ] Navigation is intuitive and accessible
- [ ] Testimonials section is prominent
- [ ] Services are clearly explained (residential & commercial)
- [ ] Contact information is visible throughout
- [ ] Images are optimized and load quickly
- [ ] Site is mobile-responsive
- [ ] No console errors or warnings
- [ ] All links work correctly
- [ ] Accessibility audit passes (WCAG AA)
- [ ] SEO basics implemented
- [ ] Form submissions are handled properly

---

## 📝 Notes & Important Reminders

- The Facebook page cannot be automatically scraped; extract information manually from: https://www.facebook.com/TrulyCleanSonya
- Keep the design modern and vibrant to stand out
- Prioritize mobile experience (most users will access via mobile)
- Testimonials are critical for trust-building—emphasize this section
- The quote form is the main conversion goal—make it prominent and easy to use
- Consider that this is a local service business—include location/service area clearly

---

## 🔄 Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-02-11 | 1.0 | Initial CLAUDE.md created with full specifications |

---

**Last Updated:** February 11, 2026

*This document is the source of truth for all development work on the TrulyClean website. Please refer to it regularly and update it as requirements change.*
