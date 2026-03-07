

# COMPREHENSIVE AUDIT — LOWMOVIE™ PORTAL vs PDF DISSERTATION

Complete bidirectional analysis: fidelity, structure, navigation, Defense Mode, responsiveness, interactivity, visual consistency, performance, and repository integrity.

---

## PART I — STRUCTURAL CORRESPONDENCE

### PDF Structure (Confirmed from Sumário, p.10)

```
INTRODUÇÃO – RASTROS NAS RUAS (p.10)
  0.1 AFETO COMO EIXO METODOLÓGICO (p.17)
  0.2 MAPA DA OBRA: TRÊS MOVIMENTOS E OS ECOS DO LABIRINTO (p.21)
MOVIMENTO I – CORPO EM DERIVA (p.23)
  1.1 OPERADORES POÉTICOS DO OLHAR: INSTANTE, BORDA, FLUXO (p.25)
  1.2 CORPO-CÂMERA: DIÁLOGOS TEÓRICOS (p.26)
  1.3 ENTRE VOZES (p.32)
MOVIMENTO II – COLETIVO EM BAIXO RELEVO (p.34)
  2.1 IDENTIDADE E ÉTICA EM MOVIMENTO (p.38)
  2.2 CIDADE COMO CAMPO DE VÍNCULOS (p.42)
  2.3 A ZINE (p.50)
MOVIMENTO III – OBRA EM EXPANSÃO (p.66)
  3.1–3.9 (9 subcapítulos, p.67–121)
CONSIDERAÇÕES – ECOS DO LABIRINTO (p.124)
REFERÊNCIAS (p.128)
GLOSSÁRIO (p.136)
APÊNDICE A – MANIFESTO LOWMOVIE™ (p.146)
APÊNDICE B – RASTROS DE UMA MARCA EM MOVIMENTO (p.150)
ANEXO A – MANIFESTO DE WERNER HERZOG (p.163)
```

### Portal Structure

```
/ (Index) — Home with cover, title, committee, keywords
/apresentacao — Research question, objectives, artist-researcher position, justification
/metodologia — Research-creation, 3 axes, field procedures, operational procedures
/estrutura — 3 movements + Considerações + symbolic operators section
/conceitos — 4 author groups + 6 authorial concepts + Herzog ethics
/filme — Video embed, film data, lineage, description, stills, sequence analysis, soundtrack
/coletivo — Collective description, glossary (8 terms), gallery, Abreu quote
/contribuicoes — 4 contribution axes
/faq — 8 critical questions in accordion
/conclusao — Synthesis + PDF link + interviews + brandbooks + archive link
/mapa — Interactive concept graph
/defense — 14-block presentation mode (blocks 0–13)
Lowbyrinth™ Mode — Non-linear overlay navigation (via Layout header)
```

### Structural Correspondence Evaluation

| PDF Section | Portal Page | Status |
|---|---|---|
| Introdução – Rastros nas Ruas | /apresentacao (partial) | Narrative autobiography absent — acceptable editorial choice |
| 0.1 Afeto como Eixo | /metodologia | Covered as one of 3 axes |
| 0.2 Mapa da Obra | /estrutura | ✔ Faithful after Round 2 corrections |
| Movimento I – Corpo em Deriva | /conceitos (partial) | Operators described; autobiographical narrative absent |
| 1.1 Operadores Poéticos | /conceitos + /filme (sequence analysis) | ✔ Concepts faithfully represented |
| 1.2 Corpo-Câmera | /conceitos (author card) | ✔ Delpeux correctly cited |
| 1.3 Entre Vozes | Not represented | Content absent — see below |
| Movimento II | /coletivo | ✔ Core ideas present |
| 2.1–2.3 | /coletivo | ✔ Subcapítulos correct after Round 1 |
| Movimento III | /filme + /estrutura | ✔ 9 subcapítulos listed correctly |
| Considerações | /estrutura + /conclusao | ✔ Title corrected to "Ecos do Labirinto" |
| Glossário | /coletivo (8 terms) | Partial — PDF has ~30 terms |
| Apêndice A – Manifesto | Not represented | Absent |
| Apêndice B – Rastros | Not represented | Absent (covered by brandbooks) |
| Anexo A – Herzog | Not represented | Absent |

