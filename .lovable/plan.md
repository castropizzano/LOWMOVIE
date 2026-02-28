

## Reorganizar Conclusão: cards, alinhamento à esquerda, fix PDF bloqueado

### Problemas identificados
1. O iframe do PDF está bloqueado pelo Chrome ("Esta página foi bloqueada pelo Chrome")
2. Os 3 blocos (Dissertação, Acervo, Entrevista) não estão em cards — são seções soltas
3. Textos centralizados em vez de alinhados à esquerda

### Alterações em `src/pages/Conclusao.tsx`

1. **Trocar `text-center` por `text-left`** no container principal (linha 8)
2. **Remover `mx-auto` dos separadores** e alinhá-los à esquerda
3. **Remover `items-center justify-center`** dos flex de título, trocando por alinhamento à esquerda
4. **Substituir o iframe do PDF** por um card com link externo (mesmo padrão do Acervo), apontando para `/docs/dissertacao.pdf` com `target="_blank"` — o navegador abrirá o PDF no seu próprio viewer
5. **Envolver cada seção (Dissertação, Acervo, Entrevista) em um card** com `border border-border/40 rounded-lg p-8 md:p-10 bg-card/20`
6. **Dentro de cada card**: título com ícone, descrição, e conteúdo (link ou iframe do YouTube) — tudo alinhado à esquerda
7. **Textos justificados** (`text-justify`) nos parágrafos do corpo, títulos alinhados à esquerda

### Estrutura final dos 3 cards

```text
┌─────────────────────────────────────┐
│ 📄 DISSERTAÇÃO COMPLETA            │
│ Leia a dissertação na íntegra...   │
│ [↗ Abrir Dissertação em PDF]       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📁 ACERVO DO PROCESSO              │
│ Documentos, registros e materiais..│
│ [↗ Abrir Acervo no Google Drive]   │
│ 👁 Somente visualização            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ▶ ENTREVISTA COMPLETA              │
│ Podcast Chiclé Vídeos              │
│ Conversa sobre a trajetória...     │
│ ┌─────────────────────────────────┐ │
│ │     YouTube Player embed        │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Escopo
- Apenas `src/pages/Conclusao.tsx` será modificado

