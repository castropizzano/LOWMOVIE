# Visual Style Guide — LOWMOVIE™ Research Portal

Reference document for the visual design system of the LOWMOVIE™ research portal.
All future updates must follow these standards to ensure visual consistency.

---

## 1. Color Palette

All colors are defined as CSS custom properties in `src/index.css` using HSL values.
Tailwind classes reference these tokens via `tailwind.config.ts`. **Never use hardcoded colors in components.**

| Token | HSL | Hex (approx.) | Usage |
|---|---|---|---|
| `--background` | `0 0% 4%` | `#0A0A0A` | Page background |
| `--foreground` | `0 0% 93%` | `#EDEDED` | Primary text |
| `--card` | `0 0% 7%` | `#121212` | Card surfaces |
| `--primary` | `300 60% 55%` | `#CC44CC` | Accent, links, active states |
| `--secondary` | `270 50% 50%` | `#8040BF` | Gradient endpoint |
| `--muted` | `0 0% 12%` | `#1F1F1F` | Subdued surfaces |
| `--muted-foreground` | `0 0% 55%` | `#8C8C8C` | Secondary text, captions |
| `--accent` | `300 30% 40%` | `#854D85` | Subtle emphasis |
| `--border` | `0 0% 15%` | `#262626` | Borders, dividers |

### Gradients

| Utility class | Definition | Usage |
|---|---|---|
| `.gradient-primary` | `linear-gradient(135deg, hsl(300 60% 55%), hsl(270 50% 50%))` | Background fills |
| `.gradient-text` | Same gradient with `background-clip: text` | Highlighted text |

### Hover states

- Links and buttons: `hover:text-primary`, `hover:border-primary/50`
- Cards and surfaces: `hover:bg-foreground/[0.02]`
- Images: `hover:grayscale-0` (color reveal)

---

## 2. Typography System

**Font family:** Manrope (weights 400, 600, 700) loaded via Google Fonts in `index.html`.

### Heading hierarchy

| Level | Element | Classes | Example |
|---|---|---|---|
| H1 — Page title | `<h1>` | `text-5xl md:text-7xl font-bold uppercase tracking-tight` | Home hero |
| H2 — Section title | `<h2>` via `SectionTitle` | `text-2xl md:text-3xl font-bold uppercase tracking-tight` | Page sections |
| H3 — Subsection | `<h3>` | `text-xl font-bold uppercase tracking-[0.15em]` | Card groups |
| H4 — Card header | `<h4>` or `<p>` | `text-sm font-bold uppercase tracking-[0.15em]` | Individual cards |

### Body text

- Standard: `text-sm text-foreground/70 leading-relaxed text-justify`
- Defense Mode: `text-xl md:text-2xl leading-relaxed text-left` (optimized for projection)

### Micro-text (labels, captions, UI)

- `text-[10px]` or `text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground`
- Used in sidebar items, image captions, section labels, and navigation buttons

### Line spacing

- `leading-relaxed` is the standard for all body text
- Never use `leading-tight` or `leading-none` for readable paragraphs

---

## 3. Layout Grid

### Container

- Max width: `max-w-5xl` (1024px)
- Centering: `mx-auto px-4`
- Applied consistently on all content pages

### Spacing scale

| Context | Class | Value |
|---|---|---|
| Major section gap | `py-16` | 64px |
| Subsection gap | `py-12` | 48px |
| Section title bottom margin | `mb-12 md:mb-16` | 48–64px |
| Next-section button top margin | `mt-16` | 64px |
| Card padding (standard) | `p-6` | 24px |
| Card padding (generous) | `p-8` to `p-10` | 32–40px |
| Inter-element spacing | `mt-8` / `mt-10` | 32–40px |

### Responsive grid

- Two-column: `grid md:grid-cols-2 gap-6`
- Single column on mobile (default stack)

### Text alignment

- Portal body text: `text-justify` (mandatory)
- Defense Mode: `text-left` (projection readability)

---

## 4. Media Guidelines

### Image treatment

