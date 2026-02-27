

## Plano — Correção de data + Redesign editorial da capa

### Correções
- "Junho 2025" → "Março 2026"

### Redesign editorial acadêmico (`src/pages/Index.tsx`)

Layout assimétrico com hierarquia forte:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  DISSERTAÇÃO DE MESTRADO — MARÇO 2026       │  ← left-aligned, small
│                                             │
│  LOWMOVIE™                                 │  ← left-aligned, massive
│  E O LABIRINTO CRIATIVO                    │  ← left-aligned, secondary
│                                             │
│  Subjetividade, subcultura e a poética...  │  ← left-aligned, muted
│                                             │
│  ─────────────────────                      │  ← line accent
│                                             │
│  PPG Cinema e Artes do Vídeo — UNESPAR     │  ← left, small
│  LINHA: PROCESSOS DE CRIAÇÃO...            │  ← left, primary color
│                                             │
│  Castro Pizzano                             │
│  Orientador: Prof. Dr. Fábio Jabur...      │
│  Banca: Profa. Dra. Fabiana...             │
│                                             │
│  ─────────────────────                      │
│                                             │
│  [ EXPLORAR A PESQUISA → ]                 │  ← left-aligned button
│                                             │
│  "We have such sights..."                  │  ← left, subtle
│                                             │
│  SKATE · VIDEOARTE · PROCESSOS...          │  ← bottom, full width
│                                             │
└─────────────────────────────────────────────┘
```

- Tudo alinhado à esquerda (`text-left`)
- Título `LowMovie™` em escala maior (`text-5xl md:text-7xl`)
- Remover o card/box com borda — informações institucionais ficam soltas com separadores lineares
- Mais espaçamento vertical entre blocos
- Keywords no rodapé da seção, separadas por linha

| Arquivo | Alteração |
|---------|-----------|
| `Index.tsx` | Data corrigida + layout editorial left-aligned |

