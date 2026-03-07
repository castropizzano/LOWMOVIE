

## AUDITORIA DE CORRESPONDÊNCIA TOTAL — PDF vs PORTAL (RODADA 2)

Após as correções da rodada anterior (Beagle, subcapítulos, Considerações, Certeau/Lefebvre, 4º eixo), esta auditoria re-verifica e identifica **divergências remanescentes não detectadas anteriormente**.

---

### ETAPA 1 — ESTRUTURA DO PDF (Confirmada)

```
Título: LOWMOVIE™ E O LABIRINTO CRIATIVO: SUBJETIVIDADE, SUBCULTURA
        E A POÉTICA EM MOVIMENTO DO COLETIVO LOWPRESSURE™
Autor: Castro Pizzano
Programa: PPG-CINEAV | UNESPAR
Orientador: Prof. Dr. Fábio Jabur de Noronha
Ano: 2026
Banca PDF: Fábio Jabur, Fabiana Pelinson, Luciana Barone
Banca Portal: + Antar Mikosz (confirmado pelo autor — será atualizado no PDF)

INTRODUÇÃO – RASTROS NAS RUAS
  0.1 AFETO COMO EIXO METODOLÓGICO
  0.2 MAPA DA OBRA: TRÊS MOVIMENTOS E OS ECOS DO LABIRINTO
MOVIMENTO I – CORPO EM DERIVA
  1.1 OPERADORES POÉTICOS DO OLHAR: INSTANTE, BORDA, FLUXO
  1.2 CORPO-CÂMERA: DIÁLOGOS TEÓRICOS
  1.3 ENTRE VOZES
MOVIMENTO II – COLETIVO EM BAIXO RELEVO
  2.1 IDENTIDADE E ÉTICA EM MOVIMENTO
  2.2 CIDADE COMO CAMPO DE VÍNCULOS
  2.3 A ZINE
MOVIMENTO III – OBRA EM EXPANSÃO
  3.1–3.9 (9 subcapítulos — já corrigidos no portal)
CONSIDERAÇÕES – ECOS DO LABIRINTO (já corrigido)
REFERÊNCIAS / GLOSSÁRIO / APÊNDICES / ANEXO
```

---

### ETAPA 2 — ESTRUTURA DO PORTAL (Confirmada)

13 páginas + Defense Mode (14 blocos) + Lowbyrinth Mode + Mapa Conceitual interativo. Estrutura verificada na rodada anterior — sem alterações.

---

### ETAPA 3 — DIVERGÊNCIAS REMANESCENTES (NOVAS)

As correções anteriores resolveram 9 problemas. Esta rodada identifica **7 divergências adicionais**, todas de fidelidade textual entre portal e PDF.

---

#### DIVERGÊNCIA #1 — PERGUNTA CENTRAL (CRÍTICA)

**Arquivo**: `Apresentacao.tsx`, linhas 59-62

| | Portal | PDF (p.18) |
|---|---|---|
| Termo | "poética audiovisual em movimento" | "estética em movimento" |
| Campo | "artes do vídeo" | "artes visuais" |
| Formato | Frase única com travessão | Duas frases separadas com "?" |

O portal alterou "estética" para "poética" na pergunta central. Embora a dissertação defenda a poética sobre a estética (ver FAQ), **a pergunta de pesquisa no PDF usa "estética"**, e o portal deve reproduzi-la fielmente como citação. Além disso, "artes visuais" foi trocado por "artes do vídeo".

**Correção**: Restaurar a pergunta exata do PDF:
> "Como os processos criativos que compõem o LowMovie™, gestados em dinâmica coletiva e rizomática do LowPressure™, contribuem para a construção de uma estética em movimento no campo do cinema e das artes visuais? Quais modos de subjetivação, de elaboração simbólica e de relação com o espaço urbano emergem dessas práticas?"

---

#### DIVERGÊNCIA #2 — OBJETIVOS ESPECÍFICOS (ALTA)

**Arquivo**: `Apresentacao.tsx`, linhas 76-89

Os 4 objetivos específicos no portal **não correspondem** aos do PDF.

| | Portal | PDF (p.18) |
|---|---|---|
| Obj 1 | "Descrever as práticas colaborativas do coletivo LowPressure™ e seus modos de organização criativa" | Descrever as práticas colaborativas mobilizadas no processo do filme (filmagem, montagem, zine e eventos) |
| Obj 2 | "Analisar as escolhas formais do LowMovie™ — filmagem, montagem, trilha, design — como expressão de uma poética audiovisual situada" | Analisar as escolhas formais do LowMovie™ como linguagem de risco, erro e presença |
| Obj 3 | "Investigar os atravessamentos estéticos entre skate, cidade e produção de imagem" | Investigar os atravessamentos estéticos que se manifestam na obra |
| Obj 4 | "Observar as reverberações dessas práticas no campo do cinema e das artes do vídeo no Brasil" | Observar suas reverberações em diferentes circuitos de circulação e exibição |

**Correção**: Substituir pelos textos fiéis ao PDF.

---

#### DIVERGÊNCIA #3 — DESCRIÇÃO DOS MOVIMENTOS EM ESTRUTURA.TSX (MÉDIA)

**Arquivo**: `Estrutura.tsx`, linhas 12, 19, 26

As descrições dos 3 movimentos são paráfrases, não transcrições. Diferenças:

**Movimento I** — Portal omite "e orientam a leitura do percurso".
**Movimento II** — Portal diz "examino os modos de decisão, as formas de autoria compartilhada e as estratégias de circulação" mas PDF diz "acompanhando como vínculos, ética de produção e modos de pertencimento se organizam no cotidiano do grupo". Omite também "que compõem a memória e a linguagem do coletivo".
**Movimento III** — Portal omite "que se torna legível na obra" e "do filme em diferentes circuitos".

