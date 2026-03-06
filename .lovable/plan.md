

## Inserir textos narrativos em todos os blocos do Defense Mode

Editar `src/pages/Defense.tsx` para adicionar os textos fornecidos em cada bloco, integrados com a mídia existente.

### Bloco a bloco

| Bloco | Mudança |
|-------|---------|
| 1 (Abertura) | Overlay de texto sobre o vídeo: duas frases sobre o gesto |
| 2 (A Pesquisa) | Adicionar 3 frases abaixo do subtítulo existente, antes dos créditos |
| 3 (O Coletivo) | Adicionar 2 frases acima ou abaixo da galeria |
| 4 (Conceitos) | Substituir título "Conceitos Autorais" por 3 frases narrativas sobre o Lowbyrinth™ |
| 5 (Metodologia) | Substituir subtítulo genérico por 4 frases narrativas sobre pesquisa-criação |
| 6 (Fragmentos) | Substituir textos atuais por 2 frases sobre os fragmentos simbólicos |
| 7 (Teasers) | Substituir legends dos teasers pelas novas frases curtas fornecidas; manter nome do teaser |
| 8 (Trailer) | Adicionar frase acima do vídeo sobre a convergência no Lowbyrinth™ |
| 9 (Frames) | Adicionar 3 frases acima da galeria de frames |
| 10 (Contribuições) | Adicionar frase introdutória + atualizar descrições dos 3 cards com textos fornecidos |
| 11 (Questões Críticas) | Adicionar 2 frases introdutórias sobre tensões conceituais |
| 12 (Lowbyrinth™) | Adicionar 4 frases narrativas: portal navegável + filme-labirinto + "É preciso entrar." (manter ConceptGraph) |
| 13 (Encerramento) | Sem mudança (vídeo final) |

### Estilo dos textos

- Frases narrativas em `text-sm text-neutral-400 leading-relaxed` ou `text-neutral-500` para tom discreto
- Centralizado quando sozinho, alinhado ao layout quando junto com mídia
- No bloco 1 (vídeo): texto posicionado como overlay com `absolute bottom-12` e fundo semi-transparente
- No bloco 7: legendas curtas substituem as atuais no TEASERS array

### Arquivo editado

`src/pages/Defense.tsx` — atualizar renderBlock() para cada case + atualizar TEASERS legends.

