

# Guia "Replique este Portal" — Contribuição para a Comunidade Acadêmica

## Visão geral

Criar uma nova página **`/replicar`** (ou "Para Pesquisadores") com um passo a passo didático, resumido e visual explicando como outros pesquisadores podem clonar o repositório, adaptar à sua pesquisa e replicar a estratégia de arquivamento digital (GitHub + Zenodo + ORCID + Lattes + Drive + Portal).

A página será o **gesto público de contribuição comunitária** do projeto — alinhada ao espírito open-source acadêmico e ao posicionamento do portal como ferramenta pedagógica.

## Por que essa página faz sentido

- Materializa o compromisso ético-político do projeto (autonomia, compartilhamento, código aberto)
- Transforma a dissertação em **infraestrutura replicável** para outros mestrandos/doutorandos
- Reforça o argumento de "pesquisa-criação implicada" como prática que se estende além do objeto individual
- Diferencial forte para a banca: demonstra impacto além do trabalho pessoal

## Estrutura da página

### 1. Manifesto curto (intro)
Parágrafo explicando a motivação: portal como infraestrutura aberta para pesquisadores que queiram preservar e apresentar suas pesquisas digitalmente.

### 2. Arquitetura das integrações (diagrama visual)
Card visual mostrando como as 6 camadas se conectam:

```text
   GitHub (código)  ←→  Lovable (editor visual)
        ↓
   Portal Web (apresentação)
        ↓
   Zenodo (DOI permanente)  +  ORCID (identidade)  +  Lattes (currículo)
        ↓
   Google Drive (acervo de mídias)  +  Wayback Machine (arquivo web)
```

### 3. Passo a passo (5-6 etapas numeradas em cards)

**Etapa 1 — Fork do repositório**
Link direto para o repo público no GitHub + comando `git clone`.

**Etapa 2 — Adaptação do conteúdo**
Quais arquivos editar: `src/i18n/locales/`, `src/data/`, `src/pages/`, `public/images/`, `public/docs/`. Mencionar que tudo é TypeScript + JSON, sem necessidade de backend.

**Etapa 3 — Configuração da identidade acadêmica**
Como atualizar `CITATION.cff`, links do Lattes, ORCID, banca, orientador no `Layout.tsx`.

**Etapa 4 — Publicação do DOI no Zenodo**
Como conectar GitHub → Zenodo para gerar DOI permanente automaticamente a cada release.

**Etapa 5 — Hospedagem do portal**
Opções: Lovable (mais fácil), Vercel, Netlify, GitHub Pages — todas gratuitas para projetos acadêmicos.

**Etapa 6 — Estratégia de preservação**
Link para o `PRESERVATION.md` já existente, explicando as 4 camadas (espelho offline, git bundle, mídias, Wayback).

### 4. Stack técnica (lista resumida)
React · TypeScript · Vite · Tailwind · shadcn/ui · Framer Motion — todas tecnologias livres, gratuitas e amplamente documentadas.

### 5. Licenciamento e atribuição
Esclarecer: código pode ser reutilizado livremente (estrutura, componentes); conteúdo da dissertação tem licença própria (All Rights Reserved). Pedido de atribuição: "Baseado em LOWMOVIE™ Portal — Castro Pizzano (2026)".

### 6. CTAs finais
- Botão "Ver repositório no GitHub"
- Botão "Baixar guia de preservação (PRESERVATION.md)"
- Botão "Citar este projeto" (DOI Zenodo)
- Email para contato/dúvidas

## Implementação técnica

### Arquivos novos
- `src/pages/Replicar.tsx` — página completa seguindo o padrão visual (dark, uppercase, max-w-5xl, AnimatedSection, cards com bordas sutis)

### Arquivos modificados
- `src/App.tsx` — nova rota `/replicar`
- `src/components/AppSidebar.tsx` — novo item no menu (ícone `Share2` ou `GitFork` do lucide-react), posicionado entre "Currículo" e o final do menu
- `src/i18n/locales/pt.json` e `en.json` — chaves de tradução para título, etapas, descrições
- `src/pages/Conclusao.tsx` (opcional) — adicionar link/menção na seção de Acervo apontando para `/replicar`

### Estilo visual
- Cards numerados grandes para cada etapa (1, 2, 3...) com bordas sutis e hover state
- Ícones `lucide-react` por etapa (GitFork, Edit, User, Award, Globe, Archive)
- Blocos de código com `bg-muted` e `font-mono` para os comandos shell
- Diagrama em ASCII art dentro de `<pre>` ou usando flexbox com setas Unicode

## Onde linkar a página

1. **Sidebar** — item "Replicar" / "Para Pesquisadores" (visível em toda navegação)
2. **Conclusão** — link na seção de Acervo, como gesto de extensão
3. **Footer** — opcional, badge "Open Source · Reutilizável"

## Resultado esperado

Uma página enxuta (~1 scroll longo), didática, visualmente coerente com o resto do portal, que permite a qualquer pesquisador entender em 5 minutos como replicar a infraestrutura — fortalecendo o argumento de **contribuição comunitária** e **pesquisa-criação como prática aberta**.

