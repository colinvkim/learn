---
title: Functions, parameters, and const
description: Learn pass by value, reference, const reference, return values, and const correctness as an early habit.
course: cpp
status: published
---

Functions give names to work. In C++, a function signature also communicates how values move into and out of that work.

```cpp
int square(int value) {
    return value * value;
}
```

This function takes an `int` by value and returns an `int`.

## Pass by value

Pass by value when the function needs its own copy or when the value is small and cheap to copy:

```cpp
int clamp_score(int score) {
    if (score < 0) {
        return 0;
    }

    if (score > 100) {
        return 100;
    }

    return score;
}
```

Changing `score` inside the function would not change the caller's object.

## Pass by reference

Pass by non-const reference when the function should modify the caller's object:

```cpp
void reset(int& value) {
    value = 0;
}
```

The `&` means `value` is another name for the caller's object. Mutation is visible outside the function.

Use this deliberately. A non-const reference parameter means "this function may change your object."

## Pass by const reference

Pass large read-only objects by const reference:

```cpp
void print_name(const std::string& name) {
    std::cout << name << "\n";
}
```

This avoids copying the string and prevents the function from modifying it.

`const` is both safety and documentation. It tells the reader and compiler that mutation is not part of the contract.

## Return values

Prefer returning values when a function produces a result:

```cpp
std::string make_label(const std::string& name, int score) {
    return name + ": " + std::to_string(score);
}
```

Modern C++ is good at returning values efficiently. Do not contort code around output parameters unless there is a real reason.

## Function declarations and definitions

A declaration tells the compiler a function exists:

```cpp
double average(const std::vector<int>& values);
```

A definition provides the body:

```cpp
double average(const std::vector<int>& values) {
    // ...
}
```

This distinction matters in multi-file programs.

## What to carry forward

- pass small independent values by value
- pass large read-only objects by `const&`
- pass by non-const reference only for intentional mutation
- prefer return values for produced results
- `const` should appear early and often in C++ APIs

Next, you will see why declarations, definitions, headers, and source files exist.
