

# Vídeo da Premiere — Onde encaixar

Analisei as páginas do site. O vídeo da premiere (`youtube.com/watch?v=RbsSyBhSHFg`) é relevante em dois lugares possíveis:

## Opção recomendada: Página do Filme (`/filme`)

A página já tem o trailer no topo. A premiere complementa naturalmente a seção de circulação da obra. Encaixaria como uma nova seção **"Premiere"** entre a "Conexão com a Tese" e a "Soundtrack", com:

- Título: "PREMIERE" (PT) / "PREMIERE" (EN)
- Embed do YouTube (mesmo padrão visual do trailer: `aspect-video`, `grayscale` com hover colorido)
- Breve texto contextualizando o evento (rito de estreia, circulação)

Isso reforça o dado que já existe nos metadados (`circulacao: "Premiere + YouTube"`) e conecta com o conceito de "ritos de estreia" mencionado no texto analítico.

## Alternativa: Página do Coletivo (`/coletivo`)

Funcionaria como documentação do coletivo em ação, antes da galeria. Porém a página do Filme é mais coesa tematicamente.

## Implementação

- Adicionar seção com iframe embed na página Filme
- Adicionar chaves de tradução PT/EN nos JSONs (`filme.premiereTitle`, `filme.premiereDesc`)
- Mesmo padrão visual dos outros embeds do site

