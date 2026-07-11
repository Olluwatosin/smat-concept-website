# SMAT Concept & Innovative Solutions Ltd.

> Mastering the Digital Frontier: Leading Africa in AI & Data-Driven Solutions

## 🚀 Project Overview

The marketing website for SMAT Concept & Innovative Solutions Ltd — a static
Next.js site showcasing the company's services in AI, data analysis, web
development, IoT, smart farming, home automation, and digital infrastructure.

This is a **frontend-only** project. Every route is statically pre-rendered; the
only external service at runtime is [Web3Forms](https://web3forms.com), which
delivers the contact form to email. There is no application backend or database.

## ✨ Core Services

- **AI Workspace Apps** — Custom internal tools with LLM integration and intelligent automation.
- **Data Analysis & Insights** — Raw business data turned into actionable intelligence.
- **Web Development** — Fast, revenue-generating websites and apps built with Next.js.
- **Smart Farming** — IoT-powered precision agriculture for the modern African farm.
- **Digital Infrastructure** — Networking, security, and document digitalization.

## 🛠️ Tech Stack

- **Next.js 15 (App Router)** — statically exported, prerendered pages
- **React 19** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and micro-interactions
- **next/font** — self-hosted Inter + Space Grotesk
- **lucide-react** — icons
- **Web3Forms** — serverless contact-form delivery

## 📁 Project Structure

```
.
├── frontend/                 # The Next.js application (the whole site)
│   ├── src/app/              # App Router routes
│   │   ├── page.tsx          # Each route: server wrapper exporting metadata…
│   │   ├── Client.tsx        # …rendering a "use client" component
│   │   ├── layout.tsx        # Root layout, fonts, global SEO + JSON-LD
│   │   ├── globals.css       # Design system / Tailwind layer
│   │   ├── components/       # Shared components (Footer, TechHeader, widgets)
│   │   └── services/…        # One folder per service page
│   ├── public/               # Static assets (images, sitemap.xml, robots.txt)
│   ├── next.config.ts        # Security headers, image config, lint gating
│   └── vercel.json           # Vercel framework config
├── .github/workflows/        # CI: build + lint, then deploy to Vercel
└── README.md
```

> **SEO pattern:** because the interactive pages are client components, each route
> is split into a server `page.tsx` (which exports `metadata`) that renders a
> co-located `Client.tsx`. This keeps per-page titles, descriptions, canonicals,
> and Open Graph tags while preserving client-side interactivity.

## 🚀 Getting Started

### Prerequisites
- **Node.js 20+**

### Development

```bash
cd frontend
cp .env.example .env.local   # then fill in NEXT_PUBLIC_WEB3FORMS_KEY
npm install
npm run dev                  # http://localhost:3000
```

### Useful scripts (run inside `frontend/`)

```bash
npm run build   # production build (lint + type-check enforced)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## 🔐 Environment Variables

All are `NEXT_PUBLIC_*` (exposed to the browser). See `frontend/.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp contact number |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Contact email |
| `NEXT_PUBLIC_COMPANY_PHONE` | Contact phone |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key (contact form delivery) |

## 🚢 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs the build
and lint, then deploys `frontend/` to **Vercel**. Security headers (CSP,
`X-Frame-Options`, etc.) are defined in `frontend/next.config.ts` so they apply
on any host, not just Vercel.

---

*Built for Africa's digital future by SMAT Concept & Innovative Solutions Ltd.*
