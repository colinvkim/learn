---
title: "Arrow functions"
description: "Learn the shorter arrow function syntax, when to use it, and how arrow functions differ from regular functions."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Arrow functions provide a concise syntax for writing functions. They are now the dominant way to write functions in modern JavaScript code, especially for callbacks and short utilities.

## Arrow function syntax

The basic form replaces the `function` keyword with an arrow:

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

For a single parameter, the parentheses are optional:

```javascript
const greet = name => {
  return `Hello, ${name}!`;
};
```

For no parameters, use empty parentheses:

```javascript
const sayHello = () => {
  console.log("Hello!");
};
```

## Implicit return

When the body is a single expression, you can omit the braces and the `return` keyword. The expression is returned automatically:

```javascript
const double = (n) => n * 2;

double(5);  // 10
```

This is called an **implicit return**. It makes short functions very readable:

```javascript
const add = (a, b) => a + b;
const isFirst = (arr) => arr.length > 0;
const fullName = (user) => `${user.firstName} ${user.lastName}`;
```

<Tip title="Implicit return works with any expression">
  <p>Ternary operators, function calls, arithmetic, template literals — all of them return a value and work with implicit return. The entire body must be a single expression, though. If you need multiple statements, use the full form with braces and <code>return</code>.</p>
</Tip>

## Returning object literals

Implicit return has one gotcha. Curly braces after the arrow are interpreted as a function body, not an object literal. Wrap the object in parentheses:

```javascript
// Wrong — braces are treated as the function body, not an object
const makeUser = (name) => { name: name, active: true };  // syntax error

// Correct — parentheses force expression context
const makeUser = (name) => ({ name, active: true });
```

## How arrow functions differ from regular functions

Arrow functions are not just a shorter syntax. They behave differently in one important way: **they do not have their own `this` binding**.

A regular function's `this` depends on how it is called. An arrow function's `this` is inherited from the surrounding scope — it is the same `this` that exists where the arrow function is defined.

```javascript
const counter = {
  count: 0,
  increment() {
    // regular function as a callback — `this` would be wrong here
    setTimeout(() => {
      this.count++;  // arrow inherits `this` from increment's scope
    }, 100);
  },
};
```

In practice, this means:

- use arrow functions for callbacks where you want to keep the outer `this`
- use regular functions for methods that need their own `this` (object methods, class methods, event handlers where `this` should be the element)

Arrow functions also cannot be used as constructors:

```javascript
const User = (name) => { this.name = name; };
new User("Ada");  // TypeError — arrow functions cannot be constructors
```

## When to use arrow functions

Use arrow functions:

- for short, single-expression utilities
  ```javascript
  const toCelsius = (f) => (f - 32) * (5 / 9);
  ```
- for callbacks passed to array methods
  ```javascript
  const names = users.map((u) => u.name);
  ```
- for callbacks passed to `setTimeout`, `Promise.then`, event listeners
  ```javascript
  button.addEventListener("click", () => {
    console.log("clicked");
  });
  ```

Use regular functions:

- for object methods that need `this`
  ```javascript
  const counter = {
    count: 0,
    increment() { this.count++; },  // regular function
  };
  ```
- for class methods
- when you need the `arguments` object (arrow functions do not have it)
- for named top-level functions where you prefer the declaration form

## Arrow functions in practice

Most modern codebases use arrow functions for the majority of functions and reserve regular function syntax for methods and specific cases where `this` matters:

```javascript
// Top-level utility — arrow with implicit return
const formatDate = (date) => date.toISOString().split("T")[0];

// Callback — arrow with implicit return
const activeUsers = users.filter((u) => u.active);

// Event handler — arrow with block body
button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked:", event.target.textContent);
});
```

## What to carry forward

- arrow functions use `(params) => expression` syntax
- single-expression bodies return implicitly — no braces or `return` needed
- wrap object literals in parentheses when using implicit return: `() => ({ key: value })`
- arrow functions inherit `this` from their surrounding scope — they do not have their own `this`
- arrow functions cannot be constructors and do not have an `arguments` object
- use arrow functions for callbacks and short utilities; use regular functions for methods

Arrow functions make code shorter and more predictable. The next lesson covers parameters in more depth — defaults and rest parameters.
