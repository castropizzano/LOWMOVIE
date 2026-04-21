

# Versão Imprimível + Documentação do Defense Mode

## Diagnóstico das duas questões

### 1. Versão imprimível do portal
**Faz sentido?** Sim, e muito — por três razões:
- **Banca**: alguns membros preferem ler em papel/PDF anotável
- **Preservação**: snapshot estático do portal complementa o DOI/Zenodo
- **Acessibilidade**: leitura offline, sem dependência de browser/JS

**Mas atenção a um trade-off honesto:** o portal é interativo por concepção (Lowbyrinth™, Mapa Conceitual, Defense Mode, vídeos, lightbox). Reduzi-lo a papel é traduzir uma obra navegável para um formato linear — perde-se exatamente o que o método propõe. A solução não é "imprimir tudo", é oferecer **um caderno-síntese impressível** que respeita a natureza de cada camada.

### 2. Defense Mode escondido
**Faz sentido documentar?** Sim — atualmente o `/defense` só é acessível via Easter egg (3 cliques na capa) e via `DEFENSE_MODE.md` no repositório. Para a banca e para o público, isso é opaco demais. O Defense Mode é uma **contribuição metodológica concreta** (uma forma de apresentar pesquisa-criação) e merece estar visível, sem perder o charme do acesso direto.

---

## Proposta

### Parte A — Versão imprimível: estratégia em 2 níveis

**Nível 1 — Print stylesheet (CSS `@media print`)**
Adicionar regras CSS globais em `src/index.css` que tornam **qualquer página do portal imprimível com qualidade**:
- Esconde sidebar, header, botões de navegação, lightboxes
- Converte fundo dark → fundo branco com texto preto (apenas no print)
- Expande accordions/tabs fechados (todo conteúdo visível)
- Quebras de página inteligentes (`page-break-inside: avoid` em cards, títulos não órfãos)
- URLs expandidas após links: `a[href]::after { content: " (" attr(href) ")" }`
- Imagens em escala apropriada
- Footer com créditos + URL canônica em cada página
- Funciona com Ctrl+P em qualquer rota → PDF nativo do browser

**Nível 2 — Caderno-Síntese imprimível (PDF curado)**
Gerar `public/docs/lowmovie_caderno_sintese.pdf` (8–12 páginas) via `reportlab`, contendo o **essencial textual** do portal organizado para leitura linear:
1. Capa institucional
2. Resumo (já existe na dissertação)
3. Os 3 capítulos em formato condensado (Apresentação, Coletivo, Filme — extratos)
4. Diagrama do método (concêntrico) + 6 conceitos operadores
5. Estrutura da dissertação
6. Conclusão sintética
7. Mapa do portal (lista de URLs com QR code para o portal completo)
8. Créditos, DOI, licenças, marcas

Disponível para download na nova página `/imprimir` e linkado de `/conclusao`.

### Parte B — Documentar o Defense Mode

Criar página `/defense-mode` (página *sobre* o Defense Mode, não o modo em si) que explica:
- **O que é**: dispositivo de apresentação para a defesa de mestrado
- **Por que existe**: argumento metodológico — apresentar pesquisa-criação requer dispositivo próprio, não slides PowerPoint
- **Como acessar**: dois caminhos
  - **Discreto** (mantém Easter egg): "três cliques na capa da home"
  - **Direto**: botão grande `Acessar Defense Mode →` apontando para `/defense`
- **Como funciona**: 14 blocos sequenciais, navegação por teclado (`→`, `←`, `Esc`, `Home`, `End`)
- **Quando foi usado**: contexto da defesa (UNESPAR · março 2026 · banca)
- **Recomendações técnicas**: tela cheia, 1920×1080, browser moderno
- **Captura de tela** (1 thumbnail estático do bloco 0)

Adicionar entrada na sidebar (perto de Ecossistema/Replicar) e link em `/conclusao`.

### Parte C — Nova página `/imprimir`

Página dedicada explicando as duas opções de leitura impressa:
1. **Imprimir qualquer página agora** (Ctrl+P / Cmd+P) — instrução visual
2. **Caderno-Síntese em PDF** — botão de download
3. **Dissertação completa em PDF** — link para o PDF original (já existe)

Texto curto explicando a filosofia: "O portal é navegável por concepção. Estas versões impressas são sínteses, não substitutos."

---

## Arquivos afetados

| Arquivo | Mudança |
|---|---|
| `src/index.css` | Adicionar bloco `@media print` global |
| `src/pages/DefenseModeAbout.tsx` | (novo) Página explicando o Defense Mode |
| `src/pages/Imprimir.tsx` | (novo) Página de versões imprimíveis |
| `public/docs/lowmovie_caderno_sintese.pdf` | (novo) PDF curado de 8–12 páginas via reportlab |
| `src/components/AppSidebar.tsx` | Adicionar entradas `/defense-mode` e `/imprimir` |
| `src/App.tsx` | Adicionar rotas |
| `src/pages/Conclusao.tsx` | Adicionar atalhos para Defense Mode e Caderno |
| `src/i18n/locales/pt.json` + `en.json` | Chaves novas para `defenseMode.*` e `imprimir.*` |
| `mem://features/defense-mode` | Atualizar memória registrando documentação pública |
| `mem://features/printable-version` | (novo) Documentar estratégia de impressão |
| `mem://index.md` | Adicionar referências |

---

## Princípios mantidos

- **Hallucination Zero**: caderno-síntese usa **apenas** texto já validado no portal/dissertação
- **Easter egg preservado**: triple-click na capa continua funcionando
- **Identidade visual**: PDF caderno segue mesma estética do toolkit (dark/Swiss design — ou versão clara para leitura impressa, decisão feita na implementação)
- **Sidebar enxuta**: avaliar agrupamento se ficar pesada (ex.: agrupar `/imprimir` + `/defense-mode` + `/licenca` sob "Recursos")
- **Bilíngue PT/EN** integral
- **QA obrigatório**: PDF caderno passa por inspeção visual página a página

---

## Resultado esperado

- **Banca pode imprimir** qualquer seção com Ctrl+P e ter uma versão limpa, profissional, em preto-branco
- **Caderno-Síntese** circula como artefato impressível autônomo (com QR code de volta ao portal)
- **Defense Mode deixa de ser secreto** — vira contribuição metodológica documentada e referenciável
- **Easter egg permanece** — quem descobre por acaso ainda tem o prazer da descoberta
- **Reforço da narrativa de defesa**: portal navegável + caderno impresso + Defense Mode = três modos de leitura coerentes da mesma pesquisa

