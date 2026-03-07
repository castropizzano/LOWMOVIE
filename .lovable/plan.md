

## Auditoria Double-Check — Varredura Completa

Revisão minuciosa de todos os textos após as correções anteriores. Abaixo, apenas achados novos ou remanescentes.

---

### RESULTADO GERAL

As 19 correções da auditoria anterior foram aplicadas corretamente. A maioria dos textos está consistente, humanizada e sem vestígios de IA. Seguem os pontos remanescentes ou novos identificados:

---

### 1. ACHADOS REMANESCENTES / NOVOS

| # | Arquivo | Linha | Trecho | Diagnóstico | Correção proposta |
|---|---------|-------|--------|-------------|-------------------|
| 1 | **Estrutura.tsx** | 112-114 | "A obra expande-se para além de seus limites formais, operando como catalisador de novas relações entre arte, cidade e subcultura." | "catalisador de novas relações" — construção genérica, levemente formulaica. Aceitável, mas poderia ser mais precisa. | Sugestão leve: "...abrindo novas relações entre arte, cidade e subcultura." — mais direto. |
| 2 | **Apresentacao.tsx** | 42 | "no qual se gestam as decisões estéticas do filme" | "se gestam" — verbo incomum, pode soar artificial. | "no qual se formam as decisões estéticas" ou "onde as decisões estéticas se constituem" |
| 3 | **Coletivo.tsx** | 64 | "A LowZine opera como arquivo vivo." | "opera como" — já corrigimos "opera/operam" no Filme.tsx, mas aqui permanece um "opera como" isolado. Não é erro, mas é construção recorrente no portal. | Alternativa: "A LowZine funciona como arquivo vivo." — variação. Prioridade baixa. |
| 4 | **Conclusao.tsx** | 91 | "O percurso metodológico opera em espiral" | Mais um "opera em" — mesma observação. | "O percurso metodológico se desenvolve em espiral" |
| 5 | **FAQ.tsx** | 31 | "A obra opera como micropolítica do gesto" | Terceiro "opera como" no portal. | "A obra funciona como micropolítica do gesto" |
| 6 | **Defense.tsx** | 318 | "Ele opera como um labirinto sensível" | Quarto "opera como" — agora no Defense. | "Ele funciona como um labirinto sensível" |
| 7 | **Conceitos.tsx** | 136 | "Herzog afirma que..." — mesma citação aparece em **Coletivo.tsx** linha 60 | Citação duplicada em duas páginas diferentes. Não é erro, mas a banca pode notar a repetição se navegar linearmente. | Considerar: manter em Conceitos (contexto teórico) e encurtar em Coletivo, ou vice-versa. Prioridade baixa — a repetição tem função diferente em cada contexto. |
| 8 | **WelcomeOverlay.tsx** | 70-73 | "Esta plataforma é parte da dissertação de mestrado sobre o coletivo LowPressure™ e suas práticas audiovisuais." | Impessoal — "parte da dissertação de mestrado" sem autoria. O overlay é o primeiro contato do visitante. | Sugestão: "Esta plataforma é parte da minha dissertação de mestrado sobre o coletivo LowPressure™ e suas práticas audiovisuais." — adicionar "minha" para marcar autoria desde o primeiro contato. |
| 9 | **Filme.tsx** | 101 | "A montagem opera como artbook" | Quinto "opera como". | "A montagem funciona como artbook" |

---

### 2. PADRÃO SISTÊMICO: "OPERA COMO"

O verbo "operar" aparece **8 vezes** no portal como construção "X opera como Y". É um padrão de linguagem acadêmica gerada. Sugiro uma varredura para substituir pelo menos 5 das 8 ocorrências por verbos variados: "funciona como", "age como", "se configura como", "atua como" — mantendo no máximo 2-3 usos de "opera" em todo o portal.

**Ocorrências completas:**
1. Apresentacao.tsx:26 — "A pesquisa opera um deslocamento" (OK — uso verbal diferente, não é "opera como")
2. Coletivo.tsx:64 — "A LowZine opera como arquivo vivo"
3. Conclusao.tsx:91 — "O percurso metodológico opera em espiral"
4. FAQ.tsx:31 — "A obra opera como micropolítica"
5. Filme.tsx:101 — "A montagem opera como artbook"
6. Estrutura.tsx:113 — "operando como catalisador"
7. Defense.tsx:318 — "Ele opera como um labirinto"
8. Conceitos.tsx:148 — "cineastas que operaram nas margens" (OK — uso verbal legítimo)

**Proposta**: Substituir #2, #3, #4, #5, #6, #7 por variações. Manter #1 e #8.

---

### 3. OUTROS REFINAMENTOS

| # | Arquivo | Observação | Prioridade |
|---|---------|-----------|------------|
| 10 | **Defense.tsx** Bloco 1, linha 232 | "Essa pesquisa começou tentando compreender..." — tom oral excelente, 1a pessoa, humanizado. OK. | -- |
| 11 | **Defense.tsx** Bloco 11, linha 538 | "Em vez de evitá-las, optei por torná-las visíveis." — 1a pessoa, tom direto. OK. | -- |
| 12 | **Lowbyrinth data** | Todos os textos de "justificativa" nas derivas estão em tom poético-funcional, sem vestígios de IA. OK. | -- |
| 13 | **NotFound.tsx** | "Página não encontrada" — PT-BR, limpo. OK. | -- |
| 14 | **AppSidebar.tsx** | Labels de navegação consistentes. OK. | -- |

---

### RESUMO

**Achados novos: 9** (sendo 6 do padrão "opera como")

**Edições propostas:**
1. Substituir 6 ocorrências de "opera como/opera em/operando como" por variações verbais
2. Adicionar "minha" no WelcomeOverlay para marcar autoria
3. Trocar "se gestam" por "se formam" na Apresentação (opcional)

**Arquivos afetados: 7** (Coletivo, Conclusao, FAQ, Filme, Estrutura, Defense, WelcomeOverlay, opcionalmente Apresentacao)

**Vestígios de IA remanescentes: Nenhum grave.** O padrão "opera como" é o único vestígio sistêmico. O restante do portal está humanizado e coerente.

