---
title: Object lifetime and undefined behavior
description: Learn why object lifetime is a central C++ rule and how undefined behavior breaks program reasoning.
course: cpp
status: published
---

An object can be used only while its lifetime is active. This rule is one of the foundations of C++.

## What lifetime means

An object's lifetime begins when it is properly created and ends when it is destroyed:

```cpp
{
    std::string name{"Maya"};
    std::cout << name << "\n";
} // name's lifetime ends
```

After the closing brace, `name` no longer exists. Any pointer or reference to it would be invalid.

## Undefined behavior

Undefined behavior means the C++ language gives no promise about what happens. The program might appear to work, crash, corrupt data, or change behavior after optimization.

This is not an exception. It is not an error value. It is a broken contract with the language.

## Common sources

Reading uninitialized memory:

```cpp
int value;
std::cout << value << "\n"; // undefined behavior
```

Out-of-bounds access:

```cpp
std::vector<int> values{1, 2, 3};
std::cout << values[3] << "\n"; // undefined behavior
```

Dangling reference:

```cpp
const std::string& bad_ref() {
    std::string local{"gone"};
    return local; // wrong
}
```

Signed integer overflow:

```cpp
int max = std::numeric_limits<int>::max();
int broken = max + 1; // undefined behavior
```

## Why C++ allows it

C++ is designed for efficient compiled code. If the compiler can assume programs follow the rules, it can generate faster machine code. Bounds checks, lifetime checks, and overflow checks are not automatically inserted everywhere.

That tradeoff is part of C++'s power. It is also why you must build habits that avoid invalid states.

## Safer defaults

Prefer types and operations that make invalid behavior harder:

```cpp
std::vector<int> values{1, 2, 3};

if (index < values.size()) {
    std::cout << values[index] << "\n";
}
```

Use `.at()` when a bounds error should become an exception:

```cpp
std::cout << values.at(index) << "\n";
```

## What to carry forward

- object lifetime controls whether an object may be used
- dangling pointers and references are invalid
- undefined behavior means no language guarantee remains
- C++ allows undefined behavior to preserve low-level performance
- safe C++ code designs around lifetime and bounds explicitly

Next, you will use classes to put data and invariants together.
