

# Adicionar Lattes e Email ao Rodapé

Seguindo o padrão editorial do rodapé (layout hierárquico em 3 níveis com alinhamento esquerda/direita), vou inserir uma nova linha entre o copyright e as informações institucionais:

- **Esquerda:** link para o Currículo Lattes
- **Direita:** email de contato

## Alterações

### 1. `src/i18n/locales/pt.json` — adicionar keys
- `footer.lattes`: "Currículo Lattes"
- `footer.email`: "castropizzano@gmail.com"

### 2. `src/i18n/locales/en.json` — adicionar keys
- `footer.lattes`: "Lattes CV"
- `footer.email`: "castropizzano@gmail.com"

### 3. `src/components/Layout.tsx` — nova linha no rodapé
Após o copyright (linha 58) e antes do bloco de informações institucionais, inserir uma nova row com:
- Link para Lattes (`text-[11px]`, hover, `target="_blank"`)
- Email como `mailto:` link (`text-[11px]`, hover, `md:text-right`)

Ambos seguem o padrão `text-[11px]` do style guide para micro-textos e links no rodapé.

