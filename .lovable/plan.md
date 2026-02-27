

## Acervo do Processo — Card na página Conclusão

Adicionar um card com iframe do Google Drive ao final de `src/pages/Conclusao.tsx`, após a citação.

**Folder ID**: `1PTwdYEHC0mE7wa6Mt8GxsMgJ7zxfUXBX`

### Alteração

**`src/pages/Conclusao.tsx`**:
- Importar `FolderOpen` do lucide-react
- Após o card da citação (após linha 57), adicionar:
  - Divider + título "Acervo do Processo" com ícone `FolderOpen`
  - Texto curto explicativo
  - iframe: `https://drive.google.com/embeddedfolderview?id=1PTwdYEHC0mE7wa6Mt8GxsMgJ7zxfUXBX#grid`
  - Aviso "Somente visualização — downloads desabilitados"

### Importante (ação manual do usuário)
Para impedir downloads, você precisa configurar no Google Drive:
1. Abrir a pasta → Compartilhar → Engrenagem (⚙️)
2. Desmarcar **"Os leitores e comentadores podem ver a opção de fazer download, imprimir e copiar"**

Sem essa configuração, o Google Drive permitirá downloads mesmo com o embed.

