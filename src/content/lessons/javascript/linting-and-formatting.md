---
title: "Linting and formatting"
description: "Learn how linters catch bugs and enforce style rules, how formatters make code consistent automatically, and how to set both up in a project."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

Linters and formatters are the first line of defense against bugs and inconsistent code. They run automatically and catch problems before they reach review.

## What a linter does

A linter analyzes your code without running it. It checks for:

- syntax errors
- unused variables
- unreachable code
- unsafe patterns (e.g., comparing with `==` instead of `===`)
- style violations (e.g., missing semicolons, inconsistent quotes)

ESLint is the most widely used JavaScript linter. It is highly configurable and supports modern JavaScript features.

## What a formatter does

A formatter rewrites your code to follow a consistent style. It handles:

- indentation
- spacing around operators
- line length
- quote style
- trailing commas
- semicolons

Prettier is the most widely used formatter. It has opinions but removes all style debates from code review.

## Setting up ESLint

Install ESLint as a dev dependency:

```bash
npm install --save-dev eslint
```

Initialize a configuration:

```bash
npx eslint --init
```

This creates `eslint.config.js` (flat config, the modern format). A minimal configuration:

```javascript
// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",        // require === and !==
      "prefer-const": "warn", // use const when possible
    },
  },
];
```

Run ESLint:

```bash
npx eslint src/
```

## Setting up Prettier

Install Prettier as a dev dependency:

```bash
npm install --save-dev prettier
```

Add a configuration file:

```javascript
// prettier.config.js
export default {
  semi: true,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
};
```

Format code:

```bash
npx prettier --write src/
```

Add npm scripts for convenience:

```json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/"
  }
}
```

## Integrating with editors

Most editors run ESLint and Prettier on save:

- **VS Code**: install the ESLint and Prettier extensions, enable "format on save"
- **Other editors**: check their documentation for ESLint and Prettier integration

Editor integration catches problems as you type, not when you run the linter manually.

## What to lint

Start with a conservative set of rules and add more as needed:

```javascript
rules: {
  // Potential bugs
  "no-unused-vars": "warn",
  "no-unreachable": "error",
  "no-undef": "error",

  // Best practices
  eqeqeq: "error",
  "prefer-const": "warn",
  "no-var": "error",

  // Style (better handled by Prettier)
  // Let Prettier handle these — do not duplicate in ESLint
}
```

<Note title="Let Prettier handle style, let ESLint handle logic">
  <p>ESLint and Prettier overlap on some rules. Use Prettier for formatting (spaces, quotes, line length) and ESLint for code quality (unused variables, unsafe patterns). The <code>eslint-config-prettier</code> package disables ESLint rules that conflict with Prettier.</p>
</Note>

## Running in CI

Add lint and format checks to your CI pipeline:

```bash
npm run lint
npm run format:check
```

`format:check` exits with an error code if any file is not formatted correctly. This ensures all committed code follows the project's style.

## What to carry forward

- linters analyze code without running it — they catch bugs and enforce rules
- formatters rewrite code to follow consistent style automatically
- ESLint is the standard JavaScript linter; Prettier is the standard formatter
- install both as dev dependencies and run them via npm scripts
- integrate with your editor for real-time feedback
- let Prettier handle style and ESLint handle code quality
- run lint and format checks in CI to enforce standards on all commits

Linting and formatting keep code consistent across the project. The next lesson covers the concept of bundling and dev servers — how JavaScript goes from many source files to a single browser-ready output.
