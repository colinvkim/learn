---
title: "npm: running scripts and understanding package-lock.json"
description: Learn how npm runs project commands and why the lockfile matters for consistency.
course: npm-and-pnpm
order: 4
status: published
---

After dependencies are in place, two other parts of npm become important very quickly:

- scripts
- the lockfile

## Scripts turn long commands into project commands

Many projects define scripts inside `package.json`.

For example:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "test": "vitest"
  }
}
```

Those keys become commands npm can run:

```bash
npm run dev
npm run build
npm run test
```

This matters because a project can document one stable command even if the underlying tool changes later.

## Why scripts are used so heavily

Scripts give a project a shared vocabulary.

Instead of asking everyone to remember the exact tool invocation, a repository can simply say:

- run the app with `npm run dev`
- build it with `npm run build`
- run tests with `npm run test`

That improves onboarding and reduces inconsistency.

## Running a tool without adding it as a dependency

Sometimes you need a package for one task, not as a permanent project dependency.

This is where `npx` and `npm exec` are useful.

Examples:

```bash
npx create-vite@latest my-app
npm exec -- eslint .
```

Use cases include:

- scaffolding a new project once
- running a tool directly
- avoiding unnecessary permanent dependencies

`npm exec` is the underlying command in modern npm. `npx` is still common in tutorials and day-to-day usage.

## What `package-lock.json` does

When npm installs packages, it writes a lockfile named `package-lock.json`.

The lockfile records the exact dependency graph that was resolved, not just the packages you typed directly.

That means it answers a more precise question than `package.json`:

**What exact versions did this project install?**

This is what allows installs to be reproducible across machines and environments.

## `package.json` and `package-lock.json` do different jobs

It helps to separate them mentally:

- `package.json` says what the project intends to depend on
- `package-lock.json` says what exact versions were actually resolved

According to the npm CLI docs, when you run `npm install` with no arguments, npm compares the two files. If the lockfile still satisfies the ranges in `package.json`, npm uses the locked versions. If the ranges no longer match, npm resolves new versions and updates the lockfile.

## `npm install` vs `npm ci`

For local development, the usual command is:

```bash
npm install
```

For CI and other automated environments, npm provides:

```bash
npm ci
```

The npm docs describe `npm ci` as a clean install for automated environments. Its key differences are:

- it requires an existing lockfile
- it fails if `package.json` and the lockfile do not agree
- it removes an existing `node_modules` before installing
- it does not write to `package.json` or the lockfile

That stricter behavior is exactly why teams prefer it in CI.
