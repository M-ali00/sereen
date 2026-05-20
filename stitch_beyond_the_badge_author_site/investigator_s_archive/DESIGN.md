# Design System Document

## 1. Overview & Creative North Star: "The Investigative Editorial"
The objective of this design system is to move away from the "generic author site" and toward a digital experience that feels like a high-stakes investigative dossier bound in leather. Our Creative North Star is **"The Investigative Editorial."**

This system reflects the gravitas of a former FDA investigator: it is meticulous, authoritative, and layered. We achieve this by rejecting "template" layouts in favor of intentional asymmetry, cinematic spacing, and a tonal depth that mimics the experience of reading a premium physical journal. We do not use borders to define space; we use light, shadow, and material density.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in the "Deep Hunter" core, utilizing a dark-mode architecture that prioritizes legibility and prestige.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To separate content, designers must use **Surface Hierarchy**. A change in background color is the only permissible way to define a new section.
- Place a `surface-container-low` section against a `surface` background to create a subtle shift in focus.
- Use `surface-container-highest` only for the most critical interactive elements or "pop-out" dossiers.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of vellum and cardstock.
- **Base Layer:** `surface` (#061612) – The foundation.
- **Sectional Layer:** `surface-container` (#13231e) – Used for large content blocks.
- **Component Layer:** `surface-container-high` (#1d2d28) – For cards or specific modules.
- **Elevated Layer:** `surface-container-highest` (#283833) – For temporary overlays or high-priority calls to action.

### The "Glass & Gradient" Rule
To prevent the dark background from feeling "flat," use **Signature Textures**. 
- Apply a subtle linear gradient to Hero sections transitioning from `surface` to `surface-container-low`.
- For primary CTAs, use a gradient from `primary` (#e9c176) to `primary-container` (#c5a059) to simulate the sheen of burnished gold.
- **Glassmorphism:** For floating navigation or modals, use `surface-variant` at 60% opacity with a `20px` backdrop blur to allow the deep hunter green to bleed through the "frosted" pane.

## 3. Typography: Authoritative Precision
The system pairs the intellectual rigor of a serif with the modern efficiency of a sans-serif.

*   **Display & Headlines (Newsreader):** This serif is our "investigative" voice. It should be used with generous letter-spacing (-0.02em) to feel cinematic. 
    *   *Display-LG (3.5rem):* Reserved for book titles and major investigative themes.
    *   *Headline-MD (1.75rem):* Used for chapter titles or section headers.
*   **Body & Titles (Manrope):** This sans-serif provides the "technical report" clarity. 
    *   *Body-LG (1rem):* Use for long-form editorial content. Ensure a line-height of 1.6 to maintain readability against the dark background.
    *   *Label-MD (0.75rem):* All-caps with +0.1em tracking, used for metadata (e.g., "CASE FILE NO. 402" or "DATE PUBLISHED").

## 4. Elevation & Depth: The Layering Principle
We do not use structural lines to convey order. We use **Tonal Layering**.

*   **Ambient Shadows:** If an element must "float" (like a book cover or a lead magnet), use a shadow tinted with the `on-surface` color.
    *   *Spec:* `offset: 0 20px, blur: 40px, color: rgba(212, 231, 223, 0.06)`. This creates a soft, natural lift rather than a harsh digital shadow.
*   **The "Ghost Border" Fallback:** In rare cases where a container needs a perimeter (e.g., input fields), use a "Ghost Border." Apply `outline-variant` (#4e4639) at **15% opacity**. It should be felt, not seen.
*   **Tactile Interaction:** Interactive elements should shift "up" the surface scale on hover (e.g., moving from `surface-container` to `surface-container-high`) rather than changing to a different color.

## 5. Components: Editorial Primitives

*   **Primary Buttons (Burnished Gold):**
    *   Background: Gradient of `primary` to `primary-container`.
    *   Text: `on-primary` (#412d00), Semi-bold Manrope.
    *   Corner Radius: `md` (0.375rem). Avoid "pill" shapes; they are too informal for this brand.
*   **Cards & Dossiers:**
    *   Forbid dividers. Use 48px–64px of vertical white space to separate card content. 
    *   Background: `surface-container-low`.
*   **Input Fields:**
    *   Use "Ghost Borders" only. Labels should use `label-md` in `primary` (#e9c176) to highlight the active field.
*   **Investigation Chips:**
    *   Used for categorizing articles (e.g., "FDA Regulations," "Pharma Ethics"). 
    *   Style: `surface-container-highest` background with `on-surface-variant` text.
*   **Signature Component: The "Evidence Block":**
    *   A blockquote variant using a high-contrast `primary` left-accent (2px wide) and `display-sm` Newsreader typography. No quotation marks; the typography speaks for itself.

## 6. Do’s and Don'ts

### Do:
*   **Embrace Asymmetry:** Align text to the left but allow imagery or "evidence" cards to bleed off-grid to the right.
*   **Use High Contrast for Action:** Only use `primary` (Gold) for elements that require immediate user action or to highlight key findings.
*   **Check Accessibility:** Ensure all `antique white` text maintains a 4.5:1 ratio against the `deep hunter` background.

### Don’t:
*   **Don't Use Pure Black:** Never use #000000. It kills the depth of the Hunter Green.
*   **Don't Use Divider Lines:** Never use a horizontal rule `<hr>` to separate sections. Use a background color shift or 128px of padding.
*   **Don't Use Default Shadows:** Avoid standard black drop shadows. They look "muddy" on deep green surfaces.