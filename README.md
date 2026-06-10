# David Esteban Puentes Barrero — Portfolio

**Live:** [estebanbarrero.dev](https://estebanbarrero.dev)

Personal portfolio for a Full-Stack & AI Engineer. Bilingual (Spanish / English), dark-theme-first, statically generated, zero-runtime except for a single Preact island.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 6 (static output) |
| UI Runtime | Preact 10 + `@preact/signals` |
| Language | TypeScript 5 |
| Styling | Plain CSS custom properties |
| i18n | Astro built-in i18n routing (`/es`, `/en`) |
| Sitemap | `@astrojs/sitemap` (es-CO / en-US) |
| Deployment | Vercel |
| Build tool | Vite 5 (via Astro) |

---

## Features

- **Bilingual routing** — `/` redirects to `/es` or `/en` based on `localStorage` → browser language → default `es`
- **Dark / light theme** — persisted in `localStorage`, respects `prefers-color-scheme`
- **Typewriter hero** — phrases driven by `useTypewriter` hook + `appEvents` bus
- **Scroll animations** — Intersection Observer, no JS library
- **Custom cursor** — desktop glow effect via `src/shared/cursor.ts`
- **Contact form** — submits to [formsubmit.co](https://formsubmit.co) (no backend required)
- **Responsive** — mobile-first, CSS-only breakpoints
- **Strict security headers** — `X-Frame-Options`, `CSP`, `Referrer-Policy` via `vercel.json`
- **Auto sitemap** — generated at build time for both locales

---

## Local Development

```bash
npm install
npm run dev      # Astro dev server with HMR → http://localhost:4321
npm run build    # Static build → dist/
npm run preview  # Serve dist/ locally
```

No test runner is configured.

---

## Architecture

```
src/
├── pages/
│   ├── index.astro          ← Redirect to /es or /en
│   ├── es/index.astro       ← Spanish page shell
│   └── en/index.astro       ← English page shell
├── layouts/
│   └── Layout.astro         ← <head>, SEO meta, navbar, loader, CSS imports
├── App.tsx                  ← Preact island root (client:only="preact")
├── components/
│   ├── atoms/               ← Button, Badge, Avatar, LevelDots, TechTag, ...
│   ├── molecules/           ← ProjectCard, SkillCard, ExperienceEntry, ...
│   ├── organisms/           ← Hero, About, Skills, Projects, Experience,
│   │                           AIShowcase, Contact, Footer (TSX only, no .css)
│   ├── templates/           ← PageLayout, SectionLayout
│   └── pages/               ← HomePage (composes all 8 organisms)
├── hooks/                   ← useAppInit, useTypewriter, useCarousel,
│                               useTerminalReveal, useContactForm
├── services/                ← LanguageService, ThemeService,
│                               CarouselService, ContactService
├── domain/
│   └── index.ts             ← All TypeScript interfaces (Project, Skill,
│                               Experience, Stat, Lang, Theme)
├── shared/                  ← EventBus, cursor, scrollAnimations, icons, color
├── data/                    ← Typed content arrays (edit to update content)
└── styles/                  ← All CSS — global.css, variables.css,
                                animations.css, molecules/, organisms/
```

**Key architectural rules:**
- CSS lives exclusively in `src/styles/` — never co-located with components
- Preact signals (`langSignal`, `t`) are singletons — reactive across the island
- Lang switch = full page navigation to `/{lang}`, not a signal swap
- `appEvents` (`EventBus`) bridges Astro-rendered navbar/loader ↔ Preact island for `theme:changed`, `lang:changed`, `typewriter:phrases`
- Content updates → edit `src/data/` only; no component changes needed

---

## Updating Content

All content is driven by typed data files. No component edits needed for content changes.

### Projects — `src/data/projects.ts`

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: 'Short EN description',
  descriptionEs: 'Descripción corta en español',
  longDescription: 'Full detail shown in expanded card',
  image: '/my-project.webp',           // file in public/
  tags: ['React', 'FastAPI', 'AWS'],
  category: 'web',                     // 'web' | 'ai' | 'api' | 'devops'
  github: 'https://github.com/...',
  demo: 'https://...',
  featured: true,
  accentColor: '#00f5ff',
  period: 'Jan 2025 – Apr 2025',
}
```

### Skills — `src/data/skills.ts`

```ts
{
  name: 'Redis',
  icon: 'database',        // Lucide icon name used via src/shared/icons.ts
  level: 4,                // 1–5 (rendered as filled dots)
  color: '#dc382d',
  category: 'backend',     // 'frontend'|'backend'|'ai'|'devops'|'tools'|'soft'
}
```

### Experience — `src/data/experience.ts`

```ts
{
  id: 'exp-company',
  role: 'Senior Engineer',
  company: 'Acme Corp',
  location: 'Remote',
  startDate: 'Jan 2024',
  endDate: 'Present',
  type: 'full-time',       // 'full-time'|'freelance'|'contract'|'internship'
  highlights: ['EN bullet 1', 'EN bullet 2'],
  highlightsEs: ['ES bullet 1', 'ES bullet 2'],
  tags: ['React', 'AWS'],
  accentColor: '#00f5ff',
}
```

### Other content locations

| What | Where |
|------|-------|
| i18n strings (all UI text) | `src/data/translations.ts` |
| Shared constants (email, URLs, stats) | `src/data/constants.ts` |
| Hero typewriter phrases | `src/hooks/useTypewriter.ts` |
| Bio text | `src/components/organisms/About.tsx` |
| Social links | `src/components/organisms/Footer.tsx` |
| SEO meta / Open Graph | `src/layouts/Layout.astro` |

### Assets

| Asset | Path |
|-------|------|
| Profile photo | `public/avatar.webp` |
| CV / Resume | `public/assets/cv.pdf` |
| Project screenshots | `public/` (reference as `/filename.webp` in `projects.ts`) |

---

## Design Tokens

All visual variables are in `src/styles/variables.css`. Retheme the entire site by editing values there:

```css
--color-cyan:    #00f5ff;   /* Primary accent */
--color-lime:    #aaff00;   /* Secondary accent */
--color-bg:      #0a0a0f;   /* Dark background */
--color-surface: #111118;   /* Card / surface */
```

---

## Deployment

The site deploys automatically to Vercel on push to `main`. Static output is in `dist/` after `npm run build`.

Security headers are configured in `vercel.json`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` (strict — allows only formsubmit.co for `connect-src`)
- `Permissions-Policy` — camera, microphone, geolocation disabled

For manual deploy to any static host:

```bash
npm run build
# Upload dist/ to your host (S3, Netlify, GitHub Pages, etc.)
```

---

## Projects Showcased

| Project | Stack | Status |
|---------|-------|--------|
| [Productos Autóctonos](https://www.productosautoctonos.shop) | Astro, React, Django REST, PostgreSQL, AWS EC2, Docker | Live |
| [Coffee & Chill](https://coffee-and-chill-frontend.vercel.app/login) | React, FastAPI, PostgreSQL, Redis, SSE, Docker | Live |
| SCADA Alarm System | FastAPI, Pandas, SQLAlchemy, React, Tremor, Docker | Private |
| Pandora — Programa de Fuego | Express, PostgreSQL, Redis, Apple/Google Wallet, Docker | In progress |
