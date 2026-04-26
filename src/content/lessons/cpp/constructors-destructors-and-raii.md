---
title: Constructors, destructors, and RAII
description: Learn how C++ ties resource management to object lifetime through RAII.
course: cpp
status: published
---

RAII means Resource Acquisition Is Initialization. The name is awkward, but the idea is central: acquire a resource in an object's constructor, release it in the object's destructor.

RAII is not an advanced trick. It is normal modern C++.

## Constructors create valid objects

A constructor initializes an object:

```cpp
class FileName {
public:
    explicit FileName(std::string value)
        : value_{std::move(value)} {}

    const std::string& value() const {
        return value_;
    }

private:
    std::string value_;
};
```

The member initializer list after `:` initializes `value_`.

## Destructors clean up

A destructor runs when an object's lifetime ends:

```cpp
class Trace {
public:
    Trace() {
        std::cout << "start\n";
    }

    ~Trace() {
        std::cout << "end\n";
    }
};
```

For a local object, destruction happens automatically when scope exits, including when a function returns early or an exception leaves the scope.

## RAII with resources

Resources are not only memory. A resource can be:

- a file handle
- a socket
- a mutex lock
- a database connection
- temporary ownership of some cleanup responsibility

Standard library types already use RAII:

```cpp
std::ofstream file{"report.txt"};
file << "total: " << total << "\n";
```

When `file` is destroyed, it closes its file handle.

## Why RAII matters

Without RAII, every path through a function must remember cleanup:

```cpp
open();
if (error) {
    close();
    return;
}
close();
```

With RAII, cleanup belongs to object lifetime:

```cpp
std::lock_guard<std::mutex> lock{mutex};
// mutex unlocks when lock is destroyed
```

This is deterministic resource management. You know when cleanup happens.

## What to carry forward

- constructors create initialized objects
- destructors run when object lifetime ends
- RAII ties resource lifetime to object lifetime
- RAII handles early returns and exceptions naturally
- standard library types already model this pattern

Next, you will see why modern C++ often avoids writing destructors at all.
