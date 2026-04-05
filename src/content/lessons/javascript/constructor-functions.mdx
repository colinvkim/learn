---
title: "Constructor functions"
description: "Learn how constructor functions create objects with shared behavior before ES6 classes existed, and how the new operator works."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Before ES6 introduced class syntax, constructor functions were the standard way to create multiple objects with the same shape and shared methods. Classes are syntactic sugar over this pattern. Understanding constructors explains what classes actually do.

## How constructors work

A constructor function is a regular function called with the `new` keyword:

```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
}

const ada = new User("Ada", "ada@example.com");
const grace = new User("Grace", "grace@example.com");
```

When you call a function with `new`, JavaScript does four things:

1. creates a new empty object
2. sets the object's `[[Prototype]]` to the constructor's `.prototype` property
3. binds `this` to the new object and runs the function body
4. returns the new object (unless the function returns its own object)

The `.prototype` property on the constructor function is not the constructor's own prototype. It is the prototype that will be assigned to objects created by `new`.

## Adding methods to the prototype

Methods should live on the prototype, not inside the constructor. Putting them inside the constructor creates a new function for every instance:

```javascript
// Bad — each User gets its own copy of greet
function User(name) {
  this.name = name;
  this.greet = function() {
    return `Hi, I'm ${this.name}`;
  };
}

// Good — all Users share the same greet
function User(name) {
  this.name = name;
}

User.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

ada.greet();   // "Hi, I'm Ada"
grace.greet(); // "Hi, I'm Grace"
```

Both `ada` and `grace` delegate to `User.prototype` for `greet`. There is only one function in memory.

## Checking types with `instanceof`

`instanceof` checks whether an object's prototype chain includes a constructor's prototype:

```javascript
ada instanceof User;  // true
ada instanceof Object; // true — User.prototype inherits from Object.prototype
```

`instanceof` works across the entire prototype chain, not just the immediate constructor.

## The constructor property

Every object created with `new` has a `.constructor` property pointing back to the constructor function:

```javascript
ada.constructor === User;  // true
```

This is set automatically through the prototype chain.

## Constructors without `new`

Calling a constructor without `new` does not create a new object. `this` refers to the global object (or `undefined` in strict mode):

```javascript
const user = User("Ada", "ada@example.com");
// Without new, this is global — properties leak into global scope
console.log(user);  // undefined
console.log(name);  // "Ada" — global variable created accidentally
```

By convention, constructor functions are named with PascalCase (capitalized) to signal that they should be called with `new`.

<Note title="Modern code uses classes instead">
  <p>Constructor functions are rarely written directly in new code. ES6 classes provide a cleaner syntax for the same behavior. But understanding constructors explains what classes compile to and how the prototype chain works under the hood.</p>
</Note>

## What to carry forward

- constructor functions create objects when called with `new`
- `new` creates a new object, sets its prototype to the constructor's `.prototype`, binds `this`, and returns the object
- methods should be added to the constructor's `.prototype` so all instances share them
- `instanceof` checks whether an object is in a constructor's prototype chain
- calling a constructor without `new` does not create a new object — properties leak to the global scope
- classes are syntactic sugar over constructor functions

Constructor functions are the historical foundation of object creation in JavaScript. The next lesson covers ES6 classes, the modern syntax that replaces them.
