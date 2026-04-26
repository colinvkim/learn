---
title: Strings, vectors, and everyday data
description: "Learn why std::string and std::vector are default tools for text and sequences in modern C++."
course: cpp
status: published
---

Modern C++ code should reach for standard library types before raw arrays and manual memory.

For text, use `std::string`. For a growable sequence, use `std::vector`.

## std::string

`std::string` owns text:

```cpp
std::string name{"Maya"};
name += " Chen";
```

The string manages its own memory. You do not allocate or free character buffers manually.

Pass strings by const reference when reading:

```cpp
void print_uppercase(const std::string& text);
```

Return strings by value when producing new text:

```cpp
std::string make_title(const std::string& name) {
    return "Report: " + name;
}
```

## std::vector

`std::vector<T>` stores a dynamic sequence of `T` values:

```cpp
std::vector<int> scores{80, 91, 77};
scores.push_back(88);
```

Use vector as the default sequence container. It stores elements contiguously, works well with caches, and has a simple ownership model.

## Indexing and bounds

`operator[]` is fast but unchecked:

```cpp
scores[0] = 95;
```

If the index is out of range, behavior is undefined.

Use `.at()` when you want checked access:

```cpp
scores.at(0) = 95;
```

An invalid `.at()` access throws `std::out_of_range`.

## Range-based loops

Read without copying:

```cpp
for (const auto& score : scores) {
    std::cout << score << "\n";
}
```

Mutate intentionally:

```cpp
for (auto& score : scores) {
    score += 5;
}
```

Copy only when you want a copy:

```cpp
for (auto score : scores) {
    std::cout << score << "\n";
}
```

For `int`, copying is cheap. For large objects, prefer `const auto&` when reading.

## Capacity

A vector may allocate more storage than it currently uses. `size()` is the number of elements. `capacity()` is how many elements can fit before reallocation.

If you know roughly how many elements you will add, reserve capacity:

```cpp
std::vector<std::string> names;
names.reserve(1000);
```

This can avoid repeated allocations.

## What to carry forward

- use `std::string` for owned text
- use `std::vector` as the default sequence container
- `[]` is unchecked; `.at()` checks bounds
- range-based loops make element access clear
- reserve vector capacity when growth is predictable

Next, you will compare other standard containers and when to choose them.
