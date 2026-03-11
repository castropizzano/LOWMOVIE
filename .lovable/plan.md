

# Visual Style Guide — LOWMOVIE™ Research Portal

This will be a standalone Markdown document at `STYLE_GUIDE.md` in the project root, documenting the complete visual design system extracted from the current codebase.

---

## Document contents

### 1. COLOR PALETTE

Extracted directly from CSS custom properties in `src/index.css`:

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

Plus gradient utilities: `gradient-primary` and `gradient-text` (135° from primary to secondary).

### 2. TYPOGRAPHY SYSTEM

- **Font family:** Manrope (weights 400, 600, 700) via Google Fonts
- **Heading hierarchy:**
  - Page title (H1): `text-5xl md:text-7xl font-bold uppercase tracking-tight`
  - Section title (H2 via SectionTitle): `text-2xl md:text-3xl font-bold uppercase tracking-tight`
  - Subsection (H3): `text-xl font-bold uppercase tracking-[0.15em]`
  - Card header (H4): `text-sm font-bold uppercase tracking-[0.15em]`
- **Body text:** `text-sm text-foreground/70 leading-relaxed text-justify`
- **Micro-text (labels, captions):** `text-[10px] or text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground`
- **Line spacing:** `leading-relaxed` standard for all body text

### 3. LAYOUT GRID

- **Max width:** `max-w-5xl` (1024px) centered with `mx-auto px-4`
- **Section spacing:** `py-16` between major sections, `py-12` for subsections
- **Component spacing:** `mb-12 md:mb-16` for section titles, `mt-16` for next-section buttons
- **Card padding:** `p-6` to `p-10` depending on content density
- **Responsive grid:** `grid md:grid-cols-2` for two-column layouts, single column on mobile
- **Body text alignment:** `text-justify` mandatory for paragraphs; Defense Mode uses `text-left`

### 4. MEDIA GUIDELINES

- **Image treatment:** All images use `grayscale` filter with `hover:grayscale-0 transition-all duration-500`
- **Exception:** Welcome overlay video displays in full color
- **Video hosting:** YouTube via `youtube-nocookie.com` for privacy
- **Interview videos:** Grayscale until play
- **Lightbox:** `ImageLightbox` component for all enlargeable images (80vw × 80vh max)
- **Aspect ratios:** Maintained per original; cover image uses explicit `aspectRatio: '1194/1688'`

### 5. UI COMPONENT STYLE

- **Buttons (primary):** `border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:border-primary/50 hover:text-primary`
- **NextSectionButton:** Full-width, sharp corners, same text style
- **Cards:** `border border-border rounded-lg bg-card/20` with `p-6` to `p-10`
- **Sidebar:** Collapsible with `SidebarProvider`, `text-xs font-semibold uppercase tracking-wider` nav items
- **Header bar:** `h-12 bg-background/80 backdrop-blur-xl border-b border-border/50`
- **Overlays (Manual, Lowbyrinth):** `bg-background/95 backdrop-blur-xl` fullscreen with semantic tokens
- **Hover states:** `hover:text-primary`, `hover:border-primary/50`, `hover:bg-foreground/[0.02]`
- **Border radius:** `rounded-lg` (0.5rem) for cards; sharp edges for full-width navigation buttons

### 6. VISUAL RHYTHM

- **Section dividers:** `h-px bg-primary/40` (16px wide) below section titles; `border-t border-border` between major blocks
- **Animations:** `fade-in-up` (0.6s, 30px translateY), `fade-in` (0.6s), `line-expand` (0.8s)
- **Stagger pattern:** Sequential delays (0.1–0.15s increments) for lists and grid items
- **Vertical rhythm:** Consistent `mt-8` / `mt-10` / `mt-16` progression within sections

### 7. DESIGN PRINCIPLES

- Cinematic dark-mode aesthetic rooted in urban subculture
- Minimalist typography-first design — no decorative icons in content sections
- Grayscale-to-color interaction pattern reinforces documentary/archival identity
- Semantic color tokens ensure global consistency
- Academic rigor balanced with subcultural visual language
- Defense Mode optimized for projection: larger type, left-aligned, sequential blocks

---

## Implementation

Create `STYLE_GUIDE.md` at the project root containing the above documentation, formatted as a clean reference document with all hex codes, class patterns, and usage rules.

