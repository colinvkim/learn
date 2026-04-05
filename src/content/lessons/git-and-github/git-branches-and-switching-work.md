---
title: "Git: branches and switching work"
description: Learn why branches exist, how to create them, and how they help keep separate tasks from colliding.
course: git-and-github
status: published
---

Branches are one of the main reasons Git works well for real projects.

## A branch is a separate line of work

If all work happened directly on one branch, unfinished changes would constantly mix together.

Branches solve that by giving each task its own space.

For example:

- one branch can hold a bug fix
- another branch can hold a new feature
- the main branch can stay stable until work is ready

## `git switch` changes which branch you are working on

To move to an existing branch:

```bash
git switch main
```

The Git docs describe `git switch` as updating the working tree and index to match the branch you switch to.

In practice, that means the files on disk change to reflect that branch.

## `git switch -c` creates a new branch and moves to it

To create a new branch and switch to it immediately:

```bash
git switch -c fix-login-button
```

This is the common beginner-safe way to start a piece of work.

## Why this matters in everyday work

A clean branch workflow helps you:

- isolate one task from another
- review work more clearly
- avoid mixing unrelated changes into the same commit history
- open cleaner pull requests later on GitHub

## A practical rule

Create a branch when the work deserves its own checkpointed line of development.

That usually includes:

- bug fixes
- new features
- refactors
- documentation changes that are part of a specific task

## What changes when you switch branches

When you switch branches, Git updates the working tree to match that branch.

That means:

- some files may change
- some files may appear or disappear
- the next commits will belong to the branch you switched to

This is why branches are more than labels. They change which line of history you are actively extending.

## Deleting branches when work is done

After a branch has been merged, you can delete it to keep your repository clean:

```bash
git branch -d fix-login-button
```

This only deletes the branch if it has been fully merged. If Git refuses because the branch contains unmerged commits, use:

```bash
git branch -D fix-login-button
```

`-D` force-deletes the branch regardless of merge status. Use it only when you are certain the work is no longer needed.

You can only delete a branch you are not currently on. Switch to `main` first:

```bash
git switch main
git branch -d fix-login-button
```
