

# Auditoria Editorial, Estrutural e Conceitual — LOWMOVIE™

---

## 1. QUESTÕES CRÍTICAS (corrigir antes da defesa)

### 1.1 Inconsistência de voz na seção "Obra em Expansão" (Conclusao.tsx)

A seção "Horizontes Pedagógicos" (linhas 132-167) usa voz impessoal ("o diagrama pode funcionar como", "pode ser compreendido como", "essa perspectiva abre caminhos"), enquanto o corpo da Conclusão usa primeira pessoa assertiva ("Demonstro", "Afirmo"). **Isso já foi identificado em conversas anteriores mas não foi corrigido.**

**Correção proposta:**
- "O Lowbyrinth™ — labirinto conceitual que organiza a poética do LowMovie™ — sugere também aplicações pedagógicas que pretendo explorar."
- "Penso nele como um mapa conceitual navegável: estudantes percorrem camadas de sentido, exploram referências e constroem trajetórias criativas próprias."
- "Não pretendo estabelecer um modelo fechado. O que proponho é abrir caminhos para pensar a sala de aula como espaço de investigação estética, encontro coletivo e desenvolvimento de práticas autorais."

### 1.2 Padrão "opera como" (vestígio IA) ainda presente

- **Apresentacao.tsx linha 26**: "A pesquisa opera um deslocamento epistemológico decisivo" — reformular para "A pesquisa realiza um deslocamento..." ou "A pesquisa propõe um deslocamento..."
- **MethodManual.tsx linha 15**: "O corpo é instrumento de pesquisa" — OK, mas no mesmo arquivo, várias construções genéricas ("O erro beira o sagrado. Ele alimenta o processo criativo e revela o que o controle esconde.") leem como manifesto, não como texto acadêmico.

### 1.3 Rota `/faq` vs sidebar label "Questões"

A sidebar tem `{ title: "Questões", url: "/faq" }`. O URL não combina com o conteúdo — deveria ser `/questoes` para consistência com o label e com o tom em português. O `PROJECT_STRUCTURE.md` já lista a rota como `/questoes`, criando divergência com o código real.

**Correção**: Alterar a rota de `/faq` para `/questoes` no App.tsx, AppSidebar.tsx, e no NextSectionButton de Contribuicoes.tsx.

### 1.4 Referência a "Like Rats" no README como título do filme

README.md linha 62: `O Filme | O documentário *Like Rats* e o processo criativo`. O filme se chama **LowMovie™**. "Like Rats on Hostile Paths" é a trilha sonora / título simbólico, não o título oficial do documentário. Corrigir para `O documentário LowMovie™ e o processo criativo`.

### 1.5 Citação da Home: epígrafe Hellraiser

Index.tsx linhas 98-101: A citação "We have such sights to show you." (Hellraiser) não aparece na dissertação como referência, segundo o memory de `branding-and-attribution` ("livre de epígrafes ou elementos decorativos externos não relacionados diretamente à pesquisa"). A referência ao Hellraiser existe no campo simbólico da dissertação (subcapítulo "Campo simbólico: Hellraiser, Lowbyrinth™ e semiótica"), então é defensável — mas a banca pode questionar uma citação de filme de horror na home institucional. **Decisão do autor necessária.**

---

## 2. MELHORIAS IMPORTANTES (revisões recomendadas)

### 2.1 Redundância conceitual entre páginas

Os operadores (poética do instante, estética da borda, registro em fluxo) são definidos em:
- `Conceitos.tsx` (definição completa)
- `Defense.tsx` CONCEITOS array (definição resumida)
- `MethodManual.tsx` systemLayers (descrição expandida)
- `Filme.tsx` tags de operadores
- `Contribuicoes.tsx` (menção)
- `Conclusao.tsx` (menção)

Isso é esperado num portal navegável, mas as definições variam ligeiramente entre locais. Recomendo uniformizar a definição-base nos arrays de dados e garantir que o mesmo conceito nunca tenha duas definições contraditórias.

### 2.2 Apresentacao.tsx: voz inconsistente

Os quatro primeiros parágrafos usam terceira pessoa impessoal ("A dissertação investiga", "A pesquisa opera", "Os vídeos de skate registram"). O bloco "Lugar de Fala" também usa terceira pessoa ("A dissertação assume"). Depois, "Justificativa" volta à impessoal.

Segundo o padrão definido, seções autorais deveriam usar primeira pessoa. A Apresentação é a entrada do visitante — a voz deveria ser consistente. Sugestão: reescrever o primeiro parágrafo em primeira pessoa ("Nesta dissertação investigo...") ou manter toda a Apresentação em terceira pessoa acadêmica e reservar a primeira pessoa para Metodologia/Conclusão.

### 2.3 Defense Mode: Bloco 1 depende de timer fixo (37s)

O timer de 37 segundos (linha 144) para exibir o texto após o vídeo não é confiável — o vídeo pode carregar com atraso. Se o vídeo demorar 5s para carregar, o texto aparece antes do vídeo terminar. Recomendo adicionar um botão manual de "avançar" como fallback.

### 2.4 Trilha sonora: grafia inconsistente "Dan Guinski" vs "Dan Guinski"

- Filme.tsx linha 47: "Dan Guinski (Non-Grata)"
- Filme.tsx linha 218: "Dan Guinski (Non-Grata)"
Consistente dentro do arquivo. Verificar se o nome correto é "Guinski" ou "Guinski" — apenas validação factual necessária.

### 2.5 Manual do Método: tom de manifesto vs. tom acadêmico

O `MethodManual.tsx` tem 13 princípios em formato de manifesto. Alguns são assertivos demais para contexto acadêmico:
- "O erro beira o sagrado" — OK (citação de Herzog)
- "A autonomia é política criativa. Produção direta, circulação autônoma, criação coletiva." — declarativo, sem nuance
- "LowMovie™ é um sistema criativo vivo. Produzir é resistir." — slogan

