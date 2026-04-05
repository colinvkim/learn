---
title: "npm: what it is and why it exists"
description: Learn what npm actually does, what a package is, and why JavaScript projects need a package manager in the first place.
course: npm-and-pnpm
status: published
---

Before looking at commands, it helps to understand the problem `npm` solves.

## Start with the word package

Most JavaScript projects are built from reusable pieces of code.

Those pieces might be:

- a framework such as React or Astro
- a tool such as TypeScript or ESLint
- a small library that solves one focused problem

In this ecosystem, reusable code like this is usually called a **package**.

A project rarely uses just one package. It usually depends on many of them.

## What npm is

`npm` is the default package manager for Node.js.

In practical terms, that means two things:

1. It usually comes with Node.js.
2. It gives JavaScript projects a standard way to declare, install, and update packages.

One detail is worth knowing early: people sometimes use the word `npm` to refer to more than one thing.

Depending on the context, `npm` may refer to:

- the CLI tool you run in the terminal
- the public package registry at `npmjs.com`
- the broader package ecosystem around that registry

In this course, `npm` usually means the package manager CLI unless the registry is mentioned explicitly.

## What problem npm solves

Without a package manager, every project would have to manage its dependencies by hand.

That would mean:

- finding packages manually
- downloading them manually
- putting them in the right place manually
- repeating that process for updates
- explaining the exact dependency setup to every other person who works on the project

That approach does not scale well. It is slow, inconsistent, and difficult to reproduce across machines.

`npm` turns that work into a predictable system.

## The four jobs npm does

### 1. It records what a project depends on

That record usually lives in `package.json`.

`package.json` often contains:

- the project name
- the project version
- the dependencies the project needs
- scripts such as `dev`, `build`, or `test`

### 2. It installs packages

If a project needs a package, `npm` can download it and make it available to the project.

For example:

```bash
npm install react
```

That command installs the `react` package and records it in the project.

By default, npm installs packages from the public npm registry. That is one reason the phrases "npm package" and "JavaScript package" often overlap in day-to-day conversation.

### 3. It records the exact dependency graph that was installed

This is the job of `package-lock.json`.

That file matters because direct dependencies are only part of the story. A package such as `react` may depend on other packages, and those packages may depend on still more packages.

The lockfile records the exact resolved versions so installs stay reproducible.

### 4. It runs project scripts

Projects often define scripts in `package.json`, for example:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build"
  }
}
```

Then npm can run them:

```bash
npm run dev
npm run build
```

This gives the project a small shared command surface instead of requiring everyone to memorize underlying tool commands.

## What Node.js has to do with this

`npm` belongs to the broader Node.js ecosystem.

The short version is:

- Node.js runs JavaScript outside the browser.
- Many JavaScript tools are built for Node.js.
- `npm` is the package manager that ships with that ecosystem.

You do not need deep Node.js knowledge before learning `npm`. You only need to recognize that `npm` is part of the same environment.

## A useful mental model

> `npm` helps a project describe what it needs, install those things, and run common project tasks.

That is the core idea behind everything that follows.
