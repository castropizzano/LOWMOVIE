

## Lowbyrinth — Imagem de fundo como guia de posicionamento

**Objetivo**: Adicionar a imagem `lowbyrinth.png` como fundo do modo Lowbyrinth (desktop), com 30% de opacidade, servindo como referência visual para o posicionamento octogonal dos nós.

**Alterações**:

1. **Copiar asset** `lowbyrinth.png` para `public/images/lowbyrinth.png`

2. **Editar `src/components/LowbyrinthMode.tsx`** — No container desktop (dentro do bloco que contém o SVG e os nós posicionados), adicionar uma `img` absolutamente posicionada, centralizada, com `opacity-30` e `pointer-events-none`, ocupando a área visível como guia visual. Apenas no layout desktop (o mobile usa lista vertical, não faz sentido).

```tsx
{/* Background guide image */}
<img
  src="/images/lowbyrinth.png"
  alt=""
  className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none"
  style={{ minHeight: "100vh" }}
/>
```

Inserido antes do SVG de linhas e dos nós, dentro do container `relative`.

