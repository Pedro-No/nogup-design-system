# @nogup/design-system

Shared **Nogup** UI for React apps: dark tokens, CSS bundles, and small components used by `nogup-pushups`, `nogup-meal-planner`, and future projects.

---

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ (LTS recommended)
- npm 10+

---

## Quick start (this repo)

```bash
cd nogup-design-system
npm install
npm run build
```

After every change to `src/components` or `src/styles`, run `npm run build` again before consuming apps pick up updates (when using a local `file:` dependency).

---

## Commands

| Command | What it does |
|---------|----------------|
| `npm install` | Install dependencies |
| `npm run build` | Build the library → `dist/` (JS, types, CSS) |
| `npm run dev` | Rebuild JS on file changes (CSS still needs a full `build` for copies) |
| `npm run typecheck` | Type-check library source only |
| `npm run storybook` | Start Storybook dev server on port **6006** |
| `npm run build-storybook` | Build static Storybook → `storybook-static/` |

---

## Storybook

Browse components, props (Autodocs), tokens, and CSS patterns.

### Run locally

```bash
npm install
npm run storybook
```

Open **http://localhost:6006**.

Sidebar:

- **Foundations / Tokens** — colors and layout tokens
- **Components /*** — React components + props tables
- **Layout /*** — `AppShell`, `PageHeader`
- **CSS / Patterns** — class-only styles (no wrapper component)

### Build static Storybook (for hosting)

```bash
npm run build-storybook
```

Output directory: **`storybook-static/`** (do not commit unless you want it in git; it is gitignored by default).

### Deploy Storybook

Any static host works. Build first, then upload **`storybook-static/`**.

**GitHub Pages** (example with `gh-pages` branch):

```bash
npm run build-storybook
npx gh-pages -d storybook-static
```

**Netlify**

- Build command: `npm run build-storybook`
- Publish directory: `storybook-static`

**Vercel**

- Framework preset: Other
- Build command: `npm run build-storybook`
- Output directory: `storybook-static`

**Preview locally after build**

```bash
npx serve storybook-static
```

---

## Use the package in an app

### Option A — Local path (best while developing)

In `nogup-pushups` or `nogup-meal-planner` (sibling folder):

```bash
npm install "../nogup-design-system"
```

Rebuild the design system when you change it:

```bash
cd ../nogup-design-system
npm run build
```

Then restart or rebuild the app.

In the app entry (e.g. `main.tsx`):

```tsx
import "@nogup/design-system/styles/pushups";
// or: styles/meal-planner | styles/core | styles (all)
```

Use components:

```tsx
import { AppShell, Button, Card } from "@nogup/design-system";
```

Peer dependencies in the app: `react` and `react-dom` (^18 or ^19).

### Option B — npm link

```bash
cd nogup-design-system
npm run build
npm link

cd ../nogup-pushups
npm link @nogup/design-system
```

### Option C — Publish to npm (or GitHub Packages)

1. Log in and set scope if needed:

   ```bash
   npm login
   ```

2. Bump version when you ship changes:

   ```bash
   npm version patch   # or minor / major
   ```

3. Build and publish:

   ```bash
   npm run build
   npm publish --access public
   ```

   For a private scope on npm, omit `--access public` if your scope is private.

   **GitHub Packages** (example):

   ```bash
   # .npmrc in consumer project:
   # @nogup:registry=https://npm.pkg.github.com

   npm publish
   ```

4. In consumer apps:

   ```bash
   npm install @nogup/design-system
   ```

Only **`dist/`** is included in the published tarball (`files` in `package.json`). Storybook and source are not published.

---

## Style bundles

Import **one** bundle in your app entry:

```tsx
import "@nogup/design-system/styles";           // everything
import "@nogup/design-system/styles/core";      // shared UI only
import "@nogup/design-system/styles/pushups";   // core + pushups patterns
import "@nogup/design-system/styles/meal-planner"; // core + meal planner patterns
```

| Export | Contents |
|--------|----------|
| `styles` | Core + pushups + meal planner |
| `styles/core` | Tokens, base, layout, shared components |
| `styles/pushups` | Core + leaderboard, profile, timer, charts |
| `styles/meal-planner` | Core + calendar, slots, meal library |

CSS variables: `--ng-*` (canonical) and legacy `--bg`, `--accent`, etc.

---

## React components

```tsx
import {
  Alert,
  AppShell,
  Badge,
  Button,
  Card,
  CardHeader,
  LanguageToggle,
  PageHeader,
  Stat,
  ViewTabs,
  nogupTokens,
} from "@nogup/design-system";
```

`Button` variants: `primary` | `ghost` | `small` | `link` (maps to existing `.btn` classes).

---

## Deploy / ship checklist

**Library (for apps to install)**

1. `npm run typecheck`
2. `npm run build`
3. Commit and tag (optional): `git tag v0.1.0`
4. `npm publish` or rely on `file:../nogup-design-system` locally

**Storybook (for designers / docs)**

1. `npm run build-storybook`
2. Deploy `storybook-static/` to your host

**Consumer app**

1. Install `@nogup/design-system`
2. Import one style bundle in `main.tsx`
3. Remove duplicated app-level CSS once parity is verified

---

## Project layout

```
src/
  components/     React primitives
  styles/         CSS source (copied to dist/styles on build)
  stories/        Storybook stories + Tokens.mdx
.storybook/       Storybook config
dist/             Published library output (after npm run build)
storybook-static/ Static Storybook (after npm run build-storybook)
```

---

## License

MIT
