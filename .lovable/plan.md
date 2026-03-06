

## Defense Mode — Redesign para Apresentação ao Vivo

### Problema
O Defense Mode atual usa textos centralizados, fontes pequenas (`text-base`, `text-sm`) e blocos estáticos que dificultam a leitura durante uma apresentação ao vivo para a banca.

### Mudanças propostas

**1. Alinhamento: tudo justificado à esquerda**
- Remover `text-center` de todos os blocos (1–12)
- Aplicar `text-left` como padrão em todos os textos narrativos, títulos e descrições

**2. Fontes maiores para leitura ao vivo**
- Textos narrativos: `text-base` → `text-xl md:text-2xl`
- Descrições em cards: `text-sm` → `text-base md:text-lg`
- Títulos de conceitos/cards: `text-sm` → `text-lg md:text-xl`
- Labels/subtítulos: `text-xs` → `text-sm`
- Títulos principais (Block 2 "LowMovie™"): manter grande, ajustar subtítulo
- Frases de destaque (Block 12 "É preciso entrar"): `text-lg` → `text-2xl md:text-3xl`

**3. Mais interatividade e formato pitch**
- **Block 4 (Conceitos)**: remover `pointer-events-none`, adicionar hover com `scale` e glow nos cards para que você possa apontar/interagir
- **Block 5 (Metodologia)**: mesmo tratamento — cards com hover interativo
- **Block 10 (Contribuições)**: cards com hover highlight
- **Block 11 (Questões Críticas)**: remover `pointer-events-none`, tornar cards clicáveis com expand/collapse para revelar a resposta (formato pitch: mostrar pergunta, clicar para revelar resposta)
- **Block 9 (Frames)**: manter lightbox interativo (já é)
- **Block 12 (Lowbyrinth)**: manter grafo interativo

**4. Padronização visual entre blocos**
- Container consistente: `max-w-5xl` em todos os blocos de conteúdo
- Espaçamento vertical padronizado: `space-y-4` entre parágrafos
- Cards com padding uniforme `p-8`
- Textos narrativos sempre com `leading-relaxed`

### Blocos afetados
Todos os 14 blocos (0–13) serão revisados no arquivo `src/pages/Defense.tsx`. Nenhum outro arquivo é alterado.

### Resumo da abordagem
- Texto left-aligned, fontes ~1.5x maiores
- Cards interativos com hover effects
- FAQ em formato reveal (click-to-show) para dinâmica de pitch
- Container e espaçamentos padronizados

