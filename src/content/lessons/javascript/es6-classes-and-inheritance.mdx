---
title: "ES6 classes and inheritance"
description: "Learn how class syntax in JavaScript creates objects, extends behavior, and implements inheritance — and what it actually does under the hood."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";

ES6 introduced `class` syntax as a cleaner way to write constructor functions and set up prototype chains. Classes do not add new capabilities to JavaScript — they provide a more readable syntax for the same prototype-based model.

## Class syntax

A class is a special kind of function for creating objects:

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const ada = new User("Ada", "ada@example.com");
ada.greet();  // "Hi, I'm Ada"
```

Methods defined inside the class body are added to `User.prototype`. The `constructor` method runs when `new User()` is called and sets up instance properties.

## Classes are functions

Under the hood, a class is a function:

```javascript
typeof User;  // "function"
```

The difference is that classes must be called with `new`:

```javascript
const user = User("Ada");  // TypeError: Class constructor User cannot be invoked without 'new'
```

## Instance properties

Properties defined in the constructor are instance properties — each object gets its own copy:

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
}

const a = new Counter();
const b = new Counter();

a.count++;

console.log(a.count);  // 1
console.log(b.count);  // 0 — independent copy
```

### Public class fields (modern syntax)

Modern JavaScript supports public fields directly on the class:

```javascript
class Counter {
  count = 0;  // instance field — no constructor needed

  increment() {
    this.count++;
  }
}
```

Public fields are equivalent to assigning properties in the constructor. They are available in all modern environments.

## Inheritance with `extends`

The `extends` keyword sets up the prototype chain for inheritance:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const rex = new Dog("Rex");
rex.speak();  // "Rex barks" — overridden method
```

`Dog` inherits `speak` from `Animal` but overrides it with its own version.

## `super` calls the parent

`super` accesses the parent class. In a constructor, `super()` calls the parent constructor:

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // calls Animal constructor with name
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks`);
  }
}

const rex = new Dog("Rex", "Labrador");
rex.speak();  // "Rex the Labrador barks"
```

`super()` must be called before accessing `this` in a subclass constructor. The parent constructor sets up the initial object; the subclass constructor extends it.

In methods, `super` calls the parent's version of the method:

```javascript
class Dog extends Animal {
  speak() {
    super.speak();  // "Rex makes a sound"
    console.log(`${this.name} also barks`);
  }
}
```

## Static methods

Static methods are called on the class itself, not on instances:

```javascript
class MathUtils {
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
}

MathUtils.clamp(15, 0, 10);  // 10
```

Static methods are useful for utility functions related to the class that do not need an instance.

<Tip title="Prefer composition over inheritance">
  <p>Inheritance creates tight coupling between parent and child. Composition — building behavior by combining objects — is more flexible and easier to change. Use inheritance when there is a clear "is-a" relationship (a Dog is an Animal). Use composition when objects need to share behavior without being related.</p>
</Tip>

## Private fields (modern syntax)

Private fields use the `#` prefix to restrict access to within the class:

```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);    // 100
account.getBalance();    // 100
account.#balance;        // SyntaxError — private field
```

Private fields are truly private — they cannot be accessed from outside the class, not even from subclasses.

## What to carry forward

- `class` is syntactic sugar over constructor functions and prototype chains
- methods defined in the class body are added to the prototype
- `extends` sets up the prototype chain for inheritance
- `super()` calls the parent constructor; `super.method()` calls the parent's method
- static methods are called on the class, not on instances
- public class fields (`count = 0`) are shorthand for constructor assignments
- private fields (`#balance`) are truly private and inaccessible outside the class
- prefer composition over inheritance when there is no clear "is-a" relationship

Classes provide a familiar syntax for object creation and inheritance. The next lesson covers when to use inheritance and when composition is the better choice.