**Correção**: Restaurar textos fiéis ao PDF (seção 0.2, p.21-22).

---

#### DIVERGÊNCIA #4 — DESCRIÇÃO DAS CONSIDERAÇÕES (MÉDIA)

**Arquivo**: `Estrutura.tsx`, linhas 88-91

| Portal | PDF (p.22) |
|---|---|
| "Situo as reverberações da investigação no campo do cinema e das artes do vídeo — não como encerramento, mas como abertura para as continuidades que a pesquisa projeta." | "Retomam a pergunta de pesquisa, sintetizam os achados e situam as reverberações do percurso, articulando implicações estéticas, políticas e metodológicas que permanecem em movimento." |

**Correção**: Usar texto do PDF.

---

#### DIVERGÊNCIA #5 — FABIANA PELINSON: FILIAÇÃO INSTITUCIONAL (BAIXA)

**Arquivo**: `Index.tsx`, linha 77

| Portal | PDF (p.4) |
|---|---|
| "Profa. Dra. Fabiana Pelinson" (sem filiação) | "Prof. Dra. Fabiana Pelinson — Membro Externo (ISULPAR / UNINTER)" |

O PDF usa "Prof. Dra." (sem 'a' em Profa). Diferença menor de grafia.

**Correção**: Manter "Profa. Dra." (forma mais padrão em PT-BR). Não é erro, mas vale anotar.

---

#### DIVERGÊNCIA #6 — CONCLUSAO.TSX: TÍTULO VS PDF (BAIXA)

**Arquivo**: `Conclusao.tsx`, linha 68-69

O portal intitula a página "Conclusão" com subtítulo "Síntese da pesquisa e horizontes abertos". O PDF não tem seção chamada "Conclusão" — tem "Considerações – Ecos do Labirinto". A página Conclusão do portal é uma criação editorial do portal (agrega acervo, entrevistas, manuais) e não corresponde a nenhum capítulo do PDF. Isso é aceitável como expansão do portal.

**Sem ação necessária** — expansão válida.

---

#### DIVERGÊNCIA #7 — CONCEITOS.TSX: GRAFIA "McDuie-Ra" (BAIXA)

**Arquivo**: `Conceitos.tsx`, linha 11; `conceptMap.ts`, linha 24

O portal grafa "McDuie-Ra". O PDF grafa "McDUIE-RA" (caps no sumário) e "McDuie-Ra" no corpo. Consistência confirmada — sem ação.

---

### ETAPA 6 — AUTORES E REFERÊNCIAS

**Autores no portal vs PDF:**

| Autor | Portal | PDF | Status |
|---|---|---|---|
| Borden | ✔ | ✔ | OK |
| McDuie-Ra | ✔ | ✔ | OK |
| Bourriaud | ✔ | ✔ | OK |
| Hall | ✔ | ✔ | OK |
| Abreu | ✔ | ✔ | OK |
| Coessens/Pimentel | ✔ | ✔ | OK |
| Delpeux | ✔ | ✔ | OK |
| Rouch/Deren | ✔ | ✔ | OK |
| Deleuze | ✔ | ✔ | OK |
| Certeau | ✔ (mapa) | ✔ | OK (adicionado rodada anterior) |
| Lefebvre | ✔ (mapa) | ✔ | OK (adicionado rodada anterior) |
| Herzog | ✔ | ✔ | OK |
| Ty Evans | ✔ | ✔ | OK |
| Spike Jonze | ✔ | ✔ | OK |
| Beagle | ✔ | ✔ | OK (corrigido rodada anterior) |
| Machado & Brandão | ✔ | ✔ | OK |
| Souza & Carrieri | ✗ | ✔ | Ausente — citados no PDF como referência sobre racionalidades do fazer artístico |
| Victor Augustus | ✗ | ✔ | Ausente — citado sobre skate em Curitiba |
| Larry Clark | ✗ | ✔ (verificar) | Possivelmente ausente |
| Robertson (holocracia) | ✗ | ✔ | Ausente — referência menor |

**Ação recomendada (prioridade baixa)**: Considerar adicionar Souza & Carrieri ao mapa conceitual, dado seu papel na argumentação sobre ética de produção. Victor Augustus e Robertson são referências pontuais e sua ausência é aceitável.

---

### ETAPA 8 — CONTEÚDO AUSENTE DO PORTAL

Verificação da rodada anterior confirmada. Continuam ausentes (por decisão editorial válida):
- Glossário completo (~30 termos vs 8 no portal)
- Manifesto LowMovie™ (Apêndice A)
- Manifesto de Werner Herzog (Anexo A)
- Narrativa autobiográfica detalhada (Mov I)
- Seção "Entre Vozes" (1.3) como conteúdo expandido

---

### RESUMO DE AÇÕES NECESSÁRIAS

| # | Prioridade | Ação | Arquivo |
|---|---|---|---|
| **1** | **CRÍTICA** | Restaurar pergunta central exata do PDF ("estética em movimento", "artes visuais", duas frases) | `Apresentacao.tsx` |
| **2** | **ALTA** | Substituir os 4 objetivos específicos pelos textos do PDF | `Apresentacao.tsx` |
| **3** | **MÉDIA** | Restaurar descrições dos 3 movimentos conforme PDF (seção 0.2) | `Estrutura.tsx` |
| **4** | **MÉDIA** | Restaurar descrição das Considerações conforme PDF | `Estrutura.tsx` |
| **5** | BAIXA | Considerar adicionar Souza & Carrieri ao mapa conceitual | `conceptMap.ts` |

**Arquivos afetados: 2** (Apresentacao.tsx, Estrutura.tsx) + opcionalmente conceptMap.ts

**4 edições textuais necessárias** para garantir fidelidade absoluta ao PDF.

