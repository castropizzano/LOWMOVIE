import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

const licenseKeys = ["lowmovie", "lowbyrinth", "lowrunner"] as const;

const Licenca = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SeoHead route="/licenca" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("licenca.title")} subtitle={t("licenca.subtitle")} />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("licenca.intro1")}</p>
              <p>{t("licenca.intro2")}</p>
            </div>
          </AnimatedSection>

          <div className="space-y-6 mb-16">
            {licenseKeys.map((key, i) => (
              <AnimatedSection key={key} delay={0.1 + i * 0.1}>
                <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 transition-colors hover:border-primary/30">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">{t(`licenca.items.${key}.name`)}</h3>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{t(`licenca.items.${key}.tag`)}</span>
                  </div>
                  <p className="text-xs font-mono text-foreground/70 mb-4">{t(`licenca.items.${key}.license`)}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`licenca.items.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Marcas Registradas */}
          <AnimatedSection delay={0.4}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                {t("licenca.trademarksLabel")}
              </p>
              <div className="grid gap-3 sm:grid-cols-3 mb-6">
                {(["lowmovie", "lowbyrinth", "lowrunner"] as const).map((m) => (
                  <div key={m} className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground">{t(`licenca.trademarks.${m}`)}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed text-justify">{t("licenca.trademarksNote")}</p>
            </div>
          </AnimatedSection>

          {/* Contato Comercial */}
          <AnimatedSection delay={0.5}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {t("licenca.contactLabel")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("licenca.contactDesc")}</p>
              <a
                href="mailto:castropizzano@gmail.com?subject=Licenciamento%20-%20Lowbyrinth%20%2F%20Low%20Runner"
                className="inline-flex items-center gap-2 border border-border/40 rounded px-4 py-3 bg-card/30 hover:bg-card/50 transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
                  {t("licenca.contactCta")}
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Licenca;