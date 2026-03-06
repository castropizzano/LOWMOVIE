

## Mosaico de 12 fotos no Bloco 9

### Assets
Copiar as 12 fotos enviadas (`01.jpg`–`12.jpg`) para `public/images/fotos/`.

### Alteração em `src/pages/Defense.tsx` (Bloco 9, linhas 400-421)

Substituir os dois grids (stills 3-col + sequence 5-col) por um mosaico CSS Grid de 4 colunas com spans variados. Todas as fotos são portrait, então o layout alterna entre `col-span-1` e `col-span-2` para criar ritmo visual:

```text
┌────────┬────────┬────────┬────────┐
│ 01 2c  │        │ 02 1c  │ 03 1c  │  row 1
├────────┼────────┼────────┼────────┤
│ 04 1c  │ 05 1c  │ 06 2c  │        │  row 2
├────────┼────────┼────────┼────────┤
│ 07 2c  │        │ 08 1c  │ 09 1c  │  row 3
├────────┼────────┼────────┼────────┤
│ 10 1c  │ 11 1c  │ 12 2c  │        │  row 4
└────────┴────────┴────────┴────────┘
```

Cada imagem: `object-cover rounded h-48 md:h-56 w-full`. Gap de `gap-2`. O texto narrativo acima permanece inalterado.

### Arquivo editado
- `src/pages/Defense.tsx` -- bloco `case 9`

