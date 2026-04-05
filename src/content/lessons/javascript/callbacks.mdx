---
title: "Callbacks"
description: "Learn the original pattern for handling asynchronous operations in JavaScript — how callbacks work, why callback hell happens, and how to avoid it."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Before promises and async/await existed, callbacks were the only way to handle asynchronous operations in JavaScript. Understanding callbacks explains why the newer patterns were invented.

## What is a callback

A callback is a function passed as an argument to another function, intended to be called later when an operation completes:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback({ name: "Ada", role: "engineer" });
  }, 1000);
}

fetchData((data) => {
  console.log(data);  // { name: "Ada", role: "engineer" }
});

console.log("This runs before the callback");
```

The callback does not run immediately. It runs when the async operation (`setTimeout`) finishes. Meanwhile, the rest of the code continues executing.

## The error-first callback pattern

Node.js standardized callbacks with a convention: the first argument is always an error (or `null` if there was no error):

```javascript
function readFile(path, callback) {
  // imaginary async operation
  fs.readFile(path, (err, content) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, content);
  });
}

readFile("data.txt", (err, content) => {
  if (err) {
    console.error("Failed to read file:", err);
    return;
  }
  console.log(content);
});
```

Every callback checks for an error first. This pattern is repetitive but predictable.

## Callback hell

When async operations depend on each other, callbacks nest:

```javascript
getUser(userId, (err, user) => {
  if (err) return handleError(err);

  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);

    getOrderDetails(orders[0].id, (err, details) => {
      if (err) return handleError(err);

      getProduct(details.productId, (err, product) => {
        if (err) return handleError(err);

        console.log(product);
      });
    });
  });
});
```

This is "callback hell" — deeply nested code that is hard to read, hard to debug, and hard to refactor. Each async step adds another level of indentation.

Error handling is also repetitive — every callback needs its own error check.

## Avoiding callback hell

### Extract named functions

Move nested callbacks to the top level:

```javascript
function handleProduct(err, product) {
  if (err) return handleError(err);
  console.log(product);
}

function handleDetails(err, details) {
  if (err) return handleError(err);
  getProduct(details.productId, handleProduct);
}

function handleOrders(err, orders) {
  if (err) return handleError(err);
  getOrderDetails(orders[0].id, handleDetails);
}

function handleUser(err, user) {
  if (err) return handleError(err);
  getOrders(user.id, handleOrders);
}

getUser(userId, handleUser);
```

The logic is the same but the code is flat and readable. The downside is that the functions are now scattered and harder to follow top to bottom.

### Promises replace nesting

Promises (covered in the next lesson) flatten this pattern into a chain:

```javascript
getUserAsync(userId)
  .then((user) => getOrdersAsync(user.id))
  .then((orders) => getOrderDetailsAsync(orders[0].id))
  .then((details) => getProductAsync(details.productId))
  .then((product) => console.log(product))
  .catch(handleError);
```

One `.catch()` at the end handles errors from any step.

## Where callbacks still appear

Callbacks are not dead. They appear in:

- DOM event listeners (`addEventListener` is a callback pattern)
- `setTimeout` and `setInterval`
- Node.js file system APIs (`fs.readFile`, `fs.writeFile`)
- Third-party libraries that predate promises

```javascript
button.addEventListener("click", (event) => {
  console.log("Button clicked");
});
```

This is a callback but not "callback hell" — the callback is a single level, not nested inside other async operations.

## What to carry forward

- a callback is a function called when an async operation completes
- the error-first pattern passes `(err, result)` to every callback
- callback hell is nested callbacks depending on each other — hard to read and maintain
- extract named functions to flatten nested callbacks
- promises and async/await replaced the callback pattern for complex async flows
- callbacks are still used for event handlers, timers, and some Node.js APIs

Callbacks were the original async pattern. Promises improved on them, covered in the next lesson.
