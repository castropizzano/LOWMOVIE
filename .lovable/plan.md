

# Correção de Fidelidade — Toolkit alinhado à Dissertação

## Problema identificado

A seção "Toolkit Pedagógico" em `/metodologia` e o PDF `toolkit_metodologia_castro.pdf` usam termos do **rascunho pessoal** (VOID · NOISE · SIGNAL · STRUCT, "10 Conceitos Operadores", "5 Etapas") que **não constam na dissertação oficial**. Isso viola a política Hallucination Zero e a fidelidade absoluta ao PDF da dissertação.

A dissertação aprovada — `PIZZANO_Castro._LowMovie_e_o_Labirinto_Criativo` — é a única autoridade.

## Plano de correção

### 1. Auditoria de fontes (antes de reescrever)

- Ler integralmente o PDF da dissertação recém-enviado via `document--parse_document`
- Mapear os termos metodológicos **reais** usados pela autora: eixos, procedimentos, conceitos operadores, arquétipos (se existirem), etapas (se existirem)
- Comparar com o conteúdo atual de `src/pages/Metodologia.tsx` e das chaves `metodologia.toolkit.*` em `pt.json`/`en.json`
- Listar exatamente quais termos do toolkit-rascunho **não têm correspondência** na dissertação

### 2. Reescrita da seção Toolkit em `/metodologia`

Substituir o conteúdo do rascunho pelos termos exatos da dissertação. Os blocos visuais permanecem (cards numerados, espiral, grid, lista, aplicações), mas o **texto** será reescrito verbatim a partir da dissertação:

- **Etapas do método** → usar a sequência metodológica que a dissertação efetivamente descreve (não inventar "5 etapas" se a dissertação propõe outra estrutura)
- **Espiral cognitiva** → manter apenas se a dissertação usa esse termo; caso contrário, substituir pela formulação real do percurso metodológico
- **Arquétipos VOID/NOISE/SIGNAL/STRUCT** → **remover** se não constarem na dissertação. Substituir pelos operadores conceituais reais (ex.: *Poética do instante*, *Estética da borda*, *Registro em fluxo*, *Afeto como eixo* — já presentes em `mem://project/content-structure/conceptual-operators`)
- **10 Conceitos Operadores** → reduzir/ajustar à lista real da dissertação
- **Aplicações pedagógicas** → manter apenas as que a dissertação menciona

### 3. Regeneração do PDF do Toolkit

- Reescrever `public/docs/toolkit_metodologia_castro.pdf` usando `reportlab` com o conteúdo corrigido (mesmo conteúdo da nova seção `/metodologia`, em layout PDF coerente com a identidade visual: dark/sóbrio, Manrope-like, uppercase nos títulos)
- QA visual: converter o PDF em imagens com `pdftoppm` e inspecionar cada página antes de entregar
- Manter o nome do arquivo (não quebra link em Conclusão)

### 4. Atualização de i18n

- Reescrever todas as chaves `metodologia.toolkit.*` em `pt.json` e `en.json` com o conteúdo fiel
- Remover chaves órfãs (ex.: `archetypes.void/noise/signal/struct` se removidos)

### 5. Atualização da memória

- Atualizar/criar `mem://project/content-structure/methodology-toolkit` documentando que o toolkit segue **estritamente** os termos da dissertação, sem termos de rascunho pessoal
- Reforçar no índice a regra de Hallucination Zero aplicada especificamente ao toolkit

## Arquivos afetados

| Arquivo | Mudança |
|---|---|
| `src/pages/Metodologia.tsx` | Reescrita da seção Toolkit (estrutura visual mantida, texto fiel à dissertação) |
| `src/i18n/locales/pt.json` | Reescrita das chaves `metodologia.toolkit.*` |
| `src/i18n/locales/en.json` | Tradução das mesmas chaves |
| `public/docs/toolkit_metodologia_castro.pdf` | Regenerado via reportlab com conteúdo corrigido |
| `mem://project/content-structure/methodology-toolkit` | Nova memória de fidelidade |
| `mem://index.md` | Adicionar referência à nova memória |

## Resultado esperado

- Zero termos inventados ou de rascunho na página `/metodologia` e no PDF
- Toolkit como **síntese pedagógica fiel** da metodologia da dissertação
- Coerência total entre dissertação ↔ portal ↔ PDF baixável
- Reforço da política Hallucination Zero documentado em memória

