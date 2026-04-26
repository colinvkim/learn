---
title: Smart pointers and ownership models
description: Learn unique, shared, and weak ownership, and why raw pointers should usually be non-owning.
course: cpp
status: published
---

Ownership means responsibility for ending an object's lifetime. In C++, ownership should be visible in the type.

Raw pointers can point at objects, but they do not clearly say who owns the object. Smart pointers encode ownership.

## unique_ptr

`std::unique_ptr<T>` means one owner:

```cpp
auto session = std::make_unique<Session>("maya");
session->start();
```

When `session` is destroyed, the `Session` object is destroyed too.

`unique_ptr` cannot be copied. It can be moved:

```cpp
std::unique_ptr<Session> stored = std::move(session);
```

After the move, `stored` owns the object.

Prefer `std::unique_ptr` for dynamic ownership unless you have a clear reason to share ownership.

## shared_ptr

`std::shared_ptr<T>` means shared ownership. The object is destroyed when the last `shared_ptr` owner is destroyed:

```cpp
auto config = std::make_shared<Config>();
auto a = config;
auto b = config;
```

Use shared ownership only when the model is genuinely shared. Do not use `shared_ptr` just to avoid thinking about lifetime.

## weak_ptr

`std::weak_ptr<T>` observes an object managed by `shared_ptr` without keeping it alive.

```cpp
std::weak_ptr<Config> weak = config;

if (auto locked = weak.lock()) {
    locked->reload();
}
```

This is useful for breaking ownership cycles.

## Raw pointers and references

Raw pointers and references are still useful for non-owning access:

```cpp
void render(const Scene& scene);
void select(Entity* entity); // nullptr can mean no selection
```

The key distinction: non-owning access must not delete the object.

## Avoid raw new and delete

Prefer factory helpers:

```cpp
auto item = std::make_unique<Item>();
auto shared = std::make_shared<Resource>();
```

They express ownership and reduce manual cleanup errors.

## What to carry forward

- ownership means responsibility for lifetime
- prefer `std::unique_ptr` for exclusive ownership
- use `std::shared_ptr` only for true shared ownership
- use `std::weak_ptr` to observe shared objects without owning them
- raw pointers usually mean non-owning access
- avoid raw `new` and `delete` in normal code

Next, you will use standard library containers for everyday data.