- **Default state:** `grayscale` filter applied to all images
- **Hover/interaction:** `hover:grayscale-0 transition-all duration-500` reveals color
- **Exception:** Welcome overlay video displays in full color at all times

### Image component

Use `ImageLightbox` for all enlargeable images:
- Thumbnail: `rounded-md border border-border/50 bg-muted/30`
- Lightbox: `max-w-[80vw] max-h-[80vh] object-contain`
- Optional caption: `text-[11px] text-muted-foreground/70 tracking-wide`

### Video hosting

- Platform: YouTube via `youtube-nocookie.com` (privacy-enhanced)
- Interview videos: grayscale until play
- Embed style: `rounded-lg` with `aspect-video`

### Aspect ratios

- Maintained per original content
- Cover image: explicit `aspectRatio: '1194/1688'`
- Photo galleries: consistent within each grid

---

## 5. UI Component Style

### Buttons

**Navigation button (NextSectionButton):**
```
border border-border w-full px-6 py-4
text-xs font-semibold uppercase tracking-widest text-muted-foreground
hover:border-primary/50 hover:text-primary
```
Sharp corners (no border-radius). Full width. Arrow icon with `group-hover:translate-x-1`.

**Standard button:**
```
border border-border px-6 py-3 rounded-lg
text-xs font-semibold uppercase tracking-widest
```

### Cards

```
border border-border rounded-lg bg-card/20
p-6 to p-10 (depending on content density)
```

Never use `border-border/40` for primary cards — reserve reduced opacity for nested dividers only.

### Sidebar

- Collapsible via `SidebarProvider`
- Nav items: `text-xs font-semibold uppercase tracking-wider`
- Icons: Lucide icons (navigation-functional only, not decorative)

### Header bar

```
h-12 bg-background/80 backdrop-blur-xl border-b border-border/50
```

### Fullscreen overlays (Manual, Lowbyrinth)

```
fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-auto
```

Always use semantic tokens — never hardcoded `bg-black` or `text-white`.

### Border radius

- Cards and interactive elements: `rounded-lg` (0.5rem)
- Full-width navigation buttons: sharp edges (no radius)

---

## 6. Visual Rhythm

### Section dividers

- Below section titles: `h-px w-16 bg-primary/40`
- Between major blocks: `border-t border-border`

### Animations (defined in `tailwind.config.ts`)

| Name | Duration | Effect |
|---|---|---|
| `fade-in-up` | 0.6s | `translateY(30px)` → `translateY(0)` + opacity |
| `fade-in` | 0.6s | Opacity only |
| `line-expand` | 0.8s | Width `0%` → `100%` |

### Stagger pattern

- Sequential delays of 0.1–0.15s increments for lists and grid items
- Applied via `framer-motion` `transition.delay` or CSS animation-delay

### Vertical rhythm progression

Within sections: `mt-8` → `mt-10` → `mt-16` for increasing separation.

---

## 7. Design Principles

1. **Cinematic dark-mode aesthetic** rooted in urban subculture and documentary filmmaking
2. **Typography-first minimalism** — no decorative icons in content sections; information hierarchy drives the layout
3. **Grayscale-to-color interaction** — images and videos reveal color on hover/play, reinforcing an archival, documentary identity
4. **Semantic token system** — all colors reference CSS custom properties; no hardcoded color values in components
5. **Academic rigor meets subcultural language** — the visual system balances research formality with the raw energy of skate/punk/DIY culture
6. **Defense Mode as projection format** — larger typography, left-aligned text, sequential block layout optimized for screen presentation

---

## File references

| File | Role |
|---|---|
| `src/index.css` | CSS custom properties (color tokens, gradients) |
| `tailwind.config.ts` | Tailwind theme extension (colors, animations, fonts) |
| `src/components/SectionTitle.tsx` | Standardized section heading component |
| `src/components/NextSectionButton.tsx` | Navigation button between sections |
| `src/components/ImageLightbox.tsx` | Image display with lightbox expansion |
| `src/components/AnimatedSection.tsx` | Scroll-triggered fade-in animation wrapper |
