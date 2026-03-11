

# Manual do Método LowMovie™ — Botão no Header

## Abordagem

Adicionar um botão "Manual do Método" ao lado do botão "Lowbyrinth™" no header. Ao clicar, abre um overlay fullscreen (mesmo padrão do LowbyrinthMode) contendo:

1. **Diagrama concêntrico animado** — 5 camadas SVG/CSS com framer-motion
2. **13 Princípios do Manifesto** — cards numerados com tipografia forte

## Arquivos

### 1. `src/components/MethodDiagram.tsx` (novo)
Componente SVG com 5 anéis concêntricos animados (framer-motion). Cada anel revela seus itens ao hover/click. Fundo transparente (o overlay já é dark), linhas geométricas brancas finas, acentos em vermelho (`hsl(0, 70%, 50%)`). Centro: "LOWMOVIE™" pulsante. Setas de expansão saindo do último anel para Filme / LowZine / Portal / Eventos / Arquivo Vivo.

### 2. `src/components/MethodManual.tsx` (novo)
Overlay fullscreen (mesmo padrão do `LowbyrinthMode`): `fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-auto`. Contém:
- Header com título "Manual do Método LowMovie™" + botão fechar
- Texto introdutório breve (seção 1 do manual — o deslocamento fundamental)
- Componente `MethodDiagram`
- Seção "13 Princípios" — números grandes em vermelho, frases em branco, layout coluna única, tipografia manifesto
- Scroll suave entre seções

### 3. `src/components/Layout.tsx` (editar)
- Importar `MethodManual`
- Adicionar state `methodOpen`
- Adicionar botão "Manual do Método" no header ao lado do Lowbyrinth™ (mesmo estilo visual)
- Renderizar `<MethodManual open={methodOpen} onClose={...} />`

## Visual do Header

```text
[☰] [Lowbyrinth™] [Manual do Método]
```

Ambos os botões com o mesmo estilo: `text-[11px] font-bold uppercase tracking-[0.2em]` com borda sutil.

## 13 Princípios (rascunho)

1. A cidade e a rua como campo de criação
2. O corpo como instrumento de pesquisa
3. A câmera como extensão do corpo em movimento
4. O skate como gerador de linguagem audiovisual
5. O erro como matéria sagrada
6. O improviso como epistemologia
7. A escuta como método
8. O afeto como forma de conhecimento
9. O glitch e a imperfeição como força estética
10. A autonomia como política criativa
11. A crew como organismo criativo
12. A obra se expande para além do filme
13. LowMovie™ é um sistema criativo vivo — produzir é resistir

## Estilo do diagrama

5 círculos concêntricos em SVG, animados sequencialmente (de fora para dentro). Labels posicionados sobre cada anel. Hover expande detalhes. Mobile: layout vertical empilhado (camadas como cards). Desktop: SVG circular com ~500px de diâmetro centralizado.

