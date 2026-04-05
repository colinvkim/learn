---
title: "GitHub: what it is and how it relates to Git"
description: Learn what GitHub adds on top of Git and why remote hosting changes how people collaborate.
course: git-and-github
order: 9
status: published
---

Git works locally. GitHub adds a shared remote layer.

## GitHub hosts Git repositories

GitHub is a platform for hosting and collaborating on Git repositories.

That means it can provide:

- remote repository hosting
- repository pages in a browser
- collaboration features such as pull requests and review
- issue tracking
- automated checks through GitHub Actions

## GitHub does not replace Git

This is the most important distinction to preserve.

Git still handles:

- commits
- branches
- merges
- local history

GitHub adds:

- a place to store the repository remotely
- a way for multiple people to share and sync work
- a browser-based collaboration layer

## Important remote terms

Three terms matter early:

- a **remote repository** is a repository hosted somewhere else
- `origin` is the common default name for the main remote
- a **push** sends local commits to a remote repository

Those ideas become practical as soon as a project moves from one machine to shared work.

## Why GitHub matters in everyday development

Git alone can track local history, but most real projects need more than local history.

Teams usually need to:

- share repositories
- collaborate across multiple machines
- review proposed changes
- discuss work before merging it

That is the layer GitHub is commonly used for.
