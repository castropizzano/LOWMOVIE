import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import ImageLightbox from "@/components/ImageLightbox";
import { useTranslation } from "react-i18next";

const glossKeys = ["crew", "sessao", "spot", "shape", "tricks", "linha", "videoparte", "fulllength"] as const;

const Coletivo = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("coletivo.title")} subtitle={t("coletivo.subtitle")} />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("coletivo.p1")}</p>
              <p>{t("coletivo.p2")}</p>
              <p>{t("coletivo.p3")}</p>
              <p>{t("coletivo.p4")}</p>
              <p>{t("coletivo.p5")}</p>
              <p>{t("coletivo.p6")}</p>
              <p>{t("coletivo.p7")}</p>
            </div>
          </AnimatedSection>

          {/* Vocabulário do Skate */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">{t("coletivo.vocab")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t("coletivo.vocabNote")}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {glossKeys.map((key) => (
                <div key={key} className="border border-border rounded-lg p-4 bg-card/30 hover:border-primary/30 transition-colors">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-1">{t(`coletivo.glossary.${key}.term`)}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`coletivo.glossary.${key}.def`)}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">{t("coletivo.gallery")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
                const num = String(i).padStart(2, '0');
                return (
                  <ImageLightbox
                    key={i}
                    src={`/images/coletivo/${num}.png`}
                    alt={`${t("coletivo.gallery")} ${i}`}
                    aspectRatio="aspect-video"
                    imageClassName="object-contain bg-muted/20"
                  />
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16">
            <div className="border-l-2 border-primary/30 pl-6 md:pl-8">
              <p className="text-lg italic text-foreground/80">{t("coletivo.quote")}</p>
              <p className="text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-widest">{t("coletivo.quoteAuthor")}</p>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/contribuicoes" label={t("coletivo.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Coletivo;
