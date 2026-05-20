# collabor·ate

> The modern creator-brand collaboration platform for India's creator economy.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## What is collabor·ate?

**collabor·ate** is a two-sided marketplace connecting Instagram creators with brands for paid collaborations, UGC campaigns, and ambassador deals — without DMs, spreadsheets, or middlemen.

Brands discover verified creators with real metrics pulled directly from Instagram. Creators get inbound brand deals and pitch directly to brands they love.

---

## Features

### For creators
- Connect Instagram via OAuth — metrics auto-pulled (no manual entry)
- Set niche, pricing, and availability
- Receive brand requests or pitch brands directly
- In-app messaging for every collab
- Visibility controls — public, verified brands only, or private
- Trust score, response rate, and profile completion tracking

### For brands
- Discover creators filtered by niche, followers, engagement rate, price, location
- Create and manage campaigns with deliverables and deadlines
- Track applicants, accepted creators, and campaign performance
- In-app messaging — no chasing DMs
- Shortlist creators into saved collections
- Campaign analytics dashboard

### Platform
- Custom cursor with smooth lag effect
- Scroll-triggered reveal animations
- Magnetic buttons on CTAs
- Animated stat counters
- Spring-physics toggles
- Floating hero cards with drift animation
- Fully responsive layout

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/auth/login` | Sign in |
| `/auth/signup` | Create account |
| `/onboarding` | Creator onboarding (4 steps) |
| `/dashboard/influencer` | Creator dashboard overview |
| `/dashboard/influencer/requests` | Incoming brand requests |
| `/dashboard/influencer/analytics` | Instagram analytics + charts |
| `/dashboard/influencer/messages` | In-app messaging |
| `/dashboard/influencer/settings` | Profile + preferences |
| `/dashboard/brand` | Brand dashboard overview |
| `/dashboard/brand/discovery` | Creator discovery + filters |
| `/dashboard/brand/campaigns` | Campaign management |
| `/dashboard/brand/messages` | In-app messaging |

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Charts | Recharts |
| Fonts | Sora (headings) + Inter (body) |
| Deploy | Vercel |

---

## Getting started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/samyatiwarii/collabor-ate.git

# Move into the folder
cd collabor-ate

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project structure

```
collabor-ate/
├── app/                        # Pages (file-based routing)
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout
│   ├── auth/                   # Login + signup
│   ├── onboarding/             # Creator onboarding
│   └── dashboard/
│       ├── influencer/         # Creator dashboard
│       └── brand/              # Brand dashboard
│
├── components/
│   ├── ui/                     # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Toggle.tsx          # Spring-animated toggle
│   │   ├── MetricCard.tsx
│   │   ├── CustomCursor.tsx    # Custom cursor
│   │   ├── Reveal.tsx          # Scroll reveal
│   │   ├── Magnetic.tsx        # Magnetic button
│   │   └── AnimatedCounter.tsx # Count-up animation
│   ├── layout/                 # Navbar, sidebars
│   ├── dashboard/              # Request + campaign cards
│   └── discovery/              # Creator card
│
├── data/
│   └── index.ts                # Mock data (creators, brands, campaigns)
│
├── types/
│   └── index.ts                # TypeScript interfaces
│
├── lib/
│   └── utils.ts                # Helper functions + niche colors
│
└── styles/
    └── globals.css             # Global styles + fonts
```

---

## Roadmap

- [ ] Supabase auth + database integration
- [ ] Instagram OAuth (Meta Basic Display API)
- [ ] Real-time messaging with Supabase Realtime
- [ ] Campaign applications flow
- [ ] Review + rating system post-collab
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Payment integration (Razorpay)
- [ ] Brand verification system
- [ ] Creator analytics synced from Instagram

---

## Contributing

Pull requests are welcome. For major changes please open an issue first.

---
Built with ❤️ for India's creator economy.
