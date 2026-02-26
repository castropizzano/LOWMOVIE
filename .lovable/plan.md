

## Refinamento Final — Site Acadêmico-Institucional de Alto Nível

Revisão minuciosa de todas as páginas com base na dissertação completa (PDF analisado) e no material textual definitivo fornecido pelo usuário. O objetivo é elevar o site ao nível de apresentação institucional para defesa de mestrado.

---

### Diagnóstico

O site atual já possui a estrutura correta (9 páginas, dark mode sóbrio, navegação funcional). Porém, há lacunas significativas:

1. **Conteúdo incompleto** — Faltam seções inteiras previstas no material definitivo: "Lugar de Fala — Artista-Pesquisador", "Mapa Conceitual de Autores", "Conceitos Próprios", "Ética de Criação e Ressonância com Herzog"
2. **Textos rasos** — As descrições atuais são telegráficas demais. A dissertação oferece densidade teórica que deve aparecer no site
3. **Pergunta central** — Atualmente chamada "Problema de Pesquisa"; deve incluir a "resposta sintética" conforme material definitivo
4. **Orientador e banca** — Ausentes do site (Prof. Dr. Fábio Jabur de Noronha, banca com Profa. Fabiana Pelinson e Profa. Luciana Barone)
5. **Footer** — Faltam informações da linha de pesquisa
6. **Palavras-chave** — Ausentes (Skate; Videoarte; Processos Criativos; Subcultura Urbana; Colaboração Audiovisual)
7. **Navbar** — Precisa refletir a nova estrutura expandida

---

### Plano de Mudanças

#### 1. Navbar (`src/components/Navbar.tsx`)
- Reorganizar links para refletir a nova estrutura de páginas (10 páginas total)
- Adicionar rota para nova página "Conceitos"
- Manter "Questões" como label para FAQ

#### 2. App.tsx — Nova rota
- Adicionar rota `/conceitos` para a página de Conceitos Próprios + Mapa de Autores + Ética Herzog

#### 3. Home / Index (`src/pages/Index.tsx`)
- Adicionar "Junho 2025" como data
- Adicionar "Mestrado em Cinema e Artes do Vídeo" mais visível
- Adicionar orientador: "Orientador: Prof. Dr. Fábio Jabur de Noronha"
- Adicionar palavras-chave em bloco discreto na parte inferior

#### 4. Apresentação (`src/pages/Apresentacao.tsx`)
- Expandir texto do contexto com a linguagem da dissertação (experiência urbana, deslocamento epistemológico)
- **Adicionar nova seção: "Lugar de Fala — Artista-Pesquisador"** com os 4 pontos do material definitivo
- Atualizar a pergunta central para incluir a formulação completa + resposta sintética
- Manter justificativa com os 3 pontos

#### 5. Metodologia (`src/pages/Metodologia.tsx`)
- Expandir descrições dos eixos com o conteúdo da dissertação:
  - Afeto: "força epistemológica e gesto ético-político... disposição de deixar-se tocar pelo campo"
  - Escuta: "sustentar o silêncio, acolher o tempo do outro, permitir que o sentido emerja"
  - Improviso: "abertura ao inesperado, um saber em movimento que aprende com a instabilidade"
- Adicionar a **distinção fundamental** método de pesquisa ≠ métodos de criação (com formatação visual clara)
- Adicionar referências: Coessens, Pimentel, Moriceau

#### 6. Estrutura (`src/pages/Estrutura.tsx`)
- Expandir descrição de cada movimento com conteúdos da dissertação:
  - Corpo em Deriva: "cartografia da formação estética, corpo-câmera, cine-transe"
  - Coletivo em Baixo Relevo: "vínculos, ética de produção, modos de pertencimento, a LowZine"
  - Obra em Expansão: "gênese, filmagem, montagem, trilha, glitch, campo simbólico, circulação"
- Expandir seção Operadores e Campo Simbólico com mais densidade

#### 7. Nova Página: Conceitos (`src/pages/Conceitos.tsx`)
Página dedicada que reúne três blocos:

