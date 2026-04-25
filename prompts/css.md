- created by codex on april 25
- intended to generate the CSS course from scratch

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are building a thorough CSS course for the website. Familiarize yourself with CONTENT-PREFERENCES.md and AGENTS.md. Go slowly and carefully.

This course should teach CSS as the presentation, layout, interaction, and visual state layer of the web. It should exist alongside the HTML and JavaScript courses. Do not duplicate their responsibilities:

- HTML course owns document structure, semantic elements, forms, and accessibility structure.
- JavaScript course owns programming, DOM manipulation, state, events, and application logic.
- CSS course owns selectors, cascade, layout, responsive design, visual systems, motion, and modern CSS features.

CSS has grown into a powerful language. Teach it as a system for designing resilient interfaces, not as a bag of visual tricks. Include modern CSS standards and current platform features where they are useful: cascade layers, nesting, custom properties, container queries, modern color, logical properties, :has(), @scope, @property, @starting-style, transitions of discrete properties, keyframes, scroll-driven animation, view transitions, and related browser-support considerations.

Prefer stable, broadly usable features. If a feature is newer, experimental, or unevenly supported, label it clearly and teach how to check support with MDN, Baseline, caniuse, or @supports.

CSS Course Goal

By the end, a learner should be able to:

- explain how CSS selects elements and resolves conflicts
- use the cascade, inheritance, specificity, layers, and source order intentionally
- write maintainable styles with custom properties and modern organization patterns
- style text, spacing, borders, backgrounds, color, and states cleanly
- use the box model confidently
- build real layouts with flow, flexbox, grid, positioning, and alignment
- make interfaces responsive with media queries, container queries, fluid sizing, and logical properties
- create accessible states for hover, focus, active, disabled, reduced motion, and color contrast
- use modern selectors including pseudo-classes, pseudo-elements, :is(), :where(), :not(), and :has()
- use transitions, transforms, keyframes, @starting-style, and modern animation primitives responsibly
- understand when CSS alone is enough and when JavaScript should handle behavior
- debug CSS with browser devtools
- build small real-world page and component styles that integrate cleanly with HTML and JavaScript

Core principles for this course

- Teach mental model before syntax.
- Teach the cascade early and revisit it often.
- Teach layout as normal flow first, then explicit layout tools.
- Teach accessibility and browser behavior throughout, not as afterthoughts.
- Teach modern CSS, but distinguish stable daily-use features from emerging features.
- Use realistic UI examples: article pages, navigation, cards, forms, dashboards, dialogs, themes, responsive components.
- Avoid long property catalogs. Teach properties in context.
- Avoid old layout practices such as floats for page layout and table layouts.
- Avoid framework-specific CSS unless briefly explaining how the underlying CSS concept survives in Tailwind, component CSS, CSS modules, etc.
- Keep examples small enough to read, but realistic enough to transfer.

What they need to know

What CSS is

- CSS as presentation and layout language
- Relationship between HTML, CSS, browser rendering, and JavaScript
- Stylesheets, rules, selectors, declarations, properties, values
- User agent styles and why pages have default styles
- Computed styles and used values at a practical level

The cascade mental model

- Cascade as conflict resolution
- Origins at a simple level: browser, user, author
- Importance and !important, with restraint
- Specificity
- Source order
- Inheritance
- Initial, inherit, unset, revert, revert-layer
- Cascade layers with @layer
- How @layer changes architectural CSS
- When to use layers and when not to

Selectors

- Type, class, id, attribute selectors
- Descendant, child, sibling combinators
- Pseudo-classes for state and structure
- Pseudo-elements
- :is(), :where(), :not(), :has()
- Selector specificity and maintainability
- Avoid over-specific selectors
- Use selectors to express intent, not DOM accidents

Values and units

- Absolute vs relative units
- px, rem, em, %, vw, vh, svh, lvh, dvh
- ch, lh, cap where useful
- min(), max(), clamp()
- calc()
- CSS-wide keywords
- Functions as values

Box model and sizing

