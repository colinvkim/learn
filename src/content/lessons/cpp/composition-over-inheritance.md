---
title: Composition over inheritance
description: Learn why composing objects is often simpler than building inheritance hierarchies.
course: cpp
status: published
---

Composition means building larger behavior from smaller objects. In C++, composition is often simpler and safer than inheritance.

## Inheritance couples designs

An inheritance hierarchy can look clean at first:

```cpp
class Enemy {};
class FlyingEnemy : public Enemy {};
class ArmoredFlyingEnemy : public FlyingEnemy {};
```

The hierarchy becomes awkward when behavior combinations change. What if an armored enemy stops flying? What if a flying object is not an enemy?

Inheritance encodes categories. Real software often needs capabilities.

## Compose capabilities

Use member objects for independent behavior:

```cpp
class Health {
public:
    explicit Health(int value)
        : value_{value} {}

    void damage(int amount) {
        value_ -= amount;
    }

private:
    int value_;
};

class Enemy {
public:
    Enemy()
        : health_{100} {}

private:
    Health health_;
};
```

`Enemy` has health. It does not need to inherit from a health base class.

## Prefer clear ownership

Composition also makes ownership easier to see:

```cpp
class Renderer {
public:
    explicit Renderer(std::unique_ptr<Device> device)
        : device_{std::move(device)} {}

private:
    std::unique_ptr<Device> device_;
};
```

The renderer owns the device. That ownership is visible in the member type.

## Choosing abstraction tools

Use ordinary functions when behavior does not need stored state.

Use classes when data, invariants, and operations belong together.

Use templates when behavior is type-generic and known at compile time.

Use runtime polymorphism when callers need to work through a stable interface while concrete types vary at runtime.

Use composition when behavior can be assembled from smaller parts.

## What to carry forward

- composition builds objects from smaller objects
- inheritance encodes category relationships and creates coupling
- capabilities often compose better than hierarchies
- ownership is clearer when member types say who owns what
- choose abstraction based on the problem, not habit

Next, you will learn the build system basics needed for real projects.
