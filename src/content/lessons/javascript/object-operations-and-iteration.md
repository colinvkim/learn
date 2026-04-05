---
title: "Object operations and iteration"
description: "Learn how to work with object keys, values, and entries, merge objects, and iterate over object data in modern JavaScript."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Objects store named properties. Arrays have methods like `.map()` and `.filter()`. Objects do not — because object keys are arbitrary strings, there is no guaranteed order to iterate over. Instead, JavaScript provides utility functions for converting object data into iterable forms.

## `Object.keys`, `Object.values`, and `Object.entries`

These three methods extract different views of an object's data:

```javascript
const user = { name: "Ada", role: "engineer", active: true };

Object.keys(user);
// ["name", "role", "active"]

Object.values(user);
// ["Ada", "engineer", true]

Object.entries(user);
// [["name", "Ada"], ["role", "engineer"], ["active", true]]
```

Each returns an array, which means you can use array methods on the result:

```javascript
// Check if an object has a specific value
Object.values(user).includes("engineer");  // true

// Count properties
Object.keys(user).length;  // 3

// Transform entries into a new object
Object.entries(user)
  .filter(([key, value]) => typeof value === "string")
  .map(([key, value]) => [key, value.toUpperCase()]);
// [["name", "ADA"], ["role", "ENGINEER"]]
```

## Iterating over objects with `for...of`

Combine `Object.entries()` with `for...of` to iterate over key-value pairs:

```javascript
const settings = { theme: "dark", fontSize: 16, notifications: true };

for (const [key, value] of Object.entries(settings)) {
  console.log(`${key}: ${value}`);
}
// theme: dark
// fontSize: 16
// notifications: true
```

This is cleaner than `for...in` because `Object.entries()` returns only the object's own properties, not inherited ones.

## `Object.assign` merges objects

`Object.assign` copies properties from source objects into a target object:

```javascript
const defaults = { theme: "light", fontSize: 14, notifications: true };
const overrides = { theme: "dark", fontSize: 16 };

const settings = Object.assign({}, defaults, overrides);
// { theme: "dark", fontSize: 16, notifications: true }
```

The first argument is the target. Subsequent arguments are sources whose properties overwrite the target. Passing `{}` as the first argument avoids mutating `defaults`.

## Spread is the modern replacement

The spread operator provides a more readable way to merge objects:

```javascript
const settings = { ...defaults, ...overrides };
// { theme: "dark", fontSize: 16, notifications: true }
```

Spread is equivalent to `Object.assign` for simple merging. It is more common in modern code because it is shorter and the intent is clearer.

<Note title="Both are shallow merges">
  <p>Spread and <code>Object.assign</code> only copy the top level. Nested objects are shared by reference:</p>
</Note>

```javascript
const a = { nested: { x: 1 } };
const b = { ...a };

b.nested.x = 99;
console.log(a.nested.x);  // 99 — the nested object is shared
```

## Checking if a property is the object's own

`for...in` and `Object.keys()` only iterate over enumerable own properties. But the `in` operator checks the entire prototype chain:

```javascript
const obj = { name: "Ada" };

"name" in obj;            // true — own property
"toString" in obj;        // true — inherited from Object.prototype

obj.hasOwnProperty("name");     // true
obj.hasOwnProperty("toString"); // false
```

In modern code, `Object.hasOwn()` is preferred over `hasOwnProperty`:

```javascript
Object.hasOwn(obj, "name");     // true
Object.hasOwn(obj, "toString"); // false
```

## Creating objects with `Object.fromEntries`

`Object.fromEntries` is the inverse of `Object.entries` — it builds an object from key-value pairs:

```javascript
const pairs = [["name", "Ada"], ["role", "engineer"]];

const user = Object.fromEntries(pairs);
// { name: "Ada", role: "engineer" }
```

This is useful for converting filtered entries back into an object:

```javascript
const settings = { theme: "dark", fontSize: 16, notifications: true };

const stringSettings = Object.fromEntries(
  Object.entries(settings).filter(([key, value]) => typeof value === "string")
);

// { theme: "dark" }
```

## `Object.freeze` and `Object.seal`

JavaScript provides two ways to restrict object mutation:

`Object.freeze` prevents all changes — no adding, removing, or modifying properties:

```javascript
const config = Object.freeze({ apiUrl: "https://api.example.com" });

config.apiUrl = "https://other.com";  // silently fails in non-strict mode
config.newProp = "value";             // silently fails
```

`Object.seal` prevents adding or removing properties but allows modifying existing ones:

```javascript
const config = Object.seal({ apiUrl: "https://api.example.com" });

config.apiUrl = "https://other.com";  // works
config.newProp = "value";             // fails
```

Both are shallow — nested objects can still be modified.

<Note title="Freeze and seal are rarely used in practice">
  <p>They add runtime overhead and do not provide deep immutability. They are more useful as documentation — signaling that an object should not change — than as enforcement mechanisms. In TypeScript, <code>readonly</code> and <code>as const</code> handle this at compile time.</p>
</Note>

## What to carry forward

- `Object.keys()`, `Object.values()`, and `Object.entries()` convert object data into arrays
- use `for...of` with `Object.entries()` to iterate over key-value pairs
- spread (`{ ...a, ...b }`) merges objects and is the modern default over `Object.assign`
- both spread and `Object.assign` are shallow — nested objects are shared
- `Object.hasOwn(obj, key)` checks for own properties
- `Object.fromEntries()` builds an object from key-value pairs
- `Object.freeze()` and `Object.seal()` restrict mutation but are shallow and rarely needed

Object operations complement array methods. The next lesson covers destructuring and spread/rest in more depth — the patterns that make extracting and combining data concise.
