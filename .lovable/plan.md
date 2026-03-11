

# Inserir seção "O Portal como Interface de Pesquisa"

## Análise

O conteúdo é coerente e academicamente relevante — explicita que o portal é parte do dispositivo metodológico, não apenas suporte de apresentação. Isso reforça o posicionamento estratégico do projeto como pesquisa-criação.

## Onde inserir

Na página **Estrutura** (`src/pages/Estrutura.tsx`), após o card "Considerações — Ecos do Labirinto" e antes de "Operadores e Campo Simbólico". É o lugar natural: a página já descreve a arquitetura da dissertação em três movimentos — adicionar uma seção que descreve a arquitetura do portal como quarto elemento complementa a lógica da página.

Alternativa descartada: Conclusão — já está densa e a ideia de "arquitetura" pertence mais à Estrutura.

## Conteúdo (voz em primeira pessoa, tom direto)

**Título**: "O Portal como Interface de Pesquisa"

Texto em 4 parágrafos curtos, reescrito em primeira pessoa sem traços de IA:

> Este portal funciona como uma arquitetura epistemológica navegável. Não é apenas suporte de apresentação — é parte do dispositivo metodológico da pesquisa.
>
> A estrutura digital organiza a investigação em três níveis simultâneos:
>
> **Nível 1 — Interface sensível**: home, estética e navegação. A experiência visual introduz o visitante ao universo poético do projeto.
>
> **Nível 2 — Estrutura conceitual**: metodologia, conceitos e organização analítica da pesquisa.
>
> **Nível 3 — Documentação viva**: filme, coletivo, acervo, entrevistas e mapa conceitual.
>
> Essa arquitetura transforma o portal em uma interface de pesquisa — onde teoria, criação e documentação coexistem em um sistema navegável. Dissertação, obra e interface digital se conectam no que pode ser compreendido como um dispositivo expandido de pesquisa.

## Implementação

- **Arquivo**: `src/pages/Estrutura.tsx`
- **Posição**: Após linha 93 (card Considerações), antes de linha 95 (Operadores)
- Novo `AnimatedSection` com card no mesmo estilo visual (`border border-border rounded-lg p-6 md:p-8 bg-card/30`)
- Os três níveis como lista com marcadores visuais (pontos `bg-primary/40` como já usados na página)

Nenhum arquivo novo, nenhuma dependência.

