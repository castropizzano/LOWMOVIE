

# Vídeo do Processo Lowbyrinth (Blender) — Onde encaixar

## Análise

O vídeo de 13s mostra o processo de criação do movimento do Lowbyrinth no Blender. Após revisar todas as páginas, o melhor lugar é a **página Conceitos** (`/conceitos`), logo após a definição do conceito "Lowbyrinth" — que é o primeiro item na lista de conceitos próprios. O vídeo funciona como registro visual da materialização do conceito em interface.

**Alternativa descartada:** Estrutura (seção "Portal como Interface") — possível, mas a conexão conceitual é mais forte na página de Conceitos.

## Implementação

1. **Copiar o vídeo** para `public/videos/lowbyrinth-process.mp4`
2. **Editar `Conceitos.tsx`** — inserir um bloco de vídeo logo após a definição do conceito Lowbyrinth (primeiro item da lista de conceitos próprios), usando um `<video>` nativo com `autoPlay`, `loop`, `muted`, `playsInline` e o filtro `grayscale` com hover colorido (padrão do site)
3. **Adicionar chaves de tradução** nos JSONs:
   - `conceitos.processVideoCaption` (PT): "Processo de criação do movimento do Lowbyrinth™ no Blender"
   - (EN): "Lowbyrinth™ movement creation process in Blender"

O vídeo será exibido inline com `aspect-video`, `rounded-lg`, `border border-border`, seguindo o padrão visual do site. Por ser curto (13s), autoplay em loop mudo é a melhor experiência.

