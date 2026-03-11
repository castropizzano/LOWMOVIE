

# Commit Geral — Auditoria de Coerência do Repositório

## Inconsistências Identificadas

### 1. PROJECT_STRUCTURE.md desatualizado

**Páginas:**
- Falta `src/pages/Intro.tsx` (rota `/` — tela de introdução com vídeo)
- `src/pages/Index.tsx` listado como rota `/` mas na verdade é `/home`
- Falta mencionar a entrada secreta ao Defense Mode (triple-click na capa)

**Componentes:**
- Falta `MethodManual.tsx` (painel de referência da metodologia)
- Falta `MethodDiagram.tsx` (diagrama interativo do sistema de conhecimento)
- Falta `PdfPageViewer.tsx` (visualizador de páginas PDF)
- Falta `NavLink.tsx` (componente de link de navegação)

### 2. CHANGELOG.md — versão incompleta

- Não menciona os links para o artigo Harpia e memorial Ecos Criativos adicionados na Conclusão
- Não menciona o Intro (tela de abertura com vídeo) como feature separada
- Não menciona internacionalização como i18next (já menciona PT/EN, mas pode ser mais preciso)

### 3. README.md — tabela de seções desatualizada

- Falta a "Intro" (tela de abertura com vídeo) na estrutura do portal
- Falta mencionar o Memorial Ecos Criativos e o artigo Harpia como links disponíveis

### 4. DEFENSE_MODE.md — ajuste menor

- O tempo de abertura foi reduzido de 5s para 2.5s — documentação pode refletir isso

---

## Plano de Alterações

### A. `PROJECT_STRUCTURE.md`
- Corrigir tabela de páginas: adicionar Intro.tsx (`/`), corrigir Index.tsx para `/home`
- Adicionar componentes faltantes: MethodManual, MethodDiagram, PdfPageViewer, NavLink
- Adicionar `src/i18n/` na seção de dados

### B. `CHANGELOG.md`
- Adicionar entrada para links do artigo Harpia e Memorial Ecos Criativos
- Adicionar referência à tela Intro com vídeo de abertura
- Manter como sub-items do v1.0-defense (sem criar nova versão)

### C. `README.md`
- Adicionar "Intro" à tabela de seções do portal
- Corrigir "Página inicial" para refletir que `/` é Intro e `/home` é Home

### D. `DEFENSE_MODE.md`
- Nenhuma alteração crítica necessária (o documento não especifica timing)

