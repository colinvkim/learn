---
title: "How objects actually work"
description: "Learn what JavaScript objects really are under the hood — property maps, internal slots, and the prototype link that makes inheritance possible."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

At the surface, objects look like simple key-value stores. Under the hood, they are more structured. Understanding how objects actually work explains why methods exist on every array, why you can call `.toString()` on anything, and why prototype inheritance behaves the way it does.

## Objects are property maps

Every plain object is a collection of properties. Each property has:

- a **key** (a string or symbol)
- a **value** (any type)
- a set of **attributes** that control whether the property can be enumerated, written to, or configured

When you write:

```javascript
const user = { name: "Ada" };
```

JavaScript creates an object with one property whose key is `"name"`, whose value is `"Ada"`, and whose attributes make it enumerable, writable, and configurable.

## Internal slots

Objects also have **internal slots** — properties that JavaScript uses but you cannot access directly. They are denoted with double brackets in the specification.

The most important internal slot for everyday understanding is `[[Prototype]]`. Every object has a `[[Prototype]]` slot that points to another object or to `null`. This link is what connects an array to `.map()`, a string to `.toUpperCase()`, and every object to `.toString()`.

You can inspect an object's prototype with `Object.getPrototypeOf()`:

```javascript
const user = { name: "Ada" };

Object.getPrototypeOf(user);
// { constructor: f, __defineGetter__: f, __defineSetter__: f, hasOwnProperty: f, ... }
```

The returned object is `Object.prototype` — the default prototype for plain objects.

## Where methods come from

When you call `.toString()` on a plain object, JavaScript does not find `toString` on the object itself. It follows the `[[Prototype]]` link and finds it there:

```javascript
const user = { name: "Ada" };

user.toString();  // "[object Object]"

// How the lookup works:
// 1. Does user have "toString"? No.
// 2. Follow [[Prototype]] to Object.prototype.
// 3. Does Object.prototype have "toString"? Yes — call it.
```

Arrays work the same way but point to `Array.prototype`:

```javascript
const arr = [1, 2, 3];

Object.getPrototypeOf(arr) === Array.prototype;  // true

arr.map((n) => n * 2);  // map comes from Array.prototype
```

Strings, numbers, and booleans also have wrapper objects with prototypes, which is why primitives have methods:

```javascript
"hello".toUpperCase();  // "HELLO" — comes from String.prototype
```

<Note title="Primitives are not objects">
  <p>When you access a method on a primitive like <code>"hello".toUpperCase()</code>, JavaScript temporarily wraps the primitive in its object counterpart (<code>String</code>), calls the method, and discards the wrapper. The primitive itself is still a primitive.</p>
</Note>

## The prototype chain ends at `null`

Prototype links form a chain. Lookups walk up the chain until they find the property or hit `null`:

```
user → Object.prototype → null
```

For arrays:

```
arr → Array.prototype → Object.prototype → null
```

`Array.prototype` itself inherits from `Object.prototype`, which is why arrays have both `.map()` (from `Array.prototype`) and `.toString()` (from `Object.prototype`).

## Setting the prototype

You usually do not set `[[Prototype]]` directly. It is set automatically when you create an object. But you can control it:

```javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  },
};

const dog = Object.create(animal);
dog.name = "Rex";

dog.speak();  // "Rex makes a sound"

Object.getPrototypeOf(dog) === animal;  // true
```

`Object.create(obj)` creates a new object whose `[[Prototype]]` is `obj`. This is the simplest form of prototype-based inheritance.

## Property descriptors

You can inspect a property's full configuration with `Object.getOwnPropertyDescriptor`:

```javascript
const user = { name: "Ada" };

Object.getOwnPropertyDescriptor(user, "name");
// { value: "Ada", writable: true, enumerable: true, configurable: true }
```

- **writable** — can the value be changed?
- **enumerable** — does the property show up in `for...in` and `Object.keys()`?
- **configurable** — can the property's attributes be changed or the property be deleted?

You rarely need to work with these directly. They are the mechanism behind `Object.freeze()`, `Object.seal()`, and `Object.defineProperty()`.

## What to carry forward

- objects are property maps with keys, values, and attributes
- every object has an internal `[[Prototype]]` link pointing to another object or `null`
- methods like `.toString()` and `.map()` come from prototypes, not from individual objects
- the prototype chain is walked during property lookup until the property is found or `null` is reached
- `Object.create(obj)` creates an object with `obj` as its prototype
- primitives get methods through temporary wrapper objects

This model explains where methods come from. The next lesson covers `this` and methods in more depth — how the object a method belongs to affects what `this` refers to.
