import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Header fino com trigger */}
          <header className="sticky top-0 z-40 flex h-12 items-center border-b border-border/50 bg-background/80 backdrop-blur-xl px-4">
            <SidebarTrigger />
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-border/50 py-12">
            <div className="mx-auto max-w-5xl px-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground leading-relaxed mb-4">
                © 2025 Castro Pizzano
              </p>
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">Universidade Estadual do Paraná</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">PPG em Cinema e Artes do Vídeo</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">Banca: Profa. Dra. Fabiana Pelinson · Profa. Dra. Luciana Barone</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">Linha: Processos de Criação no Cinema e nas Artes do Vídeo</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">Skate · Videoarte · Processos Criativos · Subcultura Urbana · Colaboração Audiovisual</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
