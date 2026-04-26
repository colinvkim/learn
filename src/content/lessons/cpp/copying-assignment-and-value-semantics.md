---
title: Copying, assignment, and value semantics
description: Learn what copying means in C++ and why value semantics are one of modern C++'s strengths.
course: cpp
status: published
---

C++ is good at value semantics. A value can be copied, stored, passed, returned, and compared without sharing hidden mutable state.

```cpp
std::string a{"north"};
std::string b{a};
b += " gate";
```

Changing `b` does not change `a`. That independence is value semantics.

## Copy construction

Copy construction creates a new object from an existing object:

```cpp
std::vector<int> first{1, 2, 3};
std::vector<int> second{first};
```

`second` receives its own elements.

## Copy assignment

Copy assignment replaces the value of an existing object:

```cpp
std::vector<int> first{1, 2, 3};
std::vector<int> second{9, 8};

second = first;
```

After assignment, `second` has the same values as `first`, but it remains a distinct object.

## Shallow copy vs deep copy

A shallow copy copies handles or pointers without copying the owned resource. A deep copy duplicates the resource.

For non-owning pointers, a shallow copy can be fine:

```cpp
int value{42};
int* a{&value};
int* b{a}; // both observe same int
```

For owning raw pointers, a shallow copy is usually broken:

```cpp
// two owners of same allocation can cause double delete
```

This is why ownership must be explicit.

## Designing value types

Good value types have clear meaning:

```cpp
struct Point {
    double x{};
    double y{};
};
```

Copying a `Point` should copy its coordinates. Assignment should replace coordinates. No hidden ownership surprise should exist.

## Copying can cost

Value semantics do not mean copying everything blindly. Copying a large vector can allocate and copy many elements.

Use parameter choices intentionally:

```cpp
void print_items(const std::vector<std::string>& items);
```

This reads without copying.

## What to carry forward

- copy construction creates a new object from an existing one
- copy assignment replaces an existing object's value
- value semantics mean independent values, not hidden shared mutation
- shallow copy is dangerous for owning raw pointers
- use `const&` to avoid unnecessary copies when reading

Next, you will learn how moving transfers resources efficiently.
