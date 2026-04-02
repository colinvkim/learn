---
title: "GitHub: cloning and syncing work"
description: Learn how to start from an existing GitHub repository and how to keep your local work in sync with the remote.
course: git-and-github
order: 10
status: published
---

If a repository already exists on GitHub, the usual starting point is not `git init`. It is `git clone`.

## `git clone` copies a remote repository locally

To create a local copy of an existing GitHub repository:

```bash
git clone https://github.com/OWNER/REPO.git
```

This gives you:

- a local working copy of the repository
- the Git history
- a configured remote named `origin`

## `git fetch` downloads remote updates without changing your current branch

To bring down remote information without integrating it into your current work yet:

```bash
git fetch
```

This is useful when you want to inspect what changed before updating your current branch.

## `git pull` fetches and then updates the current branch

To download remote changes and integrate them into the current branch:

```bash
git pull
```

This is often the quick everyday sync command, but it helps to understand what it combines.

In broad terms:

- `git fetch` gets the new remote information
- `git pull` fetches and then updates the current branch

## When to use clone, fetch, and pull

Use:

- `git clone` when you are getting the repository for the first time
- `git fetch` when you want the latest remote information without immediately updating your branch
- `git pull` when you want to bring the current branch up to date

## A practical default

For beginner workflows:

- clone the repository once
- pull before starting a new piece of work
- fetch when you want a more cautious view of remote changes first

That default is simple and safe enough for most day-to-day use.
