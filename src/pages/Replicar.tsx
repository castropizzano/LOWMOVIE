import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { GitFork, Edit3, UserCheck, Award, Globe, Archive, Github, FileDown, Quote, Mail, ExternalLink } from "lucide-react";
import SeoHead from "@/components/SeoHead";

const Replicar = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: GitFork, key: "step1", code: "git clone https://github.com/castropizzano/lowmovie.git\ncd lowmovie\nnpm ci\nnpm run dev" },
    { icon: Edit3, key: "step2", code: t("replicar.step2.code") },
    { icon: UserCheck, key: "step3", code: t("replicar.step3.code") },
    { icon: Award, key: "step4", code: t("replicar.step4.code") },
    { icon: Globe, key: "step5", code: t("replicar.step5.code") },
    { icon: Archive, key: "step6", code: t("replicar.step6.code") },
  ];

  return (
    <Layout>
      <SeoHead route="/replicar" />
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        <SectionTitle title={t("replicar.title")} subtitle={t("replicar.subtitle")} />
        <AnimatedSection className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {t("replicar.brandTagline")}
          </p>
        </AnimatedSection>

        {/* Manifesto */}
        <AnimatedSection className="mb-16">
          <div className="border border-border/50 rounded-lg p-6 md:p-8 bg-muted/20">
            <p className="reading-measure text-sm md:text-base text-foreground/90 leading-relaxed">
              {t("replicar.manifesto")}
            </p>
          </div>
        </AnimatedSection>

        {/* Diagrama */}
        <AnimatedSection className="mb-16">
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.architectureTitle")}
          </h3>
          <div className="border border-border/50 p-4 md:p-8 bg-muted/10 text-sm text-muted-foreground">
            <ol className="space-y-3" aria-label={t("replicar.architectureTitle")}>
              <li>{t("replicar.architecture.editing")} <span aria-hidden="true">→</span> {t("replicar.architecture.portal")}</li>
              <li>{t("replicar.architecture.code")}</li>
              <li>{t("replicar.architecture.identity")}</li>
              <li>{t("replicar.architecture.thesis")}</li>
              <li>{t("replicar.architecture.media")}</li>
              <li>{t("replicar.architecture.archive")}</li>
            </ol>
          </div>
        </AnimatedSection>

        {/* Etapas */}
        <AnimatedSection className="mb-16">
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.stepsTitle")}
          </h3>
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  className="border border-border/50 rounded-lg p-6 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-3xl font-bold text-primary/60 group-hover:text-primary transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm md:text-base font-bold uppercase tracking-wider text-foreground mb-2">
                        {t(`replicar.${step.key}.title`)}
                      </h4>
                      <p className="reading-measure text-sm text-muted-foreground leading-relaxed mb-4">
                        {t(`replicar.${step.key}.desc`)}
                      </p>
                      <pre className="text-[11px] md:text-xs font-mono bg-muted/40 border border-border/30 rounded p-3 overflow-x-auto text-foreground/80 whitespace-pre">
                        {step.code}
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Stack */}
        <AnimatedSection className="mb-16">
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.stackTitle")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "i18next", "React Router"].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-bold uppercase tracking-widest border border-border/60 rounded px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            {t("replicar.stackNote")}
          </p>
        </AnimatedSection>

        {/* Licença */}
        <AnimatedSection className="mb-16">
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.licenseTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-border/50 rounded-lg p-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                {t("replicar.codeReuse")}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("replicar.codeReuseDesc")}
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                {t("replicar.contentRights")}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("replicar.contentRightsDesc")}
              </p>
            </div>
          </div>
          <div className="mt-4 border border-primary/30 rounded-lg p-4 bg-primary/5">
            <p className="text-xs font-mono text-foreground/80 leading-relaxed">
              {t("replicar.attributionRequest")}
            </p>
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection>
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.ctaTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Button asChild variant="outline" className="flex items-center gap-3 border border-primary/40 rounded-lg p-4 bg-primary/10 hover:bg-primary/20 transition-all group"><a
              href="https://github.com/castropizzano/lowmovie"
              target="_blank"
              rel="noopener noreferrer"

            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaRepo")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a></Button>
            <Button asChild variant="outline" className="flex items-center gap-3 border border-primary/40 rounded-lg p-4 bg-primary/10 hover:bg-primary/20 transition-all group"><a
              href="https://github.com/castropizzano/lowmovie/blob/main/PRESERVATION.md"
              target="_blank"
              rel="noopener noreferrer"

            >
              <FileDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaPreservation")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a></Button>
            <Button asChild variant="outline" className="flex items-center gap-3 border border-primary/40 rounded-lg p-4 bg-primary/10 hover:bg-primary/20 transition-all group"><a
              href="https://doi.org/10.5281/zenodo.20619076"
              target="_blank"
              rel="noopener noreferrer"

            >
              <Quote className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaCite")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a></Button>
            <Button asChild variant="outline" className="flex items-center gap-3 border border-primary/40 rounded-lg p-4 bg-primary/10 hover:bg-primary/20 transition-all group"><a
              href="mailto:castropizzano@gmail.com?subject=LowMovie%20Portal%20-%20Replication"

            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaContact")}</span>
            </a></Button>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Replicar;
