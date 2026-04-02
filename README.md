# learn

`learn` is a static Astro site for developer education. The site is content-first, docs-shaped, and intentionally minimal.

The current standard is:

- Astro 6
- Tailwind CSS v4
- typed content collections
- server-rendered pages by default
- Inter for UI text
- JetBrains Mono for commands and code

## Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run Astro CLI commands:

```bash
pnpm astro ...
```

## Project structure

```text
/
├── CONTENT-PREFERENCES.md
├── public/
├── src/
│   ├── components/
│   │   ├── content/
│   │   ├── icons/
│   │   └── site/
│   ├── content/
│   │   ├── courses/
│   │   └── lessons/
│   ├── lib/
│   │   └── content/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── src/content.config.ts
```

## Content model

Courses live in `src/content/courses/`.

Lessons live in `src/content/lessons/<course>/`.

Both collections accept `.md` and `.mdx`.

Course frontmatter:

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

Lesson frontmatter:

```yaml
title: Introduction
description: Start with the big picture.
course: npm-and-pnpm
order: 1
status: published
```

Notes:

- `status` is either `draft` or `published`
- `course` is a reference to a course entry
- `order` controls lesson sequencing in the sidebar and pager
- courses should stay small unless the topic genuinely requires more depth

## Authoring rules

Read [CONTENT-PREFERENCES.md](./CONTENT-PREFERENCES.md) before writing or revising lessons.

The short version:

- write for readers with little or no prior knowledge unless the topic requires more
- define terms before depending on them
- explain one tool or concept at a time
- compare tools only after each one makes sense on its own
- use Markdown by default
- use MDX only when structured components add real value

## MDX components

MDX is available for lessons or course files that need richer structure.

Available components:

- `Note`
- `Tip`
- `Warning`
- `Steps`

### Importing components in a lesson

From a lesson file in `src/content/lessons/<course>/...`:

```mdx
---
title: Example
description: Example lesson
course: npm-and-pnpm
order: 99
status: draft
---

import Note from "../../../components/content/Note.astro";
import Tip from "../../../components/content/Tip.astro";
import Warning from "../../../components/content/Warning.astro";
import Steps from "../../../components/content/Steps.astro";
```

From a course file in `src/content/courses/...`:

```mdx
import Note from "../../components/content/Note.astro";
```

### Example usage

```mdx
<Note title="Important distinction">
  <p><code>npm install</code> and <code>npm install react</code> are different actions.</p>
</Note>

<Tip>
  <p>You can add multiple packages at once with <code>pnpm add react react-dom</code>.</p>
</Tip>

<Warning title="Do not mix package managers">
  <p>A project should generally use one lockfile and one package manager workflow.</p>
</Warning>

<Steps>
  <li>Install Node.js.</li>
  <li>Open the project directory.</li>
  <li>Run <code>pnpm install</code>.</li>
</Steps>
```

Guidelines:

- keep callouts sparse
- use them to clarify important distinctions, not to decorate the page
- keep the text inside them short

## Site notes

- The homepage is intentionally simple.
- Course content uses the custom docs-style shell in `src/components/site/`.
- Code blocks are copyable.
- Theme state is stored locally and preserved across page navigation.

## Current content status

- `npm and pnpm` is the first published course
- `typescript` remains a draft scaffold
