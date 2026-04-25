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
  previewContent="Continue"
  initial={{ width: 160, padding: 14, border: 2, margin: 12, boxSizing: "border-box" }}
/>
```

## `LayoutLab`

```mdx
<LayoutLab
  items={[
    { content: "Overview" },
    { content: "Pricing" },
    { content: "Docs" },
  ]}
/>
```

## `ResponsiveLab`

```mdx
<ResponsiveLab
  previewContent="Profile card"
/>
```

## `MotionLab`

```mdx
<MotionLab
  previewContent="Toast message"
/>
```

## `ColorLab`

```mdx
<ColorLab
  sampleText="Checkout summary"
/>
```
