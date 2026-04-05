---
title: "Loops: for, while, and for...of"
description: "Learn the three loop patterns you will use in JavaScript — when to repeat code, how each loop works, and which one fits each situation."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Loops let you repeat operations without writing the same code multiple times. JavaScript offers several loop constructs, each suited to different situations.

## The `for` loop

The classic `for` loop has three parts in its header:

```javascript
for (initialization; condition; update) {
  // body runs each iteration
}
```

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
```

How it executes:

1. **initialization** runs once before the loop starts (`let i = 0`)
2. **condition** is checked before each iteration — if falsy, the loop stops
3. **body** runs if the condition was truthy
4. **update** runs after each iteration (`i++`)
5. go back to step 2

The loop variable `i` is declared with `let` so it is scoped to the loop body. This prevents it from leaking into the surrounding scope.

### Skipping and stopping

`continue` skips the rest of the current iteration and jumps to the next one:

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;  // skip even numbers
  console.log(i);  // 1, 3, 5, 7, 9
}
```

`break` exits the loop entirely:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0, 1, 2, 3, 4
}
```

## The `while` loop

`while` repeats as long as a condition remains truthy:

```javascript
let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
  console.log(`Attempt ${attempts + 1}`);
  attempts++;
}
```

Use `while` when you do not know ahead of time how many iterations you need. The condition alone controls the loop.

```javascript
// Read chunks until the stream is exhausted
let chunk = stream.read();
while (chunk !== null) {
  process(chunk);
  chunk = stream.read();
}
```

<Tip title="Always ensure the condition eventually becomes falsy">
  <p>A <code>while</code> loop whose condition never becomes falsy runs forever and freezes your program. Make sure something inside the loop moves toward termination.</p>
</Tip>

## The `do...while` loop

`do...while` guarantees the body runs at least once, then checks the condition:

```javascript
let input;
do {
  input = prompt("Enter a number:");
} while (!input);
```

This is rarely used in practice because most loops can be written with `while` or `for`.

## The `for...of` loop

`for...of` iterates over the **values** of an iterable (arrays, strings, maps, sets, and more):

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);  // "red", "green", "blue"
}
```

This is the cleanest way to iterate when you do not need the index. Under the hood, `for...of` uses the iterable protocol — it asks the collection for its next value until none remain.

### When you need the index

Use `.entries()` to get both index and value:

```javascript
const fruits = ["apple", "banana", "cherry"];

for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
// 0: apple
// 1: banana
// 2: cherry
```

## `for...in` iterates keys, not values

`for...in` iterates over the **property names** of an object:

```javascript
const user = { name: "Ada", age: 36 };

for (const key in user) {
  console.log(key, user[key]);
}
// name Ada
// age 36
```

For objects, `for...in` is useful. For arrays, avoid it — it iterates over indices as strings and may include inherited properties:

```javascript
const arr = ["a", "b", "c"];

for (const i in arr) {
  console.log(typeof i);  // "string" — indices are strings
}
```

Use `for...of` for arrays and `for...in` for plain objects.

## Which loop to choose

| Situation | Best choice |
|---|---|
| Known number of iterations | `for` |
| Repeat until a condition changes | `while` |
| Iterate over array values | `for...of` |
| Iterate over object keys | `for...in` |
| Need index and value | `for` or `for...of` with `.entries()` |
| Transform or filter arrays | Array methods like `.map()` and `.filter()` (covered in the data manipulation unit) |

## Common loop patterns

### Accumulating a result

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (const n of numbers) {
  sum += n;
}

console.log(sum);  // 15
```

### Finding a match

```javascript
const users = [
  { name: "Ada", active: true },
  { name: "Grace", active: false },
];

let found = null;

for (const user of users) {
  if (user.active) {
    found = user;
    break;
  }
}

console.log(found);  // { name: "Ada", active: true }
```

Array methods like `.find()` handle this more concisely, covered in the data manipulation unit.

### Building a new array

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

for (const n of numbers) {
  doubled.push(n * 2);
}

console.log(doubled);  // [2, 4, 6, 8, 10]
```

Again, `.map()` replaces this pattern in modern code.

## What to carry forward

- `for` is best when you know the number of iterations
- `while` is best when you repeat until a condition changes
- `for...of` is the cleanest way to iterate array values
- `for...in` iterates object keys — avoid it for arrays
- `continue` skips to the next iteration; `break` exits the loop
- many traditional loop patterns have cleaner array-method equivalents

Loops handle repetition. The next unit covers functions, which handle reuse and organization.
