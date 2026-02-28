# OuiLockers Paris — Luggage Storage Website

> **Secure 24/7 luggage storage in the heart of Paris Le Marais**  
> Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui

---

## 🏢 Business Information

| Field | Details |
|-------|---------|
| **Business Name** | OuiLockers Paris (by Hôtel Herse d'Or) |
| **Address** | 20 Rue Saint-Antoine, 75004 Paris, France |
| **Neighbourhood** | Le Marais — near Place de la Bastille |
| **Phone** | +33 1 85 73 72 47 |
| **Email** | ouilockers@hotel-herse-dor.com |
| **Website** | https://www.ouilockers.com |
| **Hours** | 24/7 — Open every day, all day |
| **Price** | €30/day per locker (up to 4 bags per locker) |
| **Booking URL** | https://ouilockers.bestwond.com/setDate/?device_id=2100018368 |
| **WhatsApp** | https://wa.me/33185737247 |
| **3CX Online Call** | https://1280.3cx.cloud/callus/#hoteldelahersedor |

### Location Coordinates
- **Latitude:** 48.8534
- **Longitude:** 2.3567

---

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) (package manager & runtime)
- Node.js 20+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <project-directory>

# Install dependencies
bun install

# Set up the database
bun db:push

# Start development server
bun dev
```

The app will be available at **http://localhost:3000**

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.x | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **shadcn/ui** | Latest | Accessible component library (Radix UI) |
| **Framer Motion** | 12.x | Animations and transitions |
| **Prisma** | 6.x | Database ORM |
| **SQLite** | — | Local database (via Prisma) |
| **Lucide React** | 0.5x | Icon library |
| **Bun** | Latest | Package manager & runtime |

### Key Libraries

| Library | Purpose |
|---------|---------|
| `framer-motion` | Page animations, lightbox, widget transitions |
| `@radix-ui/*` | Accessible UI primitives (accordion, dialog, etc.) |
| `next/image` | Optimized image loading |
| `next/font` | Google Fonts (Manrope + Inter) |
| `react-hook-form` + `zod` | Form validation |
| `zustand` | Client-side state management |
| `@tanstack/react-query` | Server state management |

---

## 🏗 Architecture

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout + SEO metadata + JSON-LD
│   ├── page.tsx                # Home page (assembles all sections)
│   ├── globals.css             # Tailwind imports + CSS variables
│   ├── sitemap.ts              # Dynamic sitemap (/sitemap.xml)
│   ├── robots.ts               # Robots rules (/robots.txt)
│   ├── favicon.ico             # Site icon
│   ├── help/
│   │   └── page.tsx            # Help/FAQ page
│   └── api/
│       ├── route.ts            # General API route
│       └── generate-image/
│           └── route.ts        # Image generation API
│
├── components/
│   ├── Navigation.tsx          # Top navigation bar with language switcher
│   ├── PromoBanner.tsx         # Dismissible promo code banner (PARIS10)
│   ├── ContactWidget.tsx       # Combined 3CX call + WhatsApp floating widget
│   ├── LiveAvailability.tsx    # Real-time locker availability indicator
│   ├── BackToTop.tsx           # Scroll-to-top button
│   ├── CookieConsent.tsx       # GDPR cookie consent banner
│   ├── ShareButtons.tsx        # Social sharing buttons
│   │
│   ├── sections/               # Page sections (used in page.tsx)
│   │   ├── Hero.tsx            # Hero section with booking CTA
│   │   ├── TrustBar.tsx        # Trust indicators bar
│   │   ├── Features.tsx        # Key features grid
│   │   ├── HowItWorks.tsx      # Step-by-step process
│   │   ├── Sizes.tsx           # Locker size options
│   │   ├── Locations.tsx       # Map + photo gallery with lightbox
│   │   ├── Testimonials.tsx    # Customer reviews (6 nationalities)
│   │   ├── Newsletter.tsx      # Email capture section
│   │   ├── FAQ.tsx             # Accordion FAQ + JSON-LD schema
│   │   ├── CTA.tsx             # Final call-to-action
│   │   └── Footer.tsx          # Site footer
│   │
│   └── ui/                     # shadcn/ui components (auto-generated)
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── ... (40+ components)
│
├── contexts/
│   └── LanguageContext.tsx     # Multi-language context (EN/FR/ES)
│
├── hooks/
│   ├── use-mobile.ts           # Mobile breakpoint hook
│   └── use-toast.ts            # Toast notification hook
│
└── lib/
    ├── db.ts                   # Prisma database client
    ├── translations.ts         # All UI translations (EN/FR/ES)
    └── utils.ts                # Utility functions (cn, etc.)
```

### Key Design Patterns

#### 1. Multi-Language Support
All UI text is managed through `LanguageContext` + `translations.ts`:

```tsx
// In any component:
import { useLanguage } from '@/contexts/LanguageContext';

const { t, language, setLanguage } = useLanguage();
// t('hero.title') → returns string in current language
```

Supported languages: **English (EN)**, **French (FR)**, **Spanish (ES)**

#### 2. Server vs Client Components
- All sections are **Client Components** (`'use client'`) due to animations and language context
- `layout.tsx` is a **Server Component** (metadata, JSON-LD)
- API routes in `src/app/api/` are **Server-side**

#### 3. Styling Conventions
```tsx
// Brand colors
bg-emerald-600    // Primary green
bg-slate-900      // Dark text/backgrounds
text-white        // On dark backgrounds

// Container pattern
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### 4. Animation Pattern (Framer Motion)
```tsx
// Scroll-triggered animation
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

---

## 📄 Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Main landing page |
| `/help` | `src/app/help/page.tsx` | Help & FAQ page |
| `/sitemap.xml` | `src/app/sitemap.ts` | Auto-generated sitemap |
| `/robots.txt` | `src/app/robots.ts` | Search engine rules |
| `/api` | `src/app/api/route.ts` | General API endpoint |
| `/api/generate-image` | `src/app/api/generate-image/route.ts` | Image generation |

---

## 🌐 SEO & Structured Data

The site includes comprehensive SEO setup:

### Metadata (`layout.tsx`)
- Title, description, keywords
- Open Graph (Facebook/LinkedIn sharing)
- Twitter Card
- Canonical URL
- Robots directives

### JSON-LD Schemas
1. **LocalBusiness** (in `layout.tsx`) — Business info, address, hours, rating
2. **FAQPage** (in `FAQ.tsx`) — FAQ rich results in Google Search

### Sitemap & Robots
- `/sitemap.xml` — Lists all public pages
- `/robots.txt` — Allows all crawlers, blocks `/api/`

---

## 📱 Contact Widget

The `ContactWidget` component provides a unified floating contact button:

- **Click** the emerald phone button to expand options
- **3CX Online Call** — Opens the 3CX web call interface (VoIP, no phone needed)
- **WhatsApp Chat** — Opens WhatsApp with a pre-filled message
- Smooth Framer Motion animations
- Pulsing indicator shows "online" status

**3CX URL:** `https://1280.3cx.cloud/callus/#hoteldelahersedor`  
**WhatsApp Number:** `+33 1 85 73 72 47`

---

## 🗄 Database

The project uses **Prisma** with **SQLite** for local data persistence.

### Schema Location
`prisma/schema.prisma`

### Database Commands

```bash
bun db:push        # Push schema changes to database
bun db:generate    # Generate Prisma client
bun db:migrate     # Create and run migrations
bun db:reset       # Reset database (⚠️ deletes all data)
```

### Database Client
```tsx
// src/lib/db.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

---

## 🔧 Development

### Available Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server on port 3000 |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |
| `bun typecheck` | Run TypeScript type checking |
| `bun db:push` | Push Prisma schema to database |
| `bun db:generate` | Regenerate Prisma client |

### Before Committing

Always run these checks before committing:

```bash
bun typecheck && bun lint
```

Then commit and push:

```bash
git add -A
git commit -m "feat: your descriptive message"
git push
```

### Adding a New Page

Create `src/app/[route]/page.tsx`:

```tsx
'use client';

export default function NewPage() {
  return (
    <div className="min-h-screen">
      <h1>New Page</h1>
    </div>
  );
}
```

### Adding a New Section

1. Create `src/components/sections/MySection.tsx`
2. Import and add to `src/app/page.tsx`
3. Add translations to `src/lib/translations.ts` if needed

### Adding Translations

In `src/lib/translations.ts`:

```ts
export const translations = {
  en: {
    mySection: {
      title: "My Title",
      description: "My description",
    }
  },
  fr: {
    mySection: {
      title: "Mon Titre",
      description: "Ma description",
    }
  },
  es: {
    mySection: {
      title: "Mi Título",
      description: "Mi descripción",
    }
  }
};
```

---

## 🚢 Deployment

### Production Build

```bash
bun build
```

This creates:
- `.next/standalone/` — Self-contained server
- `.next/static/` — Static assets (copied automatically)
- `public/` — Public assets (copied automatically)

### Start Production Server

```bash
bun start
```

Runs the standalone server at the configured port.

### Environment Variables

Create a `.env.local` file for local development:

```env
# Database (SQLite - no URL needed for local)
DATABASE_URL="file:./dev.db"

# Add other environment variables as needed
```

For production, set environment variables in your hosting platform.

### Recommended Hosting Platforms

| Platform | Notes |
|----------|-------|
| **Vercel** | Best for Next.js, zero-config deployment |
| **Railway** | Good for full-stack with database |
| **Fly.io** | Docker-based, good for custom setups |
| **VPS (Ubuntu)** | Full control, use PM2 or systemd |

### Vercel Deployment

```bash
# Install Vercel CLI
bun add -g vercel

# Deploy
vercel --prod
```

---

## 🖼 Images

All images are stored in `public/images/`. Key images:

| File | Usage |
|------|-------|
| `photo-facade.jpg` | Hero background, OG image |
| `logo-officiel.png` | Navigation logo, favicon |
| `photo-*.jpg` | Gallery photos in Locations section |

Images use Next.js `<Image>` component with `fill` + `sizes` props for optimization.

---

## 🎨 Design System

### Colors (Tailwind)

| Token | Value | Usage |
|-------|-------|-------|
| `emerald-600` | `#059669` | Primary brand color |
| `emerald-700` | `#047857` | Hover states |
| `slate-900` | `#0f172a` | Dark text |
| `slate-600` | `#475569` | Secondary text |
| `white` | `#ffffff` | Backgrounds, text on dark |

### Typography

| Font | Variable | Usage |
|------|----------|-------|
| **Manrope** | `--font-manrope` | Headings |
| **Inter** | `--font-inter` | Body text |

### Spacing & Layout

- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-16 md:py-24`
- Container padding: `px-4 sm:px-6 lg:px-8`

---

## 🔍 Key Features

| Feature | Component | Description |
|---------|-----------|-------------|
| **Promo Banner** | `PromoBanner.tsx` | Dismissible top banner with `PARIS10` code |
| **Live Availability** | `LiveAvailability.tsx` | Real-time locker count in Hero |
| **Photo Lightbox** | `Locations.tsx` | Full-screen gallery with prev/next |
| **Contact Widget** | `ContactWidget.tsx` | Floating 3CX + WhatsApp button |
| **Multi-language** | `LanguageContext.tsx` | EN/FR/ES language switcher |
| **Cookie Consent** | `CookieConsent.tsx` | GDPR-compliant cookie banner |
| **Newsletter** | `Newsletter.tsx` | Email capture with success state |
| **Back to Top** | `BackToTop.tsx` | Scroll-to-top button |
| **Share Buttons** | `ShareButtons.tsx` | Social media sharing |

---

## 📊 Performance

- **Server Components** by default (reduces client JS)
- **Next.js Image** optimization (WebP, lazy loading, blur placeholder)
- **Google Fonts** with `display: swap` (no layout shift)
- **Tailwind CSS** purges unused styles in production
- **Framer Motion** `whileInView` with `once: true` (animates once)

---

## 🐛 Troubleshooting

### TypeScript Errors
```bash
bun typecheck
```

### Lint Errors
```bash
bun lint
```

### Database Issues
```bash
# Reset and recreate database
bun db:reset
bun db:push
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
bun build
```

### Dependency Issues
```bash
# Reinstall all dependencies
rm -rf node_modules bun.lock
bun install
```

---

## 📝 License

Private — All rights reserved. OuiLockers by Hôtel Herse d'Or, Paris.

---

*Built with ❤️ for OuiLockers Paris — Explore Paris hands-free!*
