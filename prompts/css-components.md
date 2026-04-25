- created by codex on april 25
- intended to create optional interactive MDX components for the CSS course

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are adding reusable interactive content components for the CSS course. Familiarize yourself with CONTENT-PREFERENCES.md, AGENTS.md, existing components in src/components/content/, and prompts/css.md. Go slowly and carefully.

Goal

Create a small set of polished, accessible Astro content components that help learners understand CSS by changing controls and seeing visual output. Components should be importable in MDX like Quiz, Note, Tip, Warning, and Steps.

Do not build a large playground framework. Build focused teaching widgets that match the site style, load cheaply, and work without external services.

Most important requirement: components must be reusable across many lessons and topics. Do not hard-code one example, one HTML shape, one color palette, one layout scenario, or one explanation. Each component should provide reusable interaction structure; lessons should provide specific scenarios through props, presets, labels, examples, and optional slots.

Component principles

- Teach one concept well.
- Keep UI compact, stable, keyboard-accessible, and readable inside lesson content.
- Use native controls where possible: sliders, segmented buttons, checkboxes, selects, text inputs.
- Keep scripts local, lightweight, and collision-resistant.
- Match existing visual language in src/components/content/.
- Use Tailwind classes already used in the repo.
- Support dark mode and prefers-reduced-motion.
- Prefer progressive enhancement; static explanation should remain useful if JavaScript fails.
- Show short generated CSS snippets when useful; do not turn every widget into a full editor.
- Separate component mechanics from lesson prose.
- Let lessons hide advanced controls for introductory use.
- Let lessons provide presets so learners can compare named examples quickly.

Reusable API model

- Define explicit TypeScript Props interfaces.
- Accept title, description, initial state, presets, preview content, and optional explanation text where useful.
- Prefer prop-driven `scenario`, `items`, or `presets` objects over many one-off props.
- Provide sensible defaults so each component works with minimal props.
- Allow labels, sample HTML/CSS text, generated explanation copy, and preview content to be customized.
- Use Astro slots when rich custom preview markup is needed.
- Document each component with a short MDX usage example.

Suggested helper shapes:

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

Exact types can differ. Core idea: lessons pass scenarios and presets; components render reusable controls and previews.

Example MDX usage style

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

Same component should be reusable later with different items and presets.

Suggested component set

Build the highest-value subset first. Prefer 4 to 6 excellent reusable components over many shallow ones.

CascadeInspector

Purpose: teach why one declaration wins.

Reusable for color, font-size, margin, display, custom properties, and any property where competing declarations make sense.

Configurable:

- target preview content
- property being compared
- competing rules
- layer order
- initial toggles for source order, specificity, inheritance, !important
- explanation overrides

Learner controls/display:

- selector type, specificity, source order, @layer order, inheritance, !important
- small HTML preview
- competing rules, winning rule, winning reason
- specificity score or clear specificity labels

Use for cascade, inheritance, specificity, layers, debugging overridden rules.

BoxModelExplorer

Purpose: teach sizing and spacing.

Reusable for buttons, cards, images, form fields, page sections, and any rectangular element.

Configurable:

- preview content or slot
- control ranges
- initial width/height/padding/border/margin
- allowed box-sizing modes
- presets such as button, card, image frame, full-width section

Learner controls/display:

- content size, padding, border, margin, box-sizing, overflow
- visual box model diagram
- rendered element
- computed outer size
- generated CSS

Use for box model, sizing, overflow, debugging layout.

SelectorPlayground

Purpose: teach selector matching and specificity.

Reusable with different fixed HTML trees: forms, articles, component states, data attributes, etc.

Configurable:

- structured HTML tree or safe markup representation
- selector presets
- allowCustomSelector boolean
- initial selector
- explanations keyed by selector or match result

Learner controls/display:

- choose or type constrained selectors
- highlight matching nodes
- show specificity
- show invalid selector or no-match feedback

Use for selectors, modern selectors, specificity.

LayoutLab

Purpose: teach flow, flexbox, grid, and when each is useful.

Reusable for nav bars, cards, galleries, forms, media objects, page shells, dashboards, and content clusters.

Configurable:

