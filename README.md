# TrulyClean - Website

A modern, vibrant website for TrulyClean—a residential and commercial cleaning service company. Features a quick quote request form, customer testimonials, and service information.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd truly-clean

# Install dependencies
npm install
# or
pnpm install

# Create .env.local file (if needed for API integrations)
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── api/
│       └── quote/
│           └── route.ts   # Quote form API endpoint
├── components/             # React components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections
│   ├── QuoteForm.tsx      # Quote request form
│   └── ui/                # Reusable UI components
├── lib/                    # Utilities and helpers
│   ├── utils.ts
│   └── validation.ts      # Form validation schemas
└── styles/                 # Global styles
```

## 🛠️ Technology Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Management:** React Hook Form
- **Validation:** Zod
- **Deployment:** Vercel (recommended)

## 📦 Key Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "tailwindcss": "^3.0.0"
}
```

## 🎨 Tailwind CSS Configuration

Tailwind CSS is configured for modern, vibrant design. Custom colors and themes can be added in `tailwind.config.js`.

```bash
# Rebuild Tailwind CSS after changes
npm run dev  # Automatic in dev mode
```

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

```
# Example (add as needed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# API keys, third-party service credentials, etc.
```

## 🔄 Form Submission API

The quote form submits to `/api/quote` endpoint.

### Endpoint Details

**POST** `/api/quote`

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "serviceType": "residential" | "commercial",
  "notes": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Quote request submitted successfully"
}
```

## 📱 Responsive Design

The site uses a mobile-first approach:
- **Mobile:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1024px+

Test on real devices using:
```bash
npm run dev
# Access from other devices on your network: http://[YOUR_IP]:3000
```

## ♿ Accessibility

- Semantic HTML
- ARIA labels where needed
- Color contrast compliance (WCAG AA)
- Keyboard navigation support
- Focus state indicators

Run accessibility audit:
```bash
# Using Chrome DevTools Lighthouse
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Analyze page load"
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build
npm run build

# Deploy `out` or `.next` folder to your hosting provider
```

## 📊 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Run with: `npm run [script]`

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Change port
npm run dev -- -p 3001
```

### Tailwind CSS Not Applying

```bash
# Rebuild styles
npm run dev

# Or manually rebuild
npx tailwindcss -i ./src/styles/globals.css -o ./src/app/globals.css
```

### TypeScript Errors

```bash
# Type-check without building
npx tsc --noEmit
```

## 📚 Documentation

- **Project Guide:** See `CLAUDE.md` for complete project specifications
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Hook Form:** https://react-hook-form.com/

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes following the project structure
3. Test on multiple devices
4. Commit with clear messages: `git commit -m "Add: description"`
5. Push and create a pull request

## 📋 Checklist Before Deploy

- [ ] All dependencies installed
- [ ] No console errors or warnings
- [ ] Form submissions working
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Images optimized
- [ ] SEO meta tags filled in
- [ ] Accessibility audit passed
- [ ] Build succeeds: `npm run build`
- [ ] Production build tested: `npm start`

## 📞 Support

For detailed project specifications and requirements, see `CLAUDE.md`.

For issues or questions:
- Check existing documentation
- Review component implementations
- Test in development mode: `npm run dev`

## 📄 License

[Add license information if applicable]

---

**Project:** TrulyClean Website
**Last Updated:** February 11, 2026
**Status:** In Development

For the complete project specification and development guide, see **CLAUDE.md**.
