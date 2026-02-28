

## Lightbox de boas-vindas na Home (primeira visita)

### O que será feito

Criar um modal/overlay que aparece **apenas na primeira visita** do usuário à Home. O fundo (a página Index) fica visível mas esmaecido. O lightbox contém:

1. **Vídeo em loop** — embed do Streamable (`https://streamable.com/861ig9`) com autoplay, loop, sem controles
2. **Campo de email** — input simples com botão "Entrar" para fins acadêmicos
3. **Texto de contexto** — breve introdução à pesquisa
4. **Persistência** — ao submeter o email, salva flag no `localStorage` e fecha o modal. Nas visitas seguintes, o modal não aparece mais.

### Alterações

**1. Criar `src/components/WelcomeOverlay.tsx`**
- Overlay fullscreen com `backdrop-blur-sm bg-black/70` sobre a Home
- Card centralizado com:
  - Iframe do Streamable em loop (autoplay, muted, loop)
  - Título "Bem-vindo ao Labirinto Criativo"
  - Breve texto introdutório
  - Input de email + botão "Entrar"
- Ao submeter: salva `lowmovie_visited = true` no localStorage, fecha overlay com fade-out
- Usa `useState` para controlar visibilidade, `useEffect` para checar localStorage

**2. Editar `src/pages/Index.tsx`**
- Importar e renderizar `<WelcomeOverlay />` dentro do componente
- O overlay fica por cima do conteúdo existente (z-50)

### Embed do vídeo
URL do iframe: `https://streamable.com/e/861ig9?autoplay=1&loop=1&nocontrols=1`

