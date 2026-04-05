---
title: "Updating text, attributes, and styles"
description: "Learn how to change what elements display — their text content, HTML attributes, CSS classes, and inline styles."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Once you have selected an element, the most common operation is changing what it shows or how it looks.

## Text content

`textContent` reads or sets the plain text inside an element:

```html
<p id="message">Hello</p>
```

```javascript
const message = document.querySelector("#message");

message.textContent;         // "Hello"
message.textContent = "Updated";
```

Setting `textContent` replaces all child nodes with a single text node. It is safe — the browser does not interpret the text as HTML:

```javascript
message.textContent = "<script>alert('xss')</script>";
// The page displays the literal text: <script>alert('xss')</script>
```

## `innerHTML`

`innerHTML` reads or sets the HTML content inside an element:

```javascript
const container = document.querySelector("#container");
container.innerHTML = "<strong>Bold text</strong>";
// The container now contains a <strong> element
```

<Note title="innerHTML is a security risk with user input">
  <p>Setting <code>innerHTML</code> with user-supplied data can execute malicious scripts. Use <code>textContent</code> for user input. If you must insert HTML, sanitize it first or use <code>DOMPurify</code> or a similar library.</p>
</Note>

## Creating and inserting elements

To build DOM structure programmatically:

```javascript
const card = document.createElement("div");
card.className = "card";

const title = document.createElement("h2");
title.textContent = "Product Name";

const price = document.createElement("p");
price.textContent = "$29.99";

card.appendChild(title);
card.appendChild(price);

document.querySelector("#products").appendChild(card);
```

### Inserting with `insertAdjacentHTML`

For larger chunks of HTML, `insertAdjacentHTML` is faster than creating elements one by one:

```javascript
const container = document.querySelector("#products");

container.insertAdjacentHTML("beforeend", `
  <div class="card">
    <h2>Product Name</h2>
    <p>$29.99</p>
  </div>
`);
```

The first argument specifies the position:

- `"beforebegin"` — before the element itself
- `"afterbegin"` — inside the element, before its first child
- `"beforeend"` — inside the element, after its last child
- `"afterend"` — after the element itself

## Attributes

`getAttribute` and `setAttribute` read and write HTML attributes:

```javascript
const link = document.querySelector("a");

link.getAttribute("href");          // the href attribute value
link.setAttribute("href", "/new");   // changes the href
link.removeAttribute("target");      // removes the target attribute
```

### Common attribute properties

Some attributes have direct property equivalents:

```javascript
const input = document.querySelector("input");

input.value = "new value";      // instead of setAttribute("value", ...)
input.disabled = true;           // instead of setAttribute("disabled", "")
input.placeholder = "Type here"; // instead of setAttribute("placeholder", ...)
```

Use the property when one exists — it is more direct and handles type conversion (e.g., `disabled` is a boolean, not a string).

## Classes

`classList` provides methods for managing CSS classes:

```javascript
const element = document.querySelector(".card");

element.classList.add("active");       // add a class
element.classList.remove("hidden");    // remove a class
element.classList.toggle("active");    // add if missing, remove if present
element.classList.contains("active");  // true or false
element.classList.replace("old", "new"); // replace one class with another
```

Toggling is the most common operation for showing and hiding elements:

```javascript
const modal = document.querySelector(".modal");
modal.classList.toggle("visible");  // show or hide
```

## Inline styles

The `style` property accesses inline styles:

```javascript
const element = document.querySelector(".box");

element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.display = "none";
```

CSS property names use camelCase in JavaScript (`backgroundColor` instead of `background-color`).

Setting individual styles works for one-off changes. For multiple properties, toggling a class is cleaner:

```javascript
// Multiple inline styles — hard to maintain
element.style.display = "flex";
element.style.justifyContent = "center";
element.style.alignItems = "center";
element.style.gap = "16px";

// Better — toggle a class and define styles in CSS
element.classList.add("centered-flex");
```

## What to carry forward

- `textContent` is the safe way to set plain text — it does not interpret HTML
- `innerHTML` sets HTML content but is a security risk with user input
- `createElement`, `appendChild`, and `insertAdjacentHTML` add new elements
- `getAttribute`, `setAttribute`, and `removeAttribute` manage HTML attributes
- `classList.add`, `.remove`, `.toggle`, `.contains`, and `.replace` manage CSS classes
- `style.property` sets inline styles — use camelCase for CSS property names
- prefer toggling classes over setting multiple inline styles

Changing content and appearance is half of DOM work. The other half is responding to user actions, covered in the next lesson.
