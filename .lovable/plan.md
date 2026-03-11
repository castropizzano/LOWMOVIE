

# Human Writing Audit — LOWMOVIE™

## Summary

The project is in strong shape. No generic academic filler ("Nesse sentido", "de maneira significativa", etc.) was found. The previous em dash reduction pass eliminated most overuse. The main findings fall into three categories: residual em dashes that should be replaced, repetitive verb patterns ("constitui", "configura", "articula" appearing densely in certain paragraphs), and a few passages with overly synthetic sentence structures.

---

## 1. RESIDUAL EM DASHES (~15 remaining in content text)

Most remaining em dashes are legitimate (dramatic pause, parenthetical emphasis). The following should be replaced:

| File | Line | Current | Proposed | Reason |
|---|---|---|---|---|
| `Conclusao.tsx` | 25 | "Black Media Skate — mídia underground" | "Black Media Skate, mídia underground" | Descriptive appositive |
| `Conclusao.tsx` | 57 | "LowZine — fanzine coletivo" | "LowZine, fanzine coletivo" | Descriptive appositive |
| `Conclusao.tsx` | 91 | "circuitos convencionais — essas operações" | "circuitos convencionais. Essas operações" | Independent clause |
| `Conclusao.tsx` | 106 | "em movimento — uma experiência" | "em movimento, uma experiência" | Light clarification |
| `conceptMap.ts` | 18 | "interstício social — espaço de relações" | "interstício social, espaço de relações" | Appositive |
| `conceptMap.ts` | 19 | "experiência — não método" | "experiência, não método" | Contrast |
| `conceptMap.ts` | 24 | "'Archiving from below' — arquivo" | "'Archiving from below', arquivo" | Appositive |
| `conceptMap.ts` | 27 | "experiência criativa coletiva — não método" | "experiência criativa coletiva, não método" | Contrast |
| `Conceitos.tsx` | 75 | "teoria do cinema — numa constelação" | "teoria do cinema, numa constelação" | Continuation |
| `lowbyrinth.ts` | 90 | `path: "/faq"` | `path: "/questoes"` | Route consistency (missed in previous edit) |

**Keep** (legitimate dramatic use):
- `Estrutura.tsx` L12: "da prática — poética do instante..." (list introduction within narrative flow)
- `Conceitos.tsx` L40: "não tem saída prevista — a obra é o próprio percurso" (conceptual emphasis)
- `Conceitos.tsx` L137: "não é uma filiação estética — é uma ressonância ética" (key rhetorical contrast)
- `Defense.tsx` L46: "poética — e não estética — é deliberada" (emphatic parenthetical)
- `Defense.tsx` L369: "não reside na neutralidade — reside na capacidade" (rhetorical contrast)
- `Conclusao.tsx` L114: "do instante ao pensamento — o percurso" (poetic closing)
- `FAQ.tsx` L15, 19, 27, 35: Kept as deliberate rhetorical contrasts in Q&A format

---

## 2. REPETITIVE VERB PATTERNS

The verbs "constitui", "configura", and "articula" appear 20+ times across the portal. In Apresentacao.tsx alone, a single four-paragraph block uses "constitui/constituição" 3 times and "articula" 3 times.

### Apresentacao.tsx — dense cluster (lines 16-48)

**Current** (paraphrased): "...contribuem para a **constituição** de uma poética..." / "...**constitui** uma linguagem..." / "...um processo coletivo que **articula** corpo, cidade..."

**Proposed corrections:**
- L19: "contribuem para a constituição de uma poética" → "contribuem para a formação de uma poética"
- L36: "constitui uma linguagem" → "configura uma linguagem" (wait, "configura" is also overused) → **"apresenta uma linguagem"**
- L44: "configura um modo de fazer cinema" → "representa um modo de fazer cinema"

### FAQ.tsx — "configura" × 2 in close proximity (L31)

"Criar sem esperar autorização institucional configura, por si só, uma micropolítica do fazer." — same verb used in Conceitos.tsx L142 ("configura... uma micropolítica"). Replace one instance:
- FAQ.tsx L31: "configura" → "constitui" (swap with a less-used verb in that file)

---

## 3. OVERLY SYNTHETIC / FORMULAIC PASSAGES

### 3a. Apresentacao.tsx L22-23 — sentence too perfectly balanced

**Current:** "...propondo uma abordagem que reconhece a potência estética de formas de criação historicamente marginalizadas pelo campo artístico institucionalizado."

