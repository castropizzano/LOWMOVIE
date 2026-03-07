

# Defense Mode — Auditoria Completa e Ajustes para Versao Publicavel

## Problemas Encontrados

### 1. Overflow de conteudo (Desktop e Mobile)
Varios blocos tem conteudo que ultrapassa a viewport (100vh), causando texto cortado no topo ou conteudo invisivel:
- **Block 3** (O Coletivo): texto cortado no topo, imagem ocupa viewport inteira
- **Block 4** (Conceitos): texto introdutorio invisivel no mobile, 6 cards + texto nao cabem
- **Block 5** (Metodologia): 4 paragrafos + 3 cards + imagem — muito conteudo
- **Block 9** (Frames): texto cortado, galeria de 12 fotos ultrapassa viewport
- **Block 10** (Contribuicoes): cards + imagem podem cortar no mobile
- **Block 11** (Questoes): 8 FAQ items nao cabem na viewport

**Solucao**: Adicionar `overflow-y-auto` nos containers dos blocos que excedem a viewport. Garantir padding-top suficiente para nao sobrepor o botao X. Adicionar padding-bottom para nao sobrepor o footer.

### 2. Escape fecha Defense Mode mesmo com lightbox/dialog aberto
Quando o lightbox esta aberto no Block 9, pressionar Escape navega para home em vez de apenas fechar o dialog. O handler de teclado nao verifica se ha um dialog aberto.

**Solucao**: No handler de keydown, verificar se ha um `[role="dialog"]` ou `[data-state="open"]` no DOM antes de processar Escape como "voltar ao portal".

### 3. Block 2 no mobile — layout quebrado
O grid `md:grid-cols-2` empilha corretamente no mobile, mas o poster + textos + credenciais ultrapassam a viewport sem scroll.

**Solucao**: Mesmo fix do item 1 — overflow-y-auto com padding adequado.

### 4. Clique em SVG (icone chevron do FAQ) nao avanca bloco — OK
O `handleClick` ja filtra `svg`, entao o FAQ funciona. Confirmado.

### 5. Lightbox funciona — Confirmado
Clique na imagem abre lightbox corretamente sem avancar bloco. A imagem aparece em cor com caption.

## Plano de Implementacao

**Arquivo unico**: `src/pages/Defense.tsx`

### Mudanca 1: Overflow scrollable nos blocos com conteudo longo
Nos blocos 3, 4, 5, 9, 10, 11: adicionar `overflow-y-auto` no container principal e padding `pt-12 pb-16` para evitar sobreposicao com o botao X (top-4) e o footer.

### Mudanca 2: Escape inteligente
No handler de keydown (linha ~176), antes de processar `e.key === "Escape"`, verificar:
```typescript
if (e.key === "Escape") {
  if (document.querySelector("[role='dialog'][data-state='open']")) return;
  navigate("/");
}
```

### Mudanca 3: Ajuste de max-height na imagem do Block 3
Limitar a imagem do low-kids a `max-h-[50vh]` para que texto + imagem caibam na viewport desktop.

### Mudanca 4: Block 9 grid — reduzir altura dos thumbnails no mobile
Mudar `h-48 md:h-56` para `h-32 md:h-48` para que mais imagens caibam na viewport e garantir scroll funcional.

