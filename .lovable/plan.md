

# AUDITORIA FINAL ULTRA-ABRANGENTE — LOWMOVIE™

Relatório estruturado para apresentação pública e defesa de mestrado.

---

## 1. PROBLEMAS CRÍTICOS (corrigir antes da defesa)

### 1.1 Defense Mode — conteúdo inteiramente hardcoded em português

O `Defense.tsx` contém todo o texto diretamente no componente (linhas 27-61: TEASERS, CONCEITOS, FAQ_ITEMS, CONTRIBUICOES; linhas 242-584: textos narrativos nos blocos). Nenhuma string usa `t()`. Quando o idioma está em inglês, o Defense Mode aparece integralmente em português.

**Decisão necessária:** Se a versão EN do Defense não é relevante para a defesa (apresentação será em PT), isso pode ser rebaixado a "importante". Mas a inconsistência arquitetural existe e seria visível a qualquer visitante anglófono.

### 1.2 ConceptGraph — labels e descriptions hardcoded em PT

O arquivo `src/data/conceptMap.ts` contém todos os `label` e `description` dos nós em português hardcoded (linhas 15-42). O `ConceptGraph.tsx` renderiza `node.label` e `node.description` diretamente (linhas 209-210, 279-294), sem passar por `t()`. As `typeLabels` (linhas 87-91) são exportadas em PT mas o componente usa `t("conceptMap.typeLabels.${type}")` para a legenda — correto para a legenda, mas os conteúdos dos nós permanecem em PT quando o site está em EN.

### 1.3 NotFound — link aponta para "/" (Intro) e não "/home"

`NotFound.tsx` linha 18: `<a href="/">` leva à Intro com vídeo. Deveria ser `/home`.

### 1.4 WelcomeOverlay — Zod error message hardcoded

`WelcomeOverlay.tsx` linha 11: `z.string().trim().email("Email inválido")`. A mensagem nunca aparece ao utilizador (o componente usa `t("welcome.invalidEmail")` na linha 37), portanto sem impacto visual, mas é uma inconsistência de código.

---

## 2. MELHORIAS IMPORTANTES (recomendadas)

### 2.1 Padrões repetitivos de escrita — naturalidade humana

Análise textual do `pt.json` detecta padrões concentrados que podem soar mecânicos:

| Padrão | Frequência | Risco |
|---|---|---|
| "constitui/constituem" | 8+ ocorrências | Médio |
| "não é apenas... é" / "não são apenas... são" | 5+ | Médio |
| "articula/articulam" | 7+ | Médio |
| "emerge/emergem da prática" | 4+ | Baixo |
| "produzir/produção de conhecimento" | 6+ | Baixo |

**Observação:** Individualmente aceitáveis em texto acadêmico. A concentração é o problema. Sugiro variar as formulações nas ocorrências mais próximas entre si (ex: dentro do mesmo parágrafo ou seção adjacente).

### 2.2 Apresentação — "Resposta Sintética" menciona 3 operadores, não 4

`apresentacao.answer` (PT linha 71, EN linha 71): "...três operadores fundamentais: o instante, a borda e o fluxo". Omite "Afeto como eixo", que é o 4o operador em todas as outras seções (Conceitos, Filme, Estrutura, FAQ, Defense, Manual).

**Avaliação:** Isso pode ser intencional (a resposta sintética da dissertação original menciona apenas 3). Se o PDF da dissertação diz "três", manter. Se não, corrigir para consistência.

### 2.3 Conclusão — Google Drive link duplicado

`Conclusao.tsx` linhas 87 e 104: tanto "Publicações Relacionadas" quanto "Acervo do Processo" apontam para o mesmo link Google Drive (`https://drive.google.com/drive/folders/1z0nDmYxxyub0gbhzMo4bj1o3L4lXyiUw`). Se são acervos distintos, os links deveriam ser diferentes. Se é o mesmo Drive, considerar consolidar.

### 2.4 CITATION.cff — ORCID vazio

`CITATION.cff` linha 9: `orcid: ""`. Se o pesquisador tem ORCID, preencher. Se não, remover a linha para evitar campo vazio.

### 2.5 Filme — aspas manuais na citação de correspondência

