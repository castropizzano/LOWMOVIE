

## Auditoria Técnica, Tipográfica e Conceitual — Diagnóstico e Plano

Auditei todos os 10 arquivos de página + componentes Layout, Navbar, SectionTitle e ImageLightbox. Segue diagnóstico organizado por eixo, com correções propostas.

---

### 1. LAYOUT — Padronização de Padding, Border e Border-Radius

Todos os blocos destacados usam `rounded-lg` e `border` — consistentes. Porém o **padding interno** varia entre dois padrões e há desvios:

| Padrão | Uso esperado | Ocorrências corretas |
|--------|-------------|---------------------|
| `p-6 md:p-8` | Cards em grids (2-3 colunas) | Estrutura movimentos, Metodologia eixos, Contribuições |
| `p-8 md:p-10` | Blocos standalone/featured | Apresentação pergunta, Metodologia procedimentos/distinção/operacionais, Filme dados/linhagem, Conceitos ética |

**Inconsistências encontradas:**

| Arquivo | Linha | Atual | Deveria ser |
|---------|-------|-------|-------------|
| `Conceitos.tsx` L90 | Cards de autores (grid 2col) | `p-6` | `p-6 md:p-8` |
| `Filme.tsx` L187 | Bloco "Este drop" (standalone) | `p-8` | `p-8 md:p-10` |
| `Conclusao.tsx` L71 | Citação final (standalone) | `px-8 py-6` | `p-8 md:p-10` |
| `Index.tsx` L49 | Bloco institucional | `px-6 py-5` | Manter — exceção legítima (hero centrado) |

**Correções**: 3 ajustes de padding.

---

### 2. LARGURA — SectionTitle Subtitle

O `SectionTitle` limita o subtítulo a `max-w-2xl` (42rem), criando um bloco mais estreito que o corpo de texto em containers `max-w-5xl`. Isso é visualmente perceptível em subtítulos longos.

**Correção**: Remover `max-w-2xl` do subtítulo em `SectionTitle.tsx` L15, permitindo que ocupe a largura natural do container.

---

### 3. TIPOGRAFIA — Justificação

Auditoria completa de `text-justify`:

| Arquivo | Linha | Status |
|---------|-------|--------|
| Apresentação L13, L114, L145 | ✅ Justificado |
| Metodologia L35 | ✅ Justificado |
| Conceitos L71, L133 | ✅ Justificado |
| Estrutura L50, L105 | ✅ Justificado |
| Contribuições L36 | ✅ Justificado |
| FAQ L54 | ✅ Justificado |
| Filme L91, L159, L190 | ✅ Justificado |
| Coletivo L28 | ✅ Justificado |
| **Conclusão L49** | ❌ Sem `text-justify` | Segundo parágrafo |
| Conclusão L44, L56 | ✅ Justificado |

**Correção**: Adicionar `text-justify` ao parágrafo L49 de `Conclusao.tsx`.

---

### 4. HIERARQUIA DE TÍTULOS

| Nível | Uso | Status |
|-------|-----|--------|
| `h1` | Apenas Index (hero) e 404 | ✅ Correto |
| `h2` | SectionTitle (todas as páginas) | ✅ Correto |
| `h3` | Subseções dentro das páginas | ✅ Correto |
| `h4` | Não utilizado | ✅ OK — não há necessidade |

Hierarquia uniforme. Sem quebras.

---

### 5. PADRONIZAÇÃO DE ™

| Termo | Ocorrências | Status |
|-------|------------|--------|
| LowMovie™ | ~20 ocorrências | ✅ Consistente em todo o site |
| LowPressure™ | ~12 ocorrências | ✅ Consistente |
| Lowbyrinth™ | 6 ocorrências | ⚠️ 1 inconsistência |

**Inconsistência encontrada:**
- `Conclusao.tsx` L74: `"um lowbyrinth."` — minúscula e sem ™
- Deveria ser: `"um Lowbyrinth™."`

**Nota**: `Filme.tsx` L214 exibe "Lowbyrinth EP" sem ™ — aceitável pois é o nome do álbum no Spotify, não o conceito acadêmico.

**Correção**: 1 ajuste em Conclusão.

---

### 6. EPÍGRAFE DA HOME

A epígrafe atual é: *"We have such sights to show you."* — fala do personagem Pinhead (Hellraiser, Clive Barker, 1987).

