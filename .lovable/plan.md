

## Corrigir cards do YouTube visíveis após o vídeo no Bloco 1

**Problema**: Quando o vídeo do YouTube termina, ele exibe thumbnails de recomendação. O overlay de texto usa `bg-background/80` (80% opacidade), permitindo que os cards do YouTube apareçam por trás.

**Solução**: Duas correções em `src/pages/Defense.tsx`:

1. **Overlay opaco**: Trocar `bg-background/80` por `bg-background` (100% opaco) no overlay de texto pós-vídeo (linha 179), para cobrir completamente o iframe.

2. **Esconder iframe quando o vídeo terminar**: Quando `videoEnded` for `true`, esconder o iframe (via CSS `opacity-0` ou removê-lo do DOM), garantindo que os cards do YouTube não sejam renderizados.

Mudança pontual em ~3 linhas no bloco `case 1`.

