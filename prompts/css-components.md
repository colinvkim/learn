- created by codex on april 25
- intended to create optional interactive MDX components for the CSS course

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are adding reusable interactive content components for the CSS course. Familiarize yourself with CONTENT-PREFERENCES.md, AGENTS.md, existing components in src/components/content/, and the CSS course prompt in prompts/css.md. Go slowly and carefully.

Goal

Create a small set of polished, accessible, reusable Astro content components that help learners understand CSS by changing inputs and seeing visual output. These components should be usable inside MDX lessons, like Quiz, Note, Tip, Warning, and Steps.

Do not build an overlarge playground framework. Build focused teaching widgets that match the site style, load cheaply, and work without external services.

Important: make these components universal enough to reuse across many CSS topics and many lessons. Do not hard-code one example, one HTML shape, one color palette, one layout scenario, or one explanation into the component. Each component should provide a reusable interaction structure; lessons should provide the specific teaching scenario through props, presets, labels, examples, and optional slots.

Universal component model

- Components should be configurable teaching primitives, not lesson-specific demos.
- Each component should accept a title, description, initial state, control presets, preview content, and optional explanation text.
- Prefer prop-driven scenario data over hard-coded examples.
- Provide sensible defaults so a component works with minimal props.
- Allow lessons to customize visible labels, preset names, sample HTML/CSS text, and generated explanation copy where useful.
- Keep component names tied to concepts, not one example: CascadeInspector, BoxModelExplorer, SelectorPlayground, LayoutLab, ResponsiveLab, MotionLab, ColorLab.
- Avoid content assumptions like "card", "dashboard", "article", or "button" unless provided by props or used only as a default.
- Support multiple use cases per component. Example: LayoutLab should work for navigation, galleries, forms, cards, and page shells by changing props.
- Keep APIs small and stable. Avoid dozens of props when a typed `presets` or `scenario` object would be clearer.
- If a component needs rich custom markup, use Astro slots rather than string-building HTML.
- Document each component's expected props with TypeScript interfaces and a short MDX usage example.

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
- Separate component mechanics from lesson content.
- Make generated CSS snippets reflect current controls and current scenario.
- Let lessons hide advanced controls when the concept is introductory.
- Let lessons provide presets for common states so learners can compare named examples quickly.
- Keep default copy generic; lesson-specific teaching belongs in MDX around the component or in props.

Reusable API expectations

For each component, design a compact API before implementation. Include types like these where appropriate:

```ts
type ControlPreset = {
  label: string;
  description?: string;
  values: Record<string, string | number | boolean>;
};

type PreviewItem = {
  label?: string;
  className?: string;
  content?: string;
};

type Explanation = {
  when: Record<string, string | number | boolean>;
  text: string;
};
```

These exact types are not required, but the idea matters: lessons pass scenarios and presets; components render reusable controls and previews.

Example MDX usage style

Suggested component set

Build the highest-value subset first. Prefer 4 to 6 excellent components over many shallow ones.

```mdx
<LayoutLab
  title="Compare layout strategies"
  description="Use the same content with flow, flexbox, and grid."
  items={[
    { content: "Overview" },
    { content: "Pricing" },
    { content: "Docs" },
  ]}
  presets={[
    { label: "Navigation row", values: { mode: "flex", justify: "space-between" } },
    { label: "Card grid", values: { mode: "grid", columns: "repeat(auto-fit, minmax(10rem, 1fr))" } },
  ]}
/>
```

The lesson should be able to reuse the same component later with different items and presets.

1. CascadeInspector

Purpose: teach why one declaration wins.

Make it reusable for color, font-size, margin, display, custom properties, and any other property where competing declarations make sense. Do not hard-code text color as the only example.

Suggested configurable props:

- title and description
- target element label or preview content
- property being compared
- competing rules list
- layer order list
- initial toggles for source order, specificity, inheritance, importance
- explanation overrides for lesson-specific wording

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

Make it reusable for buttons, cards, images, form fields, page sections, and any rectangular element. Preview content and labels should come from props or slots.

Suggested configurable props:

- title and description
- preview label/content
- min/max/range settings for controls
- initial width/height/padding/border/margin
- allowed box-sizing modes
- optional presets such as "button", "card", "image frame", "full-width section"

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

Make it reusable with different fixed HTML trees. A lesson about forms should pass form markup; a lesson about article structure should pass article markup; a lesson about component states should pass data attributes and class names.

Suggested configurable props:

- title and description
- htmlTree or structured nodes
- selector presets
- allowCustomSelector boolean
- initial selector
- explanations keyed by selector or match result

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

Make it reusable for many layout problems: nav bars, cards, galleries, forms, media objects, page shells, dashboards, and content clusters. Items, item sizes, labels, and presets should all be configurable.

Suggested configurable props:

- title and description
- items
- allowedModes
- initialMode
- flex controls to show
- grid controls to show
- presets
- previewMinHeight or aspect ratio
- generatedSnippetOptions

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

Make it reusable for different components and breakpoints. A lesson should be able to use it for cards, navigation, forms, sidebars, media objects, or grids without changing the component source.

Suggested configurable props:

- title and description
- preview content or slot
- viewport range
- container range
- breakpoint presets
- media query examples
- container query examples
- labels for matched states

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

Make it reusable for state changes, disclosure panels, toasts, cards, buttons, loaders, and page-entry examples. Motion targets, presets, and warnings should be data-driven.

Suggested configurable props:

- title and description
- target content or slot
- motion presets
- allowed properties
- timing function presets
- reduced motion behavior
- warnings keyed by property or preset
- generated snippet mode: transition, keyframes, starting-style

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

Make it reusable for text on backgrounds, buttons, cards, themes, borders, shadows, and color-mix examples. Do not assume only foreground/background text contrast matters, though contrast should be first-class.

Suggested configurable props:

- title and description
- foreground/background initial values
- swatch labels
- palette presets
- color spaces to expose
- contrast sample text
- optional design token names
- optional color-mix source colors

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
- Define explicit Props interfaces for each component.
- Prefer a single `presets` prop or `scenario` prop for configurable teaching examples.
- Keep default props useful for smoke testing and internal component preview pages.
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
- Do not bake course lesson prose into component internals. Pass prose through props or write it in MDX around the component.
- Avoid one-off logic for a single lesson unless it can be expressed as reusable preset data.
- If a requested use case cannot fit a component cleanly, improve the component API rather than forking a near-duplicate component.

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
- Test each component with at least two different scenarios or preset sets to prove it is reusable.
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
- Components should be reusable across different CSS topics, lessons, examples, and projects.
- Prefer configurable structure over hard-coded examples.
- Do not create lesson-specific components unless a general component cannot teach that concept cleanly.
- Keep copy concise and learner-focused.
- Do not overuse animation inside the learning UI itself.
- Add anything important that is missing.
