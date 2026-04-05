---
title: "Immutability as a useful practice"
description: "Learn why treating data as immutable makes code more predictable, how to adopt immutability patterns in everyday JavaScript, and when mutation is acceptable."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Immutability means not changing data after it is created. JavaScript does not enforce this — you must choose it as a practice. But adopting immutability habits prevents a wide range of bugs.

## The problem with shared mutation

When two parts of a program hold a reference to the same object, a change in one part is visible in the other:

```javascript
const config = { theme: "light", lang: "en" };

function FeatureA(cfg) {
  cfg.lang = "fr";  // mutation
}

function FeatureB(cfg) {
  console.log(cfg.lang);  // "fr" — changed by FeatureA without FeatureB knowing
}

FeatureA(config);
FeatureB(config);
```

FeatureB sees a value it did not set. The bug appears in FeatureB but the cause is in FeatureA. This is the fundamental problem that immutability solves.

## Immutability in practice

Instead of modifying data, create new data with the desired changes:

```javascript
const config = { theme: "light", lang: "en" };

function withFrench(cfg) {
  return { ...cfg, lang: "fr" };  // new object — original unchanged
}

const frenchConfig = withFrench(config);

console.log(config.lang);         // "en" — unchanged
console.log(frenchConfig.lang);   // "fr"
```

The original data is a known quantity. The transformed data is a new known quantity. Nothing changes unexpectedly.

## Array methods that support immutability

These methods return new arrays without mutating the original:

```javascript
const items = [1, 2, 3, 4, 5];

const filtered = items.filter((n) => n > 2);     // [3, 4, 5]
const mapped = items.map((n) => n * 2);          // [2, 4, 6, 8, 10]
const sliced = items.slice(1, 3);                // [2, 3]
const reduced = items.reduce((sum, n) => sum + n, 0); // 15

console.log(items);  // [1, 2, 3, 4, 5] — always unchanged
```

Methods that **do** mutate the original — avoid these when sharing data:

```javascript
items.push(6);       // mutates
items.pop();         // mutates
items.splice(1, 1);  // mutates
items.sort();        // mutates
items.reverse();     // mutates
```

Use immutable alternatives:

```javascript
const withSix = [...items, 6];           // instead of push
const withoutLast = items.slice(0, -1);  // instead of pop
const withoutSecond = [...items.slice(0, 1), ...items.slice(2)]; // instead of splice
const sorted = [...items].sort((a, b) => a - b); // instead of sort
```

## When mutation is acceptable

Mutation is fine when the data is local and not shared:

```javascript
function buildReport(items) {
  const result = [];  // local — no one else has a reference

  for (const item of items) {
    if (item.active) {
      result.push(item.name);  // mutation of local array — fine
    }
  }

  return result;
}
```

The `result` array is created and returned within one function. No other code holds a reference to it. Mutating it is safe.

Mutation is also acceptable for performance-critical code where the overhead of copying is measurable and significant. This is rare in typical application code.

## Immutability makes debugging easier

When data is immutable, you know its value is whatever it was when created. You do not need to trace through the entire program to find where it was changed:

```javascript
// With immutability — the value is set once and never changes
const user = { name: "Ada", role: "engineer" };
// user.role is "engineer" everywhere because nothing can change it

// With mutation — the value could have changed anywhere
let user = { name: "Ada", role: "engineer" };
// user.role might be "manager" by the time you read it
```

## Immutability and async code

Immutability is especially valuable with async code, where the order of operations is not always obvious:

```javascript
async function updateProfile(user, updates) {
  // Bad — mutating the user object that other code might still be using
  Object.assign(user, updates);
  return user;
}

// Good — returning a new object
async function updateProfile(user, updates) {
  return { ...user, ...updates };
}
```

The caller of `updateProfile` gets a new object. Any code holding the old object sees the old values. This is predictable and safe.

<Tip title="Immutability is a habit, not a rule">
  <p>Do not freeze every object with <code>Object.freeze()</code> or copy data defensively everywhere. Adopt immutability as a default — create new data instead of changing existing data — and mutate when there is a clear reason to do so.</p>
</Tip>

## What to carry forward

- shared mutation causes bugs that are hard to trace — the symptom appears far from the cause
- immutability means not changing data after creation — create new data with the desired changes instead
- use spread, `map`, `filter`, and `slice` to produce new values
- avoid `push`, `pop`, `splice`, `sort`, and `reverse` on shared arrays
- mutation is fine for local data that no other code references
- immutability makes debugging easier — a value is set once and never changes
- adopt immutability as a default, not as a strict rule

Immutability is a discipline that pays off as programs grow. The final lesson covers the meta-principles that tie all these habits together.
