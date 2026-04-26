---
title: Performance, memory, and measurement
description: "Learn practical performance thinking: cache locality, allocation cost, copying, and when optimization matters."
course: cpp
status: published
---

C++ gives control over performance, but control is useful only when guided by evidence.

Do not optimize by guessing. First write clear correct code. Then measure the parts that matter.

## Memory layout matters

`std::vector` stores elements contiguously:

```cpp
std::vector<Point> points;
```

Contiguous data often works well with CPU caches because nearby elements are loaded together.

A structure full of pointers may require chasing memory all over the heap:

```cpp
std::vector<std::unique_ptr<Point>> points;
```

This can be the right design when objects need stable identity or polymorphism, but it has different performance behavior.

## Allocation cost

Dynamic allocation is not free. Allocating many small objects separately can cost time and fragment memory.

Prefer value storage when ownership and lifetime allow it:

```cpp
std::vector<Task> tasks;
```

Use pointer ownership when the design needs dynamic lifetime, polymorphism, or optional large objects.

## Copying and moving

Copying large containers can be expensive:

```cpp
void analyze(std::vector<Record> records); // copies or moves into function
```

If the function only reads, prefer:

```cpp
void analyze(const std::vector<Record>& records);
```

If the function takes ownership, pass by value can be a good design:

```cpp
class Store {
public:
    explicit Store(std::vector<Record> records)
        : records_{std::move(records)} {}

private:
    std::vector<Record> records_;
};
```

The signature says the object will keep its own records.

## When performance matters

Performance matters when it affects user experience, cost, battery, latency, throughput, or real-time constraints.

It does not matter equally everywhere. A slow startup path, tight game loop, database indexer, and one-time admin tool have different needs.

## What to carry forward

- performance work should begin with correctness and measurement
- contiguous storage often helps cache locality
- dynamic allocation has cost
- avoid unnecessary copies, especially of large objects
- pass-by-value can be right when taking ownership
- optimize the paths that matter, not everything

Next, you will learn a basic profiling workflow.
