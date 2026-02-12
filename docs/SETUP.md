# ⚙️ Installation & Setup Guide

Complete setup instructions to get the Truly Clean project running locally.

---

## Prerequisites

Before starting, ensure you have:

- ✅ Node.js 18+ or 20+ installed ([download](https://nodejs.org/))
- ✅ npm or pnpm package manager
- ✅ Git installed ([download](https://git-scm.com/))
- ✅ Code editor (VS Code recommended)

Check installations:
```bash
node --version    # Should be 18+
npm --version     # Or: pnpm --version
git --version
```

---

## Step 1: Install Dependencies

```bash
# Navigate to project directory
cd truly-clean

# Install all npm packages
npm install

# Or with pnpm (faster)
pnpm install
```

This installs:
- Next.js, React, TypeScript
- Tailwind CSS, Framer Motion, Swiper
- Form handling, validation
- All UI libraries

---

## Step 2: Setup shadcn/ui Components

shadcn/ui requires special initialization:

```bash
# Initialize shadcn/ui in your project
npx shadcn-ui@latest init

# When prompted, choose your preferences:
# - Style: Default
# - Base color: Slate (or your preference)
# - CSS variables: Yes
```

This creates `src/components/ui/` folder.

### Add Core Components

```bash
# Add commonly needed components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form

# These are now in src/components/ui/ and ready to use!
```

---

## Step 3: Environment Variables

### Create `.env.local` File

```bash
# Copy the template
cp .env.example .env.local

# Edit .env.local and fill in your values
```

### Basic Configuration

```env
# Site Configuration (Required)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Truly Clean

# Company Contact Info (From Facebook)
NEXT_PUBLIC_COMPANY_PHONE=(555) 123-4567
NEXT_PUBLIC_COMPANY_EMAIL=info@trulyclean.com
NEXT_PUBLIC_COMPANY_ADDRESS=123 Main St, Your City, ST 12345

# Feature Flags
NEXT_PUBLIC_ENABLE_TESTIMONIALS=true
NEXT_PUBLIC_ENABLE_BOOKING=false
NEXT_PUBLIC_ENABLE_CHAT=false
```

### Add Email Service (Choose One)

**Option A: Resend** (Recommended)
```env
RESEND_API_KEY=your_key_here
RESEND_FROM_EMAIL=noreply@trulyclean.com
RESEND_TO_EMAIL=quotes@trulyclean.com
```

**Option B: SendGrid**
```env
SENDGRID_API_KEY=your_key_here
SENDGRID_FROM_EMAIL=noreply@trulyclean.com
SENDGRID_TO_EMAIL=quotes@trulyclean.com
```

**Option C: Nodemailer**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@trulyclean.com
EMAIL_TO=quotes@trulyclean.com
```

### Add Database (Optional)

**Option A: Supabase**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
SUPABASE_SERVICE_ROLE_KEY=your_key_here
```

**Option B: Airtable**
```env
AIRTABLE_API_KEY=your_key_here
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Quotes
```

**Option C: MongoDB**
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
```

---

## Step 4: Project Structure Check

Verify the project has this structure:

```
truly-clean/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Layout
│   │   ├── globals.css        # Tailwind styles
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   └── ...               # Your components
│   └── lib/
│       └── validation.ts     # Zod schemas
├── public/                   # Static files
├── docs/                     # Documentation (you are here!)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── .env.local               # Your env vars (DON'T COMMIT)
```

---

## Step 5: Start Development Server

```bash
# Start the development server
npm run dev

# Server will start on http://localhost:3000
# Open in browser to see the site!

# Press Ctrl+C to stop the server
```

---

## Step 6: Verify Everything Works

### Check Installations

```bash
# In browser console, verify:
# 1. Next.js is working (page loads)
# 2. Tailwind is applied (styled properly)
# 3. TypeScript compiles (no errors)

# Check terminal for any errors
```

### Test Components

```tsx
// Test that shadcn/ui components work:
// In a React component:
import { Button } from '@/components/ui/button'

export default function TestPage() {
  return <Button>Click me</Button>
}
```

### Test Imports

```tsx
// Verify these imports work:
import { motion } from 'framer-motion'           // Animations
import { Phone } from 'lucide-react'             // Icons
import { Swiper, SwiperSlide } from 'swiper/react' // Carousel
import { useForm } from 'react-hook-form'        // Forms
import { z } from 'zod'                          // Validation
```

---

## Step 7: Configure Git (Recommended)

```bash
# Initialize git repository
git init

# Add files to staging
git add .

# Create first commit
git commit -m "Initial project setup with Truly Clean website structure"

# (Optional) Connect to GitHub and push
# git remote add origin https://github.com/your-username/truly-clean.git
# git branch -M main
# git push -u origin main
```

---

## Troubleshooting

### "Module not found" Error

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS not applying styles

```bash
# Rebuild Tailwind
npm run dev

# Or check tailwind.config.js has correct content paths:
content: [
  './src/**/*.{js,ts,jsx,tsx}',
]
```

### Port 3000 already in use

```bash
# Run on different port
npm run dev -- -p 3001
```

### shadcn/ui component errors

```bash
# Make sure shadcn/ui is initialized
npx shadcn-ui@latest init

# Re-add components
npx shadcn-ui@latest add button
```

### TypeScript errors

```bash
# Check TypeScript config
# In tsconfig.json, ensure:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Next Steps After Setup

1. ✅ Read [CLAUDE.md](../CLAUDE.md) - Project overview and requirements
2. ✅ Check [docs/README.md](README.md) - Documentation index
3. ✅ Review [DESIGN-INSPIRATION.md](DESIGN-INSPIRATION.md) - Design ideas
4. ✅ Start building from [Phase 1](../CLAUDE.md#implementation-priorities)

---

## Quick Reference Commands

```bash
# Development
npm run dev                # Start dev server

# Build
npm run build             # Build for production
npm start                 # Run production build

# Code Quality
npm run lint             # Check for linting issues

# shadcn/ui
npx shadcn-ui@latest init                    # Initialize
npx shadcn-ui@latest add [component-name]   # Add component

# Helpful
git status               # Check git status
git log --oneline        # View commit history
git add .               # Stage all changes
git commit -m "message" # Create commit
```

---

## Getting Help

- **Stuck?** Check [RESOURCES.md](RESOURCES.md) for documentation links
- **Questions?** Read the relevant tool guide in `docs/tools/`
- **Errors?** Check troubleshooting section above
- **Community:** Join Discord communities (links in RESOURCES.md)

---

**Last Updated:** February 11, 2026

Ready to start building? Go to [docs/README.md](README.md) for what to build next!
