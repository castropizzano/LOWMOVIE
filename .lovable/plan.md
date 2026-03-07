

## Auditoria Textual Completa — Portal + Defense Mode

Revisão de todos os textos, titulos, paragrafos, cards e interatividades. Abaixo, cada achado com localização exata, diagnóstico e correção proposta.

---

### 1. PESSOA TEXTUAL — Inconsistências Remanescentes

| # | Arquivo | Linha | Trecho atual | Problema | Correção |
|---|---------|-------|-------------|----------|----------|
| 1 | **Apresentacao.tsx** | 117-121 | "A dissertação assume explicitamente a posição de artista-pesquisador... Não se parte de uma neutralidade externa..." | Seção "Lugar de Fala" fala em terceira pessoa sobre o próprio posicionamento do autor. Segundo as diretrizes, Apresentação usa 3a pessoa institucional, mas esta seção é explicitamente pessoal ("Lugar de Fala") — gera ambiguidade. | Manter 3a pessoa por consistência com o restante da página, OU converter para 1a pessoa apenas nesta subseção. Recomendo: manter como está (3a pessoa institucional), pois o título "Lugar de Fala — Artista-Pesquisador" já sinaliza a posição sem precisar de "eu". |
| 2 | **Metodologia.tsx** | 66-67 | "Participação em processos coletivos: sessões de gravação..." (Vivência Situada) | As 3 operações de campo misturam vozes: "Vivência Situada" e "Escuta Partilhada" usam substantivos impessoais, mas "Convivência Criativa" (linha 73) usa "Participo" (1a pessoa). | Uniformizar: ou todas em 1a pessoa ("Participo de sessões...", "Participo das dinâmicas...", "Registro por meio de...") ou todas impessoais. Recomendo 1a pessoa nas três. |
| 3 | **Estrutura.tsx** | 87-90 | "As considerações finais situam as reverberações..." | Terceira pessoa onde os outros movimentos usam "Apresento". | Sugestão: "Situo as reverberações da investigação..." |

---

### 2. VESTÍGIOS DE IA / LINGUAGEM GENÉRICA

| # | Arquivo | Linha | Trecho | Diagnóstico | Correção |
|---|---------|-------|--------|-------------|----------|
| 4 | **Apresentacao.tsx** | 64-67 | "A pergunta opera em duas frentes simultâneas: a descrição precisa dos processos criativos — suas condições materiais, procedimentos técnicos e escolhas estéticas — e a articulação teórica desses processos com o campo..." | Frase longa, expositiva demais, padrão de IA "explicando o que vai fazer". Metadiscurso acadêmico que não acrescenta. | Cortar ou simplificar: "A pergunta articula descrição dos processos criativos e sua formulação teórica no campo do cinema e das artes do vídeo." |
| 5 | **Contribuicoes.tsx** | 37-40 | "As contribuições distribuem-se por quatro eixos articulados, cada um dos quais responde a uma lacuna identificada no campo... São deslocamentos que afetam a estrutura conceitual e metodológica do campo." | "cada um dos quais responde a uma lacuna" — construção formulaica, "IA acadêmica". Repetição de "campo" em duas frases seguidas. | Simplificar: "Quatro eixos articulados, cada um respondendo a uma lacuna no campo do cinema e das artes do vídeo no Brasil." |
| 6 | **Conceitos.tsx** | 79 | "Os conceitos formulados nomeiam fenômenos que os vocabulários existentes não alcançavam." | Frase solta, soa como tagline de IA. | Integrar ao parágrafo anterior ou reformular: "As formulações a seguir nomeiam processos que os vocabulários disponíveis não alcançavam." |
| 7 | **Coletivo.tsx** | 36-37 | "O processo criativo se enraíza na escuta e na convivência. A identidade do coletivo se afirma como construção rizomática (que cresce em rede, sem hierarquia fixa)..." | "se enraíza" + "se afirma" — duplo reflexivo em sequência, padrão de geração. A explicação entre parênteses "(que cresce em rede, sem hierarquia fixa)" é boa (didática), manter. | Variar: "O processo criativo nasce da escuta e da convivência." |
| 8 | **Filme.tsx** | 94-97 | "O LowMovie™ opera como dispositivo poético-político, onde viver, pensar e criar operam em um mesmo gesto." | "opera... operam" — repetição imediata do verbo. | "O LowMovie™ funciona como dispositivo poético-político, onde viver, pensar e criar convergem num mesmo gesto." |
| 9 | **Conclusao.tsx** | 94-95 | "O que o LowMovie™ ensina é que a poética não habita o resultado acabado, mas o processo que o engendra." | "o processo que o engendra" — "engendrar" é verbo típico de texto gerado. | "...mas o processo que o produz." ou "...mas o percurso que o constitui." |

