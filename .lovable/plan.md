

## Defense Mode — Implementação

Plano aprovado. Todos os links de vídeo estão disponíveis.

### Vídeos

| Bloco | Conteúdo | Embed URL |
|-------|----------|-----------|
| 1 | Intro manobra (37s) | `https://www.youtube.com/embed/rQuIDG-1EV4` |
| 7a | Eye of Horus | `https://player.vimeo.com/video/819602079` |
| 7b | Ishtar | `https://player.vimeo.com/video/819602679` |
| 7c | Lakshmi | `https://player.vimeo.com/video/819603077` |
| 7d | Chaos | `https://player.vimeo.com/video/819602986` |
| 7e | Labyrinth | `https://player.vimeo.com/video/819602898` |
| 7f | Rat | `https://player.vimeo.com/video/819602797` |
| 9 | Trailer | `https://player.vimeo.com/video/819603753` |
| 13 | Encerramento (5:33) | `https://www.youtube.com/embed/g3SDaD16c7w` |

### Arquivos a criar/editar

**Criar: `src/pages/Defense.tsx`** (~550 linhas)
- Componente standalone, sem Layout/sidebar
- Estado `currentBlock` (0–14, agora 15 blocos — bloco 13 original vira 13 + novo bloco 14 de encerramento com vídeo)
- `bg-black` fullscreen

**Editar: `src/App.tsx`**
- Adicionar `<Route path="/defense" element={<Defense />} />`

**Editar: `src/pages/Index.tsx`**
- Triple-click na capa → `navigate("/defense")` (reset após 1s)

### Estrutura dos 15 Blocos (0–14)

| # | Conteúdo | Detalhes |
|---|----------|----------|
| 0 | Tela preta | 2s auto-advance. Sem texto/indicadores. |
| 1 | Vídeo intro manobra | YouTube embed `rQuIDG-1EV4`, autoplay, fade-in 0→1 em 0.4s. Não avança auto. |
| 2 | HOME modo foco | Capa dissertação + texto inline, sem sidebar. |
| 3 | Galeria coletivo | Grid fullscreen `/images/coletivo/01-10.png`. |
| 4 | Conceitos | Conceitos autorais com Lowbyrinth™ destacado (scale + glow). |
| 5 | Metodologia | 3 eixos (Afeto/Escuta/Improviso) em layout limpo. |
| 6 | Intro teasers | Texto central "Fragmentos simbólicos do processo criativo". |
| 7 | Playlist teasers | 6 embeds Vimeo sequenciais com sub-navegação interna. |
| 8 | Grid símbolos | 6 cards com hover highlight. |
| 9 | Trailer | Vimeo `819603753`, autoplay. |
| 10 | Galeria frames | Stills + sequence em grid cinematográfico. |
| 11 | Contribuições | 3 blocos visuais grandes. |
| 12 | Questões críticas | FAQ expandido inline. |
| 13 | Mapa Lowbyrinth™ | ConceptGraph + texto "É preciso entrar." |
| 14 | Encerramento | YouTube embed `g3SDaD16c7w`, autoplay, fade-in. Último bloco. |

### Navegação

- **→** ou **clique na tela**: próximo bloco
- **←**: bloco anterior
- **ESC**: volta para `/`
- Bloco 0: único auto-advance (2s)
- Vídeos nunca avançam automaticamente
- Indicador inferior: `BLOCO N — título` + "Defense Mode — LowMovie™ Research" (exceto bloco 0)
- Transições: framer-motion fade 0.4s
- Estrutura circular: do bloco 13 (mapa), ← volta ao bloco 1 (vídeo intro) para o loop gesto→gesto

### Easter Egg (Index.tsx)

Triple-click na `<img>` da capa em <1s → `navigate("/defense")`. Sem indicador visual.

### Detalhes técnicos

- Embeds YouTube com `?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`
- Embeds Vimeo com `?autoplay=1&background=1&muted=0`
- Preload: iframe hidden do próximo bloco via `useEffect`
- Bloco 7 (teasers): estado interno `currentTeaser` (0–5), auto-advance entre teasers desabilitado, sub-navegação por clique/teclado dentro do bloco

