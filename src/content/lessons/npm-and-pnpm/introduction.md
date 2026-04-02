---
title: Introduction
description: "Start with the big picture: what npm and pnpm are, why package managers exist, and what this course will help you understand."
course: npm-and-pnpm
order: 1
status: published
---

If you are new to modern JavaScript tooling, `npm` and `pnpm` can seem more complicated than they really are.

They appear very early in tutorials, project setup guides, GitHub repositories, and terminal commands. It is common to see `npm install`, `pnpm add`, or `pnpm dev` before it is clear what those commands are actually doing.

That confusion is normal. The names are specific, but the underlying job is straightforward.

`npm` and `pnpm` are package managers for the Node.js ecosystem.

Their role is practical:

- record what a project depends on
- install those dependencies
- keep installs reproducible with a lockfile
- run project commands such as `dev`, `build`, and `test`

In other words, they help a project answer a small set of recurring questions:

- What packages does this project need?
- Which exact versions are being used?
- How should those packages be installed on another machine?
- Which commands should a developer run to work on the project?

That is the problem space for this course.

## What this course is trying to teach

This course is not only a list of commands.

The goal is to build a mental model that makes the commands understandable. Once that model is clear, the command names stop feeling arbitrary.

By the end of the course, you should be able to explain:

- what a package manager does
- what a package is in this ecosystem
- what `package.json` and a lockfile are for
- why `npm install` and `pnpm add` are not the same command
- why some teams stay with `npm` and others choose `pnpm`
- which small set of commands matters most in day-to-day work

## Why the course starts with npm

The course begins with `npm` for a practical reason: it is the default package manager that ships with Node.js, and it is the one most learners encounter first.

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

This means the course is not about choosing a winner. It is about understanding the role of each tool well enough to make good decisions in real projects.

## What to expect from the lessons

The first part of the course explains `npm` in slow, concrete terms.

That includes:

- what `npm` is
- what `package.json` does
- what happens when you install a package
- how scripts and lockfiles fit into the workflow

The next part introduces `pnpm` with the same kind of practical framing.

That includes:

- what stays the same between `npm` and `pnpm`
- which commands are different
- why teams adopt pnpm in the first place

The final part compares them directly and ends with a practical recommendation.

## A useful way to read this course

If you are a complete beginner, move slowly and focus on meaning before memorization.

Try to keep asking:

- what file is this command changing?
- is this command installing existing dependencies, or adding a new one?
- is this package needed for the app to run, or only for development?
- what is the lockfile protecting me from?

Those questions will do more for your understanding than memorizing a command list.

## The main idea to carry forward

`npm` and `pnpm` are tools for organizing dependency management in Node.js projects.

They are not separate worlds. They are two ways of handling the same kind of project setup and workflow. Once that idea is clear, the rest of the course becomes much easier to follow.
