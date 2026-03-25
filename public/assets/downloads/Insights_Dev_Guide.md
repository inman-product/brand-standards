# Insights By Blueprint — Developer Style Guide

Quick-reference for applying the Insights By Blueprint brand to web pages.

---

## Colors

| Name          | Hex       | RGB              | Use                         |
|---------------|-----------|------------------|-----------------------------|
| Dark Blue     | `#021b96` | `2, 27, 150`     | Headlines, deep backgrounds |
| Bright Blue   | `#0089ff` | `0, 137, 255`    | Primary accent, links       |
| Electric Blue | `#1c00ff` | `28, 0, 255`     | Brand accent, CTAs          |
| Rose          | `#ce415f` | `206, 65, 95`    | Secondary accent, emphasis  |

```css
:root {
  --insights-dark: #021b96;
  --insights-bright: #0089ff;
  --insights-electric: #1c00ff;
  --insights-rose: #ce415f;
}
```

---

## Typography

### Headline — PP Editorial New

Serif display font for headlines and editorial treatments.

```css
font-family: 'PP Editorial New', serif;
```

| Weight     | Value |
|------------|-------|
| Ultralight | 200   |
| Regular    | 400   |
| Ultrabold  | 800   |

All weights available in italic.

### Body — Inter

Clean sans-serif for body copy and UI.

```css
font-family: 'Inter', sans-serif;
```

Load from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Weight   | Value |
|----------|-------|
| Regular  | 400   |
| Medium   | 500   |
| SemiBold | 600   |

### Impact — PP Monument Normal

All-caps display for high-impact headlines.

```css
font-family: 'PP Monument Normal', sans-serif;
font-weight: 900;
text-transform: uppercase;
```

---

## Suggested Scale

```css
h1 { font-family: 'PP Editorial New', serif; font-size: 3rem; font-weight: 400; line-height: 1.1; }
h2 { font-family: 'PP Editorial New', serif; font-size: 2.25rem; font-weight: 400; line-height: 1.15; }
h3 { font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 600; line-height: 1.3; }
body { font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.6; }
small { font-size: 0.875rem; }
```

---

## Logo Usage

- Dark background (`#1c00ff`): reversed/white logo
- Light background: standard dark logo
- Minimum clear space: height of the icon mark on all sides
- Never stretch, rotate, or recolor outside approved palette

---

## Links & Buttons

```css
a {
  color: var(--insights-electric);
  text-decoration: underline;
}

.btn-primary {
  background: var(--insights-electric);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}
```
