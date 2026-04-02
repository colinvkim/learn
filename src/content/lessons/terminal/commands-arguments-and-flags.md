---
title: Commands, arguments, and flags
description: Learn how terminal commands are structured so command lines stop looking like undifferentiated text.
course: terminal
order: 6
status: published
---

A terminal command usually has a simple structure:

```text
command argument flag
```

That structure matters because different parts of the line play different roles.

## The command

The **command** is the program you want to run.

Examples:

- `ls`
- `Get-ChildItem`
- `cd`
- `git`
- `pnpm`

## Arguments

An **argument** is a value passed to the command.

Examples:

```bash
Set-Location src
Remove-Item notes.txt
git switch main
```

Here:

- `src` is an argument to `Set-Location`
- `notes.txt` is an argument to `Remove-Item`
- `main` is an argument to `git switch`

## Flags

A **flag** changes how the command behaves.

Examples:

```bash
Get-ChildItem -Force
git commit -m "Add README"
pnpm install --save-dev typescript
```

Here:

- `-Force` changes what `Get-ChildItem` shows
- `-m` changes how `git commit` receives the commit message
- `--save-dev` changes where `pnpm install` records the dependency

## Why this distinction matters

Beginners often see a command line as one long piece of text.

It is easier to reason about if you separate it into parts:

- what program is running?
- what target is it operating on?
- what flags are modifying the behavior?

That is the pattern that makes new commands easier to read later.
