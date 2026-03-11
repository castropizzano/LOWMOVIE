import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";

const eixoKeys = ["afeto", "escuta", "improviso"] as const;
const opKeys = ["period", "instruments", "analysis", "positioning", "collection", "organization"] as const;

const Metodologia = () => {
  const { t } = useTranslation();
  return (
    <Layout>
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

          <NextSectionButton to="/estrutura" label={t("metodologia.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
