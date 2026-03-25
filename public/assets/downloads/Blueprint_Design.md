# Blueprint — Developer Style Guide

Quick-reference for applying the Blueprint brand to web pages.

---

## Colors

### Primary

| Name     | Hex       | RGB              | Use                        |
|----------|-----------|------------------|----------------------------|
| Midnight | `#00015D` | `0, 1, 93`       | Deep backgrounds, anchors  |
| Cobalt   | `#002ef6` | `0, 46, 246`     | Primary accent, CTAs       |
| Azure    | `#54B9FF` | `84, 185, 255`   | Secondary accent, highlights |

### Accent

| Name   | Hex       | RGB              | Use                    |
|--------|-----------|------------------|------------------------|
| Lemon  | `#fee759` | `254, 231, 89`   | Callouts, badges       |
| Cherry | `#e63951` | `230, 57, 81`    | Alerts, emphasis       |
| Prince | `#9B2FAE` | `155, 47, 174`   | Secondary accent       |

### Neutrals

| Name  | Hex       | RGB            |
|-------|-----------|----------------|
| Onyx  | `#0F0F0F` | `15, 15, 15`   |
| White | `#FFFFFF` | `255, 255, 255`|

```css
:root {
  --bp-midnight: #00015D;
  --bp-cobalt: #002ef6;
  --bp-azure: #54B9FF;
  --bp-lemon: #fee759;
  --bp-cherry: #e63951;
  --bp-prince: #9B2FAE;
  --bp-onyx: #0F0F0F;
  --bp-white: #FFFFFF;
}
```

---

## Typography

### Headline — CA Saygon Text

Primary display and headline font.

```css
font-family: 'CA Saygon Text', sans-serif;
```

| Weight    | Value |
|-----------|-------|
| Thin      | 100   |
| Light     | 300   |
| Regular   | 400   |
| Medium    | 500   |
| SemiBold  | 600   |
| Bold      | 700   |
| ExtraBold | 800   |

### Body — Helvetica Neue

System font for body copy and UI text.

```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

| Weight  | Value |
|---------|-------|
| Light   | 300   |
| Regular | 400   |
| Medium  | 500   |
| Bold    | 700   |

---

## Suggested Scale

```css
h1 { font-family: 'CA Saygon Text', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1.05; }
h2 { font-family: 'CA Saygon Text', sans-serif; font-size: 2rem; font-weight: 700; line-height: 1.15; }
h3 { font-family: 'CA Saygon Text', sans-serif; font-size: 1.5rem; font-weight: 600; line-height: 1.25; }
body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.6; }
small { font-size: 0.875rem; }
```

---

## Logo Usage

- Dark background (`#00015D`): reversed/white logo
- Light background: standard dark logo
- Minimum clear space: height of the "B" icon on all sides
- Never stretch, rotate, or recolor outside approved palette

---

## Links & Buttons

```css
a {
  color: var(--bp-cobalt);
  text-decoration: underline;
}

.btn-primary {
  background: var(--bp-cobalt);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-family: 'CA Saygon Text', sans-serif;
  font-weight: 600;
}
```
