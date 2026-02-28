

## 2 Features de Impacto Acadêmico

### Feature 1: Mapa Conceitual Interativo — `/mapa`

Grafo SVG interativo com nós e conexões, sem dependências externas.

**Novos arquivos:**

- **`src/data/conceptMap.ts`** — Dados do grafo:
  - ~20 nós reaproveitando dados de `Conceitos.tsx`: 6 conceitos autorais (Lowbyrinth, Poética do instante, Estética da borda, Registro em fluxo, Fabulação, Afeto), 8 autores (Borden, McDuie-Ra, Bourriaud, Hall, Abreu, Delpeux, Rouch, Deren), 4 campos temáticos
  - Cada nó: id, label, tipo (conceito | autor | campo), descrição curta, cor por tipo
  - ~25 arestas conectando autores a conceitos e campos

- **`src/components/ConceptGraph.tsx`** — Componente SVG interativo:
  - Layout force-directed simples (simulação com requestAnimationFrame)
  - Nós como círculos coloridos por tipo com label
  - Arestas como linhas SVG
  - Drag-to-move nos nós
  - Hover revela tooltip com definição
  - Zoom com wheel (transform scale)
  - Legenda visual (conceito / autor / campo)

- **`src/pages/Mapa.tsx`** — Página com Layout, título e grafo fullscreen

**Arquivos modificados:**
- `src/App.tsx` — Rota `/mapa`
- `src/components/AppSidebar.tsx` — Item "Mapa" com ícone `Network` após "Conclusão"

---

### Feature 2: Lowbyrinth™ — Navegação Não-Linear

Modo alternativo de navegação que performa o conceito de labirinto da tese.

**Novos arquivos:**

- **`src/data/lowbyrinth.ts`** — Mapa de derivas:
  - Cada seção do site com: título, path, conceito-chave, array de 2-3 conexões sugeridas com justificativa curta

- **`src/components/LowbyrinthMode.tsx`** — Overlay fullscreen:
  - Fundo escuro (bg-black/95) com blur
  - Cards flutuantes posicionados organicamente representando conceitos/seções
  - Cada card sugere derivas com justificativa ("de Corpo em Deriva, derive para Estética da borda")
  - Linhas SVG pontilhadas conectando cards
  - Texto: "Derive. O percurso é o conhecimento."
  - Clique navega e fecha overlay
  - Animação de entrada com framer-motion (stagger)

**Arquivos modificados:**
- `src/components/Layout.tsx` — Botão "Lowbyrinth™" no header (ao lado do SidebarTrigger), toggle estado, renderiza overlay

---

### Ordem de implementação
1. Dados: `conceptMap.ts` + `lowbyrinth.ts` (paralelo)
2. Componentes: `ConceptGraph.tsx` + `LowbyrinthMode.tsx` (paralelo)
3. Página: `Mapa.tsx`
4. Integrações: `App.tsx`, `AppSidebar.tsx`, `Layout.tsx`

