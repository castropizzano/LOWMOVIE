

# Fix: Sistema de Conhecimento Criativo — Diagrama Cortado

## Problema
O SVG do diagrama tem `viewBox="0 0 520 520"` com centro em (260,260). Os labels de texto dos itens de expansão (raio ~258px) ficam cortados nas bordas porque o texto se estende além do viewBox. O diagrama também aparece pequeno porque tem `width="520"` fixo com `max-w-full`.

## Solução

### Arquivo: `src/components/MethodDiagram.tsx`

1. **Expandir o viewBox** de `0 0 520 520` para `0 0 700 700` e recentrar tudo em (350, 350)
2. **Aumentar os raios** proporcionalmente para ocupar melhor o espaço:
   - experiencia: 230 → 300
   - processo: 180 → 240
   - triade: 130 → 180
   - conceitos: 80 → 115
   - core: 35 → 45
3. **Ajustar raios de expansão** (startR/endR) para ~310/330 com texto a ~340, dando espaço para os labels não cortarem
4. **Remover width/height fixos** do SVG e usar apenas `viewBox` + `className="w-full max-w-2xl"` para que o diagrama se expanda responsivamente
5. **Aumentar fontSize** dos labels de expansão de 9 → 11 para melhor legibilidade

Essas mudanças eliminam o corte dos labels e fazem o diagrama ocupar mais espaço horizontal disponível.

