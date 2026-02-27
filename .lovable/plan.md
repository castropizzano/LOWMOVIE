

## Plano — Scroll to top ao navegar

Adicionar um componente `ScrollToTop` que usa `useLocation` do React Router para detectar mudanças de rota e executar `window.scrollTo(0, 0)` automaticamente.

### Implementação

1. **Criar `src/components/ScrollToTop.tsx`** — componente que escuta mudanças de `pathname` via `useEffect` e faz `window.scrollTo(0, 0)`.

2. **Adicionar em `src/App.tsx`** — inserir `<ScrollToTop />` dentro do `<BrowserRouter>`, antes do `<Routes>`.

| Arquivo | Alteração |
|---------|-----------|
| `ScrollToTop.tsx` (novo) | Componente scroll-to-top |
| `App.tsx` | Inserir componente no router |

