

# DOI, CHANGELOG e Ajustes de Preservação

## Resumo

Integrar o DOI do Zenodo no portal, README e documentação de preservação. Criar CHANGELOG.md. Atualizar CITATION.cff e PRESERVATION.md.

---

## 1. DOI no Portal — Contribuicoes.tsx

Adicionar um bloco "Arquivamento Acadêmico" ao final da página Contribuições (antes do NextSectionButton), com texto curto e link para o DOI. Adicionar as i18n keys em pt.json e en.json.

Texto PT:
> **Arquivamento acadêmico** — O projeto LOWMOVIE™ está arquivado no repositório científico Zenodo, garantindo preservação digital e citabilidade acadêmica através de DOI.

Texto EN:
> **Academic archival** — The LOWMOVIE™ project is archived on the Zenodo scientific repository, ensuring digital preservation and academic citability through DOI.

Link: `https://doi.org/10.5281/zenodo.18950438`

---

## 2. README.md

- Adicionar badge do Zenodo no topo (após o título)
- Adicionar DOI à tabela de Links
- Atualizar a seção "Citação Recomendada" com a citação Zenodo em inglês
- Atualizar sync timestamp

Badge markdown:
```
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18950438.svg)](https://doi.org/10.5281/zenodo.18950438)
```

Citação adicional:
> PIZZANO, C. *LowMovie™ and the Creative Labyrinth: A Research-Creation Project in Cinema and Skate Culture.* Zenodo, 2026. https://doi.org/10.5281/zenodo.18950438

---

## 3. CITATION.cff

Adicionar campo `doi` e campo `identifiers` com o DOI do Zenodo.

---

## 4. PRESERVATION.md

- Atualizar seção "DOI via Zenodo/Figshare" para refletir que o DOI já foi gerado
- Marcar item do checklist como concluído
- Adicionar DOI à tabela de camadas de preservação
- Atualizar a seção de armazenamento com referência ao Wayback Machine já realizado

---

## 5. CHANGELOG.md (novo)

Documentar a versão `v1.0-defense` com todas as features implementadas no portal.

---

## 6. Footer — Layout.tsx

Adicionar link do DOI ao footer do portal (discreto, junto aos links existentes).

---

## Arquivos

| Arquivo | Ação |
|---|---|
| `src/pages/Contribuicoes.tsx` | Adicionar bloco DOI |
| `src/i18n/locales/pt.json` | Adicionar keys de arquivamento |
| `src/i18n/locales/en.json` | Adicionar keys de arquivamento |
| `src/components/Layout.tsx` | Adicionar DOI ao footer |
| `README.md` | Badge, citação Zenodo, DOI nos links |
| `CITATION.cff` | Adicionar DOI |
| `PRESERVATION.md` | Atualizar com DOI e Wayback concluídos |
| `CHANGELOG.md` | Criar — v1.0-defense |

