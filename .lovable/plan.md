

## Adicionar cards com PDF viewer para brandbooks LowPressure e LowMovie

### Arquivos
- Copiar `user-uploads://LowPressure_brandbook.pdf` → `public/docs/LowPressure_brandbook.pdf`
- Copiar `user-uploads://LowMovie_brandbook.pdf` → `public/docs/LowMovie_brandbook.pdf`

### Alterações em `src/pages/Conclusao.tsx`
Após o card de Entrevistas (linha 224), adicionar dois novos cards:

1. **Manual LowMovie™** — card com ícone `FileText`, título, descrição breve, e `<iframe>` embutido apontando para `/docs/LowMovie_brandbook.pdf` com altura fixa (~600px) e borda arredondada
2. **Manual LowPressure™** — mesmo padrão, apontando para `/docs/LowPressure_brandbook.pdf`

Cada card usa o mesmo estilo visual existente (`border border-border/40 rounded-lg p-8 md:p-10 bg-card/20`). O iframe usa `type="application/pdf"` como fallback e inclui link externo abaixo para navegadores que não suportam PDF inline.

