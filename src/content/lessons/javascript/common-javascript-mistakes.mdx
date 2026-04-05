---
title: "Common JavaScript mistakes"
description: "Learn the most frequent bugs in JavaScript code — mutation bugs, undefined values, wrong this bindings, and async pitfalls — and how to prevent each one."
course: javascript
status: published
---

import Warning from "../../../components/content/Warning.astro";

Every JavaScript developer hits these bugs. Recognizing the patterns speeds up both prevention and fixes.

## Mutation bugs

Mutating shared data causes changes to appear in unexpected places:

```javascript
const defaults = { theme: "light", fontSize: 14 };

function createSettings(overrides) {
  const settings = defaults;  // same reference, not a copy
  return { ...settings, ...overrides };
}

const userSettings = createSettings({ theme: "dark" });

console.log(defaults.theme);  // "light" — defaults was not mutated (spread created a new object)
```

Wait — this example is safe because spread creates a new object. The bug happens when you mutate directly:

```javascript
const defaults = { theme: "light", fontSize: 14 };

function createSettings(overrides) {
  defaults.theme = overrides.theme;  // mutation!
  return { ...defaults };
}

createSettings({ theme: "dark" });
console.log(defaults.theme);  // "dark" — defaults was mutated
```

**Prevention:** Never mutate data that is shared. Use spread or `structuredClone` to create copies before modifying.

## `undefined` surprises

`undefined` appears in many situations where a value was expected:

```javascript
// Accessing a missing property
const user = { name: "Ada" };
user.role;  // undefined — not an error, just missing

// Forgetting to return from a function
function double(n) {
  n * 2;  // missing return
}
double(5);  // undefined

// Calling a function before its variable is assigned (with let/const)
console.log(x);  // ReferenceError — temporal dead zone
let x = 10;
```

**Prevention:** Check for `undefined` when accessing optional properties. Use optional chaining (`?.`) for nested access. Always include `return` statements.

## Wrong `this` binding

The most common `this` bug happens when a method is passed as a callback:

```javascript
const counter = {
  count: 0,
  increment() {
    this.count++;
  },
};

setTimeout(counter.increment, 100);
// TypeError: Cannot read properties of undefined (reading 'count')
```

`counter.increment` is called as a plain function, losing the `this` binding.

**Prevention:** Use arrow function wrappers or `bind`:

```javascript
setTimeout(() => counter.increment(), 100);  // arrow wrapper
setTimeout(counter.increment.bind(counter), 100);  // bound
```

Or use arrow functions for callbacks inside methods:

```javascript
const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++;  // arrow inherits `this` from start()
    }, 1000);
  },
};
```

## Async mistakes

### Forgetting `await`

```javascript
async function loadData() {
  const user = fetchUser(1);  // missing await
  console.log(user.name);     // undefined — user is a Promise
}
```

**Prevention:** If a function returns a promise, you must `await` it or chain `.then()`.

### Not handling rejections

```javascript
fetchUser(1).then((user) => console.log(user));
// No .catch() — rejected promise is unhandled
```

**Prevention:** Always attach `.catch()` or use `async/await` with `try/catch`.

### Awaiting in a loop sequentially

```javascript
async function loadUsers(ids) {
  const users = [];
  for (const id of ids) {
    users.push(await fetchUser(id));  // one at a time
  }
  return users;
}
```

**Prevention:** Use `Promise.all` for independent requests:

```javascript
async function loadUsers(ids) {
  return await Promise.all(ids.map((id) => fetchUser(id)));
}
```

## Comparing with `==` instead of `===`

```javascript
0 == false    // true — coercion
0 === false   // false — different types
"" == 0       // true — coercion
"" === 0      // false — different types
```

**Prevention:** Always use `===` and `!==`. Only use `==` when you intentionally want coercion, which is rare.

## Assuming array methods mutate

```javascript
const numbers = [3, 1, 2];
const sorted = numbers.sort();

console.log(numbers === sorted);  // true — sort mutates the original
```

**Prevention:** Copy before sorting if you need the original:

```javascript
const sorted = [...numbers].sort((a, b) => a - b);
```

<Warning title="The hardest bugs are the ones you have seen before">
  <p>Once you recognize a pattern — mutation, undefined, wrong <code>this</code>, missing <code>await</code> — the fix is usually quick. The challenge is recognizing the pattern. When debugging, ask yourself: "Which of the common mistakes does this look like?"</p>
</Warning>

## What to carry forward

- mutation bugs happen when shared data is modified — use copies instead
- `undefined` appears when properties are missing, returns are forgotten, or variables are in the temporal dead zone
- `this` is lost when methods are passed as callbacks — use arrow wrappers or `bind`
- async mistakes include forgetting `await`, not handling rejections, and awaiting in loops
- always use `===` instead of `==` to avoid coercion surprises
- `sort` and some other array methods mutate the original — copy first
- recognize common patterns to speed up debugging

These mistakes are universal. Knowing them ahead of time prevents most of them. The next unit covers working with external data — JSON, APIs, and defensive programming.
