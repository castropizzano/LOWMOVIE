

## Plano de Ajustes de Microtipografia e Diagramação

### 1. HOME (`src/pages/Index.tsx`)

**Título + Subtítulo (L25-31)**:
- Reduzir gap entre "LowMovie™" e subtítulo: `leading-[0.9]` → `leading-none` no h1
- Aumentar peso do subtítulo: `font-normal` → `font-medium`, e opacidade `text-foreground/80` → `text-foreground/70` (manter discreto mas com mais presença)
- Aumentar levemente o subtítulo: `text-xl md:text-2xl` → `text-xl md:text-[1.65rem]` para melhor proporção

**Bloco institucional (L49)**:
- Aumentar contraste da borda: `border-border/40` → `border-border/60`
- Ajustar padding: `px-6 py-5` → `px-8 py-6` para maior presença

**Epígrafe (L69-80)** — Reposicionar abaixo do botão CTA:
- Mover o bloco da epígrafe (L69-80) para depois do bloco do botão (L82-95)
- Reduzir tamanho: `text-xs` → `text-[10px]`
- Aumentar opacidade reduzida: `text-muted-foreground` → `text-muted-foreground/70`

### 2. FOOTER (`src/components/Layout.tsx`)

**L9-29**:
- Aumentar line-height: adicionar `leading-relaxed` aos parágrafos do footer
- Aumentar separação: `space-y-3` → `space-y-4`
- Melhorar respiração antes da frase final: `mt-2` → `mt-6` na frase explicativa (L26)
- Adicionar separador visual antes da frase final: `border-t border-border/30 pt-6`

### 3. DISTINÇÃO FUNDAMENTAL (`src/pages/Metodologia.tsx`)

**Card L94-117**:
- Restringir largura do texto interno: adicionar `max-w-3xl` nos parágrafos de corpo (L109, L113) para melhorar medida tipográfica dentro do card
- Aumentar espaçamento entre parágrafos: `mt-4` → `mt-6` (L113)
- Destaque no símbolo "≠": `text-2xl text-primary/60` → `text-3xl font-light text-primary/80` para maior presença visual
- Ajustar padding: já está em `p-8 md:p-10` — correto, manter

### Resumo

| Arquivo | Correções |
|---------|-----------|
| `Index.tsx` | 5 ajustes (título, subtítulo, bloco institucional, epígrafe reposicionada) |
| `Layout.tsx` | 4 ajustes (line-height, spacing, separador visual) |
| `Metodologia.tsx` | 3 ajustes (max-w texto, spacing parágrafos, símbolo ≠) |

**Total**: 12 ajustes cirúrgicos em 3 arquivos. Sem alteração de cor, identidade visual ou conteúdo textual.

