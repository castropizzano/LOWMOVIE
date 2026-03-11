

# Inserir três frases na Conclusão

## Análise

As três frases têm funções distintas:

1. **"Esta pesquisa não pretende estabelecer um método fechado..."** — ressalva metodológica, abre campo de possibilidades. Encaixa no bloco de texto principal (linhas 81-101), como parágrafo de transição após o texto analítico.

2. **"O LowMovie™ aparece aqui menos como conclusão..."** — reforça a ideia de processo aberto. Complementa o parágrafo anterior.

3. **"O LowMovie™ pode ser compreendido como um processo de pesquisa-criação em movimento..."** — frase-síntese da dissertação inteira. Deve ter destaque visual máximo, como citação de fechamento no card de citação (linhas 104-111), substituindo ou complementando a citação existente do Lowbyrinth™.

## Implementação

Editar `src/pages/Conclusao.tsx`:

- **Linhas 95-101**: Após o parágrafo "O que o LowMovie™ ensina...", adicionar dois novos parágrafos com as frases 1 e 2, no mesmo estilo (`text-sm text-muted-foreground`).

- **Linhas 104-111**: Adicionar a frase-síntese como segunda citação no card, com destaque visual (fonte ligeiramente maior ou separada por divisor), mantendo a citação do Lowbyrinth™ existente acima.

Nenhum arquivo novo, nenhuma dependência.

