---
title: "Operators and truthy/falsy values"
description: "Learn JavaScript's operators for comparison, arithmetic, and logic, and how every value has a truthy or falsy nature that affects control flow."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Operators are the symbols that let you compare, combine, and transform values. JavaScript has many operators, but most everyday code uses a small, predictable subset.

## Arithmetic operators

Standard math operations:

```javascript
10 + 3    // 13  — addition
10 - 3    // 7   — subtraction
10 * 3    // 30  — multiplication
10 / 3    // 3.333... — division
10 % 3    // 1   — remainder (modulo)
10 ** 3   // 1000 — exponentiation
```

The increment and decrement operators modify a number by one:

```javascript
let count = 0;
count++;    // returns 0, then count becomes 1
++count;    // count becomes 2, then returns 2
count--;    // returns 2, then count becomes 1
```

The difference between prefix (`++count`) and postfix (`count++`) is when the value is returned. In standalone statements like `count++`, the difference does not matter. It matters when you use the operator inside an expression:

```javascript
let i = 0;
let arr = [];
arr[arr.length] = i++;  // stores 0, then i becomes 1
```

In practice, prefer `count += 1` or `count = count + 1` for clarity. The `++` and `--` operators are easy to miss in code review.

## Comparison operators

Comparisons produce booleans:

```javascript
5 > 3     // true
5 < 3     // false
5 >= 5    // true
5 <= 3    // false
5 === 5   // true
5 !== 3   // true
```

## `==` vs `===`

JavaScript has two equality operators. The difference is important:

- `==` checks equality **with type coercion** — it converts values to match before comparing
- `===` checks equality **without coercion** — values must have the same type and content

```javascript
5 == "5"     // true  — string "5" is coerced to number 5
5 === "5"    // false — different types

0 == false   // true  — false is coerced to 0
0 === false  // false — different types

null == undefined   // true  — special case in the spec
null === undefined  // false — different types
```

The practical rule: **always use `===` and `!==`**. Coercion in `==` has surprising edge cases that cause bugs.

```javascript
"" == 0      // true
"0" == false // true
[] == false  // true
```

None of these hold with `===`. Using strict equality avoids all of them.

## Logical operators

Logical operators combine or negate boolean expressions:

```javascript
true && true    // true  — AND: both must be true
true && false   // false
true || false   // true  — OR: at least one must be true
false || false  // false
!true           // false — NOT: inverts the value
```

Logical operators use **short-circuit evaluation** — they stop as soon as the result is determined:

```javascript
false && anything   // returns false without evaluating `anything`
true || anything    // returns true without evaluating `anything`
```

This behavior is often used for conditional execution:

```javascript
user.isAdmin && showAdminPanel();  // only runs if isAdmin is true
```

And for providing default values:

```javascript
const name = userInput || "Anonymous";  // uses "Anonymous" if userInput is falsy
```

<Note title="Short-circuit defaults have a caveat">
  <p>The <code>||</code> pattern treats <em>any</em> falsy value as missing — including <code>0</code> and <code>""</code>. If <code>0</code> is a valid input, use the nullish coalescing operator <code>??</code> instead, which only falls back on <code>null</code> or <code>undefined</code>.</p>
</Note>

## Nullish coalescing

The `??` operator returns the right side only when the left side is `null` or `undefined`:

```javascript
0 ?? 42       // 0  — zero is valid, not null/undefined
"" ?? "empty" // "" — empty string is valid
null ?? 42    // 42
undefined ?? 42 // 42
```

This is the safer default pattern when `0` or `""` are meaningful values.

## Optional chaining

The `?.` operator safely accesses nested properties that might not exist:

```javascript
const user = { profile: { name: "Ada" } };

user.profile.name;        // "Ada"
user.settings?.theme;     // undefined — no error

// Without optional chaining, this would throw:
// Cannot read properties of undefined (reading 'theme')
```

Instead of crashing, `?.` short-circuits to `undefined`.

## Truthy and falsy values

JavaScript does not require conditions to be literal `true` or `false`. Every value has an inherent **truthiness**.

These values are **falsy** — they behave as `false` in conditions:

- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `0n` (bigint zero)

**Everything else is truthy**, including:

- `"0"` and `"false"` (non-empty strings)
- `[]` (empty array)
- `{}` (empty object)
- `function() {}` (functions)

```javascript
if ([]) {
  console.log("this runs");  // arrays are truthy, even empty ones
}

if ("") {
  console.log("this does not run");  // empty string is falsy
}
```

## Practical truthy/falsy usage

This is why common patterns work:

```javascript
// Check if an array has items
if (users.length) { ... }       // 0 is falsy, any length > 0 is truthy

// Check if a string exists
if (name) { ... }               // "" is falsy, any text is truthy

// Check if an object was found
if (user) { ... }               // null is falsy, any object is truthy
```

And why some patterns are surprising:

```javascript
if (0) { ... }   // does not run — zero is falsy
if ("0") { ... } // runs — "0" is a non-empty string, so truthy
```

## Type conversion operators

Sometimes you need to convert types explicitly:

```javascript
Number("42")     // 42
Number("abc")    // NaN
String(42)       // "42"
Boolean(1)       // true
Boolean(0)       // false
Boolean("")      // false
```

The `Boolean()` function is the most reliable way to check whether a value is truthy or falsy:

```javascript
Boolean([])      // true
Boolean({})      // true
Boolean(null)    // false
Boolean(undefined) // false
```

## What to carry forward

- use `===` and `!==` for equality — avoid `==` and `!=`
- `&&` requires both sides to be true; `||` requires at least one
- `??` falls back only on `null` or `undefined`, not other falsy values
- `?.` safely accesses properties that might not exist
- only seven values are falsy — everything else is truthy
- empty arrays and objects are truthy

These operators drive every conditional branch and data check in JavaScript. The next lesson covers how to use them in control flow.
