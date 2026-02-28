

## Duas alterações

### 1. Remover grayscale do vídeo de boas-vindas (`src/components/WelcomeOverlay.tsx`)
- Linha 48: remover `grayscale group-hover:grayscale-0 transition-all duration-500` do className do iframe — o vídeo de intro deve aparecer em cores.

### 2. Melhorar diagramação da "Distinção Fundamental" (`src/pages/Metodologia.tsx`)
Referência: a imagem mostra o bloco com o título alinhado à esquerda, os dois termos centralizados com o símbolo ≠ entre eles, e os parágrafos descritivos abaixo com mais espaçamento e respiro.

Alterações nas linhas 94-118:
- Aumentar o espaçamento entre o título e o diagrama (mb-8)
- Centralizar o bloco de comparação com justify-center
- Remover `max-w-3xl` dos parágrafos para ocupar a largura total do card
- Adicionar mais separação entre os dois parágrafos descritivos (mt-4 em vez de mt-6, e separar visualmente com espaçamento consistente)
- Manter a estrutura geral mas com melhor respiro visual entre os elementos

