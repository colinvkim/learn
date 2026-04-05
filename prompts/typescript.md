- created by chatgpt, heavily edited by me (april 5)
- used to design ts course from scratch, though we already have a 54 lesson js course

We are designing a new TypeScript curriculum for the website, from scratch. The material for the JavaScript course is a prerequisite for the TypeScript course, allowing us to do an in-deppth teaching of TypeScript. However, users should still be able to take the TypeScript course without doing the JavaScript course, as long as they have a basic understanding of JavaScript and strong foundation in programming. Review AGENTS.md and CONTENT-PREFERENCES.md.

Here are my preferences for the course's structure. If you feel that things are missing, feel free to add them. Teach modern practices; use context7 or web search to develop an understanding of modern TypeScript. Examples:

- Teach new syntax instead of deprecated counterparts
- In examples, use modern code practices

⸻

The revised dual-entry TypeScript curriculum

Module 1: TypeScript mental model

- what TypeScript is and is not
- compile time vs runtime
- type erasure
- structural typing
- inference
- why TS can still allow some unsafe-looking code
- the role of strict mode

⸻

Module 2: Core type syntax

- primitive types
- arrays and tuples
- object types
- function parameter and return types
- optional properties
- type aliases
- interfaces
- inference vs explicit annotation

Optional JavaScript refresher/review lesson:

- function declarations vs expressions
- arrow functions
- objects and arrays
- default parameters
- destructuring basics

⸻

Module 3: Unions, literals, and narrowing

- union types
- literal types
- narrowing with typeof, in, equality checks, truthiness
- discriminated unions
- exhaustiveness checking

⸻

Module 4: Functions, callbacks, and typed APIs

- function types
- callback types
- higher-order functions with types
- contextual typing
- overloads, at an introductory level
- typed array method callbacks

⸻

Module 5: Safer uncertainty

- any
- unknown
- never
- null and undefined
- strictNullChecks
- assertions vs narrowing
- when to redesign a type instead of fighting it

⸻

Module 6: Generics

- generic functions
- generic interfaces and type aliases
- constraints with extends
- default type parameters
- preserving relationships between inputs and outputs
- good generic design vs overengineering

⸻

Module 7: Type operators and utility types

- keyof
- typeof in type positions
- indexed access types
- mapped types
- conditional types
- infer
- utility types like Partial, Pick, Omit, ReturnType, Parameters

⸻

Module 8: Classes, objects, and domain models

- typing object-oriented code
- classes in TypeScript
- access modifiers
- readonly properties
- implementing interfaces
- composition vs inheritance in typed systems
- domain modeling

Optional JavaScript refresher/review lesson:

- prototypes
- classes
- methods and this
- inheritance basics

⸻

Module 9: Modeling real systems

- API response types
- config objects
- form data
- domain entities
- UI state
- typed error models
- DTOs vs internal models
- making invalid states hard to represent

Optional JavaScript refresher/review lesson:

- JSON
- API responses
- object transformation
- defensive programming

Outcome

This should be one of the central modules. It teaches what TypeScript is really for in practice: data modeling. ￼

⸻

Module 10: Runtime validation and trust boundaries

- why TypeScript alone cannot validate external input
- parsing unknown
- runtime validation
- safe ingestion of JSON and request bodies
- narrowing after checks
- schema-library concepts

⸻

Module 11: Tooling and project configuration

- tsconfig.json
- strict
- noImplicitAny
- strictNullChecks
- noUncheckedIndexedAccess
- exactOptionalPropertyTypes
- ESM vs CommonJS
- declaration files
- linting and formatting in TS projects
- type checking in CI
- migration from JS to TS

⸻

Module 12: Application tracks

Then split into applied tracks:

Frontend track

- React + TypeScript
- props
- hooks
- events
- reducers
- context typing
- API state

Backend track

- Node + TypeScript
- request/response types
- configuration typing
- service layers
- typed errors
- persistence boundaries

Library track

- public API design
- overloads
- ergonomic generics
- exported types
- declaration design

Outcome

Learners apply the same type-system ideas in different environments.
