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

Single-page React dashboard comparing US tech job markets across 15 cities. All application code lives in **`src/App.jsx`** (~1300 lines) — there is intentionally no component decomposition across files.

**Data layer:** The `cities` array (top of `App.jsx`) is the sole source of truth for all city metrics, scores, and findings. No API calls; all data is static. Each city object includes: `unemployment`, `jobGrowth`, `jobsChanged`, `swOpenings`, `totalTech`, `majorEmployers`, `avgTechSalary`, `stateTax`, `colIndex`, `rent1br`, `salaryCol`, `capitalRank`, `popTrend`, `biggestRisk`, `techTrend`, `techPct`, `officeVacancy`, `applicantsPerJob`, `score`, `status`, `findings[]`, and `sources{}` (bibliography).

**Styling:** Primarily inline JavaScript style objects. One `<style>` tag is injected for responsive media query overrides (`≤768px`). No CSS files, no Tailwind. The visual theme is dark (`#1a1a1a` base) with monospace typography (Inter + JetBrains Mono via Google Fonts). CSS class names (`app-header`, `app-sidebar`, `data-card-grid`, `bib-grid`, etc.) exist solely as media query hooks — they carry no desktop styles.

**Icons:** `lucide-react` is used for all iconography. No emoji or unicode glyphs in JSX.

**State:** Four pieces of React state drive the UI:
- `selected` — name of the city whose detail panel is shown
- `sortBy` — active sort key (`score` | `unemployment` | `name`)
- `openCards` — a `Set` of section titles whose `DataCard` is expanded
- `findingsOpen` / `bibOpen` — collapse state for the findings and bibliography panels

**Layout:** Fixed 300px sidebar + flex detail panel on desktop. On mobile (≤768px) the sidebar stacks above the detail panel (capped at 240px height), the header stats reflow into a single evenly-spaced row, and the 2×2 data card grid collapses to 1 column.

**Helper components** (`ScoreBar`, `DataCard`) and pure functions (`getSections`, `getHighlightPills`, `findingColor`, `scoreColor`, `statusColor`) are all defined inline in the same file rather than extracted to separate modules.
