---
title: Classes, objects, and invariants
description: Learn classes as tools for bundling state, behavior, and rules that should always remain true.
course: cpp
status: published
---

A class defines a type. An object is an instance of that type.

Classes matter in C++ because they can tie data, behavior, and lifetime rules together.

```cpp
class Counter {
public:
    void increment() {
        ++value_;
    }

    int value() const {
        return value_;
    }

private:
    int value_{0};
};
```

`Counter` stores data and controls how that data changes.

## Public and private

`public` members are part of the type's interface. Other code can call them.

`private` members are implementation details. Other code cannot access them directly.

This lets a class protect its invariants.

## Invariants

An invariant is a rule that should always be true for a valid object.

```cpp
class Percentage {
public:
    explicit Percentage(int value)
        : value_{value} {
        if (value < 0 || value > 100) {
            throw std::out_of_range{"percentage must be 0..100"};
        }
    }

    int value() const {
        return value_;
    }

private:
    int value_;
};
```

The invariant is that `value_` is between 0 and 100. The constructor enforces it, and private access prevents outside code from breaking it directly.

## Member functions and this

Inside a member function, `this` points to the current object:

```cpp
int value() const {
    return this->value_;
}
```

You rarely need to write `this->` in simple code, but the idea matters: member functions operate on a specific object.

## const member functions

This member function promises not to modify the object:

```cpp
int value() const;
```

Use `const` on member functions that only observe state. It lets const objects call them and communicates intent.

## What to carry forward

- classes define types; objects are instances
- public interface and private data protect invariants
- constructors should create valid objects
- member functions operate on a specific object
- `const` member functions are read-only operations

Next, you will learn how constructors and destructors make RAII possible.
