import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { useTranslation } from "react-i18next";

const keys = ["c1", "c2", "c3", "c4"] as const;

const Contribuicoes = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("contribuicoes.title")} subtitle={t("contribuicoes.subtitle")} />
          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">{t("contribuicoes.intro")}</p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {keys.map((key, i) => (
              <AnimatedSection key={key} delay={0.1 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                  <p className="text-xs font-semibold text-primary/60 tracking-widest mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">{t(`contribuicoes.items.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`contribuicoes.items.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <NextSectionButton to="/questoes" label={t("contribuicoes.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Contribuicoes;
