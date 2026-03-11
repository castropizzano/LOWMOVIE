

# Sidebar sempre expandido no desktop

Abordagem simples: manter o sidebar colapsável apenas no mobile (onde usa Sheet), mas forçá-lo sempre aberto no desktop.

## Alterações

### 1. `src/components/AppSidebar.tsx`
- Trocar `collapsible="icon"` para `collapsible="none"` — isso impede o colapso no desktop.
- Remover a lógica condicional de `collapsed` (texto "LM", logo pequeno) já que nunca colapsa no desktop.

### 2. `src/components/Layout.tsx`
- Remover o `<SidebarTrigger />` do header desktop (não faz sentido se o sidebar não colapsa).
- Manter o trigger apenas no mobile (onde o sidebar usa Sheet/offcanvas).

### 3. Nenhuma alteração no `sidebar.tsx` (componente UI base)
O `collapsible="none"` já é suportado nativamente pelo componente — ele simplesmente não renderiza o mecanismo de toggle.

