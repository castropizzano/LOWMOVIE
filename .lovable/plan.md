# Palestra 17/06 — "Lowbyrinth: Quando a Pesquisa Me Encontrou"

**Contexto:** palestra de 90min (08:30–10:00) para graduandos do PPGCINEAV/UNESPAR que estão iniciando TCC. A professora pediu para você falar de percurso, formação, e dos **pilares de pesquisa** (problema, pergunta, estado da arte, objetivos, metodologia, estrutura) — exatamente o que eles precisam aprender para o próprio TCC.

**Decisão:** o portal vira o ambiente da palestra (substitui slides). Criar uma rota nova `/palestra` no LowMovie™ Portal, linear, didática, com 9 blocos cronometrados, reaproveitando conteúdo existente da dissertação. Você navega ao vivo, mostrando em tempo real "como uma pesquisa é construída do início ao fim".

---

## Roteiro dos 9 blocos (90min)

```text
BLOCO                                            TEMPO    FONTE NO PORTAL/PDF
─────────────────────────────────────────────────────────────────────────────
0. Abertura — quem fala, de onde fala            5 min    Home + Lugar de Fala (/apresentacao)
1. Trajetória — do chão da rua ao mestrado       18 min   Timeline Lattes (/timeline) + percurso
2. O encontro — quando a pesquisa me encontrou   8 min    LowPressure™ + LowMovie™ (/coletivo, /filme)
3. Problema de pesquisa — como contornei         10 min   /apresentacao (Justificativa + Pergunta)
4. Pergunta de pesquisa (enunciado)              5 min    /apresentacao (Pergunta Central)
5. Estado da arte — mapeamento                   10 min   PDF Cap. introdutório + referências
6. Objetivos — geral e específicos               7 min    /apresentacao (4 objetivos específicos)
7. Metodologia — Lowbyrinth™ como método         15 min   /metodologia (toolkit + diagrama)
8. Estrutura da dissertação (3 movimentos)       7 min    /estrutura
9. Resultados + Q&A                              5 min    /conclusao + /ecossistema
─────────────────────────────────────────────────────────────────────────────
TOTAL                                            90 min
```

Cada bloco tem ancoragem direta numa página/seção existente do portal — você navega ao vivo, fala em cima, e o portal funciona como prova material da pesquisa.

---

## O que será construído

### 1. Nova rota `/palestra` (página index da palestra)

- Capa com título: **"Lowbyrinth: Quando a Pesquisa Me Encontrou"**
- Subtítulo: "Palestra para graduandos iniciantes em TCC — PPGCINEAV/UNESPAR, 17/06/2026"
- Lista dos 9 blocos, cada um como card linkando para a rota correspondente
- Botão "Iniciar palestra" que entra no modo guiado (rota `/palestra/1`)

### 2. Modo guiado `/palestra/:bloco` (1–9)

- Header fixo discreto: número do bloco, título, tempo sugerido (ex: "Bloco 3/9 · 10 min")
- Conteúdo: 1 a 3 parágrafos didáticos novos (escritos do PDF, zero alucinação) + **embed da página real do portal** (ou link grande "Abrir /apresentacao em nova aba")
- Rodapé: ← Bloco anterior | Próximo bloco →
- Atalhos de teclado: setas ←/→ para navegar (reaproveita lógica do Defense Mode)

### 3. Conteúdo didático novo (apenas reescrita pedagógica do PDF)

Para cada bloco, um parágrafo curto explicando ao graduando **o que é aquele pilar** + **como eu cheguei nele**. Exemplo bloco 3 (Problema):

> "O problema de pesquisa não nasce pronto — ele se forma quando você percebe uma fricção entre o que vive e o que a literatura cobre. No meu caso, a fricção era: o coletivo LowPressure™ produz há 15 anos uma poética audiovisual situada na subcultura do skate, mas essa produção raramente é lida como pesquisa-criação acadêmica. O problema virou: como narrar academicamente um processo coletivo, afetivo e implicado, sem traí-lo?"

Todos os parágrafos extraídos verbatim ou parafraseados estritamente do PDF (introdução, justificativa, capítulos 1–3, considerações finais).

### 4. Entrada no menu (opcional, controlável)

- Adicionar `/palestra` ao `AppSidebar` como item discreto, ou deixar acessível apenas por URL direta (mais limpo, evita poluir o menu permanente). **Recomendo URL direta** — você abre `lowmovie.lovable.app/palestra` no projetor no dia.

### 5. i18n

- Adicionar chaves PT/EN em `src/i18n/locales/{pt,en}.json` sob namespace `palestra.*`
- EN traduzido para futura reusabilidade

### 6. SEO

- `SeoHead` com `noindex` (palestra é evento pontual, não deve ranquear)
- Title: "Palestra · Lowbyrinth: Quando a Pesquisa Me Encontrou · LowMovie™"

---

## Detalhes técnicos

- **Arquivos novos:**
  - `src/pages/Palestra.tsx` — index/capa
  - `src/pages/PalestraBloco.tsx` — modo guiado com `useParams`
  - `src/data/palestra.ts` — array dos 9 blocos `{ id, titulo, tempo, paragrafos[], rotaPortal, atalhoTexto }`
- **Rotas em `src/App.tsx`:** `/palestra` e `/palestra/:bloco`
- **Reuso:** componentes `Layout`, `SectionTitle`, `AnimatedSection`, `NextSectionButton`, `SeoHead` já existentes
- **Navegação por teclado:** copiar padrão do `Defense.tsx` (setas ←/→)
- **Estilo:** segue Layout Standards (max-w-5xl, text-justify, Manrope, dark theme, semantic tokens) — Hallucination Zero, sem inventar dados

---

## O que NÃO será feito

- ❌ Não criar slides em PDF/Keynote separados (o portal É a apresentação)
- ❌ Não duplicar conteúdo: a página `/palestra/4` referencia/embeda `/apresentacao`, não recopia
- ❌ Não modificar `/apresentacao`, `/metodologia`, `/estrutura`, etc. — o conteúdo existente fica intacto
- ❌ Não adicionar ao menu principal por padrão (você decide depois)

---

## Entregáveis adicionais (fora do código)

Junto com o build, te entrego em `/mnt/documents/`:

1. `**palestra_roteiro_castro.pdf**` — roteiro impresso A4 com os 9 blocos, falas-âncora, tempos, e URLs para você ter em mãos no dia (plano B caso a internet caia)
2. `**palestra_checklist_castro.md**` — checklist de 24h antes (testar projetor, abrir abas, levar pendrive com PDF da dissertação, etc.)

---

Para o **bloco 1 (Trajetória — 18min)**, puxe os dados da **Timeline Lattes** já existente em `/timeline` (filtros por categoria) e escreva um texto narrativo novo "Do chão da rua à pós-graduação" baseado nos AGRADECIMENTOS + INTRODUÇÃO – RASTROS NAS RUAS do PDF