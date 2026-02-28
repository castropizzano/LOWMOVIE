import {
  Home,
  Presentation,
  FlaskConical,
  LayoutGrid,
  Lightbulb,
  Film,
  Users,
  HandHeart,
  HelpCircle,
  CheckCircle,
  Network,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Apresentação", url: "/apresentacao", icon: Presentation },
  { title: "Metodologia", url: "/metodologia", icon: FlaskConical },
  { title: "Estrutura", url: "/estrutura", icon: LayoutGrid },
  { title: "Conceitos", url: "/conceitos", icon: Lightbulb },
  { title: "O Filme", url: "/filme", icon: Film },
  { title: "O Coletivo", url: "/coletivo", icon: Users },
  { title: "Contribuições", url: "/contribuicoes", icon: HandHeart },
  { title: "Questões", url: "/faq", icon: HelpCircle },
  { title: "Conclusão", url: "/conclusao", icon: CheckCircle },
  { title: "Mapa", url: "/mapa", icon: Network },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className={`text-lg font-bold uppercase tracking-widest text-sidebar-primary transition-all ${collapsed ? "hidden" : ""}`}>
            LowMovie™
          </span>
          {collapsed && (
            <span className="text-lg font-bold text-sidebar-primary">LM</span>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <NavLink
                        to={item.url}
                        className="text-xs font-semibold uppercase tracking-wider"
                        activeClassName="text-sidebar-primary"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border px-4 py-3">
        {!collapsed && (
          <p className="text-[10px] uppercase tracking-widest text-sidebar-foreground/40">
            © 2025 Castro Pizzano
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
