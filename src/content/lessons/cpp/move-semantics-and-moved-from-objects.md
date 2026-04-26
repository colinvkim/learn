---
title: Move semantics and moved-from objects
description: Learn how C++ moves resources, why moves are useful, and what moved-from objects mean in practice.
course: cpp
status: published
---

Copying duplicates a value. Moving transfers resources from one object to another when duplication would be wasteful.

Move semantics are one reason modern C++ can use value-oriented code without paying for unnecessary deep copies.

## Why moves exist

A `std::vector<int>` may own heap memory. Copying it means allocating new memory and copying elements.

Moving it can transfer ownership of that memory:

```cpp
std::vector<int> make_values() {
    std::vector<int> values{1, 2, 3};
    return values;
}
```

Returning a vector like this is normal. The compiler can elide the copy or move efficiently.

## std::move does not move by itself

`std::move` casts an object to an rvalue reference. It says, "this object may be moved from."

```cpp
std::string source{"large text"};
std::string target{std::move(source)};
```

The move constructor of `std::string` decides what happens.

After this, `source` is valid but its value is unspecified. You may destroy it or assign a new value to it. Do not rely on its old contents.

## Move constructor and move assignment

A move constructor creates a new object from a temporary or movable object:

```cpp
std::vector<int> a{1, 2, 3};
std::vector<int> b{std::move(a)};
```

Move assignment replaces an existing object:

```cpp
std::vector<int> c;
c = std::move(b);
```

Standard library types define these operations when moving makes sense.

## When moves happen

Moves often happen with:

- returning values
- inserting temporaries into containers
- transferring ownership with `std::unique_ptr`
- assigning from temporary objects

You do not need to sprinkle `std::move` everywhere. Incorrect `std::move` can make code harder to read or even block copy elision.

## What to carry forward

- moving transfers resources instead of duplicating them
- `std::move` permits moving; it does not perform the move alone
- moved-from objects remain valid but have unspecified values
- returning values is normal in modern C++
- move semantics support efficient value-oriented design

Next, you will make ownership explicit with smart pointers.
