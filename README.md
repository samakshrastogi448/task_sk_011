# Midnight Courtyard — Project 011

A cinematic, photo-led cocktail-night courtyard experience built with React, Vite and GSAP.

## Direction
- **Category:** Cocktail Night / Courtyard Celebration
- **Story:** 12 distinct scenes built around old-stone architecture, moonlit blue, brass warmth and editorial portraiture
- **Entry:** immersive after-dark gate interaction
- **Motion:** GSAP reveal and restrained image drift with reduced-motion fallback
- **Responsive:** mobile-first layouts with dedicated single-column adaptations

## Customize
Edit `src/data.js` to replace the names, date, location, scene copy and photographs.

## Commands
```bash
npm install
npm run dev
npm run build
npm run qa:production
```

The repository Production QA workflow targets the canonical manual-Vercel handoff URL `https://tasksk011.vercel.app`. Before that Git-linked deployment exists, the workflow records a waiting state rather than treating missing Vercel as a build-lane failure.
