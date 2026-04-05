---
title: "File organization and project structure"
description: "Learn how to arrange modules across files so that each file has a clear purpose, dependencies flow in one direction, and the project stays maintainable as it grows."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Any project can start as a single file. Knowing when and how to split it into modules is a skill that develops with experience. These guidelines cover the patterns that work at any scale.

## Start with concerns, not file count

A **concern** is a responsibility or a type of work your code does. Common concerns:

- fetching data from an API
- authenticating users
- rendering UI
- validating input
- formatting data
- routing between pages

Each concern is a candidate for its own module.

## A simple project structure

For a small application, a flat structure often works:

```
project/
├── src/
│   ├── api.js        # data fetching
│   ├── auth.js       # authentication
│   ├── dom.js        # DOM helpers
│   ├── ui.js         # rendering components
│   └── main.js       # entry point — wires everything together
```

`main.js` imports from the other modules and starts the application. The other modules do not import from each other unless one genuinely depends on another.

## Grouping by feature as projects grow

When the number of files grows, group by feature instead of by type:

```
project/
├── src/
│   ├── auth/
│   │   ├── login.js
│   │   ├── logout.js
│   │   └── session.js
│   ├── products/
│   │   ├── list.js
│   │   ├── detail.js
│   │   └── api.js
│   ├── cart/
│   │   ├── cart.js
│   │   └── api.js
│   └── main.js
```

Each feature directory contains the modules that belong to that concern. Files within a feature can import from each other. Features should not import from each other's internals — they communicate through explicit interfaces.

## Barrel files for clean imports

A barrel file re-exports from multiple modules, creating a single entry point:

```javascript
// auth/index.js
export { login } from "./login.js";
export { logout } from "./logout.js";
export { getSession } from "./session.js";
```

Now consumers import from the directory:

```javascript
import { login, logout } from "./auth/index.js";
// or, with module resolution:
import { login, logout } from "./auth";
```

Barrel files reduce import path depth and make it clear what a feature exposes.

## Entry points

Most projects have one or more entry point files — modules that import from others but are not imported themselves. In the browser, the entry point is the script loaded in the HTML. In Node.js, it is the file specified in `package.json` or the file you run directly.

Entry points should contain minimal logic. Their job is to import and wire dependencies, not to implement behavior:

```javascript
// main.js
import { initAuth } from "./auth/index.js";
import { renderApp } from "./ui/app.js";
import { setupRouter } from "./router.js";

initAuth();
setupRouter();
renderApp();
```

## Dependency direction

Dependencies should flow in one direction — from higher-level modules to lower-level ones. Utilities should not import from features. Features should not import from the entry point.

```
main.js → feature modules → utility modules
```

Circular dependencies (A imports B, B imports A) are a sign that responsibilities are not cleanly separated. Resolve them by extracting shared logic into a third module that both can import from.

## Naming conventions

- use descriptive, lowercase names with dashes or underscores for files: `user-api.js`, `format_date.js`
- use `index.js` for barrel files that re-export from a directory
- use names that describe the concern, not the implementation detail: `auth.js` not `functions.js`

## When to split a file

Split a file when:

- it exceeds a few hundred lines and covers multiple concerns
- you find yourself scrolling to find a specific function
- two functions in the file are never used together
- another module imports the file but only uses one export from it

## When to keep files together

Keep files together when:

- the functions are always used together
- the file is small and covers one concern
- splitting would create more import statements than lines of code

<Note title="There is no perfect structure">
  <p>The right structure depends on your project's size, team, and domain. Start simple — a few files with clear concerns. Split when pain appears. Do not preemptively create directories and barrel files for a five-file project.</p>
</Note>

## What to carry forward

- organize modules by concern, not by type
- entry points wire dependencies — they should not contain business logic
- dependencies should flow in one direction from high-level to low-level modules
- barrel files (`index.js`) provide clean import paths for features
- avoid circular dependencies — extract shared logic into a third module
- split files when they grow or mix concerns; keep them together when they are small and cohesive

File organization makes code easier to find and understand. The next lesson covers building reusable utility modules that encapsulate common patterns.
