

# Enriquecer o Manual do Método com conteudo dos rascunhos

## Abordagem

Expandir o `MethodManual.tsx` existente adicionando **3 novas secoes** entre o diagrama e os 13 Principios, usando o conteudo dos rascunhos como fonte. Nao duplicar o que ja existe em outras paginas.

## Estrutura final do overlay

```text
1. Header (ja existe)
2. Intro "O Deslocamento Fundamental" (ja existe — enriquecer com frase-sintese)
3. Diagrama concentrico SVG (ja existe)
4. [NOVO] "As 5 Camadas do Sistema" — cards expandidos com texto descritivo por camada
5. [NOVO] "O Artista-Pesquisador" — secao curta sobre lugar de fala
6. [NOVO] "Campo Simbolico" — icones/simbolos (Rato, Horus, Ishtar, Lakshmi, Caos)
7. 13 Principios / Manifesto (ja existe)
8. Citacao Herzog (ja existe)
```

## Detalhes de implementacao

### Secao 4: As 5 Camadas (novo)
5 cards verticais em coluna unica, cada um com:
- Numero da camada + titulo (ex: "CAMADA 1: EXPERIENCIA")
- Subtitulo bold (ex: "O Skate como Pratica Estetica Urbana")
- Paragrafo descritivo (2-3 linhas, extraido dos rascunhos)
- Borda lateral em vermelho cinematografico, animacao stagger

### Secao 5: O Artista-Pesquisador (novo)
Bloco compacto com 3 diretrizes: Implicacao situada, Confrontacao teorica, Simultaneidade de metodos. Layout minimalista com tipografia editorial.

### Secao 6: Campo Simbolico (novo)
5 simbolos em grid horizontal (mobile: 2 colunas). Cada um com icone Lucide + nome + frase curta. Simbolos: Rato Alquimista (Rat), Olho de Horus (Eye), Estrela de Ishtar (Sparkles), Estrela de Lakshmi (Shield), Simbolo do Caos (Zap).

### Enriquecer diagrama existente
Adicionar `description` a cada layer no `MethodDiagram.tsx` — mostrar como tooltip ou texto abaixo do label ao hover/click.

## Arquivos editados
- `src/components/MethodManual.tsx` — adicionar 3 secoes
- `src/components/MethodDiagram.tsx` — adicionar descriptions por camada (hover reveal)

Nenhum arquivo novo. Nenhuma rota nova. Nenhuma dependencia nova.

