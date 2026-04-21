

# Toolkit em PDF — Versão Visual e Didática

## Diagnóstico

O PDF atual (`public/docs/toolkit_metodologia_castro.pdf`) é fiel ao conteúdo da dissertação, mas visualmente é **texto corrido em colunas** — sem a riqueza didática do `MethodDiagram` (concêntrico, simbólico, espacial) presente no portal. Falta a camada visual que torna o método memorável e replicável.

## Proposta

Reescrever o PDF como um **caderno visual de 6–7 páginas**, cada página dedicada a um bloco do método, usando linguagem gráfica análoga ao Manual do Método e à identidade do portal (dark/sóbrio, geometria precisa, tipografia uppercase, espaço respirado).

## Estrutura visual proposta (6 páginas)

### Página 1 — Capa
- Fundo dark (#0a0a0a)
- Título monumental em uppercase: **"TOOLKIT PEDAGÓGICO"**
- Subtítulo: *Metodologia da Pesquisa — Castro Pizzano (2026)*
- Marca tipográfica `LOWMOVIE™` no rodapé
- Bloco mínimo: DOI, programa, banca

### Página 2 — Diagrama Concêntrico dos 3 Eixos
- Réplica em PDF do `MethodDiagram` do portal: três círculos concêntricos
- Centro: **PESQUISA-CRIAÇÃO IMPLICADA**
- Anel interno: **AFETO · ESCUTA · IMPROVISO** (3 setores)
- Anel externo: **VIVÊNCIA SITUADA · CONVIVÊNCIA CRIATIVA · ESCUTA PARTILHADA**
- Legenda mínima abaixo

### Página 3 — Espiral Cognitiva (Bloom/Ferraz-Belhot)
- Espiral desenhada vetorialmente (curva de Arquimedes)
- 6 nós ao longo da espiral: **LEMBRAR → ENTENDER → APLICAR → ANALISAR → CRIAR → AVALIAR**
- Ícones geométricos mínimos (círculo, triângulo, quadrado)
- Citação curta da referência (Ferraz & Belhot, 2010)

### Página 4 — 3 Operadores Poéticos do Olhar
- Grid horizontal de 3 blocos: **INSTANTE · BORDA · FLUXO**
- Cada bloco: símbolo geométrico grande + nome uppercase + descrição curta de 2–3 linhas
- Referência ao Cap. 1.1 da dissertação no rodapé

### Página 5 — 6 Conceitos Operadores
- Grid 2×3 de cards minimalistas
- Lowbyrinth™ · Corpo-câmera · Fabulação · Glitch como linguagem · D.I.Y. · Pesquisa-criação implicada
- Cada card: número (01–06) grande em outline, nome, 1 linha de definição

### Página 6 — Aplicações Pedagógicas + Créditos
- Lista das aplicações reais (Branding, Produção Audiovisual, oficinas, curadorias)
- Bloco de créditos final: autora, orientação, programa, DOI, licença, link do portal

## Identidade visual (todas as páginas)

- **Fundo**: dark `#0a0a0a` ou off-black
- **Texto**: branco/cinza claro com hierarquia (títulos uppercase letter-spacing largo, corpo regular)
- **Geometria**: linhas finas (0.5pt), círculos perfeitos, sem decoração supérflua
- **Tipografia**: Helvetica/Inter (substituto Manrope no reportlab)
- **Margens**: generosas, espaço respirado tipo Swiss design
- **Numeração de página**: discreta no rodapé (`02 / 06`)
- **Marca de rodapé** em todas as páginas: `LOWMOVIE™ — TOOLKIT PEDAGÓGICO`

## Implementação técnica

### Ferramentas
- `reportlab` para layout e tipografia
- Desenho vetorial nativo (`canvas.circle`, `canvas.line`, `canvas.bezier`) — sem imagens raster
- Espiral via parametrização matemática (curva de Arquimedes ponto a ponto)

### Arquivo afetado
- `public/docs/toolkit_metodologia_castro.pdf` — regenerado (mesmo nome, não quebra links em `/conclusao` e `/metodologia`)

### QA visual obrigatório
- Converter PDF em JPG via `pdftoppm -r 150`
- Inspecionar **todas as 6 páginas** uma a uma
- Verificar: margens, contraste, alinhamentos, sem overflow, sem sobreposição
- Iterar até zero defeitos

## Conteúdo: fidelidade absoluta

Todo o texto será **verbatim** do conteúdo já validado em `mem://project/content-structure/methodology-toolkit` — nenhum termo novo, nenhuma reinterpretação. A mudança é **exclusivamente visual/didática**.

## Resultado esperado

Um PDF que parece um **caderno de método de design suíço** ou um **diagrama de pesquisa publicado em journal acadêmico** — denso visualmente, leve textualmente, didaticamente memorável, coerente com a estética do portal e do Manual do Método. Material que a banca pode imprimir, anotar e que outros pesquisadores podem efetivamente usar.