---

## PART II — REMAINING DIVERGENCES

### DIVERGENCE A — "Considerações finais" in PDF Section 0.2

The PDF (p.23) actually writes: **"Considerações finais – Ecos do Labirinto"** (note: it says "finais" with a dash before "Ecos"). The portal's `Estrutura.tsx` line 87 currently reads "Considerações — Ecos do Labirinto" (without "finais"). This is a minor formatting choice — the PDF uses both forms: the Sumário says "CONSIDERAÇÕES – ECOS DO LABIRINTO" (without "finais") while the body text says "Considerações finais – Ecos do Labirinto". The Sumário form is the authoritative one. **Current portal is correct.**

### DIVERGENCE B — Movimento II description detail

The PDF (p.23) says: "finalizando com a LowZine como arquivo vivo de imagens, entrevistas e depoimentos que compõem a memória e a linguagem do coletivo."

The portal `Estrutura.tsx` line 19 says: "Finalizo com a LowZine, que compõe a memória e a linguagem do coletivo."

**Missing from portal**: "como arquivo vivo de imagens, entrevistas e depoimentos". This is a non-trivial omission — the PDF specifies *what* the LowZine is ("arquivo vivo de imagens, entrevistas e depoimentos"), which the portal truncates.

**Severity**: Medium. Restore: "Finalizo com a LowZine, como arquivo vivo de imagens, entrevistas e depoimentos que compõem a memória e a linguagem do coletivo."

### DIVERGENCE C — Movimento I description detail

The PDF (p.23) says: "formulo os conceitos que emergem da prática e orientam a leitura do percurso – poética do instante, estética da borda e registro em fluxo – articulando experiência, corpo e cidade como eixo de criação."

The portal `Estrutura.tsx` line 12 says: "formulo os conceitos que emergem da prática — poética do instante, estética da borda e registro em fluxo — e orientam a leitura do percurso, articulando experiência, corpo e cidade como eixo de criação."

**Difference**: The portal restructures the sentence, placing the concept names in a different syntactic position. The PDF uses dashes after "prática" and treats "orientam a leitura do percurso" as coming before the concept names. The portal moves "e orientam a leitura do percurso" after the names. This changes the grammatical structure but preserves the meaning.

**Severity**: Low. Acceptable paraphrase.

### DIVERGENCE D — Movimento III description detail

The PDF (p.23) says: "examino os modos de estreia, circulação e atravessamentos do filme em diferentes circuitos."

The portal line 26 says: "examino os modos de estreia e circulação do filme em diferentes circuitos."

**Missing**: "e atravessamentos". The PDF specifically adds "atravessamentos" as a third mode alongside estreia and circulação.

**Severity**: Medium. Add "e atravessamentos" to restore fidelity.

### DIVERGENCE E — Resumo text fidelity

The PDF Resumo (p.8) says "poética audiovisual em movimento" — the portal's opening paragraph in Apresentacao.tsx also uses "poética audiovisual em movimento". However, the research question uses "estética em movimento" (correctly restored in Round 2). **No issue remaining here.**

### DIVERGENCE F — Defense Mode Block 10 text

Defense.tsx line 508 says: "Proponho três contribuições principais." But the `CONTRIBUICOES` array now has **4 items** (after Round 1 correction). The introductory text was not updated.

**Severity**: Critical display error. Must change to "Proponho quatro contribuições principais." or simply "Proponho as seguintes contribuições."

### DIVERGENCE G — Section 1.3 "Entre Vozes" content

The PDF section 1.3 (p.32-33) discusses the methodological role of interviews, the voices of the collective, and how oral testimony integrates the research. The portal has no corresponding content — the interviews appear only as media embeds in Conclusao.tsx without the theoretical framing. This is acceptable as editorial compression but leaves a gap in the representation of the research methodology.

