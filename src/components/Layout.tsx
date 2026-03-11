import { ReactNode, useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import LowbyrinthMode from "./LowbyrinthMode";
import MethodManual from "./MethodManual";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  const [lowbyrinthOpen, setLowbyrinthOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 flex h-12 items-center border-b border-border/50 bg-background/80 backdrop-blur-xl px-4 gap-3">
            <SidebarTrigger className="md:hidden" />
            <button
              onClick={() => setLowbyrinthOpen(true)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded px-2.5 py-1 hover:border-foreground/30"
            >
              {t("header.lowbyrinth")}
            </button>
            <button
              onClick={() => setMethodOpen(true)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded px-2.5 py-1 hover:border-foreground/30"
            >
              {t("header.methodManual")}
            </button>
            <div className="ml-auto flex items-center border border-border/50 rounded overflow-hidden">
              <button
                onClick={() => i18n.changeLanguage("pt")}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
                  i18n.language === "pt"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                PT
              </button>
              <div className="w-px h-4 bg-border/50" />
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
                  i18n.language === "en"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-border/50 py-12">
            <div className="mx-auto max-w-5xl px-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground leading-relaxed mb-4">
                {t("footer.copyright")}
              </p>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <a
                  href="https://lattes.cnpq.br/5523516994010198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                >
                  {t("footer.lattes")}
                </a>
                <a
                  href="mailto:castropizzano@gmail.com"
                  className="text-[11px] text-muted-foreground hover:text-primary transition-colors leading-relaxed md:text-right"
                >
                  {t("footer.email")}
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">{t("footer.university")}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">{t("footer.advisor")}</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">{t("footer.program")}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">{t("footer.committee")}</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-xs text-muted-foreground leading-relaxed">{t("footer.researchLine")}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed md:text-right">{t("footer.keywords")}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a href="https://doi.org/10.5281/zenodo.18950438" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.18950438-cd59e8?style=flat&labelColor=1a1a1a" alt="DOI" className="h-5" />
                  </a>
                  <a href="https://github.com/castropizzano/lowmovie/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-cd59e8?style=flat&labelColor=1a1a1a" alt="License" className="h-5" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <LowbyrinthMode open={lowbyrinthOpen} onClose={() => setLowbyrinthOpen(false)} />
      <MethodManual open={methodOpen} onClose={() => setMethodOpen(false)} />
    </SidebarProvider>
  );
};

export default Layout;
