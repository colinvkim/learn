---
title: Stack, heap, scope, and lifetime
description: Learn automatic storage, dynamic allocation, scope, object lifetime, and why manual memory management is risky.
course: cpp
status: published
---

C++ programmers must distinguish related ideas that are easy to mix up: scope, storage duration, and lifetime.

## Scope

Scope is where a name can be used:

```cpp
void run() {
    int value{10};
    std::cout << value << "\n";
}
```

`value` can be named only inside `run`.

## Automatic storage duration

Local variables usually have automatic storage duration. They are created when execution reaches their definition and destroyed when control leaves their scope:

```cpp
void process() {
    std::string name{"Maya"};
} // name is destroyed here
```

People often call this "stack allocation." The exact implementation is not the main point. The useful model is that lifetime is tied to scope.

## Dynamic allocation

Objects can also be created dynamically:

```cpp
int* value{new int{42}};
delete value;
```

`new` creates an object whose lifetime continues until `delete` destroys it.

You need to understand this model, but normal modern C++ should not be full of raw `new` and `delete`. Manual memory management is error-prone.

## Common manual memory bugs

Forgetting `delete` leaks memory:

```cpp
int* value{new int{42}};
// no delete
```

Deleting twice is undefined behavior:

```cpp
delete value;
delete value; // wrong
```

Using after delete is undefined behavior:

```cpp
delete value;
std::cout << *value << "\n"; // wrong
```

## Lifetime is not the same as scope

Scope controls where a name is visible. Lifetime controls when an object exists.

A pointer can be in scope even after the object it points to has died. That pointer is dangling. C++ will not reliably stop you from using it.

## Prefer objects that clean up themselves

Modern C++ uses objects whose destructors release resources automatically:

```cpp
std::vector<int> values{1, 2, 3};
std::string name{"Maya"};
```

You do not manually free the vector's internal memory. Its destructor handles that when the vector's lifetime ends.

## What to carry forward

- scope is where a name is visible
- lifetime is when an object exists
- local object lifetime usually follows scope
- `new` and `delete` explain dynamic lifetime but are risky defaults
- leaks, double delete, and use-after-free are core C++ bugs
- prefer library types and RAII for resource cleanup

Next, you will study object lifetime and undefined behavior more directly.
