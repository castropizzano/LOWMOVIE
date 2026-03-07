

## Plano: Adicionar Lattes e contato ao footer

### O que muda
Adicionar uma linha ao footer em `src/components/Layout.tsx` com o link do Lattes e o email de contato.

### Implementação
No footer do Layout (após o bloco de linha de pesquisa, ~linha 47), adicionar uma nova `div` com:
- Link para o Lattes: `http://lattes.cnpq.br/5523516994010198` (abre em nova aba)
- Email: `castropizzano@gmail.com` (como `mailto:` link)

Seguindo o mesmo estilo visual existente: `text-xs text-muted-foreground`, layout flex responsivo com `md:flex-row md:justify-between`.

### Resultado
Todas as páginas passam a exibir Lattes e email no rodapé, de forma discreta e consistente com o design atual.

