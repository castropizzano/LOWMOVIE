

# Badges no Portal — DOI e Recomendações

## Contexto

O DOI no footer e na página de Contribuições está como texto simples. O usuário quer transformar em badge visual (imagem SVG do Zenodo) e saber se outros badges fazem sentido.

## Badges recomendados

| Badge | Onde | Justificativa |
|---|---|---|
| **Zenodo DOI** | Footer + Contribuições | Já existe como texto, transformar em badge visual |
| **License** | Footer | Indica claramente os termos de uso |
| **Built with Lovable** | Footer | Crédito à plataforma de desenvolvimento |

Não recomendo badges de CI/CD, coverage ou build status — não fazem sentido para um portal acadêmico de dissertação. Manter minimalista e relevante.

## Implementação

### 1. Footer (Layout.tsx)
Substituir o link de texto do DOI por um badge clicável usando a imagem SVG do Zenodo:
```
<img src="https://zenodo.org/badge/DOI/10.5281/zenodo.18950438.svg" alt="DOI" />
```

Opcionalmente adicionar badge de licença (shields.io):
```
<img src="https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg" alt="License" />
```

### 2. Contribuições (Contribuicoes.tsx)
Substituir o link de texto do DOI pelo mesmo badge visual do Zenodo.

### Arquivos
| Arquivo | Ação |
|---|---|
| `src/components/Layout.tsx` | Badge DOI no footer |
| `src/pages/Contribuicoes.tsx` | Badge DOI na seção de arquivamento |

