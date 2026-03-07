

# Auditoria Completa do Site — Portal e Defense Mode

## Resultado da Auditoria

Apos inspecionar todos os 13 arquivos de paginas, 10 componentes, estilos e configuracao, identifiquei os seguintes problemas organizados por severidade.

---

## Problemas Encontrados

### 1. NotFound (404) — Estilo inconsistente
A pagina `NotFound.tsx` usa `bg-muted` (fundo claro) em vez do `bg-background` do resto do site, criando um flash visual branco/cinza. Tambem usa texto em ingles ("Oops! Page not found", "Return to Home") enquanto todo o site esta em portugues. Nao usa o componente `Layout`.

**Correcao**: Traduzir para portugues, usar `bg-background`, manter consistencia visual com o restante do site.

### 2. Filme.tsx — Icones importados mas nao utilizados
`Music` e `Film` sao importados de `lucide-react` mas nao aparecem no JSX. Isso gera warning de lint.

**Correcao**: Remover imports nao utilizados.

### 3. Conclusao.tsx — Pagina nomeada "Conclusao" mas funciona como "Acervo"
A pagina contem sintese + dissertacao PDF + acervo + entrevistas + brandbooks. O nome da rota e sidebar ("Conclusao") e coerente com a sintese, mas a pagina acumula muitos recursos. Isso nao e um bug, mas vale notar. **Nenhuma acao necessaria.**

### 4. Defense Mode — Bloco 12 (ConceptGraph) pode ter problemas de performance no mobile
O grafo SVG interativo com simulacao de forca roda continuamente. No mobile, pode causar lag. O bloco 12 nao tem `overflow-y-auto`, entao se o conteudo exceder a viewport, nao ha scroll.

**Correcao**: Adicionar `overflow-y-auto` ao bloco 12, consistente com os outros blocos longos.

### 5. Defense Mode — Bloco 7 (Teasers) usa IDs do YouTube para todos os teasers mas declara `platform` como campo opcional
Os teasers declarados como `platform: "youtube"` geram URLs do YouTube, mas o codigo do embed testa `platform === "youtube"` vs Vimeo. Todos os 6 teasers sao YouTube. O preloader (linha 90) tenta carregar `player.vimeo.com/video/${TEASERS[0].id}` para o teaser, mas o ID e do YouTube. Isso causa um request Vimeo invalido silencioso.

**Correcao**: Corrigir o preloader para usar a URL correta do YouTube para os teasers.

### 6. Defense Mode — Trailer (Bloco 8) — URL inconsistente com preloader
O preloader carrega `vimeo.com/video/819603753` para o bloco 8, mas o bloco 8 real usa `youtube.com/embed/Zom42CQ83CU`. O preloader carrega a URL errada.

**Correcao**: Alinhar o preloader do bloco 8 com a URL real do YouTube.

### 7. WelcomeOverlay — Nenhum botao de "pular" sem email
Usuarios sao obrigados a inserir email para acessar o site. Se a intencao e essa, OK. Mas nao ha como fechar o overlay sem fornecer email. **Nenhuma acao necessaria** se intencional.

### 8. Mapa.tsx — usa `max-w-6xl` em vez de `max-w-5xl`
Todas as paginas usam `max-w-5xl` exceto Mapa que usa `max-w-6xl`. Isso pode ser intencional para dar mais espaco ao grafo.

**Correcao**: Manter `max-w-6xl` para o mapa (justificado pelo grafo), nao alterar.

### 9. Sidebar mobile — falta link para Mapa na navegacao lateral
O sidebar lista: Home, Apresentacao, Metodologia, Estrutura, Conceitos, O Filme, O Coletivo, Contribuicoes, Questoes, Conclusao, Mapa. Todos estao presentes. **OK.**

### 10. Acessibilidade — Images sem alt descritivo no Defense Mode
Bloco 9 usa `alt="Foto 1"`, `alt="Foto 2"` etc. Poderia ser mais descritivo, mas e aceitavel para um portfolio. **Menor prioridade.**

---

## Plano de Implementacao

### Arquivo 1: `src/pages/NotFound.tsx`
- Mudar `bg-muted` para `bg-background`
- Traduzir textos para portugues
- Manter estilo minimalista consistente com o site

### Arquivo 2: `src/pages/Filme.tsx`
- Remover imports `Music` e `Film` nao utilizados

### Arquivo 3: `src/pages/Defense.tsx`
- **Preloader** (linhas 87-92): Corrigir URLs dos teasers e do trailer
  - Teaser: mudar de Vimeo para YouTube URL
  - Trailer (bloco 8): mudar de Vimeo para YouTube URL  
- **Bloco 12**: Adicionar `overflow-y-auto` + `pt-14 pb-16` + wrapper `min-h-full flex items-center justify-center` para consistencia

### Resumo: 3 arquivos editados, 5 problemas corrigidos

