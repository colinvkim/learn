---
title: "Naming and small functions"
description: "Learn how clear names reduce the need for comments, why small functions are easier to test and reuse, and how to strike the right balance."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

Code is read far more often than it is written. The names you choose and the size of the functions you write determine how easily someone (including future you) can understand what the code does.

## Naming variables

A good name answers the question: **what is this?**

```javascript
// Unclear
const d = new Date();
const x = d.getDate();

// Clear
const today = new Date();
const dayOfMonth = today.getDate();
```

The clear version requires no comment. The reader knows what each variable holds from its name.

### Names should describe content, not type

```javascript
// Describes type — not helpful
const str = "Ada";
const arr = [1, 2, 3];
const obj = { name: "Ada" };

// Describes content — useful
const userName = "Ada";
const productIds = [1, 2, 3];
const settings = { theme: "dark" };
```

The type is visible in the value. What matters is what the value represents.

### Boolean names should read as questions

```javascript
// Unclear — what does `lock` mean?
const lock = true;

// Clear — reads as a question with a yes/no answer
const isLocked = true;
const hasPermission = false;
const canEdit = true;
const shouldRetry = false;
```

### Function names should start with verbs

```javascript
getUser();       // retrieves a user
createUser();    // creates a user
isValidEmail();  // checks validity — returns boolean
formatDate();    // transforms a date
```

## Naming functions

A function's name should describe what it does, not how it does it:

```javascript
// Describes implementation — not intent
function processWithLoopAndCondition(data) { ... }

// Describes outcome — clear intent
function filterActiveUsers(users) { ... }
```

## Small functions

A small function does one thing. Its name describes that thing completely. Its body is short enough to understand at a glance.

```javascript
// Too much in one function
function processOrder(order) {
  // validate order
  if (!order || !order.items) throw new Error("Invalid order");

  // calculate subtotal
  let subtotal = 0;
  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }

  // apply discount
  const discount = order.coupon ? calculateDiscount(order.coupon, subtotal) : 0;

  // calculate tax
  const tax = (subtotal - discount) * order.taxRate;

  // build result
  return {
    subtotal,
    discount,
    tax,
    total: subtotal - discount + tax,
  };
}

// Broken into small functions
function processOrder(order) {
  validateOrder(order);

  const subtotal = calculateSubtotal(order.items);
  const discount = calculateDiscount(order.coupon, subtotal);
  const tax = calculateTax(subtotal, discount, order.taxRate);

  return { subtotal, discount, tax, total: subtotal - discount + tax };
}

function validateOrder(order) {
  if (!order || !order.items) throw new Error("Invalid order");
}

function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateDiscount(coupon, subtotal) {
  if (!coupon) return 0;
  return subtotal * coupon.discountRate;
}

function calculateTax(subtotal, discount, taxRate) {
  return (subtotal - discount) * taxRate;
}
```

The refactored version has more functions but each one is simple and testable independently. The main `processOrder` function reads like a description of the steps.

<Tip title="How small is small?">
  <p>A function that fits on one screen without scrolling is usually small enough. If you need to scroll to understand it, consider breaking it up. There is no hard rule — a 20-line function that does one thing is better than three 5-line functions that are tightly coupled.</p>
</Tip>

## When not to abstract

Small functions and good names do not mean every line should be extracted. Over-abstraction makes code harder to follow:

```javascript
// Over-abstracted — the reader jumps between functions to understand flow
function run() {
  const a = getA();
  const b = getB(a);
  const c = getC(b);
  return processC(c);
}

// Sometimes inline is clearer
function run() {
  const user = await fetchUser(id);
  const orders = await fetchOrders(user.id);
  return orders.filter((o) => o.active);
}
```

Extract when the extracted piece has a clear name that adds understanding. Leave inline when the code is already self-explanatory and extracting it would add indirection without clarity.

## What to carry forward

- names should describe content and intent, not type
- boolean names should read as yes/no questions: `isActive`, `hasPermission`
- function names should start with verbs: `getUser`, `isValid`, `formatDate`
- small functions do one thing and are testable independently
- a function that fits on one screen is usually small enough
- do not over-abstract — inline code is sometimes clearer than extracted functions

Naming and function size are the foundation of readable code. The next lesson covers avoiding duplication and keeping code DRY.