---

### 3. DEFENSE MODE — Textos dos Blocos

| # | Bloco | Linha | Trecho | Diagnóstico | Correção |
|---|-------|-------|--------|-------------|----------|
| 10 | **Bloco 4** (Conceitos) | 315 | "O Lowbyrinth descreve um processo criativo que não se organiza de forma linear." | Falta o ™ em "Lowbyrinth" — inconsistência com branding. | "O Lowbyrinth™ descreve..." |
| 11 | **Bloco 5** (Metodologia) | 348-349 | "Metodologicamente, a pesquisa se insere no campo da pesquisa-criação implicada." | "Metodologicamente" como advérbio de abertura é redundante (o bloco já se chama "Metodologia"). | "A pesquisa se insere no campo da pesquisa-criação implicada." ou "Adoto a pesquisa-criação implicada como abordagem metodológica." |
| 12 | **Bloco 5** | 357-358 | "O rigor da pesquisa não está na neutralidade, mas na reflexividade sobre o próprio processo criativo." | Frase genérica, poderia ser de qualquer tese em pesquisa-criação. Sem marca autoral. | "O rigor não reside na neutralidade — reside na capacidade de interrogar cada decisão criativa." |
| 13 | **Bloco 6** (Fragmentos) | 394-395 | "Durante o processo de criação do LowMovie™, produzimos uma série de peças audiovisuais que funcionam como fragmentos simbólicos do universo do filme." | "produzimos" — OK, 1a pessoa do plural (coletivo). Mas "funcionam como fragmentos simbólicos do universo do filme" é descritivo-genérico. | "...produzimos peças audiovisuais que condensam o universo simbólico do filme." |
| 14 | **Bloco 8** (Trailer) | 443-444 | "A convergência dessas ideias aparece no trailer do filme LowMovie™, que sintetiza o conceito de Lowbyrinth™." | "A convergência dessas ideias aparece" — construção passiva, impessoal. | "Essas ideias convergem no trailer do LowMovie™, que sintetiza o Lowbyrinth™." |
| 15 | **Bloco 10** (Contribuições) | 506-507 | "A pesquisa propõe três contribuições principais." | Impessoal. No Defense Mode o tom é de apresentação ao vivo. | "Proponho três contribuições principais." |
| 16 | **Bloco 12** (Lowbyrinth) | 556-557 | "O portal organiza a pesquisa como um percurso navegável." | Impessoal, descritivo. | "Organizei a pesquisa como um percurso navegável." ou "Este portal organiza a pesquisa como percurso navegável." |

---

### 4. REFINAMENTOS DE QUALIDADE

| # | Arquivo | Linha | Observação |
|---|---------|-------|------------|
| 17 | **Filme.tsx** | 43 | "Formato: Full-length video" — termo em inglês sem itálico ou explicação. Já existe definição no glossário do Coletivo, mas aqui não há link. | Sugestão: "*Full-length* video" ou "Full-length (longa-metragem de skate)" |
| 18 | **Defense.tsx** | 46 | FAQ "Poética versus estética" — resposta curta: "A escolha pelo termo poética — e não estética — é deliberada. Poética refere-se ao fazer em ato..." | Na versão do portal (FAQ.tsx linha 15), a mesma questão tem resposta mais completa. As duas versões coexistem sem conflito, mas a do Defense é mais rasa. | Considerar expandir levemente a resposta do Defense, ou manter como está (Defense = síntese para apresentação oral). |
| 19 | **Index.tsx** | 95-97 | Epígrafe Hellraiser: "We have such sights to show you." | Funciona como easter egg, mas pode gerar estranhamento na banca. Está discreto (10px, muted). | Manter — é sutil o suficiente. |

---

### Resumo de Edições Propostas

**Prioridade Alta** (erros ou inconsistências claras):
- **#10**: Adicionar ™ em "Lowbyrinth" no Defense Bloco 4
- **#2**: Uniformizar pessoa nas 3 operações de campo (Metodologia.tsx)
- **#8**: Corrigir "opera...operam" em Filme.tsx

**Prioridade Média** (refinamento de tom/humanização):
- **#4, #5, #6, #7, #9**: Eliminar construções genéricas/formulaicas
- **#11, #12, #13, #14, #15, #16**: Humanizar textos do Defense Mode (1a pessoa, tom oral)
- **#3**: Considerações Finais em primeira pessoa

**Prioridade Baixa** (polish):
- **#17**: Italicizar "Full-length" ou adicionar glosa
- **#18**: Decisão sobre profundidade das respostas FAQ no Defense

**Total: 9 arquivos afetados, 19 pontos identificados, 0 erros factuais remanescentes.**

