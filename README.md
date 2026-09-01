# Utku Keşanlı — Portfolio

Personal portfolio built with Astro + TypeScript and deployed with GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Architecture

- `src/components/` reusable UI and sections
- `src/data/` content-driven data such as social links and, later, projects/experience/skills
- `src/styles/` global design tokens and shared styling
- `src/pages/` page composition

The portfolio is intentionally data-driven so projects, experience, skills and links can grow without rewriting section components.
