# GooglePeak - Digital Law & Strategic Branding Agency

A premium, dark-mode, minimalist portal for a Digital Law & Strategic Branding Agency built with Next.js 16 and Cosmic CMS. Features two distinct wings: Legal Tech (Qanoon Group) and Digital Estate (domain management, SEO).

## Features
- 🌙 Premium dark mode aesthetic with gold & electric blue accents
- 🏛️ Service showcase with Legal Tech & Digital Estate wings
- 👥 Leadership team section with professional portraits
- 📂 Case studies with detailed challenge/solution/outcome
- ⭐ Client testimonials with 5-star ratings
- 💬 Floating WhatsApp CTA button
- 📱 Mobile-first responsive design
- ⚡ Optimized for performance (100% PageSpeed target)
- 🎨 Glassmorphism service cards
- 🔍 SEO-optimized with proper meta tags

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e6f8f27945ab7cc4f1312f&clone_repository=69e6fa537945ab7cc4f13151)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials."

### Code Generation Prompt

> "Build a high-end, minimalist, and ultra-fast Digital Law & Strategic Branding Agency portal named GooglePeak.com. The site must feature two distinct wings: The Legal Tech Wing showcasing 40-year legacy in Corporate Law, Tax Strategy, and Family Law under the Qanoon Group banner. The Digital Estate Wing focusing on 'Rank & Flip' domain management, SEO Content, and Headless Static Web Architecture. Design Vibe: Modern, 'Dark Mode' aesthetics with gold or electric blue accents, professional typography, and zero clutter. Key Functionalities: Service Showcase for international clients, high-conversion lead generation forms for legal consultations, 'Partner with Us' section for entrepreneurs. Target Audience: International business owners, overseas Pakistanis, and digital real estate investors."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun (or Node.js 18+)
- Cosmic account with configured bucket

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .depth(1)
```

## Cosmic CMS Integration
Uses object types: services, team-members, case-studies, testimonials. See the [Cosmic docs](https://www.cosmicjs.com/docs) for more.

## Deployment Options
Deploy to Vercel or Netlify. Configure environment variables in your hosting dashboard.

<!-- README_END -->