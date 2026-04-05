---
title: "if, else, and switch"
description: "Learn how JavaScript makes decisions with conditional statements and how to choose between if/else chains and switch blocks."
course: javascript
status: published
---

Programs rarely follow a single path. Control flow statements let your code respond differently based on conditions.

## `if` runs code when a condition is true

The simplest conditional:

```javascript
const temperature = 32;

if (temperature <= 32) {
  console.log("Water freezes at this temperature.");
}
```

The expression inside the parentheses is evaluated. If it is truthy, the block runs. If it is falsy, the block is skipped.

## `else` provides an alternative

```javascript
const age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Exactly one branch runs. There is no third option.

## `else if` chains multiple conditions

```javascript
const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Below C");
}
```

Conditions are checked top to bottom. The first true condition runs and the rest are skipped. The `else` at the end catches everything that did not match.

The order matters. Reversing the conditions would produce wrong results:

```javascript
// Wrong order — everything matches the first condition
if (score >= 70) {
  console.log("C");      // catches 75, 85, 95 — all wrong
} else if (score >= 90) {
  console.log("A");      // never reached
}
```

## Ternary operator for simple choices

When you need a value (not just a statement), use the ternary operator:

```javascript
const status = age >= 18 ? "adult" : "minor";
```

This is an expression — it produces a value you can assign, return, or pass to a function. Use it for simple two-way choices. Nesting ternaries makes code hard to read:

```javascript
// Avoid this
const label = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

Prefer `if/else if/else` when there are more than two branches.

## `switch` for multi-way branching

When you compare one value against many possibilities, `switch` is clearer than a long `else if` chain:

```javascript
const day = "monday";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Weekday");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
```

Each `case` tests the value with strict equality (`===`). The `break` statement exits the `switch` block. Without it, execution **falls through** to the next case.

## Fall-through is intentional

Missing `break` is one of the most common `switch` bugs:

```javascript
switch (value) {
  case 1:
    console.log("one");
    // missing break — falls through to case 2
  case 2:
    console.log("two");
    break;
}
// If value is 1, this prints both "one" and "two"
```

Fall-through can be useful when multiple cases share behavior (as in the weekday example above), but it must be intentional and clear.

## When to use `if` vs `switch`

Use `if/else` when:

- conditions are complex expressions, not simple equality
- you need to compare different variables
- you need range checks (`>`, `<`)

Use `switch` when:

- you are comparing one value against several known values
- multiple cases share the same behavior (fall-through)
- the list of cases might grow (easier to scan than `else if`)

## Pattern matching with objects

For more complex branching, some code uses an object as a lookup table:

```javascript
const handlers = {
  mon: () => "Monday",
  tue: () => "Tuesday",
  wed: () => "Wednesday",
};

const getDay = (abbr) => {
  const handler = handlers[abbr];
  return handler ? handler() : "Unknown";
};

getDay("mon");  // "Monday"
```

This works well when every case maps to a result. It does not replace `if` for conditions that require logic or comparisons.

## What to carry forward

- `if` runs a block when a condition is truthy
- `else if` chains multiple conditions, checked top to bottom
- `else` catches everything that did not match
- ternary (`? :`) is an expression — use it when you need a value
- `switch` compares one value against many possibilities
- always use `break` in `switch` cases unless fall-through is intentional
- choose `if` for complex conditions and `switch` for known value matching

Control flow determines which code runs. The next lesson covers how to repeat code with loops.
