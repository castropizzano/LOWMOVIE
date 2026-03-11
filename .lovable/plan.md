

# Site Bilíngue Completo PT/EN

## Resumo

Implementar internacionalização completa com `react-i18next`. Todas as páginas, sidebar, overlays e botões terão tradução PT/EN. Toggle de idioma no header do Layout.

## Estrutura

```text
src/i18n/
  index.ts              ← config i18next + detector de idioma
  locales/
    pt.json             ← ~80 blocos de texto (conteúdo atual)
    en.json             ← tradução completa para inglês
```

## Implementação

### 1. Instalar dependências
- `react-i18next` + `i18next` + `i18next-browser-languagedetector`

### 2. Configurar i18n (`src/i18n/index.ts`)
- Idioma padrão: `pt`
- Fallback: `pt`
- Persistência em `localStorage`

### 3. Criar arquivos de tradução
- Organizar por página: `home.*`, `apresentacao.*`, `metodologia.*`, etc.
- Incluir strings de UI: sidebar, footer, buttons, overlays

### 4. Seletor de idioma
- Toggle `PT / EN` no header do Layout (ao lado dos botões Lowbyrinth™ e Manual do Método)
- Estilo consistente: `text-[11px] font-bold uppercase tracking-[0.2em]`

### 5. Refatorar páginas (~12 arquivos)
- Substituir strings hardcoded por `t('chave')`
- Páginas: Intro, Index, Apresentacao, Metodologia, Estrutura, Conceitos, Filme, Coletivo, Contribuicoes, FAQ, Conclusao, Mapa
- Componentes: AppSidebar, Layout (footer), WelcomeOverlay, LowbyrinthMode, MethodManual

### 6. Meta tags
- Atualizar `<html lang>` dinamicamente via `useEffect`
- Atualizar `document.title` conforme idioma

## Ordem de execução

1. Setup i18n + arquivos de tradução (maior volume de trabalho)
2. Toggle no header
3. Refatorar componentes compartilhados (sidebar, layout, overlay)
4. Refatorar páginas uma a uma
5. Ajustar meta tags

## Nota

O maior esforço é a **tradução dos textos acadêmicos** para inglês — são parágrafos longos e densos. A parte técnica (i18n setup + refatoração) é mecânica.

