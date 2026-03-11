

# Visual Design Consistency Audit — LOWMOVIE™

---

## CRITICAL VISUAL INCONSISTENCIES

### 1. LowbyrinthMode and MethodManual use hardcoded colors instead of theme tokens
Both `LowbyrinthMode.tsx` and `MethodManual.tsx` use raw `text-white/XX`, `bg-white/XX`, `bg-black/95`, and `border-white/XX` classes instead of the semantic token system (`text-foreground`, `bg-background`, `border-border`, etc.) used everywhere else.

**Impact:** If the theme were ever adjusted, these two overlays would not update. More importantly, the white/black hardcoding creates a subtly different visual tone compared to the portal's `--foreground: 0 0% 93%` and `--background: 0 0% 4%` values. The portal foreground is not pure white — it's 93% lightness. The hardcoded `text-white` is 100%.

**Files:** `src/components/LowbyrinthMode.tsx` (lines 29, 34, 37, 48, 49, 56, 57, 62, 94-98), `src/components/MethodManual.tsx` (lines 91, 94-99, 119, 122, 157, 169-182, 199-228, 246-277, 294-332)

**Fix:** Replace `text-white/90` → `text-foreground`, `text-white/70` → `text-foreground/70`, `text-white/40` → `text-muted-foreground`, `bg-black/95` → `bg-background/95`, `border-white/10` → `border-border`, etc. This is the single most impactful visual consistency fix.

### 2. MethodManual uses a red accent color `hsl(0, 70%, 50%)` — completely off-palette
The Manual's section labels use `text-[hsl(0,70%,50%)]` (a saturated red), which does not exist in the theme. The portal's accent is purple/magenta (`hsl(300, 60%, 55%)`). The `MethodDiagram.tsx` also uses `hsl(0, 70%, 45-60%)` for its active states.

**Impact:** The Manual feels like a different project visually. The red color clashes with the purple identity.

**Files:** `src/components/MethodManual.tsx` (lines 119, 154, 169, 171, 199, 220, 246, 270, 294, 311), `src/components/MethodDiagram.tsx` (lines 13, 22, 31, 40)

**Fix:** Replace all `hsl(0, 70%, XX%)` values with `text-primary` / `border-primary/40` / `hover:text-primary` to match the portal palette. In MethodDiagram, replace `activeColor` values with the primary hue.

---

## IMPORTANT DESIGN IMPROVEMENTS

### 3. Home page cover image has no grayscale filter
Every other image in the portal (stills, gallery, coletivo, fotos, contribuicoes.jpg, Defense Mode) uses `grayscale` with `hover:grayscale-0`. The Home cover image (`capa-dissertacao.png`) on Index.tsx L34-43 has no grayscale treatment.

**Fix:** Add `grayscale hover:grayscale-0 transition-all duration-500` to the cover `<img>` className. This aligns with the established visual language.

### 4. Inconsistent card border opacity between pages
- Most pages use `border-border` (15% lightness) for cards
- Conclusao.tsx uses `border-border/40` for its cards (lines 110, 124, 168, 195, 222, 292, 320)
- FAQ.tsx uses `border-border` for accordion items

This creates a subtle but visible inconsistency: Conclusao cards appear softer/lighter than cards on other pages.

**Fix:** Standardize on `border-border` for all primary content cards. Use `border-border/40` only for nested/subordinate elements (separators, inner dividers).

### 5. LowZine image in Conclusao accordion lacks grayscale
At Conclusao.tsx L260-266, the LowZine image uses no grayscale filter (`className="w-full h-auto"`), while all other images on the site use grayscale. The interview videos in the same section do have grayscale applied.

**Fix:** Add `grayscale hover:grayscale-0 transition-all duration-500` to the LowZine img.

### 6. Defense Mode Block 10 — contribuicoes.jpg uses inline grayscale instead of component pattern
Defense.tsx L529-533 applies grayscale via inline classes on a raw `<img>` tag instead of using `ImageLightbox`. This image cannot be enlarged via lightbox like all other images in the portal/defense.

