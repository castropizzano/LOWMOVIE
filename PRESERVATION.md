# Estratégia de Preservação Digital — LOWMOVIE™

> Guia para preservação de longo prazo do portal, mídias e documentação do projeto.

---

## Visão Geral

O projeto LOWMOVIE™ adota uma estratégia deliberada de preservação digital alinhada a práticas contemporâneas de conservação de arte digital e media art (Variable Media Questionnaire, Matters in Media Art). A preservação opera em múltiplas camadas complementares:

| Camada | Descrição |
|---|---|
| **Portal ao vivo** | [lowmovie.lovable.app](https://lowmovie.lovable.app) |
| **Repositório GitHub** | Código-fonte versionado com documentação completa |
| **Espelho offline** | Snapshot navegável do portal para acesso local |
| **Arquivo de mídias** | Cópia organizada de todos os assets do projeto |
| **Arquivos web públicos** | Internet Archive / Wayback Machine |
| **DOI permanente** | [10.5281/zenodo.18950438](https://doi.org/10.5281/zenodo.18950438) via Zenodo |

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

## 2. Estrutura do Arquivo

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

Cria um arquivo único contendo todo o histórico do repositório:

```sh
git bundle create LOWMOVIE_ARCHIVE/repository/lowmovie-repo.bundle --all
```

Para restaurar a partir do bundle:

```sh
git clone LOWMOVIE_ARCHIVE/repository/lowmovie-repo.bundle lowmovie-restored
```

### GitHub Archive Program

O repositório público no GitHub é automaticamente elegível para o [GitHub Archive Program](https://archiveprogram.github.com/), que preserva código em Arctic Code Vault para armazenamento de longo prazo.

### DOI via Zenodo/Figshare

Para atribuir um DOI permanente ao repositório:

1. Acesse [zenodo.org](https://zenodo.org) e vincule sua conta GitHub
2. Ative o repositório LOWMOVIE™ na lista de repositórios
3. Crie uma release no GitHub (ex: `v1.0-defense`)
4. O Zenodo gerará automaticamente um DOI citável
5. Adicione o badge do DOI ao README.md

Alternativa: [Figshare](https://figshare.com) para depósito direto de arquivos com DOI.

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
- [ ] Submeter ao Zenodo para DOI (opcional)
- [ ] Submeter URL ao Wayback Machine: `https://web.archive.org/save/https://lowmovie.lovable.app`

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

Recomenda-se manter ao menos **duas cópias em mídias diferentes** e **uma cópia com DOI** para garantir acessibilidade de longo prazo.

---

*Última atualização: Março 2026*
