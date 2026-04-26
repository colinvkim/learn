---
title: Organizing a multi-file project
description: Learn a practical structure for small C++ projects with headers, source files, tests, and CMake targets.
course: cpp
status: published
---

Real C++ programs need organization. Good structure makes ownership, dependencies, and build targets easier to understand.

## Simple project layout

```text
tasklog/
  CMakeLists.txt
  include/
    tasklog/
      task.h
      parser.h
  src/
    task.cpp
    parser.cpp
    main.cpp
  tests/
    parser_tests.cpp
```

Public headers live under `include/tasklog`. Implementation lives under `src`. Tests live under `tests`.

Small projects can use simpler layouts, but keep interfaces and implementation distinct.

## Headers expose contracts

Headers should contain declarations and small type definitions that other files need:

```cpp
// include/tasklog/task.h
#pragma once

#include <string>

namespace tasklog {

struct Task {
    std::string title;
    bool done{};
};

}
```

Keep headers focused. Every include in a header spreads to files that include it.

## Source files define behavior

```cpp
// src/parser.cpp
#include "tasklog/parser.h"

namespace tasklog {

std::optional<Task> parse_task(std::string_view line) {
    // implementation
}

}
```

Source files can include heavier dependencies without forcing them into every caller.

## Namespaces

Namespaces group project code and avoid name collisions:

```cpp
namespace tasklog {
    // project types and functions
}
```

Use project namespaces early. Avoid putting your own names into `std`.

## Tests and tools

Even small C++ projects benefit from:

- debug builds
- sanitizer builds
- focused tests for parsing and business rules
- warnings enabled
- formatting choices applied consistently

Testing does not replace understanding lifetime and ownership, but it catches regressions.

## What to carry forward

- separate public headers from implementation when projects grow
- headers expose contracts and should stay focused
- source files define behavior
- namespaces prevent naming collisions
- tests, warnings, and sanitizers belong in normal workflow

Next, you will design a capstone project that uses the course's main ideas together.
