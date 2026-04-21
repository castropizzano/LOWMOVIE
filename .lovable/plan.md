

# Separação visual discreta dos blocos do menu

## Objetivo

Adicionar separação visual sutil entre os 5 blocos lógicos do sidebar (Entrada · Dissertação · Ecossistema · Recursos · Anexo), sem poluir a interface nem introduzir labels que aumentem ruído visual. O menu já está ordenado corretamente — falta apenas o **respiro visual** que comunica o agrupamento.

## Abordagem escolhida: separadores finos entre blocos

Em vez de adicionar `SidebarGroupLabel` (que adiciona texto e altura), uso uma **linha divisória extremamente sutil** entre os blocos, com pequeno espaçamento vertical. Resultado: o olho percebe os 5 grupos sem precisar ler labels.

```text
Home
─────────────  ← divisor sutil
Apresentação
Metodologia
...
Conclusão
─────────────  ← divisor sutil
Ecossistema
Low Runner™
Licença
─────────────  ← divisor sutil
Mapa
Defense Mode
Imprimir
─────────────  ← divisor sutil
Currículo
```

## Implementação técnica

**Arquivo único afetado:** `src/components/AppSidebar.tsx`

1. Adicionar campo opcional `divider: true` no `itemDefs` para os itens que **iniciam** um novo bloco (apresentacao, ecossistema, mapa, timeline).
2. No `.map()`, antes de renderizar cada item com `divider: true`, renderizar um `<li>` com classe `my-2 mx-3 border-t border-sidebar-border/30`.

Especificações visuais:
- Cor: `border-sidebar-border/30` (30% opacidade do token existente — quase imperceptível mas presente)
- Espaçamento: `my-2` acima/abaixo do divisor
- Margem horizontal: `mx-3` (não toca as bordas do sidebar)

## Princípios mantidos

- **Zero novos textos**: nenhuma label de grupo adicionada, i18n intacto
- **Zero nova dependência**: usa apenas tokens semânticos já existentes
- **Minimalismo preservado**: separadores invisíveis à primeira vista, perceptíveis ao olhar atento
- **Hallucination Zero**: nenhum item do menu muda, apenas espaçamento visual
- **Mobile-friendly**: separadores escalam naturalmente no offcanvas

## Resultado esperado

Sidebar com **ritmo visual** que comunica os 5 blocos de forma silenciosa. Banca e visitantes percebem subliminarmente o agrupamento conceitual (entrada → dissertação → ecossistema → recursos → anexo) sem que o menu vire uma lista verbosa com cabeçalhos. Mantém a estética minimalista que já é marca do portal.