`Filme.tsx` linha 171: `"{t("filme.correspondenceQuote")}"` adiciona aspas manualmente. O texto da tradução não contém aspas. Resultado visual correto, mas diferente da citação do Coletivo (que já vem com aspas no JSON, `coletivo.quote`). Inconsistência de convenção.

### 2.6 Sidebar — "LowMovie™" link aponta para "/" com sessionStorage reset

`AppSidebar.tsx` linha 55: clicar em "LowMovie™" navega para `/` e faz `sessionStorage.removeItem("lowmovie_intro_seen")`, forçando a Intro com vídeo. Comportamento intencional? Durante a defesa, se a banca clicar no título, verá o vídeo de intro novamente. Pode ser desejável ou não.

---

## 3. CORREÇÕES MENORES

### 3.1 Texto EN — qualidade geral
A tradução EN é de alta qualidade. Pontos verificados:
- Títulos de artigos mantidos em PT (correto — são títulos originais)
- Jargão do skate (VideoParte, Full-Length) mantido (correto)
- Tom acadêmico consistente
- Sem erros gramaticais detectados

### 3.2 Texto PT — qualidade geral
- Ortografia verificada: sem erros detectados
- Pontuação consistente: uso de ponto final, vírgulas, ponto-e-vírgula
- Aspas: uso consistente de aspas duplas retas em citações
- Acentuação: correta em todas as ocorrências verificadas

### 3.3 Tipografia e layout
- Todas as páginas: `max-w-5xl` — consistente
- Corpo: `text-justify` — consistente
- Defense: `text-left` — consistente com memória do projeto
- Hierarquia tipográfica: `text-lg` (títulos de seção), `text-base`/`text-sm` (corpo), `text-xs`/`text-[11px]` (micro) — consistente
- Espaçamento: `py-20 md:py-28` em todas as páginas de conteúdo — consistente

### 3.4 Cores e design system
- Paleta: roxo primário (300 60% 55%), fundo escuro (0 0% 4%) — consistente em todo o portal
- Cards: `bg-card/30`, `border-border`, `hover:border-primary/30` — padrão uniforme
- Botões header: `text-[11px]`, `tracking-[0.2em]`, `border border-border/50` — consistente
- Gradiente: `gradient-primary` e `gradient-text` definidos mas usados moderadamente

### 3.5 Mídia
- YouTube: todos usam `youtube-nocookie.com` — consistente
- Sandbox: `allow-scripts allow-same-origin allow-presentation allow-popups` — consistente
- Imagens: `grayscale hover:grayscale-0` — consistente com identidade visual
- Vídeos locais: 5 arquivos `.mp4` em `/videos/` — tamanho não auditável sem acesso ao servidor
- Stills: `aspect-video` + `object-cover` — consistente
- Galeria coletivo: `object-contain bg-muted/20` — consistente
- `fetchPriority="high"` na capa da dissertação — correto para LCP

### 3.6 Responsividade
- Grid responsivo (`md:grid-cols-*`) em todas as páginas
- Sidebar colapsável (`collapsible="icon"`)
- Lowbyrinth: `useIsMobile()` alterna para lista — correto
- Defense: `w-[84%]` para vídeos — funcional em desktop, pode ser apertado em tablet

### 3.7 Acessibilidade
- `index.html`: `lang="pt-BR"` — correto
- Layout: `document.documentElement.lang` atualizado dinamicamente — correto
- Botões: `aria-label` em toggle de som, sidebar trigger
- Alt text: presente em imagens relevantes
- Contraste: `text-muted-foreground` (55% luminosidade) sobre fundo 4% — limítrofe para WCAG AA (4.5:1). Verificar com ferramenta de contraste.

### 3.8 Metadados
- `<title>`: "LOWMOVIE™ E O LABIRINTO CRIATIVO" — correto
- `<meta description>`: completa e informativa
- Open Graph: título, descrição, imagem — presentes
- Twitter Card: `summary_large_image` — correto
- `robots.txt`: presente
- Canonical URL: `https://lowmovie.lovable.app` — correto

