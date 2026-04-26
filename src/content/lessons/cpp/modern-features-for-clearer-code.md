---
title: Modern features for clearer code
description: Learn practical uses of auto, nullptr, enum class, structured bindings, constexpr, optional, variant, and string_view.
course: cpp
status: published
---

Modern C++ has features that help express intent. They are useful when they make code clearer, safer, or less error-prone.

## nullptr

Use `nullptr` for null pointers:

```cpp
Widget* selected{nullptr};
```

It has a pointer-specific type and avoids old `0` and `NULL` confusion.

## enum class

`enum class` creates scoped named choices:

```cpp
enum class Mode {
    read,
    write,
};
```

Values do not leak into the surrounding scope and do not casually convert to integers.

## Structured bindings

Structured bindings unpack pair-like or aggregate values:

```cpp
for (const auto& [name, score] : scores) {
    std::cout << name << ": " << score << "\n";
}
```

They are especially useful with maps and simple structs.

## constexpr

`constexpr` says a value or function can be evaluated at compile time when its inputs allow it:

```cpp
constexpr int max_users{100};

constexpr int square(int value) {
    return value * value;
}
```

Use it for constants and simple computations that should be available during compilation.

## std::optional

`std::optional<T>` represents "maybe a value":

```cpp
std::optional<User> find_user(int id);

if (auto user = find_user(42)) {
    std::cout << user->name << "\n";
}
```

This is clearer than returning a sentinel value such as `-1` when no value exists.

## std::variant

`std::variant` represents one of several known types:

```cpp
using Setting = std::variant<int, bool, std::string>;
```

It is useful when a value has a closed set of possible shapes. Keep early uses simple.

## std::string_view

`std::string_view` is a non-owning view of text:

```cpp
void log(std::string_view message);
```

It does not own characters. Do not store a `string_view` unless you are certain the referenced text outlives it.

## What to carry forward

- modern features should express intent, not show cleverness
- `nullptr` and `enum class` avoid old unsafe habits
- structured bindings make pair-like data readable
- `std::optional` models absence
- `std::variant` models known alternatives
- `std::string_view` is non-owning, so lifetime matters

Next, you will design error handling strategies.
