# Get started

## Dev commands

```bash
npm install
npm run prepare
npm run dev
```

## Git commits/branches example

1) Branch name example: `task-111`
2) Commit name example: 
- `feat: add new button` <b>new feature</b>
- `fix: change visibility` <b>fix</b>
- `dx: update husky` <b>improve developer experience</b>

---

# Project Architecture & Dependency Rules

This document explains the source layout, allowed dependencies, and practical recipes to keep the codebase modular and maintainable.

---

## TL;DR

* **Folders:** `src/app`, `src/modules`, `src/shared`.
* **`shared`** holds cross‑project building blocks (`utils`, `hooks`, `ui`, `types`, `constants`).
* **`modules`** host self‑contained features; each module mirrors the `shared` subfolder layout for its internal reuse.
* **`app`** is the composition layer (e.g., pages, routing), assembling UI from `modules` and `shared`.
* **Forbidden imports:**

    * `shared` **must not** import from `app` or `modules`.
    * `modules` **must not** import from `app`.
* **Allowed imports:**

    * `app` → `modules`, `shared`
    * `modules` → `shared`, other `modules` (peer module usage is allowed)

---

## Source Layout

```
src/
  app/
    pages/
    ...
  modules/
    <module-name-a>/
      utils/
      hooks/
      ui/
      types/
      constants/
      index.ts
    <module-name-b>/
      ...
  shared/
    utils/
    hooks/
    ui/
    types/
    constants/
    index.ts
```

### What lives where

* **`shared`**: Truly reusable pieces **without** domain knowledge. Example: `useDebounce`, `Button`, `ThemeProvider`, `Result<T>` type, `DATE_FORMATS`.
* **`modules/*`**: Feature scopes (domain logic + UI). Example: `modules/cart`, `modules/auth`. Each may expose a public API via `index.ts`.
* **`app`**: Routing, layout, page composition. Pages import from `modules` and `shared` to build screens.

---

## Import Matrix

| From ↓ \ To → | app |           modules | shared |
| ------------- | --: | ----------------: | -----: |
| **app**       |   — |                 ✅ |      ✅ |
| **modules**   |   ❌ | ✅ (other modules) |      ✅ |
| **shared**    |   ❌ |                 ❌ |      — |

---
