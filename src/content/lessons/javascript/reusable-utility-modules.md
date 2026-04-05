---
title: "Reusable utility modules"
description: "Learn how to write utility functions that are general enough to reuse across projects, focused enough to be reliable, and clean enough to read at a glance."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Utility modules contain functions that solve a common problem and can be imported wherever needed. They are the building blocks that keep the rest of the codebase free of duplication.

## What makes a good utility

A good utility function:

- does **one thing** and does it well
- does **not depend** on global state or side effects
- accepts all the data it needs as arguments
- returns a result instead of mutating inputs
- has a name that describes what it does

```javascript
// Good utility — focused, no side effects, returns a new value
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
```

```javascript
// Not a good utility — depends on global state
function clamp(value) {
  return Math.max(globalMin, Math.min(globalMax, value));
}
```

The first version is reusable anywhere. The second version ties itself to variables that must exist in the global scope.

## Organizing a utility module

Keep related utilities in the same module. Group by purpose, not by size:

```javascript
// format.js
export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

export function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
```

```javascript
// validate.js
export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isRequired(value) {
  return value !== null && value !== undefined && value !== "";
}

export function minLength(value, min) {
  return value.length >= min;
}
```

Each module covers one concern: formatting or validation. Consumers import only what they need.

## Avoiding over-utility

Not every function needs to be in a utility module. Some functions are specific to one feature and should live there:

```javascript
// Bad — too specific for a utility
export function getUserDisplayName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```

This belongs in a `users.js` module, not a general `format.js` utility. The rule: if a function would only ever be used in one place, it does not need to be a utility.

## Pure functions make the best utilities

A **pure function** always returns the same output for the same input and has no side effects:

```javascript
// Pure — same input always gives same output, no side effects
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// Impure — depends on Date.now(), different result each call
function getTimestamp() {
  return Date.now();
}
```

Pure functions are predictable, testable, and composable. They make the best utilities. But not every utility can be pure — logging, random numbers, and time access are inherently impure. That is fine as long as the impurity is clear.

<Tip title="Test your utilities">
  <p>Utilities are imported across the codebase. A bug in a utility affects everything that uses it. Even simple utilities benefit from basic tests that cover normal input, edge cases, and invalid values.</p>
</Tip>

## Exporting utilities conditionally

Sometimes a utility needs a default value or configuration:

```javascript
// api.js
export function createApiClient(baseUrl) {
  return {
    get(path) {
      return fetch(`${baseUrl}${path}`).then((r) => r.json());
    },
    post(path, data) {
      return fetch(`${baseUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((r) => r.json());
    },
  };
}
```

This is a factory function that returns a configured object. It is more flexible than hardcoding `baseUrl` as a constant.

## What to carry forward

- utilities should do one thing, accept all needed data as arguments, and return results
- avoid dependencies on global state — pass everything the function needs as a parameter
- group utilities by purpose in modules like `format.js` or `validate.js`
- pure functions make the best utilities — predictable, testable, composable
- not every function needs to be a utility — feature-specific functions belong in feature modules
- utilities benefit from testing because they are used across the codebase

Utilities are the glue between modules. The next unit covers asynchronous JavaScript — the paradigm for handling operations that take time.
