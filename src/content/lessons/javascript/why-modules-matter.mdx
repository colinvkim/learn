---
title: "Why modules matter"
description: "Learn how modules solve the problem of organizing code across multiple files, avoiding naming conflicts, and creating clear boundaries between concerns."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

So far, all code has lived in a single file or a single script tag. Real projects need structure. Modules are how JavaScript splits code across files while controlling what each file can see.

## The problem modules solve

Without modules, every script file shares the same global scope. Two scripts that define a variable with the same name collide:

```html
<!-- index.html -->
<script src="utils.js"></script>
<script src="app.js"></script>
```

```javascript
// utils.js
const API_URL = "https://api.example.com";

// app.js
const API_URL = "https://other-api.com";  // collision — overwrites the first one
```

This is called **global scope pollution**. As projects grow, naming conflicts become inevitable.

Modules solve this by giving each file its own **module scope**. Variables declared in a module are not visible to other modules unless they are explicitly exported.

## Modules create isolated scopes

Each module file has its own scope. Nothing leaks to the global scope unless you explicitly put it there:

```javascript
// utils.js
const API_URL = "https://api.example.com";  // not visible outside this file
const VERSION = "1.0";                       // not visible outside this file

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export { formatDate };  // only this is visible to other modules
```

```javascript
// app.js
import { formatDate } from "./utils.js";

console.log(formatDate(new Date()));  // works
console.log(API_URL);                 // ReferenceError — not exported
```

The only way to share data between modules is through explicit `export` and `import` statements. Everything else is private.

## Modules vs scripts

A file becomes a module when it uses `import` or `export` in an HTML script tag with `type="module"`:

```html
<script type="module" src="app.js"></script>
```

Without `type="module"`, the file is treated as a classic script and shares the global scope.

In Node.js and modern build tools, `.js` files are treated as modules by default (in Node.js, this requires `"type": "module"` in `package.json`).

## Benefits of modules

- **no naming conflicts** — two modules can use the same variable name without colliding
- **explicit dependencies** — a module declares what it needs through imports
- **encapsulation** — internal details stay hidden unless exported
- **easier testing** — you can import and test individual pieces in isolation
- **dead code elimination** — build tools can remove unused exports (tree shaking)

## Modules enable code organization

Modules let you organize code by concern instead of by file size:

```
project/
├── src/
│   ├── api.js          # data fetching
│   ├── auth.js         # authentication logic
│   ├── utils.js        # shared utilities
│   └── main.js         # application entry point
```

Each file has a clear responsibility. `main.js` imports from the others and orchestrates them. The modules do not know about each other beyond their explicit interfaces.

## What to carry forward

- without modules, all scripts share the global scope and naming conflicts are inevitable
- modules give each file its own scope — nothing is visible unless explicitly exported
- `export` makes a value available to other modules; `import` brings it in
- modules are the foundation for organizing code across files
- in the browser, use `<script type="module">`; in Node.js, use `"type": "module"` in `package.json`

The next lesson covers the syntax of `import` and `export` in detail.