### 3.9 Performance
- YouTube embeds com `loading="lazy"` nas entrevistas — correto
- Defense: `VideoPreloader` para pré-carregar próximo vídeo — boa prática
- Capa: `fetchPriority="high"` — correto
- ConceptGraph: simulação com `requestAnimationFrame` limitada a 500 iterações — aceitável
- Fontes: Manrope via Google Fonts com `preconnect` — correto

---

## 4. COERÊNCIA CONCEITUAL

### 4.1 Framework conceitual — EXCELENTE

| Elemento | Consistência |
|---|---|
| 4 operadores estéticos (instante, borda, fluxo, afeto) | ✓ Conceitos, Filme, Estrutura, FAQ, Defense, Manual |
| Tríade metodológica (Afeto, Escuta, Improviso) | ✓ Metodologia, Defense, Manual |
| 3 movimentos (Corpo em Deriva, Coletivo em Baixo Relevo, Obra em Expansão) | ✓ Estrutura, organização geral |
| Pergunta de pesquisa | ✓ Apresentação (verbatim) |
| 4 objetivos específicos | ✓ Apresentação |
| 4 contribuições ao campo | ✓ Contribuições, Defense |
| 8 questões críticas | ✓ FAQ, Defense |
| 6 conceitos autorais | ✓ Conceitos, Defense, Manual |
| 5 ícones simbólicos | ✓ Manual (Rato, Hórus, Ishtar, Lakshmi, Caos) |
| Mapa de autores (8 autores, 4 campos) | ✓ Conceitos, ConceptGraph |

### 4.2 Exceção: "3 operadores" vs "4 operadores"
A Apresentação (resposta sintética) menciona "três operadores fundamentais" omitindo "Afeto como eixo". Todas as outras seções listam 4. Verificar se o PDF da dissertação diz "três" ou "quatro" na resposta sintética original.

### 4.3 Lowbyrinth — sem nó "Mapa"
O Lowbyrinth tem 9 nós mas a página Mapa não é um nó. Algumas derivas apontam para `/mapa` (Estrutura→Mapa, Conceitos→Mapa, Conclusão→Mapa). Consistente: o Mapa é destino de derivas, não ponto de partida. Decisão conceitual válida.

---

## 5. VOZ AUTORAL — CONSISTENTE

- Seções autorais (Estrutura, Metodologia, FAQ, Conclusão): primeira pessoa — "Apresento", "Afirmo", "Demonstro", "Adoto"
- Seções descritivas (Apresentação, Conceitos): terceira pessoa descrevendo a dissertação
- Defense Mode: primeira pessoa oral natural ("A dissertação que apresento hoje...")
- Procedimentos de campo: primeira pessoa ("Participo de sessões...")
- Manual do Método: voz institucional/manifesto ("A cidade é o campo de criação")

Nenhuma mudança abrupta de voz detectada.

---

## 6. DEFENSE MODE — FLUXO NARRATIVO

Sequência de 14 blocos (0-13):

```text
0  Tela preta (pausa dramática, 2s)
1  Vídeo de abertura + texto pós-vídeo
2  A Pesquisa (poster + síntese)
3  O Coletivo (imagem + texto)
4  Conceitos (6 cards)
5  Metodologia (tríade + imagem)
6  Fragmentos simbólicos (transição)
7  Teasers (6 vídeos sequenciais)
8  Trailer
9  Frames / fotografias
10 Contribuições (4 cards + imagem)
11 Questões Críticas (8 FAQ interativos)
12 Lowbyrinth™ / Mapa conceitual
13 Encerramento (vídeo)
```

**Progressão:** contexto → conceitos → método → obra → contribuições → defesa → síntese.

**Avaliação:** O fluxo é sólido para uma defesa de 20-30 minutos. O bloco 6 (Fragmentos) funciona como transição respiratória antes dos vídeos. O bloco 12 encerra com o mapa conceitual e uma frase de impacto ("É preciso entrar"). O bloco 13 fecha com vídeo — encerramento cinematográfico coerente com o projeto.

---

## 7. NAVEGAÇÃO ESTRUTURAL

