---
title: Pointers, references, and addresses
description: Learn what pointers and references mean, how addresses work, and when each tool is appropriate.
course: cpp
status: published
---

C++ lets code refer directly to objects in memory. Pointers and references are the main tools for doing that.

## Addresses

An object lives somewhere in memory. The address-of operator `&` gets that location:

```cpp
int score{42};
int* pointer{&score};
```

`pointer` stores the address of `score`. Its type is `int*`, meaning "pointer to int."

## Dereferencing

Dereferencing a pointer accesses the object it points to:

```cpp
*pointer = 50;
std::cout << score << "\n"; // 50
```

This is powerful and dangerous. Dereferencing an invalid pointer is undefined behavior.

## nullptr

A pointer can point to no object:

```cpp
int* selected{nullptr};
```

Check before dereferencing:

```cpp
if (selected != nullptr) {
    std::cout << *selected << "\n";
}
```

Use `nullptr`, not `0` or `NULL`.

## References

A reference is another name for an existing object:

```cpp
int count{3};
int& ref{count};
ref = 4;
```

After initialization, `ref` refers to `count`. A reference cannot be reseated to refer to a different object.

## Pointer vs reference

Use a reference when an object must exist:

```cpp
void print(const std::string& text);
```

Use a pointer when "no object" is a meaningful state, or when you need reseating:

```cpp
void print_if_present(const std::string* text) {
    if (text != nullptr) {
        std::cout << *text << "\n";
    }
}
```

In modern C++, a raw pointer should usually mean non-owning access. It should not usually mean "this code must delete the object."

## Dangling is the danger

A pointer or reference can outlive the object it refers to:

```cpp
int* bad_pointer{};

{
    int local{7};
    bad_pointer = &local;
}

// local's lifetime is over. bad_pointer is dangling.
```

Using `bad_pointer` after this block is undefined behavior.

## What to carry forward

- pointers store addresses and can be null
- dereferencing an invalid pointer is undefined behavior
- references are aliases for existing objects
- use references when an object is required
- use pointers when absence or reseating matters
- raw pointers should usually be non-owning

Next, you will connect pointers and references to stack, heap, scope, and lifetime.
