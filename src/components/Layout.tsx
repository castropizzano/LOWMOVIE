import { ReactNode, useRef, lazy, Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPortalPanel, withPortalPanel, PortalPanel } from "@/lib/panel-state";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LowbyrinthMode = lazy(() => import("./LowbyrinthMode"));
const MethodManual = lazy(() => import("./MethodManual"));

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const search = new URLSearchParams(location.search);
  const panel = getPortalPanel(search);
  const lowbyrinthTrigger = useRef<HTMLButtonElement>(null);
  const manualTrigger = useRef<HTMLButtonElement>(null);
  const setPanel = (value: PortalPanel | null) => navigate({ pathname: location.pathname, search: withPortalPanel(search, value).toString(), hash: location.hash }, { preventScrollReset: true });
  const { t, i18n } = useTranslation();

  return (
    <SidebarProvider>
      <a href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById("main-content")?.focus(); }} className="no-print sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-background focus:text-foreground focus:p-3 focus:border focus:border-border">
        {t("portal.skipContent")}
      </a>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-40 flex min-h-12 flex-wrap md:flex-nowrap items-center border-b border-border/50 bg-background/80 backdrop-blur-xl px-3 py-2 md:py-0 gap-2">
            <SidebarTrigger className="md:hidden shrink-0" aria-label={t("portal.menu")} />
            <Button variant="outline" ref={lowbyrinthTrigger}
              onClick={() => setPanel("lowbyrinth")}
              className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded px-2 py-1 hover:border-foreground/30"
            >
              {t("header.lowbyrinth")}
            </Button>
            <Button variant="outline" ref={manualTrigger}
              onClick={() => setPanel("manual")}
              className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded px-2 py-1 hover:border-foreground/30"
            >
              {t("header.methodManual")}
            </Button>
            <div className="ml-auto shrink-0 flex items-center gap-1">
              <Button variant="ghost" aria-pressed={i18n.resolvedLanguage === "pt"}
                onClick={() => i18n.changeLanguage("pt")}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
                  i18n.resolvedLanguage === "pt"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                PT
              </Button>
              <div className="w-px h-4 bg-border/50" />
              <Button variant="ghost" aria-pressed={i18n.resolvedLanguage === "en"}
                onClick={() => i18n.changeLanguage("en")}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
                  i18n.resolvedLanguage === "en"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </Button>
            </div>
          </header>

          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>

          <footer className="border-t border-border/50 py-12">
            <div className="mx-auto max-w-5xl px-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground leading-relaxed mb-4">
                {t("footer.copyright")}
              </p>
              <Link to="/?rever=1" className="inline-flex text-[11px] text-muted-foreground hover:text-primary mb-4 py-2">{t("intro.replay")}</Link>
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
                  <a href="https://ppgcineav.unespar.edu.br/pesquisadores/discentes_new/Ingressantes%20PPG-CINEAV" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors leading-relaxed">{t("footer.university")}</a>
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
                  <a href="https://doi.org/10.5281/zenodo.20619076" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.20619076-cd59e8?style=flat&labelColor=1a1a1a" alt={t("footer.doiAlt")} className="h-5" loading="lazy" />
                  </a>
                  <a href="/docs/licenca_codigo.txt" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Code-All%20Rights%20Reserved-cd59e8?style=flat&labelColor=1a1a1a" alt={t("footer.licenseAlt")} className="h-5" loading="lazy" />
                  </a>
                  <a href="https://orcid.org/0009-0000-3525-1713" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/ORCID-0009--0000--3525--1713-cd59e8?style=flat&logo=orcid&labelColor=1a1a1a" alt={t("footer.orcidAlt")} className="h-5" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <Suspense fallback={null}>
        {panel === "lowbyrinth" && <LowbyrinthMode open onClose={() => setPanel(null)} onRestoreFocus={() => lowbyrinthTrigger.current?.focus()} />}
        {panel === "manual" && <MethodManual open onClose={() => setPanel(null)} onRestoreFocus={() => manualTrigger.current?.focus()} />}
      </Suspense>
    </SidebarProvider>
  );
};

export default Layout;
