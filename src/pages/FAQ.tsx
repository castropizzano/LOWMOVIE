import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const qKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("questoes.title")} subtitle={t("questoes.subtitle")} />
          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">{t("questoes.intro")}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {qKeys.map((key, i) => (
                <AccordionItem
                  key={key}
                  value={`q-${i}`}
                  className="border border-border rounded-lg bg-card/30 px-6 transition-colors hover:border-primary/30 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold uppercase tracking-wide hover:no-underline py-5">
                    {t(`questoes.items.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed text-justify pb-5">
                    {t(`questoes.items.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
          <NextSectionButton to="/conclusao" label={t("questoes.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
