<p align="center">
    <img src="./public/favicon.svg" alt="learn" width="120">
</p>

# learn

A static Astro site for developer education. Content-first, docs-shaped, intentionally minimal. Courses and lessons live in typed content collections with MDX support for richer components.

![Astro](https://img.shields.io/badge/Astro%206-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20v4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

## Why learn?

Most developer education platforms are bloated with heavy frameworks, complex CMS layers, and custom dashboards. learn strips all of that down. It's Astro, Tailwind, and typed content collections. Courses are directories, lessons are files, frontmatter controls the rest.

## Features

### Content Model

- **Typed content collections**
- **Course progress tracking**

### Site

- **Homepage is intentionally simple**
- **Docs-style reading shell**
- **Copyable code blocks**
- **Theme toggle**
- **Server-rendered by default**

## Tech Stack

- **Astro 6**
- **Tailwind CSS v4**
- **Inter**
- **JetBrains Mono**
- **MDX** (available for lessons that need components)

## Requirements

- **Node.js 20+**
- **pnpm**

## Installation

```bash
git clone https://github.com/colinvkim/learn.git
cd learn
pnpm install
```

## Development

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run any Astro CLI command:

```bash
pnpm astro check
```

## Project Structure

```
learn/
├── src/
│   ├── components/
│   │   ├── content/            # MDX callout components (Note, Tip, Warning, Steps)
│   │   ├── icons/
│   │   └── site/               # Docs-style shell (sidebar, header, layout)
│   ├── content/
│   │   ├── courses/            # Course entries (.md / .mdx)
│   │   └── lessons/            # Lessons nested per course
│   ├── lib/
│   │   └── content/            # Content querying utilities
│   ├── pages/
│   └── styles/
├── public/
├── CONTENT-PREFERENCES.md      # Authoring guidelines
├── astro.config.mjs
└── src/content.config.ts       # Typed collection schemas
```

## Content Model

### Courses

Live in `src/content/courses/`. Accept `.md` and `.mdx`.

```yaml
title: npm and pnpm
description: Learn what npm and pnpm are, the problem they solve, and how to choose between them with a clear mental model.
status: published
sortOrder: 1
topics:
  - npm
  - pnpm
tags:
  - npm
  - pnpm
```

### Lessons

Live in `src/content/lessons/<course>/`. Accept `.md` and `.mdx`.

```yaml
title: Introduction
description: Start with the big picture.
course: npm-and-pnpm
order: 1
status: published
```

## Authoring

Read [CONTENT-PREFERENCES.md](./CONTENT-PREFERENCES.md) before writing or revising lessons.

The short version:

- Write for readers with little or no prior knowledge
- Define terms before depending on them
- Explain one tool or concept at a time
- Compare tools only after each one makes sense on its own
- Use Markdown by default; MDX only when components add real value

## License

MIT. See [LICENSE](LICENSE) for details.
