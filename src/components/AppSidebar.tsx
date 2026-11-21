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
  GraduationCap,
  Share2,
  Layers,
  Scale,
  Printer,
  Projector,
  Mic,
  BookOpen,
  Archive,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { primaryAccess } from "@/data/portal";
import lowpressureLogo from "@/assets/lowpressure-logo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

type NavItem = { key: string; url: string; icon: typeof Home };

const navHome: NavItem = { key: "home", url: "/home", icon: Home };

const navSections: Array<{ groupKey: string; items: NavItem[] }> = [
  {
    groupKey: "principal",
    items: primaryAccess.map(item => ({ ...item, icon: ({ filme: Film, coletivo: Users, livro: BookOpen, arquivo: Archive })[item.key] })),
  },
  {
    groupKey: "pesquisa",
    items: [
      { key: "apresentacao", url: "/apresentacao", icon: Presentation },
      { key: "metodologia", url: "/metodologia", icon: FlaskConical },
      { key: "estrutura", url: "/estrutura", icon: LayoutGrid },
      { key: "conceitos", url: "/conceitos", icon: Lightbulb },
      { key: "contribuicoes", url: "/contribuicoes", icon: HandHeart },
      { key: "questoes", url: "/questoes", icon: HelpCircle },
      { key: "conclusao", url: "/conclusao", icon: CheckCircle },
    ],
  },
  {
    groupKey: "recursos",
    items: [
      { key: "ecossistema", url: "/ecossistema", icon: Layers },
      { key: "replicar", url: "/replicar", icon: Share2 },
      { key: "licenca", url: "/licenca", icon: Scale },
      { key: "guia", url: "/guia-apresentador", icon: BookOpen },
      { key: "mapa", url: "/mapa", icon: Network },
      { key: "timeline", url: "/timeline", icon: GraduationCap },
      { key: "palestraMode", url: "/palestra", icon: Mic },
      { key: "defenseMode", url: "/defense-mode", icon: Projector },
      { key: "imprimir", url: "/imprimir", icon: Printer },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { t } = useTranslation();
  const { isMobile, setOpenMobile } = useSidebar();

  const renderItem = (item: NavItem) => {
    const title = t(`nav.${item.key}`);
    const active = location.pathname === item.url;
    return (
      <SidebarMenuItem key={item.key}>
        <SidebarMenuButton asChild isActive={active} tooltip={title}>
          <NavLink
            to={item.url}
            onClick={() => { if (isMobile) setOpenMobile(false); }}
            className="text-xs font-semibold uppercase tracking-wider"
            activeClassName="text-sidebar-primary"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{title}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

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
            <SidebarMenu>{renderItem(navHome)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {navSections.map((section) => (
          <SidebarGroup key={section.groupKey}>
            <SidebarGroupLabel className="text-[11px] uppercase tracking-widest text-sidebar-foreground/40">
              {t(`navGroups.${section.groupKey}`)}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{section.items.map(renderItem)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
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
