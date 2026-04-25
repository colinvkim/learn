- created by codex on april 25
- intended to create optional interactive MDX components for the CSS course

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are adding reusable interactive content components for the CSS course. Familiarize yourself with CONTENT-PREFERENCES.md, AGENTS.md, existing components in src/components/content/, and the CSS course prompt in prompts/css.md. Go slowly and carefully.

Goal

Create a small set of polished, accessible, reusable Astro content components that help learners understand CSS by changing inputs and seeing visual output. These components should be usable inside MDX lessons, like Quiz, Note, Tip, Warning, and Steps.

Do not build an overlarge playground framework. Build focused teaching widgets that match the site style, load cheaply, and work without external services.

Component principles

- Components should teach one concept well.
- UI should be compact, stable, and readable inside lesson content.
- Use native controls where possible: sliders, segmented buttons, checkboxes, selects, text inputs.
- Provide accessible labels and keyboard operation.
- Avoid requiring learners to write large code blocks into textareas.
- Show short CSS snippets when useful, but do not turn every widget into an editor.
- Use progressive enhancement: static explanation remains useful if JavaScript fails.
- Keep scripts local to components and avoid global collisions.
- Avoid heavy dependencies unless clearly justified.
- Match existing visual language in src/components/content/.
- Use Tailwind classes already used in the repo.
- Ensure dark mode works.
- Respect prefers-reduced-motion.

Suggested component set

Build the highest-value subset first. Prefer 4 to 6 excellent components over many shallow ones.

1. CascadeInspector

Purpose: teach why one declaration wins.

Learner should be able to change:

- selector type: class, element, id, compound selector
- source order
- specificity
- @layer order
- inherited vs directly applied property
- !important on/off

Display:

- small HTML preview
- competing CSS rules
- winning rule
- explanation of winning reason
- specificity score or clear specificity labels

Use in lessons:

- cascade, inheritance, specificity
- cascade layers
- debugging overridden rules

2. BoxModelExplorer

Purpose: teach sizing and spacing.

Learner should be able to change:

- content width/height
- padding
- border
- margin
- box-sizing: content-box vs border-box
- overflow behavior

Display:

- visual box model diagram
- rendered element
- computed outer size
- short generated CSS

Use in lessons:

- box model
- sizing
- overflow
- debugging layout

3. SelectorPlayground

Purpose: teach selector matching and specificity.

Learner should be able to choose or type selectors from a constrained list:

- .card
- article .title
- .card > h2
- [data-state="active"]
- :is()
- :where()
- :not()
- :has()
- pseudo-classes where easy to simulate

Display:

- small fixed HTML tree
- highlighted matching nodes
- specificity output
- note when selector matches nothing

Use in lessons:

- selectors
- modern selectors
- specificity

4. LayoutLab

Purpose: teach flexbox, grid, and when each is useful.

Learner should be able to switch modes:

- normal flow
- flex
- grid

For flex:

- direction
- wrap
- justify-content
- align-items
- gap
- item grow/shrink

For grid:

- column pattern
- gap
- auto-fit/minmax option
- placement example

Display:

- same set of items under each layout mode
- generated CSS
- short explanation of what changed

Use in lessons:

- normal flow
- flexbox
- grid
- responsive layout

5. ResponsiveLab

Purpose: compare viewport media queries with container queries.

Learner should be able to change:

- viewport width simulation
- component container width
- media query breakpoint
- container query breakpoint

Display:

- same card component in wide/narrow containers
- indicator showing which query matched
- generated CSS for @media and @container

Use in lessons:

- responsive design
- container queries
- component-based layouts

6. MotionLab

Purpose: teach transitions, transforms, keyframes, @starting-style, and reduced-motion alternatives.

Learner should be able to change:

- transition duration
- timing function
- transform type
- opacity on/off
- keyframe animation preset
- reduced motion toggle
- entry transition using @starting-style simulation

Display:

- animated preview element
- generated CSS
- warning when chosen animation may be distracting or layout-heavy

Use in lessons:

- transitions and transforms
- @keyframes
- @starting-style
- prefers-reduced-motion

7. ColorLab

Purpose: teach modern color and contrast.

Learner should be able to change:

- foreground color
- background color
- color format: hsl, rgb, oklch
- color-mix percentage

Display:

- preview swatch/card
- contrast ratio
- pass/fail for normal and large text
- generated CSS

Use in lessons:

- color
- themes
- accessibility
- custom properties

Implementation guidance

- Put components in src/components/content/.
- Each component should be importable from MDX directly.
- Use Astro components with small inline scripts, following ShellCommandSet and Quiz patterns.
- Use data attributes for component roots and internal state.
- Avoid shared global objects unless needed to prevent duplicate initialization.
- Initialize on astro:page-load and immediately, matching existing component scripts.
- Keep generated IDs collision-safe with crypto.randomUUID() where needed.
- Prefer TypeScript in Astro frontmatter for props and option types.
- Avoid network access and external runtime dependencies.
- Use CSS custom properties inside component styles only if they make dynamic previews cleaner.
- If a component includes text inputs for CSS selectors, constrain the supported grammar or validate carefully. Do not eval arbitrary code.
- If using user-entered selectors, use querySelectorAll inside try/catch and show invalid selector feedback.
- Keep generated CSS snippets short and accurate.

Design guidance

- Do not put cards inside cards.
- Components may be single cards because they are framed interactive tools.
- Use stable dimensions for previews so controls do not shift layout.
- Keep controls dense but not cramped.
- Use icon buttons only if the repo already has icon support; otherwise use clear text labels.
- Make longest labels fit on mobile.
- Check responsive layout at mobile and desktop widths.
- Avoid one-note color palettes. Use repo tokens and state colors already present.

Testing and verification

- Run pnpm build after changes.
- Manually inspect at least one MDX page or temporary test page that imports each component.
- Verify keyboard operation for controls.
- Verify no console errors.
- Verify dark mode if easy in the local app.
- Verify generated CSS examples match visible behavior.

Suggested deliverable shape

- Add the components.
- Add a short usage example for each component to prompts/css.md or a new prompts/css-component-usage.md only if needed.
- Do not add actual CSS lessons unless explicitly asked in that thread.
- If time is short, build these first:
- CascadeInspector
- BoxModelExplorer
- LayoutLab
- ResponsiveLab
- MotionLab

Additional requirements

- Components should help the CSS course teach real understanding, not decoration.
- Keep copy concise and learner-focused.
- Do not overuse animation inside the learning UI itself.
- Add anything important that is missing.
