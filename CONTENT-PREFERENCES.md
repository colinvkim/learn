# Content Preferences

This file captures the current standard for writing courses on `learn`.

It exists to keep future courses consistent in structure, tone, and teaching quality.

## Core standard

- Write for real understanding, not just topic coverage.
- Assume the reader may have no prior technical knowledge unless the course explicitly requires prerequisites.
- Prefer clarity and progression over completeness on a single page.
- Prefer modern, production-quality guidance over generic tutorial material.
- Do not add filler, fluff, marketing language, or broad motivational claims.
- Do not write like a blog post. Write like a careful technical guide.

## Audience assumptions

- Default to the least experienced plausible reader.
- Define terms before depending on them.
- If a concept is likely to be unfamiliar, explain it at the point where it first matters.
- If a tool or command changes a file, say which file it changes.
- If a distinction matters, make it explicit.

Examples:

- Explain the difference between a package, a package manager, and a registry before teaching package-manager commands.
- Explain the difference between "install what the project already declares" and "add a new dependency to the project" before expecting the reader to internalize command differences.

## Course structure

- Every course should have a clear progression.
- Small courses should stay small. Do not manufacture extra sections just to make a course feel larger.
- Do not add a separate "Overview" page.
- Use `Introduction` as a real lesson when an introduction is needed.
- For small courses, skip meta sections such as "The order of the course."
- Do not duplicate the lesson list inside the page body when the sidebar already provides navigation.
- Visible lesson numbering is not required. Internal ordering can exist in frontmatter without being emphasized in the UI.

## Sequencing rules

- Introduce one tool or concept at a time.
- Do not compare two tools before the reader understands each one independently.
- Move from foundations to commands, then to tradeoffs, then to recommendations.
- Put comparisons after the reader has enough context for the comparison to mean something.
- End with practical decision guidance when the topic naturally leads to a choice.

Recommended progression for tool-based courses:

1. Introduce the problem the tool solves.
2. Define the key terminology.
3. Explain the tool in plain terms.
4. Show the smallest useful commands.
5. Explain the important files the tool creates or changes.
6. Cover day-to-day usage.
7. Compare against adjacent tools only after the fundamentals are clear.
8. Close with practical guidance on when to use what.

## Lesson design

- Each lesson should have one clear job.
- Start by orienting the reader to the problem the lesson solves.
- Do not front-load long command lists without context.
- Prefer a few important commands with explanation over large cheat sheets.
- Use examples that map to real project work.
- Show the command, then explain what it does, when to use it, and what it changes.
- If a command has a commonly confused variant, teach the distinction explicitly.

Examples:

- `npm install` and `npm install <package>` should not be treated as the same action.
- `pnpm install` and `pnpm add <package>` should not be treated as the same action.
- If a command can take multiple packages, include that example when it is useful, for example `pnpm add react react-dom`.

## Writing style

- Keep the prose fluid, direct, and technically precise.
- Prefer calm explanatory prose over conversational phrasing.
- Avoid rhetorical chatter such as "you might be wondering" unless it materially improves clarity.
- Avoid repeatedly referring to "this course," especially in small guides where that framing feels artificial.
- Use short paragraphs.
- Use headings to separate real conceptual steps, not to pad the page.
- Prefer plain statements over hype or personality.

Preferred tone:

- "npm is the default package manager for Node.js."
- "This command installs the dependencies already declared by the project."

Avoid:

- "This course will walk you through..."
- "You might be wondering why this matters..."
- "Now let's dive into..."

## Commands and examples

- Commands must be accurate and current.
- Examples should reflect normal usage, not toy syntax with no explanation.
- When a command is commonly run in a project directory, say that.
- When a command is safe to run once versus repeatedly, clarify that.
- Distinguish clearly between:
  - creating a project
  - installing existing dependencies
  - adding a new dependency
  - adding a development dependency
  - running project scripts
  - running a tool one time without saving it
- If a command has an npm form and a pnpm form, show the parallel when the comparison helps.

## Explaining files

- Name important files explicitly when they first appear.
- Explain why the file exists before going into implementation detail.
- Prefer practical meaning over formal definitions.

Examples:

- `package.json` records project metadata, dependencies, and scripts.
- `package-lock.json` or `pnpm-lock.yaml` records the exact dependency resolution needed for reproducible installs.

## Comparisons and recommendations

- Comparisons should follow understanding, not replace it.
- Compare tools through concrete differences in workflow, naming, performance, ecosystem fit, and team usage.
- Do not force false neutrality if one recommendation is stronger for most readers.
- Recommendations should be practical and scoped.

Example approach:

- Explain npm first because it is the default and is what most readers will encounter first.
- Explain pnpm second as an alternative within the same ecosystem.
- Compare them after both are understood.
- End with a direct recommendation based on the likely reader.

## Use of lists

- Use bullet points when the content is genuinely list-shaped.
- Bullet points must render correctly and should not replace explanation.
- Do not turn entire lessons into lists.
- If a list introduces important concepts, explain each item immediately after or around the list.

## UI-aware content rules

- The sidebar already provides navigation. Do not recreate a table of contents inside the introduction page for small courses.
- The lesson header and lesson body should feel distinct. Write short, useful descriptions that support the title rather than repeating it.
- Assume commands are copyable in code blocks, so examples should be clean and worth copying.

## When to use MDX components

- Default to Markdown for straightforward lessons.
- Use MDX only when the lesson benefits from structured components such as notes, warnings, steps, or richer examples.
- Do not use callouts just to decorate the page.
- Use callouts to clarify high-value distinctions, common mistakes, or non-obvious constraints.

Current component set:

- `Note` for clarifications and contextual detail
- `Tip` for shortcuts, patterns, and useful mental models
- `Warning` for mistakes, footguns, or important constraints
- `Steps` for short procedural sequences

## Anti-patterns

- Do not start with abstract comparisons before defining the tools being compared.
- Do not assume background knowledge that has not been established.
- Do not add overview pages that duplicate the sidebar.
- Do not write course-management text instead of teaching the subject.
- Do not pad short courses with unnecessary meta structure.
- Do not use overly conversational transitions when a direct explanation is clearer.
- Do not bury critical distinctions inside dense paragraphs.

## Definition of done for a new course

A course is in good shape when:

- the first lesson makes the topic legible to a beginner
- the sequence builds logically from lesson to lesson
- terminology is introduced before use
- commands are accurate and contextualized
- important files are explained clearly
- comparisons happen after foundations
- the writing is direct, fluid, and not overly conversational
- the UI is not fighting the content with duplicate navigation or redundant sections
