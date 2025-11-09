# devSin8 Portfolio Website

A sleek, minimal dark-mode portfolio website built with Next.js 14+ (App Router) and TailwindCSS.

## Features

- ✨ Dark mode design with warm black background (#0f0e0e)
- 🎨 Monospace typography (IBM Plex Mono)
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive and mobile-first
- ♿ Accessible with semantic HTML and ARIA labels
- 🚀 SEO-optimized with metadata and OpenGraph tags
- ⚡ Fast and optimized for performance
- 🔗 Vercel-ready deployment

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: IBM Plex Mono

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── contact/
│   │   ├── ContactContent.tsx
│   │   └── page.tsx
│   ├── education/
│   │   ├── EducationContent.tsx
│   │   └── page.tsx
│   ├── experience/
│   │   ├── ExperienceContent.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── HomeContent.tsx
│   ├── icon.svg
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Section.tsx
├── public/
│   └── robots.txt
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Color Palette

- **Background**: #0f0e0e (Deep warm black)
- **Text**: #e5dacb (Soft beige)
- **Accent**: #88a995 (Muted teal-green)

## License

MIT

