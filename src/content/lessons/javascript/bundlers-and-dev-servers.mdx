---
title: "Bundlers and dev servers"
description: "Learn why JavaScript is bundled, what a dev server does, and how modern tools transform source code into something a browser can run."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Modern JavaScript projects use modules. Browsers support ES modules natively, but bundling still offers benefits: fewer network requests, optimized code, and compatibility with older browsers.

## Why bundle

When you write JavaScript with `import` and `export`, the browser must fetch each module individually. A project with 50 modules makes 50 network requests on load.

A **bundler** combines all modules into one or a few files, reducing the number of requests. It also:

- removes unused code (tree shaking)
- minifies code (removes whitespace, shortens variable names)
- transforms modern syntax for older browsers
- bundles CSS, images, and other assets alongside JavaScript

## Popular bundlers

| Tool | What it is |
|---|---|
| **Vite** | A fast build tool and dev server that uses esbuild for development and Rollup for production builds |
| **esbuild** | An extremely fast bundler written in Go |
| **Rollup** | A module bundler optimized for libraries |
| **webpack** | A mature, highly configurable bundler |
| **Parcel** | A zero-config bundler that handles most things automatically |

Vite is the most common choice for new frontend projects because of its speed and developer experience.

## What a dev server does

A dev server serves your files over HTTP so you can preview your app in the browser. Unlike opening an HTML file directly (`file://`), a dev server:

- resolves module imports correctly
- reloads the page when files change (hot module replacement)
- proxies API requests to avoid CORS issues
- shows errors and warnings in the browser overlay

```bash
# With Vite
npx vite
# Dev server running at http://localhost:5173
```

## How imports resolve

When the dev server or bundler processes your code, it follows the import graph:

```javascript
// main.js
import { initAuth } from "./api/auth.js";
import { renderApp } from "./components/app.js";
```

The bundler reads `main.js`, finds its imports, reads `auth.js` and `app.js`, finds their imports, and so on. The result is a complete graph of every file in the project.

## Output

After bundling, the output is one or more optimized files:

```
dist/
├── index.html
├── assets/
│   └── index.a3f2b.js    # bundled and minified JavaScript
│   └── index.c4d5e.css   # bundled and minified CSS
```

The `dist/` (or `build/`) directory is what gets deployed. Source files in `src/` are never served to users.

## A minimal Vite project

```bash
# Create a project
npm create vite@latest my-app -- --template vanilla

# Install dependencies
cd my-app && npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

The project structure:

```
my-app/
├── package.json
├── index.html
├── main.js           # entry point
├── style.css         # styles
├── counter.js        # example module
└── public/           # static assets
```

## Source maps

During development, the browser runs bundled code, not your source files. Source maps translate positions in the bundled code back to your original source so that errors and debugger breakpoints point to the right lines in `src/`.

Source maps are generated automatically by build tools. Do not deploy them to production — they expose your source code and slow down loading.

## What to carry forward

- bundlers combine many modules into fewer files to reduce network requests
- bundlers also minify code, remove unused exports, and transform modern syntax
- dev servers serve files over HTTP with hot reloading and correct module resolution
- Vite is the most common choice for new frontend projects
- the output (`dist/`) is what gets deployed — source files are never served to users
- source maps translate bundled code back to source for debugging

Tooling transforms your organized source code into optimized output for the browser. The final unit covers the habits and practices that make code maintainable over time.
