---
title: "Selecting elements"
description: "Learn how to find specific elements in the DOM using query selectors, and the difference between selecting one element and selecting many."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Before JavaScript can change an element, it needs to find it. The DOM provides several methods for selecting elements, all based on CSS selectors.

## `querySelector` selects one element

`document.querySelector()` returns the **first** element that matches a CSS selector:

```javascript
const heading = document.querySelector("h1");
const menuItem = document.querySelector(".nav li:first-child");
const submitBtn = document.querySelector("#submit");
```

If no element matches, it returns `null`:

```javascript
const missing = document.querySelector(".nonexistent");
console.log(missing);  // null
```

## `querySelectorAll` selects all matches

`document.querySelectorAll()` returns a **NodeList** of all matching elements:

```javascript
const paragraphs = document.querySelectorAll("p");
const activeItems = document.querySelectorAll(".nav li.active");
```

The NodeList is array-like — it has `.length` and `.forEach()`, but it is not an actual array:

```javascript
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log(item.textContent);
});

// Convert to a real array to use array methods
const itemsArray = Array.from(items);
const firstThree = itemsArray.slice(0, 3);
```

<Note title="NodeList is live in some cases but not all">
  <p><code>querySelectorAll</code> returns a static NodeList — it does not update when the DOM changes. Older methods like <code>getElementsByClassName</code> return live HTMLCollections that do update. Static NodeLists are generally safer because they do not change during iteration.</p>
</Note>

## Legacy selection methods

Older code uses these methods. They still work but `querySelector` and `querySelectorAll` are preferred:

```javascript
document.getElementById("submit");       // single element by ID
document.getElementsByClassName("nav");  // live HTMLCollection by class
document.getElementsByTagName("p");      // live HTMLCollection by tag name
```

These return live collections that update when the DOM changes. This can cause bugs during iteration:

```javascript
const items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
  items[i].remove();  // removes the element — items.length changes, items shift
}
// Some items are skipped because the collection is live
```

## Common selector patterns

```javascript
// By ID — fastest, returns one element
document.querySelector("#username");

// By class — returns all elements with this class
document.querySelectorAll(".card");

// By attribute
document.querySelector('[type="email"]');
document.querySelectorAll('[data-active="true"]');

// Descendant selector
document.querySelector("form input[name='password']");

// Direct child selector
document.querySelectorAll("ul > li");

// Pseudo-selectors
document.querySelector("li:first-child");
document.querySelector("li:last-child");
document.querySelector("li:nth-child(2)");
```

## Checking whether an element exists

Always check for `null` before using a selected element:

```javascript
const modal = document.querySelector(".modal");

if (modal) {
  modal.classList.add("visible");
}
```

Accessing a property on `null` throws an error:

```javascript
document.querySelector(".missing").textContent;
// TypeError: Cannot read properties of null (reading 'textContent')
```

## Selection scope

You can call `querySelector` on any element, not just `document`. This scopes the selection to descendants of that element:

```javascript
const card = document.querySelector(".card");

if (card) {
  const title = card.querySelector("h2");       // h2 inside this card only
  const button = card.querySelector("button");   // button inside this card only
}
```

This is essential when working with multiple similar elements — each card has its own heading and button.

## What to carry forward

- `querySelector(selector)` returns the first matching element or `null`
- `querySelectorAll(selector)` returns a static NodeList of all matches
- NodeLists are array-like — use `.forEach()` or convert to array with `Array.from()`
- always check for `null` before using a selected element
- `querySelector` works on any element, not just `document` — use it to scope searches
- prefer `querySelector`/`querySelectorAll` over legacy methods

Selection is the first step in DOM manipulation. The next lesson covers how to change what elements display.
