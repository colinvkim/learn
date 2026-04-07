---
title: "Git: what it is and why it exists"
description: Learn what Git actually does, what a repository is, and why version control matters before looking at commands.
course: git-and-github
status: published
---

Before going further, it helps to understand the problem Git solves.

## Git is a version control system

A version control system records changes to a project over time.

That means it can help you:

- see what changed
- group changes into meaningful checkpoints
- go back to an earlier state
- work on different tasks without mixing them together
- collaborate without constantly overwriting other people's work

In practice, Git is the version control system most developers use for source code.

## What a repository is

A Git project lives inside a **repository**.

A repository is the project files plus the Git data that records their history — commits, branches, and references to earlier states. When people say "repo," they mean this.

## What a commit is

A **commit** is a saved checkpoint in the repository's history.

A good mental model is:

> A commit is a named snapshot of the project at a particular point in time.

Commits matter because they let you work in small, understandable steps instead of treating the entire project as one moving blob of files.

## What a branch is

A **branch** is a line of work inside the repository.

Branches matter because they let you change the project without immediately mixing unfinished work into the main line of development.

For example:

- one branch might contain a bug fix
- another branch might contain a new feature
- the main branch can stay stable until that work is ready

## Git is local first

This is one of the most important beginner ideas.

Git works locally on your machine.

You can:

- create a repository
- make commits
- create branches
- inspect history

all without GitHub or any network connection.

That local-first design is why Git and GitHub need to be kept separate in your mind.

## Why developers rely on Git

Without Git, teams often end up with unclear file history, risky manual backups, and no clean way to isolate work.

Git replaces that with a structured model:

- a working project on disk
- a saved history of checkpoints
- branches for separate tasks
- merges when work is ready to come together

That is the foundation for everything that follows.
