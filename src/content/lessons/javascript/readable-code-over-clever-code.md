---
title: "Readable code over clever code"
description: "Learn how to prioritize clarity over brevity, when to abstract and when not to, and the design habits that separate maintainable code from code that no one wants to touch."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

The lessons in this unit have built toward a single principle: **write code that is easy to read**. Every other quality — performance, brevity, cleverness — is secondary.

## Readable code over clever code

Clever code is short but hard to understand. Readable code is obvious at a glance.

```javascript
// Clever — what does this do?
const x = a ?? (b && c) || d;

// Readable — intent is clear
const fallback = b && c ? c : d;
const result = a ?? fallback;
```

```javascript
// Clever — nested ternary
const label = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Readable — clear branching
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}
```

The readable version is longer but takes zero effort to understand. The clever version requires pausing to parse the logic.

## When to abstract

Abstraction is good when it reduces complexity. It is bad when it adds indirection without reducing complexity.

**Abstract when:**
- the same logic appears in three or more places
- the extracted piece has a name that communicates intent better than the code itself
- the abstraction simplifies the caller's code

**Do not abstract when:**
- the code only appears twice and is simple
- the abstraction requires flags or conditionals to handle differences
- the extracted name does not add clarity
- the reader must jump between files to understand the flow

## Small steps over big refactors

Refactor in small, verifiable steps:

1. Identify the code to change
2. Make the smallest possible edit
3. Run the tests or verify manually
4. Commit
5. Repeat

Big refactors that touch many files at once are risky. They are hard to review, hard to bisect, and easy to break.

## Comments explain why, not what

Good code explains **what** it does through names and structure. Comments explain **why** a decision was made:

```javascript
// Bad comment — repeats the code
// Check if user is active
if (user.active) { ... }

// Good comment — explains the reason
// Inactive users must still receive password reset emails for security compliance
if (user.active || emailType === "password-reset") { ... }
```

If you find yourself writing a comment that explains what the next three lines do, consider whether the code itself could be clearer with better names or extraction.

## The test of good code

Good code is code that someone new to the project can read and understand without asking the author questions. That means:

- names describe intent, not implementation
- functions are small enough to scan
- control flow is linear and obvious
- data shapes are consistent
- side effects are visible
- error paths are handled, not ignored

## What this course prepared you for

This course covered the full JavaScript landscape:

- **What JavaScript is** — how it runs, where it runs, and how it differs from compiled languages
- **Core syntax** — variables, types, operators, control flow, and loops
- **Functions** — declarations, arrows, closures, and higher-order patterns
- **Data manipulation** — array methods, object operations, destructuring, and immutability
- **Objects and classes** — prototypes, `this`, inheritance, and composition
- **Modules** — imports, exports, project structure, and utilities
- **Async JavaScript** — the event loop, callbacks, promises, and async/await
- **The DOM** — selecting, updating, events, and forms
- **Debugging** — error handling, stack traces, DevTools, and common mistakes
- **External data** — JSON, APIs, and defensive programming
- **Tooling** — Node, npm, linting, formatting, and bundlers
- **Design habits** — naming, small functions, immutability, and readability

With these foundations, you can write real JavaScript applications. The TypeScript course builds on this by adding compile-time type checking, catching many of the runtime errors this course taught you to handle defensively.

## What to do next

- build something — a small app, a utility, a browser feature
- read other people's code — open source projects are full of patterns and anti-patterns
- write tests — they force you to think about interfaces and edge cases
- consider TypeScript — it catches at compile time what this course taught you to check at runtime
- keep the habits simple — good names, small functions, no surprise mutations

The best way to improve is to write code, read code, and refine the habits that make both easier.
