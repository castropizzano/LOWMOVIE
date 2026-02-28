

## Substituir navbar horizontal por sidebar lateral fixa

### Visão geral
Trocar o header com links horizontais por uma sidebar à esquerda estilo documentação, usando o componente Sidebar do shadcn/ui. O logo fica no topo da sidebar, os 10 links ficam listados verticalmente, e a sidebar pode ser colapsada para modo ícone. O conteúdo principal ocupa o restante da largura.

### Alterações

**1. `src/components/Layout.tsx`** — Reestruturar com `SidebarProvider`
- Envolver tudo com `SidebarProvider`
- Substituir `<Navbar />` por `<AppSidebar />`
- Adicionar um header fino com `<SidebarTrigger />` para toggle
- Remover `pt-16` (não há mais header fixo no topo)
- Manter o footer dentro da área de conteúdo principal

**2. Criar `src/components/AppSidebar.tsx`**
- Usar `Sidebar` com `collapsible="icon"`
- Logo "LowMovie™" no topo da sidebar
- Lista dos 10 links usando `SidebarMenu` / `SidebarMenuItem` / `SidebarMenuButton`
- Highlight da rota ativa com `NavLink` + `activeClassName`
- Ícones opcionais por seção (Home, BookOpen, Film, Users, etc.)

**3. Remover `src/components/Navbar.tsx`**
- Não será mais utilizado

**4. `src/pages/Index.tsx` e demais páginas**
- Ajustar containers se necessário — o conteúdo agora ocupa `flex-1` ao lado da sidebar, sem necessidade de `max-w-5xl` central (ou manter para limitar largura do texto)

### Comportamento
- Desktop: sidebar aberta com labels visíveis; pode colapsar para ícones
- Mobile: sidebar em modo offcanvas, ativada pelo trigger no header
- Footer permanece no fundo da área de conteúdo (não dentro da sidebar)

