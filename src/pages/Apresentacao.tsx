import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";

const Apresentacao = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("apresentacao.title")} subtitle={t("apresentacao.subtitle")} />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify">
              <p>{t("apresentacao.p1")}</p>
              <p>{t("apresentacao.p2")}</p>
              <p>{t("apresentacao.p3")}</p>
              <p>{t("apresentacao.p4")}</p>
            </div>
          </AnimatedSection>

          {/* Pergunta Central */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {t("apresentacao.centralQuestion")}
              </p>
              <p className="text-lg font-normal leading-relaxed italic text-foreground/80 mb-6">
                {t("apresentacao.question")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t("apresentacao.questionNote")}
              </p>

              {/* Objetivos Específicos */}
              <div className="border-t border-border/50 pt-6 mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {t("apresentacao.specificObjectives")}
                </p>
                <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                  {(["obj1", "obj2", "obj3", "obj4"] as const).map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                      <span>{t(`apresentacao.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  {t("apresentacao.syntheticAnswer")}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t("apresentacao.answer")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Lugar de Fala */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
              {t("apresentacao.lugarDeFala")}
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
              <p>{t("apresentacao.lugarP1")}</p>
              <p>{t("apresentacao.lugarP2")}</p>
              <p>{t("apresentacao.lugarP3")}</p>
            </div>
          </AnimatedSection>

          {/* Justificativa */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
              {t("apresentacao.justificativa")}
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
              <p>{t("apresentacao.justP1")}</p>
              <p>{t("apresentacao.justP2")}</p>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/metodologia" label={t("apresentacao.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Apresentacao;
