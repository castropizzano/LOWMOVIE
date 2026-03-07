

# Defense Mode — Centralização Vertical Perfeita em Todos os Blocos

## Problema
Os blocos usam padrões de layout inconsistentes: alguns centralizam verticalmente (`items-center`), outros alinham ao topo (`items-start`, `justify-start`), causando conteúdo posicionado de formas diferentes entre blocos.

## Diagnóstico por bloco

| Bloco | Layout atual | Problema |
|-------|-------------|----------|
| 1, 6, 7, 8, 12, 13 | `flex items-center justify-center h-full` | OK — centralizado |
| 2, 4, 5, 10, 11 | `flex items-start` + `my-auto` | `items-start` anula o `my-auto`, alinha ao topo |
| 3, 9 | `flex-col justify-start` | Explicitamente alinhado ao topo |

## Solução

Padronizar todos os blocos scrolláveis (2, 3, 4, 5, 9, 10, 11) com este padrão:

```text
<div className="h-full overflow-y-auto px-8 pt-14 pb-16">
  <div className="min-h-full flex items-center justify-center">
    <div className="max-w-5xl w-full">
      ...conteúdo...
    </div>
  </div>
</div>
```

O `min-h-full` + `flex items-center` garante centralização quando o conteúdo cabe na viewport, e scroll natural quando excede. Isso substitui os padrões inconsistentes de `items-start`/`justify-start`/`my-auto`.

### Arquivo editado
`src/pages/Defense.tsx` — blocos 2, 3, 4, 5, 9, 10, 11 (7 containers ajustados).

