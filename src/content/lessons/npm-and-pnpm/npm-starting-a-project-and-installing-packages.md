---
title: "npm: starting a project and installing packages"
description: Learn what package.json is, how npm init works, and how dependencies get added to a project.
course: npm-and-pnpm
order: 3
status: published
---

This lesson introduces the files and commands most beginners meet immediately in an npm project.

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

## The two meanings of `npm install`

This is one of the first places beginners get confused, because the same command has two common forms.

### `npm install`

When you run `npm install` with no package name, npm installs the dependencies that are already listed in the project.

This is what you usually run after cloning a repository.

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

That habit makes dependency changes much easier to understand later.