**Issue:** The phrase "formas de criação historicamente marginalizadas pelo campo artístico institucionalizado" is a long, perfectly balanced nominalization that reads as generated. 

**Proposed:** "...propondo uma abordagem que reconhece a potência estética de práticas criativas que o campo artístico institucional historicamente marginalizou."

### 3b. Apresentacao.tsx L29-31 — over-explanation

**Current:** "Esse gesto de reposicionamento implica reconhecer que o corpo em movimento sobre o skate não é meramente tema ou motivo visual, mas agente constitutivo de uma gramática fílmica própria, dotada de ritmo, enquadramento, textura e temporalidade específicos."

**Issue:** "dotada de ritmo, enquadramento, textura e temporalidade específicos" reads as a list appended for completeness. The sentence already communicates the idea without it.

**Proposed:** "Esse gesto implica reconhecer que o corpo em movimento sobre o skate não é meramente tema ou motivo visual, mas agente constitutivo de uma gramática fílmica com ritmo, enquadramento e temporalidade próprios."

### 3c. Estrutura.tsx L53-54 — overly balanced binary

**Current:** "...três movimentos analíticos que correspondem, simultaneamente, a dimensões distintas do objeto e a níveis progressivos de complexidade conceitual."

**Proposed:** "...três movimentos analíticos que correspondem a dimensões distintas do objeto, em complexidade conceitual progressiva."

### 3d. Estrutura.tsx L119-122 — "Portal como Interface" closing paragraph

**Current:** "Essa arquitetura transforma o portal em uma interface de pesquisa, onde teoria, criação e documentação coexistem em um sistema navegável. Dissertação, obra e interface digital se conectam no que pode ser compreendido como um dispositivo expandido de pesquisa."

**Issue:** "no que pode ser compreendido como" is hedging language typical of AI writing. The final sentence essentially restates the previous one.

**Proposed:** "Teoria, criação e documentação coexistem aqui em um sistema navegável. Dissertação, obra e interface digital se conectam como um dispositivo expandido de pesquisa."

### 3e. Conclusao.tsx L96-100 — over-explained closing

**Current:** "O que o LowMovie™ ensina é que a poética não habita o resultado acabado, mas o percurso que o constitui. O filme é a sedimentação provisória de um fluxo contínuo de gestos, decisões, improvisos e encontros. É nesse fluxo que reside a contribuição mais profunda: o movimento é, simultaneamente, condição de produção, linguagem expressiva e forma de pensamento."

**Issue:** "simultaneamente, condição de produção, linguagem expressiva e forma de pensamento" — triple parallel construction is a known AI pattern. Also "contribuição mais profunda" is evaluative language the author should avoid.

**Proposed:** "O que o LowMovie™ ensina é que a poética não habita o resultado acabado, mas o percurso que o constitui. O filme é a sedimentação provisória de um fluxo de gestos, decisões e encontros. É nesse fluxo que o movimento se revela como condição de produção, linguagem e pensamento."

---

## 4. PARAGRAPH RHYTHM

The portal generally avoids uniform paragraph length. Two exceptions:

- **Apresentacao.tsx** (lines 16-48): Four paragraphs of nearly identical length (~4 lines each). The third paragraph (L33-38) could be shorter or merged.
- **Coletivo.tsx** (lines 30-67): Seven paragraphs with the last three being very short (1-2 lines each), creating a staccato effect. The LowZine paragraph (L63-66) could be expanded slightly.

No changes proposed — these are observations, not critical issues.

---

## 5. VOICE CONSISTENCY

The project now maintains a consistent voice. The Apresentacao uses third-person academic ("A dissertação investiga"), which is appropriate for that introductory section. The Metodologia, Conclusão, and FAQ use first person. No inconsistencies detected.

---

## 6. LOWBYRINTH DATA — ROUTE FIX

`lowbyrinth.ts` line 90: `path: "/faq"` was missed in the previous `/faq` → `/questoes` migration. Must be corrected.

---

## Implementation Summary

~20 text edits across 6 files:

| File | Changes |
|---|---|
| `Apresentacao.tsx` | 3 verb swaps, 2 sentence rewrites |
| `Conclusao.tsx` | 4 em dash replacements, 1 sentence rewrite |
| `Estrutura.tsx` | 2 sentence rewrites |
| `Conceitos.tsx` | 1 em dash replacement |
| `conceptMap.ts` | 4 em dash replacements |
| `lowbyrinth.ts` | 1 route fix (`/faq` → `/questoes`) |

No structural or dependency changes.

