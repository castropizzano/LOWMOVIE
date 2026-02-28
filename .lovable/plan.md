

## Vídeos em preto e branco antes do hover/play

Aplicar o mesmo padrão visual das imagens (grayscale → cor no hover) aos iframes de vídeo.

### Alterações

**1. `src/components/WelcomeOverlay.tsx`**
- Adicionar `grayscale group-hover:grayscale-0 transition-all duration-500` ao iframe do YouTube
- Adicionar `group` ao container do vídeo

**2. `src/pages/Filme.tsx`**
- Adicionar `grayscale hover:grayscale-0 transition-all duration-500` ao iframe do Vimeo
- Adicionar `group` ao container e usar `group-hover:grayscale-0` no iframe

### Nota técnica
O filtro CSS `grayscale` funciona em iframes. O vídeo aparecerá em preto e branco e revelará as cores ao passar o mouse, consistente com o tratamento das imagens.

