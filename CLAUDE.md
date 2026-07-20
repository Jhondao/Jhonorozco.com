# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio/marketing site for Jhon Orozco (jhonorozco.com), built with Next.js (App Router), React 18, and Tailwind CSS. Content is in Spanish. It's a single-page marketing site (`/`) plus an about-me page (`/sobre-mi`), with no database — all content is static data.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint (extends next/core-web-vitals)
```

There is no test suite configured in this repo.

## Architecture

**Content-as-data pattern**: nearly all page content (nav items, benefits, services, portfolio projects, testimonials, FAQ, experience, education, skills) lives in [data.tsx](data.tsx) as exported arrays (`dataBeneficios`, `dataServices`, `dataPortfolio`, `dataTestimonials`, `dataProcess`, `dataFaq`, `dataExperience`, `dataEducacion`, `dataSoftSkills`, `dataProyects`, etc.). Components import from `@/data` and `.map()` over these arrays rather than hardcoding markup. When asked to change site copy, look in `data.tsx` first — most "content edits" don't touch component files at all.

**Two routes, both composed the same way**: [app/page.tsx](app/page.tsx) (home) and [app/sobre-mi/page.tsx](app/sobre-mi/page.tsx) (about me) are thin compositions of section components from `components/`, each wrapped by their own navbar/footer. There's no shared layout between sections beyond `app/layout.tsx` (fonts, theme provider, GA script tags).

**Component organization**:
- `components/*.tsx` — top-level home page sections (hero, services, portfolio, testimonials, faq, contact, footer, navbar, timeline-process, beneficios).
- `components/sobre-mi/*.tsx` — sections specific to the about-me page.
- `components/ui/*.tsx` — shadcn/ui primitives (button, input, form, carousel, dropdown-menu, etc.), configured via [components.json](components.json) (style: default, baseColor: slate, no prefix). Use `npx shadcn add <component>` conventions if adding new primitives; don't hand-roll what shadcn already provides.
- `components/shared/` — small generic layout helpers (`container.tsx`, `title.tsx`) reused across sections.

**Theming**: dark mode via `next-themes` (`ThemeProvider` in `app/layout.tsx`, toggled by `components/toggle-theme.tsx`), `darkMode: ["class"]` in Tailwind. Colors are defined as HSL CSS variables in `app/globals.css` and mapped in [tailwind.config.ts](tailwind.config.ts) (`border`, `background`, `primary`, etc.) — prefer these semantic tokens over raw Tailwind colors when they exist, though many sections already use raw palette classes (e.g. `green-500`, `slate-800`) directly.

**Contact form flow**: `components/contact-form.tsx` (client component, react-hook-form + zod) posts JSON directly from the browser to the [Web3Forms](https://web3forms.com) API (`https://api.web3forms.com/submit`) — there is no server-side route involved, by design, since the site deploys to static GitHub Pages hosting. The access key is read from `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (must be `NEXT_PUBLIC_`-prefixed since it's used client-side; Web3Forms access keys are meant to be public, not secret). A hidden `botcheck` checkbox acts as a honeypot for spam. There used to be a Resend-based `app/api/send` Route Handler — it was removed because Next.js Route Handlers are server-side and cannot run on a static export/GitHub Pages deploy.

**Deployment**: [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) builds with `next build` and deploys the `./out` static export to GitHub Pages on every push to `master`, using a custom domain via [CNAME](CNAME). Static export mode disables all Next.js server features (Route Handlers, SSR, middleware) — avoid reintroducing any of those, since they silently won't run in production on this host. Note: as of this writing `next.config.mjs` does not set `output: "export"`, so `next build` does not actually produce a `./out` directory locally; this needs to be set for the GitHub Actions workflow's "Upload artifact" step to succeed.

## Conventions observed in this codebase

- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)), e.g. `@/components/navbar`, `@/data`, `@/lib/utils`.
- `cn()` from `@/lib/utils` (clsx + tailwind-merge) is the standard way to compose conditional class names.
- Section components are self-contained: each owns its own `<section id="...">` anchor used by in-page nav links (e.g. `#services`, `#portfolio`, `#contact` in `data.tsx`'s `itemsNavbar`).
- Interactive components (forms, carousels, theme toggle) are marked `"use client"`; section components that just render static data typically are not.
