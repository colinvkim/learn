## Project Overview

learn is an learning platform built with Astro (https://learn.colinkim.dev). It is content-first, docs-shaped, and intentionally minimal.

**Stack:**

- Astro 6 with content collections
- Tailwind CSS v4
- TypeScript
- pnpm

## Commands

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Run Astro CLI commands
pnpm astro ...
```

**Content authoring guidelines:** Read [CONTENT-PREFERENCES.md](./CONTENT-PREFERENCES.md) before writing or editing content.

## Workflow

- Always run `pnpm build` after making changes to verify the build passes before committing.
- Use Conventional Commits format for commit messages: `fix:`, `feat:`, `chore:`, `refactor:`, `docs:`, etc.
- Choose commit types by user-visible impact:
  - `feat:` for new UI, new content, new behavior, or meaningful improvements users can notice
  - `fix:` for bug fixes or regressions
  - `refactor:` only for internal code changes with no intended user-visible behavior or UI change
  - `docs:` for documentation-only edits
  - `chore:` for maintenance work like tooling, config, or dependency housekeeping
- Commit at logical checkpoints after verification, not only at end of long sessions.
- Commit changes immediately after they are verified to pass locally.

## Lesson Ordering

Lesson order is defined in **one file only**: `src/content/courses/order.ts`.

Each course has an array of lesson slugs (filenames without extension) in the order they should appear.

To add, remove, or reorder a lesson, **only edit `order.ts`**. Do not add or change `order` fields in lesson frontmatter — the `order` field does not exist in the schema.

Example — to insert a new lesson between two existing ones:

```ts
"git-and-github": [
  "git-merging-branches",
  "git-undoing-changes-safely",  // new lesson inserted here
  "github-what-it-is-and-how-it-relates-to-git",
  ...
],
```

Lessons not listed in `order.ts` will appear at the end, sorted alphabetically by title.

## Site Structure

```
/
├── src/
│   ├── components/
│   │   ├── content/      # MDX components (Note, Tip, Warning, Steps)
│   │   ├── icons/        # Course icons
│   │   └── site/         # Layout components (DocsLayout, CourseSidebar)
│   ├── content/          # Content collections
│   │   ├── courses/
│   │   └── lessons/
│   ├── lib/content/      # Content loading utilities
│   ├── pages/            # Routing (mostly auto-generated from collections)
│   └── styles/           # Global styles
├── public/               # Static assets
└── src/content.config.ts # Content collection definitions
```
