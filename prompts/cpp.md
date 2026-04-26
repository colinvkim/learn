- created by codex on april 25
- intended to generate the CSS course from scratch

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are building a C++ course for the website. Familiarize yourself with CONTENT-PREFERENCES.md and AGENTS.md. Go slowly and carefully.

This course should teach C++ as a modern, compiled systems programming language with strong emphasis on memory, object lifetimes, value semantics, resource management, and practical performance. It should not feel like an outdated “C with classes” course or a 1998-style C++ course.

The course should be concept-first, precise, and practical. It should teach learners how C++ actually works, why it is powerful, and why it is easy to misuse.

This course is primarily a modern C++ software/systems programming course, not a competitive programming course. If competitive programming topics are useful, they may be mentioned lightly, but do not let contest-style shortcuts replace modern C++ habits.

⸻

C++ Course Goal

By the end, a learner should be able to:

- write correct, modern C++ in a C++17/C++20 style
- understand memory, storage duration, and object lifetimes precisely
- use RAII and deterministic resource management safely
- reason about value semantics, reference semantics, copying, and moving
- use the standard library effectively, especially containers and algorithms
- write modular, maintainable multi-file C++ programs
- understand practical performance tradeoffs
- debug memory errors, compiler errors, crashes, and logic bugs
- build real systems, not just small scripts

⸻

Core principles for this course

- Teach concepts before syntax
- Teach the memory model and lifetime model clearly and repeatedly
- Prefer modern C++ practices over legacy C-style patterns
- Use the standard library by default
- Teach manual memory management conceptually, but do not normalize raw new and delete
- Emphasize RAII as one of the central ideas of C++
- Teach undefined behavior as a serious, recurring concern
- Prefer clarity and correctness over cleverness
- Show how C++ gives both control and responsibility

C++ is powerful because it gives the programmer control. The course should teach that control carefully.

⸻

What they need to know

What C++ is

- C++ as a compiled language
- Systems programming vs higher-level programming
- When C++ is used:
  - performance-sensitive applications
  - games
  - embedded systems
  - compilers/tools
  - desktop applications
  - systems software
- The tradeoff between power, performance, control, and complexity
- A high-level overview of compilation

Basic program structure

- main()
- statements vs expressions
- declarations vs definitions
- source files and headers at an introductory level
- compiling and running a simple program

Variables, types, and memory basics

- primitive types:
  - int
  - double
  - char
  - bool
- auto
- initialization styles
- type safety
- implicit and explicit conversions
- stack vs heap at a practical introductory level

Control flow

- if, else
- switch
- loops:
  - for
  - while
- early returns

Functions

- function declarations and definitions
- parameters and return values
- pass by value
- pass by reference
- pass by const reference
- const correctness as an early habit

Strong emphasis:

- passing values intentionally
- avoiding unnecessary copies
- making mutability explicit

⸻

Core memory model

This is one of the most important parts of the course. It should be taught carefully and revisited often.

Pointers and references

- what a pointer is
- addresses
- dereferencing
- null pointers
- nullptr
- references
- pointer vs reference differences
- when each is appropriate

Stack, heap, lifetime, and scope

- automatic storage duration
- dynamic allocation
- object lifetime
- scope vs lifetime
- new and delete as concepts
- why manual memory management is error-prone

Common bugs:

- dangling pointers
- memory leaks
- double delete
- use-after-free
- out-of-bounds access

RAII

- Resource Acquisition Is Initialization
- deterministic destruction
- constructors
- destructors
- tying resource lifetime to object lifetime
- why RAII is central to C++

Strong emphasis:

- RAII is not an advanced trick; it is the normal way to write safe C++

Classes and objects

- defining classes
- member variables
- member functions
- constructors
- destructors
- encapsulation
- the this pointer
- invariants

⸻

Value semantics and resource management

Copying and assignment

- copy constructor
- copy assignment operator
- shallow copy vs deep copy
- what copying means for objects that own resources

Move semantics

- rvalue references
- move constructor
- move assignment
- when moves happen
- why moves are useful
- moved-from objects at a practical level

Rule of 3, Rule of 5, Rule of 0

- when special member functions are needed
- when they should be avoided
- why Rule of 0 is preferred in modern C++

Smart pointers

- ownership as a design concept
- std::unique_ptr
- std::shared_ptr
- std::weak_ptr at a practical level
- when shared ownership is appropriate
- avoiding raw new and delete

Strong emphasis:

- prefer std::unique_ptr for ownership
- use std::shared_ptr only when ownership is genuinely shared
- raw pointers should usually mean non-owning access

⸻

Standard library and data structures

Containers

- std::vector as the default sequence container
- std::array
- std::string
- std::map
- std::unordered_map
- std::set
- when to choose each container

Strong emphasis:

- prefer std::vector over raw arrays in most beginner/intermediate code

Iterators and algorithms

- what iterators are
- begin/end
- iterator invalidation at a practical level
- std::sort
- std::find
- std::transform
- using standard algorithms instead of hand-written loops when appropriate

Range-based programming

- range-based for
- structured bindings
- intro to C++20 ranges, lightly and practically

⸻

Abstraction and design

