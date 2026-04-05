---
title: "What the DOM is"
description: "Learn how the browser represents pages as a tree of objects, and how JavaScript accesses and modifies that tree to create interactive experiences."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

The **DOM** (Document Object Model) is the browser's programmatic representation of a web page. It is a tree of objects — each node represents an element, a piece of text, or other page content. JavaScript interacts with the DOM to read and change what the user sees.

## HTML is not the DOM

HTML is the source code you write. The DOM is what the browser builds from that source code after parsing.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

The browser parses this HTML and creates a tree:

```
Document
└── html
    ├── head
    │   └── title → "My Page"
    └── body
        ├── h1 → "Hello"
        └── p → "Welcome"
```

This tree is the DOM. Each node is a JavaScript object you can access and modify.

## The `document` object

`document` is the global entry point to the DOM. It represents the entire page:

```javascript
document.title;        // "My Page"
document.body;         // the <body> element
document.documentElement; // the <html> element
```

`document` is available in any browser script. It does not exist in Node.js or other server environments.

## Node types

Most nodes you interact with are **element nodes** — they represent HTML tags. But there are other types:

- **Element** — an HTML element like `<div>`, `<p>`, `<input>`
- **Text** — the text content inside an element
- **Comment** — an HTML comment `<!-- like this -->`
- **Document** — the root `document` object

```html
<p>Hello <strong>world</strong></p>
```

The DOM tree for this element:

```
p (Element)
├── "Hello " (Text node)
└── strong (Element)
    └── "world" (Text node)
```

When you select a `<p>` element and read its contents, the text is in child nodes, not directly on the element.

## The DOM is live

The DOM reflects the current state of the page. When JavaScript modifies the DOM, the browser updates the display. When the user interacts with the page, the DOM changes — form values update, classes are toggled, elements are added and removed.

This is what makes JavaScript interactive. Without DOM manipulation, a page is static — it looks the same from load to unload. With the DOM, a page responds to user input.

## Browser DevTools

Every browser provides DevTools to inspect the DOM. In Chrome, Firefox, and Edge, press F12 or right-click and select "Inspect".

The Elements panel shows the current DOM tree — not the original HTML, but the live state after JavaScript has modified it. This is the authoritative view of what the browser is actually rendering.

<Note title="The Elements panel shows the live DOM">
  <p>The DOM you see in DevTools may differ from the original HTML source. JavaScript may have added, removed, or modified elements. The Elements panel always shows the current state.</p>
</Note>

## What to carry forward

- the DOM is a tree representation of the page that the browser builds from HTML
- HTML is the source code; the DOM is the live object tree
- `document` is the global entry point to the DOM in the browser
- elements, text, and comments are all nodes in the tree
- the DOM is live — JavaScript changes it and the browser re-renders
- DevTools shows the current DOM state, not the original HTML

The DOM is the interface between JavaScript and what the user sees. The next lesson covers how to find specific elements in the tree.
