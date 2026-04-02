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
- `cd`
- `git`
- `pnpm`

## Arguments

An **argument** is a value passed to the command.

Examples:

```bash
cd src
rm notes.txt
git switch main
```

Here:

- `src` is an argument to `cd`
- `notes.txt` is an argument to `rm`
- `main` is an argument to `git switch`

## Flags

A **flag** changes how the command behaves.

Examples:

```bash
ls -la
mkdir -p src/content
git commit -m "Add README"
```

Here:

- `-la` changes what `ls` shows
- `-p` changes how `mkdir` creates directories
- `-m` changes how `git commit` receives the commit message

## Why this distinction matters

Beginners often see a command line as one long piece of text.

It is easier to reason about if you separate it into parts:

- what program is running?
- what target is it operating on?
- what flags are modifying the behavior?

That is the pattern that makes new commands easier to read later.
