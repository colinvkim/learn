---
title: "Avoiding duplication and choosing when to abstract"
description: "Learn how to spot repeated code, when to extract it into a shared function, and when duplication is actually the safer choice."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Duplication is the primary source of maintenance burden. When the same logic appears in multiple places, a change requires updates everywhere. Miss one, and you have a bug.

## The rule of three

A common guideline: tolerate duplication once, notice it twice, extract it the third time.

```javascript
// First occurrence — fine as-is
function formatUserName(user) {
  return user.name ? user.name.toUpperCase() : "ANONYMOUS";
}

// Second occurrence — notice the pattern
function formatAdminName(admin) {
  return admin.name ? admin.name.toUpperCase() : "ANONYMOUS";
}

// Third occurrence — extract
function formatName(entity) {
  return entity.name ? entity.name.toUpperCase() : "ANONYMOUS";
}

// Now all three call the shared function
function formatUserName(user) { return formatName(user); }
function formatAdminName(admin) { return formatName(admin); }
function formatGuestName(guest) { return formatName(guest); }
```

In practice, the first two occurrences might have been using `formatName` from the start. The rule of three is a heuristic to avoid premature abstraction, not a license to copy-paste.

## What counts as duplication

Duplication is not just identical code. It is **shared intent** expressed multiple times:

```javascript
// These look different but share intent — both validate required fields
if (!user.name) throw new Error("Name is required");
if (!user.email) throw new Error("Email is required");

// Extracted
function requireField(value, fieldName) {
  if (!value) throw new Error(`${fieldName} is required`);
}

requireField(user.name, "Name");
requireField(user.email, "Email");
```

## When duplication is safer than abstraction

Not all similarity should be merged. When two pieces of code happen to look alike but serve different purposes, merging them creates a false coupling:

```javascript
// These happen to be similar but serve different domains
function validateUserEmail(email) {
  if (!email.includes("@")) throw new Error("Invalid user email");
}

function validateOrderEmail(email) {
  if (!email.includes("@")) throw new Error("Invalid order contact email");
}
```

Merging these into one `validateEmail` function means a change to user validation could break order validation. The shared logic is trivial (`email.includes("@")`) — it does not justify coupling.

Duplication is cheaper than the wrong abstraction.

## Extracting to utility modules

When a shared function is used across multiple features, place it in a utility module:

```javascript
// utils/format.js
export function formatName(entity) {
  return entity?.name?.toUpperCase() ?? "ANONYMOUS";
}

export function formatDate(date) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString();
}
```

Features import what they need:

```javascript
// features/users.js
import { formatName, formatDate } from "../utils/format.js";
```

## Recognizing accidental coupling

A sign that an abstraction is too broad is when callers need conditional logic:

```javascript
// Bad — callers pass flags to control behavior
function fetchData(url, isUser, isAdmin) {
  const headers = {};
  if (isUser) headers["X-User"] = "true";
  if (isAdmin) headers["X-Admin"] = "true";
  return fetch(url, { headers });
}

// Better — separate functions for separate concerns
function fetchUser(url) {
  return fetch(url, { headers: { "X-User": "true" } });
}

function fetchAdmin(url) {
  return fetch(url, { headers: { "X-Admin": "true" } });
}
```

When a function needs flags to change its behavior, it is probably doing too much.

## What to carry forward

- the rule of three: tolerate, notice, extract
- duplication is shared intent, not just identical code
- extract repeated patterns into named functions
- place cross-cutting utilities in shared modules
- duplication is cheaper than the wrong abstraction — do not merge code that only looks similar
- functions that need flags to control behavior are probably doing too much

Avoiding duplication keeps code maintainable. The next lesson covers immutability as a practical habit.
