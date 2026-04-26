---
title: Source files, headers, and declarations
description: Learn how C++ splits programs across files and why declarations, definitions, and headers matter.
course: cpp
status: published
---

C++ programs often span many files. The compiler does not compile the whole project as one giant text file. It compiles source files separately, then the linker connects the compiled pieces.

## Source files

A `.cpp` file usually contains function and class definitions:

```cpp
// math.cpp
int add(int a, int b) {
    return a + b;
}
```

When compiled, this file becomes an object file. Later, the linker can combine it with other object files.

## Headers

A header usually contains declarations that other files need:

```cpp
// math.h
#pragma once

int add(int a, int b);
```

Another source file can include that header:

```cpp
// main.cpp
#include "math.h"
#include <iostream>

int main() {
    std::cout << add(2, 3) << "\n";
}
```

The compiler can type-check the call because it has seen the declaration.

## Declarations vs definitions

A declaration says what exists:

```cpp
int add(int a, int b);
```

A definition creates it:

```cpp
int add(int a, int b) {
    return a + b;
}
```

Most functions should be defined once. If the linker finds no definition, you get an unresolved symbol or undefined reference error. If it finds multiple conflicting definitions, you get a multiple definition error.

## Include is textual

`#include` is handled before normal compilation. It effectively copies header text into the including file.

This is why headers should avoid unnecessary includes. If a header includes many other headers, every file that includes it may compile more slowly.

## Introductory compile command

For a tiny multi-file program:

```bash
clang++ -std=c++20 -Wall -Wextra -pedantic main.cpp math.cpp -o app
```

This compiles both `.cpp` files and links them into one executable.

As projects grow, you will use CMake or another build system instead of typing every file manually.

## What to carry forward

- `.cpp` files are compiled separately
- headers share declarations across files
- declarations say what exists; definitions provide storage or code
- linker errors are different from compiler errors
- build systems become necessary when file counts grow

Next, you will study pointers and references, the first direct tools for talking about memory.
