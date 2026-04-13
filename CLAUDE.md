# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Serve the dist/ build locally
```

No lint or test scripts are configured.

## Architecture

Single-page React dashboard comparing US tech job markets across 5 cities. All application code lives in **`src/App.jsx`** (~650 lines) — there is intentionally no component decomposition across files.

**Data layer:** The `cities` array (top of `App.jsx`) is the sole source of truth for all city metrics, scores, and findings. No API calls; all data is static.

**Styling:** 100% inline JavaScript style objects — no CSS files, no Tailwind, no CSS modules. The visual theme is dark (`#1a1a1a` base) with monospace typography (Inter, JetBrains Mono via Google Fonts).

**State:** Three pieces of React state drive the UI:
- `selectedCity` — which city's detail panel is shown
- `sortBy` — active sort key (`score` | `unemployment` | `name`)
- `expandedSections` — a `Set` tracking which DataCard sections are open

**Layout:** Fixed 300px sidebar + flex detail panel. The 2×2 data card grid uses CSS Grid; everything else uses flexbox.

**Helper components** (`ScoreBar`, `DataCard`) are defined inline in the same file rather than extracted to separate modules.
