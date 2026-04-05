---
title: "The prototype chain"
description: "Learn how JavaScript's prototype chain enables shared behavior across objects, and how to build object relationships without classes."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

JavaScript does not have classical inheritance in the traditional sense. There are no classes that compile to blueprints. Instead, JavaScript uses **prototypes** — objects that other objects delegate to when a property is not found.

Understanding the prototype chain is the key to how objects share behavior.

## Delegation through prototypes

When you access a property on an object, JavaScript first checks the object itself. If the property is not there, it follows the `[[Prototype]]` link to the object's prototype. If it is not there either, it follows that object's `[[Prototype]]`, and so on, until it finds the property or reaches `null`.

```javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  },
};

const dog = Object.create(animal);
dog.name = "Rex";

dog.speak();  // "Rex makes a sound"
```

`dog` does not have a `speak` method. JavaScript follows `dog`'s prototype link to `animal` and finds it there.

The `this` inside `speak` is `dog`, not `animal`. The method was called on `dog`, so `this` is `dog`. The prototype provides the function, but the call site determines `this`.

## Building a prototype chain

You can chain multiple levels of prototypes:

```javascript
const mammal = {
  hasHair: true,
};

const dog = Object.create(mammal);
dog.speak = function() {
  console.log(`${this.name} barks`);
};
dog.name = "Rex";

const puppy = Object.create(dog);
puppy.name = "Buddy";

puppy.speak();      // "Buddy barks" — from dog
console.log(puppy.hasHair);  // true — from mammal
```

The chain:

```
puppy → dog (speak) → mammal (hasHair) → Object.prototype → null
```

Each level adds more specialized behavior. `puppy` can access everything in `dog`, `mammal`, and `Object.prototype`.

## Overriding prototype properties

An object can override a prototype property by defining its own:

```javascript
const defaults = { theme: "light", fontSize: 14 };

const settings = Object.create(defaults);
settings.theme = "dark";

settings.theme;      // "dark" — own property
settings.fontSize;   // 14 — from prototype
```

The lookup always stops at the first match. Own properties take priority over prototype properties.

## Checking own vs prototype properties

`Object.hasOwn()` checks if a property belongs directly to the object:

```javascript
Object.hasOwn(settings, "theme");     // true
Object.hasOwn(settings, "fontSize");  // false — on prototype
```

The `in` operator checks both own and prototype properties:

```javascript
"fontSize" in settings;  // true — found on prototype
```

## Prototype pollution

Because prototypes are shared, mutating a prototype affects all objects that delegate to it:

```javascript
const animal = { speak() { console.log("sound"); } };

const dog = Object.create(animal);
const cat = Object.create(animal);

animal.speak = function() { console.log("LOUD sound"); };

dog.speak();  // "LOUD sound" — prototype was mutated
cat.speak();  // "LOUD sound"
```

This is rarely intentional. Treat prototypes as fixed once objects start delegating to them.

## Built-in prototypes

Every built-in constructor has a prototype you can inspect:

```javascript
Object.getPrototypeOf([]) === Array.prototype;       // true
Object.getPrototypeOf("") === String.prototype;      // true
Object.getPrototypeOf(function() {}) === Function.prototype; // true
```

You can add methods to built-in prototypes, but this is generally discouraged:

```javascript
// Adding to Array.prototype — works but not recommended
Array.prototype.first = function() {
  return this[0];
};

[1, 2, 3].first();  // 1
```

The risk is that future JavaScript versions might add a method with the same name, or that libraries conflict. This practice is called "monkey patching" and is best avoided.

## What to carry forward

- the prototype chain is a series of `[[Prototype]]` links from one object to another
- property lookup walks the chain until a match is found or `null` is reached
- `Object.create(proto)` creates an object with `proto` as its prototype
- `this` in a prototype method refers to the calling object, not the prototype
- own properties override prototype properties
- mutating a prototype affects all objects delegating to it
- built-in prototypes like `Array.prototype` and `String.prototype` provide shared methods

Prototype chains are the mechanism behind all object sharing in JavaScript. The next lesson covers constructor functions, the pattern that predates classes.
