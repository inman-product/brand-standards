# Design System: Blueprint
**Brand:** Inman Blueprint

## 1. Visual Theme & Atmosphere

Blueprint projects **bold technological ambition** — the visual identity of a premier real estate technology conference where innovation meets high-energy spectacle. The design feels **electric, immersive, and future-forward**, built on a deep midnight foundation that evokes the limitless depth of a night sky, punctuated by vivid accent colors that feel like neon pulses of energy.

The overall mood is **dramatic yet polished**, balancing the intensity of a tech keynote stage with the sophistication of a premium brand. The interface should feel like stepping into a cutting-edge event space — dark, confident, visually striking, and charged with possibility.

**Key Characteristics:**
- Deep midnight backgrounds creating immersive, stage-like presence
- Vivid multi-color accent palette (lemon, cherry, prince) for dynamic energy
- Bold, heavy-weight sans-serif headlines that command attention
- Clean Helvetica Neue body copy for effortless readability
- High contrast between dark foundations and bright interactive elements
- Geometric precision with generous spacing

## 2. Color Palette & Roles

### Primary Brand
- **Midnight** (#00015D) — Brand anchor and primary dark surface. Deep blue-black used for hero backgrounds, headers, and immersive sections. Creates dramatic depth and premium gravitas.
- **Cobalt** (#002ef6) — Primary interactive accent. Used for links, CTAs, active states, and key UI highlights. Electric and energetic against dark backgrounds.
- **Azure** (#54B9FF) — Secondary accent and highlight color. Used for supporting interactive elements, hover states, and lighter accent treatments. Softer energy that complements Cobalt.

### Accent Palette
- **Lemon** (#fee759) — High-visibility callout color. Used for badges, notification indicators, featured content flags, and promotional highlights. Warm counterpoint to the blue foundation.
- **Cherry** (#e63951) — Alert and emphasis color. Used for urgent CTAs, error states, breaking announcements, and high-priority content markers.
- **Prince** (#9B2FAE) — Secondary creative accent. Used for special categories, VIP designations, and decorative elements where the brand needs variety beyond blue.

### Neutrals
- **Onyx** (#0F0F0F) — Near-black for maximum-contrast text on light backgrounds, and for ultra-dark UI elements.
- **White** (#FFFFFF) — Primary text on dark backgrounds, card surfaces, and content areas on light layouts.

### Functional States
- **Success:** Lemon (#fee759) with Onyx text — positive confirmations
- **Error:** Cherry (#e63951) with White text — form errors, warnings
- **Info:** Azure (#54B9FF) — informational callouts, tips

## 3. Typography Rules

**Headline Font Family:** CA Saygon Text
**Character:** Contemporary geometric sans-serif with wide weight range and sharp, confident letterforms. Feels technical and authoritative — engineered for impact at large sizes while remaining legible at smaller scales.

### Hierarchy & Weights
- **Display Headlines (H1):** ExtraBold weight (800), 3rem (48px), line-height 1.05, letter-spacing -0.02em. Used for hero statements and major page titles. Maximum visual punch.
- **Section Headers (H2):** Bold weight (700), 2rem (32px), line-height 1.15. Session titles, speaker names, and major content dividers.
- **Subsection Headers (H3):** SemiBold weight (600), 1.5rem (24px), line-height 1.25. Card titles, agenda items, and category labels.
- **Supporting Headlines:** Medium weight (500), 1.125rem (18px), line-height 1.3. Tertiary headings and emphasized body text.
- **CTA Text:** Bold weight (700), 1rem (16px), letter-spacing 0.01em. Button labels and navigation actions.

**Body Font Family:** Helvetica Neue (system font stack)
**Character:** The quintessential clean sans-serif. Neutral, professional, and universally legible. Serves as the reliable workhorse beneath the expressive headline type.

```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

- **Body Text:** Regular weight (400), 1rem (16px), line-height 1.6. Descriptions, session details, and general content.
- **Small Text/Meta:** Regular weight (400), 0.875rem (14px), line-height 1.5. Dates, times, locations, and supporting metadata.
- **Bold Emphasis:** Bold weight (700) for inline emphasis within body copy.

### Spacing Principles
- Headlines use negative letter-spacing (-0.02em) for compact visual weight at large sizes
- Body text maintains generous line-height (1.6) for comfortable reading
- 2–3rem vertical spacing between related content blocks
- 4–6rem between major sections for dramatic pacing

## 4. Component Stylings

### Corner Radius
- **Buttons:** 9999px — fully rounded pill shape, bold and modern
- **Cards & Containers:** 12px — gently rounded, refined edges
- **Form Inputs:** 8px — clean, modern rounding
- **Image Containers:** 12px — matches card rounding, images clip to rounded edges

### Buttons
- **Primary CTA:** Cobalt (#002ef6) background, White text, 12px vertical / 24px horizontal padding, 9999px border-radius (fully rounded pill shape). CA Saygon Text SemiBold.
- **Secondary CTA:** 2px Cobalt border, transparent background, Cobalt text. Same pill shape. Hover fills with Cobalt background, text transitions to White.
- **Hover State:** Slight brightness increase, smooth 0.25s ease transition.
- **Focus State:** 3px Azure (#54B9FF) outer ring for keyboard accessibility.
- **On Dark Backgrounds:** White text/border variants of above patterns.

### Cards & Containers
- **Light Card:** White background, 1px #e8e8e8 border, 12px border-radius, 24–32px internal padding. Gentle, refined edges.
- **Dark Card:** Midnight (#00015D) background, no border, 12px border-radius, 24–32px internal padding. White text.
- **Shadow Strategy:** Flat by default. On hover, soft diffused shadow (0 4px 16px rgba(0,0,0,0.12)) for subtle lift.
- **Image Treatment:** Full-bleed at top of card, 16:9 or square aspect ratio. Edge-to-edge within the rounded container.

### Navigation
- **Style:** Clean horizontal bar, Midnight background on dark layouts or transparent on hero sections.
- **Menu Items:** Helvetica Neue Medium (500), 14px, White text, 24–32px spacing between items.
- **Active State:** Cobalt (#002ef6) underline or text color transition, 0.2s ease.
- **Mobile:** Hamburger icon, slide-out drawer with Midnight background.

### Inputs & Forms
- **Border:** 1px #e8e8e8, 8px border-radius. Clean and modern.
- **Background:** White, transitions to very light gray (#f9f9f9) on focus.
- **Focus State:** Border color shifts to Cobalt (#002ef6), subtle outer glow.
- **Padding:** 12px vertical, 16px horizontal for comfortable touch targets.
- **Label:** 12px uppercase, SemiBold, Onyx color, 8px margin-bottom.

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 1200px centered for comfortable reading on large displays
- **Grid System:** 12-column responsive grid, 24px gutters on mobile, 32px on desktop
- **Content Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Hero Sections:** Full-bleed Midnight backgrounds with centered content, maximum 800px text width

### Breakpoints
- **Large Desktop:** >1200px (full grid, maximum spacing)
- **Desktop:** 1024–1200px (standard layout)
- **Tablet:** 768–1024px (2-column grid, reduced spacing)
- **Mobile:** <768px (single column, stacked layout, hamburger nav)

### Whitespace Strategy
- **Base Unit:** 8px for micro-spacing, 16px for component gaps
- **Section Margins:** 4–6rem (64–96px) between major sections — dramatic and confident
- **Card Grid Gap:** 24px mobile, 32px desktop
- **Hero Padding:** 6–10rem (96–160px) top/bottom for cinematic presence
- **Edge Padding:** 24px mobile, 48px desktop

### Responsive Behavior
- Navigation collapses to hamburger at 768px
- Hero text scales down using fluid typography (clamp)
- Card grids reduce columns progressively
- Accent colors maintain full vibrancy at all breakpoints — never muted

## 6. Design System Notes for Generation

### Language to Use
- **Atmosphere:** "Electric technological ambition on a deep midnight stage"
- **Buttons:** "Fully rounded pill CTAs in vivid Cobalt"
- **Cards:** "Gently rounded containers with generous internal padding"
- **Shadows:** "Flat by default, soft diffused lift on hover"
- **Spacing:** "Dramatic section pacing with confident whitespace"

### Color References
Always use descriptive names with hex codes:
- Primary dark: "Midnight (#00015D)"
- Primary accent: "Cobalt (#002ef6)"
- Light accent: "Azure (#54B9FF)"
- Highlight: "Lemon (#fee759)"
- Alert: "Cherry (#e63951)"
- Creative: "Prince (#9B2FAE)"
- Text dark: "Onyx (#0F0F0F)"

### Component Prompts
- "Create a speaker card with 12px rounded corners, full-bleed square headshot, speaker name in CA Saygon Text Bold, and session title in Helvetica Neue Regular"
- "Design a primary CTA pill button in Cobalt (#002ef6) with white text, fully rounded ends, and hover brightness transition"
- "Build a hero section with full-bleed Midnight (#00015D) background, centered CA Saygon Text ExtraBold headline in White, and Azure (#54B9FF) subtitle accent"
