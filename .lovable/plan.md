

## Defense Mode — Ajustes

### Mudancas

**1. Remover Block 8 (Simbolos grid) e reduzir para 13 blocos (0-13)**

Renumerar blocos: antigo 9→8 (Trailer), 10→9 (Frames), 11→10 (Contribuicoes), 12→11 (Questoes), 13→12 (Mapa), 14→13 (Encerramento).

**2. Adicionar legendas aos teasers (Block 7)**

Cada teaser tera seu nome + resumo do simbolismo abaixo do video. Textos condensados a partir do conteudo fornecido:

| Teaser | Legenda resumida |
|--------|-----------------|
| Eye of Horus | O olhar das lentes. Visao holistica — a camera como extensao do olho que capta cada manobra e momento. |
| Ishtar Star | Bastidores da criacao. Ishtar desce ao submundo para se renovar — processo individual ao encontro da uniao criativa. |
| Star of Lakshmi | Superacoes e vitorias. Lakshmi protege o espirito coletivo, concedendo vitoria sobre os obstaculos enfrentados. |
| The Chaos | Transgressao e resistencia. O caos como principio criativo — disseminacao de energia em alta velocidade. |
| Labyrinth | Picos vazios, arquitetura enfrentada. O labirinto como caminho de aprendizagem e busca pelo autoconhecimento. |
| The Rat | Vivencias e irreverencia. O rato simboliza adaptacao, sobrevivencia e ressignificacao das ruas. |

**3. Adicionar botao ESC / voltar ao portal**

Ja existe `ESC` no teclado para voltar. Adicionar um botao visual discreto no canto superior esquerdo (icone X ou "Exit") para voltar ao portal via `navigate("/")`.

**4. Navegacao entre blocos ja funciona**

← e → ja estao implementados. O botao "Next" ja existe. Vou adicionar tambem um botao "Prev" discreto no lado esquerdo para quem nao usa teclado.

### Arquivo editado

`src/pages/Defense.tsx` — remover block 8, renumerar, adicionar legendas aos teasers, adicionar botoes Exit e Prev.

