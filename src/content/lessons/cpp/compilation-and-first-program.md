---
title: Compilation and your first program
description: Learn how a simple C++ program becomes an executable and what main, statements, and output do.
course: cpp
status: published
---

A C++ program must be compiled before it runs. The compiler reads source code, checks it, translates it, and produces something the operating system can execute.

Start with one file named `main.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++\n";
    return 0;
}
```

`main` is the program entry point. When the executable starts, control enters `main`.

## Compile and run

With `clang++` or `g++`, compile from the directory containing `main.cpp`:

```bash
clang++ -std=c++20 -Wall -Wextra -pedantic main.cpp -o hello
./hello
```

`-std=c++20` asks for C++20 language rules. `-Wall -Wextra -pedantic` enables useful warnings. `-o hello` names the output executable.

Warnings matter in C++. Treat them as early help from the compiler.

## What the program contains

`#include <iostream>` asks the preprocessor to make declarations from the standard input/output library visible. Without it, the compiler would not know what `std::cout` means.

`std::cout` is an output stream. `<<` sends data into that stream.

`return 0;` reports success to the operating system. Reaching the end of `main` also returns `0`, but writing it early makes the idea visible.

## Statements and expressions

A **statement** performs an action:

```cpp
std::cout << "Saved\n";
return 0;
```

An **expression** produces a value or names something that can be used as a value:

```cpp
2 + 3
name
count == 0
```

C++ programs are mostly declarations, statements, and expressions arranged inside functions and types.

## Compile errors are part of the workflow

If you remove the semicolon after `return 0`, the compiler reports an error. C++ is strict about syntax because it must understand the program before producing machine code.

Compiler errors often point near the problem, not always exactly at it. Read the first error first. Later errors can be side effects of the first one.

## What to carry forward

- C++ source code must be compiled before it runs
- `main` is the entry point of an executable program
- `#include` makes library declarations visible
- statements do work; expressions produce values
- warnings are useful feedback, not noise

Next, you will learn how C++ represents values, types, variables, and initialization.
