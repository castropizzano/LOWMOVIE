import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";

const movKeys = ["mov1", "mov2", "mov3"] as const;

const Estrutura = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("estrutura.title")} subtitle={t("estrutura.subtitle")} />

          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">{t("estrutura.intro")}</p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {movKeys.map((key, i) => {
              const subs = t(`estrutura.${key}.subs`, { returnObjects: true }) as string[];
              return (
                <AnimatedSection key={key} delay={0.1 + i * 0.15}>
                  <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                    <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">{t(`estrutura.${key}.title`)}</h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{t(`estrutura.${key}.subtitle`)}</p>
                    <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-6">{t(`estrutura.${key}.desc`)}</p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t("estrutura.subchapters")}</p>
                    <ul className="space-y-2">
                      {subs.map((item: string) => (
                        <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Considerações Finais */}
          <AnimatedSection delay={0.45} className="mt-16">
            <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">{t("estrutura.considerations.title")}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{t("estrutura.considerations.desc")}</p>
            </div>
          </AnimatedSection>

          {/* O Portal como Interface de Pesquisa */}
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-4">{t("estrutura.portal.title")}</h3>
              <div className="space-y-4 text-sm text-foreground/80 leading-relaxed text-justify">
                <p>{t("estrutura.portal.p1")}</p>
                <p>{t("estrutura.portal.p2")}</p>
                <ul className="space-y-3 ml-1">
                  {(["level1", "level2", "level3"] as const).map((lk) => (
                    <li key={lk} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      <span>{t(`estrutura.portal.${lk}`)}</span>
                    </li>
                  ))}
                </ul>
                <p>{t("estrutura.portal.p3")}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Operadores e Campo Simbólico */}
          <AnimatedSection delay={0.55} className="mt-16">
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">{t("estrutura.operators.title")}</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>{t("estrutura.operators.p1")}</p>
                <p>{t("estrutura.operators.p2")}</p>
                <p>{t("estrutura.operators.p3")}</p>
              </div>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/conceitos" label={t("estrutura.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
