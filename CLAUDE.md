# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (hot reload)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run deploy       # Build + deploy to GitHub Pages via gh-pages
```

There is no test runner, linter, or formatter configured.

## Architecture

React 18 + Vite 6 SPA for GMAT-style quiz preparation. Supports 3 languages (PT-BR, EN, ES) via custom i18n system.

### File structure

```
src/
├── App.jsx                    # Root component: routing, state, localStorage persistence
├── main.jsx                   # Entry point, wraps App with I18nProvider
├── constants.js               # SECTIONS enum (navigation keys)
├── index.css                  # Global styles, theme variables, responsive breakpoints
├── components/
│   ├── Home.jsx               # Landing page: learn cards, practice grid, simulado button, history
│   ├── LearnSection.jsx       # Educational content page per question type
│   ├── Practice.jsx           # Practice mode: sequential questions with answer reveal
│   ├── Simulado.jsx           # Full quiz mode: timed, no answer key during
│   ├── Results.jsx            # Post-quiz results: score, breakdown by type, detailed answers
│   ├── QuestionCard.jsx       # Question display with options, feedback, explanation
│   ├── Timer.jsx              # Countdown timer (2h for simulado)
│   └── Confetti.jsx           # Celebration animation for high scores
├── data/
│   ├── questions.js           # PT-BR question banks + shuffle utility
│   └── learnContent.js        # PT-BR learn section content
└── i18n/
    ├── I18nContext.jsx         # React Context provider, useI18n() hook, t() with interpolation
    ├── index.js                # Locale aggregator, re-exports I18nProvider + useI18n
    └── locales/
        ├── pt-BR/
        │   ├── ui.js           # UI strings in Portuguese
        │   └── content.js      # Re-exports from data/ (PT-BR is the source of truth)
        ├── en/
        │   ├── ui.js           # UI strings in English
        │   └── content.js      # Translated questions + learn content
        └── es/
            ├── ui.js           # UI strings in Spanish
            └── content.js      # Translated questions + learn content
```

### i18n system

Custom React Context — no external library. `useI18n()` exposes:
- `t(key, params?)` — translates UI strings with `{{param}}` interpolation, falls back to key
- `content` — locale-specific question banks and learn sections
- `locale` / `setLocale` — current locale and setter

Locale is auto-detected from `navigator.language` and persisted in `localStorage` as `quizsharp-locale`.

### Question object shape

```js
{ q: string, options: string[5], answer: number, explanation: string, type?: "PS"|"DS"|"CR" }
```

Question banks: PS (8 questions), DS (6), CR (6). Simulado draws 15 (5+5+5 mix, shuffled).

### Navigation

`SECTIONS` enum + `useState` — no router library. Sections: home, learn_ps/ds/cr, practice_ps/ds/cr, simulado, results.

### Styling

Inline styles (CSS-in-JS) in components + global CSS in `src/index.css`. Dark/light theme via CSS custom properties on `[data-theme]`. Color scheme per type: PS=cyan `#00c2ff`, DS=purple `#b388ff`, CR=green `#69f0ae`.

### State persistence

All app state (current section, answers, simulado progress, history) is persisted in `localStorage` under key `quizsharp`. Theme under `quizsharp-theme`. Locale under `quizsharp-locale`.

### Deployment

GitHub Pages at base path `/quizsharp/` (set in `vite.config.js`).

### No backend

All data is client-side. No API calls, no database, no auth.
