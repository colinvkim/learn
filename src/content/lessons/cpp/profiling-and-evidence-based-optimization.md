---
title: Profiling and evidence-based optimization
description: Learn how to measure C++ performance before changing code.
course: cpp
status: published
---

Profiling measures where a program spends time or resources. It protects you from optimizing the wrong thing.

## Start with a question

Good profiling begins with a concrete question:

- Why does startup take two seconds?
- Which function dominates frame time?
- Why does this parser allocate so much?
- Which input size changes behavior?

Without a question, profiling data becomes noise.

## Build realistic inputs

Measure with data that resembles real use. Tiny inputs can hide allocation and cache behavior. Artificial worst cases can mislead if they never happen in production.

Keep small reproducible cases for debugging, but use realistic cases for performance decisions.

## Measure before and after

Record baseline behavior before changing code:

```text
parse 100 MB log: 1.82 s
peak memory: 410 MB
```

Change one meaningful thing, then measure again:

```text
parse 100 MB log: 1.21 s
peak memory: 260 MB
```

If the result is not better in the target scenario, revert or rethink.

## Common findings

Profiles often reveal:

- repeated allocation
- unnecessary copying
- slow I/O patterns
- inefficient data structures
- work repeated inside loops
- logging or formatting on hot paths

These are design issues more often than tiny syntax issues.

## Avoid micro-optimizing early

Do not replace clear code with clever code because it feels faster. Compilers are good at optimizing straightforward code.

Prefer changes that improve both structure and performance:

- reserve vector capacity when size is known
- use references to avoid large read-only copies
- store data contiguously when identity is not needed
- avoid repeated parsing of the same input

## What to carry forward

- profiling answers a specific performance question
- realistic inputs matter
- measure before and after changes
- many performance problems are data-structure problems
- clear code is often easier for compilers and humans
- evidence beats instinct

Next, you will organize a small multi-file C++ project.
