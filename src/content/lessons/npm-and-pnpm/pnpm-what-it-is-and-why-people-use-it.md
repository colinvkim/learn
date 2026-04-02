---
title: "pnpm: what it is and why people use it"
description: Learn what pnpm is, why it exists even though npm already exists, and what makes it attractive to many teams.
course: npm-and-pnpm
order: 5
status: published
---

Once `npm` makes sense, `pnpm` is easier to place correctly.

It does the same kind of work:

- install packages
- record dependencies
- run project scripts
- maintain a lockfile

The difference is not the category of tool. The difference is the design of the workflow.

## What pnpm is

`pnpm` is another package manager for the Node.js ecosystem.

A pnpm project still uses familiar pieces:

- `package.json`
- `dependencies`
- `devDependencies`
- scripts
- a lockfile

So moving from npm to pnpm is not learning a new ecosystem. It is learning a different package manager inside the same ecosystem.

## Why teams choose pnpm

The official pnpm site emphasizes three themes:

- speed
- saving disk space
- strong workspace support

In practice, teams often choose pnpm because they want:

- fast repeated installs
- more efficient dependency storage
- a strong fit for workspaces and monorepos
- a workflow that is slightly stricter and more explicit

Those benefits matter most as repositories grow, but the basic command set stays small even in simpler projects.

## What stays the same in a pnpm project

A pnpm-based project still has the same broad structure as an npm project.

You still work with:

- a `package.json` file
- a project manifest that records dependencies
- scripts that run development and build tasks
- a lockfile

The lockfile name changes:

```text
pnpm-lock.yaml
```

That is one of the quickest signals that a repository uses pnpm.

## Installing pnpm

The official pnpm installation docs recommend Corepack as a modern option, with one important note: Corepack should be updated first because of outdated signature issues in older versions.

A modern setup looks like this:

```bash
npm install --global corepack@latest
corepack enable pnpm
corepack use pnpm@latest-10
```

The last command adds a `packageManager` field to `package.json`, which helps a project declare the pnpm version it expects.

That is useful for consistency across a team.

## A good mental model for pnpm

> `pnpm` is a package manager for the same kind of projects as `npm`, but it is often chosen for efficiency, consistency, and workspace-heavy repositories.

That is enough context to start using its daily commands.
