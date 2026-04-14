# skyblu.earth — Claude Code Instructions

## Who this is for
Sky Blu. Lives in Playa del Carmen, Mexico. Nutrition, movement, prosperity, longevity.
Not a personal brand in the niche sense — a single living environment where all of it belongs.

## What this site is
A bare-minimum personal home base. The reference aesthetic is [sive.rs](https://sive.rs) —
one person, direct language, no noise. Fast, readable, honest.

The site should feel like walking into a well-kept room, not a storefront.

## Architecture decision
- **Markdown-first.** Content lives as `.md` files in this folder and gets published as web pages.
- Editing a page = editing a markdown file. No CMS login, no dashboard.
- This project folder lives inside Sky's Obsidian vault (Life System).
- Keep the build pipeline simple enough that Sky can run it from the terminal in one command.

## Aesthetic principles
- No corporate language. No buzzwords.
- Poetic but not precious. Direct but not cold.
- No animations for the sake of it. Typography does the work.
- Mobile-first, but not at the expense of the desktop reading experience.

## Starting scope (bare minimum)
One home page. That's it to start. Contains:
- Who Sky is (a few sentences, his voice)
- What he offers / does in the world
- How to connect with him

Resist the urge to add pages, sections, or features beyond this until the home page is right.

## Platform
**Eleventy (11ty)** — markdown → static HTML, deployed to Netlify.
- `npm start` runs the dev server at localhost:8080
- `npm run build` outputs to `./_site/`
- Content lives as `.md` files in the project root

## Voice reference
Read `_AI/CONTEXT.md` in the parent vault for Sky's voice, values, and communication style.
When writing copy, write *with* his voice — not generic web copy.
