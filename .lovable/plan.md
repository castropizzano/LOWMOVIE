

# Auditoria da Ordem do Menu

## Diagnóstico da ordem atual

A ordem atual mistura blocos sem agrupamento claro. Há quebras de lógica visíveis:

```text
01. Home              ← entrada
02. Apresentação      ← DISSERTAÇÃO
03. Metodologia       ← DISSERTAÇÃO
04. Estrutura         ← DISSERTAÇÃO
05. Conceitos         ← DISSERTAÇÃO
06. O Filme           ← OBRA
07. O Coletivo        ← OBRA
08. Contribuições     ← extensões
09. Questões          ← FAQ
10. Conclusão         ← fecha dissertação
11. Mapa              ← navegação alternativa  ← FORA DE LUGAR
12. Currículo         ← contexto autoral       ← FORA DE LUGAR
13. Ecossistema       ← meta-arquitetura       ← FORA DE LUGAR
14. Low Runner™       ← camada plataforma
15. Defense Mode      ← recurso
16. Imprimir          ← recurso
17. Licença           ← rodapé jurídico
```

**Problemas identificados:**

1. **Mapa (11)** está entre Conclusão e Currículo — é uma ferramenta de navegação alternativa, deveria estar perto de Defense Mode/Imprimir (recursos), não no meio do fluxo narrativo.
2. **Currículo (12)** está perdido — é contexto biográfico do autor, deveria estar perto da Apresentação (início) ou no final como anexo.
3. **Ecossistema (13)** vem antes de Low Runner™, mas conceitualmente Ecossistema é o **macro** que contém LowMovie™ + Lowbyrinth™ + Low Runner™ — deveria abrir essa seção, não vir solto.
4. Não há **agrupamento visual** entre blocos que pertencem a naturezas diferentes (dissertação · obra · ecossistema · recursos · jurídico).

## Proposta: ordem reorganizada em 5 blocos lógicos

Reordenação segue o **fluxo natural de leitura acadêmica** da defesa:

```text
┌─ ENTRADA ──────────────────────────────
01. Home

┌─ DISSERTAÇÃO (leitura linear) ─────────
02. Apresentação
03. Metodologia
04. Estrutura
05. Conceitos
06. O Filme
07. O Coletivo
08. Contribuições
09. Questões
10. Conclusão

┌─ ECOSSISTEMA (3 camadas) ──────────────
11. Ecossistema       ← abre o macro
12. Low Runner™       ← camada plataforma
13. Licença           ← regras das 3 marcas

┌─ RECURSOS (ferramentas de leitura) ────
14. Mapa              ← navegação visual
15. Defense Mode      ← apresentação
16. Imprimir          ← versões offline

┌─ ANEXO ────────────────────────────────
17. Currículo         ← contexto autoral
```

## Justificativas pontuais

- **Mapa** sai do meio narrativo e vai para "Recursos" — é uma ferramenta auxiliar de navegação, mesma natureza de Defense Mode e Imprimir.
- **Ecossistema → Low Runner™ → Licença** ficam juntos: trio que explica a arquitetura intelectual + uma das suas camadas + as regras jurídicas das três marcas. Hoje Licença está isolada no fim, longe do Ecossistema que ela regula.
- **Currículo** vai para o último lugar como **anexo biográfico** — contexto do autor, não conteúdo da dissertação. Alternativa: subir para logo após Home (decisão na implementação, ver opção B).
- **Conclusão (10)** continua fechando a dissertação — fluxo de leitura intacto.

## Opção B (alternativa viável)

Se preferir Currículo no início (contexto antes do conteúdo):

```text
01. Home
02. Currículo         ← quem é o autor
03–10. (dissertação, igual)
11–13. (ecossistema, igual)
14–16. (recursos, igual)
```

Decisão recomendada: **Opção A** (Currículo como anexo no final) — mantém o foco da entrada na obra, não no autor.

## Arquivos afetados

| Arquivo | Mudança |
|---|---|
| `src/components/AppSidebar.tsx` | Reordenar array `itemDefs` conforme ordem nova |

Apenas **um arquivo** muda. Zero impacto em rotas, traduções, ou conteúdo. Operação puramente de UX/IA.

## Princípios mantidos

- **Hallucination Zero**: nenhum item novo, apenas reordenação
- **Sidebar enxuta**: 17 itens permanecem (não cresce)
- **Agrupamento visual opcional**: pode-se adicionar `SidebarGroupLabel` para os 5 blocos no futuro, mas nesta fase basta a ordem correta
- **i18n intacto**: chaves não mudam

## Resultado esperado

Menu que **lê como a estrutura conceitual da pesquisa**: entrada → dissertação completa → ecossistema/marcas → recursos auxiliares → anexo biográfico. Banca e visitantes percebem imediatamente onde está cada coisa, sem precisar caçar. Leitura linear de cima a baixo entrega a narrativa completa do projeto.

