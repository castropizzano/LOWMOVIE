

# Fix: Labels de expansão cortados na borda direita

## Problema
Os labels de expansão posicionados no lado direito do diagrama (como "Lowzine") usam `textAnchor="start"` e se estendem além do viewBox de 700px.

## Solução — `src/components/MethodDiagram.tsx`

1. **Expandir viewBox** de `700x700` para `800x800`, recentrar em (400, 400)
2. **Manter os raios iguais** — o diagrama não muda de tamanho, apenas ganha margem
3. **Atualizar `cx`/`cy`** de 350 para 400
4. **Resultado**: ~50px de margem extra em cada lado para os labels não cortarem

Alternativa mais leve: reduzir `endR + 12` para `endR + 8` e diminuir fontSize para 10, mas isso sacrifica legibilidade. O viewBox maior é a solução mais limpa.

