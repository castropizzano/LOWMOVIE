import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import SeoHead from "@/components/SeoHead";
import { BLOCOS, getLang } from "@/data/palestra";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const GuiaApresentador = () => {
  const { t } = useTranslation();
  const lang = getLang();
  const isPt = lang === "pt";
  const checklist = t("presenterGuide.checklist", { returnObjects: true }) as string[];
  const lembretes = t("presenterGuide.reminders", { returnObjects: true }) as string[];

  const arquivos = [
    { label: t("presenterGuide.printOptions"), to: "/imprimir" },
    { label: isPt ? "Caderno-Síntese (PDF)" : "Synthesis Notebook (PDF)", to: "/docs/lowmovie_caderno_sintese.pdf", external: true },
    { label: isPt ? "Toolkit Pedagógico Lowbyrinth™ (PDF)" : "Lowbyrinth™ Pedagogical Toolkit (PDF)", to: "/docs/lowmovie_toolkit_pedagogico.pdf", external: true },
    { label: t("presenterGuide.onlineDefense"), to: "/defense" },
  ];

  return (
    <Layout>
      <SeoHead route="/guia-apresentador" />
      <section className="py-20 md:py-28 print:py-0">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title={isPt ? "Guia do Apresentador" : "Presenter's Guide"}
            subtitle={t("presenterGuide.subtitle", { count: BLOCOS.length })}
          />

          <AnimatedSection delay={0.05}>
            <div className="mb-12 text-sm leading-relaxed text-muted-foreground reading-measure text-justify border-l-2 border-primary/40 pl-4">
              {t("presenterGuide.intro")}
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Checklist pré-palestra" : "Pre-lecture checklist"}
            </h3>
            <ul className="space-y-3">
              {checklist.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Sequência + âncoras por bloco */}
          <AnimatedSection delay={0.15} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Sequência recomendada e âncoras por bloco" : "Recommended sequence and anchors per block"}
            </h3>
            <div className="space-y-4">
              {BLOCOS.map((b) => (
                <div key={b.id} className="border border-border/60 rounded-lg p-5 bg-card/20">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-bold text-primary">{String(b.id).padStart(2, "0")}</span>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">{b.titulo[lang]}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {b.portalRota && (
                        <Link to={b.portalRota} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary hover:underline">
                          {b.portalLabel}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {b.ancoras[lang].map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-foreground/70 leading-relaxed">
                        <div className="h-1 w-1 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Lembretes */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Lembretes de condução" : "Delivery reminders"}
            </h3>
            <ul className="space-y-3">
              {lembretes.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Arquivos de apoio */}
          <AnimatedSection delay={0.25} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Arquivos de apoio e links rápidos" : "Support files and quick links"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {arquivos.map((a, i) =>
                a.external ? (
                  <Button key={i} asChild variant="outline" className="justify-between px-4 py-3 text-xs uppercase tracking-widest"><a
                    href={a.to}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{a.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a></Button>
                ) : (
                  <Button key={i} asChild variant="outline" className="justify-between px-4 py-3 text-xs uppercase tracking-widest"><Link
                    to={a.to}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{a.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link></Button>
                ),
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="no-print border-t border-border/40 pt-6 text-[10px] uppercase tracking-widest text-muted-foreground/70 flex flex-wrap gap-4">
              <Link to="/palestra" className="hover:text-primary transition-colors">
                {isPt ? "← Ir para a apresentação" : "← Go to presentation"}
              </Link>
              <span>·</span>
              <span>{t("presenterGuide.publicSupport")}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default GuiaApresentador;