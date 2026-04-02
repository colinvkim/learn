---
title: "pnpm: everyday commands"
description: Learn the small set of pnpm commands you actually need to start using it in real projects.
course: npm-and-pnpm
order: 6
status: published
---

Once pnpm is installed, the daily command set is small.

The most important thing to learn first is the difference between `pnpm install` and `pnpm add`.

## `pnpm install` installs what the project already declares

To install the dependencies that are already listed in a project:

```bash
pnpm install
```

This is the command to run after cloning a repository, switching branches, or pulling dependency changes from someone else.

This parallels `npm install`. The difference is that in pnpm, `install` is mainly about bringing the project into the state it already declares.

## `pnpm add` adds new packages to the project

To add a normal dependency:

```bash
pnpm add react
```

To add more than one package at once:

```bash
pnpm add react react-dom
```

To add a development dependency:

```bash
pnpm add -D typescript
```

To add several development dependencies in one step:

```bash
pnpm add -D typescript eslint prettier
```

This is one of the clearest differences from npm. In pnpm, `add` is the main verb for introducing new dependencies.

For many learners, this naming is easier to reason about because it separates "install what the project already has" from "add something new to the project."

## Removing a package

To remove a dependency:

```bash
pnpm remove react
```

This updates the project manifest, the lockfile, and the installed dependencies.

## Running scripts

If the project defines scripts in `package.json`, pnpm can run them directly.

Examples:

```bash
pnpm dev
pnpm build
pnpm test
```

The pnpm CLI docs note that `pnpm <cmd>` is the equivalent of `npm run <cmd>` for common script usage. That shorter form is one reason many developers find pnpm pleasant to use.

## Running a locally installed tool

If a tool is already installed in the project, you can run its binary with:

```bash
pnpm exec eslint .
```

This is useful when you want to invoke the tool directly instead of going through a script.

It is the direct parallel to `npm exec`.

## Running a tool one time

To run a package without saving it as a dependency, use:

```bash
pnpm dlx create-vite@latest my-app
```

This is useful for:

- scaffolding a new project
- trying a command once
- avoiding a permanent dependency for a one-time task

It is the pnpm parallel to `npx`.

## The lockfile matters in pnpm too

In a pnpm project, the lockfile is `pnpm-lock.yaml`.

As with npm, it should be committed. It is part of the dependency state of the project.

## pnpm in CI

For CI, installs should be reproducible and should fail when the dependency state is out of sync.

A strict explicit command is:

```bash
pnpm install --frozen-lockfile
```

The official pnpm install docs say that `--frozen-lockfile` defaults to `true` in CI environments when a lockfile is present. That means CI is expected to reject drift instead of silently rewriting the lockfile.
