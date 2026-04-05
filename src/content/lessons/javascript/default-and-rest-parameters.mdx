---
title: "Default and rest parameters"
description: "Learn how to make function parameters optional with defaults, and how to accept any number of arguments with rest parameters."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Functions are more flexible when callers can omit arguments or pass varying numbers of them. JavaScript supports both patterns directly.

## Default parameters

A default parameter provides a fallback value when the caller omits an argument or passes `undefined`:

```javascript
function greet(name = "World") {
  return `Hello, ${name}!`;
}

greet("Ada");   // "Hello, Ada!"
greet();        // "Hello, World!"
greet(undefined); // "Hello, World!"
```

The default only kicks in for `undefined`. Other falsy values like `null`, `""`, or `0` are treated as intentional:

```javascript
greet(null);    // "Hello, null!"
greet("");      // "Hello, !"
```

### Default expressions

Defaults do not need to be literal values. They can be expressions evaluated at call time:

```javascript
function createTimestamp(label, time = new Date()) {
  return { label, time };
}
```

Defaults are evaluated lazily — the expression only runs when the default is needed:

```javascript
function countCall(n = callCount++) {
  return n;
}

let callCount = 0;
countCall();  // 0
countCall();  // 1
countCall(10); // 10 — default not used
```

### Defaults with destructured parameters

When a function destructures an object, you can provide defaults for both the object itself and individual properties:

```javascript
function createUser({ name = "Anonymous", role = "user" } = {}) {
  return { name, role };
}

createUser();                        // { name: "Anonymous", role: "user" }
createUser({ name: "Ada" });         // { name: "Ada", role: "user" }
createUser({ name: "Ada", role: "admin" }); // { name: "Ada", role: "admin" }
```

The `= {}` at the end provides a default empty object so that calling the function with no arguments does not throw a destructuring error.

## Rest parameters

A rest parameter collects all remaining arguments into an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);       // 6
sum(10, 20);        // 30
sum();              // 0
```

The `...numbers` syntax says "gather every remaining argument into an array called `numbers`."

### Rest parameters must come last

Only the last parameter can use rest syntax:

```javascript
function combine(separator, ...values) {
  return values.join(separator);
}

combine("-", "a", "b", "c");  // "a-b-c"
```

### Rest parameters vs the `arguments` object

Before rest parameters, functions used the `arguments` object to access all passed values:

```javascript
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```

`arguments` is array-like but not an actual array — it lacks array methods like `.map()` and `.filter()`. Rest parameters give you a real array, which is cleaner to work with.

Rest parameters also work with arrow functions; `arguments` does not.

### Named parameters with rest

You can combine regular parameters with a rest parameter:

```javascript
function logMessage(level, ...messages) {
  for (const msg of messages) {
    console.log(`[${level}] ${msg}`);
  }
}

logMessage("ERROR", "Something broke", "Check the logs");
// [ERROR] Something broke
// [ERROR] Check the logs
```

`level` captures the first argument; `messages` captures the rest.

## Combining defaults and rest

Both patterns work together:

```javascript
function repeat(text, times = 3) {
  return Array(times).fill(text).join("\n");
}

repeat("hello");
// hello
// hello
// hello

repeat("hello", 2);
// hello
// hello
```

```javascript
function joinAll(separator = ", ", ...items) {
  return items.join(separator);
}

joinAll("-", "a", "b", "c");  // "a-b-c"
joinAll();                     // ""
```

## What to carry forward

- default parameters provide fallback values when arguments are omitted or `undefined`
- defaults can be expressions evaluated at call time
- rest parameters (`...name`) collect remaining arguments into a real array
- rest parameters must be the last parameter in the list
- prefer rest parameters over the `arguments` object — they work with arrow functions and give you real arrays

These patterns make functions more flexible and easier to call. The next lesson covers scope and closures, the concepts that explain how functions access variables from their surroundings.
