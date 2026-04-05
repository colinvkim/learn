---
title: "How JavaScript engines run code"
description: "Learn the execution model behind JavaScript — parsing, the call stack, scope, and how code actually runs from top to bottom."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

When you run a JavaScript file, the engine does not just start executing line one. It goes through a structured process that determines how your code is understood and how it behaves at runtime.

Understanding this process explains why certain patterns work, why some errors happen before any code runs, and how JavaScript keeps track of what is happening.

## The execution pipeline

Every JavaScript engine follows roughly the same pipeline:

1. **Parsing** — the source code is read and converted into an abstract syntax tree (AST)
2. **Compilation** — the AST is compiled into bytecode or machine code
3. **Execution** — the compiled code runs

Parsing itself has two phases:

- **tokenizing** — breaking source code into meaningful tokens
- **AST construction** — organizing tokens into a tree structure that represents the program

If your code has a syntax error, it fails during parsing. Nothing runs.

```javascript
// Syntax error — missing closing parenthesis
console.log("hello"
```

This error appears before execution because the parser cannot build a valid AST from incomplete code.

## The execution context

When JavaScript runs code, it does so inside an **execution context**. Think of this as the environment that tracks:

- what variables exist
- what function is currently running
- what the value of `this` is
- the scope chain (what variables are accessible from here)

There is always a **global execution context** — the outermost context that represents code not inside any function.

Each time a function is called, a new **function execution context** is created on top of the global one. When the function returns, its context is removed.

## The call stack

JavaScript tracks active function calls using a **call stack**. Each function call adds a **stack frame**. When the function returns, its frame is removed.

```javascript
function first() {
  console.log("first");
  second();
  console.log("first done");
}

function second() {
  console.log("second");
}

first();
```

Here is how the stack changes:

1. global context starts
2. `first()` is called — stack: `[global, first]`
3. `console.log("first")` runs — stack: `[global, first, console.log]` then returns
4. `second()` is called — stack: `[global, first, second]`
5. `console.log("second")` runs — stack: `[global, first, second, console.log]` then returns
6. `second()` returns — stack: `[global, first]`
7. `console.log("first done")` runs
8. `first()` returns — stack: `[global]`

The call stack is why stack traces show nested function calls when an error occurs. Each line in a stack trace is one frame.

## Hoisting

Before any code runs, the engine processes **declarations** in the current scope. This is called hoisting.

### Function declarations are fully hoisted

Function declarations are moved to the top of their scope before execution. You can call a function before it appears in the file:

```javascript
greet();  // works — "hello"

function greet() {
  console.log("hello");
}
```

The engine registers `greet` before it starts executing line one.

### Variable declarations are partially hoisted

Variables declared with `var` are hoisted but not initialized. They exist but hold `undefined` until the declaration line is reached:

```javascript
console.log(x); // undefined (not an error)
var x = 10;
console.log(x); // 10
```

Variables declared with `let` and `const` are also hoisted, but they enter a **temporal dead zone** — accessing them before the declaration is a `ReferenceError`:

```javascript
console.log(y); // ReferenceError
let y = 10;
```

This is one reason `let` and `const` are preferred over `var` — the error catches mistakes early instead of silently producing `undefined`.

## Scope

**Scope** determines which variables are accessible from a given point in the code.

JavaScript has three main scope levels:

- **global scope** — variables declared outside any function or block
- **function scope** — variables declared inside a function with `var`, `let`, or `const`
- **block scope** — variables declared inside `{}` with `let` or `const`

```javascript
let globalVar = "outside";  // global scope

function example() {
  let functionVar = "inside";  // function scope

  if (true) {
    let blockVar = "blocked";  // block scope
    console.log(globalVar);    // accessible
    console.log(functionVar);  // accessible
    console.log(blockVar);     // accessible
  }

  console.log(globalVar);      // accessible
  console.log(functionVar);    // accessible
  // console.log(blockVar);    // ReferenceError — out of scope
}
```

<Note title="`var` does not respect block scope">
  <p>Variables declared with <code>var</code> inside a block leak into the enclosing function scope. This is a common source of bugs and one reason <code>let</code> and <code>const</code> are preferred.</p>
</Note>

## How code runs, start to finish

Putting it all together, when you run a JavaScript file:

1. the engine parses the entire file — syntax errors stop everything
2. it registers all function declarations and variable declarations in their scopes (hoisting)
3. it begins executing from the top in the global context
4. each function call pushes a new frame onto the call stack
5. when a function returns, its frame is popped off
6. execution continues until the stack is empty

## What to carry forward

- JavaScript parses before it executes — syntax errors prevent any code from running
- the call stack tracks which functions are currently running
- hoisting registers declarations before execution begins
- `let` and `const` throw errors if accessed before their declaration, unlike `var`
- scope controls what variables are accessible from any point in the code

This model underlies everything in the course — function behavior, closures, async execution, and debugging all build on these foundations.
