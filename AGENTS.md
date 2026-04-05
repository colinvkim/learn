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
