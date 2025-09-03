# Serenity Business Project — Portfolio Website

A modern, responsive, multi‑page portfolio website for **Serenity Business Project**. This project presents the company’s vision, services, and initiatives across Education, Technology, Our Shop, Electronics, Video Game Center, Engineering Service, Agricultural Project, and Hospitality.

---

## Table of Contents

* [Overview](#overview)
* [Key Requirements](#key-requirements)
* [Live Demo & Design](#live-demo--design)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Routing](#routing)
* [Content & Page Specs](#content--page-specs)
* [Global UI/UX Guidelines](#global-uiux-guidelines)
* [Accessibility](#accessibility)
* [SEO & Social Sharing](#seo--social-sharing)
* [Deployment](#deployment)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Overview

This repository contains the source for a **full, production‑ready website** with:

* A **Home** page introducing the company and highlighting each major section.
* A **navbar** with dedicated pages for: `Education`, `Technology`, `Our Shop`, `Electronics`, `Video Game Center`, `Engineering Service`, `Agricultural Project`, and `Hospitality`.
* An **About Us** section, and a global **Footer**.
* Clean, consistent design with a **positive UI**, **great UX**, and **full responsiveness**.

> CEO: **RUHARA MIHIGO Shammy**. Partners for Engineering Service: **BYIRINGIRO Nervise** and **Tom**.

---

## Key Requirements

* Build a **multi‑page** responsive site (each navbar item links to its own page).
* Maintain **harmonious styling** and consistent components across pages.
* Highlight company initiatives, services, and social impact.
* Provide curated **Education** links to reputable online platforms.
* Include vision statements for **Our Shop**, **Electronics School & Workshop**, **Video Game Center**, **Engineering Service**, **Agricultural Project**, and **Hospitality** (guest house + restaurant + pool).

---

## Live Demo & Design

* **Live URL**: *Add when deployed*
* **Design Source (optional)**: *Link to Figma or design tool if used*

---

## Tech Stack

* **Frontend**: React + TypeScript, Vite
* **Styling**: Tailwind CSS
* **UI Kit**: shadcn/ui (Radix UI under the hood)
* **Icons**: lucide-react
* **Animation**: Framer Motion
* **Routing**: React Router
* **Forms/Validation (optional)**: React Hook Form + Zod
* **Assets**: CSS variables + Tailwind theme for consistent look & feel

> You can swap React/Vite for Next.js if you prefer SSR/SSG; routing specs remain similar.

---

## Project Structure

```
serenity-business-project/
├─ src/
│  ├─ components/
│  │  ├─ common/            # Navbar, Footer, SectionHeader, CTA, Cards, Logo, etc.
│  │  ├─ layout/            # Page layouts (DefaultLayout)
│  │  └─ ui/                # shadcn/ui wrappers
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Education.tsx
│  │  ├─ Technology.tsx
│  │  ├─ OurShop.tsx
│  │  ├─ Electronics.tsx
│  │  ├─ VideoGameCenter.tsx
│  │  ├─ EngineeringService.tsx
│  │  ├─ AgriculturalProject.tsx
│  │  └─ Hospitality.tsx
│  ├─ routes/
│  │  └─ router.tsx
│  ├─ styles/
│  │  ├─ globals.css
│  │  └─ theme.css          # CSS variables for colors, radius, spacing
│  ├─ lib/                  # utils (seo, analytics, constants)
│  ├─ assets/               # images, icons, illustrations
│  ├─ data/                 # JSON/YAML content for services, team, FAQ, etc.
│  ├─ App.tsx
│  └─ main.tsx
├─ public/
│  ├─ favicon.ico
│  └─ og-image.png
├─ index.html
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## Getting Started

### Prerequisites

* Node.js 18+ and pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Start Dev Server

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## Available Scripts

* `dev` — Start Vite dev server
* `build` — Build production bundle
* `preview` — Preview production build locally
* `lint` — Lint codebase (configure ESLint/Prettier as desired)
* `test` — Run unit tests (if added)

---

## Routing

Each navbar item routes to a dedicated page. Example React Router setup (`src/routes/router.tsx`):

```tsx
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import Education from '../pages/Education'
import Technology from '../pages/Technology'
import OurShop from '../pages/OurShop'
import Electronics from '../pages/Electronics'
import VideoGameCenter from '../pages/VideoGameCenter'
import EngineeringService from '../pages/EngineeringService'
import AgriculturalProject from '../pages/AgriculturalProject'
import Hospitality from '../pages/Hospitality'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'education', element: <Education /> },
      { path: 'technology', element: <Technology /> },
      { path: 'our-shop', element: <OurShop /> },
      { path: 'electronics', element: <Electronics /> },
      { path: 'video-game-center', element: <VideoGameCenter /> },
      { path: 'engineering-service', element: <EngineeringService /> },
      { path: 'agricultural-project', element: <AgriculturalProject /> },
      { path: 'hospitality', element: <Hospitality /> },
    ],
  },
])
```

---

## Content & Page Specs

Below are the acceptance criteria and content outlines for each page. Use the **SectionHeader** component and consistent spacing/typography across pages. All pages should include a **hero**, key copy, imagery/illustrations, and a clear **CTA**.

### 1) Home

**Goals**: Introduce the company, show quick links to all sections, and build trust.

* Hero: Company name, tagline, brief mission.
* Section grid: Cards linking to Education, Technology, Our Shop, Electronics, Video Game Center, Engineering Service, Agricultural Project, Hospitality.
* About preview: Short paragraph + “Read more” link to About.
* Testimonials/Impact (optional).
* Global Footer with contact info and social links.

### 2) About Us

* Story of **Serenity Business Project** and its social impact.
* CEO: **RUHARA MIHIGO Shammy** (background, values).
* Partners: **BYIRINGIRO Nervise**, **Tom**.
* Vision & Mission statements.
* Contact and organization details.

### 3) Education

Provide curated links (open in new tabs) to online educational tools/platforms. Include the given links and add other reputable platforms.

**Required links:**

* [https://studyfetch.com/](https://studyfetch.com/)
* [http://cymath.com/](http://cymath.com/)
* [https://www.loecsen.com/](https://www.loecsen.com/)

**Suggested additional platforms:**

* [https://www.khanacademy.org/](https://www.khanacademy.org/)
* [https://www.coursera.org/](https://www.coursera.org/)
* [https://www.edx.org/](https://www.edx.org/)
* [https://www.freecodecamp.org/](https://www.freecodecamp.org/)
* [https://www.duolingo.com/](https://www.duolingo.com/)
* [https://www.codecademy.com/](https://www.codecademy.com/)
* [https://www.udacity.com/](https://www.udacity.com/)

> Group links by category (Math, Languages, Programming, General Learning) and provide short one‑line descriptions for each.

### 4) Technology

Because the CEO holds certificates in **Graphic Design** and **Web Development**, this page offers services and knowledge sharing.

**Services:**

* Graphic Design
* Web Development
* Mobile App Development
* Software Development

For each service, include: a short description, deliverables, sample work (images), pricing tiers (optional), and a “Request Quote” CTA.

### 5) Our Shop

Future vision: Start with **800,000** initial capital; employ **2 youth**.

Include:

* Vision statement and ethical employment goals.
* Sample product categories (placeholders now).
* Hiring commitment: two youth employees at launch.
* CTA: “Partner with us” / “Notify me when live”.

### 6) Electronics

Planned initiatives by CEO **RUHARA MIHIGO Shammy**:

* **School** and **Workshop** for electronics.
* **Phone Repair Shop** (lessons + services).
* Acknowledgements: teacher/mentor (phone repair) and friend (internship).

Include program outlines, service menus, and enrollment/contact forms.

### 7) Video Game Center

Social initiative for street children: free gameplay contingent on school participation and cleanliness.

Include:

* Purpose narrative and community rules.
* Quiz‑before‑play mechanic (ask simple school questions).
* Safety & cleanliness guidelines.
* Volunteer/Donate CTAs.

### 8) Engineering Service

With partners **BYIRINGIRO Nervise** and **Tom**, offer low‑cost housing solutions tailored to financial status.

Include:

* Service overview (design, build, materials sourcing, project management).
* Sliding‑scale pricing philosophy.
* Project gallery (placeholders).
* Inquiry form.

### 9) Agricultural Project

Products envisioned: **milk, meat, banana, honey**.

Include:

* Farm overview and sustainable practices.
* Product showcase.
* Partnerships (co‑ops, local markets).
* Contact for B2B orders.

### 10) Hospitality

Long‑term goal: Guest house + restaurant (two‑in‑one) with pool and recreation.

Include:

* Concept renders/sketches (placeholder images ok).
* Amenities list and target audience.
* Booking interest form / newsletter signup.

---

## Global UI/UX Guidelines

* **Branding**: Calming, trustworthy palette ("Serenity"). Use Tailwind theme tokens.
* **Typography**: Clear hierarchy (e.g., display/2xl for headlines, base/lg for body). Line‑length 60–75ch.
* **Spacing**: Generous white space. Grid layouts, 12‑column responsive.
* **Components**: Cards, Badges, Buttons, Tabs from shadcn/ui. Rounded‑2xl, soft shadows.
* **Motion**: Subtle Framer Motion entrance/focus transitions. Respect `prefers-reduced-motion`.
* **Images**: Optimized, lazy‑loaded, with descriptive alt text.
* **Navigation**: Sticky header, active states, keyboard accessible. Footer with secondary nav and contact.

---

## Accessibility

* Semantic HTML and ARIA labels for interactive elements.
* Color contrast AA or higher.
* Keyboard navigation (Tab/Shift+Tab) and visible focus states.
* Form labels, error messages, and `aria-live` regions for validation.

---

## SEO & Social Sharing

* Unique `<title>` and meta descriptions per page.
* Open Graph & Twitter Card meta tags.
* Human‑readable URLs (e.g., `/video-game-center`).
* Sitemap and robots.txt.

---

## Deployment

Recommended: **Vercel** or **Netlify**.

1. Push repository to GitHub.
2. Import the repo into Vercel/Netlify.
3. Set build command: `pnpm build`; output dir: `dist` (Vite default).
4. Configure a custom domain when ready.

---

## Roadmap

* [ ] Replace placeholders with production content and images.
* [ ] Connect inquiry forms to email/service (e.g., Formspree, Resend).
* [ ] Add blog/news updates.
* [ ] Add i18n (English + Kinyarwanda, optional).
* [ ] Add analytics and basic A/B testing.
* [ ] Integrate simple CMS (Contentlayer/Markdown or Headless CMS like Strapi/Sanity).

---

## Contributing

Pull requests are welcome! Please open an issue to discuss major changes first. Ensure code is formatted and accessible.

---

## License

MIT © Serenity Business Project

---

## Contact

* **Organization**: Serenity Business Project
* **Primary Contact**: RUHARA MIHIGO Shammy
* **General Inquiries**: *Add email/phone*
* **Location**: Rwanda (planned operations)

---

### Appendix: Suggested Reusable Components

* `Navbar` with dropdown or mega menu
* `Footer` with contact + quick links
* `SectionHeader` (title, eyebrow, description)
* `Card` variants (service, link, product)
* `Testimonial` and `ImpactStat`
* `CTA` (primary/secondary)
* `Form` primitives (Input, Textarea, Select, Button)

> This README doubles as a **project blueprint**. Follow it to scaffold the codebase, then iterate designs/content with the team.
