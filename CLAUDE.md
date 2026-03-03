# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog site (lorencouse.com) built with Next.js 16, React 19, TypeScript, and Tailwind CSS 3. Uses the **Pages Router** (not App Router). Statically exported (`output: 'export'` in next.config.js) and deployed to Cloudflare Pages.

## Commands

- `bun dev` — Start dev server
- `bun run build` — Static build (runs `next build` then `next-sitemap` via postbuild)
- `bun lint` — ESLint
- `bun lint:fix` — ESLint autofix + Prettier format
- `bun lint:strict` — ESLint with zero warnings allowed
- `bun typecheck` — TypeScript check (`tsc --noEmit`)
- `bun format` — Prettier format all files
- `bun cy` — Cypress E2E (interactive)
- `bun cy:headless` — Cypress E2E (headless)
- `bun deploy` — Build + deploy to Cloudflare Pages via wrangler

## Architecture

### Path Alias
`@/*` maps to `src/*` (configured in tsconfig.json).

### Content System
MDX files live in `src/contents/` with three content types: `projects` and `library` (organized by topic subdirectories). Content is processed server-side via `mdx-bundler` in `src/lib/mdx.server.ts`. Frontmatter is parsed with `gray-matter`. Client-side sorting/filtering lives in `src/lib/mdx.client.ts`.

### Pages & Routing
Standard Next.js Pages Router in `src/pages/`. Dynamic routes use catch-all `[...slug].tsx` for project detail pages. All pages use `getStaticProps`/`getStaticPaths` for static generation.

### Component Organization
- `src/components/layout/` — Header, Footer, Layout wrappers
- `src/components/content/` — MDX rendering components (Pre, SplitImage, etc.)
- `src/components/links/` — CustomLink, ButtonLink, SocialLinks
- `src/components/blog/` — BlogCard, TimeLineBlock, Quiz
- `src/components/images/` — CustomImg, NextImage wrappers

### Data Fetching
- Server: File system reads via mdx-bundler for static content
- Client: `@tanstack/react-query` for API data (content meta, Spotify, GitHub)
- Content views/likes tracked via Prisma + database, exposed through hooks in `src/hooks/useContentMeta.tsx`

### Feature Flags
Controlled via `NEXT_PUBLIC_FLAG_*` environment variables in `src/constants/env.ts`. Features: comment, content_meta, spotify, newsletter, say_hello, feedback. All default to enabled in production.

### Styling
Tailwind CSS with `clsxm` utility (`src/lib/clsxm.ts`) — a wrapper combining `clsx` + `tailwind-merge`. Dark mode via `next-themes` with class strategy. Custom primary color uses CSS variables.

## Code Style

### Import Order (enforced by ESLint)
1. External libraries & side effects
2. CSS files
3. `@/lib`, `@/hooks`
4. `@/data`
5. `@/components`
6. Other `@/` imports
7. Relative imports
8. `@/types`

### Commit Messages
Commitlint enforces conventional commits. Types: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `ci`, `test`, `perf`, `revert`, `vercel`. Scopes: `blog`, `proj`, `lib`, `package`.

### Pre-commit
lint-staged runs ESLint (zero warnings) and Prettier on staged `src/**/*.{js,jsx,ts,tsx}` files.
