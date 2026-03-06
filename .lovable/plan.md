

## Alinhar hierarquia visual do Defense Mode ao portal

O Defense Mode usa cores e tamanhos hardcoded (`text-neutral-300/400/500`, `border-neutral-800`, `bg-neutral-900/50`) enquanto o portal usa tokens semânticos do tema (`text-foreground/80`, `text-muted-foreground`, `text-primary`, `border-border`, `bg-card/30`). Isso cria uma inconsistência visual significativa.

### Mapeamento de substituições

| Defense (atual) | Portal (correto) |
|---|---|
| `text-neutral-300` | `text-foreground/90` |
| `text-neutral-400` | `text-foreground/80` |
| `text-neutral-500` | `text-muted-foreground` |
| `text-neutral-600` | `text-muted-foreground/70` |
| `text-neutral-700` | `text-muted-foreground/50` |
| `text-white` | `text-foreground` |
| `border-neutral-800` | `border-border` |
| `bg-neutral-900/50` | `bg-card/30` |
| `text-purple-200` | `text-primary` |
| `border-purple-500/40` | `border-primary/40` |
| `bg-purple-950/20` | `bg-primary/10` |

### Tipografia — alinhar com portal

- Labels de seção: `text-xs font-semibold uppercase tracking-widest text-primary` (como Apresentação)
- Títulos de card: `text-sm font-semibold uppercase tracking-wide text-foreground` (como Metodologia)
- Corpo de card: `text-sm text-muted-foreground leading-relaxed` (como portal)
- Frases narrativas: `text-base text-foreground/80 leading-relaxed` (tamanho base do portal, não `text-sm`)
- Cards: `border border-border rounded-lg p-6 md:p-8 bg-card/30` (padding do portal)
- Glow do Lowbyrinth™: usar `shadow-[0_0_25px_hsl(300_60%_55%/0.15)]` baseado na variável primary

### Arquivo

`src/pages/Defense.tsx` — substituição global de classes de cor e tipografia em todos os blocos (2–12), rodapé e botão exit.

