---
title: Const correctness and API design
description: Learn how const communicates intent, prevents accidental mutation, and shapes safer interfaces.
course: cpp
status: published
---

`const` means an object will not be modified through this name or interface. In C++, `const` is a design tool, not decoration.

## Const variables

Use `const` for values that should not change:

```cpp
const int max_retries{3};
```

This prevents accidental reassignment and tells the reader the value is stable.

## Const references

Use `const&` to pass large read-only objects:

```cpp
void print_report(const Report& report);
```

The function avoids copying and promises not to mutate the report.

## Const member functions

A member function marked `const` promises not to modify the object:

```cpp
class Account {
public:
    double balance() const {
        return balance_;
    }

    void deposit(double amount) {
        balance_ += amount;
    }

private:
    double balance_{0.0};
};
```

`balance()` can be called on a const `Account`. `deposit()` cannot.

## Const enables use

If a function accepts a const object, it can only call const member functions:

```cpp
void print_balance(const Account& account) {
    std::cout << account.balance() << "\n";
}
```

Forgetting `const` on read-only member functions makes useful code harder to write.

## Const is not ownership

`const` does not mean an object lives longer. It does not mean thread-safe. It does not mean immutable globally.

It means this access path cannot modify the object.

```cpp
const Account& view = account;
```

Other non-const references to `account` might still mutate it.

## What to carry forward

- `const` communicates and enforces non-mutation through an interface
- use const variables for stable values
- use `const&` for large read-only parameters
- mark read-only member functions `const`
- const correctness makes APIs easier to use safely
- const does not solve lifetime or ownership

Next, you will write reusable code with templates.
