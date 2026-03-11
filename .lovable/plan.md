

# Correspondência Eben Sterling / Thrasher — Análise

## O conteúdo

Troca de e-mails (maio 2024) entre Castro Pizzano e Eben Sterling (Thrasher Magazine). Sterling responde ao filme com uma frase de validação direta:

> *"I'd say you achieved your goal of presenting skateboarding and skateboard film making as art."*

Isso é significativo — é o reconhecimento externo do projeto por um agente central da cultura do skate global.

## Vale inserir?

Sim, mas de forma **leve**. Os documentos já estão no acervo. O que faz sentido é dar visibilidade à validação sem duplicar os PDFs no portal.

## Onde: Página do Filme (`/filme`), após a seção Premiere

A correspondência é sobre a **circulação do filme** — encaixa naturalmente após a Premiere, que já documenta a estreia. Uma seção curta "Correspondência" com:

- Breve parágrafo contextualizando o contato (sem expor o e-mail completo — preserva a formalidade acadêmica)
- A citação de Sterling em destaque (blockquote estilizado, como os quotes que já existem no site)
- Nota de que a correspondência completa integra o acervo do processo

Não precisa de link direto para os PDFs (já estão no Drive). A citação fala por si.

## Implementação

1. **Editar `src/pages/Filme.tsx`** — inserir uma `AnimatedSection` entre Premiere e Soundtrack
2. **Adicionar chaves de tradução** PT/EN:
   - `filme.correspondenceTitle`: "Correspondência" / "Correspondence"
   - `filme.correspondenceDesc`: contextualização breve
   - `filme.correspondenceQuote`: a frase de Sterling
   - `filme.correspondenceAttrib`: "Eben Sterling — Thrasher Magazine, 2024"
   - `filme.correspondenceNote`: nota sobre o acervo

## Resultado visual

```text
┌─────────────────────────────────────────────┐
│  PREMIERE                                   │
│  [vídeo embed]                              │
├─────────────────────────────────────────────┤
│  CORRESPONDÊNCIA                            │
│  [parágrafo de contexto]                    │
│                                             │
│  ┌─────────────────────────────────────────┐│
│  │ "I'd say you achieved your goal of      ││
│  │  presenting skateboarding and           ││
│  │  skateboard film making as art."        ││
│  │                                         ││
│  │  — Eben Sterling, Thrasher Magazine     ││
│  └─────────────────────────────────────────┘│
│                                             │
│  [nota: correspondência no acervo]          │
├─────────────────────────────────────────────┤
│  SOUNDTRACK                                 │
└─────────────────────────────────────────────┘
```

