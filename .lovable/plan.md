
## Completed: Reduce em dash (—) overuse

~45 em dashes replaced across 11 files with colons, periods, commas, or mid-dots. Kept em dashes only in cases of natural dramatic pause or emphatic parenthetical (e.g., Defense.tsx rhetorical contrasts, Conceitos.tsx key conceptual distinctions, Metodologia.tsx "Escutar é mais do que ouvir").

## Completed: Human Writing Audit

~20 edits across 7 files:
- Residual em dashes replaced in Conclusao.tsx, conceptMap.ts, Conceitos.tsx
- Verb variety improved in Apresentacao.tsx (constitui→formação, configura→representa, constitui→apresenta) and FAQ.tsx (configura→constitui)
- Overly synthetic passages rewritten in Apresentacao.tsx, Estrutura.tsx, Conclusao.tsx
- Route fix: lowbyrinth.ts `/faq` → `/questoes`

## Completed: Full Editorial Audit (pre-defense)

7 edits across 6 files:
- MethodManual.tsx L123: "constitui" → "é"
- Conceitos.tsx L40: "—" → ":" (align with conceptMap.ts)
- Filme.tsx L69: "constitui" → "possui"
- Metodologia.tsx L109: "articula" → "formula"
- Conclusao.tsx L102: "não pretende estabelecer" → "não propõe"
- README.md L32: "simultaneamente" → "a um só tempo,"
- Defense.tsx L30: removed serial comma before "e"

## Completed: Visual Design Consistency Audit

8 fixes across 6 files:
- MethodManual.tsx: All hardcoded white/black → semantic tokens (text-foreground, bg-background, border-border); red hsl(0,70%,50%) → text-primary
- LowbyrinthMode.tsx: All hardcoded white/black → semantic tokens
- MethodDiagram.tsx: Red activeColor hsl(0,70%,XX%) → primary hue hsl(300,60%,XX%); mobile hardcoded colors → semantic tokens
- Index.tsx: Cover image added grayscale hover:grayscale-0
- Conclusao.tsx: All border-border/40 → border-border; LowZine image added grayscale
- Mapa.tsx: Added text-justify to instruction text

### Resolved
- Hellraiser epigraph removed from Index.tsx
