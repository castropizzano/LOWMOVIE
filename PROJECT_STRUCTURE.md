# Estrutura do Projeto

Mapa da arquitetura do portal LOWMOVIE™.

## Páginas

| Arquivo | Rota | Seção |
|---|---|---|
| `src/pages/Intro.tsx` | `/` | Tela de abertura com vídeo |
| `src/pages/Index.tsx` | `/home` | Página inicial com capa da dissertação |
| `src/pages/Apresentacao.tsx` | `/apresentacao` | Contexto e objeto da pesquisa |
| `src/pages/Metodologia.tsx` | `/metodologia` | Pesquisa-criação implicada |
| `src/pages/Estrutura.tsx` | `/estrutura` | Arquitetura da dissertação |
| `src/pages/Conceitos.tsx` | `/conceitos` | Operadores conceituais |
| `src/pages/Filme.tsx` | `/filme` | Documentário *Like Rats* |
| `src/pages/Coletivo.tsx` | `/coletivo` | Coletivo LowPressure™ |
| `src/pages/Contribuicoes.tsx` | `/contribuicoes` | Aportes ao campo |
| `src/pages/FAQ.tsx` | `/questoes` | Tensões críticas antecipadas |
| `src/pages/Conclusao.tsx` | `/conclusao` | Síntese e horizontes |
| `src/pages/Mapa.tsx` | `/mapa` | Grafo conceitual interativo |
| `src/pages/Defense.tsx` | `/defense` | Modo de apresentação para banca (acesso oculto: triple-click na capa em `/home`) |

## Componentes Principais

| Componente | Função |
|---|---|
| `Layout.tsx` | Estrutura base com sidebar e navegação |
| `AppSidebar.tsx` | Menu lateral de navegação |
| `WelcomeOverlay.tsx` | Tela de abertura do portal (overlay na Home) |
| `LowbyrinthMode.tsx` | Navegação não-linear entre seções |
| `ConceptGraph.tsx` | Grafo interativo do mapa conceitual |
| `AnimatedSection.tsx` | Wrapper com animações Framer Motion |
| `ImageLightbox.tsx` | Visualização ampliada de imagens |
| `SectionTitle.tsx` | Títulos padronizados de seção |
| `NextSectionButton.tsx` | Navegação sequencial entre seções |
| `MethodManual.tsx` | Painel de referência rápida da metodologia |
| `MethodDiagram.tsx` | Diagrama interativo do sistema de conhecimento |
| `PdfPageViewer.tsx` | Visualizador de páginas PDF embutido |
| `NavLink.tsx` | Componente de link de navegação com estado ativo |
| `ScrollToTop.tsx` | Reset de scroll ao navegar entre páginas |

## Dados

| Arquivo | Conteúdo |
|---|---|
| `src/data/lowbyrinth.ts` | Nós e derivas do Lowbyrinth™ |
| `src/data/conceptMap.ts` | Estrutura do mapa conceitual |

## Internacionalização

| Arquivo | Conteúdo |
|---|---|
| `src/i18n/index.ts` | Configuração do i18next |
| `src/i18n/locales/pt.json` | Traduções em português |
| `src/i18n/locales/en.json` | Traduções em inglês |

## Documentos (público)

```
public/docs/
├── dissertacao.pdf
├── LowMovie_brandbook.pdf
├── LowPressure_brandbook.pdf
└── transcricoes/
    ├── Black_Media_Skate_LowMovie_Interview.pdf
    ├── Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_...pdf
    ├── Gabriel_Peralta_Photos_Interview.pdf
    ├── Rafao_VM_Skate_Marginal_Interview.pdf
    ├── Skate_Punk_Interview_Transcript.pdf
    └── Werner_Herzog_Skateboarding_Interview.pdf
```

## Imagens (público)

```
public/images/
├── coletivo/       # 15 fotos do coletivo
├── fotos/          # 12 fotografias
├── sequence/       # 14 frames de sequência + foto final
├── stills/         # 6 stills do filme
├── low-crew.png
├── low-kids.png
├── lowbyrinth.png
├── lowzine.png
├── poster-lowmovie.png
├── like-rats-cover.jpg
└── lowbyrinth-ep-cover.jpg
```
