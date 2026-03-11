

## Wider Color Separation for Concept Map

The current colors (hues 260°, 290°, 320°) are only 30° apart — too close to distinguish clearly, especially between the violet and magenta tones visible in the screenshot.

### Proposed Palette

Widen the hue spread to ~50° while keeping all colors within the portal's dark aesthetic:

```text
  Conceito autoral →  hsl(280, 60%, 68%)   — bright orchid/magenta (protagonist, brightest)
  Autor/Referência →  hsl(230, 50%, 62%)   — periwinkle/indigo (cooler, clearly blue-violet)
  Campo temático   →  hsl(340, 55%, 60%)   — warm rose-pink (clearly warmer/redder)
```

This gives ~50-60° hue separation instead of 30°, making each type immediately distinguishable while all three still live in the cool-to-warm violet-pink family of the portal.

### Implementation

One change in `src/data/conceptMap.ts` lines 81-85:

```ts
export const typeColors: Record<NodeType, string> = {
  conceito: "hsl(280, 60%, 68%)",   // orchid magenta — protagonists
  autor:    "hsl(230, 50%, 62%)",   // periwinkle indigo
  campo:    "hsl(340, 55%, 60%)",   // warm rose-pink
};
```

