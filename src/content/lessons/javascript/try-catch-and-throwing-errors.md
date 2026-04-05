---
title: "try / catch and throwing errors"
description: "Learn how JavaScript handles errors, how to catch and handle them gracefully, and when to throw your own errors to signal problems."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Warning from "../../../components/content/Warning.astro";

Errors are inevitable. Input is missing, a network request fails, a value has the wrong type. How your code responds to errors determines whether users see a helpful message or a broken page.

## `try / catch` catches synchronous errors

`try` wraps code that might throw. `catch` handles the error if one occurs:

```javascript
try {
  const data = JSON.parse(maybeInvalidString);
  console.log(data);
} catch (error) {
  console.error("Failed to parse JSON:", error.message);
}
```

If no error is thrown, `catch` is skipped. If an error is thrown, execution jumps to `catch` with the error as an argument.

## `finally` runs regardless of outcome

```javascript
let connection;

try {
  connection = openConnection();
  connection.send(data);
} catch (error) {
  console.error("Send failed:", error.message);
} finally {
  if (connection) connection.close();  // always runs
}
```

Use `finally` for cleanup — closing resources, resetting UI state, or hiding loading indicators.

## Throwing errors

Use `throw` to signal that something is wrong. Any value can be thrown, but `Error` objects are the standard:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);  // "Cannot divide by zero"
}
```

### Custom error types

Create specific error types for different failure modes:

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.field = field;
    this.name = "ValidationError";
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("email", "Invalid email address");
  }
}

try {
  validateEmail("not-an-email");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Field "${error.field}": ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## When to throw

Throw when:

- a function receives invalid input that it cannot reasonably handle
- a required resource is unavailable
- an invariant is violated — a condition that should always be true

```javascript
function getUser(users, id) {
  if (!Array.isArray(users)) {
    throw new TypeError("users must be an array");
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    throw new Error(`User ${id} not found`);
  }

  return user;
}
```

Do not throw for expected conditions that are part of normal flow:

```javascript
// Bad — returning null is fine for "not found"
function findUser(users, id) {
  return users.find((u) => u.id === id) || null;
}
```

The caller can check for `null` without needing a try/catch.

## `try / catch` with async code

`try / catch` catches `await` expressions that reject:

```javascript
async function loadData() {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to load data:", error.message);
    return null;
  }
}
```

<Warning title="try / catch does not catch errors outside await">
  <p><code>try / catch</code> only catches errors from synchronous code and <code>await</code> expressions. It does not catch errors in callbacks or promises that are not awaited:</p>
</Warning>

```javascript
try {
  fetchUser(1).then((user) => {
    throw new Error("This is NOT caught");  // inside a callback — not caught
  });
} catch (error) {
  // never runs
}
```

Fix by awaiting or adding `.catch()` to the promise chain.

## What to carry forward

- `try / catch` catches synchronous errors and rejected awaited promises
- `finally` always runs — use it for cleanup
- `throw new Error("message")` signals a problem the caller should handle
- custom error types (`ValidationError`, `NetworkError`) enable specific error handling
- throw for invalid input and violated invariants, not for expected "not found" results
- `try / catch` does not catch errors inside un-awaited promise callbacks

Error handling protects your code from unexpected states. The next lesson covers reading and understanding error messages.
