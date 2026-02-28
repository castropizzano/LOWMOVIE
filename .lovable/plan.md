

## Entrevistas com abas, transcrições PDF e imagem LowZine

### Resumo
Transformar o card "Entrevista Completa" em um sistema de abas com 6 entrevistas. Cada aba contém vídeo YouTube + transcrição PDF (abre via link externo). A aba LowZine terá a imagem do fanzine em vez de vídeo.

### Arquivos a copiar para o projeto

PDFs de transcrição → `public/docs/transcricoes/`:
- `Skate_Punk_Interview_Transcript.pdf`
- `Black_Media_Skate_LowMovie_Interview.pdf`
- `Gabriel_Peralta_Photos_Interview.pdf`
- `Rafao_VM_Skate_Marginal_Interview.pdf`
- `Werner_Herzog_Skateboarding_Interview.pdf`
- `Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf`

Imagem LowZine → `public/images/lowzine.png`

### Alterações em `src/pages/Conclusao.tsx`

1. Importar `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` de `@/components/ui/tabs`
2. Substituir o card de Entrevista (linhas 103-131) por um card com abas horizontais scrolláveis

### Estrutura das abas

Cada aba segue o padrão:

```text
[Skate Punk] [Black Media] [Gabriel Peralta] [Rafão VM] [Herzog] [LowZine]

── Conteúdo da aba ativa ──────────────────
Subtítulo (ex: "Podcast Chiclé Vídeos")
Descrição do conteúdo

┌─ YouTube embed (16:9) ──────────────────┐
│                                          │
└──────────────────────────────────────────┘

[↗ Abrir Transcrição em PDF]
───────────────────────────────────────────
```

### Dados das 6 abas

| Aba | YouTube ID | Transcrição PDF | Tipo |
|-----|-----------|----------------|------|
| Skate Punk | `rOoUJyzGkDY` | `Skate_Punk_Interview_Transcript.pdf` | vídeo + PDF |
| Black Media | `YJEW5YB59Ws` | `Black_Media_Skate_LowMovie_Interview.pdf` | vídeo + PDF |
| Gabriel Peralta | `n7Vu89PzMLE` | `Gabriel_Peralta_Photos_Interview.pdf` | vídeo + PDF |
| Rafão VM | `t89iwhuAOjU` | `Rafao_VM_Skate_Marginal_Interview.pdf` | vídeo + PDF |
| Werner Herzog | `EQLInlnfWUc` | `Werner_Herzog_Skateboarding_Interview.pdf` | vídeo + PDF |
| LowZine | — | `Entrevista-Transcrita_...LowPressure.pdf` | imagem + PDF |

### Aba LowZine — comportamento especial
- Em vez de vídeo, exibe a imagem `lowzine.png` em largura total dentro do card
- Abaixo, link para a transcrição PDF

### Detalhes de implementação
- TabsList com `overflow-x-auto` e `flex-wrap` para responsividade mobile
- Cada TabsTrigger com texto curto (ex: "Skate Punk", "Black Media", etc.)
- Links de transcrição usam o mesmo padrão visual dos links existentes (border, rounded, hover)
- Card título permanece "Entrevistas" com ícone Youtube

### Escopo
- Copiar 6 PDFs + 1 imagem para `public/`
- Modificar apenas `src/pages/Conclusao.tsx`

