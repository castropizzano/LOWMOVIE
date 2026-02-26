

## Plano: Texto Justificado + Fotos sem Zoom na Largura Real

### Resumo

Três alterações transversais no site:

1. **Textos de corpo justificados** (`text-justify`) em todos os blocos de parágrafos, preenchendo a largura total do container. Exclui: titulos, subtitulos, labels de cards, legendas e citações.

2. **Foto final da sequência** ocupa a largura total do corpo de texto (`max-w-3xl` removido, ou substituído pela largura do container `max-w-5xl`).

3. **Imagens das galerias** exibidas na largura real (sem `object-cover` forçando crop, sem efeito de zoom no hover `group-hover:scale-105`).

---

### Detalhes Técnicos

#### 1. Texto justificado — Global via CSS

Adicionar em `src/index.css` uma utility class ou aplicar diretamente nos blocos de corpo de texto. A abordagem mais limpa: adicionar `text-justify` nos containers de parágrafos de cada página.

**Arquivos a modificar** (blocos `<div>` com `space-y-4 text-base ... leading-relaxed`):

| Arquivo | Linhas (aprox.) | Mudança |
|---------|----------------|---------|
| `src/pages/Filme.tsx` | 91, 159 | Adicionar `text-justify` ao `<div>` wrapper dos parágrafos |
| `src/pages/Filme.tsx` | 190-191 | Adicionar `text-justify` no bloco conceitual (parágrafo descritivo) |
| `src/pages/Coletivo.tsx` | 28 | Adicionar `text-justify` ao `<div>` wrapper |
| `src/pages/Apresentacao.tsx` | 13 | Adicionar `text-justify` |
| `src/pages/Metodologia.tsx` | 35 | Adicionar `text-justify` |
| `src/pages/Conceitos.tsx` | 71 | Adicionar `text-justify` |
| `src/pages/Contribuicoes.tsx` | 36 | Adicionar `text-justify` |
| `src/pages/Estrutura.tsx` | 50 | Adicionar `text-justify` |
| `src/pages/FAQ.tsx` | 54 | Adicionar `text-justify` |
| `src/pages/Conclusao.tsx` | 44, 50 | Adicionar `text-justify` |

**Não afetados**: `SectionTitle`, labels de cards (`text-xs uppercase`), subtítulos (`text-lg uppercase`), glossário, operadores conceituais.

#### 2. Foto final — Largura total do container

Em `src/pages/Filme.tsx` linha 145, remover `max-w-3xl` do wrapper da foto final para que ela ocupe toda a largura disponível do container (`max-w-5xl`).

#### 3. Imagens sem zoom e com largura natural

Em `src/components/ImageLightbox.tsx`:
- **Remover** `group-hover:scale-105` (linha 34) — elimina o efeito de zoom no hover
- **Remover** `bg-black/0 group-hover:bg-black/10` overlay (linha 39) — elimina o escurecimento
- Manter `object-cover` pois é necessário para manter a proporção nas grades, mas as imagens já estão com aspecto correto

Se a intenção é mostrar a largura real sem crop: substituir `object-cover` por `object-contain` e remover `aspectRatio` fixo nas galerias. Porém isso quebraria o alinhamento da grade. A interpretação mais adequada: remover apenas o zoom animado e manter o layout da grade intacto.

---

### Arquivos a modificar

| Arquivo | Tipo de mudança |
|---------|----------------|
| `src/components/ImageLightbox.tsx` | Remover hover zoom + overlay |
| `src/pages/Filme.tsx` | `text-justify` nos blocos de texto + foto final full-width |
| `src/pages/Coletivo.tsx` | `text-justify` nos blocos de texto |
| `src/pages/Apresentacao.tsx` | `text-justify` |
| `src/pages/Metodologia.tsx` | `text-justify` |
| `src/pages/Conceitos.tsx` | `text-justify` |
| `src/pages/Contribuicoes.tsx` | `text-justify` |
| `src/pages/Estrutura.tsx` | `text-justify` |
| `src/pages/FAQ.tsx` | `text-justify` |
| `src/pages/Conclusao.tsx` | `text-justify` |

