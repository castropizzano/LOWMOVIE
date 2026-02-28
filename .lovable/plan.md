

## Integrar lightbox com Google Forms/Sheets

### Dados extraídos do formulário

- **FORM_ID**: `1FAIpQLSftGDKDFks87l4_7uOl0hD9S00akAoTjrxfbPNLlaoHrpF5rQ`
- **Campo de email**: O formulário usa o coletor de email nativo do Google Forms. O parâmetro é `emailAddress` (não `entry.XXXXX`).
- **URL de submissão**: `https://docs.google.com/forms/d/e/1FAIpQLSftGDKDFks87l4_7uOl0hD9S00akAoTjrxfbPNLlaoHrpF5rQ/formResponse`

### Alteração

**`src/components/WelcomeOverlay.tsx`** — Editar `handleSubmit`:

1. Antes de fechar o overlay, enviar o email via `fetch` POST para a URL do Google Forms com `emailAddress={email}` usando `URLSearchParams` e `mode: 'no-cors'`
2. O fetch roda em paralelo com o fechamento do overlay (fire-and-forget) para não travar a UX
3. O fluxo atual (localStorage + fade-out) permanece inalterado

Os emails aparecerão automaticamente na planilha Google vinculada ao formulário.

