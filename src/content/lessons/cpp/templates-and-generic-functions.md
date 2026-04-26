---
title: Templates and generic functions
description: Learn why templates exist and how function and class templates support reusable C++ code.
course: cpp
status: published
---

Templates let you write code that works with types chosen later. They are the foundation of much of the C++ standard library.

`std::vector<int>` and `std::vector<std::string>` are both uses of the `std::vector` class template.

## Function templates

A function template describes a family of functions:

```cpp
template <typename T>
T max_value(T a, T b) {
    if (b < a) {
        return a;
    }

    return b;
}
```

The compiler creates a concrete function when you call it with specific types:

```cpp
auto bigger = max_value(3, 7);
```

Here, `T` becomes `int`.

## Class templates

A class template describes a family of types:

```cpp
template <typename T>
class Box {
public:
    explicit Box(T value)
        : value_{std::move(value)} {}

    const T& value() const {
        return value_;
    }

private:
    T value_;
};
```

Use it like this:

```cpp
Box<std::string> name{"Maya"};
Box<int> count{3};
```

## Templates require valid operations

The template body must make sense for the chosen type. `max_value` uses `<`, so `T` must support comparison with `<`.

When a template error happens, compiler messages can be long because the compiler shows the path from your call into template code.

Read template errors from the first mention of your code, then look for the operation that failed.

## Do not template too early

Templates are powerful, but they add complexity. Write ordinary code first. Generalize when you see repeated structure that truly varies by type.

This is especially important in C++ because template errors and compile times can grow quickly.

## What to carry forward

- templates let code work with types chosen later
- function templates generate functions for concrete types
- class templates generate types such as `std::vector<int>`
- template code must use operations valid for the chosen type
- avoid generic code until repetition or API design justifies it

Next, you will add constraints to make generic code clearer.
