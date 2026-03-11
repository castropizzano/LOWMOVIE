

# Vídeos Lowbyrinth™ em Abas — Página Conceitos

## O que muda

Substituir o vídeo isolado do Blender (após o conceito Lowbyrinth) por um componente de **Tabs** com 4 abas:

1. **Processo** — vídeo atual do Blender (`lowbyrinth-process.mp4`)
2. **Box** — `lowbyrinth-nft-box.mp4`
3. **Card** — `lowbyrinth-nft-card.mp4`
4. **VHS Tape** — `lowbyrinth-nft-vhs.mp4`

O player ocupa a **largura total do corpo de texto** (remove o `max-w-md` atual e o `ml-6`), alinhado com o restante do conteúdo.

## Implementação

1. **Copiar os 3 vídeos** para `public/videos/`:
   - `lowbyrinth-nft-box.mp4`, `lowbyrinth-nft-card.mp4`, `lowbyrinth-nft-vhs.mp4`

2. **Editar `src/pages/Conceitos.tsx`**:
   - Importar `Tabs, TabsList, TabsTrigger, TabsContent` de `@/components/ui/tabs`
   - Substituir o bloco condicional `{key === "lowbyrinth" && ...}` (linhas 62-74) por um componente Tabs com 4 abas
   - Cada `TabsContent` contém um `<video>` com `autoPlay`, `loop`, `muted`, `playsInline`
   - Estilo do vídeo: `w-full aspect-video rounded-lg border border-border grayscale hover:grayscale-0 transition-all duration-500` (sem `max-w-md`, sem `ml-6`)
   - Legenda traduzida abaixo de cada vídeo
   - O container do Tabs alinhado com `mt-4` direto (sem margin-left)

3. **Adicionar chaves de tradução** nos JSONs PT/EN:
   - `conceitos.tabProcesso` / `conceitos.tabBox` / `conceitos.tabCard` / `conceitos.tabVHS`
   - `conceitos.nftBoxCaption`, `conceitos.nftCardCaption`, `conceitos.nftVHSCaption`

## Resultado visual

```text
┌─────────────────────────────────────────────┐
│  LOWBYRINTH                                 │
│  [definição do conceito...]                 │
│                                             │
│  ┌──────┬─────┬──────┬──────────┐           │
│  │Processo│ Box │ Card │ VHS Tape│           │
│  └──────┴─────┴──────┴──────────┘           │
│  ┌─────────────────────────────────────────┐│
│  │                                         ││
│  │         [vídeo full-width]              ││
│  │                                         ││
│  └─────────────────────────────────────────┘│
│  Legenda do vídeo selecionado               │
└─────────────────────────────────────────────┘
```

