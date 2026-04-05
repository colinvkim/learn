// Centralized lesson ordering for each course.
// Edit this file to reorder, insert, or remove lessons.
// Each array lists lesson slugs (filenames without extension) in the order they should appear.

export const courseLessonOrder: Record<string, string[]> = {
  "git-and-github": [
    "introduction",
    "git-what-it-is-and-why-it-exists",
    "git-creating-a-repository-and-making-your-first-commit",
    "git-understanding-status-diff-and-history",
    "git-branches-and-switching-work",
    "git-merging-branches",
    "git-amending-rebasing-and-force-pushing",
    "git-undoing-changes-safely",
    "github-what-it-is-and-how-it-relates-to-git",
    "github-connecting-a-local-repository-to-github",
    "github-cloning-and-syncing-work",
    "github-pull-requests",
    "github-code-review",
    "github-issues",
    "github-actions",
    "a-practical-everyday-workflow",
    "git-reference",
    "which-tools-and-workflows-should-you-use",
  ],
  terminal: [
    "introduction",
    "reading-and-understanding-commands",
    "navigating-the-filesystem",
    "creating-moving-and-removing-files",
    "viewing-and-inspecting-files",
    "search-and-discovery",
    "permissions-and-executables",
    "environment-and-shell-config",
    "pipes-redirection-and-shell-features",
    "editing-and-scripting",
  ],
  "npm-and-pnpm": [
    "introduction",
    "npm-what-it-is-and-why-it-exists",
    "npm-starting-a-project-and-installing-packages",
    "npm-running-scripts-and-understanding-package-lock",
    "npm-reference",
    "npm-and-pnpm-updating-packages-and-managing-versions",
    "pnpm-what-it-is-and-why-people-use-it",
    "npm-and-pnpm-global-tools-vs-local-tools",
    "pnpm-everyday-commands",
    "which-one-should-you-use",
    "how-npm-and-pnpm-compare",
    "npm-and-pnpm-workspaces-and-monorepos",
    "npm-and-pnpm-registries-scopes-and-publishing",
    "npm-and-pnpm-security-and-dependency-hygiene",
    "npm-and-pnpm-troubleshooting-common-problems",
    "pnpm-reference",
  ],
  typescript: [
    // Module 1: TypeScript mental model
    "what-typescript-adds",
    "compile-time-vs-runtime",
    "type-erasure",
    "structural-typing",
    "type-inference",
    "why-typescript-allows-unsafe-looking-code",
    "strict-mode",
    // Module 2: Core type syntax
    "primitive-types",
    "arrays-and-tuples",
    "object-types",
    "function-types",
    "type-aliases-and-interfaces",
    // JS refresher (optional, after Module 2)
    "js-refresher-functions-objects-destructuring",
    // Module 3: Unions, literals, and narrowing
    "union-types",
    "literal-types",
    "narrowing-with-type-guards",
    "discriminated-unions",
    "exhaustiveness-checking",
    // Module 4: Functions, callbacks, and typed APIs
    "function-type-expressions",
    "contextual-typing",
    "higher-order-functions-with-types",
    "function-overloads",
    // Module 5: Safer uncertainty
    "any-and-unknown",
    "never-null-undefined",
    "assertions-vs-narrowing",
    "when-to-redesign-a-type",
    // Module 6: Generics
    "generic-functions",
    "generic-interfaces-and-type-aliases",
    "generic-constraints-and-defaults",
    "good-generic-design",
    // Module 7: Type operators and utility types
    "keyof-typeof-indexed-access",
    "mapped-types",
    "conditional-types-and-infer",
    "utility-types",
    // Module 8: Classes, objects, and domain models
    "classes-in-typescript",
    "access-modifiers-and-readonly",
    "implementing-interfaces",
    "composition-vs-inheritance",
    // JS refresher (optional, after Module 8)
    "js-refresher-prototypes-classes-this",
    // Module 9: Modeling real systems
    "api-response-types",
    "config-objects-and-form-data",
    "domain-entities-and-typed-errors",
    "dtos-vs-internal-models",
    // JS refresher (optional, after Module 9)
    "js-refresher-json-apis-defensive",
    // Module 10: Runtime validation and trust boundaries
    "why-typescript-cannot-validate",
    "parsing-unknown-and-narrowing",
    "schema-validation-libraries",
    "safe-ingestion-patterns",
    // Module 11: Tooling and project configuration
    "tsconfig-json-explained",
    "strict-flags-in-depth",
    "important-compiler-flags",
    "esm-vs-commonjs",
    "linting-formatting-ci",
    "migrating-from-javascript",
    // Module 12: Application tracks
    // Frontend track
    "react-props-and-component-types",
    "react-hooks-events-state",
    // Backend track
    "node-backend-track",
    // Library track
    "library-design-track",
  ],
  javascript: [
    // Unit 1: What is JavaScript
    "what-javascript-is",
    "how-javascript-engines-run-code",
    "expressions-vs-statements-and-values-vs-references",
    // Unit 2: Core syntax and control flow
    "let-const-and-primitive-types",
    "objects-and-arrays",
    "operators-and-truthy-falsy",
    "if-else-and-switch",
    "loops-for-while-and-for-of",
    // Unit 3: Functions
    "function-declarations-and-expressions",
    "arrow-functions",
    "default-and-rest-parameters",
    "scope-and-closures",
    "higher-order-functions",
    // Unit 4: Data manipulation
    "array-methods-map-filter-reduce",
    "array-methods-find-some-every-sort",
    "object-operations-and-iteration",
    "destructuring-and-spread-rest",
    "copying-vs-mutating",
    // Unit 5: Objects, prototypes, and classes
    "how-objects-actually-work",
    "methods-and-this",
    "the-prototype-chain",
    "constructor-functions",
    "es6-classes-and-inheritance",
    // Unit 6: Modules and code organization
    "why-modules-matter",
    "import-and-export",
    "file-organization-and-project-structure",
    "reusable-utility-modules",
    // Unit 7: Asynchronous JavaScript
    "the-event-loop",
    "callbacks",
    "promises",
    "async-await",
    "error-handling-with-async-code",
    "fetching-data-from-apis",
    // Unit 8: The browser and the DOM
    "what-the-dom-is",
    "selecting-elements",
    "updating-text-attributes-and-styles",
    "event-listeners",
    "forms-and-input-handling",
    // Unit 9: Error handling and debugging
    "try-catch-and-throwing-errors",
    "reading-stack-traces",
    "debugging-with-console-and-devtools",
    "common-javascript-mistakes",
    // Unit 10: Working with external data
    "json-parsing-and-serializing",
    "working-with-api-responses",
    "defensive-programming",
    "checking-assumptions-in-dynamic-code",
    // Unit 11: Tooling and modern workflow
    "node-npm-and-running-scripts",
    "project-structure",
    "linting-and-formatting",
    "bundlers-and-dev-servers",
    // Unit 12: JavaScript design habits
    "naming-and-small-functions",
    "avoiding-duplication",
    "immutability-as-a-practice",
    "readable-code-over-clever-code",
  ],
};
