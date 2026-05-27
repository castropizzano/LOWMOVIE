import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

const eixoKeys = ["afeto", "escuta", "improviso"] as const;
const opKeys = ["period", "instruments", "analysis", "positioning", "collection", "organization"] as const;
const stepKeys = ["s1", "s2", "s3"] as const;
const archetypeKeys = ["instante", "borda", "fluxo"] as const;
const applicationKeys = ["classroom", "workshops", "reflective", "research"] as const;

const Metodologia = () => {
  const { t } = useTranslation();
  const operators = t("metodologia.toolkit.operators", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  return (
    <Layout>
      <SeoHead route="/metodologia" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("metodologia.title")} subtitle={t("metodologia.subtitle")} />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify mb-16">
              <p>{t("metodologia.intro")}</p>
              <p className="text-sm text-muted-foreground">{t("metodologia.refs")}</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {eixoKeys.map((key, i) => (
              <AnimatedSection key={key} delay={0.15 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30 h-full">
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">{t(`metodologia.eixos.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`metodologia.eixos.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Procedimentos de Campo */}
          <AnimatedSection delay={0.35}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                {t("metodologia.fieldProcedures")}
              </p>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                {(["vivencia", "convivencia", "escutaPartilhada"] as const).map((key) => (
                  <div key={key} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">{t(`metodologia.${key}.title`)}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`metodologia.${key}.desc`)}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                {t("metodologia.spiralNote")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-8">
                {t("metodologia.distinction")}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
                <div className="flex-1 text-center md:text-right">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">{t("metodologia.researchMethod")}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("metodologia.researchMethodSub")}</p>
                </div>
                <div className="text-3xl font-light text-primary/80">≠</div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">{t("metodologia.creationMethods")}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("metodologia.creationMethodsSub")}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("metodologia.distinctionP1")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4">{t("metodologia.distinctionP2")}</p>
            </div>
          </AnimatedSection>

          {/* Procedimentos Operacionais */}
          <AnimatedSection delay={0.5}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                {t("metodologia.operational")}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {opKeys.map((key) => (
                  <div key={key} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(`metodologia.opItems.${key}.label`)}</p>
                    <p className="text-sm text-foreground/80 mt-1">{t(`metodologia.opItems.${key}.value`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Toolkit Pedagógico */}
          <AnimatedSection delay={0.6}>
            <div className="mt-20 mb-12">
              <div className="h-px w-full bg-border/30 mb-12" />
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
                {t("metodologia.toolkit.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("metodologia.toolkit.subtitle")}</p>
              <div className="mt-4 h-px w-16 bg-primary/40" />
              <p className="mt-8 text-base leading-relaxed text-foreground/80 text-justify">
                {t("metodologia.toolkit.intro")}
              </p>
            </div>
          </AnimatedSection>

          {/* 5 Etapas */}
          <AnimatedSection delay={0.65}>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {t("metodologia.toolkit.stepsLabel")}
              </p>
              <p className="text-xs text-muted-foreground mb-6">{t("metodologia.toolkit.stepsNote")}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {stepKeys.map((key, i) => (
                  <div key={key} className="border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30 h-full">
                    <p className="text-3xl font-bold text-primary/80 mb-3">{String(i + 1).padStart(2, "0")}</p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">
                      {t(`metodologia.toolkit.steps.${key}.title`)}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t(`metodologia.toolkit.steps.${key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Espiral Cognitiva */}
          <AnimatedSection delay={0.7}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {t("metodologia.toolkit.spiralLabel")}
              </p>
              <p className="text-base md:text-lg font-mono text-foreground/90 text-center py-4 border-y border-border/40 my-4">
                {t("metodologia.toolkit.spiralDiagram")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4">
                {t("metodologia.toolkit.spiralDesc")}
              </p>
            </div>
          </AnimatedSection>

          {/* 4 Arquétipos */}
          <AnimatedSection delay={0.75}>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {t("metodologia.toolkit.archetypesLabel")}
              </p>
              <p className="text-xs text-muted-foreground mb-6">{t("metodologia.toolkit.archetypesNote")}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {archetypeKeys.map((key) => (
                  <div key={key} className="border border-border rounded-lg p-6 bg-card/30 transition-colors hover:border-primary/30 h-full">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-lg font-bold uppercase tracking-widest text-primary">
                        {t(`metodologia.toolkit.archetypes.${key}.title`)}
                      </span>
                      <span className="text-xs text-muted-foreground italic">
                        {t(`metodologia.toolkit.archetypes.${key}.subtitle`)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                      {t(`metodologia.toolkit.archetypes.${key}.desc`)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      {t(`metodologia.toolkit.archetypes.${key}.refs`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 10 Conceitos Operadores */}
          <AnimatedSection delay={0.8}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {t("metodologia.toolkit.operatorsLabel")}
              </p>
              <p className="text-xs text-muted-foreground mb-6">{t("metodologia.toolkit.operatorsNote")}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {operators.map((op, i) => (
                  <div key={i} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-sm font-semibold text-foreground/90">→ {op.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{op.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Aplicação Pedagógica */}
          <AnimatedSection delay={0.85}>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {t("metodologia.toolkit.applicationsLabel")}
              </p>
              <p className="text-xs text-muted-foreground mb-6">{t("metodologia.toolkit.applicationsNote")}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {applicationKeys.map((key) => (
                  <div key={key} className="border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30 h-full">
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">
                      {t(`metodologia.toolkit.applications.${key}.title`)}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                      {t(`metodologia.toolkit.applications.${key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Download */}
          <AnimatedSection delay={0.9}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20 text-center">
              <p className="text-xs text-muted-foreground italic mb-6">{t("metodologia.toolkit.openLabel")}</p>
              <a
                href="/docs/toolkit_metodologia_castro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors"
              >
                <span className="text-sm font-medium uppercase tracking-wide text-foreground/80">
                  {t("metodologia.toolkit.downloadCta")}
                </span>
              </a>
            </div>
          </AnimatedSection>

          {/* Como citar este método */}
          <AnimatedSection delay={0.95}>
            <div className="mt-16 border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                {t("metodologia.cite.label")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">
                {t("metodologia.cite.intro")}
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/70 mb-2">{t("metodologia.cite.methodLabel")}</p>
                  <p className="text-sm font-mono text-foreground/80 leading-relaxed">{t("metodologia.cite.methodAbnt")}</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/70 mb-2">{t("metodologia.cite.toolkitLabel")}</p>
                  <p className="text-sm font-mono text-foreground/80 leading-relaxed">{t("metodologia.cite.toolkitAbnt")}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mt-6 leading-relaxed">{t("metodologia.cite.note")}</p>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/estrutura" label={t("metodologia.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
