

## Auditoria de Largura — Diagnóstico Completo e Plano de Padronização

### Largura Padrão Definida

O padrão dominante no site é: `container mx-auto px-4 max-w-5xl` (equivale a **64rem / 1024px**).

---

### Inventário de Inconsistências

#### A. Containers Externos (nível de página)

| Página | Container Atual | Problema |
|--------|----------------|----------|
| **Apresentacao** | `max-w-4xl` (56rem) | 8rem mais estreito que o padrão |
| **Estrutura** | `max-w-6xl` (72rem) | 8rem mais largo que o padrão |
| **FAQ** | `max-w-3xl` (48rem) | 16rem mais estreito que o padrão |
| **Conclusao** | `max-w-3xl` (48rem) | 16rem mais estreito — layout cinético/centrado, mas os parágrafos finais deveriam seguir o padrão |
| Index | sem max-w fixo | OK — hero page com layout centrado, exceção legítima |
| Filme, Coletivo, Conceitos, Metodologia, Contribuicoes | `max-w-5xl` | OK — padrão correto |

#### B. Blocos Internos com `max-w-3xl` (48rem) — Parágrafos Estreitados

| Arquivo | Linha | Elemento | Causa |
|---------|-------|----------|-------|
| **Filme.tsx** | 91 | Div de descrição do filme | `max-w-3xl` no div |
| **Filme.tsx** | 159 | Div de texto analítico da sequência | `max-w-3xl` no div |
| **Coletivo.tsx** | 28 | Div de texto principal do coletivo | `max-w-3xl` no div |
| **Coletivo.tsx** | 73 | Parágrafo do vocabulário | `max-w-3xl` no `<p>` |
| **Conceitos.tsx** | 71 | Div introdutória de conceitos | `max-w-3xl` no div |
| **Metodologia.tsx** | 48 | Div introdutória de metodologia | `max-w-3xl` no div |
| **Estrutura.tsx** | 55 | Parágrafo introdutório | `max-w-3xl` no `<p>` |
| **Contribuicoes.tsx** | 36 | Parágrafo introdutório | `max-w-3xl` no `<p>` |

#### C. Conclusão — Blocos Internos Adicionais

| Linha | Elemento | Causa |
|-------|----------|-------|
| 44 | Parágrafo síntese | `max-w-2xl mx-auto` |
| 49 | Parágrafo método | `max-w-2xl mx-auto` |
| 56 | Parágrafo final | `max-w-2xl mx-auto` |
| 71 | Caixa de citação | `max-w-xl mx-auto` |

---

### Decisão de Design

**Conclusão** é uma página cinética/centrada com animações sequenciais e texto centralizado. Alterar para `max-w-5xl` quebraria o efeito visual intencional. **Proposta**: manter o container `max-w-3xl` centrado, mas expandir os parágrafos internos de `max-w-2xl` para `max-w-3xl` (eliminando a restrição dupla). A caixa de citação passa de `max-w-xl` para `max-w-2xl`.

Todas as demais páginas: container externo padronizado em `max-w-5xl`, remoção de todos os `max-w-3xl` internos nos blocos de parágrafos.

---

### Plano de Correções — 10 Arquivos

| Arquivo | Correção |
|---------|----------|
| `Apresentacao.tsx` L9 | `max-w-4xl` → `max-w-5xl` |
| `Estrutura.tsx` L55 | `max-w-6xl` → `max-w-5xl` |
| `FAQ.tsx` L50 | `max-w-3xl` → `max-w-5xl` |
| `Filme.tsx` L91 | Remover `max-w-3xl` do div |
| `Filme.tsx` L159 | Remover `max-w-3xl` do div |
| `Coletivo.tsx` L28 | Remover `max-w-3xl` do div |
| `Coletivo.tsx` L73 | Remover `max-w-3xl` do `<p>` |
| `Conceitos.tsx` L71 | Remover `max-w-3xl` do div |
| `Metodologia.tsx` L48 | Remover `max-w-3xl` do div |
| `Estrutura.tsx` L55 | Remover `max-w-3xl` do `<p>` (após mudar container) |
| `Contribuicoes.tsx` L36 | Remover `max-w-3xl` do `<p>` |
| `Conclusao.tsx` L44,49,56 | `max-w-2xl` → `max-w-3xl` |
| `Conclusao.tsx` L71 | `max-w-xl` → `max-w-2xl` |

**Total**: 13 correções em 8 arquivos. Nenhuma alteração em hierarquia, espaçamento ou identidade visual.

### Relatório Final Esperado

- **Largura padrão**: `max-w-5xl` (64rem / 1024px)
- **Exceções mantidas**: Index (hero), Conclusão (centrada em `max-w-3xl`)
- **Seções ajustadas**: Apresentação, Estrutura, FAQ (containers), Filme, Coletivo, Conceitos, Metodologia, Contribuições, Conclusão (blocos internos)
- **Uniformidade desktop e mobile**: Garantida pelo `container mx-auto px-4` + Tailwind responsive — sem breakpoints customizados afetados

