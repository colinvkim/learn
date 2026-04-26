---
title: What C++ is
description: Learn where C++ is used, what makes it powerful, and why memory and lifetime matter from the beginning.
course: cpp
status: published
---

C++ is a compiled, statically typed programming language for software that needs control over performance, memory, and system resources.

It is used in game engines, embedded systems, desktop applications, compilers, databases, browsers, simulation tools, audio software, robotics, and other performance-sensitive systems. C++ can also be used for small command-line programs, but its real strength is building software where the cost of abstraction matters.

## Power and responsibility

C++ gives you direct control over objects, memory layout, resource lifetimes, and low-level operations. That control is why C++ can be fast and predictable.

The same control also makes mistakes serious. If a program reads past the end of an array, uses an object after its lifetime ends, or treats invalid memory as valid, C++ may not protect you at runtime. Many mistakes become **undefined behavior**, which means the language no longer promises what the program does.

This course treats undefined behavior as a central topic, not a footnote.

## Modern C++ is not C with classes

Old C++ courses often begin with raw arrays, manual `new` and `delete`, and inheritance-heavy object hierarchies. Modern C++ usually starts somewhere else:

- values with clear ownership
- standard library containers such as `std::vector` and `std::string`
- RAII, where object lifetime controls resource lifetime
- `const` correctness
- simple functions and small types
- clear ownership with `std::unique_ptr` when dynamic allocation is needed
- standard algorithms when they make code clearer

You will still learn pointers, manual allocation, and low-level behavior. You need those concepts to understand C++. But they are not the default style for ordinary application code.

## Compiled language

C++ source code is checked and translated by a compiler before it runs. The compiler produces machine code or object files, and the linker combines compiled pieces into an executable.

That build step gives C++ several important properties:

- many type errors are caught before the program runs
- optimization can happen before deployment
- programs can run without an interpreter
- build errors can involve both compilation and linking

You will learn this model early because it explains headers, source files, declarations, definitions, and common error messages.

## Systems programming mindset

Systems programming means thinking about resources directly: memory, files, sockets, threads, CPU time, cache locality, and operating system handles.

C++ does not require every program to be low-level. But even high-level C++ code is shaped by questions like:

- Who owns this object?
- How long does it live?
- Can this reference outlive the object it points to?
- Is this copy intentional?
- Does this allocation matter?
- What happens if construction fails?

Good C++ code answers these questions in its types and structure.

## What to carry forward

- C++ is compiled and statically typed
- C++ is used when control and performance matter
- modern C++ uses the standard library and RAII by default
- raw memory tools are important concepts, not everyday defaults
- ownership, lifetime, and undefined behavior are core C++ ideas

Next, you will compile and run a small C++ program.