**a) Mapa Conceitual de Autores** — Grid de cards com:
- Iain Borden — skate como reconfiguração espacial
- McDuie-Ra — subcultura e territorialidade, "archiving from below"
- Nicolas Bourriaud — estética relacional, obra como dispositivo de encontro
- Stuart Hall — identidade como construção dinâmica
- Luis Alberto de Abreu — criação horizontal
- Coessens / Pimentel / Moriceau — pesquisa-criação, corpo como conhecimento
- Delpeux / Araújo / Jean Rouch / Maya Deren — corpo-câmera, cine-transe, coreocinema

**b) Conceitos Próprios** — Lista com definições expandidas:
- Lowbyrinth™
- Poética do instante
- Estética da borda
- Registro em fluxo
- Afeto como eixo metodológico

**c) Ética de Criação e Ressonância com Herzog** — Bloco textual sobre autonomia criativa e micropolítica do fazer

#### 8. O Filme (`src/pages/Filme.tsx`)
- Expandir descrição: "dispositivo poético-político, onde viver, pensar e criar operam em um mesmo gesto"
- Mencionar processos específicos: filmagem como corpo-câmera, montagem como artbook, glitch como linguagem de fratura, ecologia sensorial (trilha, som, paleta, design)
- Manter placeholders de vídeo e galeria
- Atualizar links de soundtrack com nomes completos dos artistas: Dan Guinski (Non-Grata) e Raphael Carvalho (Relvi)

#### 9. O Coletivo (`src/pages/Coletivo.tsx`)
- Expandir com conceitos da dissertação: "Like Rats on Hostile Paths" como síntese epistemológica
- Mencionar a LowZine como arquivo vivo
- Adicionar referência à crew como "forma de vida em rede"
- Citação de Certeau sobre táticas vs. estratégias
- Mencionar Rafão VM como "agregador do coletivo"

#### 10. Contribuições (`src/pages/Contribuicoes.tsx`)
- Refinar linguagem para versão definitiva:
  1. "Reposiciona o skate como prática estética produtora de linguagem audiovisual"
  2. "Formula operadores conceituais derivados da prática artística"
  3. "Estrutura a pesquisa-criação implicada como abordagem rigorosa"
  4. "Propõe deslocamento epistemológico no campo audiovisual brasileiro"

#### 11. Questões Críticas (`src/pages/FAQ.tsx`)
- Atualizar para 7 questões com respostas mais densas conforme material definitivo
- Incluir a nova questão sobre cinema vs. skate: "É sobre cinema a partir do skate. O foco é o processo audiovisual."
- Respostas mais longas e fundamentadas

#### 12. Conclusão (`src/pages/Conclusao.tsx`)
- Adicionar terceira frase de encerramento: "A dissertação afirma que o gesto criativo, quando analisado com rigor e implicação, constitui também forma de pensamento."
- Manter hierarquia tipográfica existente

#### 13. Layout / Footer (`src/components/Layout.tsx`)
- Expandir footer com:
  - Linha de pesquisa: "Processos de Criação no Cinema e nas Artes do Vídeo"
  - Orientador: "Orientador: Prof. Dr. Fábio Jabur de Noronha"
  - Palavras-chave

---

### Resumo de arquivos a modificar/criar

| Arquivo | Ação |
|---------|------|
| `src/components/Navbar.tsx` | Editar — adicionar link "Conceitos" |
| `src/App.tsx` | Editar — adicionar rota `/conceitos` |
| `src/pages/Index.tsx` | Editar — orientador, data, palavras-chave |
| `src/pages/Apresentacao.tsx` | Editar — Lugar de Fala, pergunta + resposta sintética |
| `src/pages/Metodologia.tsx` | Editar — eixos expandidos, distinção fundamental |
| `src/pages/Estrutura.tsx` | Editar — movimentos expandidos |
| `src/pages/Conceitos.tsx` | **Criar** — Mapa de autores + conceitos próprios + Herzog |
| `src/pages/Filme.tsx` | Editar — descrição expandida, artistas da trilha |
| `src/pages/Coletivo.tsx` | Editar — "Like Rats", LowZine, Certeau, Rafão VM |
| `src/pages/Contribuicoes.tsx` | Editar — linguagem refinada |
| `src/pages/FAQ.tsx` | Editar — 7 questões com respostas densas |
| `src/pages/Conclusao.tsx` | Editar — frase adicional |
| `src/components/Layout.tsx` | Editar — footer expandido |

