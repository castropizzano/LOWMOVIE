# Estratégia de Preservação Digital — LOWMOVIE™

> Guia para preservação de longo prazo do portal, mídias e documentação do projeto.

---

## Visão Geral

Organizo a estratégia de preservação por cópias identificadas do código, dos documentos e das mídias. Os procedimentos abaixo orientam a exportação, a manutenção e a conferência dessas cópias; não constituem registro de execução de um arquivo completo.

| Camada | Descrição |
|---|---|
| **Portal ao vivo** | [lowmovie.lovable.app](https://lowmovie.lovable.app) |
| **Repositório público de referência** | Código e documentação selecionados, com histórico próprio |
| **Espelho offline** | Etapa de produção e conferência de uma cópia navegável para acesso local |
| **Arquivo de mídias** | Etapa de seleção, cópia e conferência das mídias disponíveis |
| **Arquivos web públicos** | Possibilidade de captura no Internet Archive / Wayback Machine, a registrar e conferir |
| **Dissertação no Zenodo** | [10.5281/zenodo.20619076](https://doi.org/10.5281/zenodo.20619076), DOI exclusivo da dissertação |

---

## 1. Espelho Offline do Portal

### Usando wget

```sh
wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --directory-prefix=LOWMOVIE_ARCHIVE/portal_snapshot \
  --reject="*.woff2" \
  --timeout=30 \
  --tries=3 \
  https://lowmovie.lovable.app/
```

### Usando HTTrack

```sh
httrack "https://lowmovie.lovable.app/" \
  -O "LOWMOVIE_ARCHIVE/portal_snapshot" \
  -v \
  "+*.lowmovie.lovable.app/*" \
  -*.woff2 \
  --depth=5
```

### Notas

- O portal é uma SPA (Single Page Application). O espelho captura os assets estáticos, mas a navegação interna pode requerer um servidor local.
- Para servir localmente o espelho: `npx serve LOWMOVIE_ARCHIVE/portal_snapshot`
- Recomenda-se gerar o espelho após cada atualização significativa do portal.

---

## 2. Roteiro de Exportação

A estrutura abaixo é um roteiro para organizar uma exportação, não um inventário de cópias já produzidas e verificadas. `scripts/archive.sh` cria diretórios, copia determinados arquivos locais, tenta gerar um Git bundle e calcula checksums dos arquivos copiados. O espelho navegável exige uma etapa separada; o script não reúne automaticamente todos os originais do acervo.

```text
LOWMOVIE_ARCHIVE/
├── portal_snapshot/            # Espelho offline do portal
├── repository/
│   ├── lowmovie-repo.bundle    # Git bundle completo
│   └── lowmovie-repo.zip       # Snapshot zipado
├── videos/
│   ├── lowbyrinth-intro.mp4
│   ├── lowbyrinth-nft-box.mp4
│   ├── lowbyrinth-nft-card.mp4
│   ├── lowbyrinth-nft-vhs.mp4
│   └── lowbyrinth-process.mp4
├── images/
│   ├── coletivo/               # 15 imagens do coletivo
│   ├── fotos/                  # 12 fotografias
│   ├── sequence/               # 15 imagens de sequência
│   ├── stills/                 # 6 stills do filme
│   └── [imagens avulsas]
├── documents/
│   ├── dissertacao.pdf
│   ├── brandbooks/
│   │   ├── LowMovie_brandbook.pdf
│   │   └── LowPressure_brandbook.pdf
│   └── transcricoes/
│       ├── Black_Media_Skate_LowMovie_Interview.pdf
│       ├── Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf
│       ├── Gabriel_Peralta_Photos_Interview.pdf
│       ├── Rafao_VM_Skate_Marginal_Interview.pdf
│       ├── Skate_Punk_Interview_Transcript.pdf
│       └── Werner_Herzog_Skateboarding_Interview.pdf
├── zines/                      # Materiais LowZine (exportar separadamente)
└── metadata/
    ├── CITATION.cff
    ├── README.md
    ├── LICENSE
    ├── PRESERVATION.md
    ├── manifest.sha256          # Checksums de todos os arquivos
    └── preservation_log.md      # Registro de ações de preservação
```

---

## 3. Preservação do Repositório

### Git Bundle

Cria um arquivo único contendo todo o histórico do repositório em que o comando for executado. Nesta distribuição, o bundle reúne somente o histórico público desta versão de referência.

```sh
git bundle create LOWMOVIE_ARCHIVE/repository/lowmovie-repo.bundle --all
```

Para restaurar a partir do bundle:

```sh
git clone LOWMOVIE_ARCHIVE/repository/lowmovie-repo.bundle lowmovie-restored
```

### DOI da dissertação no Zenodo

O DOI abaixo identifica a dissertação LowMovie™ e o Labirinto Criativo, não o portal inteiro, seu código ou todas as mídias:

- **DOI:** [10.5281/zenodo.20619076](https://doi.org/10.5281/zenodo.20619076)
- Badge adicionado ao `README.md`
- Referência incluída no `CITATION.cff`
- Citação disponível no portal (página Contribuições e footer)

Depósitos separados de código ou de outros materiais precisam de identificação própria e registro de seus conteúdos.

---

## 4. Checklist de Exportação

Use este checklist ao criar um pacote de arquivo completo:

- [ ] Executar `scripts/archive.sh` para gerar a estrutura base
- [ ] Gerar espelho offline via wget ou HTTrack
- [ ] Verificar se o espelho abre localmente (`npx serve`)
- [ ] Criar git bundle do repositório
- [ ] Copiar todos os vídeos de `public/videos/`
- [ ] Copiar todas as imagens de `public/images/`
- [ ] Copiar todos os documentos de `public/docs/`
- [ ] Copiar metadados (`CITATION.cff`, `README.md`, `LICENSE`, `PRESERVATION.md`)
- [ ] Gerar manifest com checksums SHA256
- [ ] Registrar data e versão no `preservation_log.md`
- [ ] Se houver depósito separado de código ou mídias, registrar seu identificador próprio; o DOI da dissertação permanece [10.5281/zenodo.20619076](https://doi.org/10.5281/zenodo.20619076)
- [ ] Se houver captura no Wayback Machine, registrar a URL da captura, sua data e o conteúdo efetivamente acessível

---

## 5. Verificação do Arquivo

### Validar checksums

```sh
cd LOWMOVIE_ARCHIVE
sha256sum -c metadata/manifest.sha256
```

### Validar espelho offline

```sh
cd LOWMOVIE_ARCHIVE/portal_snapshot
npx serve .
# Abrir http://localhost:3000 e navegar pelas seções
```

### Validar git bundle

```sh
git bundle verify LOWMOVIE_ARCHIVE/repository/lowmovie-repo.bundle
```

---

## 6. Recomendações de Armazenamento

| Meio | Uso |
|---|---|
| HD externo / SSD | Backup local primário |
| Serviço de nuvem | Google Drive, Dropbox ou equivalente |
| Repositório acadêmico | Zenodo, Figshare (com DOI) |
| Arquivo web | Internet Archive / Wayback Machine |
| Institucional | Repositório da UNESPAR (se disponível) |

Recomenda-se manter ao menos **duas cópias em mídias diferentes**, conferir periodicamente seus checksums e testar o acesso ao conteúdo. Registre data, versão e conteúdo de cada cópia e revise as condições dos serviços utilizados. O DOI identifica o material depositado; a manutenção das demais cópias exige acompanhamento.

---

*Versão pública de referência preparada em 21 de novembro de 2026.*
