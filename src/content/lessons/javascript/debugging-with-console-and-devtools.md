---
title: "Debugging with console and DevTools"
description: "Learn how to use the console and browser DevTools to inspect values, trace execution, and find the root cause of bugs."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

`console.log` is the most common debugging tool. But the console and DevTools offer much more than basic logging.

## Console methods

Beyond `console.log`, several methods add structure to debugging output:

```javascript
console.log("Value:", value);          // general logging
console.warn("This is a warning");     // yellow warning message
console.error("Something failed");     // red error message with stack trace
console.info("Info message");          // info-level message
```

### `console.table`

`console.table` displays arrays and objects as a formatted table:

```javascript
const users = [
  { name: "Ada", role: "engineer", active: true },
  { name: "Grace", role: "manager", active: false },
  { name: "Alan", role: "designer", active: true },
];

console.table(users);
```

Displays as a table with columns for `name`, `role`, `active`, and an index column.

### `console.dir`

`console.dir` displays an interactive listing of an object's properties:

```javascript
const element = document.querySelector("form");
console.dir(element);  // shows all properties of the DOM element
```

### `console.group`

`console.group` nests log messages under a collapsible heading:

```javascript
console.group("User Data");
console.log("Name:", user.name);
console.log("Email:", user.email);
console.groupEnd();
```

Groups can be nested:

```javascript
console.group("Order");
console.log("ID:", order.id);
console.group("Items");
order.items.forEach((item) => console.log(item.name));
console.groupEnd();
console.groupEnd();
```

### `console.trace`

`console.trace` prints a stack trace at the point where it is called:

```javascript
function processData(data) {
  if (!data) {
    console.trace("Data is missing");
    return;
  }
}
```

This shows the call chain leading to the trace — useful for finding where unexpected values come from.

## Breakpoints in DevTools

Breakpoints pause execution at a specific line so you can inspect the current state.

### Setting a breakpoint

1. Open DevTools (F12 or right-click → Inspect)
2. Go to the **Sources** (Chrome) or **Debugger** (Firefox) tab
3. Find your JavaScript file in the file navigator
4. Click on a line number to set a breakpoint

When execution reaches that line, the program pauses. You can then:

- hover over variables to see their current values
- use the **Scope** panel to see all variables in the current scope
- use the **Watch** panel to track specific expressions

### Stepping through code

When paused at a breakpoint, use the step controls:

- **Step over** (F10) — run the current line and move to the next one without entering functions
- **Step into** (F11) — enter the function called on the current line
- **Step out** (Shift+F11) — finish the current function and return to the caller
- **Resume** (F8) — continue execution until the next breakpoint

### Conditional breakpoints

Right-click a breakpoint to set a condition. The breakpoint only pauses when the condition is true:

```
i === 5
```

This is useful for debugging issues that only occur at a specific iteration or state.

## The `debugger` statement

The `debugger` statement pauses execution when DevTools is open:

```javascript
function processData(data) {
  debugger;  // execution pauses here if DevTools is open
  return data.map(transform);
}
```

This is equivalent to setting a breakpoint in DevTools but is committed to the source code. Remove `debugger` statements before committing — they should not reach production.

<Note title="debugger statements should not reach production">
  <p>Leave <code>debugger</code> in your code during debugging, but remove it before committing. Some build tools strip <code>debugger</code> automatically in production builds. Do not rely on this — remove them explicitly.</p>
</Note>

## Network tab

The **Network** tab shows all HTTP requests the page makes:

- request URL, method, and status code
- request and response headers
- request payload and response body
- timing — how long each request took

This is essential for debugging API calls — check whether the request was sent, what data was sent, and what the server returned.

## Common debugging workflow

1. Reproduce the bug consistently
2. Check the console for error messages
3. Read the stack trace — go to the exact line
4. Set a breakpoint before the error or add `console.log` to inspect values
5. Step through the code to find where the value diverges from expectations
6. Fix the root cause, not the symptom
7. Verify the fix and check that related code is not affected

## What to carry forward

- `console.table`, `console.dir`, `console.group`, and `console.trace` add structure beyond `console.log`
- breakpoints pause execution for inspection — set them in DevTools Sources panel
- step over, step into, and step out let you trace execution line by line
- conditional breakpoints only pause when a condition is met
- the `debugger` statement pauses execution in code — remove before committing
- the Network tab shows all HTTP requests — essential for debugging API calls
- always check the console for error messages before adding debug statements

Debugging is a skill that improves with practice. The next lesson covers the most common JavaScript mistakes and how to avoid them.
