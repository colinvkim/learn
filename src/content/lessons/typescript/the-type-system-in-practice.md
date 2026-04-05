---
title: The type system in practice
description: Start thinking in values, shapes, unions, and narrowing instead of isolated syntax.
course: typescript
status: draft
---

Good TypeScript comes from modeling real data clearly.

That usually means:

- Using specific object shapes instead of broad `any` values.
- Representing real state transitions with unions.
- Narrowing values before you use them.
- Letting inference carry most of the load once the important boundaries are typed.
