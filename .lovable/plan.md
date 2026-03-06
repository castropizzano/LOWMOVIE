

## Defense Mode — Todas as alterações

Arquivo: `src/pages/Defense.tsx`

### 1. Bloco 1 — Texto após vídeo (não sobreposto)

Remover o overlay de texto (linhas 163-172). Adicionar estado `videoEnded` com `setTimeout` de 37s. Quando o vídeo terminar, exibir texto centralizado com fade-in de 0.6s sobre fundo `bg-black/80`, usando `AnimatePresence` + `motion.div`.

### 2. Bloco 4 — Cards estáticos animados + Lowbyrinth™ roxo

- Trocar `<div>` por `<motion.div>` com `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `delay: i * 0.1`
- Adicionar `pointer-events-none` a todos os cards
- Lowbyrinth™: `border-purple-500/40`, `bg-purple-950/20`, `shadow-[0_0_25px_rgba(168,85,247,0.15)]`, texto `text-purple-200`

### 3. Bloco 5 — Cards maiores, ícones 70% opacidade

- Container `max-w-5xl` (era `max-w-4xl`)
- Cards: `p-10` (era `p-6`), ícone `text-3xl opacity-70` (era `text-2xl`)
- Título: `text-base` (era `text-sm`), desc: `text-sm` (era `text-xs`)

### 4. Bloco 11 — Questões Críticas estáticas

- Container `max-w-[900px]` (era `max-w-3xl`)
- Espaçamento `space-y-6` (era `space-y-4`), padding `p-6` (era `p-5`)
- Texto resposta `text-sm` (era `text-xs`), margin título `mb-3` (era `mb-2`)
- `pointer-events-none` nos cards
- Margin bottom do header `mb-12` (era `mb-10`)

### 5. Rodapé — Nova interface

Remover botões "Prev" e "Next" textuais e texto "Defense Mode — LowMovie™ Research". Substituir por:
- **Rodapé esquerdo**: `BLOCO 03 — COLETIVO` (indicador do bloco atual em maiúsculas)
- **Rodapé direito**: apenas ícone `→` (ArrowRight) clicável
- **Topo esquerdo**: manter X (exit) como está
- Remover import de `ArrowLeft`

