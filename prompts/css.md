- created by codex on april 25
- intended to generate the CSS course from scratch

[$caveman](/Users/colin/.agents/skills/caveman/SKILL.md) You are building a thorough CSS course for the website. Familiarize yourself with CONTENT-PREFERENCES.md and AGENTS.md. Go slowly and carefully.

This course exists alongside the HTML and JavaScript courses. Keep boundaries clear:

- HTML owns document structure, semantics, forms, and accessibility structure.
- JavaScript owns programming, DOM manipulation, events, state, and app logic.
- CSS owns selectors, cascade, layout, visual systems, responsive behavior, states, and motion.

Teach CSS as a system for designing resilient interfaces, not as a property encyclopedia. CSS has become powerful recently; include modern standards where useful: cascade layers, nesting, custom properties, container queries, modern color, logical properties, :has(), @scope, @property, @starting-style, discrete transitions, keyframes, scroll-driven animations, view transitions, and browser-support strategy.

Prefer stable, broadly usable features. Clearly label newer, experimental, or unevenly supported features, and teach how to check support with MDN, Baseline, caniuse, and @supports.

CSS Course Goal

By the end, a learner should be able to:

- explain how CSS matches elements and resolves conflicts
- use cascade, inheritance, specificity, source order, and layers intentionally
- write maintainable styles with custom properties and modern organization patterns
- style typography, spacing, color, backgrounds, borders, shadows, and UI states cleanly
- use the box model, sizing, overflow, and intrinsic layout confidently
- build real layouts with flow, flexbox, grid, positioning, and alignment
- make interfaces responsive with media queries, container queries, fluid values, and logical properties
- create accessible hover, focus, active, disabled, contrast, and reduced-motion states
- use modern selectors including pseudo-classes, pseudo-elements, :is(), :where(), :not(), and :has()
- use transitions, transforms, @keyframes, @starting-style, and modern motion features responsibly
- know when CSS is enough and when JavaScript should handle behavior
- debug CSS with browser devtools
- build small real page and component styles that integrate cleanly with HTML and JavaScript

Course principles

- Teach mental models before syntax.
- Teach the cascade early; revisit it often.
- Teach normal flow before explicit layout systems.
- Teach accessibility and browser behavior throughout.
- Teach modern CSS, but separate daily-use features from emerging ones.
- Use realistic examples: articles, nav, cards, forms, dashboards, dialogs, themes, responsive components.
- Avoid old layout practices such as floats for page layout and table layouts.
- Avoid framework-specific CSS except brief bridges to Tailwind, CSS modules, component CSS, etc.
- Keep examples small enough to read and realistic enough to transfer.

What they need to know

CSS fundamentals

- CSS as presentation and layout language
- Relationship between HTML, CSS, browser rendering, and JavaScript
- Stylesheets, rules, selectors, declarations, properties, values
- User agent styles, computed styles, and used values at a practical level

Cascade and selectors

- Cascade as conflict resolution
- Origins at a useful level: browser, user, author
- !important, with restraint
- Specificity, source order, inheritance
- initial, inherit, unset, revert, revert-layer
- @layer and how layers change CSS architecture
- Type, class, id, attribute selectors
- Descendant, child, and sibling combinators
- Pseudo-classes and pseudo-elements
- :is(), :where(), :not(), :has()
- Selector maintainability and avoiding over-specific CSS

Values, units, and sizing

- px, rem, em, %, vw, vh, svh, lvh, dvh
- ch, lh, cap where useful
- min(), max(), clamp(), calc()
- CSS-wide keywords
- Box model: content, padding, border, margin
- box-sizing, width/height, min/max sizes
- Overflow, margin collapse, intrinsic sizing
- aspect-ratio, object-fit, object-position

Typography and visual styling

- Font families, font stacks, font-size, line-height, font-weight
- Web fonts at a practical level
- Text alignment, wrapping, text-wrap: balance/pretty where appropriate
- Readable measure and vertical rhythm
- Color syntax: hex, rgb(), hsl(), modern space-separated syntax
- currentColor, alpha colors, gradients, background layers
- Borders, radius, shadows
- oklch(), oklab(), lab(), lch(), color-mix()
- Contrast and accessible color choices
- Light/dark themes with custom properties and prefers-color-scheme

Custom properties and design systems

- Defining and using CSS variables
- Inheritance and fallback values
- Design tokens and component-local variables
- Theming
- @property for typed custom properties
- When variables help and when they make CSS harder to read

Layout

