---
title: Owning resources with the Rule of 0
description: Learn why modern C++ prefers library ownership types over custom destructors and manual cleanup.
course: cpp
status: published
---

Many C++ bugs come from classes that own resources manually. Modern C++ usually avoids this by storing resource-managing members.

This habit is called the **Rule of 0**: if your class does not directly manage a raw resource, you usually do not need to write a destructor, copy constructor, copy assignment operator, move constructor, or move assignment operator.

## Let members manage themselves

This class owns a list of samples:

```cpp
class SampleBuffer {
public:
    void add(double value) {
        samples_.push_back(value);
    }

    std::size_t size() const {
        return samples_.size();
    }

private:
    std::vector<double> samples_;
};
```

No destructor is needed. `std::vector` owns its memory and releases it automatically.

## Manual ownership creates obligations

This design is fragile:

```cpp
class Buffer {
public:
    explicit Buffer(std::size_t size)
        : data_{new int[size]}, size_{size} {}

    ~Buffer() {
        delete[] data_;
    }

private:
    int* data_;
    std::size_t size_;
};
```

The destructor handles one obligation, but copying this object would be dangerous. The default copy would copy the pointer, causing two objects to think they own the same allocation.

That is how double delete happens.

## Prefer standard ownership members

Use `std::vector` for dynamic arrays:

```cpp
class Buffer {
public:
    explicit Buffer(std::size_t size)
        : data_(size) {}

private:
    std::vector<int> data_;
};
```

Now copying, moving, and destruction are handled by `std::vector`.

Use `std::unique_ptr` when the resource is a single dynamically allocated object and ownership must be explicit.

## Rule of 3 and Rule of 5

If a class must write one of these special member functions, it may need others too:

- destructor
- copy constructor
- copy assignment operator
- move constructor
- move assignment operator

Older teaching calls this the Rule of 3 or Rule of 5. Modern C++ prefers the Rule of 0 when possible.

## What to carry forward

- direct raw resource ownership creates special-member obligations
- default copying of owning raw pointers is usually wrong
- standard library members already manage lifetime correctly
- prefer `std::vector`, `std::string`, and smart pointers over manual cleanup
- Rule of 0 is the modern default

Next, you will learn what copying and assignment mean for value types.