- items, item sizes, labels
- allowed modes and initial mode
- visible flex/grid controls
- presets
- preview dimensions
- generated snippet options

Learner controls/display:

- mode: normal flow, flex, grid
- flex: direction, wrap, justify-content, align-items, gap, item grow/shrink
- grid: columns, gap, auto-fit/minmax, placement example
- same items under each mode
- generated CSS and short change explanation

Use for normal flow, flexbox, grid, responsive layout.

ResponsiveLab

Purpose: compare viewport media queries with container queries.

Reusable for cards, nav, forms, sidebars, media objects, or grids.

Configurable:

- preview content or slot
- viewport and container ranges
- breakpoint presets
- media query examples
- container query examples
- matched-state labels

Learner controls/display:

- viewport width simulation
- component container width
- media/container breakpoints
- indicator showing which query matched
- generated @media and @container CSS

Use for responsive design, container queries, component-based layouts.

MotionLab

Purpose: teach transitions, transforms, keyframes, @starting-style, and reduced-motion alternatives.

Reusable for state changes, disclosure panels, toasts, cards, buttons, loaders, and page-entry examples.

Configurable:

- motion target content or slot
- motion presets
- allowed properties
- timing-function presets
- reduced-motion behavior
- warnings keyed by property or preset
- snippet mode: transition, keyframes, starting-style

Learner controls/display:

- duration, timing function, transform type, opacity, keyframe preset, reduced-motion toggle
- entry transition using @starting-style simulation
- animated preview
- generated CSS
- warning for distracting or layout-heavy motion

Use for transitions, transforms, @keyframes, @starting-style, prefers-reduced-motion.

ColorLab

Purpose: teach modern color, tokens, mixing, and contrast.

Reusable for text on backgrounds, buttons, cards, themes, borders, shadows, and color-mix examples.

Configurable:

- foreground/background initial values
- swatch labels
- palette presets
- color spaces to expose
- contrast sample text
- optional token names
- optional color-mix source colors

Learner controls/display:

- foreground/background colors
- color format: hsl, rgb, oklch
- color-mix percentage
- preview swatch/card
- contrast ratio and pass/fail for normal/large text
- generated CSS

Use for color, themes, accessibility, custom properties.

Implementation guidance

- Put components in src/components/content/.
- Use Astro components with small inline scripts, following ShellCommandSet and Quiz patterns.
- Use data attributes for roots and state.
- Initialize on astro:page-load and immediately.
- Use crypto.randomUUID() where IDs must be unique.
- Avoid network access and external runtime dependencies.
- Use CSS custom properties inside components only when they simplify dynamic previews.
- If accepting custom selectors, validate with querySelectorAll inside try/catch. Do not eval code.
- Keep generated CSS snippets short and accurate.
- Do not bake lesson prose into component internals; pass copy through props or write it in MDX.
- Avoid one-off logic unless it can be expressed as reusable preset data.
- If a new use case almost fits, improve the API instead of forking a near-duplicate component.

Design guidance

- Components may be single cards because they are framed interactive tools.
- Do not put cards inside cards.
- Use stable preview dimensions so controls do not shift layout.
- Keep controls dense but not cramped.
- Use clear text labels unless repo already has icon support.
- Make longest labels fit on mobile.
- Avoid one-note palettes; use repo tokens and existing state colors.

Testing and verification

- Run pnpm build.
- Manually inspect at least one MDX page or temporary test page that imports each component.
- Test each component with at least two different scenarios or preset sets to prove reusability.
- Verify keyboard operation, console cleanliness, responsive layout, dark mode if easy, and generated CSS matching visible behavior.

Deliverable shape

- Add components.
- Add short usage examples if needed.
- Do not add CSS lessons unless explicitly asked in that thread.
- If time is short, build first: CascadeInspector, BoxModelExplorer, LayoutLab, ResponsiveLab, MotionLab.

Additional requirements

- Components should teach real understanding, not decoration.
- Components should be reusable across CSS topics, lessons, examples, and projects.
- Prefer configurable structure over hard-coded examples.
- Do not create lesson-specific components unless a general component cannot teach that concept cleanly.
- Keep copy concise and learner-focused.
- Do not overuse animation inside learning UI itself.
- Add anything important that is missing.