- Normal flow
- block, inline, inline-block
- display: block, inline, flex, grid, contents, none
- Formatting contexts at a practical level
- visibility vs display vs opacity
- content-visibility and containment at a practical level
- Flexbox: axes, direction, gap, wrap, justify-content, align-items, flex-basis/grow/shrink
- Grid: rows, columns, gaps, fr, minmax(), repeat(), auto-fit/auto-fill, placement, named areas
- Flex vs grid decision-making
- Positioning: static, relative, absolute, fixed, sticky
- Containing blocks, z-index, stacking contexts
- Overlay/popover basics where CSS is involved
- Anchor positioning as emerging CSS, if appropriate and clearly labeled

Responsive design

- Content-first responsive thinking
- Media queries and range syntax
- Container queries with @container
- Container units where useful
- Fluid type and spacing with clamp()
- Logical properties
- Responsive images as a light bridge to HTML
- Mobile-first as a useful workflow, not a law

Modern CSS organization

- File organization for small projects
- Component-oriented CSS without requiring a framework
- Utility classes vs component classes conceptually
- Naming classes clearly
- Avoiding global leaks
- CSS nesting
- @scope where appropriate
- @supports and progressive enhancement
- Reset and normalize concepts
- How Tailwind-style utility CSS relates to plain CSS, briefly

States and accessibility

- hover, focus, focus-visible, active, disabled
- Styling forms without hiding semantics
- required, invalid, checked, placeholder-shown
- Keyboard-visible focus styles
- prefers-reduced-motion, prefers-color-scheme
- forced-colors/high-contrast considerations
- Pointer and hover media features
- Color contrast and not relying on color alone

Motion

- Transitions: property, duration, timing-function, delay
- Transforms: translate, scale, rotate, individual transform properties
- opacity and transform for performant motion
- transition-behavior: allow-discrete
- Discrete transitions for display/content-visibility/overlay where useful
- @starting-style for entry transitions
- @keyframes and animation properties
- Purposeful motion: loading states, attention cues, skeletons, state changes
- prefers-reduced-motion alternatives
- Scroll snap
- Scroll-driven animations with scroll/view timelines
- View transitions and when JavaScript is needed to trigger behavior
- Progressive enhancement for newer motion features

Debugging

- Browser devtools: rules, computed styles, box model, flex/grid tools
- Finding overridden declarations
- Debugging specificity, layers, inheritance, overflow, and stacking contexts
- Common mistakes: typoed values, unmatched selectors, wrong cascade order, fixed-size overflow, z-index escalation, layout-heavy animation

Suggested course sequence

Beginner phase

- What CSS is and how browsers apply it
- Rules, selectors, declarations, and values
- Cascade, inheritance, and specificity
- Box model and sizing
- Text, color, and visual styling
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
- Modern selectors: :is(), :where(), :not(), :has()
- CSS nesting
- Container queries
- @supports and progressive enhancement
- Modern color with oklch() and color-mix()
- @property and typed custom properties
- @scope where useful

Motion and applied phase

- Transitions and transforms
- @starting-style and discrete transitions
- @keyframes animation
- Scroll snap, scroll-driven animation, and view transitions
- Debugging CSS in devtools
- Building a responsive page
- Building a small design system
- Final project: style a semantic multi-page HTML site with responsive layout, theme tokens, states, and motion

Possible lesson list

- What CSS is and what it controls
- How CSS rules match HTML
- Cascade, inheritance, and specificity
- Classes and maintainable selectors
- Values, units, and CSS functions
- Box model
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

Use prompts/css-components.md before or during course writing if interactive MDX components would help. Good candidates:

- CascadeInspector: specificity, source order, inheritance, @layer, !important
- BoxModelExplorer: content, padding, border, margin, box-sizing, overflow
- SelectorPlayground: selector matching and specificity against small HTML trees
- LayoutLab: flex/grid/flow controls across many layout scenarios
- ResponsiveLab: media queries vs container queries
- ColorLab: modern color, color-mix(), theme tokens, contrast
- MotionLab: transitions, transforms, keyframes, @starting-style, reduced motion

Additional requirements

- Teach concepts before syntax.
- Use semantic HTML examples from the HTML course.
- Do not assume prior CSS knowledge.
- Do not make the course a property catalog.
- Do not require Sass or CSS frameworks.
- Include browser-support guidance for newer CSS.
- Use @supports for progressive enhancement when useful.
- Reinforce accessibility in visual styling, layout, and motion.
- Keep snippets complete enough to run.
- Use Quick Check quizzes for key distinctions: specificity vs source order, flex vs grid, media vs container queries, transition vs animation, display none vs visibility vs opacity.
- Use Note, Tip, Warning, Steps, and CSS-specific interactive components where they help.
- Add anything important that is missing.
