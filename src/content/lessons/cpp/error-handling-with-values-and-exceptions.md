---
title: Error handling with values and exceptions
description: Learn practical C++ error handling with return values, optional values, and exceptions.
course: cpp
status: published
---

Error handling is part of API design. A function should make failure visible in a way callers can handle correctly.

## Return values

Use ordinary return values when failure is expected and simple:

```cpp
bool save_report(const Report& report);
```

This is easy to call, but it may hide the reason for failure.

Use a richer result type when the caller needs details:

```cpp
struct SaveResult {
    bool ok{};
    std::string message;
};
```

## optional for absence

Use `std::optional<T>` when a function may or may not produce a value:

```cpp
std::optional<int> parse_int(std::string_view text);
```

This says absence is normal enough to be part of the type.

## Exceptions

Exceptions separate error paths from normal return values:

```cpp
int read_config_value(const std::filesystem::path& path) {
    std::ifstream file{path};

    if (!file) {
        throw std::runtime_error{"could not open config"};
    }

    int value{};
    file >> value;
    return value;
}
```

Use exceptions for failures that prevent the requested operation from completing and that should be handled at a higher level.

## RAII and exceptions

RAII makes exceptions safer. When an exception exits a scope, destructors run for fully constructed local objects:

```cpp
void write_file(const std::filesystem::path& path) {
    std::ofstream file{path};

    if (!file) {
        throw std::runtime_error{"open failed"};
    }

    file << "data\n";
} // file closes even if an exception leaves earlier
```

This is one reason RAII is central to C++.

## Avoid mixed confusion

Do not make callers guess:

```cpp
// unclear: can return nullptr and also throw?
Widget* load_widget();
```

Document and design one main failure strategy per API.

## What to carry forward

- error handling is API design
- use return values for simple expected failure
- use `std::optional` for possible absence
- use exceptions for failures that prevent completion
- RAII makes cleanup reliable during exceptions
- avoid APIs with unclear failure behavior

Next, you will deepen const correctness as a design tool.
