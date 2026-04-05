---
title: "Objects and arrays"
description: "Learn how objects store key-value pairs and how arrays hold ordered lists — the two data structures you will use in almost every JavaScript program."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Primitives represent single values. Real programs need to group related values together. JavaScript does this with **objects** and **arrays**.

## Objects store key-value pairs

An object is a collection of properties, each with a key and a value:

```javascript
const user = {
  name: "Ada",
  age: 36,
  email: "ada@example.com",
};
```

Keys are strings (or symbols). When you write `name: "Ada"`, the key is actually `"name"` — a string. Values can be any type, including other objects or functions.

## Accessing properties

Use dot notation when the key is a valid identifier:

```javascript
user.name;   // "Ada"
user.age;    // 36
```

Use bracket notation when the key is dynamic, contains special characters, or is stored in a variable:

```javascript
const key = "email";
user[key];           // "ada@example.com"

user["first name"];  // works for keys with spaces
```

If a property does not exist, accessing it returns `undefined` rather than throwing an error:

```javascript
user.phone;  // undefined
```

## Adding, updating, and deleting properties

Objects are mutable. You can add, change, or remove properties at any time:

```javascript
user.role = "admin";       // add a new property
user.age = 37;             // update an existing property
delete user.email;         // remove a property
```

<Tip title="Mutation is a double-edged sword">
  <p>Changing objects in place is convenient but causes bugs when multiple parts of a program share references to the same object. The data manipulation unit covers strategies for copying objects instead of mutating them.</p>
</Tip>

## Checking whether a property exists

The `in` operator checks for the existence of a property:

```javascript
"name" in user;    // true
"phone" in user;   // false
```

Checking against `undefined` also works but is less precise — a property could intentionally hold `undefined` as its value:

```javascript
user.name !== undefined;  // true
user.phone !== undefined; // false
```

## Object methods

When a property holds a function, it is called a **method**:

```javascript
const counter = {
  count: 0,
  increment() {
    this.count = this.count + 1;
  },
  reset() {
    this.count = 0;
  },
};

counter.increment();
console.log(counter.count); // 1
```

The `this` keyword inside a method refers to the object the method belongs to. `this` has more nuance than this example shows — it is covered in detail in the objects and prototypes unit.

## Nested objects

Objects can contain other objects:

```javascript
const company = {
  name: "Example Corp",
  address: {
    street: "123 Main St",
    city: "Portland",
    state: "OR",
  },
  employees: [
    { name: "Ada", role: "Engineer" },
    { name: "Grace", role: "Manager" },
  ],
};
```

Access nested values by chaining dot or bracket notation:

```javascript
company.address.city;           // "Portland"
company.employees[0].name;      // "Ada"
```

## Arrays hold ordered lists

An array is an ordered collection accessed by numeric index, starting at zero:

```javascript
const colors = ["red", "green", "blue"];

colors[0];  // "red"
colors[2];  // "blue"
colors.length; // 3
```

Arrays are actually objects under the hood — they just have special syntax and a rich set of built-in methods.

## Common array operations

Add and remove elements:

```javascript
const items = [1, 2, 3];

items.push(4);       // adds to the end: [1, 2, 3, 4]
items.pop();         // removes from the end: [1, 2, 3]
items.unshift(0);    // adds to the start: [0, 1, 2, 3]
items.shift();       // removes from the start: [1, 2, 3]
```

Check for inclusion:

```javascript
items.includes(2);   // true
items.includes(99);  // false
```

Find the index of a value:

```javascript
items.indexOf(2);    // 1
items.indexOf(99);   // -1 (not found)
```

## Arrays can hold mixed types

JavaScript arrays are not homogeneous. They can hold any mix of values:

```javascript
const mixed = [1, "two", true, null, { key: "value" }];
```

This is valid but usually a sign that the data is not well structured. In practice, most arrays hold objects of the same shape or primitives of the same type.

## What to carry forward

- objects hold named properties accessed with dot or bracket notation
- objects are mutable — properties can be added, changed, or removed at any time
- methods are functions stored as object properties
- arrays hold ordered lists accessed by numeric index starting at 0
- arrays are objects with extra methods for adding, removing, and searching
- both objects and arrays are reference types, not primitive values

Objects and arrays are the raw material that every other data operation works on. The next lesson covers the operators you use to work with these values.
