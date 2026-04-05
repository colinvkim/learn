---
title: "Promises"
description: "Learn how promises represent future values, how to chain them, and how they replaced nested callbacks with flat, readable async code."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

A promise represents a value that may be available now, later, or never. It is an object that acts as a placeholder for the result of an asynchronous operation.

Promises have three states:

- **pending** — the operation is still in progress
- **fulfilled** — the operation completed successfully
- **rejected** — the operation failed

Once a promise is fulfilled or rejected, it cannot change state.

## Creating promises

You can create a promise with the `Promise` constructor:

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Ada" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}
```

The executor function receives two arguments:

- `resolve(value)` — call this when the operation succeeds
- `reject(error)` — call this when the operation fails

In practice, you rarely create promises manually. APIs like `fetch()` already return promises.

## Consuming promises with `.then()` and `.catch()`

The `.then()` method attaches a callback that runs when the promise fulfills:

```javascript
fetchUser(1).then((user) => {
  console.log(user);  // { id: 1, name: "Ada" }
});
```

The `.catch()` method attaches a callback that runs when the promise rejects:

```javascript
fetchUser(-1).catch((error) => {
  console.error(error.message);  // "Invalid user ID"
});
```

## Chaining promises

`.then()` returns a new promise. If the callback returns a value, the new promise fulfills with that value. If the callback returns a promise, the new promise adopts that promise's state:

```javascript
fetchUser(1)
  .then((user) => {
    console.log(user.name);  // "Ada"
    return fetchOrders(user.id);  // returns a promise
  })
  .then((orders) => {
    console.log(orders);
    return orders[0];
  })
  .then((firstOrder) => {
    console.log(firstOrder);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
```

Each `.then()` receives the result of the previous one. Errors at any step skip to the nearest `.catch()`.

## `.finally()`

`.finally()` runs regardless of whether the promise fulfilled or rejected:

```javascript
fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("Request complete");  // always runs
  });
```

Use `.finally()` for cleanup — hiding loading spinners, closing connections, or resetting state.

## Parallel promises with `Promise.all`

When you have multiple independent async operations, `Promise.all` waits for all of them:

```javascript
const userPromise = fetchUser(1);
const ordersPromise = fetchOrders(1);

Promise.all([userPromise, ordersPromise])
  .then(([user, orders]) => {
    console.log(user, orders);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
```

If any promise rejects, `Promise.all` immediately rejects with that error.

## `Promise.allSettled`

`Promise.allSettled` waits for all promises to settle (fulfill or reject) and returns the result of each:

```javascript
Promise.allSettled([
  fetchUser(1),
  fetchUser(-1),  // will reject
])
.then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failed:", result.reason);
    }
  });
});
```

Use `allSettled` when you want results from all operations regardless of individual failures.

## `Promise.race`

`Promise.race` settles as soon as the first promise settles:

```javascript
Promise.race([
  fetchUser(1),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000)),
])
.then((user) => console.log(user))
.catch((error) => console.error(error.message));
```

This is commonly used to implement timeouts — if the fetch takes too long, the timeout promise rejects first.

## `Promise.any`

`Promise.any` fulfills as soon as the first promise fulfills. It only rejects if all promises reject:

```javascript
Promise.any([
  fetchFromServer1(),
  fetchFromServer2(),
  fetchFromServer3(),
])
.then((result) => console.log("Fastest server responded:", result))
.catch((error) => console.error("All servers failed"));
```

## Common promise mistakes

### Forgetting to return from `.then()`

```javascript
fetchUser(1)
  .then((user) => {
    fetchOrders(user.id);  // promise created but not returned
  })
  .then((orders) => {
    console.log(orders);  // undefined — previous .then() returned nothing
  });
```

Fix:

```javascript
fetchUser(1)
  .then((user) => {
    return fetchOrders(user.id);  // return the promise
  })
  .then((orders) => {
    console.log(orders);
  });
```

### Unhandled rejections

If a promise rejects and there is no `.catch()`, the error is swallowed in some environments and crashes in others:

```javascript
fetchUser(-1).then((user) => console.log(user));
// UnhandledPromiseRejectionWarning
```

Always attach a `.catch()` or use `async/await` with `try/catch`.

## What to carry forward

- a promise represents a future value — pending, fulfilled, or rejected
- `.then()` attaches a success callback; `.catch()` attaches an error callback
- `.then()` returns a new promise — chain them for sequential async operations
- `.finally()` runs regardless of outcome — use it for cleanup
- `Promise.all` waits for all promises — fails fast if any rejects
- `Promise.allSettled` waits for all and returns every result
- `Promise.race` settles with the first settled promise
- always return promises from `.then()` callbacks to chain them
- always handle rejections with `.catch()`

Promises replace nested callbacks with flat chains. The next lesson covers `async/await`, which makes promises look like synchronous code.
