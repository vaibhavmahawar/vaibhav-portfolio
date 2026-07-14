---
name: Zenith Command
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#b8c3ff'
  on-secondary: '#002388'
  secondary-container: '#0043eb'
  on-secondary-container: '#c6ceff'
  tertiary: '#ebffea'
  on-tertiary: '#003919'
  tertiary-container: '#7ef5a0'
  on-tertiary-container: '#007037'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c3ff'
  on-secondary-fixed: '#001356'
  on-secondary-fixed-variant: '#0035be'
  tertiary-fixed: '#83fba5'
  tertiary-fixed-dim: '#66dd8b'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
This design system is engineered for high-stakes decision-making and complex technical orchestration. It balances the raw power of defense technology with the refined elegance of luxury aerospace. The aesthetic is "Mission Control": high-density information environments that remain calm, legible, and visually prestigious.

The style is **Technological Minimalism** infused with **Glassmorphism**. It utilizes a "Dark Mode First" philosophy, where depth is communicated through layered translucency and subtle glowing strokes rather than heavy shadows. The emotional response is one of precision, absolute reliability, and forward-leaning innovation. It avoids aggressive military tropes in favor of clean, scientific instrumentation.

## Colors
The palette is rooted in deep, matte foundations to reduce eye strain during long technical sessions. 

- **Primary (Cyan):** Used for active states, data highlights, and "Live" indicators.
- **Secondary (Electric Blue):** Used for primary actions and navigational anchors.
- **Tertiary (Emerald):** Reserved for "Success" states, system health, and secure connections.
- **Surface Tones:** A mix of Matte Black and Deep Navy creates a sense of infinite depth.
- **Accent Slate:** Used for non-interactive metadata and secondary borders to maintain a low-profile hierarchy.

## Typography
The typographic hierarchy is built on functional distinction:
- **Space Grotesk** handles the "Vision"—headlines and display text that feel futuristic and structural.
- **Inter** handles the "Context"—body text designed for maximum readability across dense documentation.
- **JetBrains Mono** handles the "Data"—status codes, coordinates, and technical parameters that require monospaced precision.

All labels and technical data should favor uppercase styling with increased letter spacing to mimic instrumentation panels.

## Layout & Spacing
The layout follows a **Rigid Grid System** based on a 4px baseline. Components should feel "locked" into place, emphasizing high-precision alignment. 

- **Grid:** A 12-column fluid grid for desktop, collapsing to 4 columns for mobile.
- **Gutters:** Tight 16px gutters to maximize information density without clutter.
- **Padding:** Use generous internal padding within cards (24px) to balance the high-density data.
- **Adaptation:** On mobile, complex data tables should transition to simplified technical "cards" while maintaining the monospaced font for key metrics.

## Elevation & Depth
Depth is achieved through **Luminance and Translucency** rather than physical shadows.

1.  **Level 0 (Base):** Matte Black (#0D0D0D).
2.  **Level 1 (Panels):** Deep Navy (#0A1128) at 60% opacity with a 20px backdrop blur.
3.  **Level 2 (Active Overlays):** Graphite Gray (#1C1C1C) with a subtle 1px inner glow using the Primary Cyan at 10% opacity.
4.  **Borders:** Use 1px solid strokes in Slate (#708090) at 20% opacity for inactive states, scaling to 100% Primary Cyan for focused elements.

Elements should appear as if projected onto glass, with light "bleeding" slightly from the edges of active components.

## Shapes
The design system utilizes **Soft Geometric** shapes. 0.25rem (4px) is the standard radius for most components, providing a structured, engineered feel that isn't as harsh as sharp 0px corners. 

- **Standard Elements:** 4px radius.
- **Large Containers:** 8px radius (rounded-lg).
- **Status Pills:** Fully circular (pill-shaped) to differentiate them from functional buttons.

## Components
- **Buttons:** Primary buttons use a solid Electric Blue fill with white text. Secondary buttons are "Ghost" style: 1px Slate border, JetBrains Mono text, and a Cyan glow on hover.
- **Cards:** Glassmorphic backgrounds. Headers should have a subtle bottom border (1px Slate at 10% opacity) and use `label-caps` for titles.
- **Input Fields:** Dark background (#0D0D0D) with a 1px Slate border. On focus, the border transitions to Cyan with a 4px outer glow (bloom effect).
- **Chips/Tags:** Use JetBrains Mono. Success tags use Emerald with a 10% alpha fill; Error tags use a muted Red with a 10% alpha fill.
- **Data Visualizations:** Use thin 1px lines. Grids within charts should use Slate at 5% opacity. Points of interest should use the Primary Cyan "bloom" effect.
- **Terminal/Code Blocks:** Integrated JetBrains Mono text on a pure black background, indented with a subtle secondary blue vertical line on the left.