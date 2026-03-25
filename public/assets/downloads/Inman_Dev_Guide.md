# Inman — Developer Style Guide

Quick-reference for applying the Inman brand to web pages.

---

## Colors

| Name        | Hex       | RGB              | Use                     |
|-------------|-----------|------------------|-------------------------|
| Bright Blue | `#0a84ff` | `10, 132, 255`   | Primary accent, links, CTAs |
| Dark Blue   | `#161a48` | `22, 26, 72`     | Headlines, body text    |
| Red         | `#ff0a0a` | `255, 10, 10`    | Alerts, emphasis        |

```css
:root {
  --inman-blue: #0a84ff;
  --inman-dark: #161a48;
  --inman-red: #ff0a0a;
}
```

---

## Typography

### Primary — HEX Franklin

Variable font. Use for headlines, UI, and body.

```css
font-family: 'HEX Franklin', sans-serif;
```

| Weight    | Value |
|-----------|-------|
| Regular   | 400   |
| Medium    | 500   |
| SemiBold  | 600   |
| Bold      | 700   |

### Secondary — Harriet Display

Serif. Use for editorial headlines and pull quotes.

```css
font-family: 'Harriet Display', serif;
```

| Weight  | Value |
|---------|-------|
| Regular | 400   |
| Medium  | 500   |
| Bold    | 700   |

### Impact — Tungsten

All-caps display. Use for large event-style headlines.

```css
font-family: 'Tungsten', sans-serif;
font-weight: 700;
text-transform: uppercase;
```

---

## Suggested Scale

```css
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.1; }
h2 { font-size: 2rem; font-weight: 700; line-height: 1.2; }
h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.3; }
body { font-size: 1rem; font-weight: 400; line-height: 1.6; }
small { font-size: 0.875rem; }
```

---

## Logo Usage

- Dark background: white logo with blue dot
- Light background: dark blue logo with blue dot
- Monochrome: all-black or all-white
- Minimum clear space: height of the "i" dot on all sides
- Never stretch, rotate, or recolor outside approved palette

---

## Links & Buttons

```css
a {
  color: var(--inman-blue);
  text-decoration: underline;
}

.btn-primary {
  background: var(--inman-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 600;
}
```