- Content, padding, border, margin
- box-sizing
- Width, height, min/max sizes
- Overflow
- Margin collapse
- Intrinsic sizing
- aspect-ratio
- object-fit and object-position

Text and typography

- Font families and font stacks
- font-size, line-height, font-weight
- Web fonts at a practical level
- Text alignment and wrapping
- text-wrap: balance and pretty if appropriate
- Lists and marker styling
- Readable measure and vertical rhythm
- Avoid styling text in ways that hurt accessibility

Color, backgrounds, and visual styling

- Color syntax: hex, rgb(), hsl(), modern space-separated syntax
- Alpha colors
- currentColor
- CSS custom properties for design tokens
- oklch(), oklab(), lab(), lch() at a useful level
- color-mix()
- Gradients
- Background layers
- Borders, radius, shadows
- Contrast and accessible color choices
- Light and dark themes with prefers-color-scheme and custom properties

Custom properties and design tokens

- Defining and using CSS variables
- Inheritance and fallback values
- Theming with variables
- Component-local variables
- @property for typed custom properties
- When variables improve maintainability
- When variables make CSS harder to read

Normal flow and display

- Block, inline, inline-block
- Flow layout
- display values: block, inline, flex, grid, contents, none
- Formatting context basics
- Visibility vs display vs opacity
- Content visibility and containment at a practical level

Flexbox

- Main axis and cross axis
- flex-direction, gap, wrap
- justify-content, align-items, align-content
- flex-basis, grow, shrink
- Common patterns: nav bars, clusters, media objects, equal-height cards
- Flexbox limits and when grid is better

Grid

- Grid container and grid items
- Columns, rows, gaps
- fr units
- minmax(), repeat(), auto-fit, auto-fill
- Placement by line and named areas
- Alignment in grid
- Common patterns: page shells, galleries, dashboards, forms
- Grid vs flexbox decision-making

Positioning and layering

- static, relative, absolute, fixed, sticky
- Containing blocks
- z-index and stacking contexts
- Overlay and popover basics where CSS is involved
- Anchor positioning as an emerging feature, if appropriate and clearly labeled
- Avoid z-index escalation

Responsive design

- Content-first responsive thinking
- Media queries
- Range syntax for media queries
- Container queries with @container
- Container units where useful
- Fluid type and spacing with clamp()
- Logical properties for writing modes and better responsive behavior
- Responsive images as a bridge to HTML, without re-teaching image markup
- Mobile-first is a useful workflow, not a law

Modern CSS organization

- File organization for small projects
- Component-oriented CSS without depending on a framework
- Utility classes vs component classes at a conceptual level
- Naming classes clearly
- Avoiding global leaks
- CSS nesting
- @scope and scoped styling where appropriate
- @supports for progressive enhancement
- Reset and normalize concepts
- How Tailwind-style utility CSS relates to plain CSS, briefly

States and accessibility

- hover, focus, focus-visible, active, disabled
- Styling forms without hiding semantics
- Required, invalid, checked, placeholder-shown
- Keyboard-visible focus styles
- prefers-reduced-motion
- prefers-color-scheme
- forced-colors and high-contrast considerations at a practical level
- Pointer and hover media features
- Color contrast
- Do not rely on color alone

Transitions and transforms

- transition-property, duration, timing-function, delay
- Transitions on useful properties
- transform functions: translate, scale, rotate
- Individual transform properties where useful
- opacity and transform for performant motion
- transition-behavior: allow-discrete
- Discrete property transitions for display/content-visibility/overlay where useful
- @starting-style for entry transitions
- Why some properties animate poorly

Keyframe animation

- @keyframes
- animation-name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state
- Designing small purposeful motion
- Loading indicators, attention cues, skeletons, and state changes
- Avoiding distracting infinite animation
- prefers-reduced-motion alternatives

Advanced and emerging motion

- Scroll snap
- Scroll-driven animations with scroll timelines and view timelines
- View transitions and how CSS styles transition states
- When JavaScript is needed to trigger behavior
- Progressive enhancement for newer motion features

Debugging CSS

