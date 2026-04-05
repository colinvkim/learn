---
title: "GitHub: what it is and how it relates to Git"
description: Learn what GitHub adds on top of Git and why remote hosting changes how people collaborate.
course: git-and-github
status: published
---

Git works locally. GitHub adds a shared remote layer.

You already know that Git handles commits, branches, merges, and local history on its own.

This lesson covers what GitHub actually provides and why a remote layer changes how you collaborate.

## GitHub hosts Git repositories

GitHub is a platform for hosting and collaborating on Git repositories.

At its most basic, GitHub provides:

- a remote place to store your repository
- a web page you can share with others
- a way for multiple people to clone, push, and pull the same project

That alone is useful if you work across multiple machines or want your code backed up remotely.

## GitHub adds collaboration features

Beyond hosting repositories, GitHub provides:

- **pull requests** for proposing and reviewing changes
- **code review** tools for commenting on and approving changes
- **issues** for tracking bugs, feature requests, and tasks
- **Actions** for running automated checks and workflows

These features sit on top of Git but are not part of Git itself.

## Important remote terms

Three terms matter early:

- a **remote repository** is a copy of your repository hosted somewhere else
- `origin` is the common default name for your main remote
- a **push** sends your local commits to a remote repository
- a **pull** fetches and integrates changes from the remote

Those ideas become practical as soon as a project moves from one machine to shared work.

## Why GitHub matters in everyday development

Git alone can track local history, but most real projects need more than local history.

Teams usually need to:

- share repositories with others
- collaborate across multiple machines
- review proposed changes before they land in the main branch
- discuss work and track bugs outside of code

That is the layer GitHub is commonly used for.

## The GitHub workflow in brief

The typical GitHub collaboration loop looks like:

1. push a branch to `origin`
2. open a pull request on GitHub
3. others review and comment
4. push follow-up commits to the same branch
5. merge the pull request when approved

Each of those steps relies on Git locally and GitHub remotely.

## The main idea to carry forward

GitHub does not replace Git. It sits on top of it.

Git handles local history. GitHub handles shared history, review, and coordination.

The next lessons cover how to actually connect, clone, push, and use those collaboration features.
