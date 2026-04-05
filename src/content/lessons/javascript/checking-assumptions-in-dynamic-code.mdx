---
title: "Checking assumptions in dynamic code"
description: "Learn how to verify that data has the shape and type you expect, and how to write code that is resilient to the unpredictability of dynamic values."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

In a statically typed language, the compiler checks that you are not passing a string where a number is expected. In JavaScript, nothing checks this automatically at compile time. Every assumption about data shape is a potential bug.

## Common unsafe assumptions

```javascript
// Assuming the API returns an array
users.map((u) => u.name);  // crashes if users is undefined

// Assuming a nested property exists
config.settings.theme.color;  // crashes if any level is missing

// Assuming a value is an array
items.length;  // works for arrays, but what if items is a string?

// Assuming a function exists
obj.doSomething();  // crashes if doSomething is undefined
```

Each of these works in the ideal case. Any deviation causes a runtime error.

## Safe access patterns

### Optional chaining

`?.` short-circuits to `undefined` instead of throwing:

```javascript
const color = config?.settings?.theme?.color;
// undefined if any level is missing — no crash
```

### Nullish coalescing for defaults

`??` provides a fallback when a value is `null` or `undefined`:

```javascript
const pageSize = response?.pagination?.limit ?? 20;
```

### Type guards before operations

Check the type before performing type-specific operations:

```javascript
function displayItems(items) {
  if (!Array.isArray(items)) {
    console.warn("Expected an array, got:", typeof items);
    return;
  }

  return items.map((item) => item.name).join(", ");
}
```

## Assertion functions

Assertion functions throw if a condition is not met, narrowing the type for the rest of the function:

```javascript
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function processOrder(order) {
  assert(order, "Order is required");
  assert(Array.isArray(order.items), "Order items must be an array");

  // After assertions, we can safely assume the shape
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return { ...order, total };
}
```

Assertions centralize validation and make the expected shape explicit.

## Defensive iteration

When iterating over data from external sources, validate each element:

```javascript
function renderProducts(products) {
  if (!Array.isArray(products)) {
    return "<p>No products available</p>";
  }

  return products
    .filter((p) => p && typeof p === "object" && typeof p.name === "string")
    .map((p) => `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${typeof p.price === "number" ? `$${p.price}` : "Price unavailable"}</p>
      </div>
    `)
    .join("");
}
```

The filter removes invalid elements before mapping. One bad product does not crash the entire list.

## Checking function existence before calling

```javascript
if (typeof callback === "function") {
  callback(result);
}

// Or use optional chaining
callback?.(result);
```

This prevents `TypeError: x is not a function` when a callback is optional.

## Logging assumptions during development

During development, log assumptions to verify they hold:

```javascript
function loadData(data) {
  console.assert(Array.isArray(data), "data must be an array", data);
  console.assert(data.length > 0, "data must not be empty", data);
  console.assert(typeof data[0].id === "number", "data items must have numeric id", data[0]);

  // process data...
}
```

`console.assert` logs a message only when the condition is false. It does not throw, so it does not interrupt development flow.

<Note title="console.assert is not a production guard">
  <p><code>console.assert</code> only logs — it does not stop execution. Use assertion functions that throw in production code, or a validation library like Zod for thorough runtime type checking.</p>
</Note>

## When to validate and when to trust

Not every value needs validation. Some guidelines:

**Always validate:**
- API responses
- user input
- data from localStorage
- data from third-party libraries
- file contents

**Usually safe without validation:**
- values you created in the previous line
- values returned by your own validated functions
- hardcoded constants
- values narrowed by prior checks

## What to carry forward

- every assumption about data shape is a potential bug in dynamic code
- use `?.` for safe property access and `??` for defaults
- check types with `typeof`, `Array.isArray()`, and `instanceof` before type-specific operations
- assertion functions centralize validation and make expected shapes explicit
- filter out invalid elements before iterating over external data
- check function existence with `typeof x === "function"` or `x?.()` before calling
- `console.assert` is useful during development to verify assumptions
- always validate external data; internal data from your own code is usually safe

Defensive habits prevent the most insidious bugs — the ones that only appear with specific data in production. The next unit covers tooling — the tools that make working with JavaScript more reliable and efficient.
