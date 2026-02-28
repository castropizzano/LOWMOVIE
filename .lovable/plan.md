

## Alinhar largura do header com footer e corpo (max-w-5xl)

### Alteração em `src/components/Navbar.tsx` (linha 26)

Trocar o container interno de `container mx-auto` para `mx-auto max-w-5xl`, alinhando com o padrão `max-w-5xl` usado no footer e nas páginas de conteúdo.

```
// De:
<div className="container mx-auto flex h-16 items-center justify-between px-4">

// Para:
<div className="mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
```

A barra de navegação continua full-width visualmente (o `<nav>` mantém `left-0 right-0` com borda e backdrop), mas o conteúdo interno (logo + links) fica alinhado com o corpo do site.

