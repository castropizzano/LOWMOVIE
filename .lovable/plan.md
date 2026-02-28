

## Justificar textos em todos os cards do site

### Auditoria completa

Identifiquei todos os locais onde texto descritivo dentro de cards/accordions **não** usa `text-justify`. O padrão do site já aplica justificação nos parágrafos de corpo — falta aplicar dentro dos cards para consistência total.

### Alterações por arquivo

**1. `src/pages/FAQ.tsx`** — AccordionContent (linha 80)
- Adicionar `text-justify` à classe do conteúdo do accordion

**2. `src/pages/Contribuicoes.tsx`** — Card desc (linha 50)
- Adicionar `text-justify` ao parágrafo `{item.desc}`

**3. `src/pages/Metodologia.tsx`** — Eixos cards (linha 54)
- Adicionar `text-justify` ao parágrafo `{eixo.desc}`
- Adicionar `text-justify` nos 3 procedimentos de campo (linhas 69, 75, 82)
- Adicionar `text-justify` nos parágrafos de Distinção Fundamental (linhas 110, 114)

**4. `src/pages/Conceitos.tsx`** — Refs e definições
- Adicionar `text-justify` nas contribuições dos autores (linha 99)
- Adicionar `text-justify` nas definições dos conceitos próprios (linha 122)

**5. `src/pages/Coletivo.tsx`** — Glossário (linha 85)
- Adicionar `text-justify` às definições dos termos

**6. `src/pages/Estrutura.tsx`** — Movimentos cards (linha 79)
- Adicionar `text-justify` ao parágrafo `{mov.desc}`

**7. `src/pages/Filme.tsx`** — Linhagem (linha 68)
- Adicionar `text-justify` ao parágrafo descritivo da linhagem
- Adicionar `text-justify` nas refs (linha 83)

### Nota visual

Todos os textos descritivos com mais de uma linha dentro de cards passam a usar `text-justify`, alinhando com o padrão editorial já estabelecido nos blocos de corpo. Textos curtos (labels, valores de uma linha) permanecem sem justificação.

