---
name: Printable Version Strategy
description: Print stylesheet + curated PDF synthesis booklet + Defense Mode public documentation
type: feature
---
The portal supports three printable layers:

1. **Print stylesheet** (`@media print` in `src/index.css`): any route becomes Ctrl+P friendly. Hides sidebar/header/buttons/iframes, switches to white background + black text, expands collapsibles, appends URLs after links, adds page footer with portal URL.

2. **Caderno-Síntese PDF** (`/public/docs/lowmovie_caderno_sintese.pdf`): 9-page A4 booklet generated via `reportlab`, organized for linear reading. Sections: cover, summary+abstract, central question/objectives, method (3 axes + cognitive spiral), operators (poetic + concept), analytical structure (3 chapters), conclusion, ecosystem+portal map (with QR code to lowmovie.lovable.app), credits+licenses. Light theme (white bg, black ink, accent #7a1f7a), Helvetica.

3. **Defense Mode documentation** (`/defense-mode` page): public explainer of the cinematic presentation device. Documents purpose, 14-block structure, keyboard nav, Easter egg access (3 clicks on home cover) AND direct access link. Removes opacity while preserving the discovery shortcut.

Companion page `/imprimir` centralizes the three options (print current page, download booklet, full dissertation PDF) with explicit philosophy: "the portal is navigable by design — printed versions are syntheses, not substitutes."

Sidebar order: Replicar → Defense Mode → Imprimir → Licença.