Recomendo: adicionar nota visual no Manual indicando que se trata de um "manifesto criativo" (não texto acadêmico), o que já é implícito pelo título "Manual do Método" mas poderia ser explicitado.

### 2.6 DEFENSE_MODE.md: Lowbyrinth™ apontando para `/mapa`

Linha 36-37: "Lowbyrinth™ (`/mapa`) — para demonstrar a navegação não-linear" e "Mapa Conceitual (`/mapa`)". O Lowbyrinth™ é acessado pelo botão no header, não por `/mapa`. O Mapa Conceitual sim está em `/mapa`. Corrigir: "Lowbyrinth™ (botão no header do portal)".

---

## 3. CORREÇÕES MENORES (gramática, estilo, clareza)

### 3.1 Gramática e pontuação

- **Metodologia.tsx linha 14** (eixo Escuta): "Escutar é mais do que ouvir — a escuta expandiu-se para o corpo" — o travessão está correto, mas "expandiu-se" sugere passado; no contexto de descrição de método, "expande-se" seria mais adequado.

- **Coletivo.tsx linha 44**: "Abreu" sem primeiro nome na primeira menção. Já apresentado como "Luis Alberto de Abreu" na citação final (linha 116), mas a primeira referência deveria incluir o nome completo.

- **FAQ.tsx linha 52**: subtitle "Tensões conceituais." — ponto final em subtítulo é inconsistente (nenhum outro subtitle tem ponto).

### 3.2 Estilo

- **Conclusao.tsx linha 185**: "Leia a dissertação na íntegra — versão otimizada para leitura digital." — O travessão antes de "versão" cria ambiguidade. Sugestão: "Leia a dissertação na íntegra. Versão otimizada para leitura digital."

- **Index.tsx linha 106**: "Videoarte" como keyword — a dissertação usa mais "artes do vídeo" do que "videoarte". Verificar se é intencional.

### 3.3 Consistência tipográfica

- "VideoParte" (Apresentacao.tsx, Filme.tsx, Coletivo.tsx) — verificar se a grafia é "VideoParte" (CamelCase) ou "videopart" ou "video part" na dissertação.

---

## 4. OBSERVAÇÕES CONCEITUAIS

### 4.1 Coerência estrutural: excelente

A navegação Portal → Apresentação → Metodologia → Estrutura → Conceitos → Filme → Coletivo → Contribuições → Questões → Conclusão → Mapa segue uma lógica progressiva clara: contexto → método → estrutura → teoria → objeto → coletivo → contribuições → defesa → síntese → visualização. A hierarquia teoria/metodologia/obra/documentação/coletivo é legível.

### 4.2 Defense Mode: narrativa coerente

A sequência de 14 blocos segue um arco narrativo eficaz: abertura poética → contexto → coletivo → conceitos → método → fragmentos → teasers → trailer → imagens → contribuições → questões → mapa → encerramento. O fluxo é adequado para defesa oral.

### 4.3 Portal como interface de pesquisa

A nova seção na Estrutura (linhas 95-126) explicita o portal como dispositivo metodológico. Isso é conceitualmente forte e bem posicionado.

### 4.4 Consistência temporal

Os tempos verbais são geralmente consistentes: presente para descrições de método e obra, presente do indicativo para afirmações conceituais. Não há quebras significativas.

### 4.5 Passagem de autoria humana

O projeto passou em quase todos os critérios de autoria humana. Os únicos pontos de atenção são:
- Seção "Obra em Expansão" (já flagueada em 1.1)
- Algumas construções do tipo "Essa arquitetura transforma o portal em uma interface de pesquisa" (Estrutura.tsx linha 120) que são levemente genéricas

---

## 5. REVISÕES DE TEXTO SUGERIDAS

### 5.1 Apresentacao.tsx linha 26
**De:** "A pesquisa opera um deslocamento epistemológico decisivo"
**Para:** "A pesquisa propõe um deslocamento epistemológico decisivo"

### 5.2 FAQ.tsx linha 52 (subtitle)
**De:** `subtitle="Tensões conceituais."`
**Para:** `subtitle="Tensões conceituais"`

### 5.3 README.md linha 62
**De:** `O Filme | O documentário *Like Rats* e o processo criativo`
**Para:** `O Filme | O documentário LowMovie™ e o processo criativo`

### 5.4 DEFENSE_MODE.md linha 36
**De:** `- **Lowbyrinth™** (\`/mapa\`) — para demonstrar a navegação não-linear`
**Para:** `- **Lowbyrinth™** (botão no header do portal) — para demonstrar a navegação não-linear`

### 5.5 Conclusao.tsx linhas 136-165 (Obra em Expansão)
Reescrever em primeira pessoa conforme plano já aprovado anteriormente (pendente de implementação).

---

## RESUMO DE PRIORIDADES

| Prioridade | Item | Arquivo |
|---|---|---|
| Crítica | Voz impessoal na "Obra em Expansão" | Conclusao.tsx |
| Crítica | Rota `/faq` diverge de `/questoes` | App.tsx, AppSidebar.tsx |
| Crítica | "Like Rats" como título do filme no README | README.md |
| Importante | "opera" → "propõe" | Apresentacao.tsx |
| Importante | DEFENSE_MODE.md rota Lowbyrinth™ | DEFENSE_MODE.md |
| Menor | Ponto final no subtitle FAQ | FAQ.tsx |
| Menor | Ortografia "expandiu-se" → "expande-se" | Metodologia.tsx |

---

## Implementação

Todas as correções acima podem ser aplicadas num único ciclo de edição em 7 arquivos. Deseja que eu implemente todas as correções?

