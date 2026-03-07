

## Correções de Correspondência PDF–Portal

8 edições em 3 arquivos para alinhar o portal com a dissertação.

---

### 1. Corrigir Beagle — `src/pages/Filme.tsx` (linha 79)

`"Beagle (Brian Anderson)"` → `"Beagle"`

Brian Anderson não é Beagle. Beagle é o filmmaker da Baker Skateboards.

---

### 2. Restaurar subcapítulos do PDF — `src/pages/Estrutura.tsx`

**Movimento I** (linha 13) — adicionar subtítulo ao 1.1:
- `"Operadores poéticos do olhar"` → `"Operadores poéticos do olhar: instante, borda, fluxo"`

**Movimento II** (linha 20) — corrigir 2.3:
- `"A Zine como arquivo"` → `"A Zine"`

**Movimento III** (linhas 27-36) — separar 3.1/3.2 e usar nomes do PDF:
```
"Gênese e ethos da escuta como método vivo",
"Linhagem dos vídeos de skate e gramática do meio",
"Filmagem: corpo-câmera, risco e erro como linguagem",
"Montagem: artbook e o filme como escrita",
"Ecologia sensorial: trilha, som, paleta e design",
"Campo simbólico: Hellraiser, Lowbyrinth™ e semiótica",
"Cenas e fabulação: improviso como dramaturgia do real",
"Ritos de estreia: organismo em circulação",
"Pós-obra: reverberação, continuidade",
```

**Considerações** (linha 86):
- `"Considerações Finais"` → `"Considerações — Ecos do Labirinto"`

---

### 3. Adicionar 4º eixo de contribuição — `src/pages/Defense.tsx` (linha 56-60)

Adicionar ao array `CONTRIBUICOES`:
```ts
{ title: "Deslocamento no campo audiovisual brasileiro", desc: "Reposiciona o skate como produtor de linguagem cinematográfica no contexto brasileiro." },
```

Ajustar o grid de `md:grid-cols-3` → `md:grid-cols-2` (4 itens ficam melhor em 2 colunas).

---

### 4. Adicionar Certeau e Lefebvre ao mapa conceitual — `src/data/conceptMap.ts`

**Novos nós:**
- `certeau` — "Michel de Certeau" (autor): "Táticas e estratégias: reinvenção cotidiana do espaço pela prática ordinária."
- `lefebvre` — "Henri Lefebvre" (autor): "Produção social do espaço: o espaço urbano como produto e produtor de relações."

**Novas arestas:**
- `campo-urbano → certeau`
- `campo-urbano → lefebvre`
- `certeau → estetica-borda`
- `lefebvre → lowbyrinth`

