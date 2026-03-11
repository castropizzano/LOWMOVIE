

# Remaining Revisions — Human Writing Audit

All previous audit passes (em dash reduction, verb swaps, synthetic rewrites, route fixes) have been applied. The following are the remaining items that still need correction.

## Changes

### 1. MethodManual.tsx — "opera como" pattern (3 instances)
This verb pattern was flagged as an AI writing signature but only fixed in portal pages, not in the Manual.

- **L55**: "LowMovie™ opera como organismo vivo" → "LowMovie™ funciona como organismo vivo"
- **L125**: "operam como agentes constituintes" → "são agentes constituintes"
- **L206**: "LowMovie™ opera a partir de um lugar de fala" → "LowMovie™ parte de um lugar de fala"

### 2. Coletivo.tsx L44 — First mention of "Abreu" without full name
The full name "Luis Alberto de Abreu" appears only at the closing quote (L116). First reference at L44 should use the full name.

- **L44**: "Como propõe Abreu" → "Como propõe Luis Alberto de Abreu"

### 3. Conclusao.tsx L85-89 — "constitui" used twice in consecutive paragraphs
- **L89**: "constitui também forma de pensamento" → "é também forma de pensamento"

### 4. Apresentacao.tsx L155 — "simultaneamente" (flagged AI pattern)
"A contribuição é, portanto, simultaneamente temática, metodológica e epistemológica." — triple parallel with "simultaneamente" mirrors the pattern already fixed in Conclusao.tsx.

- → "A contribuição é, portanto, temática, metodológica e epistemológica."

### 5. conceptMap.ts L36 — residual em dash
"O labirinto não tem saída — a obra é o percurso" — this was marked "keep" in the em dash pass, but on review it reads better with a colon since it's a data description, not rhetorical prose.

- → "O labirinto não tem saída: a obra é o percurso."

Total: ~7 precise text edits across 4 files. No structural changes.

