---
title: Sanitizers and memory bug hunting
description: Learn how AddressSanitizer and UndefinedBehaviorSanitizer catch common C++ mistakes.
course: cpp
status: published
---

Sanitizers instrument your program so it can detect certain bugs while running. They are one of the best practical tools for learning and writing safer C++.

## AddressSanitizer

AddressSanitizer, often called ASan, catches many memory errors:

- use-after-free
- out-of-bounds access
- stack-use-after-return in some cases
- double delete
- memory leaks on some platforms

Build with:

```bash
clang++ -std=c++20 -g -fsanitize=address -fno-omit-frame-pointer main.cpp -o app
```

Run the program normally:

```bash
./app
```

If ASan finds a bug, it prints a report with stack traces for the invalid access and often the allocation or deallocation involved.

## UndefinedBehaviorSanitizer

UndefinedBehaviorSanitizer, or UBSan, catches many undefined behavior cases:

- signed integer overflow
- invalid casts
- misaligned access
- some null pointer misuse

Build with:

```bash
clang++ -std=c++20 -g -fsanitize=undefined main.cpp -o app
```

You can combine sanitizers:

```bash
clang++ -std=c++20 -g -fsanitize=address,undefined main.cpp -o app
```

## Sanitizers need execution

Sanitizers find bugs on paths your program actually runs. They do not prove the program is correct.

Use small tests and realistic inputs to exercise important paths.

## Example bug

```cpp
std::vector<int> values{1, 2, 3};
std::cout << values[3] << "\n";
```

This is out of bounds. Without a sanitizer, the program might print garbage or appear fine. With ASan, it is much more likely to produce a useful report.

## Habit

For serious C++ work, have a debug build that uses sanitizers. Run it during development and in CI when possible.

Sanitizers are not a substitute for good design, but they catch mistakes humans miss.

## What to carry forward

- sanitizers catch many runtime safety bugs
- ASan focuses on memory access errors
- UBSan focuses on undefined behavior
- sanitizer reports include valuable stack traces
- sanitizers only check executed paths
- sanitizer builds should be part of normal C++ practice

Next, you will connect memory choices to practical performance.
