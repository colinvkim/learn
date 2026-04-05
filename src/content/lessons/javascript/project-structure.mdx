---
title: "Project structure for JavaScript applications"
description: "Learn how to arrange files in a JavaScript project so that code is easy to find, dependencies are clear, and the project scales without becoming chaotic."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

A well-structured project is easier to navigate, test, and maintain. These patterns work for JavaScript applications of any size.

## A minimal project

Even a simple project needs a few standard files:

```
my-project/
├── package.json       # project metadata, dependencies, scripts
├── index.js           # entry point
└── README.md          # what this project is and how to run it
```

`package.json` is the only required file for npm to work. Everything else is convention.

## A typical frontend project

Most modern frontend JavaScript projects use a build tool (Vite, esbuild, webpack) and look like this:

```
my-app/
├── package.json
├── index.html             # HTML entry point
├── vite.config.js         # build tool configuration
├── src/
│   ├── main.js            # JavaScript entry point
│   ├── api.js             # API client
│   ├── dom.js             # DOM helpers
│   └── styles.css         # styles
└── public/
    └── favicon.ico        # static assets
```

The `src/` directory contains all source code. The build tool processes `src/main.js`, resolves imports, and outputs a bundled file for the browser.

## Separating concerns by directory

As the project grows, organize by concern or feature:

```
my-app/
├── src/
│   ├── main.js            # entry point — wires everything together
│   ├── api/
│   │   ├── client.js      # fetch wrapper
│   │   └── endpoints.js   # URL constants
│   ├── components/
│   │   ├── card.js        # card component
│   │   ├── modal.js       # modal component
│   │   └── nav.js         # navigation component
│   ├── utils/
│   │   ├── format.js      # formatting utilities
│   │   └── validate.js    # validation utilities
│   └── styles/
│       ├── base.css       # reset and base styles
│       └── components.css # component-specific styles
```

Each directory has a single responsibility. `api/` handles data fetching. `components/` handles rendering. `utils/` handles transformations.

## Configuration files

Modern projects accumulate configuration files. Keep them at the project root:

```
my-app/
├── package.json
├── vite.config.js         # build tool
├── eslint.config.js       # linter
├── prettier.config.js     # formatter
├── .gitignore             # files to exclude from Git
├── .env                   # environment variables (not committed)
└── .env.example           # example environment variables (committed)
```

Configuration files at the root are easy to find. Some tools support placing config inside `package.json` to reduce root clutter, but separate config files are clearer for complex settings.

## Entry points

Every application has an entry point — the file that starts everything:

- Browser: the file loaded by `<script type="module" src="...">`
- Node.js: the file run by `node index.js` or specified in `package.json` as `"main"`
- Build tool: the file specified as the input (e.g., `vite.config.js` `build.lib.entry`)

The entry point should be thin — it imports modules and wires them together, but does not contain business logic:

```javascript
// main.js
import { initAuth } from "./api/auth.js";
import { renderApp } from "./components/app.js";
import { setupRouter } from "./router.js";

initAuth();
setupRouter();
renderApp(document.querySelector("#app"));
```

## What to avoid

- **Deep nesting** — more than 3-4 levels of directories makes imports verbose
- **Mixed concerns** — do not put DOM logic, API calls, and utilities in the same file
- **God files** — a single file that does everything (e.g., `utils.js` with 500 lines)
- **Circular imports** — A imports B, B imports A — extract shared logic into C

## What to carry forward

- start simple — `package.json`, entry point, and source files
- organize by concern — `api/`, `components/`, `utils/`, etc.
- keep configuration files at the project root
- entry points should be thin — import and wire, do not implement
- avoid deep nesting, mixed concerns, and circular imports
- structure follows function — reorganize when the current structure causes pain

Good project structure makes code findable. The next lesson covers the tools that check code quality.
