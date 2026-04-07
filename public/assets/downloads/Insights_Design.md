# Design System: Insights By Blueprint
**Brand:** Insights By Blueprint

## 1. Visual Theme & Atmosphere

Insights By Blueprint embodies **refined intellectual elegance** — the design language of a premium data and analytics event where deep expertise meets editorial sophistication. The interface feels **calm, considered, and quietly authoritative**, prioritizing readability and thoughtful content hierarchy over visual spectacle.

The overall mood is **editorial and cerebral**, evoking the measured confidence of a high-end research publication. Elegant serif headlines create a literary quality that distinguishes Insights from its parent Blueprint brand's tech-forward energy, while clean Inter body text ensures the dense analytical content remains effortlessly scannable.

**Key Characteristics:**
- Light, airy backgrounds creating a serene reading environment
- Elegant serif headlines (PP Editorial New) for literary sophistication
- Clean Inter body text optimized for data-rich content consumption
- Electric Blue accents that are vivid but restrained — used purposefully
- Sharp-cornered buttons and UI elements conveying precision and directness
- Generous fluid spacing that scales gracefully across viewport sizes

## 2. Color Palette & Roles

### Primary Brand
- **Dark Blue** (#021b96) — Primary text and headline color. Deep, saturated blue that grounds the design with intellectual weight. Used for major headings, key navigation, and structural elements.
- **Bright Blue** (#0089ff) — Primary interactive accent. Used for links, secondary CTAs, and interactive highlights. Warm and approachable blue that invites engagement.
- **Electric Blue** (#1c00ff) — Brand signature and primary CTA color. Vivid, high-energy blue used for primary buttons, active states, and the brand's most prominent accent moments. Distinctive and memorable.

### Accent
- **Rose** (#ce415f) — Secondary creative accent. Used for featured content flags, special category markers, editorial highlights, and warm counterpoints to the blue palette. Adds human warmth to the analytical environment.

### Content & Surface
- **White** (#ffffff) — Primary background. Clean, open canvas that lets content breathe.
- **Light Gray** (#F6F6F6) — Secondary surface for content sections, card backgrounds, and subtle area definition.
- **Near-Black** (#000000) — Maximum-contrast text for body copy and UI elements requiring strong legibility.
- **Link Blue** (#4848d0) — Dedicated link color within body text. Distinct from the brand blues to ensure clear wayfinding in text-heavy layouts.

### Functional States
- **Success:** Secondary Green (#345C00) — Active states, confirmations, positive indicators
- **Error:** Rose (#ce415f) — Form validation, error messages, warning states
- **Hover:** Inverted contrast (dark background, light text) — clear interactive feedback
- **Focus:** Dashed underline — keyboard navigation accessibility indicator

## 3. Typography Rules

**Headline Font Family:** PP Editorial New
**Character:** Sophisticated transitional serif with graceful contrast between thick and thin strokes. Feels literary, refined, and quietly authoritative — the typographic voice of considered expertise. Ultralight weight creates delicate editorial elegance; Ultrabold provides dramatic emphasis when needed.

### Hierarchy & Weights
- **Display Headlines (H1):** Regular weight (400), fluid size clamp(2rem, 2rem + 2.9vw, 3.625rem), line-height 1.2. Used for page titles and hero statements. The regular weight lets the serif letterforms speak with quiet confidence.
- **Section Headers (H2):** Regular weight (400), fluid size clamp(1.75rem, 1.75rem + 1.5vw, 2.25rem), line-height 1.2. Article titles and major section dividers.
- **Editorial Accent:** Ultralight Italic weight (200), 2rem+, line-height 1.3. Pull quotes, featured excerpts, and decorative editorial moments where the brand needs maximum typographic elegance.
- **Impact Display:** Ultrabold weight (800), 2.5rem+, line-height 1.05. Sparingly used for maximum-emphasis headlines and event branding moments.

**Body Font Family:** Inter
**Character:** Modern, clean geometric sans-serif designed specifically for screen readability. Slightly tall x-height and open apertures make it exceptionally legible at small sizes — ideal for data-rich analytical content.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Body Text:** Regular weight (400), fluid size clamp(1rem, 1rem + 0.23vw, 1.125rem), line-height 1.3. Primary reading text for articles, reports, and descriptions.
- **Emphasized Body:** SemiBold weight (600), same size as body. Inline emphasis, key data points, and important callouts within body copy.
- **Small Text/Meta:** Regular weight (400), fluid size clamp(0.875rem, 0.875rem + 0.23vw, 1rem), line-height 1.5. Dates, bylines, categories, and supporting metadata.
- **Navigation:** Regular weight (400), small preset size, 30px flex gap between items. Right-aligned on desktop.

**Impact Font Family:** PP Monument Normal
**Character:** Bold geometric sans-serif with industrial presence. All-caps display use only for high-impact promotional moments, event signage treatments, and headlines that need to cut through noise.

- **Impact Display:** Black weight (900), 3rem+, uppercase, tight letter-spacing. Reserved for maximum visual punch.

### Spacing Principles
- Fluid spacing throughout using clamp() for smooth scaling
- Line-height 1.3 on body (tighter than typical — suits analytical content density)
- 1.5rem default block gap between content elements
- Generous section spacing scaling from 2.5rem (mobile) to 4.5rem (desktop)

## 4. Component Stylings

### Corner Radius
- **Buttons:** 0px — sharp, precise corners conveying directness and analytical clarity
- **Cards & Containers:** 0px — clean, architectural edges matching the editorial tone
- **Form Inputs:** 8px — subtle modern rounding for approachability on interactive elements
- **Search Input:** 8px — matches form input rounding

### Buttons
- **Primary CTA:** Electric Blue (#1c00ff) background, Near-Black text, sharp corners (0px border-radius), padding calc(0.667em + 2px) vertical / calc(1.333em + 2px) horizontal. Inter Medium (500). Precise and direct — no softening.
- **Hover State:** Background inverts to Near-Black, text transitions to White. Sharp, decisive state change.
- **Active State:** Secondary Green (#345C00) background, White text. Confirms engagement.
- **Focus State:** Dashed underline for keyboard navigation accessibility.
- **Secondary CTA:** Outlined variant — 2px Electric Blue border, transparent background. Hover fills solid.

### Cards & Content Containers
- **Standard Card:** White or Light Gray (#F6F6F6) background, no border by default, inherited border-radius (subtle or none). Clean, minimal containers.
- **Post Card:** Full-width image top, content stack below with PP Editorial New title and Inter body meta. Three-column grid on desktop.
- **Shadow Strategy:** Available but used sparingly. Natural shadow (6px 6px 9px rgba(0,0,0,0.2)) for elevated elements. Crisp shadow (6px 6px 0px rgb(0,0,0)) available for bold graphic treatments.
- **Internal Padding:** Generous spacing using fluid preset values (clamp-based).

### Navigation
- **Desktop:** Right-aligned flex layout, 30px gap between items. Inter Regular, small preset size.
- **Default State:** Near-Black text, no decoration.
- **Hover:** Underline appears, smooth transition.
- **Focus:** Dashed underline for accessibility.
- **Active:** Secondary Green (#345C00) text, no underline.
- **Mobile (<600px):** Fixed overlay menu, fade-in animation (0.1s ease-out), full-viewport drawer.

### Inputs & Forms
- **Border:** 1px #b7bbbe, 8px border-radius. Refined and modern.
- **Background:** White, clean and unadorned.
- **Focus State:** Border transitions to Electric Blue (#1c00ff).
- **Padding:** Comfortable touch targets matching button padding logic.
- **Search Input:** Prominent placement, full-width on mobile.

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 850px (constrained) for optimal reading line-length
- **Max Wide Width:** 1200px for full-bleed sections and image galleries
- **Grid System:** Responsive CSS Grid, 3 columns desktop, 1 column mobile
- **Content Flow:** Block-level natural flow with constrained centering

### Breakpoints
- **Desktop:** >1024px (full three-column grids, maximum spacing)
- **Tablet:** 601–1024px (flexible intermediate layout)
- **Mobile:** <600px (single column, overlay navigation, compressed spacing)

### Whitespace Strategy (Fluid Scaling)
- **Base Spacing:** clamp(1.5rem, 5vw, 2rem) — comfortable default gap
- **Section Spacing:** clamp(2.5rem, 8vw, 4.5rem) — generous breathing room between major sections
- **Large Section Spacing:** clamp(3.75rem, 10vw, 7rem) — dramatic separation for hero and feature areas
- **Maximum Spacing:** clamp(7rem, 14vw, 11rem) — cinematic open space for premium hero moments
- **Edge Padding:** Fluid horizontal padding using spacing-30 preset

### Responsive Behavior
- Navigation switches to overlay at 600px
- Three-column post grids collapse to single column on mobile
- Typography scales fluidly via clamp() — no jarring breakpoint jumps
- Spacing compresses proportionally on smaller viewports while maintaining rhythm

## 6. Design System Notes for Generation

### Language to Use
- **Atmosphere:** "Refined intellectual elegance with editorial sophistication"
- **Headlines:** "Quietly authoritative serif with graceful stroke contrast"
- **Buttons:** "Sharp-cornered, precise, and direct — no decorative rounding"
- **Cards:** "Clean minimal containers with generous fluid padding"
- **Spacing:** "Fluid and generous — scales gracefully, never cramped"

### Color References
Always use descriptive names with hex codes:
- Primary text: "Dark Blue (#021b96)"
- Interactive: "Bright Blue (#0089ff)"
- CTA accent: "Electric Blue (#1c00ff)"
- Warm accent: "Rose (#ce415f)"
- Links in text: "Link Blue (#4848d0)"
- Active state: "Secondary Green (#345C00)"
- Surface: "Light Gray (#F6F6F6)"

### Component Prompts
- "Create an article card with PP Editorial New Regular headline, Inter Regular meta text, full-width top image, and clean minimal container on Light Gray (#F6F6F6)"
- "Design a primary CTA button in Electric Blue (#1c00ff) with sharp corners (0px radius), Near-Black text, and hover inversion to black background with white text"
- "Build a hero section with generous clamp-based vertical padding, PP Editorial New Regular headline in Dark Blue (#021b96), and Inter body text below"
