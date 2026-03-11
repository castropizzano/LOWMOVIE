import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";

const campoKeys = [
  { key: "urbano", refs: [{ key: "borden", name: "Iain Borden" }, { key: "mcduie", name: "McDuie-Ra" }] },
  { key: "estetica", refs: [{ key: "bourriaud", name: "Nicolas Bourriaud" }, { key: "hall", name: "Stuart Hall" }] },
  { key: "processo", refs: [{ key: "abreu", name: "Luis Alberto de Abreu" }, { key: "coessens", name: "Coessens / Pimentel / Moriceau" }] },
  { key: "cinema", refs: [{ key: "delpeux", name: "Delpeux" }, { key: "rouch", name: "Rouch / Deren / Deleuze" }] },
];

const conceitoKeys = ["lowbyrinth", "poetica", "borda", "fluxo", "fabulacao", "afeto"] as const;

const Conceitos = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("conceitos.title")} subtitle={t("conceitos.subtitle")} />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("conceitos.intro1")}</p>
              <p>{t("conceitos.intro2")}</p>
            </div>
          </AnimatedSection>

          {/* Mapa Conceitual de Autores */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-8 text-foreground">{t("conceitos.authorsMap")}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {campoKeys.map((grupo) => (
                <div key={grupo.key} className="border border-border rounded-lg p-6 md:p-8 bg-card/30">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t(`conceitos.campos.${grupo.key}`)}</p>
                  <div className="space-y-4">
                    {grupo.refs.map((ref) => (
                      <div key={ref.key}>
                        <p className="text-sm font-semibold text-foreground">{ref.name}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-1">{t(`conceitos.autores.${ref.key}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Conceitos Próprios */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-foreground">{t("conceitos.ownConcepts")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">{t("conceitos.ownConceptsNote")}</p>
            <div className="space-y-6">
              {conceitoKeys.map((key) => (
                <div key={key} className="border-l-2 border-primary/30 pl-6">
                  <p className="text-base font-semibold uppercase tracking-wide text-foreground mb-2">{t(`conceitos.concepts.${key}.name`)}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`conceitos.concepts.${key}.def`)}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Ética de Criação */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t("conceitos.ethicsTitle")}</p>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>{t("conceitos.ethicsP1")}</p>
                <p>{t("conceitos.ethicsP2")}</p>
                <p>{t("conceitos.ethicsP3")}</p>
              </div>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/filme" label={t("conceitos.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Conceitos;
