# Esteban — Full-Stack & AI Developer Portfolio

A modern, dark-themed personal portfolio built with **Vite + TypeScript** (no React/Vue — pure vanilla TS).

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── avatar.jpg          ← Replace with your photo
│   ├── cv.pdf              ← Replace with your CV
│   └── projects/           ← Add project screenshots here
│       ├── ai-chat.jpg
│       ├── serverless.jpg
│       └── ...
├── components/             ← One TS + CSS file per section
│   ├── Hero.ts / Hero.css
│   ├── About.ts / About.css
│   ├── Skills.ts / Skills.css
│   ├── Projects.ts / Projects.css
│   ├── Experience.ts / Experience.css
│   ├── AIShowcase.ts / AIShowcase.css
│   ├── Contact.ts / Contact.css
│   └── Footer.ts / Footer.css
├── data/                   ← Edit these to update content
│   ├── skills.ts           ← All tech skills + proficiency
│   ├── projects.ts         ← Project cards + details
│   └── experience.ts       ← Work history timeline
├── styles/                 ← Global design system
│   ├── global.css
│   ├── variables.css       ← Design tokens (colors, spacing)
│   └── animations.css      ← All keyframes + utility classes
├── utils/
│   ├── typewriter.ts       ← Typewriter effect class
│   ├── scrollAnimations.ts ← Intersection Observer animations
│   └── cursor.ts           ← Custom glowing cursor
└── main.ts                 ← App entry point
```

---

## 🖼️ Replacing Images

### Profile Photo
1. Add your photo as `src/assets/avatar.jpg`
2. Recommended: **400×400px square**, JPG/PNG
3. It's used in both the Hero and About sections

### Project Screenshots
1. Add screenshots to `src/assets/projects/`
2. Reference them in `src/data/projects.ts`:
   ```ts
   image: '/assets/projects/my-project.jpg'
   ```
3. Recommended: **800×450px (16:9)**, JPG/PNG

### CV
1. Add your CV as `public/assets/cv.pdf`
2. The Download CV button in the Hero section links to `/assets/cv.pdf`

---

## ✏️ Updating Content

### Add a New Project
Edit `src/data/projects.ts` and add to the `projects` array:

```ts
{
  id: 'my-new-project',
  title: 'My Awesome Project',
  description: 'Short one-liner description',
  longDescription: 'Full description shown on hover/expand',
  image: '/assets/projects/my-project.jpg',
  tags: ['React', 'NestJS', 'AWS'],
  category: 'web', // 'web' | 'ai' | 'api' | 'devops'
  github: 'https://github.com/yourusername/repo',
  demo: 'https://myproject.com',
  featured: false,
  accentColor: '#00f5ff',
}
```

### Add a New Skill
Edit `src/data/skills.ts` and add to the `skills` array:

```ts
{
  name: 'New Tech',
  icon: '🔧',
  level: 4,        // 1–5 dots
  color: '#ff0000', // hover glow color
  category: 'backend', // 'frontend'|'backend'|'ai'|'devops'|'tools'
}
```

### Add Work Experience
Edit `src/data/experience.ts` and add to the `experiences` array:

```ts
{
  id: 'exp-5',
  role: 'Your Role',
  company: 'Company Name',
  location: 'City, Country',
  startDate: 'Jan 2020',
  endDate: 'Dec 2021',
  type: 'full-time',
  highlights: [
    'Achievement or responsibility bullet point',
    'Another bullet point',
  ],
  tags: ['Tech', 'Stack', 'Used'],
  accentColor: '#00f5ff',
}
```

### Update Personal Info
- **Name / greeting:** `src/components/Hero.ts` — change "Esteban"
- **Bio text:** `src/components/About.ts`
- **Contact info:** `src/components/Contact.ts` — update email, WhatsApp, LinkedIn
- **Social links:** `src/components/Footer.ts`
- **Typewriter phrases:** `src/components/Hero.ts` → `initHero()` function

---

## 🎨 Customizing Design

All design tokens live in `src/styles/variables.css`:

```css
--color-cyan:  #00f5ff;   /* Primary accent */
--color-lime:  #aaff00;   /* Secondary accent */
--color-bg:    #0a0a0f;   /* Dark background */
```

Change these to retheme the entire site instantly.

---

## 📦 Tech Stack

- **Vite 5** — Lightning-fast dev server + build
- **TypeScript** — Type-safe vanilla JS
- **Pure CSS** — CSS custom properties, animations, glassmorphism
- **Intersection Observer API** — Scroll animations
- **No runtime dependencies** — Zero framework overhead

---

## 🌐 Deployment

```bash
npm run build
# Outputs to /dist — deploy anywhere static files are served

# Netlify, Vercel, GitHub Pages, AWS S3+CloudFront all work
```

For AWS S3 + CloudFront:
```bash
aws s3 sync dist/ s3://your-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

Built with Vite + TypeScript + ❤️ from Medellín 🇨🇴
