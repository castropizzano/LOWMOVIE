

## Plano — 3 Eixos de Correção

### 1. Remover animações de entrada (conteudo visivel imediatamente)

**AnimatedSection.tsx**: Alterar o componente para renderizar um `div` simples sem animação (mantendo className). Isso afeta todas as páginas de uma vez.

**Conclusao.tsx**: Substituir os 4 blocos `motion.div`/`motion.p` por elementos HTML estáticos (`div`, `p`) sem `initial`/`animate`/`transition`.

**Index.tsx**: Substituir os 7 blocos `motion.div`/`motion.h1`/`motion.p` por elementos estáticos.

### 2. Botão "Próxima seção" no final de cada página

Criar um componente `NextSectionButton` reutilizável que recebe `to` e `label`. Usar a mesma linguagem visual do botão da Home (border, uppercase, tracking-widest, ArrowRight icon).

Sequência de navegação (conforme Navbar):
- `/apresentacao` → `/metodologia` (Metodologia)
- `/metodologia` → `/estrutura` (Estrutura)
- `/estrutura` → `/conceitos` (Conceitos)
- `/conceitos` → `/filme` (O Filme)
- `/filme` → `/coletivo` (O Coletivo)
- `/coletivo` → `/contribuicoes` (Contribuições)
- `/contribuicoes` → `/faq` (Questões)
- `/faq` → `/conclusao` (Conclusão)
- `/conclusao` → nenhum (página final)

Adicionar o componente no final de cada página (antes do `</section>`), dentro do container.

### 3. Vocabulário — tornar termos técnicos mais acessíveis

Termos identificados que podem ser opacos para leitores não-acadêmicos:

| Termo | Arquivo | Correção proposta |
|-------|---------|-------------------|
| **talude** (2x) | `Filme.tsx` L161, L191 | Adicionar explicação inline: "talude (plano inclinado de concreto)" na primeira ocorrência |
| **rizomática** | `Coletivo.tsx` L36 | Adicionar: "construção rizomática (que cresce em rede, sem hierarquia fixa)" |
| **liminaridade** | `Filme.tsx` L191 | Substituir por: "risco, zona de limiar (entre controle e incerteza) e improviso" |
| **apriorísticas** | `Estrutura.tsx` L107 | Substituir por: "categorias definidas de antemão" |
| **formatividade** | `FAQ.tsx` L14 | Substituir por: "ao fazer em ato, ao modo como a obra se forma durante o processo" |
| **epistemológico/a** (recorrente) | Vários | Manter — termo central da dissertação, amplamente compreensível no contexto acadêmico. Não simplificar. |
| **imanente** | `FAQ.tsx` L31 | Substituir por: "Sua dimensão política é inseparável da prática" |

**Total**: 7 ajustes de vocabulário em 4 arquivos + 1 novo componente + remoção de animações em 3 arquivos.

### Arquivos modificados

| Arquivo | Alteração |
|---------|-----------|
| `AnimatedSection.tsx` | Remover animação, renderizar div simples |
| `Index.tsx` | Remover motion, usar HTML estático |
| `Conclusao.tsx` | Remover motion, usar HTML estático |
| `NextSectionButton.tsx` (novo) | Componente de navegação reutilizável |
| `Apresentacao.tsx` | Adicionar NextSectionButton |
| `Metodologia.tsx` | Adicionar NextSectionButton |
| `Estrutura.tsx` | Adicionar NextSectionButton + corrigir "apriorísticas" |
| `Conceitos.tsx` | Adicionar NextSectionButton |
| `Filme.tsx` | Adicionar NextSectionButton + corrigir "talude" e "liminaridade" |
| `Coletivo.tsx` | Adicionar NextSectionButton + corrigir "rizomática" |
| `Contribuicoes.tsx` | Adicionar NextSectionButton |
| `FAQ.tsx` | Adicionar NextSectionButton + corrigir "formatividade" e "imanente" |

