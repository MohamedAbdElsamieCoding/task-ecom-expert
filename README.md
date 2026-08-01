# Task Ecom Expert — Frontend Bundle Builder

A React + TypeScript + Vite implementation of the frontend take-home bundle builder prototype.

## Overview

This repo is a working prototype of a multi-step bundle builder with a live review panel, built to match the design intent of the take-home assignment.

The app includes:

- a 4-step accordion builder for cameras, plans, sensors, and protection
- product cards with quantity steppers and variant selection behavior
- a live review panel that updates as the bundle changes
- client-side persistence via `localStorage` for "Save my system for later"
- responsive layout for desktop and smaller viewports

## What is implemented

### Builder flow

- Step 1: Choose your cameras
- Step 2: Choose your plan
- Step 3: Choose your sensors
- Step 4: Add extra protection

Each step includes:

- a step header with `STEP X OF 4`
- an icon and title
- a selected item count
- a collapsed/expanded chevron state
- a "Next" button that advances the accordion

### Product behavior

- Camera and sensor products are managed using data-driven rendering from `src/data`
- Variant-color selection is supported where applicable
- Quantity steppers are bound to the active variant and kept in sync with review panel counts
- Selected products appear in the live review panel grouped by category

### Checkout review

- Cameras, sensors, protections, and plan selections are displayed in the review panel
- Pricing is recalculated dynamically as quantities change
- Shipping is shown only after a camera is selected
- The checkout button is a placeholder for the prototype
- Selected protections are supported as multi-choice items

### Persistence

- The current bundle is saved to `localStorage` via `src/utils/localStorage.ts`
- Clicking "Save my system for later" stores the bundle
- Reloading the page restores the saved configuration

## Run instructions

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the local URL shown by Vite to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

- `src/App.tsx` — main app layout
- `src/components/accordion` — step builder accordion UI
- `src/components/checkout` — review panel and summary UI
- `src/components/steps` — step content for cameras, plans, sensors, and protection
- `src/data` — product data sources for cameras, plans, sensors, protections, and steps
- `src/store` — Redux Toolkit state management for the bundle
- `src/utils/localStorage.ts` — persistence helper

## Data-driven design

The application is intentionally data-driven. Product markup is rendered from the data objects in `src/data`, not hardcoded per product.

This includes:

- camera entries
- plan options
- sensor choices
- protection plans
- step definitions and icons

## Notes and tradeoffs

- This implementation uses local JSON-like data files instead of a backend API. A backend would be a bonus, but is not required here.
- The checkout button is intentionally a prototype placeholder and does not perform a real checkout.
- I prioritized the bundle state flow, review-panel sync, persistence, and step-based interaction behavior.
- The application is built to run from a clean clone using `npm install` and `npm run dev`.

## Decisions made

- Used React + TypeScript + Vite for a modern frontend stack
- Used Redux Toolkit for bundle state to keep selection logic centralized
- Kept variant quantities separate per color option, matching the required variant selector behavior
- Implemented persistence with `localStorage` to restore saved bundle state on return
- Kept UI responsive and the data model flexible for future product additions

## Notes for reviewers

If you want to evaluate the implementation quickly, check:

- `src/store/features/bundle/bundleSlice.ts` for selection and persistence logic
- `src/components/checkout/Checkout.tsx` for review panel rendering
- `src/data` for the product-driven source data
- `src/utils/localStorage.ts` for save/load persistence

---

Thank you for reviewing this take-home prototype.
