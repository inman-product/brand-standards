# Design System: Inman
**Brand:** Inman News

## 1. Visual Theme & Atmosphere

Inman embodies **authoritative, editorial clarity** — the design language of a trusted newsroom that has covered real estate for decades. The interface feels **sharp, confident, and information-dense** without becoming cluttered, balancing the urgency of breaking news with the gravitas of long-form analysis.

The overall mood is **professional yet modern**, grounded in a deep navy foundation that conveys trust and institutional weight, punctuated by a bright blue accent that signals interactivity and forward momentum. Red appears sparingly as an editorial exclamation point — alerts, breaking news, and primary calls to action.

**Key Characteristics:**
- Dark navy header/footer creating strong editorial framing
- Clean, dense content grids optimized for scanning headlines
- Bright blue interactive accents that pop against neutral backgrounds
- Bold, variable-weight sans-serif typography for maximum legibility at all sizes
- Serif editorial headlines for longform and feature content
- Efficient use of whitespace — breathing room without excess

## 2. Color Palette & Roles

### Primary Brand
- **Inman Blue** (#0a84ff) — Primary interactive color. Used for links, CTAs, sponsored labels, form submit buttons, and active navigation states. The brand's signature accent.
- **Inman Dark** (#161a48) — Brand anchor color. Deep navy used for the global header, footer, and dark UI surfaces. Conveys authority and permanence.

### Action & Alert
- **Inman Red** (#da3832) — Primary call-to-action and editorial emphasis. Used for subscription buttons, breaking news indicators, and urgent alerts. High contrast and high energy.

### Content & Surface
- **Near-Black** (#232323) — Primary body text and headline color. Softer than pure black for comfortable extended reading.
- **Medium Gray** (#444444) — Secondary text for bylines, metadata, timestamps, and supporting copy.
- **Light Gray** (#f3f3f3) — Section dividers, content area backgrounds, and subtle structural borders.
- **White** (#ffffff) — Primary content background. Clean canvas for article text and card surfaces.
- **Light Blue Wash** (#eff8fb) — Soft background tint for featured sections and sponsored content areas.

### Functional States
- **Submit Blue** (#007bb3) — Hover state for form buttons, darker shade of primary blue.
- **Border Gray** (#d3d3d3) — Form input borders and divider lines.
- **Error Red** (#fd5e4d) — Form validation errors, warning states.

## 3. Typography Rules

**Primary Font Family:** HEX Franklin Variable
**Character:** Modern, geometric variable sans-serif with wide weight range (400–1000). Clean, authoritative, and highly legible at every size — from 11px metadata to 42px headlines.

### Hierarchy & Weights
- **Display Headlines (H1):** Bold weight (700), 2.625rem (42px), line-height 1.1. Used for hero headlines and major page titles. Tight letter-spacing for impact.
- **Section Headers (H2):** Bold weight (700), 2.25rem (36px), line-height 1.15. Article titles and section openers.
- **Subsection Headers (H3):** SemiBold weight (600), 1.25rem (20px), line-height 1.3. Category labels, sidebar headers, card titles.
- **Body Text:** Regular weight (400), 1rem (16px), line-height 1.6. Article body, descriptions, and general content. Optimized for comfortable extended reading.
- **Small Text/Meta:** Regular weight (400), 0.8125rem (13px), line-height 1.5. Bylines, timestamps, category labels, and supporting metadata.
- **CTA Buttons:** SemiBold weight (600), 0.75rem (12px), uppercase with letter-spacing 0.04em. Compact, assertive, and clear.

**Secondary Font Family:** Harriet Display
**Character:** Elegant transitional serif with editorial authority. Reserved for feature article headlines, pull quotes, and special editorial treatments where the brand needs to feel more literary and refined.

- **Editorial Display:** Bold weight (700), 2.5rem+, line-height 1.05. Feature stories and magazine-style presentations.
- **Pull Quotes:** Regular Italic (400), 1.5rem, line-height 1.4. Block quotes and highlighted excerpts.

**Impact Font Family:** Tungsten
**Character:** Condensed industrial sans-serif. All-caps display use only for event branding, promotional banners, and large-format headlines where maximum visual punch is required.

- **Event Display:** Bold weight (700), 3rem+, uppercase, tight letter-spacing (-0.02em).

### Spacing Principles
- Paragraphs: 15px margin-bottom
- Section gaps: 17–30px between content blocks
- Generous line-height (1.6) on body text for effortless reading
- Tighter line-height (1.1–1.15) on headlines for compact visual weight

## 4. Component Stylings

### Buttons
- **Primary CTA:** Inman Red (#da3832) background, white text, 9px vertical / 12px horizontal padding, 9px border-radius. Hover transitions to white background with blue text over 0.3s ease.
- **Submit Button:** Inman Blue (#0a84ff) background, white text, 40px height, full width. Hover darkens to #007bb3.
- **Pill Button:** Fully rounded (border-radius 9999px), SemiBold weight, 12px font, uppercase, comfortable padding. Used for navigation actions and filters.
- **Hover/Focus:** 0.3s ease transition on background and color. Focus ring uses primary blue outline for keyboard accessibility.

### Cards & Content Blocks
- **Bordered Block:** 1px #ddd border, white background, 20px padding on headers, 10–15px internal post padding. Clean, structured containers for content groups.
- **Sponsored Card:** #f6faff light blue background, 11px uppercase label in Inman Blue (#0a84ff). Subtle differentiation without disruption.
- **News Post Card:** Headline (SemiBold), byline (gray meta text), optional 16:9 thumbnail. Hover underlines headline link.
- **Shadow Strategy:** Flat by default. Natural shadow (6px 6px 9px rgba(0,0,0,0.2)) available for elevated components like modals and dropdowns.

### Navigation
- **Global Header:** Fixed position, Inman Dark (#161a48) background, 66px height on desktop.
- **Menu Items:** Flex-centered, 30px right margin between items, white text on dark background.
- **Active Indicator:** 4px white circle below current section, opacity-controlled transition.
- **Submenu:** 400px width dropdown, white background, 10px internal padding, positioned absolute below parent.
- **Mobile:** Hamburger menu (29px × 29px, three 2px lines), full-width slide-out drawer.

### Inputs & Forms
- **Text Input:** 1px #d3d3d3 border, 28px height, 6px vertical / 19px horizontal padding. Clean and compact.
- **Label:** #797979 color, 14px font, 5px margin-bottom.
- **Focus State:** Border transitions to Inman Blue (#0a84ff).
- **Error State:** #fd5e4d background with white text and exclamation icon.

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 970px centered, 90% width with auto margins
- **Three-Column Grid:** 33.333% columns with 11.33px gutters for news grids
- **Hero Layout:** 65% primary column / 35% secondary column, 30px gap
- **Flex Default:** Center-aligned items, wrapping enabled, 0.5em gap

### Breakpoints
- **Desktop:** >1382px (full navigation width)
- **Tablet:** 1023px (mobile menu activates, flex-wrap on hero)
- **Small Tablet:** 920px (sponsored section reflows, 32% post widths)
- **Mobile:** 767px (images removed from dense lists, full-width stacking)
- **Small Mobile:** 650px (modals go full-width, reduced padding)

### Whitespace Strategy
- **Section Padding:** 43px (footer), 20px (content blocks), 15–30px (internal)
- **Column Gaps:** 2em between columns, 1.25em in post grids
- **Vertical Rhythm:** 15px paragraph spacing, 17px section spacing, 30px between flex rows

### Responsive Behavior
- Navigation collapses to hamburger at 1023px
- Three-column grids reduce to two at 920px, single column at 767px
- Hero layout stacks vertically below 1023px
- Images progressively hidden on smallest viewports for content density

## 6. Design System Notes for Generation

### Language to Use
- **Atmosphere:** "Authoritative editorial clarity with institutional weight"
- **Header:** "Deep navy institutional framing"
- **Buttons:** "Compact, assertive CTAs with subtle rounding"
- **Cards:** "Clean bordered content blocks with structured padding"
- **Spacing:** "Information-dense but breathable — efficient whitespace"

### Color References
Always use descriptive names with hex codes:
- Interactive: "Inman Blue (#0a84ff)"
- CTA: "Inman Red (#da3832)"
- Dark surface: "Inman Dark (#161a48)"
- Body text: "Near-Black (#232323)"
- Subtle background: "Light Blue Wash (#eff8fb)"

### Component Prompts
- "Create a news card with 1px gray border, white background, bold headline in Near-Black, gray byline meta text, and 16:9 thumbnail"
- "Design a primary CTA button in Inman Red (#da3832) with white text, 9px radius, compact padding, and hover transition to white/blue"
- "Build a fixed global header in Inman Dark (#161a48) with white navigation text, 66px height, and Inman Blue active indicators"