- Sidebar: 11 itens em ordem lógica (Home → Apresentação → ... → Mapa) — clara
- NextSectionButton: presente em todas as páginas de conteúdo, fluxo linear coerente
- Lowbyrinth: 9 nós com derivas justificadas — navegação não-linear funcional
- Header: 3 botões (Sidebar trigger, Lowbyrinth, Manual do Método) + toggle de idioma
- Defense: acesso via triple-click na capa (Index.tsx linha 18) — Easter egg intencional

**Caminho de leitura para avaliação acadêmica:** Apresentação → Metodologia → Estrutura → Conceitos → Filme → Coletivo → Contribuições → Questões → Conclusão → Mapa. Claro e sequencial.

---

## 8. REPOSITÓRIO E PRESERVAÇÃO DIGITAL

### 8.1 Documentação
- `README.md`: completo, alinhado com o portal, conceitos corretos
- `DEFENSE_MODE.md`: instruções claras para a defesa
- `CITATION.cff`: presente (ORCID vazio — ver item 2.4)
- `PROJECT_STRUCTURE.md`: mapa preciso da arquitetura
- `LICENSE`: All Rights Reserved — correto
- `STYLE_GUIDE.md`: presente

### 8.2 Preservação digital
- O repositório Git funciona como arquivo versionado do projeto
- Documentos PDF em `/public/docs/` (dissertação, brandbooks, transcrições) — preservados no repo
- Imagens e vídeos locais em `/public/images/` e `/public/videos/` — preservados
- Dependência externa: YouTube (vídeos embeddados) — risco de indisponibilidade futura. Para preservação de longo prazo, considerar cópias locais ou mirror.
- Google Drive (acervo, publicação): link externo — risco de alteração/remoção. Considerar espelhar documentos essenciais no repositório.

---

## 9. CONSISTÊNCIA BILÍNGUE

### 9.1 Cobertura i18n

| Componente | PT | EN | Status |
|---|---|---|---|
| Portal principal (todas as páginas) | ✓ | ✓ | Completo |
| Lowbyrinth (navegação) | ✓ | ✓ | Completo |
| Manual do Método | ✓ | ✓ | Completo |
| Intro | ✓ | ✓ | Completo |
| 404 | ✓ | ✓ | Completo |
| Defense Mode | ✓ PT hardcoded | ✗ | Não localizado |
| ConceptGraph (nós/descrições) | ✓ PT hardcoded | ✗ | Não localizado |
| WelcomeOverlay (Zod message) | PT hardcoded | — | Sem impacto visual |

### 9.2 Equivalência conceitual EN-PT
Verificada: os textos EN mantêm fidelidade conceitual com o PT. Termos técnicos do skate preservados em inglês (VideoParte, Full-Length, Crew, Spot). Citações mantidas no idioma original quando relevante.

---

## RESUMO EXECUTIVO

| Dimensão | Status |
|---|---|
| Coerência conceitual | ✓ Excelente |
| Posicionamento acadêmico | ✓ Sólido |
| Qualidade textual PT | ✓ Boa |
| Qualidade textual EN | ✓ Boa |
| Voz autoral | ✓ Consistente |
| Naturalidade da escrita | ⚠ Aceitável (padrões repetitivos menores) |
| Navegação estrutural | ✓ Clara e lógica |
| Defense Mode | ✓ Fluxo narrativo sólido |
| Design visual | ✓ Consistente |
| Mídia | ✓ Consistente |
| Responsividade | ✓ Funcional |
| Performance | ✓ Aceitável |
| Acessibilidade | ⚠ Básica (contraste limítrofe) |
| Bilíngue | ⚠ Defense e ConceptGraph não localizados |
| Repositório | ✓ Completo |
| Preservação digital | ⚠ Dependências externas (YouTube, Drive) |

### Ações prioritárias por ordem de impacto:

1. **Corrigir NotFound link** (`/` → `/home`) — 1 linha
2. **Decidir sobre i18n do Defense Mode** — se EN não é necessário para a defesa, documentar a decisão
3. **Verificar "3 vs 4 operadores"** na Apresentação contra o PDF original
4. **Localizar ConceptGraph** se versão EN é relevante
5. **Preencher ou remover ORCID** no CITATION.cff
6. **Revisar padrões repetitivos** de escrita para naturalidade

O projeto está **pronto para a defesa** com a correção 1.3 como única obrigatória.