- Browser devtools for inspecting rules
- Computed styles
- Box model panel
- Layout tools for flex and grid
- Finding overridden declarations
- Debugging specificity and layers
- Common mistakes:
- typoed property or value
- selector does not match
- wrong cascade order
- unexpected inheritance
- overflow caused by fixed sizes
- z-index without stacking-context understanding
- animating layout-heavy properties

Suggested CSS course sequence

Beginner phase

- What CSS is and how browsers apply it
- Rules, selectors, declarations, and values
- The cascade, inheritance, and specificity
- The box model and sizing
- Text, color, and basic visual styling
- Classes, naming, and styling real HTML

Intermediate phase

- Normal flow and display
- Flexbox
- Grid
- Positioning, z-index, and stacking contexts
- Responsive design with media queries, fluid values, and logical properties
- Custom properties and design tokens
- Forms, states, focus, and accessibility styling

Modern CSS phase

- Cascade layers and CSS architecture
- Modern selectors including :is(), :where(), :not(), and :has()
- CSS nesting
- Container queries
- @supports and progressive enhancement
- Modern color with oklch() and color-mix()
- @property and typed custom properties
- @scope if appropriate

Motion and applied phase

- Transitions and transforms
- @starting-style and discrete transitions
- @keyframes animation
- Scroll snap and scroll-driven animation
- View transitions
- Debugging CSS in devtools
- Building a small responsive page
- Building a reusable component set
- Final project: style a semantic multi-page HTML site with responsive layout, theme tokens, states, and motion

Possible lesson list

- What CSS is and what it controls
- How CSS rules match HTML
- The cascade, inheritance, and specificity
- Classes and maintainable selectors
- Values, units, and CSS functions
- The box model
- Styling text and readable content
- Color, backgrounds, borders, and shadows
- Custom properties and design tokens
- Normal flow and display
- Flexbox layout
- Grid layout
- Positioning and stacking contexts
- Responsive design with media queries
- Container queries and component responsiveness
- Logical properties and modern sizing
- Styling forms and interactive states
- Accessible focus, contrast, and motion preferences
- Cascade layers and CSS architecture
- Modern selectors with :is(), :where(), :not(), and :has()
- CSS nesting and scoped styling
- Modern color with oklch() and color-mix()
- Transitions and transforms
- Entry and exit motion with @starting-style
- Keyframe animation
- Scroll snap, scroll-driven animation, and view transitions
- Debugging CSS with browser devtools
- CSS for HTML and JavaScript integration
- Building a responsive page
- Building a small design system

Interactive component opportunities

If the repo has or can add interactive content components, this course would benefit from them. Use prompts/css-components.md to create them before or during course writing. Good candidates:

- CascadeInspector: show how specificity, source order, inheritance, @layer, and !important affect winning declarations.
- BoxModelExplorer: adjust content, padding, border, margin, box-sizing, overflow, and see final size.
- SelectorPlayground: type/select selectors against a small HTML tree and see matches plus specificity.
- FlexGridLab: switch between flexbox and grid controls to see layout differences.
- ResponsiveLab: compare viewport media queries with container queries.
- ColorLab: mix colors, compare hsl/oklch, and check contrast.
- MotionLab: tune transition/keyframe timing, transforms, @starting-style, and reduced-motion alternatives.

Additional requirements

- Teach concepts before CSS syntax.
- Use examples based on semantic HTML from the HTML course.
- Do not assume prior CSS knowledge.
- Do not make the course a property encyclopedia.
- Do not teach Sass as required; modern CSS now covers many old preprocessor needs.
- Do not teach CSS frameworks as the main path.
- Include browser support guidance for newer CSS features.
- Use @supports examples for progressive enhancement when useful.
- Reinforce accessibility in visual styling, layout, and motion.
- Keep snippets complete enough that learners can run them.
- Use Quick Check quizzes for key distinctions: specificity vs source order, flex vs grid, media vs container queries, transition vs animation, display none vs visibility vs opacity, etc.
- Use Note, Tip, Warning, Steps, and any CSS-specific interactive components where they help understanding.
- Add anything important that is missing.
