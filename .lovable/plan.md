

# Publicação Acadêmica Derivada — Análise e Proposta

## Minha avaliação honesta

Concordo com a análise. O artigo tem peso acadêmico real: publicação em revista científica, coautoria com a orientadora, LowMovie como exemplo empírico dentro de teoria narrativa (Ricoeur). Merece visibilidade no portal.

Mas o documento já está no acervo do Google Drive. Não faz sentido duplicar o PDF no portal. O que faz sentido é **dar visibilidade textual** a essa produção derivada.

## Onde colocar

Na página **Conclusão** (`/conclusao`), entre a seção **Dissertação PDF** e o **Acervo do Processo**. Uma seção curta chamada **"Publicações Relacionadas"** — funciona como registro de produção acadêmica derivada e é escalável (se surgirem outros artigos, basta adicionar).

O link apontaria para o acervo no Drive (onde o PDF já está), não para um PDF local.

## Implementação

1. **Editar `Conclusao.tsx`** — inserir um novo bloco entre "Dissertação PDF" (linha 78) e "Acervo" (linha 82), seguindo o mesmo padrão visual (card com border, título uppercase, parágrafo descritivo, botão-link)

2. **Adicionar chaves de tradução** PT/EN:
   - `conclusao.publicationsTitle`: "Publicações Relacionadas" / "Related Publications"
   - `conclusao.publicationHarpiaDesc`: nota acadêmica descritiva (o texto que você sugeriu, levemente editado)
   - `conclusao.openPublication`: "Acessar publicação no acervo" / "Access publication in archive"

3. O link do botão aponta para o mesmo Google Drive do acervo

## Resultado visual

```text
┌─────────────────────────────────────────────┐
│  DISSERTAÇÃO COMPLETA                       │
│  [link PDF]                                 │
├─────────────────────────────────────────────┤
│  PUBLICAÇÕES RELACIONADAS                   │
│                                             │
│  O artigo "A arte de contar: as tessituras  │
│  entre narrativa e jornalismo a partir do   │
│  conceito de tríplice mimese", publicado na │
│  Revista Científica Harpia (2025)...        │
│                                             │
│  [Acessar publicação no acervo]             │
├─────────────────────────────────────────────┤
│  ACERVO DO PROCESSO                         │
│  [link Drive]                               │
└─────────────────────────────────────────────┘
```

Leve, acadêmico, sem autopromoção. E escalável para futuras publicações.

