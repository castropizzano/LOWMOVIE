

## Refinamento Estratégico Final — Instrumento de Legitimação Acadêmica

Análise comparativa minuciosa entre o conteúdo atual do site e o PDF da dissertação revelou lacunas significativas em densidade textual e dados concretos. O PDF contém parágrafos completos, argumentativamente densos, que o site ainda resume de forma telegráfica. O objetivo é elevar cada página ao nível do documento institucional, incorporando a análise estratégica de 5 pontos fornecida.

---

### Diagnóstico detalhado — o que muda e por quê

**PONTO 1 — Home: ancoragem institucional**
O site atual mostra "Castro Pizzano — PPG Cinema e Artes do Vídeo — UNESPAR" em texto pequeno e opaco (60% opacity). Precisa de um bloco institucional visível abaixo do subtítulo:

```text
Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo — UNESPAR
Linha de Pesquisa: Processos de Criação no Cinema e nas Artes do Vídeo
Orientador: Prof. Dr. Fábio Jabur de Noronha
```

Ação: reformatar o bloco de créditos, aumentar visibilidade, adicionar linha de pesquisa como elemento destacado.

**PONTO 2 — Filme: bloco "Dados da Obra"**
A página do filme é conceitual mas carece de dados concretos. Adicionar bloco com campos estruturados:
- Título, Ano, Duração, Formato, Estrutura, Direção, Coletivo, Locais de exibição

Isso transmite objetividade acadêmica e ancora o objeto.

**PONTO 3 — Metodologia: precisão operacional**
Adicionar procedimentos concretos (período de pesquisa, instrumentos de registro, critérios de análise fílmica). Expandir as descrições dos eixos com o texto completo do PDF (página 5), que é significativamente mais denso que o atual.

**PONTO 4 — Apresentação: texto completo do PDF**
O parágrafo de contexto no PDF (página 2) tem 3 parágrafos densos vs. 2 parágrafos curtos no site. Incorporar a densidade argumentativa completa: "O trabalho situa-se no cruzamento entre a produção cinematográfica contemporânea, as práticas subculturais urbanas e a pesquisa acadêmica em artes..." e "O coletivo LowPressure™ funciona como condição de produção e como ecossistema criativo..." O Lugar de Fala também precisa do texto completo do PDF (página 4), que é muito mais maduro.

**PONTO 5 — Contribuições: dimensão nacional explícita**
O PDF (página 10) tem descrições expandidas para cada contribuição. Incorporar e adicionar referência explícita ao campo brasileiro.

**Demais páginas — elevar ao nível do PDF:**
- **Estrutura**: usar texto da página 6 do PDF (descrições completas dos movimentos)
- **Conceitos**: usar texto das páginas 7-9 do PDF (autores com contexto completo, conceitos com definições expandidas, Herzog com 3 parágrafos densos)
- **Questões Críticas**: usar texto da página 11 do PDF (respostas longas, fundamentadas, com parágrafo introdutório)
- **Conclusão**: usar texto da página 12 do PDF (3 parágrafos expandidos + frase de encerramento "Da prática corporal à formulação conceitual...")

---

### Arquivos a modificar

| Arquivo | Mudanças |
|---------|----------|
| `src/pages/Index.tsx` | Bloco institucional reformatado com maior visibilidade. Adicionar linha de pesquisa como elemento destacado. |
| `src/pages/Apresentacao.tsx` | Contexto expandido com 3 parágrafos do PDF (p.2). Lugar de Fala com texto completo do PDF (p.4) — 3 parágrafos densos em vez de 4 bullets. Justificativa com parágrafo de contextualização do PDF (p.2, último parágrafo). |
| `src/pages/Metodologia.tsx` | Texto introdutório expandido do PDF (p.5). Eixos com descrições completas do PDF. Distinção fundamental com o parágrafo completo do PDF. Adicionar bloco "Procedimentos" com dados operacionais. |
| `src/pages/Estrutura.tsx` | Descrições dos movimentos expandidas com texto do PDF (p.6). Cada card com parágrafo completo em vez de frase resumida. |
| `src/pages/Conceitos.tsx` | Autores com contexto expandido do PDF (p.7). Conceitos com definições completas do PDF (p.8) — cada um com parágrafo inteiro. Herzog com 3 parágrafos do PDF (p.9). Adicionar parágrafo introdutório sobre a cartografia teórica. |
| `src/pages/Filme.tsx` | Novo bloco "Dados da Obra" com campos estruturados (título, ano, formato, duração, direção, coletivo, exibições). Manter descrição e galeria. |
| `src/pages/Contribuicoes.tsx` | Descrições expandidas do PDF (p.10). Cada contribuição com parágrafo completo. Menção explícita ao campo brasileiro. |
| `src/pages/FAQ.tsx` | Parágrafo introdutório sobre antecipação de tensões da banca. Respostas expandidas com texto completo do PDF (p.11). |
| `src/pages/Conclusao.tsx` | Texto expandido do PDF (p.12) — 3 parágrafos completos. Frase final: "Da prática corporal à formulação conceitual... o percurso desta dissertação é, ele mesmo, um lowbyrinth." |

Nenhuma nova página ou rota será criada. Nenhuma mudança estrutural no layout, navbar ou footer. O foco é exclusivamente em densidade textual, dados concretos e precisão argumentativa.

