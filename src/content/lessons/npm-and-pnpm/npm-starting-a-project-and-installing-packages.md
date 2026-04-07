---
title: "npm: starting a project and installing packages"
description: Learn what package.json is, how npm init works, and how dependencies get added to a project.
course: npm-and-pnpm
status: published
---

This lesson covers the files and commands you will run when starting an npm project.

## `package.json` is the project manifest

Most JavaScript projects have a `package.json` file.

This is the main file npm reads to understand the project.

It commonly includes:

- the project name
- the project version
- scripts
- dependencies
- development dependencies

If there is one file to remember from this lesson, it is `package.json`.

## Creating `package.json`

To create a `package.json` interactively in the current directory:

```bash
npm init
```

If you want npm to create one immediately with default values:

```bash
npm init -y
```

This is a common starting point for a new project that is not being scaffolded by another tool.

In many real projects, you will not create `package.json` by hand. A starter command such as `create-astro`, `create-vite`, or `create-next-app` will usually create it for you. What matters is that npm uses this file as the project's manifest.

## The two meanings of `npm install`

This is one of the first places beginners get confused, because the same command has two common forms.

### `npm install`

When you run `npm install` with no package name, npm installs the dependencies that are already listed in the project.

This is what you usually run after cloning a repository.

If the project already has a lockfile, `npm install` uses that lockfile as part of deciding what should be installed.

### `npm install <package>`

When you run `npm install` with one or more package names, npm adds new dependencies to the project and installs them.

For example:

```bash
npm install react
```

This installs `react` and adds it to `dependencies`.

You can also add more than one package in the same command:

```bash
npm install react react-dom
```

That is useful when the packages are part of the same setup step.

## `dependencies` and `devDependencies`

Packages do not all serve the same role.

Packages that are needed when the application runs usually go in `dependencies`.

Examples:

- `react`
- `astro`
- `express`

Packages that are only needed while developing, testing, or building usually go in `devDependencies`.

Examples:

- `typescript`
- `eslint`
- `vitest`
- `prettier`

To add a development dependency:

```bash
npm install -D typescript
```

You can install several development dependencies at once:

```bash
npm install -D typescript eslint prettier
```

For a beginner, a useful shortcut is this:

- if the package is needed for the app to run, it is usually a dependency
- if the package is only helping you build, check, test, or format the project, it is usually a dev dependency

### Peer dependencies

Some packages declare peer dependencies — packages they expect your project to provide. If a peer dependency is missing, npm may warn but will still install the package. To install peer dependencies automatically:

```bash
npm install react --save-peer
```

Or when installing a package with peer dependencies, npm 7+ installs them automatically by default.

## `optionalDependencies`

Some packages improve a project but are not critical if they fail to install. These can be listed as optional dependencies.

When an optional dependency fails to install, npm continues the installation process instead of stopping. This is useful for packages that provide enhancements but are not essential.

Examples:

- A package with native code that might not compile on all platforms
- An analytics package that improves the project but isn't required
- A platform-specific optimization

To add an optional dependency:

```bash
npm install -O fsevents
```

The package will be recorded in `optionalDependencies` in `package.json`. If installation succeeds, it behaves like a regular dependency. If it fails, npm logs a warning but continues.

## Global tools

Some tools are meant for your entire system, not just one project. For details on global vs local installation, see the [global tools lesson](/courses/npm-and-pnpm/npm-and-pnpm-global-tools-vs-local-tools).

## What actually changes when you install something

When you add a package with npm, three parts of the project usually change:

1. `package.json` is updated so the dependency is recorded.
2. `package-lock.json` is updated so the exact resolved versions are recorded.
3. `node_modules` is updated so the package is available on disk.

That is why dependency changes often appear in more than one place.

## What `node_modules` is

After installation, you will usually see a `node_modules` directory.

This is where npm places installed packages for the project.

It is managed by the package manager. In normal project work, you do not edit files there directly.

## One habit that prevents confusion

When dependencies change:

1. review the `package.json` change
2. review the `package-lock.json` change
3. commit both files together

That keeps dependency history understandable and makes project setup more reproducible for everyone else.
