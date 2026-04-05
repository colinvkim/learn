---
title: "Fetching data from APIs"
description: "Learn how to use the fetch API to make network requests, handle responses, and build reliable data-loading patterns."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

The `fetch` API is the built-in way to make HTTP requests in the browser and in many runtimes. It returns promises and works naturally with `async/await`.

## Basic fetch

`fetch` takes a URL and returns a promise that resolves to a `Response` object:

```javascript
const response = await fetch("https://api.example.com/users");
```

The response is not the data itself. It is an object representing the HTTP response. You need to call a method to extract the body:

```javascript
const response = await fetch("https://api.example.com/users");
const users = await response.json();
```

## Checking for errors

`fetch` does not reject on HTTP error status codes like 404 or 500. It only rejects on network failures:

```javascript
const response = await fetch("https://api.example.com/nonexistent");
// response.status === 404
// response.ok === false
// but no error was thrown
```

Always check `response.ok`:

```javascript
const response = await fetch("https://api.example.com/users");

if (!response.ok) {
  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}

const users = await response.json();
```

## A reusable fetch wrapper

Most projects wrap `fetch` in a utility function that handles error checking:

```javascript
async function apiRequest(path, options = {}) {
  const response = await fetch(`https://api.example.com${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}
```

Now API calls are one line:

```javascript
const users = await apiRequest("/users");
const newUser = await apiRequest("/users", {
  method: "POST",
  body: JSON.stringify({ name: "Ada" }),
});
```

## Request methods

`fetch` defaults to `GET`. Other methods require the `method` option:

```javascript
// GET
const users = await fetch("https://api.example.com/users").then((r) => r.json());

// POST
const response = await fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada", email: "ada@example.com" }),
});

// PUT
await fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada Lovelace" }),
});

// DELETE
await fetch("https://api.example.com/users/1", {
  method: "DELETE",
});
```

## Query parameters

Build query strings with `URLSearchParams`:

```javascript
const params = new URLSearchParams({ page: "2", limit: "20", sort: "name" });
const url = `https://api.example.com/users?${params}`;

const response = await fetch(url);
const users = await response.json();
```

## Handling non-JSON responses

Not all APIs return JSON. Use the appropriate response method:

```javascript
// Plain text
const text = await response.text();

// Blob (for images, files)
const blob = await response.blob();

// No body expected (204 No Content)
await fetch("https://api.example.com/users/1", { method: "DELETE" });
// no need to call .json() — the response has no body
```

## AbortController for cancellable requests

`AbortController` lets you cancel a fetch request:

```javascript
const controller = new AbortController();

fetch("https://api.example.com/slow-endpoint", {
  signal: controller.signal,
})
  .then((r) => r.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request cancelled");
    } else {
      console.error("Request failed:", error);
    }
  });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);
```

This is useful for search inputs — cancel the previous request when the user types again.

<Tip title="A practical search debounce with abort">
  <p>When building search, cancel the previous request when a new search starts. Combine <code>AbortController</code> with the debounce pattern from the higher-order functions lesson to avoid unnecessary network requests.</p>
</Tip>

## What to carry forward

- `fetch(url)` returns a promise resolving to a `Response` object, not the data
- call `.json()` on the response to parse JSON — it returns a promise
- `fetch` does not reject on HTTP errors — always check `response.ok`
- wrap `fetch` in a utility function to centralize error handling and headers
- use `URLSearchParams` to build query strings
- use `AbortController` to cancel requests that are no longer needed
- different response methods exist: `.json()`, `.text()`, `.blob()`

Fetching data from APIs is the most common async operation in frontend JavaScript. Combined with error handling and the event loop, you now have the complete async toolkit. The next unit covers the browser and the DOM.
