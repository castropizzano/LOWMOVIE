

## Análise de Sequência — Nova subseção na página do Filme

Inserir uma nova seção completa em `src/pages/Filme.tsx`, posicionada entre a galeria "Stills do Filme" e o bloco "Soundtrack". A seção será composta por 3 blocos integrados que funcionam como evidência empírica da pesquisa.

---

### Estrutura dos 3 blocos

**Bloco 1 — Sequência em Quadros**
- Grade responsiva com 14 placeholders de quadros sequenciais + 1 fotografia final
- Layout: 2 linhas de 7 quadros (`grid-cols-7` em desktop, `grid-cols-4` em mobile) com aspect-ratio video
- Terceiro bloco: fotografia final isolada, aspect-ratio portrait (`aspect-[3/4]`), maior escala, centralizada
- Legenda geral abaixo da grade em `text-xs text-muted-foreground`
- Cada quadro é um placeholder clicável (preparado para receber imagens reais e abrir em lightbox/dialog futuramente)
- Sem animações excessivas — apenas o `AnimatedSection` padrão de fade-in

**Bloco 2 — Texto Analítico**
- Subtítulo: `text-lg font-semibold uppercase tracking-wide` (nível SUBTÍTULO do sistema tipográfico)
- 6 parágrafos de corpo em `text-base text-foreground/80 leading-relaxed` dentro de `max-w-3xl space-y-4`
- Lista dos operadores conceituais com travessão, sem bullet points, em `text-sm font-semibold text-foreground`
- Parágrafo final de síntese em corpo normal
- Texto exatamente como fornecido pelo usuário

**Bloco 3 — Conexão com a Tese**
- Caixa destacada com `border border-primary/20 bg-primary/5 rounded-lg p-8`
- Primeira frase em `text-base font-semibold text-foreground` (destaque)
- Segunda frase em `text-base font-semibold text-primary` (ênfase)
- Parágrafo explicativo em `text-sm text-foreground/80`
- Frase final "LowMovie™ é o registro dessa condição." em `text-sm font-semibold text-primary`

---

### Arquivo a modificar

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Filme.tsx` | Inserir nova seção "Análise de Sequência" entre a galeria de stills (linha ~123) e o bloco Soundtrack (linha ~126). Três `AnimatedSection` wrappers para os 3 blocos, com delays progressivos. |

Nenhum novo arquivo, rota ou dependência necessários. A seção usa os mesmos componentes existentes (`AnimatedSection`, `SectionTitle` não necessário pois usa subtítulo inline). Os placeholders de imagem seguem o mesmo padrão visual dos stills existentes, prontos para substituição por imagens reais.

