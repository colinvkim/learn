---
title: Control flow and small programs
description: Learn if, switch, loops, and early returns as tools for shaping simple C++ programs.
course: cpp
status: published
---

Control flow decides which statements run and how many times they run. In C++, control flow is ordinary and direct: conditions, loops, and returns.

## if and else

Use `if` when code depends on a condition:

```cpp
if (score >= 90) {
    std::cout << "A\n";
} else if (score >= 80) {
    std::cout << "B\n";
} else {
    std::cout << "Keep practicing\n";
}
```

The condition must be usable as a `bool`. Prefer conditions that read like checks, not clever arithmetic.

## Early returns

Early returns reduce nesting and make invalid cases explicit:

```cpp
bool can_withdraw(double balance, double amount) {
    if (amount <= 0) {
        return false;
    }

    if (amount > balance) {
        return false;
    }

    return true;
}
```

This style is common in C++ because functions often validate input before doing work.

## switch

Use `switch` when one value selects among fixed cases:

```cpp
enum class Command {
    add,
    remove,
    quit,
};

switch (command) {
    case Command::add:
        add_item();
        break;
    case Command::remove:
        remove_item();
        break;
    case Command::quit:
        return;
}
```

`enum class` creates named choices without letting them accidentally mix with integers.

## for and while

Use `for` when the number of iterations is clear:

```cpp
for (int i{0}; i < 5; ++i) {
    std::cout << i << "\n";
}
```

Use `while` when the loop depends on a condition that changes over time:

```cpp
while (std::getline(std::cin, line)) {
    std::cout << line << "\n";
}
```

Prefer range-based `for` when iterating through a container:

```cpp
for (const auto& name : names) {
    std::cout << name << "\n";
}
```

`const auto&` reads each element without copying it and without allowing mutation.

## Small program shape

A small C++ program should still have clear boundaries:

```cpp
bool is_even(int value) {
    return value % 2 == 0;
}

int main() {
    for (int value{1}; value <= 10; ++value) {
        if (is_even(value)) {
            std::cout << value << "\n";
        }
    }
}
```

Even here, a named function makes the condition easier to read.

## What to carry forward

- `if` and `else` choose between paths
- early returns make invalid cases explicit
- `switch` fits fixed choices, especially `enum class`
- use `for`, `while`, and range-based `for` intentionally
- clear conditions beat clever conditions

Next, you will design functions around values, references, and `const`.
