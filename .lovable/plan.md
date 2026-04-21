

# Toolkit Pedagógico da Metodologia — Integração ao Portal

## Visão geral

O toolkit é uma síntese pedagógica excelente da metodologia. Ele **complementa** (não duplica) a página `/metodologia` atual, adicionando: 5 etapas do método híbrido, espiral cognitiva, 4 arquétipos criativos, 10 conceitos operadores e aplicações pedagógicas. É material valioso para a banca e para a comunidade.

**Avaliação editorial**: conteúdo coerente com a dissertação, fiel aos eixos já presentes no portal (afeto, escuta, improviso), e expande com camadas didáticas inéditas. Aprovado para integração.

## Estratégia de integração (3 frentes)

### 1. Nova seção "Toolkit Pedagógico" na página `/metodologia`

Inserir **ao final** da página atual (antes do `NextSectionButton`), uma nova seção visual com:

- **Título**: "Toolkit Pedagógico — Metodologia em 5 Etapas"
- **Intro curta**: 2 linhas explicando que o toolkit sintetiza a metodologia em formato aplicável
- **5 cards numerados** (01 Observação · 02 Co-criação · 03 Documentação · 04 Reflexão · 05 Expansão) — grid responsivo
- **Bloco "Espiral Cognitiva"**: card destacado com o diagrama (texto + setas Unicode `prática → reflexão → formulação → expansão ↻`)
- **Bloco "4 Arquétipos Criativos"**: grid 2x2 (VOID · NOISE · SIGNAL · STRUCT) com traço e referências
- **Bloco "10 Conceitos Operadores"**: lista compacta com ícone `→` por item
- **Bloco "Aplicação Pedagógica"**: 4 contextos (sala de aula, oficinas, dispositivo reflexivo, pesquisa acadêmica)
- **CTA Download PDF**: botão destacado "Baixar Toolkit em PDF" linkando ao arquivo

### 2. Disponibilizar PDF para download

- Copiar `toolkit_metodologia_castro.pdf` para `public/docs/toolkit_metodologia_castro.pdf`
- Botão de download visível na nova seção e também referenciado em **Conclusão → Acervo** (junto com dissertação, memorial, certificados)

### 3. Visual: fidelidade à identidade do portal

- Dark mode, tipografia uppercase, `max-w-5xl`
- Cards com `border border-border rounded-lg bg-card/30` e hover `border-primary/30`
- Numeração grande (01, 02...) em `text-primary` para as 5 etapas
- Arquétipos com tag colorida sutil por tipo (VOID = silêncio, NOISE = caos, SIGNAL = padrão, STRUCT = forma)
- Animações com `AnimatedSection` (delays escalonados)
- Texto justificado nos parágrafos longos

## Arquivos a modificar

| Arquivo | Mudança |
|---|---|
| `public/docs/toolkit_metodologia_castro.pdf` | (novo) PDF copiado dos uploads |
| `src/pages/Metodologia.tsx` | Inserir nova seção "Toolkit Pedagógico" antes do botão de navegação |
| `src/i18n/locales/pt.json` | Chaves `metodologia.toolkit.*` (intro, 5 etapas, espiral, 4 arquétipos, 10 conceitos, 4 aplicações, CTA download) |
| `src/i18n/locales/en.json` | Tradução das mesmas chaves |
| `src/pages/Conclusao.tsx` | Adicionar botão "Toolkit Pedagógico (PDF)" na seção Acervo |

## Conteúdo (verbatim do PDF)

Todo o conteúdo será transcrito **fiel ao PDF** (política Hallucination Zero):
- Definições dos 3 eixos, 3 procedimentos, 5 etapas, 4 arquétipos, 10 conceitos, 4 aplicações pedagógicas — exatamente como redigidas no toolkit
- Referências mantidas
- Créditos preservados (DOI, banca, programa)

## Resultado esperado

- Página `/metodologia` ganha uma camada didática rica sem perder a estrutura atual
- Toolkit fica disponível para download em PDF (contribuição pública concreta)
- Reforça o argumento de "metodologia como dispositivo aberto" alinhado à página `/replicar`
- Material extra forte para defesa: demonstra pensamento metodológico sintetizado e replicável

