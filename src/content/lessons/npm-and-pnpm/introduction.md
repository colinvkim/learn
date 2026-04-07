---
title: Introduction
description: "Start with the big picture: what npm and pnpm are, why package managers exist, and what you should understand before using them."
course: npm-and-pnpm
status: published
---

`npm install`, `pnpm add`, `pnpm dev` — these commands show up everywhere in JavaScript tutorials and project guides, often before it is clear what they actually do.

`npm` and `pnpm` are package managers for the Node.js ecosystem. Their job is straightforward once you know the pieces:

- a **package** is a reusable piece of code
- a **package manager** is the tool that installs and tracks packages
- a **registry** is the place packages are published and downloaded from

This course focuses on the package-manager side of that system.

Their role is practical:

- record what a project depends on
- install those dependencies
- keep installs reproducible with a lockfile
- run project commands such as `dev`, `build`, and `test`

## Why start with npm

`npm` comes first for a practical reason: it is the default package manager that ships with Node.js, and it is the one most learners encounter first.

That makes it the best baseline for understanding the broader ideas:

- packages
- dependencies
- scripts
- lockfiles
- project setup

Once those ideas are clear, `pnpm` becomes much easier to evaluate on its own terms.

## Why pnpm matters too

If `npm` already exists, the natural question is why `pnpm` matters at all.

The short answer is that many developers and teams want a different workflow for the same ecosystem. `pnpm` is still a package manager for Node.js projects, but it is often chosen for reasons such as:

- faster repeated installs
- more efficient use of disk space
- a strong fit for workspaces and monorepos
- command patterns some teams find clearer

This is not about choosing a winner. It is about understanding the role of each tool well enough to make good decisions in real projects.

## What this course covers

The first part explains `npm` in slow, concrete terms — what it is, what `package.json` does, what happens when you install a package, and how scripts and lockfiles fit in.

The next part introduces `pnpm` with the same practical framing: what stays the same, which commands differ, and why teams adopt it.

The final part compares them directly and ends with a recommendation.

## Reading advice for beginners

If you are a complete beginner, move slowly. Focus on understanding what each command does before memorizing the commands themselves.

Useful questions to keep asking:

- what file is this command changing?
- is this installing existing dependencies, or adding a new one?
- is this package needed for the app to run, or only for development?
- what is the lockfile protecting me from?

Those will do more for your understanding than memorizing a command list.

## The main idea

`npm` and `pnpm` are two ways of handling the same job: dependency management in Node.js projects. They are not separate worlds. Understanding what they do makes the rest of the material much easier to follow.