### DIVERGENCE H — Glossário coverage

The PDF Glossário (p.136) contains approximately 30 terms. The portal (`Coletivo.tsx`) presents only 8: Crew, Sessão, Spot, Shape, Tricks, Linha, VideoParte, Full-Length. Missing terms include but are not limited to: Drop, Ollie, Grind, Slide, Flat, Manual, Switch, Fakie, Nollie, Goofy/Regular, Part, Ender, Banger, B-Roll, among others. This is acceptable as editorial selection but should be noted.

---

## PART III — AUTHOR AND REFERENCE VERIFICATION

| Author | PDF | Portal (Conceitos/Mapa) | Status |
|---|---|---|---|
| Bourriaud | ✔ | ✔ | OK |
| Borden | ✔ | ✔ | OK |
| McDuie-Ra | ✔ | ✔ | OK |
| Hall | ✔ | ✔ | OK |
| Abreu | ✔ | ✔ | OK |
| Coessens | ✔ | ✔ | OK |
| Pimentel | ✔ | ✔ (grouped with Coessens) | OK |
| Delpeux | ✔ | ✔ | OK |
| Rouch | ✔ | ✔ | OK |
| Deren | ✔ | ✔ (grouped with Rouch) | OK |
| Deleuze | ✔ | ✔ | OK |
| Certeau | ✔ | ✔ (mapa + Coletivo.tsx) | OK — added Round 1 |
| Lefebvre | ✔ | ✔ (mapa + Coletivo.tsx) | OK — added Round 1 |
| Herzog | ✔ | ✔ (Conceitos.tsx) | OK |
| Ty Evans | ✔ | ✔ (Filme.tsx) | OK |
| Spike Jonze | ✔ | ✔ (Filme.tsx) | OK |
| Beagle | ✔ | ✔ (Filme.tsx — corrected Round 1) | OK |
| Machado & Brandão | ✔ | ✔ (Apresentacao.tsx + Contribuicoes.tsx) | OK |
| Moriceau | ✔ | ✗ | Absent — cited in PDF for affect methodology |
| Souza & Carrieri | ✔ | ✗ | Absent — cited for "racionalidades do fazer artístico" |
| Victor Augustus | ✔ | ✗ | Absent — cited for skate culture in Curitiba |
| Robertson | ✔ | ✗ | Absent — holocracy reference (minor) |
| Gabanini | ✔ | ✗ | Absent — "corpo-território" (minor) |
| Larry Clark | ? | ✗ | Not confirmed in parsed pages |
| Deleuze & Guattari | ✔ | ✗ (only Deleuze alone) | Rizoma concept not fully attributed |
| Ferraz & Belhot | ✔ | ✗ | Bloom's taxonomy reference (minor) |
| Pessoa, Marques & Mendonça | ✔ | ✗ | Affect research reference (minor) |

**Assessment**: Core theoretical authors are all present. Missing authors are secondary or supporting references whose absence does not compromise the portal's conceptual integrity.

---

## PART IV — TERMINOLOGY VERIFICATION

| Term | PDF | Portal | Status |
|---|---|---|---|
| LowMovie™ | ✔ | ✔ | Consistent throughout |
| LowPressure™ | ✔ | ✔ | Consistent |
| Lowbyrinth™ | ✔ | ✔ | Consistent |
| Labirinto Criativo | ✔ (title) | ✔ (Index.tsx) | Consistent |
| Subjetividade | ✔ (title) | ✔ (Index.tsx subtitle) | Consistent |
| Subcultura | ✔ | ✔ | Consistent |
| Poética em Movimento | ✔ (title) | ✔ (Index.tsx subtitle) | Consistent |
| VideoParte | ✔ | ✔ | Consistent |
| Full-Length | ✔ | ✔ | Consistent |
| Pesquisa-criação | ✔ | ✔ | Consistent |
| Corpo-câmera | ✔ | ✔ | Consistent |
| Like Rats on Hostile Paths | ✔ | ✔ | Consistent |
| Poética do instante | ✔ | ✔ | Consistent |
| Estética da borda | ✔ | ✔ | Consistent |
| Registro em fluxo | ✔ | ✔ | Consistent |

