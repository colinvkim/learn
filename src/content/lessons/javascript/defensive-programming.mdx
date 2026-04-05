---
title: "Defensive programming"
description: "Learn how to write JavaScript that handles bad input gracefully, validates assumptions, and fails with clear errors instead of silent corruption."
course: javascript
status: published
---

import Warning from "../../../components/content/Warning.astro";

JavaScript does not check types at compile time. Any value can be passed to any function. Defensive programming adds runtime checks that catch problems early and fail loudly.

## Check input at function boundaries

Validate data at the edges of your application — where data enters from APIs, user input, or external modules:

```javascript
function createUser(data) {
  if (!data || typeof data !== "object") {
    throw new TypeError("createUser requires an object");
  }

  if (typeof data.name !== "string" || data.name.trim() === "") {
    throw new TypeError("User must have a non-empty name");
  }

  if (typeof data.email !== "string" || !data.email.includes("@")) {
    throw new TypeError("User must have a valid email");
  }

  return {
    name: data.name.trim(),
    email: data.email.toLowerCase(),
    role: data.role || "user",
  };
}
```

The function validates before processing. Bad data throws immediately with a clear message instead of causing a cryptic error three steps later.

## Default values prevent undefined cascades

Provide defaults for optional properties so downstream code does not need to check for `undefined`:

```javascript
function renderCard({ title, subtitle, image, tags = [] }) {
  return `
    <div class="card">
      ${image ? `<img src="${image}" alt="" />` : ""}
      <h2>${title}</h2>
      ${subtitle ? `<p>${subtitle}</p>` : ""}
      <div class="tags">${tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
  `;
}
```

`tags` defaults to an empty array. Without this default, `tags.map()` would throw when `tags` is `undefined`.

## Fail fast, fail loudly

Silent failures are worse than crashes. When an assumption is violated, throw:

```javascript
function processOrder(order) {
  if (!order.items || !Array.isArray(order.items)) {
    throw new Error("Order must have an items array");
  }

  if (order.items.length === 0) {
    throw new Error("Order must have at least one item");
  }

  // Process the order — assumptions are validated
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return { ...order, total };
}
```

A thrown error is visible in the console and in monitoring. A silent wrong value propagates through the system and corrupts data.

## Type checking at runtime

JavaScript provides basic type checks:

```javascript
typeof value === "string";
typeof value === "number";
typeof value === "boolean";
typeof value === "function";
typeof value === "object";  // also true for null and arrays
typeof value === "undefined";

value === null;             // check for null specifically
Array.isArray(value);       // check for arrays
value instanceof Date;      // check for Date instances
```

Combine these for thorough validation:

```javascript
function isProduct(data) {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.name === "string" &&
    typeof data.price === "number" &&
    data.price > 0 &&
    (data.category === undefined || typeof data.category === "string")
  );
}
```

## Guard clauses simplify control flow

Instead of nesting checks, return early:

```javascript
// Nested — hard to read
function processPayment(payment) {
  if (payment) {
    if (payment.amount > 0) {
      if (payment.currency) {
        // finally do the work
      }
    }
  }
}

// Guard clauses — flat and clear
function processPayment(payment) {
  if (!payment) return;
  if (payment.amount <= 0) return;
  if (!payment.currency) return;

  // do the work
}
```

Guard clauses reduce nesting and make the "happy path" the main flow of the function.

## Handling missing data from APIs

APIs frequently return partial data. Handle this at the integration layer:

```javascript
function normalizeUser(apiUser) {
  return {
    id: apiUser.id ?? 0,
    name: apiUser.name ?? "Unknown",
    email: apiUser.email ?? "",
    avatar: apiUser.avatar_url ?? apiUser.avatar ?? "/default.png",
    role: apiUser.role ?? "viewer",
    createdAt: apiUser.created_at ? new Date(apiUser.created_at) : null,
  };
}
```

Every field has a fallback. The rest of the application works with consistent shapes regardless of what the API sends.

<Warning title="Defensive code is not a substitute for TypeScript">
  <p>Runtime validation catches errors that TypeScript would catch at compile time. For large projects, consider TypeScript to shift these checks to the type system. Defensive programming is still needed for external data that TypeScript cannot verify (API responses, user input, file contents).</p>
</Warning>

## What to carry forward

- validate input at function boundaries — where data enters the system
- provide default values for optional properties to prevent undefined cascades
- fail fast and loudly — throw on violated assumptions instead of silently continuing
- use `typeof`, `Array.isArray()`, and `instanceof` for runtime type checks
- guard clauses reduce nesting by returning early on invalid input
- normalize API responses into consistent shapes the rest of the code can rely on
- defensive programming complements but does not replace static type checking

Defensive code protects your application from the unpredictable outside world. The next lesson covers checking assumptions in dynamic code — the habits that prevent entire classes of bugs.