**Fix:** Replace with `<ImageLightbox>` component for consistency, or accept as intentional (decorative image).

---

## MINOR VISUAL ADJUSTMENTS

### 7. Typography: Conclusao.tsx headline uses different scale than SectionTitle
Conclusao.tsx L73-78 uses a custom headline block (`text-2xl md:text-4xl font-bold`) instead of `SectionTitle`. The second line uses `text-xl md:text-2xl font-semibold`. This is intentional (dramatic opening statement), but the `SectionTitle` still appears above it, creating a double-header effect.

**Status:** Acceptable — the SectionTitle provides structural consistency while the dramatic block provides rhetorical emphasis. No change needed.

### 8. Mapa.tsx — instruction text not justified
Mapa.tsx L14: `text-sm text-muted-foreground leading-relaxed` — missing `text-justify` that is standard across all other body text.

**Fix:** Add `text-justify` to L14.

### 9. Defense Mode font sizes are intentionally larger
Defense Mode uses `text-xl md:text-2xl` for body and `text-lg md:text-xl` for cards, vs portal's `text-base` / `text-sm`. This is correct for presentation readability. No change needed.

### 10. Sidebar icons — decorative but functional
The sidebar uses Lucide icons (Home, Presentation, FlaskConical, etc.) while the portal content pages have removed decorative icons per the minimalist audit. The sidebar icons are navigation-functional, not decorative. Consistent and correct.

### 11. WelcomeOverlay video — no grayscale (intentional)
Per memory: "O vídeo de introdução da lightbox de boas-vindas é a única exceção, exibido sempre em cores." Confirmed correct.

### 12. NextSectionButton — no border-radius
Uses `border border-border` without `rounded-lg`, creating sharp-cornered buttons. All other interactive elements (cards, accordions) use `rounded-lg`. This appears intentional for a "full-width divider" aesthetic but could be unified.

**Suggestion:** Consider adding `rounded-lg` for consistency, or keep as-is for intentional contrast.

---

## RESPONSIVE DESIGN OBSERVATIONS

### 13. LowbyrinthMode desktop layout — absolute positioning
Desktop layout uses percentage-based absolute positioning (`left: ${node.x}%`, `top: ${node.y}%`). This works well on standard screens but may overlap on narrow viewports. Mobile fallback (scrollable list) handles small screens correctly.

### 14. ConceptGraph — fixed 900x650 initialization
ConceptGraph initializes node positions based on fixed `w=900, h=650` dimensions. The SVG viewBox adapts, but initial density may feel cramped on smaller screens. Acceptable for current use.

---

## SUMMARY OF PROPOSED FIXES

| Priority | File | Issue | Fix |
|---|---|---|---|
| **Critical** | `MethodManual.tsx` | Red accent `hsl(0,70%,50%)` off-palette | Replace with `text-primary` / theme tokens |
| **Critical** | `MethodManual.tsx` | Hardcoded `white/black` colors | Replace with semantic tokens (`text-foreground`, `bg-background`, `border-border`) |
| **Critical** | `LowbyrinthMode.tsx` | Hardcoded `white/black` colors | Same as above |
| **Critical** | `MethodDiagram.tsx` | Red `activeColor` values | Replace with primary hue `hsl(300, 60%, 55%)` |
| Important | `Index.tsx` | Cover image missing grayscale | Add `grayscale hover:grayscale-0 transition-all duration-500` |
| Important | `Conclusao.tsx` | Cards use `border-border/40` (softer than rest) | Standardize to `border-border` |
| Important | `Conclusao.tsx` L260 | LowZine image missing grayscale | Add grayscale classes |
| Minor | `Mapa.tsx` L14 | Missing `text-justify` | Add `text-justify` |

Total: 4 critical fixes (color system alignment), 3 important fixes (image/border consistency), 1 minor fix (text alignment).

