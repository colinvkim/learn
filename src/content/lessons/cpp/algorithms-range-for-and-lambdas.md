---
title: Algorithms, range-for, and lambdas
description: Learn practical range-based programming with standard algorithms, range-for loops, and lambdas.
course: cpp
status: published
---

C++ gives you several good ways to express operations over data. The goal is not to avoid loops. The goal is to make intent clear.

## Range-based for

Range-based `for` is the default for simple iteration:

```cpp
for (const auto& item : items) {
    std::cout << item.name << "\n";
}
```

Use `const auto&` for read-only access without copying. Use `auto&` for mutation. Use `auto` when copying is intended or cheap.

## Lambdas

A lambda is a small function object written where it is used:

```cpp
auto is_ready = [](const Task& task) {
    return task.status == Status::ready;
};
```

Lambdas are common with algorithms:

```cpp
auto found = std::find_if(tasks.begin(), tasks.end(), [](const Task& task) {
    return task.status == Status::ready;
});
```

## Captures

A lambda can capture values from surrounding scope:

```cpp
int minimum_priority{3};

auto high_priority = [minimum_priority](const Task& task) {
    return task.priority >= minimum_priority;
};
```

Capture by value when the lambda should keep its own copy. Capture by reference only when the referenced object will definitely outlive the lambda.

Dangling references in lambdas are still dangling references.

## C++20 ranges, lightly

C++20 ranges let some algorithms work more directly with whole ranges:

```cpp
std::ranges::sort(values);
```

They can make code shorter and safer because you pass the container instead of separate iterators.

Views can describe lazy transformations, but do not rush into complex pipelines. Clear ordinary code is better than a clever chain no one wants to debug.

## Loop or algorithm?

Use a loop when the operation is custom or multi-step:

```cpp
for (const auto& line : lines) {
    if (line.empty()) {
        continue;
    }
    write_record(parse(line));
}
```

Use an algorithm when it names the operation:

```cpp
std::sort(records.begin(), records.end(), compare_by_time);
```

## What to carry forward

- range-based `for` is good for direct iteration
- lambdas define local behavior
- captures must respect lifetime
- C++20 ranges can simplify algorithm calls
- choose loops or algorithms based on clarity

Next, you will learn modern features that make C++ code clearer and safer.
