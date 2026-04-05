---
title: "Destructuring and spread/rest"
description: "Learn how to extract values from objects and arrays with destructuring, and how spread and rest simplify copying and combining data."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Destructuring lets you pull values out of objects and arrays into named variables in a single line. Spread and rest use the same `...` syntax for two different jobs: expanding data into individual elements, or collecting elements into a single container.

These patterns appear everywhere in modern JavaScript.

## Object destructuring

The basic form extracts properties by name:

```javascript
const user = { name: "Ada", age: 36, email: "ada@example.com" };

const { name, age } = user;

console.log(name);  // "Ada"
console.log(age);   // 36
```

The variable names must match the property names. You are essentially saying "give me the `name` and `age` properties from `user`."

### Renaming during destructuring

When property names conflict with existing variables or are inconvenient, rename them:

```javascript
const { name: userName, age: userAge } = user;

console.log(userName);  // "Ada"
console.log(userAge);   // 36
```

The syntax is `{ originalName: newVariableName }`.

### Default values

Destructuring supports defaults when a property might be missing:

```javascript
const { role = "user" } = user;
// role is "user" because user.role is undefined
```

Defaults only kick in for `undefined`, just like function parameter defaults.

### Nested destructuring

You can destructure nested objects in one pattern:

```javascript
const company = {
  name: "Example Corp",
  address: { city: "Portland", state: "OR" },
};

const { address: { city, state } } = company;

console.log(city);   // "Portland"
console.log(state);  // "OR"
```

## Array destructuring

Arrays destructure by position instead of name:

```javascript
const coordinates = [3, 4];
const [x, y] = coordinates;

console.log(x);  // 3
console.log(y);  // 4
```

### Skipping elements

Use empty commas to skip positions you do not need:

```javascript
const date = [2024, 3, 15];
const [, month, day] = date;

console.log(month);  // 3
console.log(day);    // 15
```

### Default values

```javascript
const [first, second, third = "default"] = ["a", "b"];
// third is "default" because the array has no third element
```

### Swapping variables

Destructuring makes swapping values clean:

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);  // 2
console.log(b);  // 1
```

## Destructuring in function parameters

Functions commonly destructure their arguments:

```javascript
function greet({ name, greeting = "Hello" }) {
  return `${greeting}, ${name}!`;
}

greet({ name: "Ada" });                    // "Hello, Ada!"
greet({ name: "Ada", greeting: "Hi" });    // "Hi, Ada!"
```

This replaces accessing properties by name inside the function body and makes the expected shape explicit in the parameter list.

### Destructuring arrays from function returns

```javascript
function minMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}

const [min, max] = minMax([3, 1, 4, 1, 5]);
// min: 1, max: 5
```

## Spread syntax

Spread expands an iterable into individual elements. It uses the same `...` as rest, but in a different position.

### Spreading arrays

Spread inserts each element as a separate item:

```javascript
const defaults = [0, 0, 0];
const overrides = [1, 2];

const combined = [...defaults, ...overrides];
// [0, 0, 0, 1, 2]
```

Insert elements anywhere:

```javascript
const middle = [...defaults, 99, ...overrides];
// [0, 0, 0, 99, 1, 2]
```

### Spreading objects

Spread copies an object's enumerable properties into a new object:

```javascript
const base = { name: "Ada", role: "engineer" };
const updated = { ...base, role: "senior engineer" };
// { name: "Ada", role: "senior engineer" }
```

Later properties overwrite earlier ones, so put defaults first and overrides last.

<Tip title="Spread is shallow">
  <p>Spread copies only the top level. Nested objects are shared by reference. For deep copies, see the copying vs mutating lesson later in this unit.</p>
</Tip>

### Spreading in function calls

Spread passes array elements as individual arguments:

```javascript
const numbers = [1, 2, 3];

Math.max(...numbers);  // 3 — equivalent to Math.max(1, 2, 3)
```

## Rest syntax

Rest collects remaining elements into a single container. It is the inverse of spread.

### Rest in function parameters

```javascript
function logAll(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}

logAll("a", "b", "c", "d");
// First: a
// Rest: ["b", "c", "d"]
```

### Rest in destructuring

Rest in array destructuring captures remaining elements:

```javascript
const [first, second, ...remaining] = [1, 2, 3, 4, 5];

console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]
```

Rest in object destructuring captures remaining properties:

```javascript
const { name, ...rest } = { name: "Ada", age: 36, role: "engineer" };

console.log(name);  // "Ada"
console.log(rest);  // { age: 36, role: "engineer" }
```

This is useful for separating concerns — extracting one property and passing the rest along:

```javascript
function createUser({ password, ...safeData }) {
  // password is excluded — do not pass it to the API
  return api.post("/users", safeData);
}
```

## What to carry forward

- destructuring extracts values into variables — objects by name, arrays by position
- rename properties during destructuring with `{ original: newName }`
- defaults work in destructuring just like in function parameters
- spread expands data into individual elements — useful for copying, merging, and function calls
- rest collects remaining elements into an array or object
- spread and rest use the same `...` syntax but in different positions and for different purposes
- all spreading and copying is shallow — nested data is shared by reference

These patterns make data extraction and combination concise and readable. The next lesson covers the critical topic of copying versus mutating data.
