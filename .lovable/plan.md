

## Inserir capa da dissertação na Home com layout lado a lado

### Arquivos
- Copiar `user-uploads://image-12.png` → `src/assets/capa-dissertacao.png`

### Alterações em `src/pages/Index.tsx`

1. Importar a imagem: `import capaDissertacao from "@/assets/capa-dissertacao.png"`
2. Transformar o conteúdo da section em um grid de 2 colunas (`grid md:grid-cols-2 gap-12 items-center`)
3. Coluna esquerda: imagem da capa com `rounded-lg shadow-lg` e proporção preservada
4. Coluna direita: todo o texto existente (título, subtítulo, informações acadêmicas, botão, epígrafe, tags)
5. Em mobile, a imagem fica acima do texto (ordem natural do grid)

