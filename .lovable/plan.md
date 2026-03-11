

# Memorial Acadêmico — Nota no Portal

## Avaliação

Vale, sim. Mas com cuidado: o memorial já está no acervo do Drive, e a página Conclusão já tem bastante conteúdo (Dissertação, Publicações, Acervo, Entrevistas, dois Manuais). Adicionar mais uma seção standalone pode começar a pesar.

**Minha sugestão:** em vez de criar uma nova seção separada, inserir o memorial **dentro da seção "Acervo do Processo"** que já existe (linha 95-103). Ele é, por definição, um documento de processo. Basta expandir a descrição do Acervo para mencionar o memorial como peça relevante, com uma nota curta.

Isso mantém a página limpa e posiciona o memorial exatamente onde ele pertence conceitualmente.

## Implementação

1. **Editar as chaves de tradução** `conclusao.archiveNote` em PT e EN para incluir um segundo parágrafo mencionando o memorial:

   **PT (atual):** texto genérico sobre o acervo
   **PT (novo):** manter o parágrafo atual + adicionar: *"Entre os documentos de processo, o memorial artístico-acadêmico Ecos Criativos: Skate, Arte e Vídeo narra a trajetória do pesquisador na interseção entre skate, arte e audiovisual, reunindo referências biográficas, experiências de criação coletiva e projetos culturais que antecederam e influenciaram o desenvolvimento do LowMovie™."*

   Mesmo tratamento no EN.

2. **Nenhuma alteração em `Conclusao.tsx`** — o bloco do Acervo já existe, o link já aponta para o Drive onde o memorial está.

Resultado: uma menção acadêmica ao memorial dentro do contexto correto, sem inflar a página com mais uma seção.

