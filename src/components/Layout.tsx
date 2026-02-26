import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground leading-relaxed">
            © 2025 Castro Pizzano — Universidade Estadual do Paraná
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            PPG em Cinema e Artes do Vídeo — Linha: Processos de Criação no Cinema e nas Artes do Vídeo
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Orientador: Prof. Dr. Fábio Jabur de Noronha
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Banca: Profa. Dra. Fabiana Pelinson · Profa. Dra. Luciana Barone
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-4">
            Skate · Videoarte · Processos Criativos · Subcultura Urbana · Colaboração Audiovisual
          </p>
          <div className="border-t border-border/30 pt-6 mt-6">
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              Este site funciona como mapa conceitual da pesquisa — ferramenta pedagógica complementar à dissertação.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
