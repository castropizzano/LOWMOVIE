# Estrutura do portal LowMovie™

Referência técnica para navegar pelo código e manter o portal.

## Diretórios

| Caminho | Conteúdo |
|---|---|
| `src/pages/` | Páginas e modos de apresentação |
| `src/components/` | Navegação, painéis, visualizadores e componentes de interface |
| `src/data/` | Destinos do portal, materiais do arquivo e dados da pesquisa |
| `src/i18n/` | Configuração de idiomas e textos em português e inglês |
| `src/assets/` | Recursos importados pelo código e referências a arquivos externos |
| `public/docs/` | Documentos servidos pelo portal |
| `public/images/` | Fotografias, frames e imagens do projeto |
| `scripts/` | Ferramenta de preservação dos arquivos distribuídos |

## Rotas principais

As rotas são registradas em [src/App.tsx](src/App.tsx).

| Rota | Arquivo | Conteúdo |
|---|---|---|
| `/` | `src/pages/Intro.tsx` | Abertura audiovisual |
| `/home` | `src/pages/Index.tsx` | Acessos principais |
| `/filme` | `src/pages/Filme.tsx` | Filme LowMovie™ e processo criativo |
| `/coletivo` | `src/pages/Coletivo.tsx` | Coletivo LowPressure™ |
| `/livro` | `src/pages/Livro.tsx` | Livro em preparação editorial |
| `/arquivo` | `src/pages/Arquivo.tsx` | Obras e documentos de processo |
| `/apresentacao` | `src/pages/Apresentacao.tsx` | Contexto e objeto da pesquisa |
| `/metodologia` | `src/pages/Metodologia.tsx` | Pesquisa-criação implicada |
| `/estrutura` | `src/pages/Estrutura.tsx` | Arquitetura da dissertação |
| `/conceitos` | `src/pages/Conceitos.tsx` | Operadores conceituais |
| `/contribuicoes` | `src/pages/Contribuicoes.tsx` | Contribuições da pesquisa |
| `/questoes` | `src/pages/FAQ.tsx` | Questões críticas |
| `/conclusao` | `src/pages/Conclusao.tsx` | Síntese e desdobramentos |
| `/mapa` | `src/pages/Mapa.tsx` | Mapa conceitual |
| `/timeline` | `src/pages/Timeline.tsx` | Trajetória |
| `/ecossistema` | `src/pages/Ecossistema.tsx` | Relações entre obras, documentos e pesquisa |
| `/replicar` | `src/pages/Replicar.tsx` | Materiais e possibilidades de uso |
| `/licenca` | `src/pages/Licenca.tsx` | Condições de uso |

## Apresentação e impressão

| Rota | Arquivo |
|---|---|
| `/defense` | `src/pages/Defense.tsx` |
| `/defense-mode` | `src/pages/DefenseModeAbout.tsx` |
| `/imprimir` | `src/pages/Imprimir.tsx` |
| `/palestra` | `src/pages/Palestra.tsx` |
| `/palestra/:bloco` | `src/pages/PalestraBloco.tsx` |
| `/guia-apresentador` | `src/pages/GuiaApresentador.tsx` |

## Arquivos de referência

| Arquivo | Função |
|---|---|
| [src/data/portal.ts](src/data/portal.ts) | Destinos principais, estado editorial do livro, materiais do arquivo e entrevistas |
| [src/data/lowbyrinth.ts](src/data/lowbyrinth.ts) | Nós e percursos do Lowbyrinth™ |
| [src/data/conceptMap.ts](src/data/conceptMap.ts) | Relações do mapa conceitual |
| [src/i18n/index.ts](src/i18n/index.ts) | Configuração do i18next |
| [src/i18n/locales/pt.json](src/i18n/locales/pt.json) | Textos em português |
| [src/i18n/locales/en.json](src/i18n/locales/en.json) | Textos em inglês |
| [package.json](package.json) | Dependências e comandos de desenvolvimento |

## Documentos e recursos externos

A dissertação e os fac-símiles históricos devem ser preservados sem alterações. Documentos derivados e versões anteriores têm identificação e tratamento próprios, conforme [PRESERVATION.md](PRESERVATION.md).

Alguns arquivos são referenciados por endereços externos em `src/assets/` e nos dados do portal. Um clone do código não inclui automaticamente todos os arquivos hospedados em outros serviços. Consulte [README.md](README.md) para executar o projeto localmente.
