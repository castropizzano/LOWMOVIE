

# Inserção de Links Institucionais e Certificados

## 3 alterações:

### 1. Link dos Certificados do Lattes → Página de Conclusão
Inserir na seção "Acervo" (que já tem o link do Google Drive e do Memorial), adicionando um terceiro botão "Certificados Lattes" apontando para a pasta do Drive. É o lugar mais coerente — agrupa toda a documentação comprobatória.

### 2. Badge ORCID → Rodapé (Layout.tsx)
Ao lado do link "Currículo Lattes" na linha de links pessoais, adicionar um badge ORCID usando shields.io (`https://img.shields.io/badge/ORCID-0009--0000--3525--1713-cd59e8?style=flat&logo=orcid&labelColor=1a1a1a`) com link para `https://orcid.org/0009-0000-3525-1713`. Ficará na mesma fileira de badges (DOI, License, ORCID).

### 3. Link "Quadro de Discentes" → Rodapé (Layout.tsx)
Na linha onde aparece "Universidade Estadual do Paraná", transformar o texto em link clicável apontando para `https://ppgcineav.unespar.edu.br/pesquisadores/discentes_new/...`, ou adicionar como um texto-link separado na mesma linha. Mantém o estilo `text-[11px]` existente.

### Arquivos modificados:
- `src/components/Layout.tsx` — badge ORCID nos badges + link discentes
- `src/pages/Conclusao.tsx` — botão certificados na seção Acervo
- `src/i18n/locales/pt.json` — chaves de tradução
- `src/i18n/locales/en.json` — chaves de tradução

