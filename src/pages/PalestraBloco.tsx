import { useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, List } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SeoHead from "@/components/SeoHead";
import { BLOCOS, getLang } from "@/data/palestra";

const PalestraBloco = () => {
  const { bloco } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  void i18n.language;
  const lang = getLang();
  const isPt = lang === "pt";

  const id = Number(bloco);
  const b = BLOCOS.find((x) => x.id === id);

  const goNext = useCallback(() => {
    if (id < BLOCOS.length - 1) navigate(`/palestra/${id + 1}`);
  }, [id, navigate]);
  const goPrev = useCallback(() => {
    if (id > 0) navigate(`/palestra/${id - 1}`);
    else navigate("/palestra");
  }, [id, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      else if (e.key === "Escape") { e.preventDefault(); navigate("/palestra"); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, navigate]);

  if (!b) {
    return (
      <Layout>
        <SeoHead route="/palestra" />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {isPt ? "Bloco não encontrado." : "Block not found."}
            </p>
            <Link to="/palestra" className="mt-6 inline-block text-xs uppercase tracking-widest text-primary hover:underline">
              {isPt ? "Voltar ao índice" : "Back to index"}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SeoHead route="/palestra" />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {isPt ? "Bloco" : "Block"} {String(b.id).padStart(2, "0")} / {String(BLOCOS.length - 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{b.tempoMin} min</span>
              </div>
              <Link to="/palestra" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                <List className="h-3.5 w-3.5" />
                {isPt ? "Índice" : "Index"}
              </Link>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={0.1}>
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-10 leading-tight">
              {b.titulo[lang]}
            </h1>
          </AnimatedSection>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: script (2 cols) */}
            <div className="md:col-span-2 space-y-8">
              <AnimatedSection delay={0.15}>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    {isPt ? "O que é este pilar" : "What this pillar is"}
                  </p>
                  <p className="text-base leading-relaxed text-foreground/85 text-justify">
                    {b.oQueE[lang]}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    {isPt ? "Como cheguei nisso" : "How I arrived here"}
                  </p>
                  <p className="text-base leading-relaxed text-foreground/85 text-justify">
                    {b.comoChegueiNisso[lang]}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className="border-t border-border/40 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    {isPt ? "Falas-âncora" : "Anchor cues"}
                  </p>
                  <ul className="space-y-2">
                    {b.ancoras[lang].map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: portal anchor */}
            <AnimatedSection delay={0.3} className="md:col-span-1">
              <div className="border border-border rounded-lg p-6 bg-card/30 sticky top-24">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {isPt ? "Âncora no portal" : "Portal anchor"}
                </p>
                <p className="text-base font-semibold uppercase tracking-wide text-foreground mb-4 leading-tight">
                  {b.portalLabel}
                </p>
                {b.portalRota && (
                  <Link
                    to={b.portalRota}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex w-full items-center justify-between gap-2 border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary/20"
                  >
                    <span>{isPt ? "Abrir página" : "Open page"}</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
                <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground/70 leading-relaxed">
                  {isPt ? "Abre em nova aba para preservar o roteiro" : "Opens in a new tab to preserve the script"}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Nav footer */}
          <AnimatedSection delay={0.35}>
            <div className="mt-16 grid grid-cols-2 gap-3">
              <button
                onClick={goPrev}
                className="group flex items-center justify-start gap-2 border border-border px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {id === 0 ? (isPt ? "Índice" : "Index") : (isPt ? "Anterior" : "Previous")}
              </button>
              <button
                onClick={goNext}
                disabled={id >= BLOCOS.length - 1}
                className="group flex items-center justify-end gap-2 border border-border px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-muted-foreground"
              >
                {isPt ? "Próximo" : "Next"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
              {isPt ? "Teclado: ← → para navegar · Esc para o índice" : "Keyboard: ← → to navigate · Esc for index"}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PalestraBloco;