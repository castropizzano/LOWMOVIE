

## Imagens P&B com cor no hover

Aplicar `grayscale` em todas as imagens do site via CSS, removendo o filtro no hover para revelar as cores antes de abrir o lightbox.

### Alteração

**`src/components/ImageLightbox.tsx`** — Adicionar classes de filtro na `<img>` do thumbnail:
- `grayscale` + `hover:grayscale-0` + `transition-all duration-500` na imagem dentro do trigger
- Manter a imagem do lightbox (fullscreen) em cores normais