**Avaliação**: Referência a um filme de horror cult. Pode soar lúdica/provocativa num contexto de defesa acadêmica. Não compromete a seriedade do site dado o contexto subcultural da pesquisa, mas uma banca poderia estranhar a ausência de atribuição.

**Sugestão**: Manter se for referência intencional à cultura pop/subcultural (coerente com a pesquisa), mas **adicionar atribuição**: `— Hellraiser (Clive Barker, 1987)`. Alternativa mais institucional não é necessária — a epígrafe funciona como gesto autoral coerente com o posicionamento da pesquisa.

---

### 7. TOM PROMOCIONAL

Varredura completa de linguagem:

| Trecho | Arquivo | Avaliação |
|--------|---------|-----------|
| "Dispositivo poético-político nascido do gesto coletivo" | Filme subtitle | Linguagem acadêmica legítima |
| "Rede de artistas-skatistas que ativam a cidade como campo sensível" | Coletivo subtitle | OK — descritivo |
| "Este drop não é apenas uma manobra. É a metáfora estrutural da pesquisa." | Filme L188-189 | Limítrofe — tom assertivo mas defensável como síntese argumentativa |
| "LowMovie™ é o registro dessa condição." | Filme L193 | OK — síntese |

**Avaliação geral**: Sem linguagem promocional. O tom é acadêmico-autoral, coerente com pesquisa-criação.

---

### 8. AUTORES — Grafia e Presença

| Autor no site | Grafia | Status |
|---------------|--------|--------|
| Bourriaud | Nicolas Bourriaud | ✅ |
| Stuart Hall | Stuart Hall | ✅ |
| Iain Borden | Iain Borden | ✅ |
| McDuie-Ra | McDuie-Ra | ✅ (grafia com hífen, padrão do autor) |
| Coessens | Coessens | ✅ |
| Pimentel | Pimentel | ✅ |
| Moriceau | Moriceau | ✅ |
| Deleuze | Deleuze | ✅ |
| Rouch | Rouch | ✅ (Jean Rouch, mencionado em Conceitos) |
| Deren | Deren | ✅ (Maya Deren, mencionado em Conceitos) |
| Herzog | Herzog | ✅ (citado como ressonância ética, não como referência bibliográfica formal — adequado) |
| Delpeux | Delpeux | ✅ |
| Abreu | Luis Alberto de Abreu | ✅ |
| Certeau | Certeau (mencionado em Coletivo) | ✅ |
| Lefebvre | Lefebvre (mencionado em Coletivo) | ✅ |
| Machado e Brandão | Machado e Brandão (Apresentação + Contribuições) | ✅ |

**Nota sobre "Dan Guinski"**: Aparece em Filme.tsx L45 como `"Dan Guinski"` e L215 como `"Dan Guinski"`. Verificar se a grafia correta é **Guinski** ou **Guinski** (consistente internamente, mas confirmar com a dissertação).

---

### Plano de Correções

| # | Arquivo | Linha | Correção |
|---|---------|-------|----------|
| 1 | `SectionTitle.tsx` | L15 | Remover `max-w-2xl` do subtítulo |
| 2 | `Conceitos.tsx` | L90 | `p-6` → `p-6 md:p-8` |
| 3 | `Filme.tsx` | L187 | `p-8` → `p-8 md:p-10` |
| 4 | `Conclusao.tsx` | L71 | `px-8 py-6` → `p-8 md:p-10` |
| 5 | `Conclusao.tsx` | L49 | Adicionar `text-justify` |
| 6 | `Conclusao.tsx` | L74 | `lowbyrinth` → `Lowbyrinth™` |
| 7 | `Index.tsx` | L78 | Adicionar atribuição à epígrafe: `— Hellraiser (Clive Barker, 1987)` |

**Total**: 7 correções cirúrgicas em 5 arquivos.

### Confirmação Final

- **Largura padrão**: `max-w-5xl` (1024px) — uniforme em todas as páginas (exceto Conclusão centrada em `max-w-3xl` e Index hero)
- **Padding padrão**: `p-6 md:p-8` (cards em grid) / `p-8 md:p-10` (blocos standalone) — será uniformizado
- **Border/radius**: `border border-border rounded-lg` — uniforme
- **Justificação**: 100% dos parágrafos de corpo justificados após correção
- **Hierarquia de títulos**: h1 (Index) → h2 (SectionTitle) → h3 (subseções) — sem quebras
- **™**: Uniforme após correção do Lowbyrinth™ em Conclusão
- **Autores**: Grafia correta e consistente
- **Tom**: Acadêmico-autoral, sem linguagem promocional

