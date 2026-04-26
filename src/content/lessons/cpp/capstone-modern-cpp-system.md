---
title: "Capstone: build a modern C++ system"
description: Plan a medium-sized C++ project using multiple files, RAII, ownership, containers, errors, CMake, debugging, and measurement.
course: cpp
status: published
---

The capstone is a medium-sized command-line C++ project. It should be large enough to require design, but small enough to finish and understand.

Build a CLI task log, file indexer, tiny simulation, save-file parser, or similar system.

## Requirements

Your project should include:

- multiple `.cpp` files
- headers for public interfaces
- CMake build configuration
- at least two classes with clear invariants
- standard library containers
- explicit ownership model
- no raw owning pointers
- RAII for any resource that needs cleanup
- error handling strategy
- debug build with warnings
- sanitizer build
- small tests or testable functions

The goal is not maximum size. The goal is visible C++ design.

## Suggested architecture

For a task log:

```text
tasklog/
  include/tasklog/task.h
  include/tasklog/store.h
  include/tasklog/parser.h
  src/task.cpp
  src/store.cpp
  src/parser.cpp
  src/main.cpp
  CMakeLists.txt
```

Possible responsibilities:

- `Task` models one task and its invariant
- `Store` owns a `std::vector<Task>`
- `parser` converts text into tasks
- `main` handles command-line interaction

Keep ownership boring. For example, `Store` can own tasks by value in a vector. Do not introduce pointers unless the model requires them.

## Design checks

Before writing much code, answer:

- Which object owns each resource?
- When does each object lifetime begin and end?
- Which operations mutate state?
- Which functions can fail?
- What errors should be reported to users?
- Which data structure matches the access pattern?

These questions are C++ design, not paperwork.

## Build and debug workflow

Use an out-of-source build:

```bash
cmake -S . -B build
cmake --build build
```

Add a sanitizer build or preset if possible:

```bash
cmake -S . -B build-asan -DCMAKE_CXX_FLAGS="-fsanitize=address,undefined -g"
cmake --build build-asan
```

Run tests and realistic examples. Use the debugger when behavior is unclear. Use profiling only after correctness is solid.

## What success looks like

Good capstone code should make ownership and lifetime easy to explain. It should use standard library types naturally, avoid manual cleanup, handle errors deliberately, and build reliably from a clean checkout.

That is the core of modern C++: control made explicit, with responsibility carried by types, lifetimes, and clear interfaces.
