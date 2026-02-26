

## Redesign Tipográfico — Manrope + Princípios de Gestalt

### Diagnóstico do estado atual

O site usa duas famílias (Oswald condensada + Inter) e apresenta uma "salada" tipográfica significativa:

```text
ESCALA ATUAL (caótica):
text-[10px]  ← micro ilegível
text-xs      ← labels, captions, referências
text-sm      ← corpo em cards, descrições  
text-base    ← corpo principal (às vezes)
text-lg      ← corpo principal (às vezes)
text-xl      ← subtítulos (às vezes)
text-2xl     ← títulos internos
text-3xl     ← SectionTitle mobile
text-4xl     ← Index subtítulo
text-5xl     ← SectionTitle desktop / Index
text-6xl     ← Index título mobile
text-7xl     ← Index título
text-8xl     ← Index título desktop

PESOS MISTURADOS: font-light, font-medium, font-semibold, font-bold
TRACKING MISTURADO: tracking-tight, tracking-wide, tracking-wider, tracking-widest, tracking-[0.3em], tracking-[0.2em]
OPACIDADES MISTURADAS: /30, /40, /50, /55, /60, /70, /75, /80, /85, /90
```

Isso viola os princípios de Gestalt (similaridade, proximidade, continuidade) e gera ruído visual.

---

### Sistema tipográfico proposto — Manrope única

```text
ESCALA REDUZIDA (7 níveis, disciplinada):

HERO       → text-4xl md:text-6xl  · font-bold    · uppercase tracking-tight
TÍTULO     → text-2xl md:text-3xl  · font-bold    · uppercase tracking-tight
SUBTÍTULO  → text-lg              · font-semibold · uppercase tracking-wide
LABEL      → text-xs              · font-semibold · uppercase tracking-widest · text-primary
CORPO      → text-base            · font-normal   · leading-relaxed
CORPO SM   → text-sm              · font-normal   · leading-relaxed
CAPTION    → text-xs              · font-normal   · text-muted-foreground
```

Eliminar `text-[10px]` completamente. Eliminar `font-light`. Reduzir opacidades a 3 níveis: `foreground`, `foreground/80`, `muted-foreground`.

---

### Gestalt aplicada ao layout

**Similaridade**: Todos os cards usam a mesma estrutura visual (label + título + corpo). Padronizar padding, border-radius e spacing internos.

**Proximidade**: Espaçamento entre seções padronizado em `mt-16` (dentro da página) e `py-20 md:py-28` (seção principal). Eliminar variações aleatórias (`mt-8`, `mt-12`, `mt-20`).

**Continuidade**: Linha decorativa primária padronizada (`h-px w-16 bg-primary/40`) apenas no SectionTitle — remover linhas decorativas aleatórias em outros locais.

**Hierarquia**: Máximo 3 níveis de texto por seção (título, corpo, caption). Nunca 4+.

---

### Arquivos a modificar

| Arquivo | Mudanças |
|---------|----------|
| `src/index.css` | Trocar import do Google Fonts: Oswald+Inter → Manrope (wght 400;500;600;700). Remover `font-display` do `h1-h6`. Aplicar `font-sans` como base. |
| `tailwind.config.ts` | Substituir `fontFamily.display` e `fontFamily.body` por `fontFamily.sans: ["Manrope", "sans-serif"]`. Remover `font-display` e `font-body`. |
| `src/components/SectionTitle.tsx` | Padronizar: `text-2xl md:text-3xl font-bold uppercase tracking-tight`. Subtitle: `text-sm text-muted-foreground`. |
| `src/components/Navbar.tsx` | Logo: `text-lg font-bold uppercase tracking-widest`. Links: `text-xs font-semibold uppercase tracking-wider`. Remover `font-display`. |
| `src/components/Layout.tsx` | Footer: padronizar para 2 níveis (text-xs para tudo). Remover text-[10px]. Remover `font-display`. |
| `src/pages/Index.tsx` | Hero: `text-4xl md:text-6xl font-bold`. Subtítulo: `text-xl md:text-2xl font-normal`. Remover text-[10px]. Padronizar bloco institucional. Remover `font-display`. |
| `src/pages/Apresentacao.tsx` | Corpo: padronizar todo para `text-base leading-relaxed text-foreground/80`. H3: `text-lg font-semibold uppercase tracking-wide`. Remover `font-display`. |
| `src/pages/Metodologia.tsx` | Cards dos eixos: label `text-xs font-semibold uppercase tracking-widest text-primary`, título `text-lg font-semibold uppercase`, corpo `text-sm`. Padronizar todos os sub-blocos. Remover `font-display`. |
| `src/pages/Estrutura.tsx` | Cards dos movimentos: mesma estrutura dos eixos. Padronizar subcapítulos. Remover `font-display`. |
| `src/pages/Conceitos.tsx` | Mapa de autores: label campo como `text-xs font-semibold uppercase tracking-widest text-primary`. Nome do autor: `text-sm font-semibold`. Corpo: `text-sm`. Conceitos próprios: nome `text-base font-semibold uppercase`. Remover `font-display`. |
| `src/pages/Filme.tsx` | Dados da Obra: label `text-xs font-semibold uppercase text-muted-foreground`. Valor `text-sm`. Padronizar linhagem. Remover `font-display`. |
| `src/pages/Coletivo.tsx` | Glossário: termo `text-sm font-semibold uppercase`. Def `text-xs`. Corpo principal padronizado. Remover `font-display`. |
| `src/pages/Contribuicoes.tsx` | Número: `text-xs text-primary/60 font-semibold tracking-widest`. Título: `text-lg font-semibold uppercase`. Corpo: `text-sm`. Remover `font-display`. |
| `src/pages/FAQ.tsx` | Trigger: `text-sm font-semibold uppercase tracking-wide`. Content: `text-sm text-muted-foreground`. Remover `font-display`. |
| `src/pages/Conclusao.tsx` | Padronizar escala. Remover text-[10px] e font-light. Remover `font-display`. |
| `src/components/AnimatedSection.tsx` | Sem mudança (wrapper neutro). |

---

### Resumo das regras

1. **Uma fonte**: Manrope para tudo
2. **7 níveis tipográficos**: hero, título, subtítulo, label, corpo, corpo-sm, caption
3. **3 pesos**: 400 (normal), 600 (semibold), 700 (bold)
4. **3 níveis de cor**: `foreground`, `foreground/80`, `muted-foreground`
5. **Sem text-[10px]**, sem `font-light`, sem opacidades fracionárias (/30, /55, /75, /85, /90)
6. **Espaçamento padronizado**: `mt-16` entre blocos, `space-y-4` dentro de blocos de texto

