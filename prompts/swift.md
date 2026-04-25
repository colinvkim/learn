- this prompt was created entirely by chatgpt on april 25 and was edited by me
- given to codex 5.5 high

You are building a thorough Swift course for the website. Familiarize yourself with CONTENT-PREFERENCES.md and AGENTS.md. Go slowly and carefully.

This course should teach Swift as a modern, type-safe, multi-paradigm programming language used to build real applications, especially for Apple platforms. It should emphasize clarity, safety, and real-world usage—not just syntax.

This course exists alongside a JavaScript course and a future TypeScript course. Do not assume prior Swift knowledge. You may assume general programming exposure, but define concepts when they first matter.

Learners will likely use Swift for building apps with SwiftUI, so this course should prepare them for that while still being a strong standalone language foundation.

⸻

Swift Course Goal

By the end, a learner should be able to:

- write clean, idiomatic Swift code
- understand Swift’s type system and safety model
- model data using structs, enums, and protocols
- reason about value vs reference semantics
- use optionals safely and correctly
- write asynchronous code using async/await
- understand memory behavior at a practical level (ARC)
- build real applications using SwiftUI
- structure projects using modern patterns (MVVM at a practical level)

⸻

Core principles for this course

- Teach concepts before syntax
- Teach data modeling before abstractions
- Emphasize Swift’s safety features (optionals, types, immutability)
- Prefer real-world usage over theoretical completeness
- Use modern Swift (async/await, SwiftUI), not legacy patterns
- Avoid outdated APIs or UIKit-first teaching unless necessary
- Keep the course focused; do not over-cover obscure language features
- Reinforce good habits: readability, immutability, composition
- Treat Swift as a general-purpose language first, not just an iOS tool
- Use the type system to model real-world constraints (“make invalid states unrepresentable”)
- Prefer compile-time safety over runtime flexibility
- Avoid shared mutable state when possible

Swift is expressive. Depth matters more than breadth.

⸻

What they need to know

What Swift is

- Swift as a compiled, type-safe language
- Where Swift is used (iOS, macOS, etc.)
- High-level idea of how Swift code runs
- Value vs reference semantics (intro)
- Why safety and types matter

Variables and types

- let vs var
- Type inference
- Basic types (Int, Double, Bool, String)
- When to use explicit types

Control flow

- if, else
- switch (pattern matching at a practical level)
- guard for early exits
- Loops (for-in, while)

Functions

- Function declarations
- Parameters and argument labels
- Return values
- Default parameters
- Basic closures (intro)

Execution model (light but important)

- Value vs reference behavior in memory
- Copying vs shared state
- Stack vs heap (intuitive level only)

Optionals (core unit)

- What optionals are and why they exist
- Safe unwrapping (if let, guard let)
- Optional chaining
- Nil-coalescing (??)
- Avoiding force unwraps

Pattern matching (elevate)

- Pattern matching with switch
- Matching enums with associated values
- Matching optionals and tuples

⸻

Codable and data modeling

- Encoding and decoding data
- Mapping JSON to Swift types
- Designing models for APIs

⸻

CLI usage (short section)

- Writing simple command-line Swift programs
- Input/output basics

Strong emphasis:

- modeling absence safely

Collections

- Arrays, dictionaries, sets
- Iteration
- Basic transformations

Closures and functional patterns

- Closure syntax
- Trailing closures
- Capturing values
- map, filter, reduce at a practical level

⸻

Data modeling and core Swift design

Structs vs classes (core unit)

- Value vs reference types
- When to use structs vs classes
- Copying vs shared state

Strong emphasis:

- prefer structs by default

Properties and methods

- Stored vs computed properties
- Methods
- Static vs instance members

Enums (core unit)

- Basic enums
- Associated values
- Pattern matching with switch

Protocols (core unit)

- Defining shared behavior
- Conformance
- Protocol-oriented thinking

Extensions

- Adding functionality to existing types
- Organizing code

Error handling

- throw, try, catch
- Designing simple error types

⸻

Memory and advanced concepts

Memory management (ARC)

- What ARC is
- Strong, weak, unowned references
- Retain cycles (conceptual, practical examples)

Value semantics (important)

- Why Swift prefers value types
- Predictability and safety benefits

Generics

- Generic functions and types
- Constraints (where)
- Reusable abstractions

Protocol-oriented design

- Composition over inheritance
- Using protocols effectively

⸻

Concurrency (modern Swift)

Async/await (core unit)

- async functions
- await
- Error handling with async code
- Sequential vs concurrent work

Structured concurrency

- Task
- async let
- Task groups (light coverage)

Actors

- Protecting shared state
- When to use actors (conceptual + practical)

⸻

SwiftUI (modern app development)

SwiftUI fundamentals

- Declarative UI model
- Views and modifiers
- Layout basics

State management (core unit)

- @State
- @Binding
- @ObservedObject
- @StateObject

Strong emphasis:

- how data flows through UI

Data flow

- One-way data flow
- Passing data between views

Navigation and structure

- NavigationStack
- Lists and collections
- Reusable components

Networking

- Fetching data with async/await
- Decoding JSON (Codable)
- Updating UI with async data

⸻

Real-world application structure

Project organization

- Separating models, views, and logic
- Feature-based structure

MVVM (practical level)

- View vs ViewModel vs Model
- Keeping logic out of views

Dependency management

- Swift Package Manager (SPM)
- Adding and using dependencies

Testing

- Unit tests
- Testing logic (not UI-heavy focus)

Debugging

- Breakpoints
- Logging
- Reading errors

⸻

Production skills

Persistence

- UserDefaults (basic)
- File storage (intro)
- Databases (conceptual only)

Networking best practices

- API layers
- Error handling
- Data validation

Code quality

- Naming
- Small functions
- Avoiding over-engineering
- Readability over cleverness

⸻

Potential Swift course sequence

Beginner phase

- What Swift is
- Variables, types, control flow
- Functions
- Optionals
- Collections

Intermediate phase

- Structs vs classes
- Enums
- Protocols
- Closures
- Error handling

Advanced phase

- Memory (ARC)
- Generics
- Protocol-oriented design
- Concurrency (async/await, actors)

Applied phase

- SwiftUI fundamentals
- State management
- Navigation and data flow
- Networking

Production phase

- Project structure
- MVVM
- Testing
- Persistence
- Capstone app

⸻

Additional requirements

- Teach concepts before syntax
- Organize lessons around building real applications, not isolated features
- Reinforce value semantics and immutability throughout
- Always explain why a pattern or feature is used
- Avoid outdated Swift patterns (callbacks over async/await, UIKit-first teaching, etc.)
- Avoid overusing force unwraps in examples
- Prefer structs, protocols, and composition over classes and inheritance
- Keep examples realistic and production-relevant
- Do not assume prior Swift or iOS knowledge
- Do not introduce unnecessary complexity early (e.g., advanced generics too soon)
- Use SwiftUI as the primary UI framework
- Keep UI logic separate from business logic

Add anything important that is missing, but do not expand the scope unnecessarily.
