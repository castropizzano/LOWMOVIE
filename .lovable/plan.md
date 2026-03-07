

## Lightbox — Expandir para 80% da tela

**Problema**: A lightbox atual usa `max-w-5xl w-[95vw]` e `max-h-[85vh]`, mas a imagem não ocupa proporcionalmente 80% da viewport.

**Solução**: Ajustar o `DialogContent` e a `img` interna no `ImageLightbox.tsx` para que a imagem ocupe ~80% da largura e altura da tela, mantendo proporção:

- `DialogContent`: mudar para `w-[80vw] h-[80vh] max-w-none` (remover `max-w-5xl`)
- `img`: mudar para `max-w-[80vw] max-h-[80vh] object-contain`

Isso afeta todas as lightboxes do portal e do Defense Mode de uma só vez, pois todos usam o mesmo componente `ImageLightbox`.

