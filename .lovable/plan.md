

## Duas alterações

### 1. Stills do Filme (`Filme.tsx`) — Expandir sem barras
Os stills com letterbox (barras horizontais) precisam de `object-cover` dentro de um container `aspect-video` (16:9) para que a imagem preencha o thumbnail e as barras desapareçam.

- Adicionar `aspectRatio="aspect-video"` e `imageClassName="object-cover"` nos ImageLightbox dos stills (linha 117-121)

### 2. Galeria do Coletivo (`Coletivo.tsx`) — Mudar para 16:9
- Trocar `aspectRatio="aspect-[3/4]"` por `aspectRatio="aspect-video"` (linha 102)
- Manter `imageClassName="object-contain bg-muted/20"` para as imagens caberem inteiras no 16:9

