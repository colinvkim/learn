---
title: "Function declarations and expressions"
description: "Learn the two fundamental ways to define functions in JavaScript, how they differ, and when to use each form."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Functions are reusable blocks of code. They are the primary tool for organizing behavior, avoiding duplication, and building abstractions. JavaScript gives you two main ways to create them.

## Function declarations

A function declaration uses the `function` keyword followed by a name:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

greet("Ada");  // "Hello, Ada!"
```

Declarations are **hoisted** — the engine registers them before any code runs. You can call a declared function before it appears in the file:

```javascript
greet("Ada");  // works — "Hello, Ada!"

function greet(name) {
  return `Hello, ${name}!`;
}
```

This makes declarations useful for organizing code in a readable order. You can put the high-level function at the top and helper functions below it.

## Function expressions

A function expression creates a function as part of a larger expression — typically an assignment:

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

greet("Ada");  // "Hello, Ada!"
```

The function itself is anonymous — it has no name. You can also create named function expressions:

```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
```

The name `fact` is only visible inside the function itself, useful for recursion. The outer variable is still `factorial`.

Function expressions are **not hoisted**. You cannot call them before the assignment:

```javascript
greet("Ada");  // ReferenceError — greet is not defined

const greet = function(name) {
  return `Hello, ${name}!`;
};
```

This is actually a benefit — it makes the code's order explicit and prevents subtle bugs where you call a function before the data it depends on is ready.

## Named function expressions in practice

Named function expressions are rare in everyday code. Most expressions use anonymous functions assigned to a `const` variable. The variable name already identifies the function, so a separate function name adds no value.

The exception is recursion, where the internal name gives the function a way to call itself:

```javascript
const deepClone = function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = clone(obj[key]);
  }
  return copy;
};
```

## Parameters and return values

Functions accept inputs called **parameters**:

```javascript
function add(a, b) {
  return a + b;
}
```

When you call the function, the values you pass are called **arguments**:

```javascript
add(2, 3);  // 2 and 3 are arguments, assigned to parameters a and b
```

A function returns a value with `return`. Without an explicit `return`, the function returns `undefined`:

```javascript
function logSomething(value) {
  console.log(value);
  // no return — implicitly returns undefined
}

const result = logSomething("hello");
console.log(result);  // undefined
```

A function can return early:

```javascript
function isAdult(age) {
  if (age < 0) return null;  // invalid input
  return age >= 18;
}
```

## When to use declarations vs expressions

Use **function declarations** when:

- the function is a primary piece of the module
- you want it available throughout the file regardless of position
- you are writing top-level logic

```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

Use **function expressions** when:

- the function is a callback or argument to another function
- you are assigning it conditionally
- you are passing it as a value

```javascript
const sorted = users.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
```

Arrow function expressions are the more common modern choice for inline functions, covered in the next lesson.

## What to carry forward

- function declarations are hoisted and can be called before they appear
- function expressions are not hoisted — they exist after the assignment
- parameters are the names in the definition; arguments are the values passed in
- every function returns a value — `undefined` if no `return` is used
- declarations work well for primary functions; expressions work well for callbacks

Understanding these two forms sets up everything that follows — arrow functions, closures, higher-order functions, and callbacks all build on this foundation.
