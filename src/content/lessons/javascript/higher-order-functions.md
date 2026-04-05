---
title: "Higher-order functions"
description: "Learn how functions can accept and return other functions, and why this pattern is the backbone of JavaScript's most useful abstractions."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

In JavaScript, functions are **first-class values**. They can be:

- assigned to variables
- passed as arguments to other functions
- returned from functions
- stored in objects and arrays

A **higher-order function** is any function that takes a function as an argument, returns a function, or both. This is not a special language feature — it is just a consequence of functions being first-class values.

## Functions as arguments

The most common higher-order function pattern is passing a function as a callback:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n));
```

`forEach` is a higher-order function. It does not know what you will do with each element — it delegates that to the function you pass in.

Array methods are the most visible family of higher-order functions, covered extensively in the data manipulation unit. But the pattern appears everywhere:

```javascript
// setTimeout accepts a function to call later
setTimeout(() => {
  console.log("Delayed message");
}, 1000);

// addEventListener accepts a function to call on events
button.addEventListener("click", (event) => {
  console.log("Clicked:", event.target);
});
```

## Functions returning functions

Functions can also produce other functions as their output:

```javascript
function createGreeter(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Ada");   // "Hello, Ada!"
sayHi("Grace");    // "Hi, Grace!"
```

The outer function configures the inner one. Each call to `createGreeter` produces an independent function with its own captured `greeting`.

## Why higher-order functions matter

Higher-order functions enable **abstraction over behavior**, not just data. Instead of writing the same loop structure with different logic inside, you pass the varying logic as a function.

Compare these two approaches:

```javascript
// Without higher-order functions — repetitive structure
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

const evens = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) evens.push(numbers[i]);
}

// With higher-order functions — structure is abstracted
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
```

The second version communicates intent. `map` says "transform each element." `filter` says "keep only matching elements." The loop mechanics are hidden; the business logic is visible.

## Building your own higher-order functions

You do not need to wait for array methods to use this pattern. Here is a utility that retries a function call:

```javascript
function retry(fn, times, delay) {
  return function(...args) {
    for (let i = 0; i < times; i++) {
      try {
        return fn(...args);
      } catch (error) {
        if (i === times - 1) throw error;
        // could add delay here
      }
    }
  };
}

const fetchData = retry(() => {
  // might throw on bad connection
  return getDataFromAPI();
}, 3);

fetchData();
```

And a function that creates a debounced version of another function:

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const handleSearch = debounce((query) => {
  fetchResults(query);
}, 300);

// Rapid calls only execute the last one
handleSearch("a");
handleSearch("ab");
handleSearch("abc");  // only this one runs, after 300ms
```

Both of these use closures to capture and retain state (`timer`, `times`, `delay`) that the returned function uses on each call.

## Composition

Higher-order functions also enable composition — combining small functions into larger pipelines:

```javascript
function compose(f, g) {
  return (x) => f(g(x));
}

const toUpper = (s) => s.toUpperCase();
const trim = (s) => s.trim();
const clean = compose(toUpper, trim);

clean("  hello  ");  // "HELLO"
```

The composed function applies `trim` first, then `toUpper`. You build behavior by combining focused functions rather than writing one large function that does everything.

## What to carry forward

- functions are first-class values in JavaScript — they can be passed, returned, and stored
- a higher-order function takes a function as an argument, returns a function, or both
- array methods like `.map()`, `.filter()`, and `.reduce()` are higher-order functions
- higher-order functions abstract behavior, not just data
- returning functions from functions lets you create configured, specialized utilities
- composition combines small functions into larger pipelines

Higher-order functions are the mechanism behind most of JavaScript's most useful patterns. The next unit covers the data manipulation methods that put higher-order functions to work.
