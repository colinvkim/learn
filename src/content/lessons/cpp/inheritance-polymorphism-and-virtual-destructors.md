---
title: Inheritance, polymorphism, and virtual destructors
description: Learn runtime polymorphism, virtual functions, abstract base classes, and why base destructors matter.
course: cpp
status: published
---

Inheritance lets one class derive from another. Runtime polymorphism lets code use a base interface while calling derived behavior.

This is useful, but it should not be the default abstraction tool.

## Base and derived classes

```cpp
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    explicit Circle(double radius)
        : radius_{radius} {}

    double area() const override {
        return 3.14159 * radius_ * radius_;
    }

private:
    double radius_;
};
```

`Shape` is an abstract base class because `area` is pure virtual. `Circle` implements it.

## Dynamic dispatch

When calling through a base reference or pointer, C++ can dispatch to the derived override:

```cpp
void print_area(const Shape& shape) {
    std::cout << shape.area() << "\n";
}
```

If you pass a `Circle`, `Circle::area` runs.

## Virtual destructors

If a class is intended to be used polymorphically, its destructor should usually be virtual:

```cpp
virtual ~Shape() = default;
```

This ensures derived destructors run correctly when deleting through a base pointer.

In modern code, ownership would often be:

```cpp
std::vector<std::unique_ptr<Shape>> shapes;
```

The vector owns unique pointers. Each unique pointer owns one shape.

## Costs and coupling

Runtime polymorphism has tradeoffs:

- objects are accessed through references or pointers
- calls through virtual functions are indirect
- inheritance couples derived classes to base class design
- shared base classes can become hard to change

These costs are often acceptable when you need a stable runtime interface. They are not free.

## What to carry forward

- inheritance creates base and derived class relationships
- virtual functions enable runtime dispatch
- abstract base classes define interfaces
- polymorphic base classes need virtual destructors
- inheritance is useful but should not be automatic

Next, you will compare inheritance with composition.
