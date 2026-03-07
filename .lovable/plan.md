

## Reorganizar nós do Lowbyrinth em padrão octogonal

Reposicionar os 9 nós para ocupar os 8 pontos cardeais/intercardeais + centro, inspirado no símbolo geométrico da imagem.

### Alteração em `src/data/lowbyrinth.ts`

Novas coordenadas (x%, y%):

| Posição | Nó | x | y |
|---|---|---|---|
| Centro | **Conclusão** | 50 | 50 |
| Topo | Apresentação | 50 | 12 |
| Topo-direita | Metodologia | 82 | 18 |
| Direita | Estrutura | 88 | 50 |
| Baixo-direita | O Coletivo | 82 | 82 |
| Baixo | Contribuições | 50 | 88 |
| Baixo-esquerda | Questões | 18 | 82 |
| Esquerda | Conceitos | 12 | 50 |
| Topo-esquerda | O Filme | 18 | 18 |

Todas as derivas existentes permanecem iguais. Apenas as coordenadas `x` e `y` de cada nó mudam.

