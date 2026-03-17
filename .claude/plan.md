# Plan: Infuse Camtom Brand Identity into Malix Docs

## Context
Camtom is a B2B SaaS startup for foreign trade — helps customs agencies and import/export teams work faster using AI (document extraction, HS classification, tariff calculation). "Malix" is Yucatán slang for a stray dog that becomes domestic over time. The metaphor: Malix domesticates the visual chaos of a product into a predictable, scalable UI language.

Currently the docs site has ZERO mention of Camtom — it reads like a generic design system. The goal is to make Malix feel like part of Camtom's brand identity without losing its standalone credibility.

## Changes

### 1. Rewrite Introduction page (`apps/docs/content/docs/index.mdx`)
- Open with the Camtom story: what Camtom builds, why consistency matters in compliance-ready enterprise software
- Add the "Why Malix?" origin story — the Yucatán slang metaphor: "a dog of unknown origin that becomes domestic"
- Reframe design principles as rooted in the enterprise/compliance context (precision, trust, scalability)
- Keep the existing technical content (49 components, 74 tokens, TypeScript, etc.) but weave it into the narrative
- Add a "Built at Camtom" section explaining the design system was born from real product needs

### 2. Update Home page hero (`apps/docs/app/page.tsx`)
- Update the subtitle from generic "Production-ready React components..." to something that connects to Camtom's mission
- Add a tagline that references the "domesticating chaos" metaphor subtly
- Update the footer to include "Built by Camtom" with a link to camtom.com (or GitHub)

### 3. Update docs layout (`apps/docs/app/(docs)/layout.tsx`)
- Add a Camtom link in the nav links (alongside GitHub)

### 4. Update meta descriptions
- Update the introduction page description to reference Camtom

## Files to modify
1. `/apps/docs/content/docs/index.mdx` — Major rewrite
2. `/apps/docs/app/page.tsx` — Hero copy + footer updates
3. `/apps/docs/app/(docs)/layout.tsx` — Add Camtom nav link

## What stays the same
- All component pages, thumbnails, CSS — untouched
- Installation, tokens, foundations pages — untouched
- The "Malix" name and branding — stays, just gets contextualized within Camtom
- Technical accuracy of all existing content
