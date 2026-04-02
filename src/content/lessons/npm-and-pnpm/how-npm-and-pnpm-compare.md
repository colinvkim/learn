---
title: How npm and pnpm compare
description: Compare npm and pnpm only after both tools make sense on their own.
course: npm-and-pnpm
order: 7
status: published
---

Now the comparison can be made on useful terms.

At a high level, `npm` and `pnpm` do the same job.

Both can:

- read `package.json`
- install dependencies
- write a lockfile
- run project scripts
- support workspaces

The important question is not which tool is more legitimate. The important question is which workflow fits the repository.

One of the most useful beginner takeaways is that `pnpm` is not a different package universe. In many cases, the same kinds of packages and project structures are in play. The difference is how the package manager behaves.

## The biggest similarity

The underlying concepts are the same:

- packages
- dependencies
- scripts
- lockfiles
- local project installs

That is why moving from one tool to the other is usually easier than it first appears.

## The biggest differences

### `npm` is the default starting point

Because `npm` ships with Node.js, it is the package manager many people learn first.

That usually means:

- more tutorials use it
- more beginners see it first
- many projects keep using it without needing anything else

### `pnpm` is often chosen intentionally

Teams often adopt `pnpm` because they want its workflow characteristics rather than because they happened to receive it by default.

Common reasons include:

- fast repeated installs
- efficient use of disk space
- a strong fit for workspaces and monorepos
- a command set many developers find more explicit

### Some command pairs are different enough to matter

| Task | npm | pnpm |
| --- | --- | --- |
| Install project dependencies | `npm install` | `pnpm install` |
| Add a package | `npm install react` | `pnpm add react` |
| Add multiple packages | `npm install react react-dom` | `pnpm add react react-dom` |
| Add a dev dependency | `npm install -D typescript` | `pnpm add -D typescript` |
| Remove a package | `npm uninstall react` | `pnpm remove react` |
| Run a script | `npm run dev` | `pnpm dev` |
| Run a local binary directly | `npm exec -- eslint .` | `pnpm exec eslint .` |
| Run a one-off package | `npx create-vite@latest my-app` | `pnpm dlx create-vite@latest my-app` |

That table is the practical heart of the comparison. The concepts are shared, but some of the muscle memory is different.

The biggest mindset difference is often this:

- in npm, `install` commonly means both "install what the project already has" and "add a new package"
- in pnpm, `install` and `add` are separated more explicitly

## What does not change

Whichever package manager a repository uses:

- commit the lockfile
- use one package manager per repository
- avoid mixing lockfiles
- review dependency changes carefully

Those habits matter more than tool loyalty.
