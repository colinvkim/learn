---
title: "Node, npm, and running scripts"
description: "Learn how Node.js runs JavaScript outside the browser, how npm manages packages, and how to run scripts defined in package.json."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

So far, JavaScript has run in the browser. Node.js runs JavaScript on your machine — as a server, a build tool, or a standalone script. Understanding the runtime and its package ecosystem is essential for modern JavaScript development.

## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine. It provides JavaScript access to the file system, network, environment variables, and other system-level APIs that browsers do not expose.

Check if Node is installed:

```bash
node --version
```

Run a JavaScript file:

```bash
node index.js
```

Run a one-liner:

```bash
node -e "console.log('Hello from Node')"
```

Open an interactive REPL:

```bash
node
> 2 + 2
4
```

<Note title="This course has its own npm and pnpm course">
  <p>This lesson introduces the concepts. For a thorough treatment of npm and pnpm commands, package installation, and workspace management, see the <a href="/courses/npm-and-pnpm/introduction">npm and pnpm course</a>.</p>
</Note>

## `package.json`

`package.json` is a project's manifest. It lists dependencies, defines scripts, and configures tooling:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node server.js",
    "build": "node build.js",
    "test": "node test.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  }
}
```

- `"type": "module"` enables ES module syntax (`import`/`export`) in `.js` files
- `dependencies` are packages needed in production
- `devDependencies` are packages needed for development (linters, test runners, build tools)

## Installing packages

Run scripts install packages from the npm registry:

```bash
# Install all dependencies
npm install

# Install a specific package
npm install express

# Install a dev dependency
npm install --save-dev eslint
```

The package is downloaded to `node_modules/` and listed in `package.json`.

## Running scripts

Scripts defined in `package.json` run with `npm run`:

```bash
npm run dev      # runs `node server.js`
npm run build    # runs `node build.js`
npm run test     # runs `node test.js`
```

Scripts in the `scripts` section have access to locally installed binaries in `node_modules/.bin/`. This means you can run tools installed as dev dependencies without installing them globally:

```json
{
  "scripts": {
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

```bash
npm run lint     # runs node_modules/.bin/eslint
npm run format   # runs node_modules/.bin/prettier
```

## npx runs one-off commands

`npx` runs a package binary without installing it globally:

```bash
npx http-server .    # serves current directory on a local port
npx create-vite      # scaffolds a new project
```

If the package is already installed locally, `npx` uses that version. Otherwise, it downloads and runs it temporarily.

## Environment variables

Node.js exposes environment variables through `process.env`:

```javascript
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

console.log(`Server running on port ${port}`);
```

Set environment variables when running a script:

```bash
PORT=8080 node server.js        # Unix
$env:PORT = 8080; node server.js # PowerShell
```

## What to carry forward

- Node.js runs JavaScript outside the browser with access to system APIs
- `node file.js` runs a JavaScript file
- `package.json` defines a project's name, dependencies, and scripts
- `"type": "module"` enables `import`/`export` in `.js` files
- `npm install` installs dependencies; `npm install package-name` adds a new one
- `npm run script-name` runs scripts from `package.json`
- `npx` runs one-off commands without global installation
- environment variables are accessed via `process.env`

Tooling is the foundation of productive JavaScript development. The next lesson covers project structure in more depth.
