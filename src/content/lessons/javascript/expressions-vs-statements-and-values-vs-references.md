---
title: "Expressions vs statements, and values vs references"
description: "Learn the difference between expressions and statements, and how JavaScript handles values versus references — two distinctions that shape how code behaves."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Two distinctions cause a lot of confusion early in JavaScript: the difference between **expressions and statements**, and the difference between **values and references**. Neither is complicated once you see the pattern, but both affect how code behaves.

## Expressions produce values

An **expression** is any piece of code that evaluates to a value.

```javascript
2 + 3          // 5
"hello"        // "hello"
x > 10         // true or false
Math.max(1, 5) // 5
```

Each of these produces a value. You can use an expression anywhere JavaScript expects a value — as an argument to a function, on the right side of an assignment, or inside a template literal.

Even a variable reference is an expression:

```javascript
let count = 10;
count          // expression that evaluates to 10
count + 5      // expression that evaluates to 15
```

## Statements perform actions

A **statement** is a unit of code that does something but does not produce a value on its own.

```javascript
if (x > 10) {
  console.log("big");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let name = "Ada";
```

These are instructions. They control flow, declare variables, or cause side effects. You cannot assign a statement to a variable because it does not evaluate to a value.

```javascript
// This does not work — `if` is a statement, not an expression
let result = if (x > 10) { "big" } else { "small" };
```

## The practical distinction

The rule that matters in practice:

- **expressions** evaluate to values — you can pass them around
- **statements** perform actions — you cannot use them as values

JavaScript has a few constructs that blur the line. A **function expression** both declares a function and produces a value:

```javascript
const double = function(n) { return n * 2; };
```

Arrow functions are always expressions:

```javascript
const double = (n) => n * 2;
```

But function **declarations** are statements:

```javascript
function double(n) { return n * 2; }
```

The difference shows up when you try to use them in places that expect expressions. Arrow function expressions can appear inline; function declarations cannot.

## Values vs references

When you assign data to a variable, JavaScript stores it in one of two ways: **by value** or **by reference**.

### Primitives are stored by value

Primitive types — `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint` — are copied when assigned to a new variable:

```javascript
let a = 10;
let b = a;   // b gets a copy of the value 10

b = 20;
console.log(a); // 10 — unchanged
console.log(b); // 20
```

Changing `b` does not affect `a` because each variable holds its own copy of the value.

### Objects are stored by reference

Objects, arrays, and functions are stored by reference. The variable does not hold the actual data — it holds a **reference** (a pointer) to where the data lives in memory.

```javascript
let obj1 = { name: "Ada" };
let obj2 = obj1;  // obj2 points to the same object

obj2.name = "Grace";
console.log(obj1.name); // "Grace" — changed!
console.log(obj2.name); // "Grace"
```

Both variables reference the same underlying object. Mutating it through one variable affects what the other sees.

This is one of the most common sources of bugs in JavaScript code.

## Arrays behave the same way

Arrays are objects, so they follow reference semantics too:

```javascript
let a = [1, 2, 3];
let b = a;

b.push(4);
console.log(a); // [1, 2, 3, 4] — changed through b
```

## When references get reassigned

Reassigning a variable does not mutate the original object — it just points the variable somewhere new:

```javascript
let obj1 = { name: "Ada" };
let obj2 = obj1;

obj2 = { name: "Grace" };  // reassignment, not mutation
console.log(obj1.name); // "Ada" — unchanged
console.log(obj2.name); // "Grace"
```

Here, `obj2` was reassigned to a new object. `obj1` still points to the original.

## Why this distinction matters

Understanding value vs reference explains a lot of everyday JavaScript behavior:

- passing an object to a function lets the function mutate it
- passing a number to a function cannot affect the original variable
- comparing two objects with `===` checks whether they are the same reference, not whether they have the same contents

```javascript
let a = { x: 1 };
let b = { x: 1 };

console.log(a === b); // false — different objects in memory

let c = a;
console.log(a === c); // true — same reference
```

## Copying objects and arrays

When you need an independent copy, you must create one explicitly. A shallow copy works for simple objects:

```javascript
let original = { name: "Ada", age: 36 };
let copy = { ...original };  // spread creates a new object

copy.age = 37;
console.log(original.age); // 36 — unchanged
console.log(copy.age);     // 37
```

For arrays:

```javascript
let original = [1, 2, 3];
let copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy);     // [1, 2, 3, 4]
```

<Note title="Shallow copies only copy the top level">
  <p>If an object contains nested objects, the spread operator copies the reference to the nested object — not the nested object itself. Deep copying requires a different approach, covered in the data manipulation unit.</p>
</Note>

## What to carry forward

- expressions produce values; statements perform actions
- primitives are copied by value — each variable gets its own copy
- objects and arrays are copied by reference — variables point to the same data
- reassigning a variable changes what it points to, it does not mutate the original
- use spread or other methods to create explicit copies when you need independence

This distinction will come up repeatedly when working with data, functions, and state management.
