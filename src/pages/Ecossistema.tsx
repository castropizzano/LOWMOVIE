import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { NavLink } from "@/components/NavLink";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

const layerKeys = ["lowmovie", "lowbyrinth", "lowrunner"] as const;

const layerMeta: Record<typeof layerKeys[number], { to: string; artifacts: string[] }> = {
  lowmovie: {
    to: "/conclusao",
    artifacts: ["filmArtifact", "dissertationArtifact", "doiArtifact", "portalArtifact"],
  },
  lowbyrinth: {
    to: "/metodologia",
    artifacts: ["methodArtifact", "toolkitArtifact", "conceptsArtifact", "diagramArtifact"],
  },
  lowrunner: {
    to: "/replicar",
    artifacts: ["repoArtifact", "stackArtifact", "preservationArtifact", "licenseArtifact"],
  },
};

const Ecossistema = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SeoHead route="/ecossistema" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("ecossistema.title")} subtitle={t("ecossistema.subtitle")} />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("ecossistema.intro1")}</p>
              <p>{t("ecossistema.intro2")}</p>
            </div>
          </AnimatedSection>

          {/* Diagrama relacional */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-8 text-center">
                {t("ecossistema.diagramTitle")}
              </p>
              <div className="flex justify-center">
                <svg viewBox="0 0 600 240" className="w-full max-w-2xl h-auto">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--primary))" opacity="0.6" />
                    </marker>
                  </defs>
                  {/* Lines */}
                  <line x1="160" y1="120" x2="240" y2="120" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" markerEnd="url(#arrow)" />
                  <line x1="360" y1="120" x2="440" y2="120" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" markerEnd="url(#arrow)" />
                  {/* Circles */}
                  <circle cx="100" cy="120" r="60" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
                  <circle cx="300" cy="120" r="60" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                  <circle cx="500" cy="120" r="60" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
                  {/* Labels */}
                  <text x="100" y="115" textAnchor="middle" className="fill-foreground" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>LOWMOVIE™</text>
                  <text x="100" y="132" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9, letterSpacing: 1 }}>OBRA</text>
                  <text x="300" y="115" textAnchor="middle" className="fill-foreground" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>LOWBYRINTH™</text>
                  <text x="300" y="132" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9, letterSpacing: 1 }}>MÉTODO</text>
                  <text x="500" y="115" textAnchor="middle" className="fill-foreground" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>LOW RUNNER™</text>
                  <text x="500" y="132" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9, letterSpacing: 1 }}>PLATAFORMA</text>
                  {/* Bottom captions */}
                  <text x="100" y="210" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9 }}>{t("ecossistema.diagramCaseApplied")}</text>
                  <text x="300" y="210" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9 }}>{t("ecossistema.diagramFormalized")}</text>
                  <text x="500" y="210" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 9 }}>{t("ecossistema.diagramReplicable")}</text>
                </svg>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-8">
                {t("ecossistema.diagramDesc")}
              </p>
            </div>
          </AnimatedSection>

          {/* 3 Camadas */}
          <div className="space-y-8 mb-16">
            {layerKeys.map((key, i) => {
              const meta = layerMeta[key];
              return (
                <AnimatedSection key={key} delay={0.15 + i * 0.1}>
                  <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 transition-colors hover:border-primary/30">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-3xl font-bold text-primary/80">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold uppercase tracking-wide text-foreground">{t(`ecossistema.layers.${key}.name`)}</h3>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mt-1">
                          {t(`ecossistema.layers.${key}.tag`)} · {t(`ecossistema.layers.${key}.status`)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t(`ecossistema.layers.${key}.desc`)}</p>

                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground/70 mb-3">{t("ecossistema.artifactsLabel")}</p>
                    <div className="grid gap-2 sm:grid-cols-2 mb-6">
                      {meta.artifacts.map((art) => (
                        <div key={art} className="border-l-2 border-primary/20 pl-3 py-1">
                          <p className="text-sm text-foreground/80">{t(`ecossistema.layers.${key}.${art}`)}</p>
                        </div>
                      ))}
                    </div>

                    <NavLink to={meta.to} className="inline-flex items-center gap-2 border border-border/40 rounded px-4 py-2 bg-card/30 hover:bg-card/50 transition-colors">
                      <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
                        {t(`ecossistema.layers.${key}.cta`)}
                      </span>
                    </NavLink>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Estratégia de Circulação */}
          <AnimatedSection delay={0.5}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                {t("ecossistema.circulationLabel")}
              </p>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>{t("ecossistema.circulationP1")}</p>
                <p>{t("ecossistema.circulationP2")}</p>
              </div>
              <div className="mt-6">
                <NavLink to="/licenca" className="inline-flex items-center gap-2 border border-border/40 rounded px-4 py-2 bg-card/30 hover:bg-card/50 transition-colors">
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
                    {t("ecossistema.circulationCta")}
                  </span>
                </NavLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Ecossistema;