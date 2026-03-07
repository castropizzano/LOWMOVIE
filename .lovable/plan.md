

# Correcao da Diagramacao do ConceptGraph

## Problema

Os nos do grafo estao se sobrepondo porque os parametros da simulacao de forca estao mal calibrados:
- Forca de repulsao muito fraca (800) para 19 nos
- Distancia ideal das arestas curta demais (120px)
- Gravidade central puxa tudo para o meio
- Posicoes iniciais aleatorias geram colisoes

## Solucao

Ajustar a fisica da simulacao em `src/components/ConceptGraph.tsx`:

1. **Aumentar repulsao** de 800 para 2500 — nos se afastam mais
2. **Aumentar distancia ideal das arestas** de 120 para 180px
3. **Reduzir gravidade central** de 0.001 para 0.0005
4. **Aumentar iteracoes** de 300 para 500 para convergir melhor
5. **Expandir limites** dos nos (padding de 40 para 50) para usar mais espaco
6. **Usar posicoes iniciais determinísticas** por tipo: campos nas bordas externas, autores no anel medio, conceitos no centro — evitando randomizacao que gera clustering

### Arquivo: `src/components/ConceptGraph.tsx`
- Linha 30-41: Posicoes iniciais determinísticas separando tipos em aneis concentricos com angulos fixos
- Linha 51: maxIterations = 500
- Linha 64: repulsao = 2500
- Linha 82: distancia ideal = 180
- Linha 93-94: gravidade = 0.0005
- Linha 103-104: limites expandidos (50, 850) e (50, 600)