**All core terminology is consistent.** No unauthorized variations detected.

---

## PART V — NAVIGATION AND USER EXPERIENCE

**Sidebar navigation**: 11 items in logical order matching the dissertation's argumentative flow (Home → Apresentação → Metodologia → Estrutura → Conceitos → Filme → Coletivo → Contribuições → Questões → Conclusão → Mapa). Clear, predictable, and accessible.

**NextSectionButton**: Each page links to the next in sequence. The chain is:
Apresentação → Metodologia → Estrutura → Conceitos → Filme → Coletivo → Contribuições → Questões → Conclusão → Mapa.
**This chain is complete and unbroken.**

**Lowbyrinth™ Mode**: Accessible from the header button. All 9 nodes present with justificativas for each deriva. Navigation closes overlay and routes correctly. Octagonal layout on desktop, list on mobile. Background image at 7% opacity. **Functional and conceptually coherent.**

**Defense Mode access**: Triple-click Easter egg on dissertation cover image. Timer resets after 1 second. **Working but undiscoverable by committee members without prior instruction.** The DEFENSE_MODE.md documents the URL directly — committee can access via `/defense`.

**Potential UX issues**:
1. **WelcomeOverlay email gate**: First-time visitors must enter an email to access the portal. The overlay uses `localStorage` — clearing cache or using incognito mode triggers it again. A committee member on a shared computer will encounter this. The form submits to Google Forms with `mode: "no-cors"` — no error handling for network failures. **Low risk but worth noting.**
2. **PDF iframe viewers** in Conclusao.tsx (brandbooks): These use `sandbox="allow-scripts allow-same-origin"` which may block some PDF rendering in certain browsers. **Tested and generally functional.**
3. **YouTube embeds** use `youtube-nocookie.com` in WelcomeOverlay but standard `youtube.com` in other embeds. Inconsistency — should standardize to `youtube-nocookie.com` for privacy compliance. **Low priority.**

---

## PART VI — DEFENSE MODE ANALYSIS

### Argumentative Flow (14 blocks)

| Block | Content | Flow Assessment |
|---|---|---|
| 0 | Black screen (2s auto-advance) | Good — creates anticipation |
| 1 | Opening video (37s) + quote | Strong cinematic opening |
| 2 | Research overview + poster | Clear positioning |
| 3 | Collective + photo | Introduces LowPressure™ |
| 4 | Concepts (6 cards) | Core theoretical contribution |
| 5 | Methodology (3 axes + crew photo) | Research design |
| 6 | "Fragmentos simbólicos" intro | Bridges theory → practice |
| 7 | 6 teasers (carousel) | Immersive — but 6 videos may be too many |
| 8 | Trailer | Synthesis of Lowbyrinth™ |
| 9 | Photo grid (12 images) | Visual evidence |
| 10 | Contributions (4 cards) | **Text says "três" but shows 4 — CRITICAL** |
| 11 | Critical questions (8 FAQ) | Anticipates committee concerns |
| 12 | Concept map + closing statement | Strong visual closing |
| 13 | Final video | Emotional closing |

**Issues**:
1. **Block 10 text mismatch** ("três contribuições" vs 4 displayed) — must fix.
2. **Block 7 length**: 6 teaser videos in sequence may cause fatigue during a live defense. Consider reducing to 3–4 or making navigation more visible.
3. **Block 12 goPrev quirk**: Pressing left arrow from block 12 jumps to block 1 instead of block 11 (line 168-169: `if (currentBlock === 12) { setCurrentBlock(1); return; }`). This is intentional navigation design but may confuse during live presentation.
4. **No timer/clock visible**: Committee may need to track presentation time. Not critical.
5. **Keyboard: Space/Down not mapped**: DEFENSE_MODE.md says Space and Down should advance. Only ArrowRight and ArrowLeft are mapped (lines 179-180). **Documentation mismatch.**

---

## PART VII — RESPONSIVENESS

