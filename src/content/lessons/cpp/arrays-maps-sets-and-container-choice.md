---
title: Arrays, maps, sets, and container choice
description: Learn common standard containers and how to choose based on access pattern and ownership.
course: cpp
status: published
---

Container choice should follow how the data is used. Start with `std::vector`, then switch when another container matches the problem better.

## std::array

`std::array<T, N>` stores a fixed number of elements:

```cpp
std::array<int, 3> rgb{255, 128, 0};
```

Use it when the size is known at compile time and should not change.

Prefer `std::array` over raw arrays in beginner and intermediate code because it knows its size and works better with standard algorithms.

## std::map

`std::map<Key, Value>` stores key-value pairs ordered by key:

```cpp
std::map<std::string, int> counts;
counts["error"] += 1;
```

Use it when ordered iteration matters or when stable ordering is useful.

## std::unordered_map

`std::unordered_map<Key, Value>` stores key-value pairs in a hash table:

```cpp
std::unordered_map<std::string, int> counts;
counts["error"] += 1;
```

Use it for average fast lookup when ordering does not matter.

## std::set

`std::set<T>` stores unique ordered values:

```cpp
std::set<std::string> tags;
tags.insert("network");
tags.insert("storage");
```

Use a set when uniqueness is central and ordered iteration matters. If order does not matter, `std::unordered_set` may fit.

## Choosing simply

Use this starting point:

- `std::vector` for sequences
- `std::string` for owned text
- `std::array` for fixed-size sequences
- `std::unordered_map` for key lookup without order
- `std::map` for key lookup with order
- `std::set` when unique sorted values are the main point

Do not choose a container by habit alone. Ask what operations dominate: iteration, lookup, insertion, removal, ordering, or memory locality.

## Avoid raw arrays by default

Raw arrays appear in older C++ and in low-level interfaces:

```cpp
int values[3]{1, 2, 3};
```

They are not the best default for modern code. Prefer `std::array` or `std::vector` unless you have a specific reason.

## What to carry forward

- `std::vector` remains the default sequence container
- fixed-size data fits `std::array`
- lookup data often fits map or unordered map
- sets model uniqueness
- container choice depends on access pattern and constraints
- raw arrays are low-level tools, not beginner defaults

Next, you will learn iterators, algorithms, and invalidation.
