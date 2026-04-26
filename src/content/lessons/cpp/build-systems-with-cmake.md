---
title: Build systems with CMake
description: Learn translation units, linking, and a practical CMake starting point for small C++ projects.
course: cpp
status: published
---

Once a C++ project has multiple files, typing compiler commands by hand becomes fragile. A build system records how the project is built.

CMake is a common modern choice for C++ projects.

## Translation units

Each `.cpp` file is compiled as a translation unit. Headers included by that file become part of the translation unit during preprocessing.

```text
main.cpp + included headers -> main.o
parser.cpp + included headers -> parser.o
```

The linker combines object files into an executable or library.

Compiler errors happen while compiling a translation unit. Linker errors happen while connecting compiled pieces.

## Small project layout

```text
notes/
  CMakeLists.txt
  src/
    main.cpp
    note.cpp
    note.h
```

`note.h` declares the interface. `note.cpp` defines implementation. `main.cpp` uses it.

## Minimal CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.20)
project(notes LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(notes
    src/main.cpp
    src/note.cpp
)

target_compile_options(notes PRIVATE
    -Wall
    -Wextra
    -pedantic
)
```

This creates an executable target named `notes`.

## Configure and build

From the project root:

```bash
cmake -S . -B build
cmake --build build
```

`-S .` points at the source directory. `-B build` chooses a separate build directory. Keeping generated files out of the source tree makes cleanup easier.

## Common linker error

If a function is declared in a header but its `.cpp` file is not included in the target, the compiler may succeed but linking fails:

```text
undefined reference to `make_note(...)'
```

That often means the definition is missing from the build target or the signature does not match.

## What to carry forward

- C++ compiles translation units separately
- the linker combines compiled pieces
- build systems record source files, options, and targets
- CMake is a practical default for many C++ projects
- out-of-source builds keep generated files separate

Next, you will learn how to debug compiler errors, crashes, and logic bugs.
