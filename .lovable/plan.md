

# Ecossistema LowMovie™ · Lowbyrinth™ · Low Runner™ — Arquitetura de 3 Camadas

## Visão geral

Materializar no portal a arquitetura intelectual de 3 camadas distintas, fortalecendo a narrativa de defesa e formalizando a contribuição comunitária com proteção autoral coerente. Quatro frentes simultâneas, todas fiéis ao que já existe (sem inventar conteúdo novo).

---

## 1. Nova página `/ecossistema`

Página dedicada que articula as 3 camadas como sistema integrado.

### Estrutura
- **Header**: título "ECOSSISTEMA" + subtítulo "Três camadas, uma pesquisa-criação"
- **Intro curta** (2–3 linhas): explica que a pesquisa entrega não apenas uma dissertação, mas um ecossistema articulado de obra, método e plataforma
- **3 cards verticais grandes** (um por camada), cada um com:
  - Numeração (01 · 02 · 03) em `text-primary`
  - Nome com ™ e tag de natureza (OBRA · MÉTODO · PLATAFORMA)
  - Descrição de 3–4 linhas (verbatim da nossa conversa, fiel à dissertação)
  - Lista de artefatos concretos (ex: LowMovie → filme + dissertação + DOI Zenodo)
  - Status (Consolidado · Em formalização · Em expansão)
  - Link para a seção/página correspondente do portal
- **Diagrama relacional** simples (SVG): 3 círculos articulados mostrando como as camadas se conectam (LowMovie é o caso aplicado de Lowbyrinth, que é replicado via Low Runner)
- **Bloco final "Estratégia de circulação"**: explica modelo híbrido (open-source + método licenciado + marcas registradas)

### Navegação
- Adicionar `/ecossistema` à `AppSidebar` (entre Conclusão e Mapa, ou antes de Replicar)
- Texto i18n PT/EN completo

---

## 2. Marca ™ consistente em "Low Runner"

Auditoria global e padronização do uso de `Low Runner™` em todos os pontos onde aparece (atualmente só "Replicar" / "Replicate"):

- Renomear seção `/replicar` mantendo URL, mas exibindo "**LOW RUNNER™** — Replique este Portal"
- Atualizar entrada na sidebar
- Atualizar referências em `/conclusao` (Acervo) e `/ecossistema`
- Manter convenção já estabelecida em memória (`mem://content/branding-and-attribution`)
- Atualizar a memória de branding incluindo `Low Runner™`

---

## 3. Nova página `/licenca`

Documentação pública e elegante da estratégia de licença híbrida.

### Estrutura
- **Intro**: política de circulação aberta com proteção de autoria
- **3 blocos** correspondendo às 3 camadas:
  - **LowMovie™ (obra)** → © Castro Pizzano 2026 · Todos os direitos reservados · DOI Zenodo · Cita ABNT obrigatória
  - **Lowbyrinth™ (método)** → CC BY-NC-SA 4.0 · Uso acadêmico livre com atribuição · Uso comercial requer autorização · Marca registrada
  - **Low Runner™ (código/plataforma)** → MIT License · Código aberto e replicável · Marca registrada · Atribuição recomendada
- **Bloco "Marcas registradas"**: lista das 3 marcas com nota sobre processo INPI
- **Bloco "Contato para licenciamento comercial"**: e-mail/forma de contato
- Link para LICENSE no rodapé já existente

---

## 4. Bloco "Como citar este método" em `/conceitos` (ou `/metodologia`)

Adicionar instruções formais de citação **separadas** da citação da dissertação, posicionando Lowbyrinth™ como método citável independentemente.

### Conteúdo
- **Citação ABNT do método**:
  > PIZZANO, C. **Lowbyrinth™**: método de navegação não-linear para pesquisa-criação. In: _LowMovie™ e o Labirinto Criativo_. Curitiba: UNESPAR, 2026.
- **Citação ABNT do toolkit**:
  > PIZZANO, C. **Toolkit Pedagógico Lowbyrinth™**. Curitiba: UNESPAR, 2026. Disponível em: <link do PDF>.
- **Bloco breve**: "Lowbyrinth™ é um método autoral em desenvolvimento. Sua aplicação em contextos pedagógicos, de pesquisa ou criação é livre mediante atribuição (CC BY-NC-SA)."

Posição: ao final de `/metodologia` (após o Toolkit Pedagógico, antes do `NextSectionButton`) — junto da contribuição metodológica faz mais sentido que em `/conceitos`.

---

## Arquivos afetados

| Arquivo | Mudança |
|---|---|
| `src/pages/Ecossistema.tsx` | (novo) Página completa das 3 camadas |
| `src/pages/Licenca.tsx` | (novo) Página de licenciamento híbrido |
| `src/pages/Replicar.tsx` | Renomear visualmente para "Low Runner™ — Replique este Portal" |
| `src/pages/Metodologia.tsx` | Adicionar bloco "Como citar este método" no final |
| `src/pages/Conclusao.tsx` | Atualizar referência a Low Runner™ no Acervo |
| `src/components/AppSidebar.tsx` | Adicionar entradas `/ecossistema` e `/licenca`; renomear "Replicar" para "Low Runner" |
| `src/App.tsx` | Adicionar rotas `/ecossistema` e `/licenca` |
| `src/i18n/locales/pt.json` + `en.json` | Chaves completas para `ecossistema.*` e `licenca.*`, ajustes em `replicar.*` |
| `mem://content/branding-and-attribution` | Atualizar com Low Runner™ |
| `mem://features/ecosystem-architecture` | (nova memória) Documentar as 3 camadas como arquitetura oficial |
| `mem://index.md` | Adicionar referência |

---

## Princípios mantidos

- **Hallucination Zero**: zero conteúdo inventado — tudo deriva da dissertação, do que já existe no portal e da nossa conversa estratégica explícita
- **Identidade visual**: dark mode, `max-w-5xl`, Manrope, uppercase em títulos, `border-border`, `bg-card/30`
- **Bilíngue**: PT/EN completo desde o nascimento
- **Sidebar enxuta**: avaliar agrupamento se ficar muito longa
- **Footer**: nada muda; LICENSE já é referenciado

## Resultado esperado

- Narrativa de defesa **muito mais forte**: "entreguei um ecossistema, não só uma dissertação"
- Posicionamento público e juridicamente coerente das 3 marcas
- Base sólida para registros INPI pós-defesa (marcas + software)
- Contribuição comunitária com regras claras de uso e atribuição
- Lowbyrinth™ formalmente citável como método independente — base direta para o doutorado

