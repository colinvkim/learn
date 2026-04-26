---
title: Concepts and practical generic design
description: Learn how C++20 concepts describe template requirements and why simple generic design is best.
course: cpp
status: published
---

C++20 concepts let templates state what kind of types they accept. They make generic code easier to read and template errors easier to understand.

## Unconstrained templates

This template accepts any type, but not every type can use `<`:

```cpp
template <typename T>
T smaller(T a, T b) {
    return b < a ? b : a;
}
```

If a caller passes a type without `<`, the compiler reports an error inside the template.

## Constrained templates

A concept can state a requirement:

```cpp
#include <concepts>

template <std::totally_ordered T>
T smaller(T a, T b) {
    return b < a ? b : a;
}
```

Now the signature says `T` must support ordering operations.

## Requires clauses

You can also write requirements explicitly:

```cpp
template <typename T>
requires std::totally_ordered<T>
T smaller(T a, T b) {
    return b < a ? b : a;
}
```

Use the form that reads best for the function.

## Generic design questions

Before writing a template, ask:

- What operation is truly type-independent?
- Which operations must the type support?
- Would an overload or ordinary function be simpler?
- Is runtime polymorphism a better fit?
- Will callers understand the error messages?

Good generic code is constrained by the problem, not by cleverness.

## Avoid template metaprogramming early

C++ can compute types and values at compile time in elaborate ways. That skill is useful in library internals, but it is not the foundation of good C++ application code.

For most software, clear interfaces, value semantics, RAII, and standard containers matter more.

## What to carry forward

- concepts describe requirements on template parameters
- constrained templates produce clearer interfaces and errors
- generic code should begin with a real repeated pattern
- templates, overloads, composition, and polymorphism solve different problems
- avoid complex template tricks until simple design fails

Next, you will study inheritance and runtime polymorphism carefully.
