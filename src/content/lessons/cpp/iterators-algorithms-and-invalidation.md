---
title: Iterators, algorithms, and invalidation
description: Learn how iterators connect containers to standard algorithms and why invalidation matters.
course: cpp
status: published
---

An iterator is an object that refers to a position in a range. Standard algorithms use iterators so they can work with many containers.

## begin and end

Most containers provide `begin()` and `end()`:

```cpp
std::vector<int> values{3, 1, 2};

auto first = values.begin();
auto last = values.end();
```

`begin()` points at the first element. `end()` points one past the last element. Do not dereference `end()`.

## Standard algorithms

Algorithms express common operations clearly:

```cpp
std::sort(values.begin(), values.end());
```

Find an element:

```cpp
auto it = std::find(values.begin(), values.end(), 2);

if (it != values.end()) {
    std::cout << "found\n";
}
```

Transform values:

```cpp
std::vector<int> doubled;
doubled.reserve(values.size());

std::transform(
    values.begin(),
    values.end(),
    std::back_inserter(doubled),
    [](int value) { return value * 2; }
);
```

Use algorithms when they make intent clearer than a handwritten loop.

## Iterator invalidation

An iterator, pointer, or reference into a container can become invalid after the container changes.

For `std::vector`, adding an element can reallocate storage:

```cpp
std::vector<int> values{1, 2, 3};
auto it = values.begin();

values.push_back(4);
// it may now be invalid
```

This happens because vector elements are stored contiguously. If the vector needs more capacity, it moves elements to a new allocation.

## Safer habits

Do not keep iterators across container mutations unless you know the invalidation rules.

Use indices carefully, and re-check bounds after mutation:

```cpp
std::size_t index{0};
values.push_back(4);

if (index < values.size()) {
    std::cout << values[index] << "\n";
}
```

## What to carry forward

- iterators refer to positions in ranges
- `end()` is one past the last element
- algorithms work through iterator pairs
- vector mutation can invalidate iterators, pointers, and references
- use algorithms when they clarify intent

Next, you will combine algorithms with range-based loops and lambdas.
