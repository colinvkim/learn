---
title: Debugging compiler errors and crashes
description: Learn a practical debugging workflow for compiler messages, template errors, breakpoints, and crashes.
course: cpp
status: published
---

Debugging C++ means reading feedback from several places: compiler errors, warnings, linker errors, runtime crashes, logs, and debugger state.

## Read the first error first

One syntax mistake can cause many later errors. Start with the first meaningful error, especially the first one that points into your code.

For template errors, search the message for your file path and line number. The compiler may show many library frames before or after the real call site.

## Warnings are early bug reports

Compile with warnings:

```bash
clang++ -std=c++20 -Wall -Wextra -pedantic main.cpp -o app
```

Warnings often catch uninitialized variables, suspicious conversions, unused results, and accidental shadowing.

## Use a debugger

Debuggers such as `lldb` and `gdb` let you pause a program and inspect state.

With `lldb`:

```bash
lldb ./app
```

Common commands:

```text
breakpoint set --name main
run
next
step
print variable_name
bt
```

`bt` shows the stack trace, which is the chain of function calls that led to the current point.

## Crashes

A segmentation fault often means invalid memory access: null dereference, dangling pointer, out-of-bounds access, or use-after-free.

Do not guess from the crash alone. Rebuild with debug symbols and use a debugger:

```bash
clang++ -std=c++20 -g main.cpp -o app
lldb ./app
```

## Logic bugs

For logic bugs, reduce the input and inspect state near the first wrong value. Ask:

- What did I expect here?
- What value is actually present?
- Where was that value last correct?
- Which invariant should have prevented this state?

Good debugging is narrowing, not staring.

## What to carry forward

- read the first useful compiler error first
- warnings are part of the feedback loop
- template errors often need call-site hunting
- debuggers show control flow and object state
- crashes often come from invalid memory access
- debug by finding where state first becomes wrong

Next, you will use sanitizers to catch memory and undefined behavior bugs.
