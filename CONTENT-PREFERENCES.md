# Course Writing Preferences for learn

Use these preferences when designing or writing courses.

## Goal

Write courses that help learners build correct mental models, complete real tasks, and transfer their knowledge to new situations.

Prioritize understanding over coverage.

## General principles

- Teach concepts before syntax.
- Teach tasks and workflows, not just features or commands.
- Make important distinctions explicit.
- Separate foundational ideas from tool-specific details.
- Prefer realistic usage over abstract explanation.
- Keep the course as short as it can be while still teaching the topic well.

## Audience

- Default to the least experienced plausible learner unless prerequisites are explicit.
- Define terms before depending on them.
- Explain unfamiliar concepts when they first matter.
- Do not assume ecosystem knowledge that has not been established.

## Sequencing

Move from: 1. problem or purpose 2. core concept 3. key terminology 4. smallest useful usage 5. important files, outputs, or artifacts 6. day-to-day workflow 7. distinctions, tradeoffs, and caveats 8. comparisons and recommendations

Do not begin with comparisons if the learner does not yet understand the tools being compared.

## Lesson design

- Give each lesson one clear job.
- Start by explaining the problem the lesson solves.
- Use a small number of meaningful examples.
- Explain what each example does, when to use it, and what it changes.
- Prefer explanation over long command lists or reference-style dumps.

## Commands and examples

- Keep commands accurate, current, and realistic.
- Say where a command is run when that matters.
- Say what files or state it changes when that matters.
- Distinguish clearly between similar actions, such as installing existing dependencies vs adding a new one.
- Use examples that resemble real project work.

## Files and artifacts

- Name important files explicitly when they first appear.
- Explain why each file exists before going deep into details.
- Prefer practical meaning over formal definitions.

## Comparisons and recommendations

- Compare tools only after each tool is understandable on its own.
- Focus comparisons on concrete workflow differences.
- Recommendations should be practical, scoped, and useful for the likely learner.

## Writing style

- Be direct, calm, and precise.
- Use short paragraphs.
- Use headings only when they separate real conceptual steps.
- Avoid filler, hype, blog-style framing, and unnecessary motivational language.

## Structure and UI

- Do not add extra overview pages unless they are genuinely useful.
- Do not duplicate sidebar navigation inside the lesson body.
- Keep introductions useful and brief.
- Let the UI handle navigation; let the content handle teaching.

## Good outcomes

A course is in good shape when:

- the topic becomes understandable early
- the sequence feels natural
- terminology appears before use
- examples are contextualized
- key distinctions are explicit
- the learner is prepared for real usage, not just ideal demos

Avoid

- syntax before concepts
- comparisons before understanding
- long unexplained command lists
- unnecessary meta structure
- assumed background knowledge
- repetitive course-management language
- content written to sound impressive rather than teach clearly
- emojis
