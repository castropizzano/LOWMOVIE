

# Reduce em dash (—) overuse across the project

## Scope

Found ~60+ em dashes across 14 source files. The pattern is pervasive and creates a recognizable AI writing signature, especially in constructions like "X — é Y", "não é X — é Y", and title separators.

## Strategy

Reduce by ~50%, keeping only cases where the em dash is the most natural choice (dramatic pauses in key moments, well-placed parentheticals). Replace with:
- **Colons** for introductions and lists
- **Periods** for independent clauses joined by dashes  
- **Commas** for appositives and light clarifications
- **No punctuation** where the sentence flows naturally without it

## Files and changes

### 1. Title separators (colon replacement)
- `Filme.tsx` L14: "O Filme — LowMovie™" → "O Filme: LowMovie™"
- `Filme.tsx` L66: "Linhagem — A Gramática..." → "Linhagem: A Gramática..."
- `Filme.tsx` L130: "Análise de Sequência — Exemplo" → "Análise de Sequência: Exemplo"
- `Coletivo.tsx` L24: "O Coletivo — LowPressure™" → "O Coletivo: LowPressure™"
- `Apresentacao.tsx` L111: "Lugar de Fala — Artista-Pesquisador" → "Lugar de Fala: Artista-Pesquisador"
- `Metodologia.tsx` L61: "Procedimentos de Campo — Três Operações" → "Procedimentos de Campo: Três Operações"
- `Conclusao.tsx` L128: "Obra em Expansão — Horizontes Pedagógicos" → "Obra em Expansão: Horizontes Pedagógicos"
- `Conclusao.tsx` L150: "Sala de Aula — Possibilidades Metodológicas" → "Sala de Aula: Possibilidades Metodológicas"
- `Index.tsx` L49: "Dissertação de Mestrado — Março 2026" → "Dissertação de Mestrado · Março 2026"

### 2. Continuation/contrast clauses (period or comma)
- `Apresentacao.tsx` L126-127: `"quem a sofre"</em> — e é precisamente` → `"quem a sofre"</em>. É precisamente`
- `Apresentacao.tsx` L131: `pesquisa-criação — não como defesa` → `pesquisa-criação, não como defesa`
- `Apresentacao.tsx` L132: `o rigor — ela o produz` → `o rigor. Ela o produz.`
- `Apresentacao.tsx` L153: `uma estética — ela propõe` → `uma estética: propõe`
- `Filme.tsx` L100: `corpo-câmera — extensão sensível` → `corpo-câmera, extensão sensível`
- `Filme.tsx` L185: `erro não é metáfora — é consequência` → `erro não é metáfora, é consequência`
- `Coletivo.tsx` L32: `formal — é uma rede` → `formal. É uma rede`
- `Coletivo.tsx` L60: `erro não é falha — é material` → `erro não é falha, é material`
- `Conclusao.tsx` L92: `em espiral — cada retorno` → `em espiral: cada retorno`
- `Conclusao.tsx` L153: `educacionais — processo colaborativo` → `educacionais: processo colaborativo`
- `Conclusao.tsx` L176: `na íntegra — versão otimizada` → `na íntegra. Versão otimizada`
- `Estrutura.tsx` L120-121: `interface de pesquisa — onde teoria` → `interface de pesquisa, onde teoria`
- `Estrutura.tsx` L141: `operador simbólico — uma lente` → `operador simbólico, uma lente`

### 3. Appositives (comma replacement)
- `Apresentacao.tsx` L27-28: `— objeto recorrente ... — mas como` → `, objeto recorrente ... , mas como`
- `Apresentacao.tsx` L35-36: `VideoParte — formato ... — constitui` → `VideoParte, formato ... , constitui`
- `Conclusao.tsx` L137: `Lowbyrinth™ — labirinto conceitual` → `Lowbyrinth™, labirinto conceitual`
- `Conclusao.tsx` L203: `— disponíveis para consulta` → `, disponíveis para consulta`
- `Metodologia.tsx` L129: `Artista-pesquisador — membro ativo` → `Artista-pesquisador, membro ativo`
- `Metodologia.tsx` L130: `fotografias e trocas digitais — mediada` → `fotografias e trocas digitais, mediada`

### 4. List introductions (colon)
- `Conceitos.tsx` L74: `— teoria urbana, estética` → `: teoria urbana, estética`
- `Filme.tsx` L48: `entrelaçados — sessões, interlúdios` → `entrelaçados: sessões, interlúdios`
- `Filme.tsx` L79: `Baker Skateboards — documentário` → `Baker Skateboards: documentário`

### 5. Keeping em dashes (natural/dramatic use)
- `Metodologia.tsx` L14: "Escutar é mais do que ouvir — a escuta expande-se" (natural dramatic pause)
- `Defense.tsx` L46: "poética — e não estética — é deliberada" (emphatic parenthetical)
- `Defense.tsx` L369: "O rigor não reside na neutralidade — reside na capacidade" (rhetorical contrast)
- `Conceitos.tsx` L137: "não é uma filiação estética — é uma ressonância ética" (key conceptual distinction)

### 6. Data files (selective)
- `lowbyrinth.ts`: Replace dashes in justificativas with periods (9 instances)
- `MethodManual.tsx`: Replace dashes in principles/descriptions with colons or periods (5 instances)
- `Defense.tsx` FAQ_ITEMS L46: commas instead of dashes

Total: ~45 replacements across 10 files. No structural or dependency changes.

