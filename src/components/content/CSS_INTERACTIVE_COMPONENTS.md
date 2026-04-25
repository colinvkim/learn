# CSS Interactive Content Components

Reusable CSS labs live beside `Quiz`, `Note`, `Tip`, `Warning`, and `Steps`.

Import only what each lesson uses:

```mdx
import LayoutLab from "../../../components/content/LayoutLab.astro";
import BoxModelExplorer from "../../../components/content/BoxModelExplorer.astro";
```

## `CascadeInspector`

```mdx
<CascadeInspector
  title="Why this color wins"
  property="color"
  previewContent="Save changes"
  rules={[
    { label: "Element rule", selector: "button", value: "gray", specificity: [0, 0, 1], sourceOrder: 1 },
    { label: "Class rule", selector: ".primary", value: "blue", specificity: [0, 1, 0], sourceOrder: 2 },
  ]}
/>
```

## `BoxModelExplorer`

```mdx
<BoxModelExplorer
  title="Button spacing"
  previewContent="Continue"
  initial={{ width: 160, padding: 14, border: 2, margin: 12, boxSizing: "border-box" }}
  presets={[
    { label: "Compact", values: { padding: 8, border: 1, margin: 8 } },
    { label: "Roomy", values: { padding: 24, border: 2, margin: 20 } },
  ]}
/>
```

## `LayoutLab`

```mdx
<LayoutLab
  title="Compare layout strategies"
  items={[
    { content: "Overview" },
    { content: "Pricing" },
    { content: "Docs" },
  ]}
  presets={[
    { label: "Navigation row", values: { mode: "flex", justify: "space-between" } },
    { label: "Card grid", values: { mode: "grid", columns: "repeat(auto-fit, minmax(8rem, 1fr))" } },
  ]}
/>
```

## `ResponsiveLab`

```mdx
<ResponsiveLab
  title="Viewport or container?"
  previewContent="Profile card"
  presets={[
    { label: "Wide page, narrow card", values: { viewport: 960, container: 320 } },
    { label: "Narrow page, wide card", values: { viewport: 560, container: 520 } },
  ]}
/>
```

## `MotionLab`

```mdx
<MotionLab
  title="Transition choices"
  previewContent="Toast message"
  presets={[
    { label: "Subtle", values: { duration: 180, transform: "translateY(-0.75rem)", opacity: 0.2 } },
    { label: "Distracting", values: { duration: 1000, transform: "rotate(-4deg)", opacity: 0 } },
  ]}
/>
```

## `ColorLab`

```mdx
<ColorLab
  title="Contrast and tokens"
  sampleText="Checkout summary"
  presets={[
    { label: "Light", values: { foreground: "#111827", background: "#f8fafc", mixColor: "#2563eb", mixAmount: 8 } },
    { label: "Low contrast", values: { foreground: "#94a3b8", background: "#f8fafc", mixColor: "#2563eb", mixAmount: 0 } },
  ]}
/>
```
