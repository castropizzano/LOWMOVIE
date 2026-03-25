# Timeline Acadêmica — Página com dados do Lattes XML

## Visão geral

Criar uma página **"/timeline"** com uma linha do tempo vertical interativa mostrando a trajetória acadêmica e profissional do Castro Pizzano, extraída do XML do Lattes. A página seguirá o estilo visual do portal (dark, tipografia uppercase, cards com bordas sutis).

## Dados extraídos do XML

O XML contém dados ricos que serão organizados em categorias na timeline:


| Categoria                | Dados                                                                                                                               | Período    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Formação**             | Técnico em Design (UTFPR), Direção Cinematográfica (AIC), Publicidade (UTP, UP), Gestão da Comunicação (UTP), Direção de Arte (UTP) | 1999–2016  |
| **Mestrado**             | PPG-CINEAV, UNESPAR                                                                                                                 | 2024–atual |
| **Atuação profissional** | CasaTreze, Sabre Vision, Fortune Skate, LowPressure, RadioTreze, AnotherOther, Bematech, etc. (~20 vínculos)                        | 2003–atual |
| **Publicações**          | Artigos na Percurso e Harpia                                                                                                        | 2014, 2025 |
| **Produções técnicas**   | Livros (Acid Neon, Carcoma, Mirage, Oriki), produções digitais (THEVØIDN13, NYX, LowMovie Portal)                                   | 2017–2026  |
| **Áreas de atuação**     | Artes, Cinema, Design, Comunicação, Educação                                                                                        | —          |
| **Idiomas**              | Português, Espanhol, Inglês                                                                                                         | —          |


## Implementação

### 1. Arquivo de dados: `src/data/lattesTimeline.ts`

Dados hardcoded (extraídos manualmente do XML) organizados como array tipado:

```ts
type TimelineEntry = {
  year: number;
  yearEnd?: number;
  category: 'formacao' | 'profissional' | 'publicacao' | 'producao' | 'mestrado';
  title: string;
  subtitle?: string;
  institution?: string;
  status?: string;
}
```

~30-35 entradas ordenadas cronologicamente.

### 2. Página: `src/pages/Timeline.tsx`

- Layout vertical com linha central e marcadores por ano
- Cards alternados esquerda/direita (desktop), empilhados (mobile)
- Filtro por categoria no topo (chips clicáveis)
- Cores distintas por categoria usando a paleta do portal (primary, muted tones)
- Seção de resumo no topo com bio curta extraída do XML
- Link para o Lattes completo e ORCID

### 3. Integrações

- **App.tsx**: nova rota `/timeline`
- **AppSidebar.tsx**: novo item no menu (ícone `GraduationCap` ou `Clock`)
- **i18n pt.json / en.json**: traduções para sidebar, título da página e categorias
- **Conclusao.tsx**: o NextSectionButton atual vai para `/mapa`; a timeline pode ser linkada na seção de Acervo

### 4. Estilo visual

- Linha central vertical com `border-l` ou pseudo-elemento
- Cada entry: card com borda sutil, hover state, ano em destaque
- Badges coloridos por categoria
- Animação de entrada com o componente `AnimatedSection` já existente no projeto  
  
Insira todas as produções existentes no lattes, bancas, participaçoes, encontros, o conteúdo real e exato na integra, nessa timeline. pode ser uma página depois de mapa, apenas como referencia sobre o autor