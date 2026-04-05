---
title: "let, const, and primitive types"
description: "Learn how to declare variables in modern JavaScript, when to use let vs const, and the primitive types that form the foundation of every value."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Variables are how you give names to values so you can work with them. JavaScript has three ways to declare variables, but modern code uses only two.

## `let` and `const`

`let` declares a variable whose value can change:

```javascript
let count = 0;
count = 1;   // okay — reassigned
count = 2;   // okay — reassigned again
```

`const` declares a variable whose value cannot be reassigned:

```javascript
const MAX = 100;
MAX = 50;    // TypeError — Assignment to constant variable
```

The rule in modern JavaScript is simple:

- use `const` by default
- use `let` only when you know the value needs to change

```javascript
const name = "Ada";       // will not change
let attempts = 0;         // will increment

attempts = attempts + 1;
```

<Tip title="Prefer const whenever possible">
  <p>Using <code>const</code> by default makes your intent clear: this variable will not be reassigned. It also prevents a whole class of bugs where a variable is accidentally changed. Switch to <code>let</code> only when the code actually requires reassignment.</p>
</Tip>

## Why not `var`

`var` is the older way to declare variables. It still works but has two problems:

1. it ignores block scope — `var` inside an `if` or `for` leaks into the enclosing function
2. it hoists to `undefined` instead of throwing an error when accessed too early

```javascript
var x = 10;

if (true) {
  var x = 20;  // redeclares the same variable — no new scope
}

console.log(x); // 20 — the inner assignment overwrote the outer one
```

With `let`:

```javascript
let x = 10;

if (true) {
  let x = 20;  // new variable, block-scoped
}

console.log(x); // 10 — the outer variable is unchanged
```

`let` and `const` behave predictably. `var` does not. Modern JavaScript avoids `var` entirely.

## Primitive types

JavaScript has seven primitive types. A primitive is a value that is not an object — it is a single, indivisible unit.

### `string`

Text enclosed in single or double quotes, or backticks for template literals:

```javascript
let greeting = "Hello";
let name = 'Ada';
let message = `Hello, ${name}`;  // template literal with interpolation
```

### `number`

Integers and decimals. JavaScript uses a single 64-bit floating-point format for all numbers:

```javascript
let integer = 42;
let decimal = 3.14;
let negative = -7;
```

There is also `Infinity` and `NaN` (not a number, which is itself a number type):

```javascript
10 / 0          // Infinity
parseInt("abc") // NaN
typeof NaN      // "number"
```

### `boolean`

`true` or `false`:

```javascript
let isActive = true;
let hasPermission = false;
```

### `undefined`

A variable that has been declared but not assigned a value:

```javascript
let value;
console.log(value); // undefined
```

### `null`

An intentional absence of value. It must be assigned explicitly:

```javascript
let user = null;  // intentionally empty
```

<Note title="null vs undefined">
  <p><code>undefined</code> means "no value was set." <code>null</code> means "the value is intentionally empty." In practice, many APIs return <code>null</code> to indicate nothing was found. Treat both as "no value" in your own code unless you need to distinguish them.</p>
</Note>

### `symbol`

A unique identifier, rarely used directly in everyday code:

```javascript
const id = Symbol("unique id");
```

### `bigint`

Integers too large for the `number` type to represent precisely:

```javascript
const huge = 9007199254740991n;  // note the trailing n
```

## Checking types

The `typeof` operator returns the type of a value as a string:

```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol()     // "symbol"
typeof 10n          // "bigint"
typeof null         // "object" — a historical quirk, ignore it
```

The `null` result is a well-known historical bug in JavaScript. Use `value === null` to check for null, not `typeof`.

## What to carry forward

- use `const` by default, `let` when reassignment is needed, avoid `var`
- JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, bigint
- primitives are indivisible values — they are not objects
- `typeof` identifies types but returns `"object"` for `null` due to a historical bug
- `null` and `undefined` both represent "no value" in most practical code

These types are the building blocks for everything else. The next lesson covers objects and arrays, which are how JavaScript structures data.
