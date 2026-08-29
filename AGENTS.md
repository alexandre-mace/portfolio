# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint

## Architecture

Single-page portfolio site (no additional routes) built with Next.js 16, React 19, TypeScript (strict mode), Tailwind CSS v4, and shadcn/ui (style `base-nova`: Base UI base via `@base-ui/react`). Links use the `LinkButton` export from `components/ui/button.tsx` (no base ships `asChild`; Base UI composes via the `render` prop); toggle selection state styles via `aria-pressed`. Note: lucide-react 1.x removed brand icons — the GitHub icon is a local SVG in `components/icons.tsx`.

### Data Flow

All project and personal data lives in `lib/data.ts` as typed constants (`Project[]` ordered by impact, plus `PersonalInfo`). Each project carries thematic `tags` (climate, dataviz, education, media, design, tooling). The main page (`app/page.tsx`) renders: `Header` → `Introduction` → `ProjectList` (client component with tag filtering) → `ProjectCard` list. There is no backend, API routes, or server actions — this is a purely static site.

### Component Architecture

- **Server Components by default** — only `ProjectList` uses `"use client"` (tag filter state)
- **shadcn/ui components** in `components/ui/` use CVA (class-variance-authority) for variant patterns
- **Custom components** in `components/` are page-specific (Header, Introduction, ProjectCard)
- Use `cn()` from `lib/utils.ts` for Tailwind class merging (clsx + tailwind-merge)

### Styling System

- Tailwind v4 with CSS variables defined in `app/globals.css` using OkLCh color space
- Single light theme only — no dark mode
- Primary color: `#0737FF`; background: `#FAF8F0` (subtle sand, set on `<body>` in layout); cards: `#FDFCF8` with border
- Geist Sans and Geist Mono loaded via `next/font/google` in `app/layout.tsx`

### Adding shadcn/ui Components

Run `npx shadcn@latest add <component>`. Configuration is in `components.json`. Path alias `@/*` maps to the project root.

### Key Configuration

- **Remote images**: `next.config.ts` allows all HTTPS image hostnames
- **SEO**: Full OpenGraph and Twitter card metadata configured in `app/layout.tsx`
- **No tests or CI** configured currently

Conventions de la stack : `docs/next-guidelines.md`, lien vers [dev-standards](https://github.com/alexandre-mace/dev-standards).