Templates

- function templates
- class templates
- type parameters
- why templates exist
- basic template error interpretation

Generic programming

- writing reusable code
- constraints
- intro to C++20 concepts, lightly
- avoiding unnecessary template complexity

Inheritance and polymorphism

- base and derived classes
- virtual functions
- dynamic dispatch
- abstract base classes
- virtual destructors

Teach carefully:

- inheritance is useful, but should not be the default abstraction tool

Composition over inheritance

- composing behavior from smaller objects
- reducing coupling
- designing simpler systems
- choosing between templates, composition, and runtime polymorphism

⸻

Error handling and safety

Error handling

- return values
- exceptions
- try, catch, throw
- when exceptions are appropriate
- designing simple error-handling strategies

Const correctness

- const variables
- const references
- const member functions
- const correctness as documentation and safety

Undefined behavior

- what undefined behavior is
- why C++ allows it
- why it is dangerous
- common sources:
  - uninitialized memory
  - invalid pointers
  - dangling references
  - out-of-bounds access
  - signed integer overflow
  - violating object lifetimes

Strong emphasis:

- undefined behavior should be treated as a central C++ concept, not a footnote

⸻

Tooling and build systems

Compilation model

- translation units
- preprocessing at a high level
- headers vs source files
- declarations vs definitions
- linking
- common linker errors

Build systems

- compiling single-file programs
- compiling multi-file programs
- basics of Make or CMake
- CMake as the preferred modern project build system
- organizing a small C++ project

Debugging

- reading compiler errors
- reading template errors at a beginner/intermediate level
- using debuggers:
  - gdb
  - lldb
- breakpoints
- stepping through code
- diagnosing crashes
- using sanitizers at a practical level:
  - AddressSanitizer
  - UndefinedBehaviorSanitizer

⸻

Performance and systems thinking

Memory and performance

- cache locality at an introductory level
- value vs pointer tradeoffs
- allocation costs
- avoiding unnecessary allocations
- avoiding unnecessary copies
- when performance actually matters

Profiling

- measuring before optimizing
- identifying bottlenecks
- basic profiling workflow

Strong emphasis:

- do not teach premature optimization
- teach evidence-based optimization

⸻

Modern C++ practices

Modern language features

- auto
- nullptr
- enum class
- structured bindings
- constexpr intro
- lambdas at a practical level
- std::optional at a practical level
- std::variant intro, if appropriate
- std::string_view intro, if appropriate

Best practices

- prefer RAII
- avoid raw owning pointers
- avoid manual new and delete in normal code
- use the standard library
- use const aggressively and intentionally
- prefer standard algorithms when they improve clarity
- prefer clear code over clever code
- avoid undefined behavior at all costs
- design around ownership and lifetime explicitly

⸻

Suggested C++ course sequence

Beginner phase

- What C++ is
- Basic program structure
- Variables and types
- Control flow
- Functions
- Intro to references and const correctness

Core C++ phase

- Pointers and references
- Stack vs heap
- Object lifetime
- Classes and objects
- Constructors and destructors
- RAII

Modern memory/resource phase

- Copying
- Assignment
- Move semantics
- Rule of 3 / 5 / 0
- Smart pointers
- Ownership models

Standard library phase

- std::vector
- std::string
- maps and sets
- iterators
- algorithms
- range-based programming

Abstraction phase

- Templates
- Generic programming
- Inheritance and polymorphism
- Composition over inheritance

Safety/tooling phase

- Error handling
- Undefined behavior
- Compilation model
- Build systems
- Debugging
- Sanitizers

Applied phase

- Performance basics
- Profiling
- Multi-file projects
- Capstone project

⸻

Projects

Early projects

- calculator
- simple CLI tools
- string processing programs
- small data transformation programs

Mid-course projects

- dynamic array implementation
- file parser
- small data structure implementations
- simple resource-managing class using RAII

Late projects

- memory-safe container or small system
- simple game or simulation
- CLI-based application with multiple files
- project using standard library containers and algorithms

Capstone

Build a medium-sized C++ project with:

- multiple files
- headers and source files
- classes and abstractions
- clear ownership model
- proper memory management
- standard library containers
- error handling
- build system using CMake
- debugging/testing workflow

⸻

Additional requirements

- Teach concepts before syntax
- Explain why C++ behaves the way it does, not just what code to type
- Do not teach C++ as “C with classes”
- Do not normalize raw arrays, raw owning pointers, or manual memory management as the default style
- Do not over-focus on inheritance-heavy object-oriented design
- Do not use clever template metaprogramming early
- Do not skip undefined behavior
- Do not skip build systems
- Do not skip debugging and sanitizers
- Avoid outdated C++ idioms unless explaining what modern C++ replaces
- Use realistic examples, not only toy snippets
- Build toward multi-file programs and real project structure
- Keep examples clean, modern, and production-relevant

⸻

Key design philosophy

This course should feel like:

- part language course
- part memory model course
- part systems programming course
- part modern software engineering course

It should not feel like:

“Here is syntax. Now write C++.”

The learner should finish with a strong mental model of ownership, lifetime, memory, abstraction, and practical modern C++ design.
