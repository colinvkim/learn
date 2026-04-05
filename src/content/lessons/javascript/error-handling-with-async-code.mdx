---
title: "Error handling with async code"
description: "Learn how to catch and handle errors from promises and async/await, and the patterns that prevent silent failures."
course: javascript
status: published
---

import Warning from "../../../components/content/Warning.astro";

Errors in asynchronous code are easy to miss. A rejected promise without a handler can fail silently in some environments and crash in others. Understanding how async errors propagate is essential for writing reliable code.

## Errors in promises

A rejected promise travels down the chain until it finds a `.catch()`:

```javascript
fetchUser(1)
  .then((user) => fetchOrders(user.id))
  .then((orders) => processOrders(orders))
  .catch((error) => {
    console.error("Failed:", error);
  });
```

If `fetchUser`, `fetchOrders`, or `processOrders` throws or rejects, the `.catch()` at the end handles it.

### Missing `.catch()` is a silent failure

```javascript
fetchUser(1)
  .then((user) => fetchOrders(user.id))
  .then((orders) => processOrders(orders));
  // no .catch() — errors are swallowed or crash the process
```

In browsers, this produces an `unhandledrejection` event. In Node.js (v15+), it crashes the process. Either way, it is a bug.

## Errors with async/await

`await` turns rejected promises into thrown exceptions. Catch them with `try/catch`:

```javascript
async function loadData() {
  try {
    const user = await fetchUser(1);
    const orders = await fetchOrders(user.id);
    return processOrders(orders);
  } catch (error) {
    console.error("Failed to load data:", error);
    return null;
  }
}
```

### Catching specific errors

You can check error types to handle them differently:

```javascript
async function loadData() {
  try {
    const user = await fetchUser(1);
    const orders = await fetchOrders(user.id);
    return processOrders(orders);
  } catch (error) {
    if (error.name === "NetworkError") {
      console.error("Network issue — check connection");
    } else if (error.message.includes("404")) {
      console.error("Resource not found");
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
}
```

### Catching individual operations

Sometimes you want to handle one failure and continue:

```javascript
async function loadData() {
  let user;

  try {
    user = await fetchUser(1);
  } catch (error) {
    console.error("User failed, using anonymous");
    user = { name: "Anonymous" };
  }

  let orders = [];
  try {
    orders = await fetchOrders(user.id);
  } catch (error) {
    console.error("Orders failed, showing empty");
  }

  return { user, orders };
}
```

One failure does not crash the entire flow.

## Errors with `Promise.all`

`Promise.all` rejects as soon as any promise rejects. The error is from the first rejection:

```javascript
async function loadAll() {
  try {
    const results = await Promise.all([
      fetchUser(1),
      fetchOrders(1),
      fetchProducts(),
    ]);
    return results;
  } catch (error) {
    // Only one error is caught — which one depends on which rejects first
    console.error("One of the requests failed:", error);
  }
}
```

If you need all results regardless of failures, use `Promise.allSettled`:

```javascript
async function loadAll() {
  const results = await Promise.allSettled([
    fetchUser(1),
    fetchOrders(1),
    fetchProducts(),
  ]);

  const users = results[0].status === "fulfilled" ? results[0].value : null;
  const orders = results[1].status === "fulfilled" ? results[1].value : [];
  const products = results[2].status === "fulfilled" ? results[2].value : [];

  return { users, orders, products };
}
```

## Common async mistakes

### Forgetting `await`

```javascript
async function loadData() {
  const user = fetchUser(1);  // missing await — user is a Promise, not data
  console.log(user.name);     // undefined
}
```

The code does not throw — it just does not work as intended. `user` is a promise object, not the resolved value.

### Mixing `.then()` and `await`

```javascript
async function loadData() {
  const user = await fetchUser(1).then((u) => u.name);
  return user;
}
```

This works but is confusing. Pick one style. With `async/await`:

```javascript
async function loadData() {
  const user = await fetchUser(1);
  return user.name;
}
```

### Swallowing errors

```javascript
async function loadData() {
  try {
    return await fetchUser(1);
  } catch (error) {
    // empty catch — error is silently swallowed
  }
}
```

An empty catch block hides the error. At minimum, log it:

```javascript
catch (error) {
  console.error("Failed to load user:", error);
  throw error;  // re-throw if the caller should handle it
}
```

<Warning title="Never leave a catch block empty">
  <p>An empty catch block is the hardest async bug to track down. The error happened somewhere but there is no record of it. Always log, re-throw, or return a sentinel value.</p>
</Warning>

## What to carry forward

- rejected promises travel down the chain until they find a `.catch()`
- always attach a `.catch()` to promise chains
- `await` turns rejections into thrown exceptions — catch them with `try/catch`
- catch individual operations separately when you want to continue after a failure
- `Promise.all` fails on the first rejection — use `allSettled` when you need all results
- never leave a catch block empty — log, re-throw, or return a sentinel value
- do not mix `.then()` and `await` — pick one style

Error handling protects users from broken states. The next lesson covers fetching data from APIs, the most common async operation in frontend JavaScript.
