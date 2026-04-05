---
title: "Array methods: map, filter, and reduce"
description: "Learn the three core array methods for transforming data — how each one works, when to use it, and how they combine to solve real problems."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Traditional loops work fine for many tasks. But when you are transforming, selecting, or summarizing array data, array methods communicate intent more clearly than raw loops.

These three methods are the foundation. Most other array operations can be built from them.

## `map` transforms every element

`map` creates a new array by applying a function to each element:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8]
```

The original array is unchanged. `map` always returns a new array of the same length.

Extracting properties from objects is one of the most common uses:

```javascript
const users = [
  { name: "Ada", role: "engineer" },
  { name: "Grace", role: "manager" },
  { name: "Alan", role: "designer" },
];

const names = users.map((u) => u.name);
// ["Ada", "Grace", "Alan"]
```

`map` says: "I want one result per input, transformed."

## `filter` keeps only matching elements

`filter` creates a new array containing only the elements for which the callback returns a truthy value:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4, 6]
```

The callback should return a boolean. The new array may be shorter, the same length, or empty:

```javascript
const activeUsers = users.filter((u) => u.role === "engineer");
// [{ name: "Ada", role: "engineer" }]
```

`filter` says: "Keep only the elements that meet this condition."

## `reduce` combines elements into a single result

`reduce` processes every element and accumulates a result. It takes a callback and an initial value:

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, n) => total + n, 0);
// 10
```

The callback receives the accumulator (`total`) and the current element (`n`). The second argument to `reduce` (`0`) is the initial value of the accumulator.

How it executes step by step:

1. `total` starts at `0` (the initial value)
2. first element: `total = 0 + 1 = 1`
3. second element: `total = 1 + 2 = 3`
4. third element: `total = 3 + 3 = 6`
5. fourth element: `total = 6 + 4 = 10`

### Building objects with reduce

`reduce` is not limited to numbers. The accumulator can be any type:

```javascript
const users = [
  { name: "Ada", role: "engineer" },
  { name: "Grace", role: "manager" },
];

const byRole = users.reduce((acc, user) => {
  acc[user.role] = user;
  return acc;
}, {});

// { engineer: { name: "Ada", role: "engineer" }, manager: { name: "Grace", role: "manager" } }
```

### Building arrays with reduce

```javascript
const sentences = ["hello world", "foo bar baz"];

const words = sentences.reduce((acc, sentence) => {
  return acc.concat(sentence.split(" "));
}, []);

// ["hello", "world", "foo", "bar", "baz"]
```

<Tip title="Reduce is powerful but can be overused">
  <p>If <code>map</code> or <code>filter</code> expresses your intent more clearly, use them instead. <code>reduce</code> is the most general array method, but it is also the hardest to read at a glance. Reserve it for cases where you are genuinely combining values into something new.</p>
</Tip>

## Chaining methods together

The real power comes from combining methods. Each method returns an array (except `reduce`), so you can chain them:

```javascript
const products = [
  { name: "Laptop", price: 999, category: "electronics" },
  { name: "Book", price: 15, category: "education" },
  { name: "Phone", price: 699, category: "electronics" },
  { name: "Desk", price: 300, category: "furniture" },
];

const cheapElectronics = products
  .filter((p) => p.category === "electronics")
  .filter((p) => p.price < 800)
  .map((p) => p.name);

// ["Phone"]
```

Read the chain top to bottom: first narrow to electronics, then narrow to cheap ones, then extract names. Each step produces a new intermediate array that flows into the next.

## Method callbacks receive more than the element

Each method passes extra arguments to its callback:

```javascript
array.map((element, index, array) => { ... });
array.filter((element, index, array) => { ... });
array.reduce((accumulator, element, index, array) => { ... }, initialValue);
```

The index and the full array are available when you need them:

```javascript
const items = ["a", "b", "c"];

items.map((letter, i) => `${i}: ${letter}`);
// ["0: a", "1: b", "2: c"]
```

## What to carry forward

- `map` transforms every element and returns a new array of the same length
- `filter` keeps only elements that pass a test
- `reduce` combines all elements into a single accumulated result
- methods can be chained — each returns a new array that flows into the next
- callbacks receive `(element, index, array)` for `map` and `filter`, `(acc, element, index, array)` for `reduce`
- always provide an initial value to `reduce` — without it, the first element becomes the initial value, which changes behavior for single-element arrays

These three methods cover most data transformation needs. The next lesson adds more targeted methods for searching and testing arrays.
