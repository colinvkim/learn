---
title: Values, types, and initialization
description: Learn primitive types, auto, initialization, conversions, and why C++ cares deeply about types.
course: cpp
status: published
---

Every C++ object has a type. The type tells the compiler what operations are allowed, how much storage the object needs, and how values of that kind behave.

```cpp
int count{3};
double price{19.99};
char grade{'A'};
bool ready{true};
```

These are primitive types. Real C++ programs also use library types such as `std::string` and `std::vector`, and user-defined types such as classes.

## Declaration, definition, and initialization

A **declaration** introduces a name. A **definition** creates the object or function. For local variables, the same line usually does both:

```cpp
int retries{3};
```

`retries` names an `int` object, and `{3}` initializes it.

Prefer brace initialization for beginner and intermediate code:

```cpp
int size{10};
double ratio{0.5};
```

Brace initialization rejects some narrowing conversions:

```cpp
int x{3.7}; // error: loses fractional part
```

That error is useful. C++ allows many conversions, and not all are safe.

## auto means infer the type

`auto` asks the compiler to infer a type from the initializer:

```cpp
auto count{42};       // int
auto name = "Maya";   // const char*
```

Use `auto` when the initializer makes the type clear or when the exact type is noisy:

```cpp
auto total = price * quantity;
```

Do not use `auto` to hide information the reader needs. Clear code matters more than saving keystrokes.

## Type safety and conversions

C++ is statically typed, but it still performs implicit conversions:

```cpp
double average = 5; // int converts to double
```

Some conversions are harmless. Others can lose information:

```cpp
int rounded = 9.8; // allowed with = initialization, but loses .8
```

Use explicit casts only when you are choosing that conversion deliberately:

```cpp
auto rounded = static_cast<int>(9.8);
```

The cast is not magic. It documents that you know information is being changed or lost.

## Objects live in storage

A variable is not only a name. It refers to an object stored somewhere in memory.

For now, think of local variables as living in automatic storage tied to scope:

```cpp
void print_count() {
    int count{3};
    std::cout << count << "\n";
} // count's lifetime ends here
```

Later, you will learn the precise difference between scope, storage duration, and lifetime.

## What to carry forward

- every C++ object has a type
- prefer initialization over assignment after declaration
- brace initialization catches narrowing mistakes
- `auto` is useful when the inferred type is clear
- conversions should be intentional
- variables name objects that live in storage

Next, you will use these values in control flow.
