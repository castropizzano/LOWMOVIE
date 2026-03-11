

## Color Palette Alignment for Concept Map

### Current Problem

The map uses three colors completely outside the portal's palette:
- **Conceito:** `hsl(45, 80%, 60%)` — gold/yellow
- **Autor:** `hsl(200, 60%, 55%)` — cyan/blue  
- **Campo:** `hsl(340, 50%, 55%)` — pink/rose

The portal's identity lives in the **magenta-violet spectrum** (hue 270–300). These map colors feel disconnected.

### Proposed Palette

Shift all three into the portal's hue neighborhood while maintaining clear differentiation:

```text
Portal identity:  primary = 300°   secondary = 270°

Proposed map colors:
  Campo temático   →  hsl(320, 50%, 55%)   rose-magenta (warmest)
  Autor/Referência →  hsl(260, 45%, 60%)   soft violet (coolest)
  Conceito autoral →  hsl(290, 55%, 65%)   light magenta (center, brightest — protagonist)
```

This gives ~30° hue separation between each type — enough contrast to distinguish them, but all within a cohesive magenta-violet family that matches the portal's `gradient-primary` (300→270).

### Implementation

One line change in `src/data/conceptMap.ts`:

```ts
export const typeColors: Record<NodeType, string> = {
  conceito: "hsl(290, 55%, 65%)",   // light magenta — protagonists
  autor:    "hsl(260, 45%, 60%)",   // soft violet
  campo:    "hsl(320, 50%, 55%)",   // rose-magenta
};
```

No other files need changes — `ConceptGraph.tsx` already reads from `typeColors`.

