

## Substituir vídeo da lightbox por YouTube

### Alteração

**`src/components/WelcomeOverlay.tsx`** — Trocar a URL do iframe:

- **De:** `https://streamable.com/e/861ig9?autoplay=1&loop=1&nocontrols=1`
- **Para:** `https://www.youtube.com/embed/3kO3N49cUkU?autoplay=1&loop=1&playlist=3kO3N49cUkU&controls=0&mute=1&showinfo=0&rel=0&modestbranding=1`

Parâmetros utilizados:
- `autoplay=1` — reprodução automática
- `mute=1` — necessário para autoplay funcionar nos navegadores
- `loop=1&playlist=3kO3N49cUkU` — loop contínuo (YouTube exige playlist= com o próprio ID para loop funcionar)
- `controls=0` — sem controles visíveis
- `showinfo=0&rel=0&modestbranding=1` — interface limpa sem sugestões

