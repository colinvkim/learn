---
title: "Event listeners"
description: "Learn how JavaScript responds to user actions — clicks, key presses, form submissions — and how to attach, manage, and remove event handlers."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Events are how JavaScript responds to user actions and browser activity. Every click, key press, scroll, and page load generates an event that your code can handle.

## `addEventListener`

`addEventListener` attaches a callback to an element that runs when the event occurs:

```javascript
const button = document.querySelector("#submit");

button.addEventListener("click", (event) => {
  console.log("Button was clicked");
});
```

The callback receives an **event object** with details about what happened:

```javascript
button.addEventListener("click", (event) => {
  console.log(event.target);       // the element that was clicked
  console.log(event.type);         // "click"
  console.log(event.clientX, event.clientY); // mouse position
});
```

## Common events

| Event | When it fires |
|---|---|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mousedown` / `mouseup` | Mouse button is pressed / released |
| `keydown` / `keyup` | Key is pressed / released |
| `input` | Input value changes (fires on every keystroke) |
| `change` | Input value changes and loses focus (for selects and checkboxes) |
| `submit` | Form is submitted |
| `focus` / `blur` | Element gains / loses focus |
| `scroll` | Element is scrolled |
| `resize` | Window is resized |
| `load` | Page or resource finishes loading |
| `DOMContentLoaded` | HTML is parsed and DOM is ready |

## `event.target` vs `this`

Inside an event handler, `this` and `event.currentTarget` refer to the element the listener is attached to. `event.target` refers to the element that actually triggered the event.

These differ when the event bubbles up from a child:

```html
<button id="btn">
  <span>Click me</span>
</button>
```

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
  console.log(event.target);   // <span> — the element actually clicked
  console.log(this);           // <button> — the element with the listener
  console.log(event.currentTarget); // <button> — same as this
});
```

## Event delegation

Instead of adding a listener to every child element, add one to the parent and check `event.target`:

```html
<ul id="list">
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
  <li data-id="3">Item 3</li>
</ul>
```

```javascript
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;  // clicked outside any li

  const id = item.dataset.id;
  console.log("Clicked item:", id);
});
```

`event.target.closest(selector)` walks up the DOM tree from the target until it finds a matching ancestor. This handles clicks on nested elements inside the `<li>`.

Event delegation is more efficient — one listener instead of many — and it works for elements added dynamically.

## `event.preventDefault()`

`preventDefault()` stops the browser's default behavior for an event:

```javascript
const form = document.querySelector("#signup");

form.addEventListener("submit", (event) => {
  event.preventDefault();  // prevent the page from reloading
  // handle form submission with JavaScript instead
});
```

```javascript
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();  // prevent navigation
  // handle the click with JavaScript instead
});
```

## `event.stopPropagation()`

`stopPropagation()` prevents the event from bubbling up to parent elements:

```javascript
const child = document.querySelector(".child");

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");
});

document.querySelector(".parent").addEventListener("click", () => {
  console.log("This will not run");
});
```

This is rarely needed. Most of the time, you want events to bubble so delegation works.

## Removing event listeners

`removeEventListener` detaches a handler. It requires a reference to the same function that was added:

```javascript
function handleClick(event) {
  console.log("clicked");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

Anonymous functions cannot be removed:

```javascript
button.addEventListener("click", () => console.log("clicked"));
// Cannot remove this — no reference to the function
```

<Note title="Most listeners do not need to be removed">
  <p>If the element stays on the page for the lifetime of the app, there is no need to remove its listeners. Removal matters when elements are destroyed and recreated, or when a listener should only fire once. Use <code>{ once: true }</code> for one-time listeners instead of manually removing them.</p>
</Note>

## Listener options

The third argument to `addEventListener` is an options object:

```javascript
button.addEventListener("click", handleClick, {
  once: true,       // automatically remove after first firing
  capture: true,    // listen during the capture phase (top-down) instead of bubble phase (bottom-up)
  passive: true,    // promises not to call preventDefault — improves scroll performance
});
```

## What to carry forward

- `addEventListener(event, callback)` attaches a handler to an element
- the callback receives an event object with `target`, `type`, and other details
- `event.target` is the element that triggered the event; `this` is the element with the listener
- event delegation uses one listener on a parent to handle events from many children
- `event.preventDefault()` stops the browser's default behavior
- `event.stopPropagation()` prevents bubbling — rarely needed
- use `{ once: true }` for one-time listeners
- most listeners on permanent elements do not need to be removed

Events are how users interact with your app. The next lesson covers forms and input handling — the most common interactive elements.