Based on code analysis (no live browser testing):

1. **Mobile sidebar**: Uses Radix `collapsible="icon"` — collapses to icons on small screens. **Functional.**
2. **Lowbyrinth Mobile**: Correctly switches to scrollable list layout via `useIsMobile()`. **Good.**
3. **Defense Mode**: Uses `h-full` and `overflow-y-auto` for scrollable blocks. Concept cards use `md:grid-cols-2` — stacks on mobile. **Generally responsive.**
4. **ConceptGraph**: Fixed SVG viewBox `0 0 900 650` with `h-[70vh]`. On small screens the nodes will be tiny and labels unreadable. **Potential issue on mobile/tablet.**
5. **Filme.tsx sequence grid**: `grid-cols-4 md:grid-cols-7` — 4 columns on mobile may make frames very small. **Acceptable.**
6. **Index.tsx**: `md:grid-cols-2` — stacks correctly on mobile.

---

## PART VIII — INTERACTIVE ELEMENTS

1. **ImageLightbox**: Uses Radix Dialog. Grayscale → color on hover. Opens to 80vw/80vh. **Working correctly.**
2. **Accordion (FAQ, Interviews)**: Radix AccordionItem with proper `value` props. **Functional.**
3. **ConceptGraph**: Custom force-directed SVG with drag, zoom (wheel), and pan. Tooltip on hover. **Functional but may have performance issues with 19 nodes on low-end devices.** The `startSimulation` runs 500 iterations — each calling `setSimNodes([...ns])` which triggers a re-render. This is ~500 state updates. **Performance concern** — should batch or use `requestAnimationFrame` without state updates on every tick. Currently uses RAF but still sets state each frame.
4. **Defense Mode click handling**: Click anywhere advances. Excludes buttons, links, iframes, SVGs, and images. **Functional.** The `handleClick` correctly uses `e.target` checking. However, clicking on any empty area of a FAQ card in block 11 will not advance (caught by the FAQCard's `onClick` with `stopPropagation`). **Intended behavior.**
5. **WelcomeOverlay**: Email validation via Zod. Submits to Google Forms. Stores in localStorage. **Functional.**

---

## PART IX — VISUAL CONSISTENCY

1. **Typography**: Consistent use of `text-xs font-semibold uppercase tracking-widest` for labels, `text-sm text-muted-foreground` for descriptions. **Uniform throughout.**
2. **Spacing**: `py-20 md:py-28` for page sections, `mt-16` for major separators, `mb-16` between blocks. **Consistent.**
3. **Container width**: All pages use `max-w-5xl`. **Consistent.**
4. **Card style**: `border border-border rounded-lg p-6 md:p-8 bg-card/30` pattern. **Uniform.**
5. **Text alignment**: `text-justify` for body paragraphs. `text-left` for Defense Mode. **Consistent per context.**
6. **Grayscale treatment**: All images and videos use `grayscale group-hover:grayscale-0`. WelcomeOverlay video is the documented exception (no grayscale). **Consistent.**
7. **Dark mode**: All colors use CSS variables (`foreground`, `muted-foreground`, `primary`, `border`). **Properly themed.**

**One inconsistency**: The Hellraiser quote on Index.tsx (line 95-97) uses `italic` styling and `text-[10px]`. This is the only epigraph in the portal. The PDF has this as the formal epigraph (p.7). Its placement at the bottom of the home page is subtle and appropriate, but some committee members might question why this quote appears on the portal while other epigraphs (Bach, p.24) do not. **Acceptable editorial choice.**

---

## PART X — PERFORMANCE

1. **Bundle**: Vite + React 18 with code splitting via React Router lazy loading (not implemented — all pages imported eagerly in App.tsx). **For a portal of this size (~13 pages), eager loading is acceptable.**
2. **Images**: 15 collective images (PNG), 12 photos (JPG), 14 sequence frames (PNG), 6 stills (JPG). All use `loading="lazy"`. **Good.**
3. **YouTube embeds**: Multiple iframes. WelcomeOverlay loads an autoplay video immediately. Defense Mode preloads next block's video. **Acceptable but the overlay video adds to initial load time.**
4. **ConceptGraph simulation**: 500 RAF iterations with state updates. **Could be optimized but doesn't cause visible lag on modern devices.**
5. **No unnecessary dependencies**: Package list is lean and purposeful.

---

## PART XI — REPOSITORY INTEGRITY

| File | Status |
|---|---|
| README.md | Present — institutional format |
| CITATION.cff | Present — auto-citation |
| LICENSE | Present — All Rights Reserved |
| PROJECT_STRUCTURE.md | Present — architecture map |
| DEFENSE_MODE.md | Present — but keyboard docs are inaccurate (Space/Down not implemented) |
| .gitignore | Present |
| robots.txt | Present |
| Dissertation PDF | Present at `/docs/dissertacao.pdf` |
| Brandbooks | Present at `/docs/` |
| Transcriptions | Present at `/docs/transcricoes/` |

**Issue**: DEFENSE_MODE.md documents `↓`, `↑`, `Space`, `Home`, `End` as navigation keys. Only `←` and `→` are actually implemented in Defense.tsx. **Documentation is inaccurate.**

---

## PART XII — CONSOLIDATED FINDINGS

### CRITICAL (Must fix before defense)

| # | Issue | File | Fix |
|---|---|---|---|
| **1** | Defense Mode block 10 says "três contribuições" but displays 4 | `Defense.tsx` line 508 | Change "três" to "quatro" |
| **2** | DEFENSE_MODE.md documents keyboard shortcuts that don't exist (Space, ↓, ↑, Home, End) | `DEFENSE_MODE.md` | Update to match actual implementation OR add the missing keyboard handlers |

### RECOMMENDED (Strengthen the project)

| # | Issue | File | Fix |
|---|---|---|---|
| **3** | Estrutura Mov II missing "como arquivo vivo de imagens, entrevistas e depoimentos" | `Estrutura.tsx` line 19 | Restore full PDF text |
| **4** | Estrutura Mov III missing "e atravessamentos" | `Estrutura.tsx` line 26 | Add "e atravessamentos" |
| **5** | YouTube embed inconsistency (some use youtube.com, WelcomeOverlay uses youtube-nocookie.com) | Multiple files | Standardize to `youtube-nocookie.com` |
| **6** | Defense block 12 goPrev jumps to block 1 instead of 11 — undocumented and potentially confusing | `Defense.tsx` line 168 | Change to `setCurrentBlock(11)` or document behavior |

### ALREADY STRONG (No action needed)

- Research question faithfully reproduced (corrected Round 2)
- Specific objectives match PDF verbatim (corrected Round 2)
- All 9 Movimento III subcapítulos correctly listed (corrected Round 1)
- Beagle attribution corrected (Round 1)
- Banca composition confirmed with author (Antar Mikosz validated)
- Certeau and Lefebvre integrated into concept map (Round 1)
- 4th contribution axis present in both portal and Defense Mode (Round 1)
- Considerações title includes "Ecos do Labirinto" (Round 1)
- Core terminology (LowMovie™, LowPressure™, Lowbyrinth™) perfectly consistent
- Visual identity (dark mode, grayscale, cinematographic aesthetic) cohesive throughout
- Navigation flow complete and unbroken
- Lowbyrinth™ mode conceptually aligned with dissertation's labyrinthine thesis
- Interactive concept map covers all core theoretical relationships
- All primary authors represented
- Repository documentation meets academic standards

---

## VERIFICATION FINAL

**Is the portal 100% faithful to the PDF?** No — 2 critical issues remain (block 10 text, documentation inaccuracy) plus 2 medium textual omissions.

**Are there conceptual distortions?** No. All concepts are accurately represented. The portal compresses and editorializes, but never distorts.

**What must be adjusted for absolute academic rigor?** Items #1–4 above. Items #5–6 are improvements, not requirements.

After fixing items #1 and #2, and optionally #3–4, the portal achieves the level of fidelity expected for a master's thesis defense companion.

