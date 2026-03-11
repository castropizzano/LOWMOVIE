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
import lowpressureLogo from "@/assets/lowpressure-logo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
} from "@/components/ui/sidebar";

const itemDefs = [
  { key: "home", url: "/home", icon: Home },
  { key: "apresentacao", url: "/apresentacao", icon: Presentation },
  { key: "metodologia", url: "/metodologia", icon: FlaskConical },
  { key: "estrutura", url: "/estrutura", icon: LayoutGrid },
  { key: "conceitos", url: "/conceitos", icon: Lightbulb },
  { key: "filme", url: "/filme", icon: Film },
  { key: "coletivo", url: "/coletivo", icon: Users },
  { key: "contribuicoes", url: "/contribuicoes", icon: HandHeart },
  { key: "questoes", url: "/questoes", icon: HelpCircle },
  { key: "conclusao", url: "/conclusao", icon: CheckCircle },
  { key: "mapa", url: "/mapa", icon: Network },
];

export function AppSidebar() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border px-4 h-12 flex items-center">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => sessionStorage.removeItem("lowmovie_intro_seen")}>
          <span className="text-lg font-bold uppercase tracking-widest text-sidebar-primary">
            LowMovie™
          </span>
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemDefs.map((item) => {
                const title = t(`nav.${item.key}`);
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.key}>
                    <SidebarMenuButton asChild isActive={active} tooltip={title}>
                      <NavLink
                        to={item.url}
                        className="text-xs font-semibold uppercase tracking-wider"
                        activeClassName="text-sidebar-primary"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{title}</span>
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
        <div className="flex flex-col items-center gap-3 py-2">
          <a href="https://www.instagram.com/lowpressure.fam/" target="_blank" rel="noopener noreferrer">
            <img src={lowpressureLogo} alt="LowPressure™" className="w-24 h-24 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" width={96} height={96} loading="lazy" decoding="async" />
          </a>
          <p className="text-[11px] uppercase tracking-widest text-sidebar-foreground/40">
            © 2026 Castro Pizzano
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
