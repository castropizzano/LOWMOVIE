import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import { GitFork, Edit3, UserCheck, Award, Globe, Archive, Github, FileDown, Quote, Mail, ExternalLink } from "lucide-react";
import SeoHead from "@/components/SeoHead";

const Replicar = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: GitFork, key: "step1", code: "git clone https://github.com/castropizzano/lowmovie.git\ncd lowmovie\nnpm install\nnpm run dev" },
    { icon: Edit3, key: "step2", code: "src/i18n/locales/   ← textos (PT/EN)\nsrc/data/           ← timeline, conceitos, mapa\nsrc/pages/          ← páginas da dissertação\npublic/images/      ← imagens\npublic/docs/        ← PDFs e documentos" },
    { icon: UserCheck, key: "step3", code: "CITATION.cff           ← autoria, DOI, ORCID\nsrc/components/Layout.tsx  ← Lattes, banca, orientador\nindex.html             ← meta tags, título, OG" },
    { icon: Award, key: "step4", code: "1. Acesse zenodo.org → conta com ORCID\n2. Settings → GitHub → ative seu repositório\n3. Crie um Release no GitHub (v1.0.0)\n4. Zenodo gera DOI permanente automaticamente" },
    { icon: Globe, key: "step5", code: "Lovable    → publish no editor (1 clique)\nVercel     → vercel deploy\nNetlify    → netlify deploy --prod\nGH Pages   → npm run build && deploy /dist" },
    { icon: Archive, key: "step6", code: "bash scripts/archive.sh\n→ gera LOWMOVIE_ARCHIVE/ com:\n  • espelho offline (HTML estático)\n  • git bundle (histórico)\n  • mídias originais\n  • manifests SHA256" },
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
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
              {t("replicar.manifesto")}
            </p>
          </div>
        </AnimatedSection>

        {/* Diagrama */}
        <AnimatedSection className="mb-16">
          <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-6">
            {t("replicar.architectureTitle")}
          </h3>
          <div className="border border-border/50 rounded-lg p-4 md:p-8 bg-muted/10 overflow-x-auto">
            <pre className="text-[11px] md:text-xs font-mono text-muted-foreground leading-loose whitespace-pre">
{`   GitHub (código)  ←→  Lovable (editor visual)
              ↓
        Portal Web (apresentação)
              ↓
   Zenodo (DOI)  +  ORCID  +  Lattes
              ↓
   Google Drive (mídias)  +  Wayback Machine`}
            </pre>
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
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
            <a
              href="https://github.com/castropizzano/lowmovie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border/50 rounded-lg p-4 hover:border-primary/40 hover:bg-muted/20 transition-all group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaRepo")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
            <a
              href="https://github.com/castropizzano/lowmovie/blob/main/PRESERVATION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border/50 rounded-lg p-4 hover:border-primary/40 hover:bg-muted/20 transition-all group"
            >
              <FileDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaPreservation")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
            <a
              href="https://doi.org/10.5281/zenodo.18950438"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border/50 rounded-lg p-4 hover:border-primary/40 hover:bg-muted/20 transition-all group"
            >
              <Quote className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaCite")}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
            <a
              href="mailto:castropizzano@gmail.com?subject=LowMovie%20Portal%20-%20Replication"
              className="flex items-center gap-3 border border-border/50 rounded-lg p-4 hover:border-primary/40 hover:bg-muted/20 transition-all group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground flex-1">{t("replicar.ctaContact")}</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Replicar;
