# Changelog — LOWMOVIE™

Todas as mudanças significativas do projeto são documentadas neste arquivo.

---

## [v1.0-defense] — 2026-03-11

Versão apresentada na defesa da dissertação de mestrado.

### Portal Interativo
- Intro: tela de abertura com vídeo (`/`) e transição para o portal
- Home com capa da dissertação, dados institucionais e navegação para todas as seções
- Páginas completas: Apresentação, Metodologia, Estrutura, Conceitos, O Filme, O Coletivo, Contribuições, Questões Críticas, Conclusão
- Mapa Conceitual interativo com grafo de conexões teóricas
- Lowbyrinth™: modo de navegação não-linear entre seções
- Manual do Método: painel de referência rápida da metodologia
- Visualizador de PDF embutido (dissertação, brandbooks, transcrições)
- Internacionalização completa (PT/EN) via i18next
- Design responsivo para desktop e mobile
- Animações e transições com Framer Motion

### Defense Mode
- Página `/defense` otimizada para projeção (acesso oculto: triple-click na capa)
- Navegação por teclado (setas)
- Blocos sequenciais com conteúdo condensado
- Abertura com transição de 2.5s

### Links Externos
- Artigo Harpia (Revista Harpia, UNESPAR)
- Memorial Ecos Criativos (exposição fotográfica)

### Documentação e Preservação
- `PRESERVATION.md`: guia completo de preservação digital
- `CITATION.cff`: metadados de citação para GitHub
- `scripts/archive.sh`: script de exportação do arquivo
- DOI permanente via Zenodo: [10.5281/zenodo.18950438](https://doi.org/10.5281/zenodo.18950438)
- Snapshot no Internet Archive / Wayback Machine

### Conteúdo
- 5 vídeos do processo criativo e Lowbyrinth™
- 15 imagens do coletivo
- 12 fotografias
- 15 imagens de sequência
- 6 stills do filme
- 6 transcrições de entrevistas
- 2 brandbooks (LowMovie™ e LowPressure™)
- Dissertação completa em PDF

### Stack
- React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · i18next · react-pdf

---

*Mantido por Castro Pizzano*
